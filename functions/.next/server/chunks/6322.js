"use strict";
exports.id = 6322;
exports.ids = [6322];
exports.modules = {

/***/ 6322:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23694);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var modularize_import_loader_name_Clock_from_default_as_default_join_esm_icons_clock_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(15441);
/* harmony import */ var modularize_import_loader_name_ChevronLeft_from_default_as_default_join_esm_icons_chevron_left_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(51910);
/* harmony import */ var modularize_import_loader_name_ChevronRight_from_default_as_default_join_esm_icons_chevron_right_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11922);
/* harmony import */ var sonner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9941);
/* __next_internal_client_entry_do_not_use__ default auto */ 






const timeSlots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM"
];
const convertTo24Hour = (time12h)=>{
    // Extract time and AM/PM
    const timeMatch = time12h.match(/(\d+):(\d+)\s*(AM|PM)/i);
    if (!timeMatch) {
        console.error("Invalid time format:", time12h);
        return "00:00"; // Default fallback
    }
    let hours = parseInt(timeMatch[1], 10);
    const minutes = timeMatch[2];
    const modifier = timeMatch[3].toUpperCase();
    // Convert hours based on AM/PM
    if (hours === 12) {
        hours = modifier === "AM" ? 0 : 12;
    } else if (modifier === "PM") {
        hours += 12;
    }
    return `${hours.toString().padStart(2, "0")}:${minutes}`;
};
const HAL900BookingInterface = ()=>{
    const [selectedDate, setSelectedDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(()=>{
        const today = new Date();
        today.setHours(0, 0, 0, 0); // Normalize to start of day
        return today;
    });
    const [selectedTime, setSelectedTime] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [currentMonth, setCurrentMonth] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(()=>{
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return new Date(today.getFullYear(), today.getMonth(), 1);
    });
    const [isBooking, setIsBooking] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const getDaysInMonth = (date)=>{
        const year = date.getFullYear();
        const month = date.getMonth();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const firstDayOfMonth = new Date(year, month, 1).getDay();
        return {
            daysInMonth,
            firstDayOfMonth
        };
    };
    const { daysInMonth, firstDayOfMonth } = getDaysInMonth(currentMonth);
    const handleDateClick = (day)=>{
        const newDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
        newDate.setHours(0, 0, 0, 0); // Normalize to start of day
        const today = new Date();
        today.setHours(0, 0, 0, 0); // Normalize today to start of day
        if (newDate < today) {
            sonner__WEBPACK_IMPORTED_MODULE_2__.toast.error("Cannot select a past date.");
            return;
        }
        setSelectedDate(newDate);
    };
    const handleMonthChange = (increment)=>{
        setCurrentMonth((prevMonth)=>{
            const newMonthDate = new Date(prevMonth.getFullYear(), prevMonth.getMonth() + increment, 1);
            newMonthDate.setHours(0, 0, 0, 0);
            return newMonthDate;
        });
    };
    const handleBookingFlow = async ()=>{
        if (!selectedDate || !selectedTime) {
            sonner__WEBPACK_IMPORTED_MODULE_2__.toast.error("Please select a date and time slot.");
            return;
        }
        setIsBooking(true);
        try {
            // Dynamic import for BookingForm to avoid initial load cost
            const BookingFormComponent = (await Promise.all(/* import() */[__webpack_require__.e(8903), __webpack_require__.e(1563), __webpack_require__.e(68), __webpack_require__.e(7224)]).then(__webpack_require__.bind(__webpack_require__, 87224))).default;
            const ReactDOM = (await Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 89871, 23))).default;
            const bookingFormContainer = document.createElement("div");
            bookingFormContainer.className = "fixed inset-0 bg-black/50 flex items-center justify-center z-50";
            const formRootElement = document.createElement("div");
            bookingFormContainer.appendChild(formRootElement);
            document.body.appendChild(bookingFormContainer);
            const closeForm = ()=>{
                if (document.body.contains(bookingFormContainer)) {
                    document.body.removeChild(bookingFormContainer);
                }
                setIsBooking(false);
            };
            // This function will be called by the form's onSubmit
            const submitBooking = async (formData)=>{
                setIsBooking(true);
                let calendarResult = null;
                let emailResult = null;
                try {
                    // --- Date Formatting Logic (from removed API route) ---
                    let formattedDate = "";
                    if (selectedDate instanceof Date) {
                        formattedDate = `${selectedDate.getFullYear()}-${String(selectedDate.getMonth() + 1).padStart(2, "0")}-${String(selectedDate.getDate()).padStart(2, "0")}`;
                    } else {
                        console.error("Selected date is not a Date object:", selectedDate);
                        sonner__WEBPACK_IMPORTED_MODULE_2__.toast.error("Invalid date selected. Please try again.");
                        closeForm();
                        return;
                    }
                    const convertedTime = convertTo24Hour(selectedTime);
                    console.log("Formatted Date:", formattedDate, "Converted Time:", convertedTime);
                    // --- End Date Formatting ---
                    // --- Firebase Function Base URL ---
                    const isProduction = "production" === "production";
                    const functionsBaseUrl = "https://europe-west1-scailertest-37078.cloudfunctions.net" || (0); // Default local URL
                    console.log("Using Firebase Functions base URL:", functionsBaseUrl);
                    // --- End Base URL ---
                    // --- Call calendarPrecise Firebase Function ---
                    console.log("Calling calendarPrecise function...");
                    const calendarResponse = await fetch(`${functionsBaseUrl}/calendarPrecise`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            formData,
                            selectedDate: formattedDate,
                            selectedTime: convertedTime
                        })
                    });
                    const rawCalendarResponse = await calendarResponse.text();
                    console.log("Raw calendar response:", {
                        status: calendarResponse.status,
                        text: rawCalendarResponse.substring(0, 200)
                    });
                    if (!calendarResponse.ok) {
                        throw new Error(`Calendar function failed: ${calendarResponse.status} - ${rawCalendarResponse.substring(0, 100)}`);
                    }
                    try {
                        calendarResult = JSON.parse(rawCalendarResponse);
                        console.log("Calendar function success:", calendarResult);
                    } catch (e) {
                        throw new Error("Invalid JSON from calendar function");
                    }
                    // --- End Calendar Call ---
                    // --- Call sendBookingEmails Firebase Function ---
                    if (calendarResult?.htmlLink) {
                        console.log("Calling sendBookingEmails function...");
                        const emailPayload = {
                            formData,
                            selectedDate: formattedDate,
                            selectedTime: convertedTime,
                            calendarLink: calendarResult.htmlLink
                        };
                        const emailResponse = await fetch(`${functionsBaseUrl}/sendBookingEmails`, {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify(emailPayload)
                        });
                        const rawEmailResponse = await emailResponse.text();
                        console.log("Raw email response:", {
                            status: emailResponse.status,
                            text: rawEmailResponse.substring(0, 200)
                        });
                        if (!emailResponse.ok) {
                            console.error(`Email function failed: ${emailResponse.status} - ${rawEmailResponse.substring(0, 100)}`);
                            sonner__WEBPACK_IMPORTED_MODULE_2__.toast.error("Booking scheduled, but failed to send confirmation email.");
                        } else {
                            try {
                                emailResult = JSON.parse(rawEmailResponse);
                                console.log("Email function success:", emailResult);
                                sonner__WEBPACK_IMPORTED_MODULE_2__.toast.success("Booking successful! Check your calendar and email.");
                            } catch (e) {
                                console.error("Invalid JSON from email function");
                                sonner__WEBPACK_IMPORTED_MODULE_2__.toast.warning("Booking scheduled, but confirmation email response was invalid.");
                            }
                        }
                    } else {
                        sonner__WEBPACK_IMPORTED_MODULE_2__.toast.error("Booking failed: Calendar link missing.");
                    }
                    // --- End Email Call ---
                    // Only reset if both calls were at least attempted (calendar link was present)
                    if (calendarResult?.htmlLink) {
                        // Reset UI state after success
                        setSelectedDate(new Date());
                        setSelectedTime("");
                        closeForm();
                    }
                } catch (error) {
                    console.error("Error during booking submission:", error);
                    sonner__WEBPACK_IMPORTED_MODULE_2__.toast.error(`Booking failed: ${error.message || "Please try again."}`);
                    closeForm();
                }
            };
            // Render the form dynamically
            const formRoot = ReactDOM.createRoot(formRootElement);
            formRoot.render(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BookingFormComponent, {
                selectedDate: selectedDate,
                selectedTime: selectedTime,
                onClose: closeForm,
                onSubmit: submitBooking
            }));
        } catch (error) {
            console.error("Error dynamically loading or rendering booking form:", error);
            sonner__WEBPACK_IMPORTED_MODULE_2__.toast.error("Failed to load booking form. Please refresh and try again.");
            setIsBooking(false);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        id: "booking-interface",
        className: "py-20 bg-scailer-darker",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(sonner__WEBPACK_IMPORTED_MODULE_2__.Toaster, {
                position: "top-center",
                richColors: true
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "container mx-auto px-4",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_3__/* .motion */ .E.div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: true
                        },
                        className: "text-center mb-16",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "text-4xl font-bold mb-4",
                                children: "Book a Strategy Session"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-white/80 max-w-2xl mx-auto",
                                children: "Schedule a one-on-one consultation with our scaling experts."
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "max-w-4xl mx-auto grid md:grid-cols-2 gap-8",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_3__/* .motion */ .E.div, {
                                initial: {
                                    opacity: 0,
                                    x: -20
                                },
                                whileInView: {
                                    opacity: 1,
                                    x: 0
                                },
                                viewport: {
                                    once: true
                                },
                                className: "bg-scailer-light p-6 rounded-xl",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex items-center justify-between mb-4",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                onClick: ()=>handleMonthChange(-1),
                                                className: "p-2 hover:bg-scailer-dark rounded-lg transition-colors",
                                                disabled: currentMonth <= new Date(new Date().getFullYear(), new Date().getMonth(), 1) && currentMonth.getFullYear() === new Date().getFullYear() && currentMonth.getMonth() === new Date().getMonth(),
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modularize_import_loader_name_ChevronLeft_from_default_as_default_join_esm_icons_chevron_left_lucide_react__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                                    className: "w-5 h-5"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                className: "text-lg font-medium",
                                                children: currentMonth.toLocaleString("default", {
                                                    month: "long",
                                                    year: "numeric"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                onClick: ()=>handleMonthChange(1),
                                                className: "p-2 hover:bg-scailer-dark rounded-lg transition-colors",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modularize_import_loader_name_ChevronRight_from_default_as_default_join_esm_icons_chevron_right_lucide_react__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                    className: "w-5 h-5"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "grid grid-cols-7 gap-1 mb-2",
                                        children: [
                                            "Su",
                                            "Mo",
                                            "Tu",
                                            "We",
                                            "Th",
                                            "Fr",
                                            "Sa"
                                        ].map((day)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "text-center text-white/60 text-sm py-2",
                                                children: day
                                            }, day))
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "grid grid-cols-7 gap-1",
                                        children: [
                                            Array.from({
                                                length: firstDayOfMonth
                                            }).map((_, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "p-2"
                                                }, `empty-${index}`)),
                                            Array.from({
                                                length: daysInMonth
                                            }).map((_, index)=>{
                                                const day = index + 1;
                                                const dateOfThisDay = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
                                                dateOfThisDay.setHours(0, 0, 0, 0);
                                                const today = new Date();
                                                today.setHours(0, 0, 0, 0);
                                                const isPastDate = dateOfThisDay < today;
                                                const isSelected = selectedDate && // Ensure selectedDate is not null
                                                selectedDate.getDate() === day && selectedDate.getMonth() === currentMonth.getMonth() && selectedDate.getFullYear() === currentMonth.getFullYear();
                                                const isTodayDate = today.getDate() === day && today.getMonth() === currentMonth.getMonth() && today.getFullYear() === currentMonth.getFullYear();
                                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__/* .motion */ .E.button, {
                                                    whileHover: {
                                                        scale: isPastDate ? 1 : 1.1
                                                    },
                                                    whileTap: {
                                                        scale: isPastDate ? 1 : 0.95
                                                    },
                                                    onClick: ()=>!isPastDate && handleDateClick(day),
                                                    disabled: isPastDate,
                                                    className: `p-2 rounded-lg text-center ${isSelected && !isPastDate ? "bg-scailer-green text-white" : isTodayDate && !isPastDate ? "border border-scailer-green text-scailer-green" : isPastDate ? "text-white/30 cursor-not-allowed" : "hover:bg-scailer-dark"}`,
                                                    children: day
                                                }, day);
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_3__/* .motion */ .E.div, {
                                initial: {
                                    opacity: 0,
                                    x: 20
                                },
                                whileInView: {
                                    opacity: 1,
                                    x: 0
                                },
                                viewport: {
                                    once: true
                                },
                                className: "bg-scailer-light p-6 rounded-xl flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                        className: "text-lg font-medium mb-4 flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modularize_import_loader_name_Clock_from_default_as_default_join_esm_icons_clock_lucide_react__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                className: "w-5 h-5 text-scailer-green"
                                            }),
                                            "Select a Time"
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "grid grid-cols-2 gap-3 flex-grow mb-6",
                                        children: timeSlots.map((time)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__/* .motion */ .E.button, {
                                                whileHover: {
                                                    scale: 1.05
                                                },
                                                whileTap: {
                                                    scale: 0.98
                                                },
                                                onClick: ()=>setSelectedTime(time),
                                                className: `p-3 rounded-lg text-center transition-colors ${selectedTime === time ? "bg-scailer-green text-white" : "bg-scailer-dark hover:bg-scailer-dark/70"}`,
                                                children: time
                                            }, time))
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__/* .motion */ .E.button, {
                                        whileHover: {
                                            scale: 1.03
                                        },
                                        whileTap: {
                                            scale: 0.97
                                        },
                                        onClick: handleBookingFlow,
                                        disabled: !selectedDate || !selectedTime || isBooking,
                                        className: `w-full mt-auto p-4 rounded-lg text-lg font-bold transition-all ${!selectedDate || !selectedTime || isBooking ? "bg-gray-600 text-gray-400 cursor-not-allowed" : "bg-scailer-green text-white hover:bg-scailer-green/90"}`,
                                        children: isBooking ? "Processing..." : "Confirm Booking"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HAL900BookingInterface);


/***/ })

};
;