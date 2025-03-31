import { NextResponse } from 'next/server';
import { google } from 'googleapis';

const SCOPES = ['https://www.googleapis.com/auth/calendar'];
const CALENDAR_ID = process.env.GOOGLE_CALENDAR_ID || 'josh@scailer.io';

async function getAuthClient() {
  console.log('Environment check:', {
    hasCalendarId: !!process.env.GOOGLE_CALENDAR_ID,
    hasPrivateKey: !!process.env.GOOGLE_PRIVATE_KEY,
    hasClientEmail: !!process.env.GOOGLE_CLIENT_EMAIL,
    calendarIdUsed: CALENDAR_ID
  });

  const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');
  const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;

  if (!privateKey || !clientEmail) {
    console.error('Missing required environment variables:', {
      hasPrivateKey: !!privateKey,
      hasClientEmail: !!clientEmail
    });
    throw new Error('Missing required environment variables for Google Calendar');
  }

  try {
    const auth = new google.auth.JWT({
      email: clientEmail,
      key: privateKey,
      scopes: SCOPES,
    });

    console.log('Attempting to authorize with Google...');
    await auth.authorize();
    console.log('Google authorization successful');
    return auth;
  } catch (error) {
    console.error('Google authorization failed:', error);
    throw error;
  }
}

export async function POST(request: Request) {
  try {
    console.log('Starting calendar event creation...');
    
    // Safely parse the request body
    let requestBody;
    try {
      requestBody = await request.json();
      console.log('Request body parsed successfully');
    } catch (parseError) {
      console.error('Failed to parse request body:', parseError);
      return NextResponse.json(
        { error: 'Invalid request format' },
        { status: 400 }
      );
    }
    
    const { formData, selectedDate, selectedTime } = requestBody;
    console.log('TIMEZONE DEBUG: Local timezone:', Intl.DateTimeFormat().resolvedOptions().timeZone);
    console.log('TIMEZONE DEBUG: Current server time:', new Date().toISOString());
    console.log('TIMEZONE DEBUG: Current local time string:', new Date().toString());
    console.log('DATE FORMAT DEBUG: Received date format:', { 
      selectedDate, 
      type: typeof selectedDate,
      selectedTime,
      typeTime: typeof selectedTime
    });

    console.log('CALENDAR SOURCE DEBUG: Raw calendar data before processing', {
      selectedDate,
      selectedTime,
      receivedFormData: formData ? Object.keys(formData) : 'null',
    });

    console.log('Getting auth client...');
    const auth = await getAuthClient();
    console.log('Auth client obtained successfully');

    const calendar = google.calendar({ version: 'v3', auth });
    console.log('Calendar client created');

    // Parse the date correctly to avoid timezone issues
    console.log('DATE DEBUG: Original date string:', selectedDate);
    
    // Test direct date construction first - this is how it was failing
    const directDate = new Date(selectedDate);
    console.log('DATE DEBUG: Direct construction result:', {
      date: directDate.toISOString(),
      localString: directDate.toString(),
      getDate: directDate.getDate(),
      getMonth: directDate.getMonth() + 1, // 0-indexed, so add 1
      getFullYear: directDate.getFullYear(),
    });
    
    // Get date parts from the date string (YYYY-MM-DD format)
    let year, month, day;
    
    // Check if selectedDate is a full ISO string or just a date portion
    if (selectedDate.includes('T')) {
      // It's a full ISO string like "2025-04-01T00:00:00.000Z"
      const dateObj = new Date(selectedDate);
      year = dateObj.getUTCFullYear();
      month = dateObj.getUTCMonth() + 1; // 0-indexed
      day = dateObj.getUTCDate();
    } else {
      // It's just the date portion like "2025-04-01"
      [year, month, day] = selectedDate.split('-').map((num: string) => parseInt(num, 10));
    }
    
    console.log('DATE DEBUG: Parsed date components:', { year, month, day });
    
    // Create date using UTC to avoid timezone issues
    // This ensures the date is created exactly as specified without timezone adjustments
    const startTime = new Date(Date.UTC(year, month - 1, day));
    console.log('DATE DEBUG: Date after parsing using UTC:', startTime.toISOString());
    
    // Set the hours and minutes, also using UTC
    // Parse time correctly accounting for AM/PM format
    let hours = 0;
    let minutes = 0;
    
    // Check if time includes AM/PM format
    if (selectedTime.includes('AM') || selectedTime.includes('PM')) {
      // Parse time in 12-hour format (e.g., "11:00 AM")
      const timeMatch = selectedTime.match(/(\d+):(\d+)\s*(AM|PM)/i);
      
      if (timeMatch) {
        let parsedHours = parseInt(timeMatch[1], 10);
        minutes = parseInt(timeMatch[2], 10);
        const period = timeMatch[3].toUpperCase();
        
        // Convert to 24-hour format
        if (period === 'PM' && parsedHours < 12) {
          parsedHours += 12;
        } else if (period === 'AM' && parsedHours === 12) {
          parsedHours = 0;
        }
        
        hours = parsedHours;
      }
    } else {
      // Parse time in 24-hour format (e.g., "11:00")
      const timeMatch = selectedTime.match(/(\d+):(\d+)/);
      
      if (timeMatch) {
        hours = parseInt(timeMatch[1], 10);
        minutes = parseInt(timeMatch[2], 10);
      }
    }
    
    console.log('TIME DEBUG: Parsed time components:', { hours, minutes, originalTime: selectedTime });
    
    // Use UTC methods to set time
    startTime.setUTCHours(hours, minutes, 0, 0);
    console.log('DATE DEBUG: Final start time:', startTime.toISOString());
    console.log('DATE DEBUG: Final start time (local string):', startTime.toString());
    
    // Calculate end time correctly (handling hour overflow)
    let endHours = hours;
    let endMinutes = minutes + 30;
    
    // Handle minute overflow
    if (endMinutes >= 60) {
      endHours = (endHours + 1) % 24;
      endMinutes = endMinutes - 60;
    }
    
    // Create date using UTC to avoid timezone issues
    // This ensures the date is created exactly as specified without timezone adjustments
    const endTime = new Date(Date.UTC(year, month - 1, day));
    endTime.setUTCHours(endHours, endMinutes, 0, 0);
    console.log('DATE DEBUG: Final end time:', endTime.toISOString());

    // For comparison, test a few alternative approaches to setting the event time 
    
    const eventDescription = `
Strategy Session with ${formData.firstName} ${formData.lastName}

CLIENT DETAILS:
- Name: ${formData.firstName} ${formData.lastName}
- Phone: ${formData.phone || "Not provided"}
- Email: ${formData.email}

ADDITIONAL INFORMATION:
${formData.additionalInfo || 'None provided'}

BOOKING DETAILS:
- Date: ${startTime.toLocaleDateString()}
- Time: ${startTime.toLocaleTimeString()} - ${endTime.toLocaleTimeString()}
- Duration: 30 minutes
`;

    // Try multiple approaches for event creation
    
    // APPROACH 1: Using our string-based date formatting (current approach)
    const eventApproach1 = {
      summary: `Strategy Session with ${formData.firstName} ${formData.lastName}`,
      description: eventDescription,
      start: {
        dateTime: `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}T${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:00`,
        timeZone: 'Europe/London',
      },
      end: {
        dateTime: `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}T${String(endHours).padStart(2, '0')}:${String(endMinutes).padStart(2, '0')}:00`,
        timeZone: 'Europe/London',
      }
    };
    
    // APPROACH 2: Using date objects with explicit timezone handling
    const startDate = new Date(Date.UTC(year, month - 1, day, hours, minutes, 0));
    const endDate = new Date(Date.UTC(year, month - 1, day, endHours, endMinutes, 0));
    
    const eventApproach2 = {
      summary: `Strategy Session with ${formData.firstName} ${formData.lastName}`,
      description: eventDescription,
      start: {
        dateTime: startDate.toISOString(),
        timeZone: 'Europe/London',
      },
      end: {
        dateTime: endDate.toISOString(),
        timeZone: 'Europe/London',
      }
    };
    
    // APPROACH 3: Using Google's recommended date-only format for all-day events
    // While our event isn't all-day, this tests if the date formatting is affecting the issue
    const eventApproach3 = {
      summary: `Strategy Session with ${formData.firstName} ${formData.lastName} (All Day Test)`,
      description: eventDescription,
      start: {
        date: `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`,
        timeZone: 'Europe/London',
      },
      end: {
        date: `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`,
        timeZone: 'Europe/London',
      }
    };
    
    // APPROACH 4: Date string with timezone offset
    const londonOffset = '+01:00'; // Adjust based on daylight saving time
    const eventApproach4 = {
      summary: `Strategy Session with ${formData.firstName} ${formData.lastName} (With TZ Offset)`,
      description: eventDescription,
      start: {
        dateTime: `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}T${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:00${londonOffset}`,
        timeZone: 'Europe/London',
      },
      end: {
        dateTime: `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}T${String(endHours).padStart(2, '0')}:${String(endMinutes).padStart(2, '0')}:00${londonOffset}`,
        timeZone: 'Europe/London',
      }
    };
    
    console.log('DEBUGGING MULTIPLE APPROACHES:');
    console.log('Approach 1 (String formatting):', JSON.stringify(eventApproach1, null, 2));
    console.log('Approach 2 (UTC ISO strings):', JSON.stringify(eventApproach2, null, 2));
    console.log('Approach 3 (All-day format):', JSON.stringify(eventApproach3, null, 2));
    console.log('Approach 4 (With timezone offset):', JSON.stringify(eventApproach4, null, 2));
    
    // Use approach 4 as our event object
    const event = eventApproach4;

    // Log the exact event data being sent to Google Calendar
    console.log('CALENDAR EVENT DEBUG: Final event data:', JSON.stringify(event, null, 2));
    
    // Safely make the API call
    let response;
    try {
      response = await calendar.events.insert({
        auth,
        calendarId: CALENDAR_ID,
        requestBody: event,
        conferenceDataVersion: 1
      });
      console.log('Calendar event creation response metadata:', {
        status: response.status,
        statusText: response.statusText,
        headers: response.headers
      });
      
      // Add detailed logging about the created event response data
      console.log('CALENDAR EVENT DEBUG: Created event detailed response:', {
        id: response.data.id,
        htmlLink: response.data.htmlLink,
        startTime: response.data.start,
        endTime: response.data.end,
        timeZone: response.data.start?.timeZone,
        created: response.data.created,
        updated: response.data.updated,
        status: response.data.status
      });
      
      // Attempt to analyze the calendar link for date issues
      try {
        if (response.data.htmlLink) {
          console.log('CALENDAR LINK DEBUG: Analyzing calendar link', {
            fullLink: response.data.htmlLink,
            // Extract dates from URL if possible
            datesParam: new URL(response.data.htmlLink).searchParams.get('dates'),
            // Compare with our intended dates
            intendedStartTimeISO: startTime.toISOString(),
            linkStartTime: response.data.start?.dateTime
          });
          
          // Try to extract and parse dates from the link to identify any mismatch
          const url = new URL(response.data.htmlLink);
          const datesParam = url.searchParams.get('dates');
          
          if (datesParam) {
            console.log('CALENDAR LINK ANALYSIS: Date parameter found:', datesParam);
            
            // Google Calendar links often use format: YYYYMMDDTHHMMSSZ/YYYYMMDDTHHMMSSZ
            const dateParts = datesParam.split('/');
            if (dateParts.length >= 1) {
              try {
                // Extract date components from the link parameter
                const startDateParam = dateParts[0];
                const endDateParam = dateParts.length > 1 ? dateParts[1] : '';
                
                // Try to decode the date format (typically YYYYMMDDTHHMMSSZ)
                const linkYear = startDateParam.substring(0, 4);
                const linkMonth = startDateParam.substring(4, 6);
                const linkDay = startDateParam.substring(6, 8);
                const linkTime = startDateParam.substring(9);
                
                console.log('LINK DATE COMPARISON:', {
                  // Our intended date components
                  intendedYear: year,
                  intendedMonth: month,
                  intendedDay: day,
                  intendedHours: hours,
                  intendedMinutes: minutes,
                  
                  // Date from the link
                  linkYear, 
                  linkMonth,
                  linkDay,
                  linkTime,
                  
                  // Direct comparison
                  yearMatches: year.toString() === linkYear,
                  monthMatches: month.toString().padStart(2, '0') === linkMonth,
                  dayMatches: day.toString().padStart(2, '0') === linkDay,
                  
                  // Full link parameters
                  startDateParam,
                  endDateParam,
                  
                  // Date strings for comparison
                  ourDateString: `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`,
                  linkDateString: `${linkYear}-${linkMonth}-${linkDay}`,
                });
              } catch (parseError) {
                console.error('Error parsing calendar link date components:', parseError);
              }
            }
          } else {
            console.log('CALENDAR LINK ANALYSIS: No dates parameter found in link');
          }
          
          // Additional useful debugging
          console.log('RESPONSE DATA ANALYSIS:', {
            id: response.data.id,
            kind: response.data.kind,
            status: response.data.status,
            created: response.data.created,
            updated: response.data.updated,
            summary: response.data.summary,
            startObj: response.data.start,
            startRaw: JSON.stringify(response.data.start),
            endObj: response.data.end,
            iCalUID: response.data.iCalUID
          });
        }
      } catch (linkAnalysisError) {
        console.error('Error analyzing calendar link:', linkAnalysisError);
      }
    } catch (apiError) {
      console.error('Google Calendar API error:', apiError);
      return NextResponse.json(
        { error: apiError instanceof Error ? apiError.message : 'Failed to create calendar event' },
        { status: 500 }
      );
    }

    // Safely return the response
    try {
      return NextResponse.json(response.data);
    } catch (jsonError) {
      console.error('Error serializing response:', jsonError);
      return NextResponse.json(
        { error: 'Error processing response from Google Calendar' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Calendar API error:', error);
    
    // Check for specific error types
    if (error instanceof Error) {
      if (error.message.includes('auth')) {
        return NextResponse.json(
          { error: 'Authentication failed. Please check your Google Calendar credentials.' },
          { status: 401 }
        );
      }
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }
    
    // Handle non-Error objects
    return NextResponse.json(
      { error: 'An unexpected error occurred while creating the calendar event' },
      { status: 500 }
    );
  }
} 