"use strict";
(() => {
var exports = {};
exports.id = 6913;
exports.ids = [6913];
exports.modules = {

/***/ 39491:
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ 14300:
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ 32081:
/***/ ((module) => {

module.exports = require("child_process");

/***/ }),

/***/ 6113:
/***/ ((module) => {

module.exports = require("crypto");

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

/***/ 85158:
/***/ ((module) => {

module.exports = require("http2");

/***/ }),

/***/ 95687:
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ 41808:
/***/ ((module) => {

module.exports = require("net");

/***/ }),

/***/ 15673:
/***/ ((module) => {

module.exports = require("node:events");

/***/ }),

/***/ 97742:
/***/ ((module) => {

module.exports = require("node:process");

/***/ }),

/***/ 47261:
/***/ ((module) => {

module.exports = require("node:util");

/***/ }),

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 71017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 77282:
/***/ ((module) => {

module.exports = require("process");

/***/ }),

/***/ 85477:
/***/ ((module) => {

module.exports = require("punycode");

/***/ }),

/***/ 63477:
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ 12781:
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ 71576:
/***/ ((module) => {

module.exports = require("string_decoder");

/***/ }),

/***/ 24404:
/***/ ((module) => {

module.exports = require("tls");

/***/ }),

/***/ 76224:
/***/ ((module) => {

module.exports = require("tty");

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

/***/ 37028:
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

// NAMESPACE OBJECT: ./src/app/api/calendar/route.ts
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
// EXTERNAL MODULE: ./node_modules/googleapis/build/src/index.js
var src = __webpack_require__(52282);
;// CONCATENATED MODULE: ./src/app/api/calendar/route.ts


const SCOPES = [
    "https://www.googleapis.com/auth/calendar"
];
const CALENDAR_ID = process.env.GOOGLE_CALENDAR_ID || "josh@scailer.io";
async function getAuthClient() {
    console.log("Environment check:", {
        hasCalendarId: !!process.env.GOOGLE_CALENDAR_ID,
        hasPrivateKey: !!process.env.GOOGLE_PRIVATE_KEY,
        hasClientEmail: !!process.env.GOOGLE_CLIENT_EMAIL,
        calendarIdUsed: CALENDAR_ID
    });
    const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");
    const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
    if (!privateKey || !clientEmail) {
        console.error("Missing required environment variables:", {
            hasPrivateKey: !!privateKey,
            hasClientEmail: !!clientEmail
        });
        throw new Error("Missing required environment variables for Google Calendar");
    }
    try {
        const auth = new src/* google */.lkr.auth.JWT({
            email: clientEmail,
            key: privateKey,
            scopes: SCOPES
        });
        console.log("Attempting to authorize with Google...");
        await auth.authorize();
        console.log("Google authorization successful");
        return auth;
    } catch (error) {
        console.error("Google authorization failed:", error);
        throw error;
    }
}
async function POST(request) {
    try {
        console.log("Starting calendar event creation...");
        // Safely parse the request body
        let requestBody;
        try {
            requestBody = await request.json();
            console.log("Request body parsed successfully");
        } catch (parseError) {
            console.error("Failed to parse request body:", parseError);
            return next_response/* default */.Z.json({
                error: "Invalid request format"
            }, {
                status: 400
            });
        }
        const { formData, selectedDate, selectedTime } = requestBody;
        console.log("TIMEZONE DEBUG: Local timezone:", Intl.DateTimeFormat().resolvedOptions().timeZone);
        console.log("TIMEZONE DEBUG: Current server time:", new Date().toISOString());
        console.log("TIMEZONE DEBUG: Current local time string:", new Date().toString());
        console.log("DATE FORMAT DEBUG: Received date format:", {
            selectedDate,
            type: typeof selectedDate,
            selectedTime,
            typeTime: typeof selectedTime
        });
        console.log("CALENDAR SOURCE DEBUG: Raw calendar data before processing", {
            selectedDate,
            selectedTime,
            receivedFormData: formData ? Object.keys(formData) : "null"
        });
        console.log("Getting auth client...");
        const auth = await getAuthClient();
        console.log("Auth client obtained successfully");
        const calendar = src/* google */.lkr.calendar({
            version: "v3",
            auth
        });
        console.log("Calendar client created");
        // Parse the date correctly to avoid timezone issues
        console.log("DATE DEBUG: Original date string:", selectedDate);
        // Test direct date construction first - this is how it was failing
        const directDate = new Date(selectedDate);
        console.log("DATE DEBUG: Direct construction result:", {
            date: directDate.toISOString(),
            localString: directDate.toString(),
            getDate: directDate.getDate(),
            getMonth: directDate.getMonth() + 1,
            getFullYear: directDate.getFullYear()
        });
        // Get date parts from the date string (YYYY-MM-DD format)
        let year, month, day;
        // Check if selectedDate is a full ISO string or just a date portion
        if (selectedDate.includes("T")) {
            // It's a full ISO string like "2025-04-01T00:00:00.000Z"
            const dateObj = new Date(selectedDate);
            year = dateObj.getUTCFullYear();
            month = dateObj.getUTCMonth() + 1; // 0-indexed
            day = dateObj.getUTCDate();
        } else {
            // It's just the date portion like "2025-04-01"
            [year, month, day] = selectedDate.split("-").map((num)=>parseInt(num, 10));
        }
        console.log("DATE DEBUG: Parsed date components:", {
            year,
            month,
            day
        });
        // Create date using UTC to avoid timezone issues
        // This ensures the date is created exactly as specified without timezone adjustments
        const startTime = new Date(Date.UTC(year, month - 1, day));
        console.log("DATE DEBUG: Date after parsing using UTC:", startTime.toISOString());
        // Set the hours and minutes, also using UTC
        // Parse time correctly accounting for AM/PM format
        let hours = 0;
        let minutes = 0;
        // Check if time includes AM/PM format
        if (selectedTime.includes("AM") || selectedTime.includes("PM")) {
            // Parse time in 12-hour format (e.g., "11:00 AM")
            const timeMatch = selectedTime.match(/(\d+):(\d+)\s*(AM|PM)/i);
            if (timeMatch) {
                let parsedHours = parseInt(timeMatch[1], 10);
                minutes = parseInt(timeMatch[2], 10);
                const period = timeMatch[3].toUpperCase();
                // Convert to 24-hour format
                if (period === "PM" && parsedHours < 12) {
                    parsedHours += 12;
                } else if (period === "AM" && parsedHours === 12) {
                    parsedHours = 0;
                }
                hours = parsedHours;
            }
        } else {
            // Parse time in 24-hour format (e.g., "11:00")
            const timeMatch = selectedTime.match(/(\d+):(\d+)/);
            if (timeMatch) {
                hours = parseInt(timeMatch[1], 10);
                minutes = parseInt(timeMatch[2], 10);
            }
        }
        console.log("TIME DEBUG: Parsed time components:", {
            hours,
            minutes,
            originalTime: selectedTime
        });
        // Use UTC methods to set time
        startTime.setUTCHours(hours, minutes, 0, 0);
        console.log("DATE DEBUG: Final start time:", startTime.toISOString());
        console.log("DATE DEBUG: Final start time (local string):", startTime.toString());
        // Calculate end time correctly (handling hour overflow)
        let endHours = hours;
        let endMinutes = minutes + 30;
        // Handle minute overflow
        if (endMinutes >= 60) {
            endHours = (endHours + 1) % 24;
            endMinutes = endMinutes - 60;
        }
        // Create date using UTC to avoid timezone issues
        // This ensures the date is created exactly as specified without timezone adjustments
        const endTime = new Date(Date.UTC(year, month - 1, day));
        endTime.setUTCHours(endHours, endMinutes, 0, 0);
        console.log("DATE DEBUG: Final end time:", endTime.toISOString());
        // For comparison, test a few alternative approaches to setting the event time 
        const eventDescription = `
Strategy Session with ${formData.firstName} ${formData.lastName}

CLIENT DETAILS:
- Name: ${formData.firstName} ${formData.lastName}
- Phone: ${formData.phone || "Not provided"}
- Email: ${formData.email}

ADDITIONAL INFORMATION:
${formData.additionalInfo || "None provided"}

BOOKING DETAILS:
- Date: ${startTime.toLocaleDateString()}
- Time: ${startTime.toLocaleTimeString()} - ${endTime.toLocaleTimeString()}
- Duration: 30 minutes
`;
        // Try multiple approaches for event creation
        // APPROACH 1: Using our string-based date formatting (current approach)
        const eventApproach1 = {
            summary: `Strategy Session with ${formData.firstName} ${formData.lastName}`,
            description: eventDescription,
            start: {
                dateTime: `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}T${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:00`,
                timeZone: "Europe/London"
            },
            end: {
                dateTime: `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}T${String(endHours).padStart(2, "0")}:${String(endMinutes).padStart(2, "0")}:00`,
                timeZone: "Europe/London"
            }
        };
        // APPROACH 2: Using date objects with explicit timezone handling
        const startDate = new Date(Date.UTC(year, month - 1, day, hours, minutes, 0));
        const endDate = new Date(Date.UTC(year, month - 1, day, endHours, endMinutes, 0));
        const eventApproach2 = {
            summary: `Strategy Session with ${formData.firstName} ${formData.lastName}`,
            description: eventDescription,
            start: {
                dateTime: startDate.toISOString(),
                timeZone: "Europe/London"
            },
            end: {
                dateTime: endDate.toISOString(),
                timeZone: "Europe/London"
            }
        };
        // APPROACH 3: Using Google's recommended date-only format for all-day events
        // While our event isn't all-day, this tests if the date formatting is affecting the issue
        const eventApproach3 = {
            summary: `Strategy Session with ${formData.firstName} ${formData.lastName} (All Day Test)`,
            description: eventDescription,
            start: {
                date: `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`,
                timeZone: "Europe/London"
            },
            end: {
                date: `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`,
                timeZone: "Europe/London"
            }
        };
        // APPROACH 4: Date string with timezone offset
        const londonOffset = "+01:00"; // Adjust based on daylight saving time
        const eventApproach4 = {
            summary: `Strategy Session with ${formData.firstName} ${formData.lastName} (With TZ Offset)`,
            description: eventDescription,
            start: {
                dateTime: `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}T${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:00${londonOffset}`,
                timeZone: "Europe/London"
            },
            end: {
                dateTime: `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}T${String(endHours).padStart(2, "0")}:${String(endMinutes).padStart(2, "0")}:00${londonOffset}`,
                timeZone: "Europe/London"
            }
        };
        console.log("DEBUGGING MULTIPLE APPROACHES:");
        console.log("Approach 1 (String formatting):", JSON.stringify(eventApproach1, null, 2));
        console.log("Approach 2 (UTC ISO strings):", JSON.stringify(eventApproach2, null, 2));
        console.log("Approach 3 (All-day format):", JSON.stringify(eventApproach3, null, 2));
        console.log("Approach 4 (With timezone offset):", JSON.stringify(eventApproach4, null, 2));
        // Use approach 4 as our event object
        const event = eventApproach4;
        // Log the exact event data being sent to Google Calendar
        console.log("CALENDAR EVENT DEBUG: Final event data:", JSON.stringify(event, null, 2));
        // Safely make the API call
        let response;
        try {
            response = await calendar.events.insert({
                auth,
                calendarId: CALENDAR_ID,
                requestBody: event,
                conferenceDataVersion: 1
            });
            console.log("Calendar event creation response metadata:", {
                status: response.status,
                statusText: response.statusText,
                headers: response.headers
            });
            // Add detailed logging about the created event response data
            console.log("CALENDAR EVENT DEBUG: Created event detailed response:", {
                id: response.data.id,
                htmlLink: response.data.htmlLink,
                startTime: response.data.start,
                endTime: response.data.end,
                timeZone: response.data.start?.timeZone,
                created: response.data.created,
                updated: response.data.updated,
                status: response.data.status
            });
            // Attempt to analyze the calendar link for date issues
            try {
                if (response.data.htmlLink) {
                    console.log("CALENDAR LINK DEBUG: Analyzing calendar link", {
                        fullLink: response.data.htmlLink,
                        // Extract dates from URL if possible
                        datesParam: new URL(response.data.htmlLink).searchParams.get("dates"),
                        // Compare with our intended dates
                        intendedStartTimeISO: startTime.toISOString(),
                        linkStartTime: response.data.start?.dateTime
                    });
                    // Try to extract and parse dates from the link to identify any mismatch
                    const url = new URL(response.data.htmlLink);
                    const datesParam = url.searchParams.get("dates");
                    if (datesParam) {
                        console.log("CALENDAR LINK ANALYSIS: Date parameter found:", datesParam);
                        // Google Calendar links often use format: YYYYMMDDTHHMMSSZ/YYYYMMDDTHHMMSSZ
                        const dateParts = datesParam.split("/");
                        if (dateParts.length >= 1) {
                            try {
                                // Extract date components from the link parameter
                                const startDateParam = dateParts[0];
                                const endDateParam = dateParts.length > 1 ? dateParts[1] : "";
                                // Try to decode the date format (typically YYYYMMDDTHHMMSSZ)
                                const linkYear = startDateParam.substring(0, 4);
                                const linkMonth = startDateParam.substring(4, 6);
                                const linkDay = startDateParam.substring(6, 8);
                                const linkTime = startDateParam.substring(9);
                                console.log("LINK DATE COMPARISON:", {
                                    // Our intended date components
                                    intendedYear: year,
                                    intendedMonth: month,
                                    intendedDay: day,
                                    intendedHours: hours,
                                    intendedMinutes: minutes,
                                    // Date from the link
                                    linkYear,
                                    linkMonth,
                                    linkDay,
                                    linkTime,
                                    // Direct comparison
                                    yearMatches: year.toString() === linkYear,
                                    monthMatches: month.toString().padStart(2, "0") === linkMonth,
                                    dayMatches: day.toString().padStart(2, "0") === linkDay,
                                    // Full link parameters
                                    startDateParam,
                                    endDateParam,
                                    // Date strings for comparison
                                    ourDateString: `${year}-${month.toString().padStart(2, "0")}-${day.toString().padStart(2, "0")}`,
                                    linkDateString: `${linkYear}-${linkMonth}-${linkDay}`
                                });
                            } catch (parseError) {
                                console.error("Error parsing calendar link date components:", parseError);
                            }
                        }
                    } else {
                        console.log("CALENDAR LINK ANALYSIS: No dates parameter found in link");
                    }
                    // Additional useful debugging
                    console.log("RESPONSE DATA ANALYSIS:", {
                        id: response.data.id,
                        kind: response.data.kind,
                        status: response.data.status,
                        created: response.data.created,
                        updated: response.data.updated,
                        summary: response.data.summary,
                        startObj: response.data.start,
                        startRaw: JSON.stringify(response.data.start),
                        endObj: response.data.end,
                        iCalUID: response.data.iCalUID
                    });
                }
            } catch (linkAnalysisError) {
                console.error("Error analyzing calendar link:", linkAnalysisError);
            }
        } catch (apiError) {
            console.error("Google Calendar API error:", apiError);
            return next_response/* default */.Z.json({
                error: apiError instanceof Error ? apiError.message : "Failed to create calendar event"
            }, {
                status: 500
            });
        }
        // Safely return the response
        try {
            return next_response/* default */.Z.json(response.data);
        } catch (jsonError) {
            console.error("Error serializing response:", jsonError);
            return next_response/* default */.Z.json({
                error: "Error processing response from Google Calendar"
            }, {
                status: 500
            });
        }
    } catch (error) {
        console.error("Calendar API error:", error);
        // Check for specific error types
        if (error instanceof Error) {
            if (error.message.includes("auth")) {
                return next_response/* default */.Z.json({
                    error: "Authentication failed. Please check your Google Calendar credentials."
                }, {
                    status: 401
                });
            }
            return next_response/* default */.Z.json({
                error: error.message
            }, {
                status: 500
            });
        }
        // Handle non-Error objects
        return next_response/* default */.Z.json({
            error: "An unexpected error occurred while creating the calendar event"
        }, {
            status: 500
        });
    }
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fcalendar%2Froute&name=app%2Fapi%2Fcalendar%2Froute&pagePath=private-next-app-dir%2Fapi%2Fcalendar%2Froute.ts&appDir=C%3A%5CUsers%5Cmadei%5Cmon%5Csrc%5Capp&appPaths=%2Fapi%2Fcalendar%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=standalone&preferredRegion=&middlewareConfig=e30%3D!

// @ts-ignore this need to be imported from next/dist to be external


// @ts-expect-error - replaced by webpack/turbopack loader

const AppRouteRouteModule = app_route_module.AppRouteRouteModule;
// We inject the nextConfigOutput here so that we can use them in the route
// module.
const nextConfigOutput = "standalone"
const routeModule = new AppRouteRouteModule({
    definition: {
        kind: route_kind.RouteKind.APP_ROUTE,
        page: "/api/calendar/route",
        pathname: "/api/calendar",
        filename: "route",
        bundlePath: "app/api/calendar/route"
    },
    resolvedPagePath: "C:\\Users\\madei\\mon\\src\\app\\api\\calendar\\route.ts",
    nextConfigOutput,
    userland: route_namespaceObject
});
// Pull out the exports that we need to expose from the module. This should
// be eliminated when we've moved the other routes to the new format. These
// are used to hook into the route.
const { requestAsyncStorage , staticGenerationAsyncStorage , serverHooks , headerHooks , staticGenerationBailout  } = routeModule;
const originalPathname = "/api/calendar/route";


//# sourceMappingURL=app-route.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [3587,5501,9335,2282], () => (__webpack_exec__(37028)));
module.exports = __webpack_exports__;

})();