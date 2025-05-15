"use strict";
exports.id = 2126;
exports.ids = [2126,9256];
exports.modules = {

/***/ 82126:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HAL900OperationsService)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(69694);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23694);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(37686);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(27459);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(63927);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(18680);
/* harmony import */ var modularize_import_loader_name_Zap_from_default_as_default_join_esm_icons_zap_lucide_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(76494);
/* harmony import */ var modularize_import_loader_name_Check_from_default_as_default_join_esm_icons_check_lucide_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1264);
/* harmony import */ var modularize_import_loader_name_ArrowRight_from_default_as_default_join_esm_icons_arrow_right_lucide_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(37631);
/* harmony import */ var modularize_import_loader_name_Target_from_default_as_default_join_esm_icons_target_lucide_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(70696);
/* harmony import */ var modularize_import_loader_name_User_from_default_as_default_join_esm_icons_user_lucide_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(93680);
/* harmony import */ var modularize_import_loader_name_ChevronLeft_from_default_as_default_join_esm_icons_chevron_left_lucide_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(51910);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29256);
/* __next_internal_client_entry_do_not_use__ default auto */ 









const implementationSteps = [
    {
        step: "Step 1",
        title: "Identify Bottlenecks",
        description: "We identify inefficiencies in your business through data analysis and targeted discussions.",
        details: "Our comprehensive analysis looks at your entire workflow, identifying both obvious and hidden bottlenecks that are limiting your potential."
    },
    {
        step: "Step 2",
        title: "Custom AI-Powered Solutions",
        description: "We design tailored automation and AI-driven systems that integrate seamlessly into your existing processes.",
        details: "We leverage cutting-edge AI technologies that are specifically configured to address your unique business challenges."
    },
    {
        step: "Step 3",
        title: "Rapid Implementation",
        description: "No long wait times. We deploy solutions quickly, ensuring minimal disruption. Our onboarding is smooth, and we start optimizing your workflows almost immediately.",
        details: "While traditional implementations can take months, our streamlined approach gets you up and running in weeks or even days."
    },
    {
        step: "Step 4",
        title: "Continuous Optimization & Scaling",
        description: "We continuously refine and scale your automation systems as your business evolves.",
        details: "We don't just set it and forget it. Our ongoing optimization ensures your systems evolve as your business grows and market conditions change."
    }
];
const operationsSteps = [
    {
        step: "Step 1",
        title: "Assess Your Needs",
        description: "We analyze your current operations and identify opportunities for automation and optimization.",
        details: "Our assessment includes a thorough review of your workflows, tools, and team structure to identify the highest-impact opportunities."
    },
    {
        step: "Step 2",
        title: "Design Custom Solutions",
        description: "We create a tailored operations strategy that addresses your specific business challenges.",
        details: "Our solutions are designed to integrate seamlessly with your existing systems while providing the flexibility to scale as your business grows."
    },
    {
        step: "Step 3",
        title: "Implementation & Training",
        description: "We deploy the solutions and provide comprehensive training to ensure your team can maximize their effectiveness.",
        details: "Our implementation process is designed to minimize disruption while ensuring your team has the knowledge and skills to leverage the new systems."
    },
    {
        step: "Step 4",
        title: "Ongoing Support & Optimization",
        description: "We provide continuous support and regularly optimize your operations as your business evolves.",
        details: "Our team remains available to address any issues and continuously refine your operations to adapt to changing business needs."
    }
];
const ProcessIcon = ({ progress })=>/*#__PURE__*/ _jsxs("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: "w-5 h-5",
        style: {
            transform: `scale(${progress})`
        },
        children: [
            /*#__PURE__*/ _jsx("path", {
                d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z",
                stroke: "#25D366",
                strokeWidth: "2"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M12 8C12 8 14 10 14 12C14 14 12 16 12 16C12 16 10 14 10 12C10 10 12 8 12 8Z",
                stroke: "#25D366",
                strokeWidth: "2"
            })
        ]
    });
const TimelineStep = ({ step, index, isExpanded, onToggle, isMobile })=>{
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const isInView = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__/* .useInView */ .Y)(ref, {
        once: true,
        amount: 0.5
    });
    const isEven = index % 2 === 0;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_4__/* .motion */ .E.div, {
        ref: ref,
        className: "relative mb-1",
        initial: {
            opacity: 0,
            y: 20
        },
        animate: isInView ? {
            opacity: 1,
            y: 0
        } : {
            opacity: 0,
            y: 20
        },
        transition: {
            duration: 0.5,
            delay: index * 0.1
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "absolute left-1/2 transform -translate-x-1/2 z-20",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex items-center justify-center w-5 h-5 bg-[#25D366] rounded-full",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "w-2 h-2 bg-[#2a2a2a] rounded-full"
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `flex ${isEven ? "justify-start" : "justify-end"}`,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__/* .motion */ .E.div, {
                    className: `w-[45%] cursor-pointer ${isEven ? "mr-[5%]" : "ml-[5%]"}`,
                    whileHover: {
                        scale: 1.02
                    },
                    whileTap: {
                        scale: 0.98
                    },
                    onClick: onToggle,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "px-3 pt-3 pb-2 bg-[#3a3a3a]/50 rounded-lg shadow-sm",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-start gap-2 mb-2",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "font-bold text-[#25D366] text-sm hidden md:inline",
                                        children: step.step
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                        className: "text-base font-semibold text-white",
                                        children: step.title
                                    })
                                ]
                            }),
                            !isMobile && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "text-gray-300 text-sm mb-2",
                                        children: step.description
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__/* .motion */ .E.div, {
                                        initial: {
                                            height: 0,
                                            opacity: 0
                                        },
                                        animate: {
                                            height: isExpanded ? "auto" : 0,
                                            opacity: isExpanded ? 1 : 0
                                        },
                                        transition: {
                                            duration: 0.3
                                        },
                                        className: "overflow-hidden",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "mt-2 text-xs text-gray-400",
                                            children: step.details
                                        })
                                    })
                                ]
                            }),
                            isMobile && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_4__/* .motion */ .E.div, {
                                initial: {
                                    height: 0,
                                    opacity: 0
                                },
                                animate: {
                                    height: isExpanded ? "auto" : 0,
                                    opacity: isExpanded ? 1 : 0
                                },
                                transition: {
                                    duration: 0.3
                                },
                                className: "overflow-hidden",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "text-gray-300 text-sm mb-2",
                                        children: step.description
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "mt-2 text-xs text-gray-400",
                                        children: step.details
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        ]
    });
};
// Custom Smooth Scroll Function
const customSmoothScrollTo = (targetPosition, duration = 2500)=>{
    if (true) return;
    console.log(`[OPS_SCROLL_V2] Attempting scroll to ${targetPosition} (current: ${window.pageYOffset}) over ${duration}ms`);
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;
    let frameCount = 0;
    if (Math.abs(distance) < 5) {
        console.log("[OPS_SCROLL_V2] Target too close. Snapping.");
        window.scrollTo({
            top: targetPosition,
            behavior: "auto"
        });
        return;
    }
    if (document.documentElement.scrollHeight <= window.innerHeight && distance !== 0) {
        const newMinHeight = Math.max(document.body.scrollHeight, targetPosition + window.innerHeight);
    // console.warn(`[OPS_SCROLL_V2] Document not fully scrollable. Forcing body.minHeight to ${newMinHeight}px`);
    // document.body.style.minHeight = `${newMinHeight}px`;
    // void document.body.offsetHeight;
    }
    const animateScroll = (timestamp)=>{
        if (startTime === null) {
            startTime = timestamp;
            console.log(`[OPS_SCROLL_V2] Animation START. Timestamp: ${timestamp.toFixed(2)}, StartPos: ${startPosition}`);
        }
        const timeElapsed = timestamp - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        frameCount++;
        const easeInOutCubic = (t)=>t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
        const newCalculatedPosition = startPosition + distance * easeInOutCubic(progress);
        window.scrollTo({
            top: newCalculatedPosition,
            behavior: "auto"
        });
        const actualPositionAfterScroll = window.pageYOffset;
        if (frameCount % 15 === 0 || progress === 1) {
            console.log(`[OPS_SCROLL_V2] Frame: ${frameCount}, ` + `Time: ${timeElapsed.toFixed(0)}ms, ` + `Progress: ${progress.toFixed(3)}, ` + `TargetCalc: ${newCalculatedPosition.toFixed(0)}, ` + `ActualAfterScroll: ${actualPositionAfterScroll.toFixed(0)}`);
        }
        if (progress < 1 && Math.abs(actualPositionAfterScroll - newCalculatedPosition) > 20 && frameCount > 5) {
            console.warn(`[OPS_SCROLL_V2] INTERFERENCE? Frame: ${frameCount}, ` + `Set: ${newCalculatedPosition.toFixed(0)}, ` + `Got: ${actualPositionAfterScroll.toFixed(0)}, Diff: ${(actualPositionAfterScroll - newCalculatedPosition).toFixed(0)}`);
        }
        if (progress < 1) {
            requestAnimationFrame(animateScroll);
        } else {
            window.scrollTo({
                top: targetPosition,
                behavior: "auto"
            });
            console.log(`[OPS_SCROLL_V2] Animation END. TotalFrames: ${frameCount}, ` + `FinalPos: ${window.pageYOffset.toFixed(0)}, ` + `Target: ${targetPosition}`);
        }
    };
    console.log("[OPS_SCROLL_V2] Requesting first animation frame.");
    requestAnimationFrame(animateScroll);
};
const MobileFeatures = ({ features })=>{
    const [activeIndex, setActiveIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "md:hidden flex flex-col items-center w-full",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "text-xs text-[#25D366]/70 mb-4 text-center",
                children: "Tap icons to learn more"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex justify-around w-full mb-4",
                children: features.map((feature, index)=>{
                    const IconComponent = feature.icon;
                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_4__/* .motion */ .E.button, {
                        className: `relative w-16 h-16 rounded-full flex items-center justify-center shadow-lg ${activeIndex === index ? "bg-[#25D366] text-white shadow-[#25D366]/30 scale-110" : "bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366]/20"} transition-all duration-300`,
                        whileHover: {
                            scale: activeIndex === index ? 1.1 : 1.05
                        },
                        whileTap: {
                            scale: 0.95
                        },
                        onClick: ()=>setActiveIndex(activeIndex === index ? null : index),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(IconComponent, {
                                className: `w-7 h-7 ${activeIndex === index ? "text-white" : "text-[#25D366]"}`
                            }),
                            activeIndex === index && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__/* .motion */ .E.div, {
                                className: "absolute inset-0 rounded-full border-2 border-[#25D366] z-0",
                                initial: {
                                    opacity: 0.8,
                                    scale: 1
                                },
                                animate: {
                                    opacity: 0,
                                    scale: 1.2
                                },
                                transition: {
                                    repeat: Infinity,
                                    duration: 1.5,
                                    ease: "easeOut"
                                }
                            })
                        ]
                    }, index);
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "w-full",
                style: {
                    minHeight: "120px"
                },
                children: [
                    " ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__/* .AnimatePresence */ .M, {
                        mode: "wait",
                        children: activeIndex !== null && features[activeIndex] && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_4__/* .motion */ .E.div, {
                            initial: {
                                opacity: 0,
                                y: -10
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            exit: {
                                opacity: 0,
                                y: 10,
                                height: 0
                            },
                            transition: {
                                duration: 0.3
                            },
                            className: "text-center mt-2 px-4 py-4 overflow-hidden w-full",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                    className: "text-xl font-medium text-white mb-2",
                                    children: features[activeIndex].title
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "text-base text-gray-400 max-w-sm mx-auto leading-relaxed",
                                    children: features[activeIndex].description
                                })
                            ]
                        }, activeIndex)
                    })
                ]
            })
        ]
    });
};
const MobileSectionDots = ({ activeSection, onDotClick })=>{
    const sectionsOrder = [
        "strategic",
        "ops",
        "implementation"
    ];
    const sectionLabels = {
        "strategic": "1",
        "ops": "2",
        "implementation": "3"
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "flex justify-center items-center py-3 space-x-2",
        children: sectionsOrder.map((sectionKey, index)=>{
            const isActive = activeSection === sectionKey;
            const isPast = sectionsOrder.indexOf(activeSection) > index;
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex items-center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: ()=>onDotClick(sectionKey),
                        className: `flex items-center justify-center rounded-full w-6 h-6 transition-all duration-300 ease-in-out focus:outline-none
                ${isActive ? "bg-[#25D366] text-white font-medium" : isPast ? "bg-[#25D366]/40 text-white" : "bg-gray-600 hover:bg-gray-500 text-white/80"}
              `,
                        "aria-label": `Go to ${sectionKey} section`,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "text-xs",
                            children: sectionLabels[sectionKey]
                        })
                    }),
                    index < sectionsOrder.length - 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `h-[2px] w-6 mx-1 ${isPast ? "bg-[#25D366]/40" : "bg-gray-600"}`
                    })
                ]
            }, sectionKey);
        })
    });
};
function HAL900OperationsService() {
    // All refs defined at the top level
    const strategicRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const opsRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const implementationRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const timelineRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const opsTimelineRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const strategicContentRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const opsContentRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const implementationContentRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const whySpeedMattersRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const headingRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const mobileNavHeaderRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null); // Ref for mobile tabs + dots block
    // All state defined at the top level
    const [expandedStep, setExpandedStep] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [expandedOpsStep, setExpandedOpsStep] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [activeSection, setActiveSection] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("strategic");
    const [prevSection, setPrevSection] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("strategic");
    const [direction, setDirection] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("forward");
    const [resetScroll, setResetScroll] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [contentHeight, setContentHeight] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [isMobile, setIsMobile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const checkMobile = ()=>setIsMobile(window.innerWidth < 768); // md breakpoint
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return ()=>window.removeEventListener("resize", checkMobile);
    }, []);
    // All hooks called unconditionally at the top level
    const { scrollYProgress } = (0,framer_motion__WEBPACK_IMPORTED_MODULE_6__/* .useScroll */ .v)({
        target: timelineRef,
        offset: [
            "start end",
            "center start"
        ]
    });
    const { scrollYProgress: opsScrollYProgress } = (0,framer_motion__WEBPACK_IMPORTED_MODULE_6__/* .useScroll */ .v)({
        target: opsTimelineRef,
        offset: [
            "start end",
            "center start"
        ]
    });
    const opsScaleX = (0,framer_motion__WEBPACK_IMPORTED_MODULE_7__/* .useSpring */ .q)(opsScrollYProgress, {
        stiffness: 200,
        damping: 20,
        restDelta: 0.001
    });
    const { scrollYProgress: strategicScrollProgress } = (0,framer_motion__WEBPACK_IMPORTED_MODULE_6__/* .useScroll */ .v)({
        target: strategicContentRef,
        offset: [
            "start start",
            "end start"
        ]
    });
    const { scrollYProgress: opsScrollProgress } = (0,framer_motion__WEBPACK_IMPORTED_MODULE_6__/* .useScroll */ .v)({
        target: opsContentRef,
        offset: [
            "start start",
            "end start"
        ]
    });
    const { scrollYProgress: implementationScrollProgress } = (0,framer_motion__WEBPACK_IMPORTED_MODULE_6__/* .useScroll */ .v)({
        target: implementationContentRef,
        offset: [
            "start start",
            "end start"
        ]
    });
    const scaleX = (0,framer_motion__WEBPACK_IMPORTED_MODULE_7__/* .useSpring */ .q)(scrollYProgress, {
        stiffness: 200,
        damping: 20,
        restDelta: 0.001
    });
    const yTransform = (0,framer_motion__WEBPACK_IMPORTED_MODULE_8__/* .useTransform */ .H)(scrollYProgress, [
        0,
        1
    ], [
        0,
        80
    ]);
    const progressTransform = (0,framer_motion__WEBPACK_IMPORTED_MODULE_8__/* .useTransform */ .H)(scrollYProgress, [
        0,
        1
    ], [
        0.5,
        1
    ]);
    // Set initial active section
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setActiveSection("strategic");
    }, []);
    // Reset scroll position when changing sections
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (resetScroll) {
            if (activeSection === "strategic" && strategicContentRef.current) {
                strategicContentRef.current.scrollTop = 0;
            } else if (activeSection === "ops" && opsContentRef.current) {
                opsContentRef.current.scrollTop = 0;
            } else if (activeSection === "implementation" && implementationContentRef.current) {
                implementationContentRef.current.scrollTop = 0;
            }
            setResetScroll(false);
        }
    }, [
        resetScroll,
        activeSection
    ]);
    const scrollToSection = (contentRefForAnimationLogic, section)=>{
        const sectionsOrderList = [
            "strategic",
            "ops",
            "implementation"
        ];
        const currentIndex = sectionsOrderList.indexOf(activeSection);
        const targetIndex = sectionsOrderList.indexOf(section);
        setDirection(targetIndex > currentIndex ? "forward" : "backward");
        setPrevSection(activeSection);
        setActiveSection(section);
        setResetScroll(true);
        let scrollTargetPosition;
        if (isMobile && mobileNavHeaderRef.current) {
            const navBlockRect = mobileNavHeaderRef.current.getBoundingClientRect();
            scrollTargetPosition = navBlockRect.top + window.pageYOffset;
        } else if (containerRef.current) {
            const containerRect = containerRef.current.getBoundingClientRect();
            scrollTargetPosition = containerRect.top + window.pageYOffset;
        } else {
            console.error("Scroll target ref not found for scrollToSection");
            return;
        }
        console.log(`[OPS_SCROLL_V2] scrollToSection called for ${section}, targeting ${scrollTargetPosition}`);
        customSmoothScrollTo(scrollTargetPosition, 1500);
    };
    // Update content height when section changes
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const updateHeight = ()=>{
            if (activeSection === "strategic" && strategicRef.current) {
                setContentHeight(strategicRef.current.offsetHeight);
            } else if (activeSection === "ops" && opsRef.current) {
                setContentHeight(opsRef.current.offsetHeight);
            } else if (activeSection === "implementation" && implementationRef.current) {
                setContentHeight(implementationRef.current.offsetHeight);
            }
        };
        updateHeight();
        window.addEventListener("resize", updateHeight);
        return ()=>window.removeEventListener("resize", updateHeight);
    }, [
        activeSection
    ]);
    // Animation variants for consistent scrolling in both directions
    const containerVariants = {
        enter: (direction)=>({
                x: direction === "forward" ? "150%" : "-150%",
                opacity: 0
            }),
        center: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 70,
                damping: 20,
                mass: 1
            }
        },
        exit: (direction)=>({
                x: direction === "forward" ? "-150%" : "150%",
                opacity: 0,
                transition: {
                    type: "spring",
                    stiffness: 70,
                    damping: 20,
                    mass: 1
                }
            })
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (headingRef.current) {
            // Log the heading's content structure
            console.log("Heading Debug:", {
                rawHTML: headingRef.current.innerHTML,
                textContent: headingRef.current.textContent,
                childNodes: Array.from(headingRef.current.childNodes).map((node)=>({
                        type: node.nodeType,
                        nodeValue: node.nodeValue,
                        nodeName: node.nodeName
                    })),
                computedStyle: {
                    lineHeight: window.getComputedStyle(headingRef.current).lineHeight,
                    width: window.getComputedStyle(headingRef.current).width,
                    display: window.getComputedStyle(headingRef.current).display,
                    whiteSpace: window.getComputedStyle(headingRef.current).whiteSpace
                }
            });
        }
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        id: "operations-service",
        className: "py-16 md:py-24 bg-[#2a2a2a] relative overflow-hidden",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container mx-auto px-4",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "absolute top-0 right-0 w-96 h-96 bg-[#25D366]/5 rounded-full blur-3xl -z-10 opacity-50"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "absolute bottom-0 left-0 w-64 h-64 bg-[#25D366]/5 rounded-full blur-3xl -z-10 opacity-50"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "max-w-5xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_4__/* .motion */ .E.div, {
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
                            transition: {
                                duration: 0.5
                            },
                            className: "text-center mb-24",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                    ref: headingRef,
                                    className: "text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-16 leading-tight max-w-4xl mx-auto",
                                    children: [
                                        "The difference between ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                                            className: "md:hidden"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "text-[#25D366]",
                                            children: "scaling"
                                        }),
                                        " and",
                                        " ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                                            className: "hidden md:block"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "text-gray-500",
                                            children: "stalling"
                                        }),
                                        " ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                                            className: "md:hidden"
                                        }),
                                        "isn't effort—it's strategy."
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    className: "text-gray-300 text-base md:text-xl mb-32 max-w-3xl mx-auto font-light tracking-wide leading-relaxed",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "text-[#25D366] font-bold",
                                            children: "AI and automation"
                                        }),
                                        " have the power to drive exponential growth, but with countless tools available, the path forward often feels overwhelming. You see the potential, but without a clear strategy,",
                                        " ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "text-gray-500 font-bold",
                                            children: "opportunity quickly turns into complexity"
                                        }),
                                        "."
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "mb-32 max-w-3xl mx-auto text-center",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                            className: "text-white text-2xl md:text-3xl font-medium mb-6",
                                            children: "That's where we come in."
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "h-1 w-32 bg-[#25D366] rounded-full mx-auto"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    ref: mobileNavHeaderRef,
                                    className: "md:hidden mb-8",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "flex justify-around items-center border-b border-gray-700",
                                        children: [
                                            {
                                                section: "strategic",
                                                label: "Strategy",
                                                Icon: modularize_import_loader_name_Target_from_default_as_default_join_esm_icons_target_lucide_react__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z
                                            },
                                            {
                                                section: "ops",
                                                label: "Operations",
                                                Icon: modularize_import_loader_name_User_from_default_as_default_join_esm_icons_user_lucide_react__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z
                                            },
                                            {
                                                section: "implementation",
                                                label: "Implement",
                                                Icon: modularize_import_loader_name_Zap_from_default_as_default_join_esm_icons_zap_lucide_react__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z
                                            }
                                        ].map(({ section, label, Icon })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                onClick: ()=>scrollToSection(section === "strategic" ? strategicRef : section === "ops" ? opsRef : implementationRef, section),
                                                className: `flex-1 py-3 px-2 text-center border-b-2 transition-colors duration-300 ease-in-out focus:outline-none
                      ${activeSection === section ? "border-[#25D366] text-[#25D366]" : "border-transparent text-gray-400 hover:text-gray-200"}
                    `,
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex flex-col items-center",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Icon, {
                                                            className: `w-5 h-5 mb-1 ${activeSection === section ? "text-[#25D366]" : "text-gray-400"}`
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "text-xs font-medium",
                                                            children: label
                                                        })
                                                    ]
                                                })
                                            }, section))
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "hidden md:flex flex-wrap justify-center gap-4 mt-20",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_4__/* .motion */ .E.button, {
                                            onClick: ()=>scrollToSection(strategicRef, "strategic"),
                                            className: `flex items-center gap-2 px-5 py-3 rounded-full w-[280px] justify-center ${activeSection === "strategic" ? "bg-[#25D366] text-white" : "bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366]/20"} transition-colors text-base font-medium`,
                                            whileHover: {
                                                scale: 1.05
                                            },
                                            whileTap: {
                                                scale: 0.95
                                            },
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modularize_import_loader_name_Target_from_default_as_default_join_esm_icons_target_lucide_react__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                                    className: "w-5 h-5"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    children: "Strategic Growth"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modularize_import_loader_name_ChevronLeft_from_default_as_default_join_esm_icons_chevron_left_lucide_react__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                                    className: `w-5 h-5 transition-transform rotate-90 ${activeSection === "strategic" ? "rotate-[270deg]" : ""}`
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_4__/* .motion */ .E.button, {
                                            onClick: ()=>scrollToSection(opsRef, "ops"),
                                            className: `flex items-center gap-2 px-5 py-3 rounded-full w-[280px] justify-center ${activeSection === "ops" ? "bg-[#25D366] text-white" : "bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366]/20"} transition-colors text-base font-medium`,
                                            whileHover: {
                                                scale: 1.05
                                            },
                                            whileTap: {
                                                scale: 0.95
                                            },
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modularize_import_loader_name_User_from_default_as_default_join_esm_icons_user_lucide_react__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                                    className: "w-5 h-5"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    children: "Operations as a Service"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modularize_import_loader_name_ChevronLeft_from_default_as_default_join_esm_icons_chevron_left_lucide_react__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                                    className: `w-5 h-5 transition-transform rotate-90 ${activeSection === "ops" ? "rotate-[270deg]" : ""}`
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_4__/* .motion */ .E.button, {
                                            onClick: ()=>scrollToSection(implementationRef, "implementation"),
                                            className: `flex items-center gap-2 px-5 py-3 rounded-full w-[280px] justify-center ${activeSection === "implementation" ? "bg-[#25D366] text-white" : "bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366]/20"} transition-colors text-base font-medium`,
                                            whileHover: {
                                                scale: 1.05
                                            },
                                            whileTap: {
                                                scale: 0.95
                                            },
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modularize_import_loader_name_Zap_from_default_as_default_join_esm_icons_zap_lucide_react__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                                    className: "w-5 h-5"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    children: "Rapid Implementation"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modularize_import_loader_name_ChevronLeft_from_default_as_default_join_esm_icons_chevron_left_lucide_react__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                                    className: `w-5 h-5 transition-transform rotate-90 ${activeSection === "implementation" ? "rotate-[270deg]" : ""}`
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "relative overflow-visible transition-all duration-300 w-[150%] -ml-[25%]",
                            ref: containerRef,
                            style: {
                                minHeight: contentHeight
                            },
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_5__/* .AnimatePresence */ .M, {
                                mode: "popLayout",
                                custom: direction,
                                children: [
                                    activeSection === "strategic" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__/* .motion */ .E.div, {
                                        ref: strategicRef,
                                        custom: direction,
                                        variants: containerVariants,
                                        initial: "enter",
                                        animate: "center",
                                        exit: "exit",
                                        className: "w-full flex justify-center",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "w-[66.666%]",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_4__/* .motion */ .E.div, {
                                                    className: "text-center mb-12",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "inline-block bg-[#25D366]/10 px-3 py-1 rounded-full mb-4",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "text-[#25D366] text-sm font-medium",
                                                                children: "STRATEGIC GROWTH"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                            className: "text-2xl md:text-3xl font-bold text-white mb-6",
                                                            children: "Unlock Your Business Potential"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "h-1 w-24 bg-[#25D366] mx-auto rounded-full mb-10"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    ref: strategicContentRef,
                                                    className: "pb-16",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__/* .motion */ .E.div, {
                                                            initial: {
                                                                opacity: 0,
                                                                y: 50
                                                            },
                                                            whileInView: {
                                                                opacity: 1,
                                                                y: 0
                                                            },
                                                            viewport: {
                                                                once: true,
                                                                amount: 0.2
                                                            },
                                                            transition: {
                                                                duration: 0.6,
                                                                delay: 0.3
                                                            },
                                                            className: "text-center mb-12 md:mb-12",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: "text-xl md:text-2xl text-white font-medium mb-8 md:mb-2",
                                                                children: "Our mission is to bridge the gap between where your business is today and where it's built to go."
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "max-w-3xl mx-auto mb-12",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                                className: "space-y-12 md:space-y-8",
                                                                children: [
                                                                    "We remove bottlenecks, streamline operations, and implement the right AI-powered systems that drive growth with speed and precision.",
                                                                    "We analyse how you work, spot the gaps, and deliver solutions that fit seamlessly into your business."
                                                                ].map((item, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_4__/* .motion */ .E.li, {
                                                                        className: "flex items-start",
                                                                        initial: {
                                                                            opacity: 0,
                                                                            y: 50
                                                                        },
                                                                        whileInView: {
                                                                            opacity: 1,
                                                                            y: 0
                                                                        },
                                                                        viewport: {
                                                                            once: true,
                                                                            amount: 0.2
                                                                        },
                                                                        transition: {
                                                                            duration: 0.6,
                                                                            delay: 0.4 + index * 0.1
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                className: "w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#25D366]/20 flex items-center justify-center mr-4 mt-1 flex-shrink-0",
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modularize_import_loader_name_Check_from_default_as_default_join_esm_icons_check_lucide_react__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                                                                    className: "w-4 h-4 md:w-5 md:h-5 text-[#25D366]"
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                                className: "text-gray-300 text-base md:text-lg",
                                                                                children: item
                                                                            })
                                                                        ]
                                                                    }, index))
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_4__/* .motion */ .E.div, {
                                                            initial: {
                                                                opacity: 0,
                                                                y: 50
                                                            },
                                                            whileInView: {
                                                                opacity: 1,
                                                                y: 0
                                                            },
                                                            viewport: {
                                                                once: true,
                                                                amount: 0.2
                                                            },
                                                            transition: {
                                                                duration: 0.6,
                                                                delay: 0.6
                                                            },
                                                            className: "text-center py-16 md:py-8",
                                                            children: [
                                                                !isMobile && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "max-w-3xl mx-auto px-4",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                            className: "text-2xl md:text-3xl font-bold text-white mb-6",
                                                                            children: "Our job? Seeing what you don't. Streamlining what you do. Making AI simple—and scaling what works."
                                                                        }),
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                            className: "mt-12 flex flex-col items-center",
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__/* .motion */ .E.p, {
                                                                                    className: "text-[#25D366] mb-2 font-medium",
                                                                                    initial: {
                                                                                        opacity: 0,
                                                                                        y: 10
                                                                                    },
                                                                                    whileInView: {
                                                                                        opacity: 1,
                                                                                        y: 0
                                                                                    },
                                                                                    transition: {
                                                                                        delay: 0.4,
                                                                                        duration: 0.5
                                                                                    },
                                                                                    viewport: {
                                                                                        once: true
                                                                                    },
                                                                                    children: "Discover our approach"
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__/* .motion */ .E.div // Outer div: entrance, click, hover, tap
                                                                                , {
                                                                                    className: "flex items-center justify-center cursor-pointer",
                                                                                    initial: {
                                                                                        opacity: 0,
                                                                                        x: -10
                                                                                    },
                                                                                    whileInView: {
                                                                                        opacity: 1,
                                                                                        x: 0,
                                                                                        transition: {
                                                                                            delay: 1.5,
                                                                                            duration: 0.7
                                                                                        }
                                                                                    },
                                                                                    viewport: {
                                                                                        once: true
                                                                                    },
                                                                                    whileHover: isMobile ? {
                                                                                        x: 5
                                                                                    } : {},
                                                                                    whileTap: {
                                                                                        scale: 0.95
                                                                                    },
                                                                                    onClick: ()=>scrollToSection(opsRef, "ops"),
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__/* .motion */ .E.div // Inner div: continuous animation for SVG
                                                                                    , {
                                                                                        animate: !isMobile ? {
                                                                                            x: [
                                                                                                0,
                                                                                                8
                                                                                            ],
                                                                                            transition: {
                                                                                                delay: 2.2,
                                                                                                duration: 1.0,
                                                                                                repeat: Infinity,
                                                                                                repeatType: "loop",
                                                                                                ease: "easeInOut",
                                                                                                repeatDelay: 0.2
                                                                                            }
                                                                                        } : {
                                                                                            x: 0
                                                                                        },
                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                                            className: "w-12 h-12 md:w-10 md:h-10",
                                                                                            viewBox: "0 0 24 24",
                                                                                            fill: "none",
                                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                                d: "M4 12H20M20 12L14 6M20 12L14 18",
                                                                                                stroke: "#25D366",
                                                                                                strokeWidth: "2",
                                                                                                strokeLinecap: "round",
                                                                                                strokeLinejoin: "round"
                                                                                            })
                                                                                        })
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__/* .motion */ .E.p, {
                                                                                    className: "text-gray-400 text-sm mt-2",
                                                                                    initial: {
                                                                                        opacity: 0,
                                                                                        y: 10
                                                                                    },
                                                                                    whileInView: {
                                                                                        opacity: 1,
                                                                                        y: 0
                                                                                    },
                                                                                    transition: {
                                                                                        delay: 1.3,
                                                                                        duration: 0.5
                                                                                    },
                                                                                    viewport: {
                                                                                        once: true
                                                                                    },
                                                                                    children: "Operations as a Service"
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                }),
                                                                isMobile && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "mt-4 md:hidden",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MobileSectionDots, {
                                                                            activeSection: activeSection,
                                                                            onDotClick: (sectionKey)=>{
                                                                                const targetContentRef = sectionKey === "strategic" ? strategicRef : sectionKey === "ops" ? opsRef : implementationRef;
                                                                                scrollToSection(targetContentRef, sectionKey);
                                                                            }
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                            className: "text-center text-[#25D366] text-sm font-medium mt-2",
                                                                            children: "Next: Operations"
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }, "strategic"),
                                    activeSection === "ops" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__/* .motion */ .E.div, {
                                        ref: opsRef,
                                        custom: direction,
                                        variants: containerVariants,
                                        initial: "enter",
                                        animate: "center",
                                        exit: "exit",
                                        className: "w-full flex justify-center",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "w-[66.666%]",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_4__/* .motion */ .E.div, {
                                                    className: "text-center mb-12",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "inline-block bg-[#25D366]/10 px-3 py-1 rounded-full mb-4",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "text-[#25D366] text-sm font-medium",
                                                                children: "OPERATIONS AS A SERVICE"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                            className: "text-2xl md:text-3xl font-bold text-white mb-6",
                                                            children: "A better way to build ops"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "h-1 w-24 bg-[#25D366] mx-auto rounded-full mb-10"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    ref: opsContentRef,
                                                    className: "pb-16",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__/* .motion */ .E.div, {
                                                            initial: {
                                                                opacity: 0,
                                                                y: 50
                                                            },
                                                            whileInView: {
                                                                opacity: 1,
                                                                y: 0
                                                            },
                                                            viewport: {
                                                                once: true,
                                                                amount: 0.2
                                                            },
                                                            transition: {
                                                                duration: 0.6
                                                            },
                                                            className: "text-center mb-10 md:mb-16",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: "text-gray-300 text-base md:text-xl max-w-2xl mx-auto mb-4 md:mb-6",
                                                                children: "Traditional hiring can be slow, costly, and demands significant upfront commitment. Our approach is different:"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "max-w-5xl mx-auto mb-12 md:mb-20 px-4",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "hidden md:grid md:grid-cols-3 gap-8 md:gap-12",
                                                                    children: [
                                                                        {
                                                                            title: "On-demand automation expertise",
                                                                            description: "Access specialized skills exactly when you need them, without the overhead of full-time hires.",
                                                                            icon: modularize_import_loader_name_Zap_from_default_as_default_join_esm_icons_zap_lucide_react__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z
                                                                        },
                                                                        {
                                                                            title: "Simple implementation process",
                                                                            description: "Clear, straightforward steps from onboarding to execution, with no unnecessary complexity.",
                                                                            icon: modularize_import_loader_name_Target_from_default_as_default_join_esm_icons_target_lucide_react__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z
                                                                        },
                                                                        {
                                                                            title: "Systems you need at an affordable rate",
                                                                            description: "Flexible pricing that scales with your needs - enterprise-level solutions at startup-friendly prices.",
                                                                            icon: modularize_import_loader_name_User_from_default_as_default_join_esm_icons_user_lucide_react__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z
                                                                        }
                                                                    ].map((item, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_4__/* .motion */ .E.div, {
                                                                            className: "flex flex-col items-center text-center p-6 rounded-lg",
                                                                            initial: {
                                                                                opacity: 0,
                                                                                y: 50
                                                                            },
                                                                            whileInView: {
                                                                                opacity: 1,
                                                                                y: 0
                                                                            },
                                                                            viewport: {
                                                                                once: true,
                                                                                amount: 0.2
                                                                            },
                                                                            transition: {
                                                                                duration: 0.6,
                                                                                delay: 0.2 + index * 0.15
                                                                            },
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                    className: "w-16 h-16 rounded-full bg-[#25D366]/20 flex items-center justify-center mb-6",
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(item.icon, {
                                                                                        className: "w-7 h-7 text-[#25D366]"
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                                                    className: "text-xl font-medium text-white mb-4",
                                                                                    children: item.title
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                                    className: "text-base text-gray-400 max-w-xs mx-auto leading-relaxed",
                                                                                    children: item.description
                                                                                })
                                                                            ]
                                                                        }, index))
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MobileFeatures, {
                                                                    features: [
                                                                        {
                                                                            title: "On-demand automation expertise",
                                                                            description: "Access specialized skills exactly when you need them, without the overhead of full-time hires.",
                                                                            icon: modularize_import_loader_name_Zap_from_default_as_default_join_esm_icons_zap_lucide_react__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z
                                                                        },
                                                                        {
                                                                            title: "Simple implementation process",
                                                                            description: "Clear, straightforward steps from onboarding to execution, with no unnecessary complexity.",
                                                                            icon: modularize_import_loader_name_Target_from_default_as_default_join_esm_icons_target_lucide_react__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z
                                                                        },
                                                                        {
                                                                            title: "Systems you need at an affordable rate",
                                                                            description: "Flexible pricing that scales with your needs - enterprise-level solutions at startup-friendly prices.",
                                                                            icon: modularize_import_loader_name_User_from_default_as_default_join_esm_icons_user_lucide_react__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z
                                                                        }
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_4__/* .motion */ .E.div, {
                                                            initial: {
                                                                opacity: 0,
                                                                y: 50
                                                            },
                                                            whileInView: {
                                                                opacity: 1,
                                                                y: 0
                                                            },
                                                            viewport: {
                                                                once: true,
                                                                amount: 0.2
                                                            },
                                                            transition: {
                                                                duration: 0.6,
                                                                delay: 0.6
                                                            },
                                                            className: "text-center py-16 md:py-8",
                                                            children: [
                                                                !isMobile && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "max-w-3xl mx-auto px-4",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__/* .motion */ .E.p, {
                                                                            className: "text-gray-400 text-lg mb-6",
                                                                            initial: {
                                                                                opacity: 0,
                                                                                y: 10
                                                                            },
                                                                            whileInView: {
                                                                                opacity: 1,
                                                                                y: 0
                                                                            },
                                                                            transition: {
                                                                                delay: 0.4,
                                                                                duration: 0.5
                                                                            },
                                                                            viewport: {
                                                                                once: true
                                                                            },
                                                                            children: "What sets us apart?"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__/* .motion */ .E.p, {
                                                                            className: "text-[#25D366] text-2xl font-bold mb-3",
                                                                            initial: {
                                                                                opacity: 0,
                                                                                y: 10
                                                                            },
                                                                            whileInView: {
                                                                                opacity: 1,
                                                                                y: 0
                                                                            },
                                                                            transition: {
                                                                                delay: 0.7,
                                                                                duration: 0.5
                                                                            },
                                                                            viewport: {
                                                                                once: true
                                                                            },
                                                                            children: "Thoughtful solutions. Seamless execution."
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__/* .motion */ .E.p, {
                                                                            className: "text-white text-2xl font-bold",
                                                                            initial: {
                                                                                opacity: 0,
                                                                                y: 10
                                                                            },
                                                                            whileInView: {
                                                                                opacity: 1,
                                                                                y: 0
                                                                            },
                                                                            transition: {
                                                                                delay: 1.0,
                                                                                duration: 0.5
                                                                            },
                                                                            viewport: {
                                                                                once: true
                                                                            },
                                                                            children: "Building systems that grow with your business."
                                                                        }),
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                            className: "mt-12 flex flex-col items-center",
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__/* .motion */ .E.p, {
                                                                                    className: "text-[#25D366] mb-2 font-medium",
                                                                                    initial: {
                                                                                        opacity: 0,
                                                                                        y: 10
                                                                                    },
                                                                                    whileInView: {
                                                                                        opacity: 1,
                                                                                        y: 0
                                                                                    },
                                                                                    transition: {
                                                                                        delay: 0.4,
                                                                                        duration: 0.5
                                                                                    },
                                                                                    viewport: {
                                                                                        once: true
                                                                                    },
                                                                                    children: "See how we do it"
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__/* .motion */ .E.div, {
                                                                                    className: "flex items-center justify-center cursor-pointer",
                                                                                    initial: {
                                                                                        opacity: 0,
                                                                                        x: -10
                                                                                    },
                                                                                    whileInView: {
                                                                                        opacity: 1,
                                                                                        x: 0,
                                                                                        transition: {
                                                                                            delay: 1.5,
                                                                                            duration: 0.7
                                                                                        }
                                                                                    },
                                                                                    viewport: {
                                                                                        once: true
                                                                                    },
                                                                                    whileHover: isMobile ? {
                                                                                        x: 5
                                                                                    } : {},
                                                                                    whileTap: {
                                                                                        scale: 0.95
                                                                                    },
                                                                                    onClick: ()=>scrollToSection(implementationRef, "implementation"),
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__/* .motion */ .E.div, {
                                                                                        animate: !isMobile ? {
                                                                                            x: [
                                                                                                0,
                                                                                                8
                                                                                            ],
                                                                                            transition: {
                                                                                                delay: 2.2,
                                                                                                duration: 1.0,
                                                                                                repeat: Infinity,
                                                                                                repeatType: "loop",
                                                                                                ease: "easeInOut",
                                                                                                repeatDelay: 0.2
                                                                                            }
                                                                                        } : {
                                                                                            x: 0
                                                                                        },
                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                                            className: "w-12 h-12 md:w-10 md:h-10",
                                                                                            viewBox: "0 0 24 24",
                                                                                            fill: "none",
                                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                                d: "M4 12H20M20 12L14 6M20 12L14 18",
                                                                                                stroke: "#25D366",
                                                                                                strokeWidth: "2",
                                                                                                strokeLinecap: "round",
                                                                                                strokeLinejoin: "round"
                                                                                            })
                                                                                        })
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__/* .motion */ .E.p, {
                                                                                    className: "text-gray-400 text-sm mt-2",
                                                                                    initial: {
                                                                                        opacity: 0,
                                                                                        y: 10
                                                                                    },
                                                                                    whileInView: {
                                                                                        opacity: 1,
                                                                                        y: 0
                                                                                    },
                                                                                    transition: {
                                                                                        delay: 1.3,
                                                                                        duration: 0.5
                                                                                    },
                                                                                    viewport: {
                                                                                        once: true
                                                                                    },
                                                                                    children: "Rapid Implementation"
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                }),
                                                                isMobile && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "mt-4 md:hidden",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MobileSectionDots, {
                                                                            activeSection: activeSection,
                                                                            onDotClick: (sectionKey)=>{
                                                                                const targetContentRef = sectionKey === "strategic" ? strategicRef : sectionKey === "ops" ? opsRef : implementationRef;
                                                                                scrollToSection(targetContentRef, sectionKey);
                                                                            }
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                            className: "text-center text-[#25D366] text-sm font-medium mt-2",
                                                                            children: "Next: Implementation"
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }, "ops"),
                                    activeSection === "implementation" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__/* .motion */ .E.div, {
                                        ref: implementationRef,
                                        custom: direction,
                                        variants: containerVariants,
                                        initial: "enter",
                                        animate: "center",
                                        exit: "exit",
                                        className: "w-full flex justify-center",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "w-[66.666%]",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_4__/* .motion */ .E.div, {
                                                    className: "text-center mb-12",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "inline-block bg-[#25D366]/10 px-3 py-1 rounded-full mb-4",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "text-[#25D366] text-sm font-medium",
                                                                children: "RAPID IMPLEMENTATION"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                            className: "text-2xl md:text-3xl font-bold text-white mb-6",
                                                            children: "Why Speed Matters"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "h-1 w-24 bg-[#25D366] mx-auto rounded-full mb-10"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    ref: implementationContentRef,
                                                    className: "pb-16",
                                                    children: [
                                                        !isMobile && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_4__/* .motion */ .E.div, {
                                                            initial: {
                                                                opacity: 0,
                                                                y: 50
                                                            },
                                                            whileInView: {
                                                                opacity: 1,
                                                                y: 0
                                                            },
                                                            viewport: {
                                                                once: true,
                                                                amount: 0.2
                                                            },
                                                            transition: {
                                                                duration: 0.6,
                                                                delay: 0.2
                                                            },
                                                            className: "text-center mb-16",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    className: "text-gray-300 mb-8 max-w-2xl mx-auto",
                                                                    children: "In today's fast-paced business environment, the ability to quickly implement and iterate on solutions is a competitive advantage."
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    className: "text-[#25D366] text-xl font-bold mb-2",
                                                                    children: '"We achieved in 2 weeks what would have taken us 3 months internally."'
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    className: "text-white text-sm mb-12",
                                                                    children: "— Nima S, Women's Faith Forum"
                                                                })
                                                            ]
                                                        }),
                                                        isMobile && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__/* .motion */ .E.div, {
                                                            initial: {
                                                                opacity: 0,
                                                                y: 50
                                                            },
                                                            whileInView: {
                                                                opacity: 1,
                                                                y: 0
                                                            },
                                                            viewport: {
                                                                once: true,
                                                                amount: 0.2
                                                            },
                                                            transition: {
                                                                duration: 0.6,
                                                                delay: 0.2
                                                            },
                                                            className: "text-center mb-12" // Slightly less margin for mobile if quote is removed
                                                            ,
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: "text-gray-300 max-w-2xl mx-auto",
                                                                children: "In today's fast-paced business environment, quickly implementing and iterating solutions is key. Our streamlined approach delivers results fast."
                                                            })
                                                        }),
                                                        !isMobile && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_4__/* .motion */ .E.div, {
                                                            initial: {
                                                                opacity: 0,
                                                                y: 50
                                                            },
                                                            whileInView: {
                                                                opacity: 1,
                                                                y: 0
                                                            },
                                                            viewport: {
                                                                once: true,
                                                                amount: 0.2
                                                            },
                                                            transition: {
                                                                duration: 0.6,
                                                                delay: 0.2
                                                            },
                                                            className: "text-center mb-12",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                    className: "text-2xl md:text-3xl font-bold text-white mb-4",
                                                                    children: "Our Approach"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    className: "text-xl text-gray-300 max-w-3xl mx-auto",
                                                                    children: "A proven process that delivers results twice as fast."
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "relative py-2 mb-8",
                                                            ref: timelineRef,
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__/* .motion */ .E.div, {
                                                                    className: "absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-[#25D366]/20",
                                                                    style: {
                                                                        scaleY: scaleX
                                                                    }
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "py-4",
                                                                    children: implementationSteps.map((step, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TimelineStep, {
                                                                            step: step,
                                                                            index: index,
                                                                            isExpanded: expandedStep === index,
                                                                            onToggle: ()=>setExpandedStep(expandedStep === index ? null : index),
                                                                            isMobile: isMobile
                                                                        }, index))
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "text-center mb-16 mt-8",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    className: "text-[#25D366] text-3xl font-bold mb-12 tracking-tight",
                                                                    children: "Still hiring people? Let's automate that."
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__/* .motion */ .E.div, {
                                                                    whileHover: {
                                                                        scale: 1.05
                                                                    },
                                                                    whileTap: {
                                                                        scale: 0.95
                                                                    },
                                                                    className: "inline-block",
                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .z, {
                                                                        className: "bg-[#25D366] hover:bg-[#128C7E] text-black font-bold text-lg px-8 py-3 rounded-lg flex items-center gap-2 shadow-lg shadow-[#25D366]/20",
                                                                        onClick: ()=>{
                                                                            console.log("[OPS_SCROLL_V2] Implementation button clicked");
                                                                            const element = document.getElementById("booking-interface");
                                                                            if (element) {
                                                                                const offset = 80;
                                                                                const elementPosition = element.offsetTop - offset;
                                                                                customSmoothScrollTo(elementPosition, 3000); // Longer duration (3 seconds)
                                                                            }
                                                                        },
                                                                        children: [
                                                                            "Start Your Implementation",
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modularize_import_loader_name_ArrowRight_from_default_as_default_join_esm_icons_arrow_right_lucide_react__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                                                                className: "w-5 h-5"
                                                                            })
                                                                        ]
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        isMobile && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "mt-4 md:hidden",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MobileSectionDots, {
                                                                activeSection: activeSection,
                                                                onDotClick: (sectionKey)=>{
                                                                    const targetContentRef = sectionKey === "strategic" ? strategicRef : sectionKey === "ops" ? opsRef : implementationRef;
                                                                    scrollToSection(targetContentRef, sectionKey);
                                                                }
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }, "implementation")
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__/* .motion */ .E.div, {
                            className: "h-24 md:h-32 lg:h-40",
                            initial: false,
                            animate: {
                                marginTop: "4rem"
                            },
                            transition: {
                                duration: 0.3
                            }
                        })
                    ]
                })
            ]
        })
    });
}


/***/ }),

/***/ 29256:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97816);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12019);




const Button = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_2__/* .Slot */ .g7 : "button";
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Comp, {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50", className),
        ref: ref,
        ...props
    });
});
Button.displayName = "Button";



/***/ }),

/***/ 12019:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cn: () => (/* binding */ cn)
/* harmony export */ });
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10566);
/* harmony import */ var tailwind_merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59610);


function cn(...inputs) {
    return (0,tailwind_merge__WEBPACK_IMPORTED_MODULE_0__/* .twMerge */ .m)((0,clsx__WEBPACK_IMPORTED_MODULE_1__/* .clsx */ .W)(inputs));
}


/***/ })

};
;