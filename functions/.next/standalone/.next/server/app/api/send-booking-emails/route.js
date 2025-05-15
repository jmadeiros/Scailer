"use strict";
(() => {
var exports = {};
exports.id = 5991;
exports.ids = [5991];
exports.modules = {

/***/ 32081:
/***/ ((module) => {

module.exports = require("child_process");

/***/ }),

/***/ 6113:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 9523:
/***/ ((module) => {

module.exports = require("dns");

/***/ }),

/***/ 82361:
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ 57147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 13685:
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ 95687:
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ 41808:
/***/ ((module) => {

module.exports = require("net");

/***/ }),

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 71017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 12781:
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ 24404:
/***/ ((module) => {

module.exports = require("tls");

/***/ }),

/***/ 57310:
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ 73837:
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ 59796:
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ 91675:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  headerHooks: () => (/* binding */ headerHooks),
  originalPathname: () => (/* binding */ originalPathname),
  requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
  staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./src/app/api/send-booking-emails/route.ts
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  POST: () => (POST)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(42394);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(69692);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(19513);
// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(89335);
// EXTERNAL MODULE: ./node_modules/nodemailer/lib/nodemailer.js
var nodemailer = __webpack_require__(4098);
;// CONCATENATED MODULE: ./src/app/api/send-booking-emails/route.ts


// Email configuration
const EMAIL_HOST = process.env.EMAIL_HOST || "smtp.gmail.com";
const EMAIL_PORT = parseInt(process.env.EMAIL_PORT || "587");
const EMAIL_SECURE = process.env.EMAIL_SECURE === "true";
const EMAIL_USER = process.env.EMAIL_USER || "josh@scailer.io";
const EMAIL_PASS = process.env.EMAIL_PASS || "owrotwhi hckoesui"; // App Password
const EMAIL_FROM = process.env.EMAIL_FROM || "josh@scailer.io";
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "josh@scailer.io";
// Log environment configuration (without exposing sensitive data)
console.log("Email configuration:", {
    host: EMAIL_HOST,
    port: EMAIL_PORT,
    secure: EMAIL_SECURE,
    user: EMAIL_USER ? "Set" : "Not set",
    pass: EMAIL_PASS ? "Set" : "Not set",
    from: EMAIL_FROM,
    adminEmail: ADMIN_EMAIL,
    environment: "production"
});
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
                pass: appPassword
            }
        });
        // Verify connection
        await transporter.verify();
        console.log("SMTP connection verified successfully!");
        return transporter;
    } catch (error) {
        console.error("Failed to initialize email transporter:", error);
        if (true) {
            // In production, we should fail clearly rather than falling back to test account
            throw new Error(`Email configuration error: ${error instanceof Error ? error.message : "Unknown error"}`);
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
                pass: testAccount.pass
            }
        });
        return transporter;
    }
}
// Create a test account using Ethereal Email
async function createTestAccount() {
    try {
        const testAccount = await nodemailer.createTestAccount();
        console.log("Test email account created:", {
            user: testAccount.user,
            pass: testAccount.pass,
            previewURL: "https://ethereal.email"
        });
        return testAccount;
    } catch (error) {
        console.error("Failed to create test email account:", error);
        throw error;
    }
}
// Send client confirmation email
async function sendClientConfirmationEmail(formData, selectedDate, selectedTime, calendarLink) {
    const emailTransporter = await initializeTransporter();
    // DEBUGGING: Log the exact environment and date received
    console.log("DEEP DATE DEBUG: Environment and full date info", {
        environment: "production",
        rawSelectedDate: selectedDate,
        timeString: selectedTime,
        serverTimezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        currentServerTime: new Date().toISOString(),
        currentLocalTime: new Date().toString()
    });
    let formattedDate;
    try {
        // Get date parts from the date string (YYYY-MM-DD format)
        const [year, month, day] = selectedDate.split("-").map((num)=>parseInt(num, 10));
        // Create a date object using the parsed components
        // This avoids any timezone issues since we're just using the date parts
        const dateObj = new Date(year, month - 1, day);
        // Format the date in British format
        formattedDate = new Intl.DateTimeFormat("en-GB", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric"
        }).format(dateObj);
        console.log(`Date formatted as: ${formattedDate}`);
    } catch (error) {
        console.error(`Error formatting date from ${selectedDate}:`, error);
        // Simple fallback using direct string formatting
        formattedDate = selectedDate;
        console.log(`Using raw date string as fallback: ${formattedDate}`);
    }
    const emailContent = {
        from: `"Scailer Booking" <${EMAIL_FROM}>`,
        to: formData.email,
        subject: "Your Strategy Session Confirmation",
        text: `
      Hello ${formData.firstName},

      Thank you for booking a strategy session with Scailer!

      Your session has been scheduled for ${formattedDate} at ${selectedTime}.

      ${calendarLink ? `Add to your calendar: ${calendarLink}` : ""}

      If you need to reschedule or have any questions, please reply to this email.

      Best regards,
      The Scailer Team
    `,
        html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
        <div style="background-color: #25D366; padding: 20px; text-align: center; color: white;">
          <h1 style="margin: 0;">Strategy Session Confirmation</h1>
        </div>
        
        <div style="padding: 20px; background-color: #f9f9f9; border: 1px solid #ddd;">
          <p>Hello ${formData.firstName},</p>
          
          <p>Thank you for booking a strategy session with Scailer!</p>
          
          <div style="background-color: #fff; border-left: 4px solid #25D366; padding: 15px; margin: 20px 0;">
            <p style="margin: 0;"><strong>Date:</strong> ${formattedDate}</p>
            <p style="margin: 10px 0 0;"><strong>Time:</strong> ${selectedTime}</p>
          </div>
          
          ${calendarLink ? `<p><a href="${calendarLink}" style="display: inline-block; background-color: #25D366; color: white; padding: 10px 15px; text-decoration: none; border-radius: 4px;">Add to Calendar</a></p>` : ""}
          
          <p>If you need to reschedule or have any questions, please reply to this email.</p>
          
          <p>Best regards,<br>The Scailer Team</p>
        </div>
        
        <div style="text-align: center; padding: 20px; color: #777; font-size: 12px;">
          <p>© ${new Date().getFullYear()} Scailer. All rights reserved.</p>
        </div>
      </div>
    `
    };
    try {
        const info = await emailTransporter.sendMail(emailContent);
        console.log("Client confirmation email sent:", {
            messageId: info.messageId,
            previewURL: nodemailer.getTestMessageUrl(info)
        });
        return info;
    } catch (error) {
        console.error("Failed to send client confirmation email:", error);
        throw error;
    }
}
// Send admin notification email
async function sendAdminNotificationEmail(formData, selectedDate, selectedTime) {
    const emailTransporter = await initializeTransporter();
    let formattedDate;
    try {
        // Get date parts from the date string (YYYY-MM-DD format)
        const [year, month, day] = selectedDate.split("-").map((num)=>parseInt(num, 10));
        // Create a date object using the parsed components
        // This avoids any timezone issues since we're just using the date parts
        const dateObj = new Date(year, month - 1, day);
        // Format the date in British format
        formattedDate = new Intl.DateTimeFormat("en-GB", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric"
        }).format(dateObj);
        console.log(`Admin email: Date formatted as: ${formattedDate}`);
    } catch (error) {
        console.error(`Error formatting date for admin email from ${selectedDate}:`, error);
        // Simple fallback using direct string formatting 
        formattedDate = selectedDate;
        console.log(`Admin email: Using raw date string as fallback: ${formattedDate}`);
    }
    const emailContent = {
        from: `"Scailer Booking System" <${EMAIL_FROM}>`,
        to: ADMIN_EMAIL,
        subject: `New Booking: Strategy Session with ${formData.firstName} ${formData.lastName}`,
        text: `
      New Strategy Session Booking

      Client: ${formData.firstName} ${formData.lastName}
      Email: ${formData.email}
      Phone: ${formData.phone || "Not provided"}
      
      Date: ${formattedDate}
      Time: ${selectedTime}
      
      Additional Information:
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
          
          <h2 style="color: #25D366; margin-top: 20px;">Additional Information</h2>
          
          <p>${formData.additionalInfo || "None provided"}</p>
        </div>
        
        <div style="text-align: center; padding: 20px; color: #777; font-size: 12px;">
          <p>© ${new Date().getFullYear()} Scailer. All rights reserved.</p>
        </div>
      </div>
    `
    };
    try {
        const info = await emailTransporter.sendMail(emailContent);
        console.log("Admin notification email sent:", {
            messageId: info.messageId,
            previewURL: nodemailer.getTestMessageUrl(info)
        });
        return info;
    } catch (error) {
        console.error("Failed to send admin notification email:", error);
        throw error;
    }
}
async function POST(req) {
    try {
        console.log("Starting email sending process...");
        console.log("Request headers:", Object.fromEntries([
            ...req.headers.entries()
        ]));
        // Parse request body
        let body;
        try {
            body = await req.json();
            console.log("Request body parsed successfully");
        } catch (parseError) {
            console.error("Failed to parse request body:", parseError);
            return next_response/* default */.Z.json({
                error: "Invalid request format",
                details: parseError instanceof Error ? parseError.message : "Unknown parsing error"
            }, {
                status: 400
            });
        }
        const { formData, selectedDate, selectedTime, calendarLink } = body;
        // Add detailed logging for received date
        console.log("DATE DEBUG: Received date information:", {
            selectedDate,
            selectedDateType: typeof selectedDate,
            selectedTime,
            selectedTimeType: typeof selectedTime,
            sample: selectedDate ? {
                dateObject: new Date(selectedDate),
                dateObjectToString: new Date(selectedDate).toString(),
                dateObjectToLocaleString: new Date(selectedDate).toLocaleString(),
                dateObjectToLocaleDateString: new Date(selectedDate).toLocaleDateString(),
                dateObjectUTC: new Date(selectedDate).toUTCString(),
                simpleExtraction: selectedDate.split("T")[0]
            } : null
        });
        // Validate required fields
        if (!formData || !selectedDate || !selectedTime) {
            console.error("Missing required fields:", {
                formData: !!formData,
                selectedDate: !!selectedDate,
                selectedTime: !!selectedTime,
                formDataKeys: formData ? Object.keys(formData) : "null",
                selectedDateType: selectedDate ? typeof selectedDate : "null",
                selectedTimeType: selectedTime ? typeof selectedTime : "null"
            });
            return next_response/* default */.Z.json({
                error: "Missing required fields",
                details: {
                    formData: !!formData,
                    selectedDate: !!selectedDate,
                    selectedTime: !!selectedTime
                }
            }, {
                status: 400
            });
        }
        // Validate formData structure
        const requiredFormFields = [
            "firstName",
            "lastName",
            "email"
        ];
        const missingFields = requiredFormFields.filter((field)=>!formData[field]);
        if (missingFields.length > 0) {
            console.error("Missing required form fields:", missingFields);
            return next_response/* default */.Z.json({
                error: "Missing required form fields",
                details: {
                    missingFields
                }
            }, {
                status: 400
            });
        }
        console.log("Received booking request:", {
            formData: {
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email,
                phone: formData.phone?.substring(0, 3) + "***" // Log partial phone for privacy
            },
            selectedDate,
            selectedTime,
            hasCalendarLink: !!calendarLink
        });
        // Send client confirmation email
        let clientEmailInfo;
        try {
            console.log("Sending client confirmation email...");
            clientEmailInfo = await sendClientConfirmationEmail(formData, selectedDate, selectedTime, calendarLink);
            console.log("Client confirmation email sent successfully");
        } catch (clientEmailError) {
            console.error("Failed to send client confirmation email:", clientEmailError);
            return next_response/* default */.Z.json({
                error: "Failed to send client confirmation email",
                details: clientEmailError instanceof Error ? clientEmailError.message : "Unknown error"
            }, {
                status: 500
            });
        }
        // Send admin notification email
        let adminEmailInfo;
        try {
            console.log("Sending admin notification email...");
            adminEmailInfo = await sendAdminNotificationEmail(formData, selectedDate, selectedTime);
            console.log("Admin notification email sent successfully");
        } catch (adminEmailError) {
            console.error("Failed to send admin notification email:", adminEmailError);
        // Continue even if admin email fails, as client has already been notified
        }
        // Return success response
        return next_response/* default */.Z.json({
            success: true,
            clientEmail: clientEmailInfo ? {
                messageId: clientEmailInfo.messageId,
                previewURL: nodemailer.getTestMessageUrl(clientEmailInfo)
            } : null,
            adminEmail: adminEmailInfo ? {
                messageId: adminEmailInfo.messageId,
                previewURL: nodemailer.getTestMessageUrl(adminEmailInfo)
            } : null
        });
    } catch (error) {
        console.error("Error sending booking emails:", error);
        return next_response/* default */.Z.json({
            error: "Failed to send booking emails",
            details: error.message || "Unknown error",
            stack:  false ? 0 : undefined
        }, {
            status: 500
        });
    }
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fsend-booking-emails%2Froute&name=app%2Fapi%2Fsend-booking-emails%2Froute&pagePath=private-next-app-dir%2Fapi%2Fsend-booking-emails%2Froute.ts&appDir=C%3A%5CUsers%5Cmadei%5Cmon%5Csrc%5Capp&appPaths=%2Fapi%2Fsend-booking-emails%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=standalone&preferredRegion=&middlewareConfig=e30%3D!

// @ts-ignore this need to be imported from next/dist to be external


// @ts-expect-error - replaced by webpack/turbopack loader

const AppRouteRouteModule = app_route_module.AppRouteRouteModule;
// We inject the nextConfigOutput here so that we can use them in the route
// module.
const nextConfigOutput = "standalone"
const routeModule = new AppRouteRouteModule({
    definition: {
        kind: route_kind.RouteKind.APP_ROUTE,
        page: "/api/send-booking-emails/route",
        pathname: "/api/send-booking-emails",
        filename: "route",
        bundlePath: "app/api/send-booking-emails/route"
    },
    resolvedPagePath: "C:\\Users\\madei\\mon\\src\\app\\api\\send-booking-emails\\route.ts",
    nextConfigOutput,
    userland: route_namespaceObject
});
// Pull out the exports that we need to expose from the module. This should
// be eliminated when we've moved the other routes to the new format. These
// are used to hook into the route.
const { requestAsyncStorage , staticGenerationAsyncStorage , serverHooks , headerHooks , staticGenerationBailout  } = routeModule;
const originalPathname = "/api/send-booking-emails/route";


//# sourceMappingURL=app-route.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [3587,5501,9335,4098], () => (__webpack_exec__(91675)));
module.exports = __webpack_exports__;

})();