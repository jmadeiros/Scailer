import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    console.log("Book session API called with data:", {
      formData: data.formData ? "Present" : "Missing",
      selectedDate: data.selectedDate,
      selectedTime: data.selectedTime
    });
    
    // Get the Firebase Functions base URL
    const isProduction = process.env.NODE_ENV === 'production';
    const functionsBaseUrl = isProduction 
      ? 'https://europe-west1-scailertest-37078.cloudfunctions.net'
      : 'http://localhost:5001/scailertest-37078/europe-west1';
    
    console.log("Using Firebase Functions base URL:", functionsBaseUrl);
    console.log("Calling calendarPrecise function at:", `${functionsBaseUrl}/calendarPrecise`);
    
    // Format the date correctly for the API if needed
    let formattedDate = data.selectedDate;
    if (data.selectedDate instanceof Date) {
      formattedDate = `${data.selectedDate.getFullYear()}-${String(data.selectedDate.getMonth() + 1).padStart(2, '0')}-${String(data.selectedDate.getDate()).padStart(2, '0')}`;
    } else if (typeof data.selectedDate === 'string' && !data.selectedDate.includes('-')) {
      // Try to parse and format
      try {
        const dateObj = new Date(data.selectedDate);
        formattedDate = `${dateObj.getFullYear()}-${String(dateObj.getMonth() + 1).padStart(2, '0')}-${String(dateObj.getDate()).padStart(2, '0')}`;
      } catch (e) {
        console.error("Error formatting date:", e);
      }
    }
    
    console.log("Calendar parameters:", {
      formattedDate,
      selectedTime: data.selectedTime
    });
    
    // Call the calendarPrecise Firebase Function
    const calendarResponse = await fetch(`${functionsBaseUrl}/calendarPrecise`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        formData: data.formData,
        selectedDate: formattedDate,
        selectedTime: data.selectedTime,
      }),
    });

    // Log the raw response before trying to parse it
    const rawCalendarResponse = await calendarResponse.text();
    console.log("Raw calendar function response:", {
      status: calendarResponse.status,
      statusText: calendarResponse.statusText,
      responseText: rawCalendarResponse.substring(0, 200) // Log first 200 chars
    });
    
    if (!calendarResponse.ok) {
      throw new Error(`Failed to create calendar event: ${calendarResponse.status} ${calendarResponse.statusText} - ${rawCalendarResponse.substring(0, 100)}`);
    }

    // Parse the response as JSON
    let calendarResult;
    try {
      calendarResult = JSON.parse(rawCalendarResponse);
      console.log("Calendar function success:", calendarResult);
    } catch (jsonError) {
      console.error("Failed to parse calendar function response as JSON:", jsonError);
      throw new Error("Invalid JSON response from calendar function");
    }

    // Add detailed logging for calendar link analysis
    console.log("CALENDAR LINK DEBUG: Full details", {
      fullLink: calendarResult.htmlLink,
      linkType: typeof calendarResult.htmlLink,
    });

    // Attempt to parse dates from the calendar link
    try {
      // Most Google Calendar links follow the format: https://www.google.com/calendar/event?eid=XXX&dates=YYYYMMDDTHHMMSSZ/YYYYMMDDTHHMMSSZ
      const dateParamMatch = calendarResult.htmlLink?.match(/dates=([^/&]+)%2F([^/&]+)/);
      
      if (dateParamMatch && dateParamMatch.length >= 3) {
        const startDateParam = dateParamMatch[1]; // Format: YYYYMMDDTHHMMSSZ
        const endDateParam = dateParamMatch[2];
        
        // Extract date parts more clearly
        const startYear = startDateParam.substring(0, 4);
        const startMonth = startDateParam.substring(4, 6);
        const startDay = startDateParam.substring(6, 8);
        const startHour = startDateParam.substring(9, 11);
        const startMinute = startDateParam.substring(11, 13);
        
        // Create date objects in different ways for comparison
        const parsedStartDate = new Date(
          `${startYear}-${startMonth}-${startDay}T${startHour}:${startMinute}:00Z`
        );
        
        // Get original booking date for comparison
        const [bookingYear, bookingMonth, bookingDay] = formattedDate.split('-');
        const bookingDate = new Date(parseInt(bookingYear), parseInt(bookingMonth) - 1, parseInt(bookingDay));
        
        console.log("CALENDAR LINK DEBUG: Date comparison", {
          originalBookingDate: {
            date: formattedDate,
            year: bookingYear,
            month: bookingMonth,
            day: bookingDay,
            formatted: bookingDate.toISOString()
          },
          calendarLinkDate: {
            startDateParam,
            year: startYear,
            month: startMonth,
            day: startDay,
            hour: startHour,
            minute: startMinute,
            parsed: parsedStartDate.toISOString(),
            localString: parsedStartDate.toString()
          },
          dateDifferenceInDays: Math.round((parsedStartDate.getTime() - bookingDate.getTime()) / (1000 * 60 * 60 * 24)),
          userTimezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
          browserOffset: new Date().getTimezoneOffset()
        });
      } else {
        console.log("CALENDAR LINK DEBUG: Could not extract date parameters from link");
      }
    } catch (linkParseError) {
      console.error("CALENDAR LINK DEBUG: Error parsing calendar link:", linkParseError);
    }

    // Send email notification
    console.log("Calling sendBookingEmails function at:", `${functionsBaseUrl}/sendBookingEmails`);
    
    const emailPayload = {
      formData: data.formData,
      selectedDate: formattedDate,
      selectedTime: data.selectedTime,
      calendarLink: calendarResult.htmlLink,
    };
    
    console.log("Email payload:", JSON.stringify({
      formData: {
        firstName: data.formData.firstName,
        lastName: data.formData.lastName,
        email: data.formData.email,
        hasPhone: !!data.formData.phone,
        hasAdditionalInfo: !!data.formData.additionalInfo
      },
      selectedDate: formattedDate,
      selectedTime: data.selectedTime,
      hasCalendarLink: !!calendarResult.htmlLink
    }));
    
    const emailResponse = await fetch(`${functionsBaseUrl}/sendBookingEmails`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailPayload),
    });

    // Log the raw response before trying to parse it
    const rawEmailResponse = await emailResponse.text();
    console.log("Raw email function response:", {
      status: emailResponse.status,
      statusText: emailResponse.statusText,
      contentType: emailResponse.headers.get('content-type'),
      responseText: rawEmailResponse.substring(0, 200) // Log first 200 chars
    });
    
    if (!emailResponse.ok) {
      throw new Error(`Failed to send email notification: ${emailResponse.status} ${emailResponse.statusText} - ${rawEmailResponse.substring(0, 100)}`);
    }

    // Parse the response as JSON only if it's valid JSON
    let emailResult;
    try {
      emailResult = JSON.parse(rawEmailResponse);
      console.log("Email function success:", emailResult);
    } catch (jsonError) {
      console.error("Failed to parse email function response as JSON:", jsonError);
      throw new Error("Invalid JSON response from email function");
    }

    return NextResponse.json({
      success: true,
      calendar: calendarResult,
      email: emailResult,
    });
  } catch (error: unknown) {
    console.error('Error in book-session:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { error: 'Failed to process booking', details: errorMessage },
      { status: 500 }
    );
  }
} 