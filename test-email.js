const nodemailer = require('nodemailer');

async function testEmail() {
  console.log('Starting email test...');
  
  try {
    // Create transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: 'josh@scailer.io',
        pass: 'Bunkherhill1234.'
      }
    });
    
    console.log('Transporter created, verifying connection...');
    
    // Verify connection
    await transporter.verify();
    console.log('SMTP connection verified successfully');
    
    // Send test email
    const info = await transporter.sendMail({
      from: '"Scailer Booking" <josh@scailer.io>',
      to: 'josh@scailer.io',
      subject: 'Test Email',
      text: 'This is a test email from the Scailer booking system',
      html: '<b>This is a test email from the Scailer booking system</b>'
    });
    
    console.log('Email sent successfully!');
    console.log('Message ID:', info.messageId);
    console.log('Preview URL:', nodemailer.getTestMessageUrl(info));
    
  } catch (error) {
    console.error('Error sending email:');
    console.error(error);
  }
}

testEmail(); 