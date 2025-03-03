import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Create calendar event through the new API route
    const calendarResponse = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/calendar`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        summary: data.summary || 'Booking Session',
        description: data.description,
        startTime: data.startTime,
        endTime: data.endTime,
      }),
    });

    if (!calendarResponse.ok) {
      throw new Error('Failed to create calendar event');
    }

    const calendarResult = await calendarResponse.json();

    // Send email notification
    const emailResponse = await fetch(`${process.env.NEXT_PUBLIC_FIREBASE_FUNCTION_URL}/sendBookingEmails`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...data,
        calendarLink: calendarResult.htmlLink,
      }),
    });

    if (!emailResponse.ok) {
      throw new Error('Failed to send email notification');
    }

    const emailResult = await emailResponse.json();

    return NextResponse.json({
      success: true,
      calendar: calendarResult,
      email: emailResult,
    });
  } catch (error) {
    console.error('Error in book-session:', error);
    return NextResponse.json(
      { error: 'Failed to process booking' },
      { status: 500 }
    );
  }
} 