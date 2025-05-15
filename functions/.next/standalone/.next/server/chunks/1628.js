"use strict";
exports.id = 1628;
exports.ids = [1628];
exports.modules = {

/***/ 61628:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MeetTheTeam)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var modularize_import_loader_name_Globe_from_default_as_default_join_esm_icons_globe_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(86078);
/* harmony import */ var modularize_import_loader_name_User_from_default_as_default_join_esm_icons_user_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(93680);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23694);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47335);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* __next_internal_client_entry_do_not_use__ default auto */ 





// Dynamically import the 3D background component, ensuring it's client-side only
const LanyardBackground = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(null, {
    loadableGenerated: {
        modules: [
            "C:\\Users\\madei\\mon\\src\\components\\MeetTheTeam.tsx -> " + "@/components/3d/LanyardBackground"
        ]
    },
    ssr: false
});
function MeetTheTeam() {
    // Keep sectionRef if needed for other purposes, or remove if only for observer
    // const sectionRef = useRef<HTMLElement>(null); 
    const headingRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null); // <<< New Ref for the heading
    const [isSectionVisible, setIsSectionVisible] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [activeMember, setActiveMember] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0); // 0 for Josh, 1 for George
    // Track touch start position for swipe detection
    const touchStartX = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(0);
    const handleTouchStart = (e)=>{
        touchStartX.current = e.touches[0].clientX;
    };
    const handleTouchEnd = (e)=>{
        const touchEndX = e.changedTouches[0].clientX;
        const diff = touchStartX.current - touchEndX;
        // If swipe distance is significant enough (more than 50px)
        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                // Swiped left, go to next (George)
                setActiveMember(1);
            } else {
                // Swiped right, go to previous (Josh)
                setActiveMember(0);
            }
        }
    };
    // Log component rendering and current state
    console.log(`[MeetTheTeam] Rendering. isSectionVisible: ${isSectionVisible}`);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        console.log("[MeetTheTeam] useEffect setup running.");
        const observer = new IntersectionObserver(([entry])=>{
            console.log(`[MeetTheTeam] IntersectionObserver triggered for HEADING. isIntersecting: ${entry.isIntersecting}, ratio: ${entry.intersectionRatio}`);
            // Trigger when the heading is at least 50% visible
            if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
                console.log("[MeetTheTeam] HEADING Threshold met! Setting isSectionVisible to true.");
                setIsSectionVisible(true);
                if (headingRef.current) {
                    console.log("[MeetTheTeam] Unobserving HEADING target.");
                    observer.unobserve(headingRef.current); // <<< Unobserve headingRef
                }
            }
        }, {
            rootMargin: "0px",
            threshold: 0.5 // <<< Use 50% threshold for heading
        });
        const currentHeadingRef = headingRef.current; // <<< Use headingRef
        if (currentHeadingRef) {
            console.log("[MeetTheTeam] Starting to observe the HEADING element.");
            observer.observe(currentHeadingRef);
        } else {
            console.warn("[MeetTheTeam] HEADING Ref not available on initial mount for observer.");
        }
        return ()=>{
            console.log("[MeetTheTeam] Cleanup: Stopping HEADING observer.");
            if (currentHeadingRef) {
                observer.unobserve(currentHeadingRef);
            }
        // Consider disconnect if component unmounts completely
        // observer.disconnect(); 
        };
    }, []);
    // Team member data array for easier management
    const teamMembers = [
        {
            name: "Josh",
            role: "Tech Builder",
            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                className: "w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M13 10V3L4 14H11V21L20 10H13Z",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                })
            }),
            bio: "Josh has experience coding in finance, where he built tools to speed things up and cut out manual tasks. Now, he builds on that by developing systems that help companies run more smoothly and get more done—reducing friction in day-to-day operations and making work simpler for the teams using them.",
            mobileBio: "Josh brings finance sector coding experience to build systems that help companies run smoothly, reducing friction in operations and simplifying work for teams."
        },
        {
            name: "George",
            role: "Growth Strategist",
            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                className: "w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z",
                    stroke: "currentColor",
                    strokeWidth: "2"
                })
            }),
            bio: "George has experience helping companies across a range of industries stay ahead of the curve by implementing AI systems. Drawing on his background in construction, he understands the challenges of scaling without the right systems in place. He now delivers solutions that bring structure, improve visibility, and support smarter, more sustainable growth.",
            mobileBio: "George helps companies across industries implement AI systems. With his construction background, he delivers solutions for structured, sustainable growth."
        }
    ];
    const [expandedImage, setExpandedImage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const handleImageTap = (index)=>{
        if (expandedImage === index) {
            setExpandedImage(null);
        } else {
            setExpandedImage(index);
        }
    };
    return(// Remove ref from section if no longer needed
    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        /* ref={sectionRef} */ className: "pt-0 pb-10 -mt-12 md:mt-0 md:py-20 bg-[#2a2a2a] md:bg-[#1a1a1a] relative overflow-hidden min-h-screen",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "absolute inset-0 w-full h-full z-0 pointer-events-none",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LanyardBackground, {
                    isVisible: isSectionVisible
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "container mx-auto px-4 relative z-10 flex flex-col items-center",
                children: [
                    " ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__/* .motion */ .E.div, {
                        className: "text-center mb-6 md:mb-10",
                        initial: {
                            opacity: 0,
                            y: 30
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: true
                        },
                        transition: {
                            duration: 0.6
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            ref: headingRef,
                            className: "text-4xl md:text-5xl font-bold text-white inline-block relative",
                            children: "Meet the Team"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__/* .motion */ .E.div, {
                        className: "text-center max-w-3xl mx-auto mb-10 md:mb-24" // Adjusted margin for mobile
                        ,
                        initial: {
                            opacity: 0,
                            y: 30
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: true
                        },
                        transition: {
                            duration: 0.6,
                            delay: 0.2
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-gray-200 text-base md:text-xl leading-relaxed px-2 md:px-0",
                            children: "We're passionate about helping companies integrate AI to improve their business. The AI landscape is ever evolving and we're here to support you."
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "relative max-w-5xl mx-auto w-full",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_3__/* .motion */ .E.div, {
                                className: "absolute hidden md:flex top-0 left-0 z-10 items-center text-gray-400 text-lg mt-[-30px] ml-[-80px]" // Hide on mobile
                                ,
                                initial: {
                                    opacity: 0,
                                    y: -10
                                },
                                animate: {
                                    opacity: isSectionVisible ? 1 : 0,
                                    y: isSectionVisible ? 0 : -10
                                },
                                transition: {
                                    duration: 0.5,
                                    delay: 1.2
                                },
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        className: "mr-2 rotate-45 w-7 h-7",
                                        children: [
                                            " ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("polyline", {
                                                points: "6 9 12 15 18 9"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "Hold to drag"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex md:hidden w-full justify-center items-center mb-2",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        onClick: ()=>setActiveMember(0),
                                        className: `w-2.5 h-2.5 rounded-full mx-1 ${activeMember === 0 ? "bg-[#25D366]" : "bg-gray-500"}`,
                                        "aria-label": "View Josh's profile"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        onClick: ()=>setActiveMember(1),
                                        className: `w-2.5 h-2.5 rounded-full mx-1 ${activeMember === 1 ? "bg-[#25D366]" : "bg-gray-500"}`,
                                        "aria-label": "View George's profile"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "hidden md:grid grid-cols-2 gap-12 w-full",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_3__/* .motion */ .E.div, {
                                        className: "flex flex-col h-full items-center",
                                        initial: {
                                            opacity: 0,
                                            y: 50
                                        },
                                        whileInView: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        viewport: {
                                            once: true
                                        },
                                        transition: {
                                            duration: 0.6,
                                            delay: 0.2
                                        },
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                className: "text-3xl font-bold text-white mb-2 text-center",
                                                children: "Josh"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex items-center justify-center text-[#25D366] mb-4",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                        viewBox: "0 0 24 24",
                                                        fill: "none",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        className: "w-5 h-5 mr-2",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                            d: "M13 10V3L4 14H11V21L20 10H13Z",
                                                            stroke: "currentColor",
                                                            strokeWidth: "2",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "font-medium",
                                                        children: "Tech Builder"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "text-gray-300 mb-6 text-center text-lg",
                                                children: "Josh has experience coding in finance, where he built tools to speed things up and cut out manual tasks. Now, he builds on that by developing systems that help companies run more smoothly and get more done—reducing friction in day-to-day operations and making work simpler for the teams using them."
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex justify-center mt-auto",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        href: "#",
                                                        className: "mx-2 text-gray-400 hover:text-white transition-colors",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modularize_import_loader_name_Globe_from_default_as_default_join_esm_icons_globe_lucide_react__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                                            className: "w-5 h-5"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        href: "https://www.linkedin.com/in/joshua-madeiros-63aa26158/",
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        className: "mx-2 text-gray-400 hover:text-white transition-colors",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modularize_import_loader_name_User_from_default_as_default_join_esm_icons_user_lucide_react__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                            className: "w-5 h-5"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_3__/* .motion */ .E.div, {
                                        className: "flex flex-col h-full items-center",
                                        initial: {
                                            opacity: 0,
                                            y: 50
                                        },
                                        whileInView: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        viewport: {
                                            once: true
                                        },
                                        transition: {
                                            duration: 0.6,
                                            delay: 0.4
                                        },
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                className: "text-3xl font-bold text-white mb-2 text-center",
                                                children: "George"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex items-center justify-center text-[#25D366] mb-4",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                        viewBox: "0 0 24 24",
                                                        fill: "none",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        className: "w-5 h-5 mr-2",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                            d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z",
                                                            stroke: "currentColor",
                                                            strokeWidth: "2"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "font-medium",
                                                        children: "Growth Strategist"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "text-gray-300 mb-6 text-center text-lg",
                                                children: "George has experience helping companies across a range of industries stay ahead of the curve by implementing AI systems. Drawing on his background in construction, he understands the challenges of scaling without the right systems in place. He now delivers solutions that bring structure, improve visibility, and support smarter, more sustainable growth."
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex justify-center mt-auto",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        href: "#",
                                                        className: "mx-2 text-gray-400 hover:text-white transition-colors",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modularize_import_loader_name_Globe_from_default_as_default_join_esm_icons_globe_lucide_react__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                                            className: "w-5 h-5"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        href: "https://www.linkedin.com/in/george-reynolds-67728580/",
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        className: "mx-2 text-gray-400 hover:text-white transition-colors",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modularize_import_loader_name_User_from_default_as_default_join_esm_icons_user_lucide_react__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                            className: "w-5 h-5"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "md:hidden w-full",
                                onTouchStart: handleTouchStart,
                                onTouchEnd: handleTouchEnd,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "relative overflow-hidden",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "flex transition-transform duration-300 ease-in-out",
                                        style: {
                                            transform: `translateX(-${activeMember * 100}%)`
                                        },
                                        children: teamMembers.map((member, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "w-full flex-shrink-0",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_3__/* .motion */ .E.div, {
                                                    className: "flex flex-col items-center px-4 py-6",
                                                    initial: {
                                                        opacity: 0,
                                                        y: 20
                                                    },
                                                    animate: {
                                                        opacity: 1,
                                                        y: 0
                                                    },
                                                    transition: {
                                                        duration: 0.4
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "relative mb-4 w-48 h-48 rounded-full",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__/* .motion */ .E.div, {
                                                                    className: "absolute inset-4 rounded-full z-0" // Glow container starts smaller (inset from parent)
                                                                    ,
                                                                    animate: {
                                                                        scale: [
                                                                            1,
                                                                            1.1,
                                                                            1,
                                                                            1.2,
                                                                            1
                                                                        ],
                                                                        opacity: [
                                                                            0.3,
                                                                            0.6,
                                                                            0.3,
                                                                            0.7,
                                                                            0.3
                                                                        ],
                                                                        boxShadow: [
                                                                            "0 0 25px 8px rgba(37, 211, 102, 0.3)",
                                                                            "0 0 35px 12px rgba(37, 211, 102, 0.5)",
                                                                            "0 0 25px 8px rgba(37, 211, 102, 0.3)",
                                                                            "0 0 40px 15px rgba(37, 211, 102, 0.6)",
                                                                            "0 0 25px 8px rgba(37, 211, 102, 0.3)"
                                                                        ]
                                                                    },
                                                                    transition: {
                                                                        duration: 2.5,
                                                                        repeat: Infinity,
                                                                        ease: "easeInOut"
                                                                    }
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                    src: member.name === "Josh" ? "/assets/joshnew1.jpg" : "/assets/WhatsApp Image 2025-04-25 at 16.17.59_8c138974.jpg",
                                                                    alt: `${member.name} portrait`,
                                                                    className: "relative z-10 w-full h-full object-cover rounded-full border-0",
                                                                    // Keep a subtle static glow on the image itself if desired, or remove if new glow is enough
                                                                    style: {
                                                                        boxShadow: "0 0 10px 3px rgba(37, 211, 102, 0.2)"
                                                                    }
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                            className: "text-2xl font-bold text-white mb-3 text-center",
                                                            children: member.name
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "flex items-center justify-center text-[#25D366] mb-4",
                                                            children: [
                                                                member.icon,
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: "font-medium text-sm",
                                                                    children: member.role
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "text-gray-300 mb-6 text-center text-base leading-relaxed",
                                                            children: member.mobileBio
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "flex justify-center mt-2",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                    href: "#",
                                                                    className: "mx-3 text-gray-400 hover:text-white transition-colors",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modularize_import_loader_name_Globe_from_default_as_default_join_esm_icons_globe_lucide_react__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                                                        className: "w-5 h-5"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                    href: member.name === "Josh" ? "https://www.linkedin.com/in/joshua-madeiros-63aa26158/" : "https://www.linkedin.com/in/george-reynolds-67728580/",
                                                                    target: "_blank",
                                                                    rel: "noopener noreferrer",
                                                                    className: "mx-3 text-gray-400 hover:text-white transition-colors",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modularize_import_loader_name_User_from_default_as_default_join_esm_icons_user_lucide_react__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                                        className: "w-5 h-5"
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            }, index))
                                    })
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    }));
}


/***/ })

};
;