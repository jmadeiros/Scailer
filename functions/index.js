const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
const { google } = require('googleapis');

admin.initializeApp();
const db = admin.firestore();

// Get the functions service with specific region
const europeRegionFunctions = functions.region("europe-west1");

// Email configuration
const EMAIL_HOST = functions.config().email?.host || "smtp.gmail.com";
const EMAIL_PORT = parseInt(functions.config().email?.port || "587");
const EMAIL_SECURE = functions.config().email?.secure === "true";
const EMAIL_USER = functions.config().email?.user || "josh@scailer.io";
const EMAIL_PASS = functions.config().email?.pass || "owrotwhi hckoesui"; // App Password
const EMAIL_FROM = functions.config().email?.from || "josh@scailer.io";
const ADMIN_EMAIL = functions.config().email?.admin || "josh@scailer.io";

// Google Calendar configuration
const CALENDAR_ID = functions.config().calendar?.id || 'josh@scailer.io';
const CALENDAR_PRIVATE_KEY = functions.config().calendar?.key ? 
  functions.config().calendar.key.replace(/\\n/g, '\n') : 
  process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');
const CALENDAR_CLIENT_EMAIL = functions.config().calendar?.email || process.env.GOOGLE_CLIENT_EMAIL;
const CALENDAR_SCOPES = ['https://www.googleapis.com/auth/calendar'];

// Fix private key format if needed
function formatPrivateKey(key) {
  if (!key) return null;
  
  // First, strip any excessive backslashes (common in Firebase config)
  let cleanedKey = key;
  
  // Replace double or quadruple backslashes with single ones - this is a common issue in Firebase config
  cleanedKey = cleanedKey.replace(/\\\\n/g, '\n');
  cleanedKey = cleanedKey.replace(/\\n/g, '\n');
  
  // Strip any surrounding quotes if present
  cleanedKey = cleanedKey.replace(/^"(.*)"$/, '$1');
  
  // If the key doesn't have proper PEM format (BEGIN/END markers), add them
  if (!cleanedKey.includes('-----BEGIN PRIVATE KEY-----')) {
    try {
      // Remove any whitespace for base64 processing
      cleanedKey = cleanedKey.replace(/\s+/g, '');
      
      // Format into proper PEM format with line breaks every 64 characters
      const formattedKey = [
        '-----BEGIN PRIVATE KEY-----',
        ...cleanedKey.match(/.{1,64}/g) || [],
        '-----END PRIVATE KEY-----'
      ].join('\n');
      
      console.log('Reformatted private key to proper PEM format');
      return formattedKey;
    } catch (e) {
      console.error('Error formatting private key:', e);
    }
  }
  
  // Log a masked version of the key for debugging
  const keyStart = cleanedKey.substring(0, 40);
  const keyEnd = cleanedKey.substring(cleanedKey.length - 20);
  console.log(`Private key format check: ${keyStart}...${keyEnd}`);
  
  return cleanedKey;
}

// Create transporter
let transporter = null;

// Initialize transporter
async function initializeTransporter() {
  if (transporter) return transporter;

  console.log("Initializing email transporter...");
  
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
    console.log("SMTP connection verified successfully!");
    return transporter;
  } catch (error) {
    console.error("Failed to initialize email transporter:", error);
    throw error;
  }
}

// Get Google Calendar auth client
async function getCalendarAuthClient() {
  console.log('Calendar authentication process starting...');
  
  try {
    console.log('Calendar environment check:', {
      hasCalendarIdCalendar: !!CALENDAR_ID,
      hasPrivateKeyCalendar: !!CALENDAR_PRIVATE_KEY,
      hasClientEmailCalendar: !!CALENDAR_CLIENT_EMAIL
    });

    // Try to get credentials from Google config if calendar config is missing
    let privateKey = CALENDAR_PRIVATE_KEY;
    let clientEmail = CALENDAR_CLIENT_EMAIL;
    let calendarId = CALENDAR_ID;
    
    // First try calendar config
    if (!privateKey || !clientEmail) {
      console.log('Trying to use Google credentials instead of Calendar credentials...');
      try {
        const googleConfig = functions.config().google || {};
        privateKey = googleConfig.private_key || null;
        clientEmail = googleConfig.client_email || null;
        calendarId = googleConfig.calendar_id || 'josh@scailer.io';
        
        console.log('Google credentials check:', {
          hasPrivateKey: !!privateKey,
          hasClientEmail: !!clientEmail,
          calendarId
        });
      } catch (configError) {
        console.error('Error accessing Google config:', configError);
      }
    }

    if (!privateKey || !clientEmail) {
      console.error('Missing required calendar environment variables');
      throw new Error('Missing required environment variables for Google Calendar');
    }

    // Format the private key properly to avoid decoder errors
    privateKey = formatPrivateKey(privateKey);
    
    if (!privateKey) {
      throw new Error('Failed to format private key correctly');
    }

    // Log key format verification (just the structure, not the actual key)
    const keyLines = privateKey.split('\n');
    console.log('Key structure verification:', {
      firstLine: keyLines[0],
      numberOfLines: keyLines.length,
      lastLine: keyLines[keyLines.length - 1],
    });

    // Create the auth client with explicit key format
    console.log('Creating JWT client with formatted credentials...');
    const auth = new google.auth.JWT({
      email: clientEmail,
      key: privateKey,
      scopes: CALENDAR_SCOPES,
    });

    console.log('Attempting to authorize with Google Calendar...');
    await auth.authorize();
    console.log('Google Calendar authorization successful');
    return auth;
  } catch (error) {
    console.error('Google Calendar authentication failed with detailed error:', {
      message: error.message,
      stack: error.stack,
      name: error.name,
      code: error.code
    });
    
    // Throw a more helpful error message
    throw new Error(`Calendar authentication failed: ${error.message}`);
  }
}

// Improved calendar event creation function
exports.calendarPrecise = europeRegionFunctions.https.onRequest(async (req, res) => {
  // Set CORS headers
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Headers", "Content-Type");
  
  // Handle OPTIONS request (preflight)
  if (req.method === "OPTIONS") {
    res.set("Access-Control-Allow-Methods", "POST");
    res.status(204).send("");
    return;
  }
  
  // Only allow POST
  if (req.method !== "POST") {
    res.status(405).send({ error: "Method not allowed" });
    return;
  }
  
  try {
    console.log("Starting precise calendar event creation...");
    const { formData, selectedDate, selectedTime } = req.body;
    
    // Validate required fields
    if (!formData || !selectedDate || !selectedTime) {
      console.error("Missing required fields for calendar event");
      res.status(400).send({ error: "Missing required fields" });
      return;
    }
    
    // Log the exact data received
    console.log("Calendar precise data received:", {
      dateString: selectedDate,
      timeString: selectedTime,
      dateType: typeof selectedDate,
      timeType: typeof selectedTime
    });
    
    // Parse date and time from strings
    let year, month, day, hours, minutes;
    
    // Parse date components
    if (selectedDate.includes('-')) {
      [year, month, day] = selectedDate.split('-').map(part => parseInt(part, 10));
    } else {
      console.error("Invalid date format, expected YYYY-MM-DD");
      res.status(400).send({ error: "Invalid date format" });
      return;
    }
    
    // Parse time components
    if (selectedTime.includes('AM') || selectedTime.includes('PM')) {
      // 12-hour format with AM/PM
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
      } else {
        console.error("Failed to parse time format:", selectedTime);
        res.status(400).send({ error: "Invalid time format" });
        return;
      }
    } else {
      // 24-hour format
      const timeMatch = selectedTime.match(/(\d+):(\d+)/);
      
      if (timeMatch) {
        hours = parseInt(timeMatch[1], 10);
        minutes = parseInt(timeMatch[2], 10);
      } else {
        console.error("Failed to parse time format:", selectedTime);
        res.status(400).send({ error: "Invalid time format" });
        return;
      }
    }
    
    // Calculate end time (30 minutes after start)
    let endHours = hours;
    let endMinutes = minutes + 30;
    
    // Handle minute overflow
    if (endMinutes >= 60) {
      endHours = (endHours + 1) % 24;
      endMinutes = endMinutes - 60;
    }
    
    // Create date strings with timezone offset
    // This is the key part that ensures the calendar event is created for the right day
    const ukTimezoneOffset = '+01:00'; // UK summer time, change to +00:00 in winter
    
    // Use the original date without any adjustment
    const startDateTime = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}T${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:00${ukTimezoneOffset}`;
    const endDateTime = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}T${String(endHours).padStart(2, '0')}:${String(endMinutes).padStart(2, '0')}:00${ukTimezoneOffset}`;
    
    console.log("Calendar event datetime strings:", {
      startDateTime,
      endDateTime
    });
    
    try {
      // Get the auth client
      const auth = await getCalendarAuthClient();
      const calendar = google.calendar({ version: 'v3', auth });
      
      // Get the calendar ID (either from 'calendar' config or 'google' config)
      let calendarId = CALENDAR_ID;
      if (!calendarId || calendarId === 'YOUR_CALENDAR_ID') {
        const googleConfig = functions.config().google || {};
        calendarId = googleConfig.calendar_id || 'josh@scailer.io';
        console.log(`Using calendar ID from Google config: ${calendarId}`);
      }
      
      // Create the event object
      const event = {
        summary: `Strategy Session with ${formData.firstName} ${formData.lastName}`,
        description: `
Strategy Session with ${formData.firstName} ${formData.lastName}

CLIENT DETAILS:
- Name: ${formData.firstName} ${formData.lastName}
- Phone: ${formData.phone || "Not provided"}
- Email: ${formData.email}

ADDITIONAL INFORMATION:
${formData.additionalInfo || 'None provided'}

BOOKING DETAILS:
- Date: ${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}
- Time: ${selectedTime}
- Duration: 30 minutes
`,
        start: {
          dateTime: startDateTime,
          timeZone: 'Europe/London',
        },
        end: {
          dateTime: endDateTime,
          timeZone: 'Europe/London',
        }
      };
      
      console.log("Calendar event payload:", {
        summary: event.summary,
        start: event.start,
        end: event.end
      });
      
      // Create the calendar event
      const response = await calendar.events.insert({
        auth,
        calendarId: calendarId,
        requestBody: event,
        conferenceDataVersion: 1
      });
      
      console.log("Calendar event created:", {
        id: response.data.id,
        htmlLink: response.data.htmlLink
      });
      
      // Return the created event data
      res.status(200).send({
        success: true,
        id: response.data.id,
        htmlLink: response.data.htmlLink
      });
    } catch (googleCalendarError) {
      console.error("Google Calendar API error, using fallback:", googleCalendarError.message);
      
      // If Google Calendar fails, create a fallback event response
      // This allows the booking process to continue even if the calendar fails
      
      // Create a generic calendar link that users can click to add to their own calendar
      // The format is: https://calendar.google.com/calendar/render?action=TEMPLATE&text=TITLE&dates=STARTDATE/ENDDATE&details=DESCRIPTION
      
      // Format dates for URL
      const startFormatted = new Date(year, month - 1, day).toISOString().replace(/[-:]/g, '').replace(/\.\d+/g, '');
      const endDate = new Date(year, month - 1, day); 
      endDate.setMinutes(endDate.getMinutes() + 30);
      const endFormatted = endDate.toISOString().replace(/[-:]/g, '').replace(/\.\d+/g, '');
      
      // Create calendar URL
      const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE`
        + `&text=${encodeURIComponent(`Strategy Session with Scailer`)}`
        + `&dates=${startFormatted}/${endFormatted}`
        + `&details=${encodeURIComponent(`Strategy Session booked for ${formData.firstName} ${formData.lastName}`)}`
        + `&location=${encodeURIComponent('Online Meeting')}`
        + `&add=${encodeURIComponent(formData.email)}`;
      
      // Return fallback calendar link
      res.status(200).send({
        success: true,
        id: `fallback-${Date.now()}`,
        htmlLink: calendarUrl,
        usingFallback: true
      });
    }
  } catch (error) {
    console.error("Error creating calendar event:", error);
    res.status(500).send({
      error: "Failed to create calendar event",
      details: error.message || "Unknown error"
    });
  }
});

// Send booking emails - client confirmation and admin notification
exports.sendBookingEmails = europeRegionFunctions.https.onRequest(async (req, res) => {
  // Set CORS headers
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Headers", "Content-Type");
  
  // Handle OPTIONS request (preflight)
  if (req.method === "OPTIONS") {
    res.set("Access-Control-Allow-Methods", "POST");
    res.status(204).send("");
    return;
  }
  
  // Only allow POST
  if (req.method !== "POST") {
    res.status(405).send({ error: "Method not allowed" });
    return;
  }
  
  try {
    console.log("Starting booking email process...");
    const { formData, selectedDate, selectedTime, calendarLink } = req.body;
    
    // Validate required fields
    if (!formData || !selectedDate || !selectedTime) {
      console.error("Missing required fields for booking emails");
      res.status(400).send({ error: "Missing required fields" });
      return;
    }
    
    console.log("Booking email data received:", {
      formData: {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        hasPhone: !!formData.phone,
        hasAdditionalInfo: !!formData.additionalInfo
      },
      selectedDate,
      selectedTime,
      hasCalendarLink: !!calendarLink
    });
    
    // Format date for display (British format)
    let formattedDate;
    try {
      // Get date parts from the date string (YYYY-MM-DD format)
      const [year, month, day] = selectedDate.split('-').map(num => parseInt(num, 10));
      
      // Create a date object using the parsed components
      const dateObj = new Date(year, month - 1, day);
      
      // Format the date in British format
      formattedDate = new Intl.DateTimeFormat('en-GB', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      }).format(dateObj);
      
      console.log(`Date formatted as: ${formattedDate}`);
    } catch (error) {
      console.error(`Error formatting date from ${selectedDate}:`, error);
      // Simple fallback
      formattedDate = selectedDate;
    }
    
    // Initialize email transporter
    const emailTransporter = await initializeTransporter();
    
    // Send client confirmation email
    console.log("Sending client confirmation email...");
    const clientEmailContent = {
      from: `"Scailer Strategy Sessions" <${EMAIL_FROM}>`,
      to: formData.email,
      subject: "Your Strategy Session Confirmation",
      text: `
        Hello ${formData.firstName} ${formData.lastName},

        Thank you for booking a strategy session with Scailer!

        Your session is confirmed for:
        Date: ${formattedDate}
        Time: ${selectedTime}
        Duration: 30 minutes

        ${calendarLink ? `Add to your calendar: ${calendarLink}` : ''}

        If you need to reschedule or cancel, please contact us as soon as possible.

        We look forward to speaking with you!

        Best regards,
        The Scailer Team
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
          <div style="background-color: #25D366; padding: 20px; text-align: center; color: white;">
            <h1 style="margin: 0;">Strategy Session Confirmed</h1>
          </div>
          
          <div style="padding: 20px; background-color: #f9f9f9; border: 1px solid #ddd;">
            <p>Hello ${formData.firstName} ${formData.lastName},</p>
            
            <p>Thank you for booking a strategy session with Scailer!</p>
            
            <div style="background-color: #fff; border-left: 4px solid #25D366; padding: 15px; margin: 20px 0;">
              <p style="margin: 5px 0;"><strong>Date:</strong> ${formattedDate}</p>
              <p style="margin: 5px 0;"><strong>Time:</strong> ${selectedTime}</p>
              <p style="margin: 5px 0;"><strong>Duration:</strong> 30 minutes</p>
            </div>
            
            ${calendarLink ? `<p><a href="${calendarLink}" style="display: inline-block; background-color: #25D366; color: white; padding: 10px 15px; text-decoration: none; border-radius: 4px;">Add to Calendar</a></p>` : ''}
            
            <p>If you need to reschedule or cancel your appointment, please contact us as soon as possible.</p>
            
            <p>We look forward to speaking with you!</p>
            
            <p>Best regards,<br>The Scailer Team</p>
          </div>
          
          <div style="text-align: center; padding: 20px; color: #777; font-size: 12px;">
            <p>© ${new Date().getFullYear()} Scailer. All rights reserved.</p>
          </div>
        </div>
      `,
    };

    let clientEmailInfo;
    try {
      clientEmailInfo = await emailTransporter.sendMail(clientEmailContent);
      console.log("Client confirmation email sent:", {
        messageId: clientEmailInfo.messageId,
      });
    } catch (clientEmailError) {
      console.error("Failed to send client confirmation email:", clientEmailError);
      res.status(500).send({
        error: "Failed to send client confirmation email",
        details: clientEmailError.message || "Unknown error"
      });
      return;
    }
    
    // Send admin notification email
    console.log("Sending admin notification email...");
    const adminEmailContent = {
      from: `"Scailer Booking System" <${EMAIL_FROM}>`,
      to: ADMIN_EMAIL,
      subject: `New Strategy Session Booking: ${formData.firstName} ${formData.lastName}`,
      text: `
        New Strategy Session Booking

        CLIENT DETAILS:
        - Name: ${formData.firstName} ${formData.lastName}
        - Email: ${formData.email}
        - Phone: ${formData.phone || "Not provided"}

        SESSION DETAILS:
        - Date: ${formattedDate}
        - Time: ${selectedTime}
        - Duration: 30 minutes

        ADDITIONAL INFORMATION:
        ${formData.additionalInfo || "None provided"}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
          <div style="background-color: #25D366; padding: 20px; text-align: center; color: white;">
            <h1 style="margin: 0;">New Strategy Session Booking</h1>
          </div>
          
          <div style="padding: 20px; background-color: #f9f9f9; border: 1px solid #ddd;">
            <h2 style="color: #25D366; margin-top: 0;">Client Details</h2>
            
            <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Phone:</strong> ${formData.phone || "Not provided"}</p>
            
            <h2 style="color: #25D366; margin-top: 20px;">Session Details</h2>
            
            <p><strong>Date:</strong> ${formattedDate}</p>
            <p><strong>Time:</strong> ${selectedTime}</p>
            <p><strong>Duration:</strong> 30 minutes</p>
            
            <h2 style="color: #25D366; margin-top: 20px;">Additional Information</h2>
            
            <p>${formData.additionalInfo || "None provided"}</p>
          </div>
          
          <div style="text-align: center; padding: 20px; color: #777; font-size: 12px;">
            <p>© ${new Date().getFullYear()} Scailer. All rights reserved.</p>
          </div>
        </div>
      `,
    };

    let adminEmailInfo;
    try {
      adminEmailInfo = await emailTransporter.sendMail(adminEmailContent);
      console.log("Admin notification email sent:", {
        messageId: adminEmailInfo.messageId,
      });
    } catch (adminEmailError) {
      console.error("Failed to send admin notification email:", adminEmailError);
      // Don't fail the request if only the admin email fails
    }
    
    // Return success response
    res.status(200).send({
      success: true,
      clientEmail: clientEmailInfo ? {
        messageId: clientEmailInfo.messageId,
      } : null,
      adminEmail: adminEmailInfo ? {
        messageId: adminEmailInfo.messageId,
      } : null,
    });
  } catch (error) {
    console.error("Error sending booking emails:", error);
    res.status(500).send({
      error: "Failed to send booking emails",
      details: error.message || "Unknown error"
    });
  }
});

// Send client confirmation email for scaling audit
async function sendClientAuditConfirmation(formData) {
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
    });
    return info;
  } catch (error) {
    console.error("Failed to send client audit confirmation email:", error);
    throw error;
  }
}

// Send admin notification email about new audit request
async function sendAdminAuditNotification(formData) {
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
    });
    return info;
  } catch (error) {
    console.error("Failed to send admin audit notification email:", error);
    throw error;
  }
}

// Saves audit form data to Firestore and sends emails
exports.saveAuditData = europeRegionFunctions.https.onRequest(async (req, res) => {
  // Set CORS headers
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Headers", "Content-Type");
  
  // Handle OPTIONS request (preflight)
  if (req.method === "OPTIONS") {
    res.set("Access-Control-Allow-Methods", "POST");
    res.status(204).send("");
    return;
  }
  
  // Only allow POST
  if (req.method !== "POST") {
    res.status(405).send({ error: "Method not allowed" });
    return;
  }
  
  try {
    console.log("Starting audit form data storage process...");
    
    const { name, companyName, email, source } = req.body;
    
    // Check for required fields
    if (!name || !companyName || !email) {
      console.error("Missing required fields:", { name, companyName, email });
      res.status(400).send({ error: "Missing required fields" });
      return;
    }
    
    console.log("Saving audit form data:", { name, companyName, email });
    
    // Create a document in the 'audit_forms' collection
    const docRef = await db.collection("audit_forms").add({
      name,
      companyName,
      email,
      source: source || "unknown",
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    });
    
    console.log("Audit form saved with ID:", docRef.id);
    
    // Send confirmation emails
    try {
      console.log("Sending confirmation emails...");
      await Promise.all([
        sendClientAuditConfirmation({ name, companyName, email }),
        sendAdminAuditNotification({ name, companyName, email })
      ]);
      console.log("All confirmation emails sent successfully");
    } catch (emailError) {
      console.error("Error sending confirmation emails:", emailError);
      // We continue even if emails fail
    }
    
    // Return success
    res.status(200).send({ 
      success: true, 
      id: docRef.id,
      message: "Audit form data saved successfully" 
    });
  } catch (error) {
    console.error("Error saving audit form data:", error);
    res.status(500).send({ 
      error: "Failed to save audit form data", 
      details: error.message 
    });
  }
}); 