"use strict";
(() => {
var exports = {};
exports.id = 6549;
exports.ids = [6549];
exports.modules = {

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 77203:
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

// NAMESPACE OBJECT: ./src/app/api/book-session/route.ts
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
;// CONCATENATED MODULE: ./src/app/api/book-session/route.ts

// export const dynamic = 'force-dynamic'; // Removed for static export
async function POST(request) {
    try {
        const data = await request.json();
        console.log("Book session API called with data:", {
            formData: data.formData ? "Present" : "Missing",
            selectedDate: data.selectedDate,
            selectedTime: data.selectedTime
        });
        // Get the Firebase Functions base URL
        const isProduction = "production" === "production";
        const functionsBaseUrl = isProduction ? "https://europe-west1-scailertest-37078.cloudfunctions.net" : "http://localhost:5001/scailertest-37078/europe-west1";
        console.log("Using Firebase Functions base URL:", functionsBaseUrl);
        console.log("Calling calendarPrecise function at:", `${functionsBaseUrl}/calendarPrecise`);
        // Format the date correctly for the API if needed
        let formattedDate = data.selectedDate;
        if (data.selectedDate instanceof Date) {
            formattedDate = `${data.selectedDate.getFullYear()}-${String(data.selectedDate.getMonth() + 1).padStart(2, "0")}-${String(data.selectedDate.getDate()).padStart(2, "0")}`;
        } else if (typeof data.selectedDate === "string" && !data.selectedDate.includes("-")) {
            // Try to parse and format
            try {
                const dateObj = new Date(data.selectedDate);
                formattedDate = `${dateObj.getFullYear()}-${String(dateObj.getMonth() + 1).padStart(2, "0")}-${String(dateObj.getDate()).padStart(2, "0")}`;
            } catch (e) {
                console.error("Error formatting date:", e);
            }
        }
        console.log("Calendar parameters:", {
            formattedDate,
            selectedTime: data.selectedTime
        });
        // Call the calendarPrecise Firebase Function
        const calendarResponse = await fetch(`${functionsBaseUrl}/calendarPrecise`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                formData: data.formData,
                selectedDate: formattedDate,
                selectedTime: data.selectedTime
            })
        });
        // Log the raw response before trying to parse it
        const rawCalendarResponse = await calendarResponse.text();
        console.log("Raw calendar function response:", {
            status: calendarResponse.status,
            statusText: calendarResponse.statusText,
            responseText: rawCalendarResponse.substring(0, 200) // Log first 200 chars
        });
        if (!calendarResponse.ok) {
            throw new Error(`Failed to create calendar event: ${calendarResponse.status} ${calendarResponse.statusText} - ${rawCalendarResponse.substring(0, 100)}`);
        }
        // Parse the response as JSON
        let calendarResult;
        try {
            calendarResult = JSON.parse(rawCalendarResponse);
            console.log("Calendar function success:", calendarResult);
        } catch (jsonError) {
            console.error("Failed to parse calendar function response as JSON:", jsonError);
            throw new Error("Invalid JSON response from calendar function");
        }
        // Add detailed logging for calendar link analysis
        console.log("CALENDAR LINK DEBUG: Full details", {
            fullLink: calendarResult.htmlLink,
            linkType: typeof calendarResult.htmlLink
        });
        // Attempt to parse dates from the calendar link
        try {
            // Most Google Calendar links follow the format: https://www.google.com/calendar/event?eid=XXX&dates=YYYYMMDDTHHMMSSZ/YYYYMMDDTHHMMSSZ
            const dateParamMatch = calendarResult.htmlLink?.match(/dates=([^/&]+)%2F([^/&]+)/);
            if (dateParamMatch && dateParamMatch.length >= 3) {
                const startDateParam = dateParamMatch[1]; // Format: YYYYMMDDTHHMMSSZ
                const endDateParam = dateParamMatch[2];
                // Extract date parts more clearly
                const startYear = startDateParam.substring(0, 4);
                const startMonth = startDateParam.substring(4, 6);
                const startDay = startDateParam.substring(6, 8);
                const startHour = startDateParam.substring(9, 11);
                const startMinute = startDateParam.substring(11, 13);
                // Create date objects in different ways for comparison
                const parsedStartDate = new Date(`${startYear}-${startMonth}-${startDay}T${startHour}:${startMinute}:00Z`);
                // Get original booking date for comparison
                const [bookingYear, bookingMonth, bookingDay] = formattedDate.split("-");
                const bookingDate = new Date(parseInt(bookingYear), parseInt(bookingMonth) - 1, parseInt(bookingDay));
                console.log("CALENDAR LINK DEBUG: Date comparison", {
                    originalBookingDate: {
                        date: formattedDate,
                        year: bookingYear,
                        month: bookingMonth,
                        day: bookingDay,
                        formatted: bookingDate.toISOString()
                    },
                    calendarLinkDate: {
                        startDateParam,
                        year: startYear,
                        month: startMonth,
                        day: startDay,
                        hour: startHour,
                        minute: startMinute,
                        parsed: parsedStartDate.toISOString(),
                        localString: parsedStartDate.toString()
                    },
                    dateDifferenceInDays: Math.round((parsedStartDate.getTime() - bookingDate.getTime()) / (1000 * 60 * 60 * 24)),
                    userTimezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
                    browserOffset: new Date().getTimezoneOffset()
                });
            } else {
                console.log("CALENDAR LINK DEBUG: Could not extract date parameters from link");
            }
        } catch (linkParseError) {
            console.error("CALENDAR LINK DEBUG: Error parsing calendar link:", linkParseError);
        }
        // Send email notification
        console.log("Calling sendBookingEmails function at:", `${functionsBaseUrl}/sendBookingEmails`);
        const emailPayload = {
            formData: data.formData,
            selectedDate: formattedDate,
            selectedTime: data.selectedTime,
            calendarLink: calendarResult.htmlLink
        };
        console.log("Email payload:", JSON.stringify({
            formData: {
                firstName: data.formData.firstName,
                lastName: data.formData.lastName,
                email: data.formData.email,
                hasPhone: !!data.formData.phone,
                hasAdditionalInfo: !!data.formData.additionalInfo
            },
            selectedDate: formattedDate,
            selectedTime: data.selectedTime,
            hasCalendarLink: !!calendarResult.htmlLink
        }));
        const emailResponse = await fetch(`${functionsBaseUrl}/sendBookingEmails`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(emailPayload)
        });
        // Log the raw response before trying to parse it
        const rawEmailResponse = await emailResponse.text();
        console.log("Raw email function response:", {
            status: emailResponse.status,
            statusText: emailResponse.statusText,
            contentType: emailResponse.headers.get("content-type"),
            responseText: rawEmailResponse.substring(0, 200) // Log first 200 chars
        });
        if (!emailResponse.ok) {
            throw new Error(`Failed to send email notification: ${emailResponse.status} ${emailResponse.statusText} - ${rawEmailResponse.substring(0, 100)}`);
        }
        // Parse the response as JSON only if it's valid JSON
        let emailResult;
        try {
            emailResult = JSON.parse(rawEmailResponse);
            console.log("Email function success:", emailResult);
        } catch (jsonError) {
            console.error("Failed to parse email function response as JSON:", jsonError);
            throw new Error("Invalid JSON response from email function");
        }
        return next_response/* default */.Z.json({
            success: true,
            calendar: calendarResult,
            email: emailResult
        });
    } catch (error) {
        console.error("Error in book-session:", error);
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        return next_response/* default */.Z.json({
            error: "Failed to process booking",
            details: errorMessage
        }, {
            status: 500
        });
    }
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fbook-session%2Froute&name=app%2Fapi%2Fbook-session%2Froute&pagePath=private-next-app-dir%2Fapi%2Fbook-session%2Froute.ts&appDir=C%3A%5CUsers%5Cmadei%5Cmon%5Csrc%5Capp&appPaths=%2Fapi%2Fbook-session%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=standalone&preferredRegion=&middlewareConfig=e30%3D!

// @ts-ignore this need to be imported from next/dist to be external


// @ts-expect-error - replaced by webpack/turbopack loader

const AppRouteRouteModule = app_route_module.AppRouteRouteModule;
// We inject the nextConfigOutput here so that we can use them in the route
// module.
const nextConfigOutput = "standalone"
const routeModule = new AppRouteRouteModule({
    definition: {
        kind: route_kind.RouteKind.APP_ROUTE,
        page: "/api/book-session/route",
        pathname: "/api/book-session",
        filename: "route",
        bundlePath: "app/api/book-session/route"
    },
    resolvedPagePath: "C:\\Users\\madei\\mon\\src\\app\\api\\book-session\\route.ts",
    nextConfigOutput,
    userland: route_namespaceObject
});
// Pull out the exports that we need to expose from the module. This should
// be eliminated when we've moved the other routes to the new format. These
// are used to hook into the route.
const { requestAsyncStorage , staticGenerationAsyncStorage , serverHooks , headerHooks , staticGenerationBailout  } = routeModule;
const originalPathname = "/api/book-session/route";


//# sourceMappingURL=app-route.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [3587,5501,9335], () => (__webpack_exec__(77203)));
module.exports = __webpack_exports__;

})();