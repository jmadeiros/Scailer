import { google } from 'googleapis';
import { BookingFormData } from '@/components/HAL900-BookingForm';

const SCOPES = ['https://www.googleapis.com/auth/calendar'];
const CALENDAR_ID = process.env.GOOGLE_CALENDAR_ID || 'josh@scailer.io';

// Function to clean the private key
function cleanPrivateKey(key: string | undefined) {
  if (!key) {
    console.error('Private key is undefined');
    return '';
  }

  // Log raw key details
  console.log('Raw key analysis:', {
    totalLength: key.length,
    startsWithQuotes: key.startsWith('"'),
    endsWithQuotes: key.endsWith('"'),
    containsLiteralN: key.includes('\\n'),
    base64Section: key.match(/^[A-Za-z0-9+/=]+$/m)?.[0]?.substring(0, 20) + '...',
    lineCount: key.split('\\n').length,
  });

  // Remove quotes and initial cleanup
  let cleaned = key.replace(/^["']|["']$/g, '').trim();

  // Log after quote removal
  console.log('After quote removal:', {
    length: cleaned.length,
    firstChars: cleaned.substring(0, 20),
    lastChars: cleaned.substring(cleaned.length - 20),
    containsLiteralN: cleaned.includes('\\n'),
  });

  // Replace literal \n with actual newlines
  cleaned = cleaned.replace(/\\n/g, '\n');

  // Log after newline replacement
  console.log('After newline replacement:', {
    length: cleaned.length,
    lineCount: cleaned.split('\n').length,
    firstLine: cleaned.split('\n')[0],
    lastLine: cleaned.split('\n').slice(-1)[0],
    hasWindowsLineEndings: cleaned.includes('\r'),
    base64Lines: cleaned.split('\n')
      .filter(line => line.match(/^[A-Za-z0-9+/=]+$/))
      .map(line => line.substring(0, 20) + '...'),
  });

  // Ensure proper PEM format
  if (!cleaned.startsWith('-----BEGIN PRIVATE KEY-----')) {
    cleaned = '-----BEGIN PRIVATE KEY-----\n' + cleaned;
  }
  if (!cleaned.endsWith('-----END PRIVATE KEY-----')) {
    cleaned = cleaned + '\n-----END PRIVATE KEY-----';
  }

  // Final validation
  console.log('Final key validation:', {
    totalLength: cleaned.length,
    lineCount: cleaned.split('\n').length,
    hasCorrectHeader: cleaned.startsWith('-----BEGIN PRIVATE KEY-----'),
    hasCorrectFooter: cleaned.endsWith('-----END PRIVATE KEY-----'),
    base64ContentLength: cleaned.split('\n')
      .filter(line => line.match(/^[A-Za-z0-9+/=]+$/))
      .join('')
      .length,
    structureValid: cleaned.includes('-----BEGIN PRIVATE KEY-----\n') && 
                   cleaned.includes('\n-----END PRIVATE KEY-----'),
  });

  return cleaned;
}

// Create auth client
async function getAuthClient() {
  try {
    const privateKey = cleanPrivateKey(process.env.GOOGLE_PRIVATE_KEY);
    const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;

    if (!privateKey || !clientEmail) {
      throw new Error('Missing required environment variables for Google Calendar');
    }

    console.log('Creating JWT client with:', {
      emailLength: clientEmail.length,
      email: clientEmail,
      privateKeyLength: privateKey.length,
      scopes: SCOPES
    });

    const auth = new google.auth.JWT({
      email: clientEmail,
      key: privateKey,
      scopes: SCOPES,
    });

    // Test the credentials
    await auth.authorize();
    return auth;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Authentication error:', {
        message: error.message,
        name: error.name,
        stack: error.stack,
      });
    }
    throw new Error('Failed to authenticate with Google Calendar');
  }
}

export async function createCalendarEvent(
  formData: BookingFormData,
  selectedDate: Date,
  selectedTime: string
) {
  try {
    console.log('Starting calendar event creation with:', {
      formData,
      selectedDate: selectedDate.toISOString(),
      selectedTime,
      env: {
        hasPrivateKey: !!process.env.GOOGLE_PRIVATE_KEY,
        privateKeyLength: process.env.GOOGLE_PRIVATE_KEY?.length,
        hasClientEmail: !!process.env.GOOGLE_CLIENT_EMAIL,
        clientEmail: process.env.GOOGLE_CLIENT_EMAIL,
      }
    });

    const auth = await getAuthClient();
    console.log('Authentication successful');

    const calendar = google.calendar({ version: 'v3', auth });
    console.log('Calendar client created');

    const [hours, minutes] = selectedTime.split(':');
    console.log('Parsing time components:', { 
      selectedTime, 
      hours, 
      minutes, 
      parsedHours: parseInt(hours),
      parsedMinutes: parseInt(minutes)
    });
    
    const startTime = new Date(selectedDate);
    startTime.setHours(parseInt(hours), parseInt(minutes), 0);
    
    const endTime = new Date(startTime);
    endTime.setMinutes(endTime.getMinutes() + 30);

    console.log('Event time details:', {
      startTimeISO: startTime.toISOString(),
      endTimeISO: endTime.toISOString(),
      startTimeLocal: startTime.toString(),
      endTimeLocal: endTime.toString()
    });

    // Create a more detailed description that includes all client information
    const eventDescription = `
Strategy Session with ${formData.firstName} ${formData.lastName}

CLIENT DETAILS:
- Name: ${formData.firstName} ${formData.lastName}
- Phone: ${formData.phone}
- Email: ${formData.email}

ADDITIONAL INFORMATION:
${formData.additionalInfo || 'None provided'}

BOOKING DETAILS:
- Date: ${startTime.toLocaleDateString()}
- Time: ${startTime.toLocaleTimeString()} - ${endTime.toLocaleTimeString()}
- Duration: 30 minutes
`;

    const event = {
      summary: `Strategy Session with ${formData.firstName} ${formData.lastName}`,
      description: eventDescription,
      start: {
        dateTime: startTime.toISOString(),
        timeZone: 'Europe/London',
      },
      end: {
        dateTime: endTime.toISOString(),
        timeZone: 'Europe/London',
      }
    };

    console.log('Attempting to create calendar event:', {
      summary: event.summary,
      startTime: event.start.dateTime,
      endTime: event.end.dateTime
    });

    const response = await calendar.events.insert({
      auth,
      calendarId: CALENDAR_ID,
      requestBody: event,
      conferenceDataVersion: 1
    });

    console.log('Calendar event created successfully:', {
      id: response.data.id,
      htmlLink: response.data.htmlLink,
      status: response.data.status,
      created: response.data.created
    });

    return response.data;
  } catch (error: unknown) {
    console.error('Calendar API error:', {
      error: error instanceof Error ? error.message : 'Unknown error',
      name: error instanceof Error ? error.name : 'Unknown',
      stack: error instanceof Error ? error.stack : undefined,
    });
    throw error;
  }
} 