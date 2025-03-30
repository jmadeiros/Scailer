import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Email configuration
const EMAIL_HOST = process.env.EMAIL_HOST || "smtp.gmail.com";
const EMAIL_PORT = parseInt(process.env.EMAIL_PORT || "587");
const EMAIL_SECURE = process.env.EMAIL_SECURE === "true";
const EMAIL_USER = process.env.EMAIL_USER || "josh@scailer.io";
const EMAIL_PASS = process.env.EMAIL_PASS || "owrotwhi hckoesui"; // App Password
const EMAIL_FROM = process.env.EMAIL_FROM || "josh@scailer.io";
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "josh@scailer.io";

// Log environment configuration (without exposing sensitive data)
console.log("Audit Email configuration:", {
  host: EMAIL_HOST,
  port: EMAIL_PORT,
  secure: EMAIL_SECURE,
  user: EMAIL_USER ? "Set" : "Not set",
  pass: EMAIL_PASS ? "Set" : "Not set",
  from: EMAIL_FROM,
  adminEmail: ADMIN_EMAIL,
  environment: process.env.NODE_ENV
});

// Create transporter
let transporter: nodemailer.Transporter | null = null;

// Initialize transporter
async function initializeTransporter() {
  if (transporter) return transporter;

  console.log("Initializing email transporter for audit emails...");
  
  try {
    // Remove spaces from App Password
    const appPassword = EMAIL_PASS.replace(/\s+/g, "");
    
    // Create transporter with Gmail settings
    transporter = nodemailer.createTransport({
      host: EMAIL_HOST,
      port: EMAIL_PORT,
      secure: EMAIL_SECURE,
      auth: {
        user: EMAIL_USER,
        pass: appPassword,
      },
    });

    // Verify connection
    await transporter.verify();
    console.log("SMTP connection for audit emails verified successfully!");
    return transporter;
  } catch (error) {
    console.error("Failed to initialize email transporter for audit emails:", error);
    
    if (process.env.NODE_ENV === 'production') {
      // In production, we should fail clearly rather than falling back to test account
      throw new Error(`Email configuration error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
    
    // Create a test account using Ethereal Email for development/testing
    console.log("Falling back to test email account...");
    const testAccount = await createTestAccount();
    
    transporter = nodemailer.createTransport({
      host: testAccount.smtp.host,
      port: testAccount.smtp.port,
      secure: testAccount.smtp.secure,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });
    
    return transporter;
  }
}

// Create a test account using Ethereal Email
async function createTestAccount() {
  try {
    const testAccount = await nodemailer.createTestAccount();
    console.log("Test email account created for audit emails:", {
      user: testAccount.user,
      pass: testAccount.pass,
      previewURL: "https://ethereal.email",
    });
    return testAccount;
  } catch (error) {
    console.error("Failed to create test email account for audit emails:", error);
    throw error;
  }
}

// Send client confirmation email for scaling audit
async function sendClientAuditConfirmation(formData: any) {
  const emailTransporter = await initializeTransporter();

  const emailContent = {
    from: `"Scailer Audit" <${EMAIL_FROM}>`,
    to: formData.email,
    subject: "Your Scaling Audit Request Confirmation",
    text: `
      Hello ${formData.name},

      Thank you for requesting a scaling audit from Scailer!

      We've received your request and are working on analyzing your scaling potential and opportunities. 
      Our team will review your information and prepare a tailored roadmap showing where AI, automation, 
      and smarter systems can unlock growth for ${formData.companyName}.

      We'll be in touch soon with your personalized scaling assessment.

      Best regards,
      The Scailer Team
    `,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
        <div style="background-color: #25D366; padding: 20px; text-align: center; color: white;">
          <h1 style="margin: 0;">Scaling Audit Request Received</h1>
        </div>
        
        <div style="padding: 20px; background-color: #f9f9f9; border: 1px solid #ddd;">
          <p>Hello ${formData.name},</p>
          
          <p>Thank you for requesting a scaling audit from Scailer!</p>
          
          <div style="background-color: #fff; border-left: 4px solid #25D366; padding: 15px; margin: 20px 0;">
            <p>We've received your request and are working on analyzing your scaling potential and opportunities.</p>
            <p>Our team will review your information and prepare a tailored roadmap showing where AI, automation, and smarter systems can unlock growth for ${formData.companyName}.</p>
          </div>
          
          <p>We'll be in touch soon with your personalized scaling assessment.</p>
          
          <p>Best regards,<br>The Scailer Team</p>
        </div>
        
        <div style="text-align: center; padding: 20px; color: #777; font-size: 12px;">
          <p>© ${new Date().getFullYear()} Scailer. All rights reserved.</p>
        </div>
      </div>
    `,
  };

  try {
    const info = await emailTransporter.sendMail(emailContent);
    console.log("Client audit confirmation email sent:", {
      messageId: info.messageId,
      previewURL: nodemailer.getTestMessageUrl(info),
    });
    return info;
  } catch (error) {
    console.error("Failed to send client audit confirmation email:", error);
    throw error;
  }
}

// Send admin notification email about new audit request
async function sendAdminAuditNotification(formData: any) {
  const emailTransporter = await initializeTransporter();

  const emailContent = {
    from: `"Scailer Audit System" <${EMAIL_FROM}>`,
    to: ADMIN_EMAIL,
    subject: `New Scaling Audit Request: ${formData.name} from ${formData.companyName}`,
    text: `
      New Scaling Audit Request

      Client: ${formData.name}
      Company: ${formData.companyName}
      Email: ${formData.email}
    `,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
        <div style="background-color: #25D366; padding: 20px; text-align: center; color: white;">
          <h1 style="margin: 0;">New Scaling Audit Request</h1>
        </div>
        
        <div style="padding: 20px; background-color: #f9f9f9; border: 1px solid #ddd;">
          <h2 style="color: #25D366; margin-top: 0;">Client Details</h2>
          
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Company:</strong> ${formData.companyName}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
        </div>
        
        <div style="text-align: center; padding: 20px; color: #777; font-size: 12px;">
          <p>© ${new Date().getFullYear()} Scailer. All rights reserved.</p>
        </div>
      </div>
    `,
  };

  try {
    const info = await emailTransporter.sendMail(emailContent);
    console.log("Admin audit notification email sent:", {
      messageId: info.messageId,
      previewURL: nodemailer.getTestMessageUrl(info),
    });
    return info;
  } catch (error) {
    console.error("Failed to send admin audit notification email:", error);
    throw error;
  }
}

export async function POST(req: NextRequest) {
  try {
    console.log("Starting audit email sending process...");
    
    // Parse request body
    let body;
    try {
      body = await req.json();
      console.log("Audit request body parsed successfully");
    } catch (parseError) {
      console.error("Failed to parse audit request body:", parseError);
      return NextResponse.json({ 
        error: "Invalid request format",
        details: parseError instanceof Error ? parseError.message : "Unknown parsing error"
      }, { status: 400 });
    }
    
    const { formData } = body;

    // Validate required fields
    if (!formData) {
      console.error("Missing form data for audit");
      return NextResponse.json({ 
        error: "Missing form data",
        details: "Form data is required"
      }, { status: 400 });
    }

    // Validate formData structure
    const requiredFormFields = ['name', 'companyName', 'email'];
    const missingFields = requiredFormFields.filter(field => !formData[field]);
    
    if (missingFields.length > 0) {
      console.error("Missing required audit form fields:", missingFields);
      return NextResponse.json({ 
        error: "Missing required form fields", 
        details: { missingFields } 
      }, { status: 400 });
    }

    console.log("Received audit request:", {
      formData: {
        name: formData.name,
        companyName: formData.companyName,
        email: formData.email,
      }
    });

    // Send client confirmation email
    let clientEmailInfo;
    try {
      console.log("Sending client audit confirmation email...");
      clientEmailInfo = await sendClientAuditConfirmation(formData);
      console.log("Client audit confirmation email sent successfully");
    } catch (clientEmailError) {
      console.error("Failed to send client audit confirmation email:", clientEmailError);
      return NextResponse.json({
        error: "Failed to send client audit confirmation email",
        details: clientEmailError instanceof Error ? clientEmailError.message : "Unknown error"
      }, { status: 500 });
    }

    // Send admin notification email
    let adminEmailInfo;
    try {
      console.log("Sending admin audit notification email...");
      adminEmailInfo = await sendAdminAuditNotification(formData);
      console.log("Admin audit notification email sent successfully");
    } catch (adminEmailError) {
      console.error("Failed to send admin audit notification email:", adminEmailError);
      // Continue even if admin email fails, as client has already been notified
    }

    // Return success response
    return NextResponse.json({
      success: true,
      clientEmail: clientEmailInfo ? {
        messageId: clientEmailInfo.messageId,
        previewURL: nodemailer.getTestMessageUrl(clientEmailInfo),
      } : null,
      adminEmail: adminEmailInfo ? {
        messageId: adminEmailInfo.messageId,
        previewURL: nodemailer.getTestMessageUrl(adminEmailInfo),
      } : null,
    });
  } catch (error: any) {
    console.error("Error sending audit emails:", error);
    return NextResponse.json({
      error: "Failed to send audit emails",
      details: error.message || "Unknown error",
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    }, { status: 500 });
  }
} 