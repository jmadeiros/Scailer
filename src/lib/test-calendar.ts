import { createCalendarEvent } from './google-calendar';

export async function testCalendarIntegration() {
  const testFormData = {
    firstName: "Test",
    lastName: "User",
    email: "josh@scailer.io",
    phone: "1234567890",
    additionalInfo: "This is a test event",
    marketingConsent: true
  };

  // Create a test date 1 hour from now
  const testDate = new Date();
  testDate.setHours(testDate.getHours() + 1);
  
  // Format time as HH:mm
  const testTime = `${testDate.getHours().toString().padStart(2, '0')}:${testDate.getMinutes().toString().padStart(2, '0')}`;

  try {
    const result = await createCalendarEvent(testFormData, testDate, testTime);
    console.log('Calendar test successful:', result);
    return { success: true, result };
  } catch (error) {
    console.error('Calendar test failed:', error);
    return { success: false, error };
  }
} 