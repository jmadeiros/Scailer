import { NextResponse } from 'next/server';
import { createCalendarEvent } from '@/lib/google-calendar';
import { sendClientConfirmationEmail, sendAdminNotificationEmail } from '@/lib/email-service';
import type { BookingFormData } from '@/components/HAL900-BookingForm';

// Fallback calendar ID if environment variable is not set
const DEFAULT_CALENDAR_ID = 'josh@scailer.io';

export async function POST(request: Request) {
  console.log('Booking API: Starting execution');

  try {
    const body = await request.json();
    const { formData, selectedDate, selectedTime } = body;

    console.log('Booking request received:', {
      formData,
      selectedDate,
      selectedTime,
      dateType: typeof selectedDate,
      timeType: typeof selectedTime
    });

    // Validate required fields
    if (!formData || !selectedDate || !selectedTime) {
      console.log('Missing required fields:', { 
        hasFormData: !!formData, 
        hasSelectedDate: !!selectedDate, 
        hasSelectedTime: !!selectedTime 
      });
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Log environment variables
    console.log('Environment variables check:', {
      hasPrivateKey: !!process.env.GOOGLE_PRIVATE_KEY,
      privateKeyLength: process.env.GOOGLE_PRIVATE_KEY?.length,
      hasClientEmail: !!process.env.GOOGLE_CLIENT_EMAIL,
      clientEmail: process.env.GOOGLE_CLIENT_EMAIL,
      calendarId: process.env.GOOGLE_CALENDAR_ID || DEFAULT_CALENDAR_ID
    });

    try {
      // Create calendar event
      const result = await createCalendarEvent(
        formData as BookingFormData,
        new Date(selectedDate),
        selectedTime
      );

      console.log('Calendar event created:', result);

      // Format time for display in emails (convert from 24h to 12h format)
      const displayTime = new Date(selectedDate)
        .toLocaleTimeString('en-US', { 
          hour: 'numeric', 
          minute: 'numeric', 
          hour12: true 
        });

      // Send confirmation email to client
      try {
        await sendClientConfirmationEmail(
          formData as BookingFormData,
          new Date(selectedDate),
          displayTime,
          result.htmlLink || undefined
        );
        console.log('Client confirmation email sent successfully');
      } catch (emailError) {
        console.error('Failed to send client confirmation email:', emailError);
        // Continue with the booking process even if email fails
      }

      // Send notification email to admin
      try {
        await sendAdminNotificationEmail(
          formData as BookingFormData,
          new Date(selectedDate),
          displayTime
        );
        console.log('Admin notification email sent successfully');
      } catch (emailError) {
        console.error('Failed to send admin notification email:', emailError);
        // Continue with the booking process even if email fails
      }

      return NextResponse.json({
        success: true,
        eventDetails: {
          summary: result.summary,
          start: result.start,
          end: result.end,
          htmlLink: result.htmlLink || null
        }
      });
    } catch (calendarError) {
      console.error('Calendar API Error:', {
        error: calendarError instanceof Error ? calendarError.message : 'Unknown error',
        name: calendarError instanceof Error ? calendarError.name : 'Unknown',
        stack: calendarError instanceof Error ? calendarError.stack : undefined,
      });
      
      return NextResponse.json(
        { 
          error: 'Failed to create calendar event',
          details: calendarError instanceof Error ? calendarError.message : 'Unknown error'
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Booking API Error:', {
      error: error instanceof Error ? error.message : 'Unknown error',
      name: error instanceof Error ? error.name : 'Unknown',
      stack: error instanceof Error ? error.stack : undefined,
    });
    
    return NextResponse.json(
      { 
        error: 'Failed to create booking',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
} 