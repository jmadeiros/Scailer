const nodemailer = require('nodemailer');

async function testGmailConnection() {
  console.log('Starting Gmail connection test...');
  
  try {
    // Remove spaces from the App Password
    const appPassword = 'owrotwhi hckoesui'.replace(/\s+/g, '');
    
    // Create transporter with Gmail settings
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: 'josh@scailer.io',
        pass: appPassword
      }
    });
    
    console.log('Transporter created, verifying connection...');
    
    // Verify connection
    await transporter.verify();
    console.log('SMTP connection verified successfully!');
    
    // Send test email
    console.log('Sending test email...');
    const info = await transporter.sendMail({
      from: '"Scailer Booking System" <josh@scailer.io>',
      to: 'josh@scailer.io',
      subject: 'Gmail App Password Test',
      text: 'This is a test email sent using the App Password for Scailer Booking System',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
          <h1 style="color: #25D366;">Gmail App Password Test</h1>
          <p>This is a test email sent using the App Password for Scailer Booking System.</p>
          <p>If you're seeing this, the email configuration is working correctly!</p>
          <p>You can now use the booking system with real email notifications.</p>
        </div>
      `
    });
    
    console.log('Email sent successfully!');
    console.log('Message ID:', info.messageId);
    
  } catch (error) {
    console.error('Error during Gmail test:');
    console.error(error);
  }
}

testGmailConnection(); 