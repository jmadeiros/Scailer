import { NextResponse } from 'next/server';
import { testCalendarIntegration } from '@/lib/test-calendar';

export async function GET() {
  console.log('API Route: Starting execution');
  console.log('Environment Variables Check:', {
    hasPrivateKey: !!process.env.GOOGLE_PRIVATE_KEY,
    privateKeyLength: process.env.GOOGLE_PRIVATE_KEY?.length,
    hasClientEmail: !!process.env.GOOGLE_CLIENT_EMAIL,
    clientEmail: process.env.GOOGLE_CLIENT_EMAIL,
  });

  try {
    console.log('API Route: Attempting calendar integration test');
    const result = await testCalendarIntegration();
    console.log('API Route: Test completed', result);
    return NextResponse.json(result);
  } catch (error) {
    console.error('API Route Error:', {
      error: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined,
    });
    return NextResponse.json(
      { error: 'Failed to test calendar integration', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
} 