"use strict";
exports.id = 1949;
exports.ids = [1949];
exports.modules = {

/***/ 21949:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ HAL900AuditForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var modularize_import_loader_name_Check_from_default_as_default_join_esm_icons_check_lucide_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1264);
/* harmony import */ var modularize_import_loader_name_Loader2_from_default_as_default_join_esm_icons_loader_2_lucide_react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(5705);
/* harmony import */ var modularize_import_loader_name_User_from_default_as_default_join_esm_icons_user_lucide_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(93680);
/* harmony import */ var modularize_import_loader_name_AlertCircle_from_default_as_default_join_esm_icons_alert_circle_lucide_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(43917);
/* harmony import */ var modularize_import_loader_name_ArrowRight_from_default_as_default_join_esm_icons_arrow_right_lucide_react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(37631);
/* harmony import */ var modularize_import_loader_name_TrendingUp_from_default_as_default_join_esm_icons_trending_up_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(50007);
/* harmony import */ var modularize_import_loader_name_Users_from_default_as_default_join_esm_icons_users_lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(91672);
/* harmony import */ var modularize_import_loader_name_Target_from_default_as_default_join_esm_icons_target_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(70696);
/* harmony import */ var modularize_import_loader_name_Zap_from_default_as_default_join_esm_icons_zap_lucide_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(76494);
/* harmony import */ var modularize_import_loader_name_Globe_from_default_as_default_join_esm_icons_globe_lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(86078);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29256);
/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17367);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(12019);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(23694);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(37686);
/* harmony import */ var sonner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9941);
/* __next_internal_client_entry_do_not_use__ default auto */ 
















const messages = [
    {
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modularize_import_loader_name_TrendingUp_from_default_as_default_join_esm_icons_trending_up_lucide_react__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
            className: "w-5 h-5"
        }),
        text: "Eliminate 70% of workflow bottlenecks without hiring.",
        metrics: [
            "70% Efficiency Gain",
            "Workflow Insight"
        ]
    },
    {
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modularize_import_loader_name_Target_from_default_as_default_join_esm_icons_target_lucide_react__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
            className: "w-5 h-5"
        }),
        text: "Reduce cost per lead by 35% with predictive targeting.",
        metrics: [
            "35% Lower CPL",
            "Data-Driven Acquisition"
        ]
    },
    {
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modularize_import_loader_name_Users_from_default_as_default_join_esm_icons_users_lucide_react__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
            className: "w-5 h-5"
        }),
        text: "Recover 60% of missed leads with automated follow-ups.",
        metrics: [
            "+60% Lead Recovery",
            "Smart Automation"
        ]
    },
    {
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modularize_import_loader_name_Globe_from_default_as_default_join_esm_icons_globe_lucide_react__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
            className: "w-5 h-5"
        }),
        text: "Increase marketing ROI by 3.5x using intent-driven campaigns.",
        metrics: [
            "3.5x ROI",
            "Precision Marketing"
        ]
    },
    {
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modularize_import_loader_name_Zap_from_default_as_default_join_esm_icons_zap_lucide_react__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
            className: "w-5 h-5"
        }),
        text: "Cut admin time in half with AI-powered task flows.",
        metrics: [
            "50% Time Saved",
            "Process Automation"
        ]
    },
    {
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modularize_import_loader_name_TrendingUp_from_default_as_default_join_esm_icons_trending_up_lucide_react__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
            className: "w-5 h-5"
        }),
        text: "Improve site conversion rates by 42% with UX-driven optimisation.",
        metrics: [
            "+42% Conversions",
            "Website Tune-Up"
        ]
    },
    {
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modularize_import_loader_name_Users_from_default_as_default_join_esm_icons_users_lucide_react__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
            className: "w-5 h-5"
        }),
        text: "Automate 80% of support queries with conversational AI.",
        metrics: [
            "80% Automation",
            "AI Assistants"
        ]
    },
    {
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modularize_import_loader_name_Target_from_default_as_default_join_esm_icons_target_lucide_react__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
            className: "w-5 h-5"
        }),
        text: "Source top candidates 2x faster with intelligent hiring systems.",
        metrics: [
            "2x Speed",
            "Smart Hiring"
        ]
    },
    {
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modularize_import_loader_name_Zap_from_default_as_default_join_esm_icons_zap_lucide_react__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
            className: "w-5 h-5"
        }),
        text: "Retain 45% more customers with personalised project journeys.",
        metrics: [
            "+45% Retention",
            "Project Automation"
        ]
    },
    {
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modularize_import_loader_name_Globe_from_default_as_default_join_esm_icons_globe_lucide_react__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
            className: "w-5 h-5"
        }),
        text: "Unlock hidden revenue streams with data-led lead generation.",
        metrics: [
            "Revenue Boost",
            "Predictive Targeting"
        ]
    },
    {
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modularize_import_loader_name_TrendingUp_from_default_as_default_join_esm_icons_trending_up_lucide_react__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
            className: "w-5 h-5"
        }),
        text: "Launch campaigns 4x faster with streamlined marketing ops.",
        metrics: [
            "4x Speed",
            "Marketing Automation"
        ]
    },
    {
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modularize_import_loader_name_Users_from_default_as_default_join_esm_icons_users_lucide_react__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
            className: "w-5 h-5"
        }),
        text: "Integrate AI across your stack and scale without scaling your team.",
        metrics: [
            "Scalable Growth",
            "AI Integration"
        ]
    }
];
function MessageFeed({ animationTriggered }) {
    const [currentIndex, setCurrentIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [showSuccessMessage, setShowSuccessMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const intervalRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const mountTimeRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(Date.now());
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        console.log(`[MessageFeed] Component mounted at ${new Date().toISOString()}`);
        intervalRef.current = setInterval(()=>{
            const timeSinceMount = Date.now() - mountTimeRef.current;
            console.log(`[MessageFeed] Interval triggered at ${timeSinceMount}ms since mount`);
            console.log(`[MessageFeed] Current index before update: ${currentIndex}`);
            setCurrentIndex((prev)=>{
                const newIndex = (prev + 1) % messages.length;
                console.log(`[MessageFeed] Updating index from ${prev} to ${newIndex}`);
                return newIndex;
            });
        }, 5000);
        return ()=>{
            console.log(`[MessageFeed] Component cleanup - clearing interval`);
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        console.log(`[MessageFeed] Index changed to ${currentIndex}`);
    }, [
        currentIndex
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (animationTriggered) {
            const timer = setTimeout(()=>{
                setShowSuccessMessage(true);
            }, 2000);
            return ()=>clearTimeout(timer);
        } else {
            // Reset success message when animation is no longer triggered
            setShowSuccessMessage(false);
        }
    }, [
        animationTriggered
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_10__/* .motion */ .E.div, {
                className: "bg-[#2a2a2a] rounded-lg mt-4 overflow-hidden h-[100px] md:h-[90px]",
                animate: animationTriggered ? {
                    height: 0,
                    opacity: 0
                } : {
                    height: "auto",
                    opacity: 1
                },
                transition: {
                    duration: 0.5,
                    ease: "easeInOut"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_11__/* .AnimatePresence */ .M, {
                    mode: "wait",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_10__/* .motion */ .E.div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        exit: {
                            opacity: 0,
                            y: -20
                        },
                        transition: {
                            duration: 0.5,
                            ease: [
                                0.32,
                                0.72,
                                0,
                                1
                            ]
                        },
                        className: "p-1 md:p-2 h-full flex items-center",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_10__/* .motion */ .E.div, {
                            className: "flex gap-1 md:gap-2 w-full",
                            animate: animationTriggered ? {
                                x: "100%",
                                rotate: 10,
                                scale: 0.8
                            } : {},
                            transition: {
                                duration: 0.5,
                                ease: "easeInOut"
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "w-5 h-5 md:w-6 md:h-6 rounded-lg bg-scailer-green/20 flex items-center justify-center flex-shrink-0",
                                    children: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().cloneElement(messages[currentIndex].icon, {
                                        className: "w-2.5 h-2.5 md:w-3 md:h-3 text-scailer-green"
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex-1 min-w-0 flex flex-col justify-center",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "text-[10px] md:text-[13px] text-white mb-1 md:mb-1.5 leading-[1.2] md:leading-[1.4]",
                                            children: messages[currentIndex].text
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "hidden md:flex gap-1.5 flex-wrap",
                                            children: messages[currentIndex].metrics.map((metric)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "inline-flex items-center px-2 py-0.5 rounded-full text-[11px] bg-scailer-green/20 text-scailer-green font-medium whitespace-nowrap",
                                                    children: metric
                                                }, metric))
                                        })
                                    ]
                                })
                            ]
                        })
                    }, currentIndex)
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_11__/* .AnimatePresence */ .M, {
                children: showSuccessMessage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_10__/* .motion */ .E.div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    exit: {
                        opacity: 0,
                        y: -20
                    },
                    className: "mt-4 text-center",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_10__/* .motion */ .E.div, {
                        initial: {
                            scale: 0.8
                        },
                        animate: {
                            scale: 1
                        },
                        className: "inline-flex items-center gap-2 px-4 py-2 bg-scailer-green/20 rounded-full",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "text-scailer-green font-medium",
                            children: "On its way!"
                        })
                    })
                })
            })
        ]
    });
}
function HAL900AuditForm() {
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [animationTriggered, setAnimationTriggered] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        name: "",
        companyName: "",
        email: ""
    });
    const [validation, setValidation] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        name: {
            isValid: false,
            message: ""
        },
        companyName: {
            isValid: false,
            message: ""
        },
        email: {
            isValid: false,
            message: ""
        }
    });
    const validateName = (name)=>{
        const letterOnlyRegex = /^[A-Za-z\s]+$/;
        if (!letterOnlyRegex.test(name)) {
            return {
                isValid: false,
                message: "Name can only contain letters"
            };
        }
        if (name.length < 2) {
            return {
                isValid: false,
                message: "Name must be at least 2 characters"
            };
        }
        if (name.length > 50) {
            return {
                isValid: false,
                message: "Name must be less than 50 characters"
            };
        }
        return {
            isValid: true,
            message: "Looks good!"
        };
    };
    const validateCompanyName = (companyName)=>{
        const companyRegex = /^[A-Za-z0-9\s&.-]+$/;
        if (!companyRegex.test(companyName)) {
            return {
                isValid: false,
                message: "Company name can only contain letters, numbers, spaces, and characters: & . -"
            };
        }
        if (companyName.length < 2) {
            return {
                isValid: false,
                message: "Company name must be at least 2 characters"
            };
        }
        if (companyName.length > 100) {
            return {
                isValid: false,
                message: "Company name must be less than 100 characters"
            };
        }
        return {
            isValid: true,
            message: "Looks good!"
        };
    };
    const validateEmail = (email)=>{
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email) {
            return {
                isValid: false,
                message: "Email is required"
            };
        }
        if (!emailRegex.test(email)) {
            return {
                isValid: false,
                message: "Please enter a valid email"
            };
        }
        return {
            isValid: true,
            message: "Valid email!"
        };
    };
    const handleInputChange = (field, value)=>{
        setFormData((prev)=>({
                ...prev,
                [field]: value
            }));
        let validationResult;
        switch(field){
            case "name":
                validationResult = validateName(value);
                break;
            case "companyName":
                validationResult = validateCompanyName(value);
                break;
            case "email":
                validationResult = validateEmail(value);
                break;
            default:
                validationResult = {
                    isValid: false,
                    message: ""
                };
        }
        setValidation((prev)=>({
                ...prev,
                [field]: validationResult
            }));
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (validation.name.isValid && validation.companyName.isValid && validation.email.isValid) {
            setLoading(true);
            setAnimationTriggered(true);
            try {
                // Get the Firebase Functions base URL from environment variable or use a default
                const functionsBaseUrl = "https://europe-west1-scailertest-37078.cloudfunctions.net" || 0;
                // Call the Firebase function to save the audit data
                const response = await fetch(`${functionsBaseUrl}/saveAuditData`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        name: formData.name,
                        companyName: formData.companyName,
                        email: formData.email,
                        source:  false ? 0 : "unknown"
                    })
                });
                const data = await response.json();
                if (!response.ok) {
                    throw new Error(data.error || "Failed to submit form");
                }
                console.log("Audit form saved successfully with ID:", data.id);
                // No need to call the API route anymore since the Firebase function now sends emails
                // The saveAuditData function handles both database storage and email sending
                console.log("Emails are handled by the Firebase function");
                // Show success message
                sonner__WEBPACK_IMPORTED_MODULE_4__.toast.success("Thank you! Your information has been submitted successfully.");
                // Reset the form after submission
                setFormData({
                    name: "",
                    companyName: "",
                    email: ""
                });
                setValidation({
                    name: {
                        isValid: false,
                        message: ""
                    },
                    companyName: {
                        isValid: false,
                        message: ""
                    },
                    email: {
                        isValid: false,
                        message: ""
                    }
                });
            // Keep animation triggered permanently so the success message stays visible
            // and the form doesn't reappear
            } catch (error) {
                console.error("Error submitting audit form:", error);
                sonner__WEBPACK_IMPORTED_MODULE_4__.toast.error("There was an error submitting your information. Please try again.");
                // Only reset animation state if there was an error
                setLoading(false);
                setTimeout(()=>setAnimationTriggered(false), 1000);
            } finally{
                setLoading(false);
            // No longer resetting animationTriggered to keep success message visible
            }
        } else {
            // Show error for invalid form
            sonner__WEBPACK_IMPORTED_MODULE_4__.toast.error("Please fill out all fields correctly before submitting.");
        }
    };
    const isFormValid = validation.name.isValid && validation.companyName.isValid && validation.email.isValid;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "w-full max-w-[280px] sm:max-w-sm mx-auto",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_10__/* .motion */ .E.div, {
            initial: {
                opacity: 0,
                y: 10
            },
            animate: {
                opacity: 1,
                y: 0
            },
            transition: {
                duration: 0.2
            },
            className: "bg-scailer-light rounded-xl p-3 sm:p-3 md:p-6 border border-scailer-light/20 min-h-[380px] sm:min-h-0 flex flex-col",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex items-center gap-1.5 md:gap-3 mb-1 md:mb-2",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "w-5 h-5 md:w-8 md:h-8 rounded-full bg-scailer-green/10 flex items-center justify-center",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modularize_import_loader_name_User_from_default_as_default_join_esm_icons_user_lucide_react__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                className: "w-2.5 h-2.5 md:w-4 md:h-4 text-scailer-green"
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    className: "text-xs md:text-base text-white font-medium",
                                    children: "Get Your Free Scaling Audit"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "text-[10px] md:text-sm text-gray-400",
                                    children: "Expert analysis of your scaling potential and opportunities"
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "mt-3 md:mt-6 mb-2 md:mb-4",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "h-0.5 md:h-1.5 w-full bg-scailer-light rounded-full overflow-hidden",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "h-full bg-scailer-green rounded-full transition-all duration-300",
                            style: {
                                width: `${Object.values(validation).filter((v)=>v.isValid).length / 3 * 100}%`
                            }
                        })
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                    onSubmit: handleSubmit,
                    className: "space-y-6 flex-grow flex flex-col sm:justify-between sm:space-y-2 md:space-y-4",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "space-y-3 sm:space-y-2 md:space-y-4",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_input__WEBPACK_IMPORTED_MODULE_3__/* .Input */ .I, {
                                            type: "text",
                                            id: "name",
                                            name: "name",
                                            placeholder: "Enter your name",
                                            onKeyPress: (e)=>{
                                                const key = e.key;
                                                if (!/^[A-Za-z\s]$/.test(key)) {
                                                    e.preventDefault();
                                                }
                                            },
                                            className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_13__.cn)("w-full pl-2 md:pl-3 pr-7 md:pr-9 py-3 sm:py-1 md:py-2 text-sm sm:text-[11px] md:text-sm bg-[#2a2a2a] border-0 text-white placeholder:text-gray-500", "focus:ring-1 focus:ring-scailer-green/50", "rounded-lg transition-all duration-200", "[&:-webkit-autofill]:bg-[#2a2a2a]", "[&:-webkit-autofill]:text-white", "[&:-webkit-autofill]:[-webkit-text-fill-color:white]", "[&:-webkit-autofill]:[-webkit-box-shadow:0_0_0_1000px_#2a2a2a_inset]", "[&:-webkit-autofill]:border-[#2a2a2a]", "[&:-webkit-autofill]:[-webkit-background-clip:text]", "focus:[&:-webkit-autofill]:[-webkit-box-shadow:0_0_0_1000px_#2a2a2a_inset]", "hover:[&:-webkit-autofill]:[-webkit-box-shadow:0_0_0_1000px_#2a2a2a_inset]"),
                                            value: formData.name,
                                            onChange: (e)=>handleInputChange("name", e.target.value)
                                        }),
                                        formData.name && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "absolute right-1.5 md:right-3 top-1/2 -translate-y-1/2",
                                            children: validation.name.isValid ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modularize_import_loader_name_Check_from_default_as_default_join_esm_icons_check_lucide_react__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                                className: "h-2.5 w-2.5 md:h-4 md:w-4 text-scailer-green"
                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modularize_import_loader_name_AlertCircle_from_default_as_default_join_esm_icons_alert_circle_lucide_react__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                                className: "h-2.5 w-2.5 md:h-4 md:w-4 text-red-400"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_input__WEBPACK_IMPORTED_MODULE_3__/* .Input */ .I, {
                                            type: "text",
                                            id: "companyName",
                                            name: "companyName",
                                            placeholder: "Enter your company name",
                                            onKeyPress: (e)=>{
                                                const key = e.key;
                                                if (!/^[A-Za-z0-9\s&.-]$/.test(key)) {
                                                    e.preventDefault();
                                                }
                                            },
                                            className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_13__.cn)("w-full pl-2 md:pl-3 pr-7 md:pr-9 py-3 sm:py-1 md:py-2 text-sm sm:text-[11px] md:text-sm bg-[#2a2a2a] border-0 text-white placeholder:text-gray-500", "focus:ring-1 focus:ring-scailer-green/50", "rounded-lg transition-all duration-200", "[&:-webkit-autofill]:bg-[#2a2a2a]", "[&:-webkit-autofill]:text-white", "[&:-webkit-autofill]:[-webkit-text-fill-color:white]", "[&:-webkit-autofill]:[-webkit-box-shadow:0_0_0_1000px_#2a2a2a_inset]", "[&:-webkit-autofill]:border-[#2a2a2a]", "[&:-webkit-autofill]:[-webkit-background-clip:text]", "focus:[&:-webkit-autofill]:[-webkit-box-shadow:0_0_0_1000px_#2a2a2a_inset]", "hover:[&:-webkit-autofill]:[-webkit-box-shadow:0_0_0_1000px_#2a2a2a_inset]"),
                                            value: formData.companyName,
                                            onChange: (e)=>handleInputChange("companyName", e.target.value)
                                        }),
                                        formData.companyName && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "absolute right-1.5 md:right-3 top-1/2 -translate-y-1/2",
                                            children: validation.companyName.isValid ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modularize_import_loader_name_Check_from_default_as_default_join_esm_icons_check_lucide_react__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                                className: "h-2.5 w-2.5 md:h-4 md:w-4 text-scailer-green"
                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modularize_import_loader_name_AlertCircle_from_default_as_default_join_esm_icons_alert_circle_lucide_react__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                                className: "h-2.5 w-2.5 md:h-4 md:w-4 text-red-400"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_input__WEBPACK_IMPORTED_MODULE_3__/* .Input */ .I, {
                                            type: "email",
                                            id: "email",
                                            name: "email",
                                            placeholder: "Enter your email",
                                            onKeyPress: (e)=>{
                                                const key = e.key;
                                                if (!/^[A-Za-z0-9@._+-]$/.test(key)) {
                                                    e.preventDefault();
                                                }
                                            },
                                            className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_13__.cn)("w-full pl-2 md:pl-3 pr-7 md:pr-9 py-3 sm:py-1 md:py-2 text-sm sm:text-[11px] md:text-sm bg-[#2a2a2a] border-0 text-white placeholder:text-gray-500", "focus:ring-1 focus:ring-scailer-green/50", "rounded-lg transition-all duration-200", "[&:-webkit-autofill]:bg-[#2a2a2a]", "[&:-webkit-autofill]:text-white", "[&:-webkit-autofill]:[-webkit-text-fill-color:white]", "[&:-webkit-autofill]:[-webkit-box-shadow:0_0_0_1000px_#2a2a2a_inset]", "[&:-webkit-autofill]:border-[#2a2a2a]", "[&:-webkit-autofill]:[-webkit-background-clip:text]", "focus:[&:-webkit-autofill]:[-webkit-box-shadow:0_0_0_1000px_#2a2a2a_inset]", "hover:[&:-webkit-autofill]:[-webkit-box-shadow:0_0_0_1000px_#2a2a2a_inset]"),
                                            value: formData.email,
                                            onChange: (e)=>handleInputChange("email", e.target.value)
                                        }),
                                        formData.email && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "absolute right-1.5 md:right-3 top-1/2 -translate-y-1/2",
                                            children: validation.email.isValid ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modularize_import_loader_name_Check_from_default_as_default_join_esm_icons_check_lucide_react__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                                className: "h-2.5 w-2.5 md:h-4 md:w-4 text-scailer-green"
                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modularize_import_loader_name_AlertCircle_from_default_as_default_join_esm_icons_alert_circle_lucide_react__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                                className: "h-2.5 w-2.5 md:h-4 md:w-4 text-red-400"
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "pt-1 md:pt-2",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_10__/* .motion */ .E.div, {
                                animate: animationTriggered ? {
                                    height: 0,
                                    opacity: 0
                                } : {
                                    height: "auto",
                                    opacity: 1
                                },
                                style: animationTriggered ? {
                                    marginTop: 0
                                } : {},
                                transition: {
                                    duration: 0.5,
                                    ease: "easeInOut"
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .z, {
                                    type: "submit",
                                    disabled: !isFormValid || loading,
                                    className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_13__.cn)("w-full py-3 sm:py-1 md:py-2 text-base sm:text-[11px] md:text-sm text-white font-medium", isFormValid ? "bg-scailer-green hover:bg-[#128C7E]" : "bg-[#2a2a2a]", "disabled:text-white/30 disabled:cursor-not-allowed transition-all duration-200 rounded-lg"),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_10__/* .motion */ .E.div, {
                                        className: "flex items-center justify-center",
                                        animate: loading ? {
                                            scale: 0.95,
                                            opacity: 0.8
                                        } : {
                                            scale: 1,
                                            opacity: 1
                                        },
                                        transition: {
                                            duration: 0.2
                                        },
                                        children: loading ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modularize_import_loader_name_Loader2_from_default_as_default_join_esm_icons_loader_2_lucide_react__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                                                    className: "mr-1 md:mr-2 h-2.5 w-2.5 md:h-4 md:w-4 animate-spin"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    children: "Creating your scaling audit..."
                                                })
                                            ]
                                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex items-center justify-center gap-1 md:gap-2",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "hidden md:inline",
                                                    children: "Get Your Free Scaling Audit"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "md:hidden",
                                                    children: "Get Scaling Audit"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modularize_import_loader_name_ArrowRight_from_default_as_default_join_esm_icons_arrow_right_lucide_react__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                                                    className: "w-3 h-3 md:w-4 md:h-4"
                                                })
                                            ]
                                        })
                                    })
                                })
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MessageFeed, {
                        animationTriggered: animationTriggered
                    })
                })
            ]
        })
    });
}


/***/ })

};
;