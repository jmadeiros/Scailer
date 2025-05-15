"use strict";
exports.id = 4133;
exports.ids = [4133,9256];
exports.modules = {

/***/ 64133:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ HAL900_FrameworkDiagram)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs + 144 modules
var proxy = __webpack_require__(23694);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/value/use-scroll.mjs + 13 modules
var use_scroll = __webpack_require__(27459);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/value/use-transform.mjs + 3 modules
var use_transform = __webpack_require__(18680);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./src/lib/utils.ts
var utils = __webpack_require__(12019);
// EXTERNAL MODULE: ./node_modules/styled-jsx/style.js
var style = __webpack_require__(86369);
var style_default = /*#__PURE__*/__webpack_require__.n(style);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs + 3 modules
var AnimatePresence = __webpack_require__(37686);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/x.js
var x = __webpack_require__(56206);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/arrow-right.js
var arrow_right = __webpack_require__(37631);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/check.js
var check = __webpack_require__(1264);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/file-text.js
var file_text = __webpack_require__(39546);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/chart-no-axes-column-increasing.js
var chart_no_axes_column_increasing = __webpack_require__(18096);
// EXTERNAL MODULE: ./src/components/ui/button.tsx
var ui_button = __webpack_require__(29256);
// EXTERNAL MODULE: external "next/dist/compiled/react-dom/server-rendering-stub"
var server_rendering_stub_ = __webpack_require__(98704);
;// CONCATENATED MODULE: ./src/components/ServiceDetailsPopup.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 










// Function to scroll smoothly to the booking interface
const scrollToBooking = ()=>{
    const element = document.getElementById("booking-interface");
    if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - offset;
        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }
};
function ServiceDetailsPopup({ isOpen, onClose, service }) {
    const [activeTab, setActiveTab] = (0,react_.useState)("overview");
    const [mounted, setMounted] = (0,react_.useState)(false);
    (0,react_.useEffect)(()=>{
        setMounted(true);
        // Lock body scroll when popup is open
        if (isOpen) {
            document.body.style.overflow = "hidden";
        }
        return ()=>{
            // Restore body scroll when popup is closed
            document.body.style.overflow = "";
        };
    }, [
        isOpen
    ]);
    if (!service) return null;
    const { icon: Icon, title, color, details } = service;
    // Get the service styles and category label based on the title
    const getCategoryLabel = ()=>{
        switch(title){
            case "Personalised Lead Generation":
                return "DATA-DRIVEN LEAD ACQUISITION";
            case "Workflow Automation":
                return "PROCESS AUTOMATION";
            case "Precision Marketing":
                return "MARKETING OPTIMISATION";
            case "Project Management Systems":
                return "PROJECT MANAGEMENT";
            case "Sales Systems":
                return "SALES SYSTEMS";
            case "Website Design & Optimisation":
                return "WEBSITE DESIGN";
            case "AI Strategy & Consultancy":
                return "AI INTEGRATION";
            default:
                return title.toUpperCase();
        }
    };
    // Function to get button background and text colors
    const getButtonColors = ()=>{
        if (title === "AI Strategy & Consultancy") {
            return {
                bg: "#0EA5E9",
                text: "#FFFFFF"
            };
        }
        return {
            bg: color,
            text: "#FFFFFF"
        };
    };
    const buttonColors = getButtonColors();
    // Handle booking button click
    const handleBookingClick = ()=>{
        onClose(); // Close the popup first
        setTimeout(()=>{
            scrollToBooking(); // Then scroll to booking section
        }, 300); // Small delay to allow popup to close
    };
    const popupContent = /*#__PURE__*/ jsx_runtime_.jsx(AnimatePresence/* AnimatePresence */.M, {
        children: isOpen && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "fixed inset-0 bg-black/60 z-[9999]",
                    onClick: onClose,
                    style: {
                        pointerEvents: "auto"
                    }
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "fixed inset-0 flex items-center justify-center z-[10000]",
                    style: {
                        pointerEvents: "none"
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx(proxy/* motion */.E.div, {
                        initial: {
                            opacity: 0,
                            scale: 0.9,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            scale: 1,
                            y: 0
                        },
                        exit: {
                            opacity: 0,
                            scale: 0.9,
                            y: 20
                        },
                        transition: {
                            type: "spring",
                            damping: 25,
                            stiffness: 300
                        },
                        className: "relative w-[95%] md:w-full max-w-2xl mx-2 md:mx-4 overflow-hidden",
                        onClick: (e)=>e.stopPropagation(),
                        style: {
                            position: "relative",
                            zIndex: 10000,
                            pointerEvents: "auto"
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "bg-[#1a1a1a] rounded-xl overflow-hidden shadow-2xl",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "p-4 md:p-6 flex items-center justify-between",
                                    style: {
                                        backgroundColor: title === "AI Strategy & Consultancy" ? "#0c1c2b" : `${color}10`
                                    },
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "flex items-center gap-3 md:gap-4",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center",
                                                    style: {
                                                        backgroundColor: title === "AI Strategy & Consultancy" ? "#0f2942" : `${color}20`
                                                    },
                                                    children: Icon && /*#__PURE__*/ jsx_runtime_.jsx(Icon, {
                                                        className: "w-5 h-5 md:w-6 md:h-6",
                                                        style: {
                                                            color
                                                        }
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "text-[10px] md:text-xs font-semibold uppercase tracking-wider text-gray-400 mb-0.5 md:mb-1",
                                                            children: getCategoryLabel()
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                            className: "text-base md:text-xl font-bold text-white",
                                                            children: title
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            onClick: onClose,
                                            className: "w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center bg-[#2a2a2a] hover:bg-[#3a3a3a] transition-colors",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(x/* default */.Z, {
                                                className: "w-3.5 h-3.5 md:w-4 md:h-4 text-gray-400"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "flex border-b border-[#2a2a2a] overflow-x-auto",
                                    children: [
                                        {
                                            id: "overview",
                                            label: "Overview",
                                            icon: file_text/* default */.Z
                                        },
                                        {
                                            id: "benefits",
                                            label: "What You'll Get",
                                            icon: check/* default */.Z
                                        },
                                        {
                                            id: "comparison",
                                            label: "Comparison",
                                            icon: chart_no_axes_column_increasing/* default */.Z
                                        }
                                    ].map((tab)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                            onClick: ()=>setActiveTab(tab.id),
                                            className: `px-3 md:px-4 py-2 md:py-3 text-xs md:text-sm font-medium relative flex items-center whitespace-nowrap ${activeTab === tab.id ? "text-white" : "text-gray-400 hover:text-gray-300"}`,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(tab.icon, {
                                                    className: "w-3.5 h-3.5 md:w-4 md:h-4 mr-1.5 md:mr-2",
                                                    color: color
                                                }),
                                                tab.label,
                                                activeTab === tab.id && /*#__PURE__*/ jsx_runtime_.jsx(proxy/* motion */.E.div, {
                                                    layoutId: "activeTab",
                                                    className: "absolute bottom-0 left-0 right-0 h-0.5",
                                                    style: {
                                                        backgroundColor: color
                                                    },
                                                    transition: {
                                                        type: "spring",
                                                        damping: 20,
                                                        stiffness: 300
                                                    }
                                                })
                                            ]
                                        }, tab.id))
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "jsx-f171ff243d5e270a" + " " + "p-4 md:p-6 overflow-y-auto max-h-[50vh] md:max-h-[60vh] text-left custom-scrollbar",
                                    children: [
                                        jsx_runtime_.jsx((style_default()), {
                                            id: "f171ff243d5e270a",
                                            children: ".custom-scrollbar.jsx-f171ff243d5e270a::-webkit-scrollbar{width:8px}.custom-scrollbar.jsx-f171ff243d5e270a::-webkit-scrollbar-track{background:transparent}.custom-scrollbar.jsx-f171ff243d5e270a::-webkit-scrollbar-thumb{background-color:rgba(75,75,75,.5);-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px}.custom-scrollbar.jsx-f171ff243d5e270a::-webkit-scrollbar-thumb:hover{background-color:rgba(100,100,100,.6)}"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(AnimatePresence/* AnimatePresence */.M, {
                                            mode: "wait",
                                            children: [
                                                activeTab === "overview" && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(proxy/* motion */.E.div, {
                                                    initial: {
                                                        opacity: 0,
                                                        y: 10
                                                    },
                                                    animate: {
                                                        opacity: 1,
                                                        y: 0
                                                    },
                                                    exit: {
                                                        opacity: 0,
                                                        y: -10
                                                    },
                                                    transition: {
                                                        duration: 0.2
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            className: "jsx-f171ff243d5e270a" + " " + "text-sm md:text-base text-gray-300 mb-4 md:mb-6 leading-relaxed",
                                                            children: details?.serviceDetails?.overview || details?.description || ""
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "jsx-f171ff243d5e270a" + " " + "flex justify-end",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ui_button/* Button */.z, {
                                                                onClick: ()=>setActiveTab("benefits"),
                                                                className: "flex items-center gap-1.5 md:gap-2 text-white text-xs md:text-sm px-3 md:px-4 py-1.5 md:py-2 rounded-md",
                                                                style: {
                                                                    backgroundColor: buttonColors.bg,
                                                                    color: buttonColors.text
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "jsx-f171ff243d5e270a",
                                                                        children: "See What You'll Get"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx(arrow_right/* default */.Z, {
                                                                        className: "w-3.5 h-3.5 md:w-4 md:h-4"
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                }, "overview"),
                                                activeTab === "benefits" && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(proxy/* motion */.E.div, {
                                                    initial: {
                                                        opacity: 0,
                                                        y: 10
                                                    },
                                                    animate: {
                                                        opacity: 1,
                                                        y: 0
                                                    },
                                                    exit: {
                                                        opacity: 0,
                                                        y: -10
                                                    },
                                                    transition: {
                                                        duration: 0.2
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "jsx-f171ff243d5e270a" + " " + "mb-3 md:mb-4",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                    className: "jsx-f171ff243d5e270a" + " " + "text-base md:text-lg font-semibold mb-2 md:mb-3 text-white",
                                                                    children: "What You'll Get"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                                    className: "jsx-f171ff243d5e270a" + " " + "space-y-2 md:space-y-3 mb-4 md:mb-6",
                                                                    children: (details?.whatYoullGet || details?.benefits || []).map((benefit, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(proxy/* motion */.E.li, {
                                                                            initial: {
                                                                                opacity: 0,
                                                                                x: -10
                                                                            },
                                                                            animate: {
                                                                                opacity: 1,
                                                                                x: 0
                                                                            },
                                                                            transition: {
                                                                                delay: index * 0.1
                                                                            },
                                                                            className: "flex items-start gap-2 md:gap-3",
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx(check/* default */.Z, {
                                                                                    className: "w-4 h-4 md:w-5 md:h-5 mt-0.5 flex-shrink-0",
                                                                                    color: color
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                    className: "jsx-f171ff243d5e270a" + " " + "text-xs md:text-[15px] text-gray-300 leading-relaxed",
                                                                                    children: benefit
                                                                                })
                                                                            ]
                                                                        }, index))
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "jsx-f171ff243d5e270a" + " " + "flex justify-end mt-6 md:mt-8",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ui_button/* Button */.z, {
                                                                onClick: ()=>setActiveTab("comparison"),
                                                                className: "flex items-center gap-1.5 md:gap-2 text-white text-xs md:text-sm px-3 md:px-4 py-1.5 md:py-2 rounded-md",
                                                                style: {
                                                                    backgroundColor: buttonColors.bg,
                                                                    color: buttonColors.text
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "jsx-f171ff243d5e270a",
                                                                        children: "See Comparison"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx(arrow_right/* default */.Z, {
                                                                        className: "w-3.5 h-3.5 md:w-4 md:h-4"
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                }, "benefits"),
                                                activeTab === "comparison" && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(proxy/* motion */.E.div, {
                                                    initial: {
                                                        opacity: 0,
                                                        y: 10
                                                    },
                                                    animate: {
                                                        opacity: 1,
                                                        y: 0
                                                    },
                                                    exit: {
                                                        opacity: 0,
                                                        y: -10
                                                    },
                                                    transition: {
                                                        duration: 0.2
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "jsx-f171ff243d5e270a" + " " + "mb-3 md:mb-4",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                    className: "jsx-f171ff243d5e270a" + " " + "text-base md:text-lg font-semibold mb-2 md:mb-3 text-white",
                                                                    children: "Our Approach vs. Traditional Methods"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    className: "jsx-f171ff243d5e270a" + " " + "text-xs md:text-sm text-gray-400 mb-3 md:mb-4",
                                                                    children: "See how our innovative approach compares to traditional methods in the industry."
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "jsx-f171ff243d5e270a" + " " + "space-y-3 md:space-y-4 mb-4 md:mb-6",
                                                                    children: (details?.comparison || []).map((item, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(proxy/* motion */.E.div, {
                                                                            initial: {
                                                                                opacity: 0,
                                                                                y: 10
                                                                            },
                                                                            animate: {
                                                                                opacity: 1,
                                                                                y: 0
                                                                            },
                                                                            transition: {
                                                                                delay: index * 0.1
                                                                            },
                                                                            className: "grid grid-cols-2 gap-2 md:gap-4",
                                                                            children: [
                                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                    className: "jsx-f171ff243d5e270a" + " " + "bg-[#2a2a2a] p-2 md:p-4 rounded-lg",
                                                                                    children: [
                                                                                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                                                            className: "jsx-f171ff243d5e270a" + " " + "font-medium text-gray-300 mb-1 md:mb-2 text-xs md:text-sm",
                                                                                            children: "Traditional Approach"
                                                                                        }),
                                                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                                            className: "jsx-f171ff243d5e270a" + " " + "text-[10px] md:text-sm text-gray-400 leading-relaxed",
                                                                                            children: item.traditional
                                                                                        })
                                                                                    ]
                                                                                }),
                                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                    style: {
                                                                                        backgroundColor: title === "AI Strategy & Consultancy" ? "#0c1c2b" : `${color}15`
                                                                                    },
                                                                                    className: "jsx-f171ff243d5e270a" + " " + "p-2 md:p-4 rounded-lg",
                                                                                    children: [
                                                                                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                                                            style: {
                                                                                                color
                                                                                            },
                                                                                            className: "jsx-f171ff243d5e270a" + " " + "font-medium mb-1 md:mb-2 text-xs md:text-sm",
                                                                                            children: "Our Approach"
                                                                                        }),
                                                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                                            className: "jsx-f171ff243d5e270a" + " " + "text-[10px] md:text-sm text-gray-300 leading-relaxed",
                                                                                            children: item.ourApproach
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        }, index))
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "jsx-f171ff243d5e270a" + " " + "flex justify-center",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(ui_button/* Button */.z, {
                                                                className: "px-4 md:px-6 text-white text-xs md:text-sm py-1.5 md:py-2 rounded-md",
                                                                style: {
                                                                    backgroundColor: buttonColors.bg,
                                                                    color: buttonColors.text
                                                                },
                                                                onClick: handleBookingClick,
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "jsx-f171ff243d5e270a",
                                                                    children: "Get Started Today"
                                                                })
                                                            })
                                                        })
                                                    ]
                                                }, "comparison")
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                })
            ]
        })
    });
    // Use React Portal to render at the root level to avoid z-index stacking issues
    return mounted && typeof document !== "undefined" ? /*#__PURE__*/ (0,server_rendering_stub_.createPortal)(popupContent, document.body) : null;
}

// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/settings.js
var settings = __webpack_require__(5987);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/zap.js
var zap = __webpack_require__(76494);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/users.js
var users = __webpack_require__(91672);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/user.js
var user = __webpack_require__(93680);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/globe.js
var globe = __webpack_require__(86078);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/message-square.js
var message_square = __webpack_require__(18310);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/circuit-board.js
var circuit_board = __webpack_require__(57026);
;// CONCATENATED MODULE: ./src/components/HAL900-FrameworkDiagram.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 












// Simple SVG icons instead of Lucide icons
const IconBarChart = (props)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("line", {
                x1: "12",
                y1: "20",
                x2: "12",
                y2: "10"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("line", {
                x1: "18",
                y1: "20",
                x2: "18",
                y2: "4"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("line", {
                x1: "6",
                y1: "20",
                x2: "6",
                y2: "16"
            })
        ]
    });
const IconSettings = (props)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                cx: "12",
                cy: "12",
                r: "3"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
            })
        ]
    });
const IconZap = (props)=>/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("polygon", {
            points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2"
        })
    });
const IconUsers = (props)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                cx: "9",
                cy: "7",
                r: "4"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M23 21v-2a4 4 0 0 0-3-3.87"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M16 3.13a4 4 0 0 1 0 7.75"
            })
        ]
    });
const IconUser = (props)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                cx: "12",
                cy: "7",
                r: "4"
            })
        ]
    });
const IconGlobe = (props)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                cx: "12",
                cy: "12",
                r: "10"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("line", {
                x1: "2",
                y1: "12",
                x2: "22",
                y2: "12"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
            })
        ]
    });
const IconArrowRight = (props)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("line", {
                x1: "5",
                y1: "12",
                x2: "19",
                y2: "12"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("polyline", {
                points: "12 5 19 12 12 19"
            })
        ]
    });
const IconArrowLeft = (props)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("line", {
                x1: "19",
                y1: "12",
                x2: "5",
                y2: "12"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("polyline", {
                points: "12 5 5 12 12 19"
            })
        ]
    });
const iconColors = [
    "#9CA3AF",
    "#0EA5E9",
    "#22C55E",
    "#EF4444",
    "#EC4899",
    "#F59E0B",
    "#8B5CF6",
    "#ffffff"
];
const timelineColor = "#8B5CF6";
// Add the purple dot keyframes
const purpleDotKeyframes = `
  @keyframes streamDot {
    0% {
      top: -150px;
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    100% {
      top: 800px;
      opacity: 0;
    }
  }

  @keyframes streamDotMobile {
    0% {
      top: -65px;
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    100% {
      top: 800px;
      opacity: 0;
    }
  }

  @media (max-width: 768px) {
    @keyframes streamDot {
      0% {
        top: -50px;
        opacity: 0;
      }
      10% {
        opacity: 1;
      }
      90% {
        opacity: 1;
      }
      100% {
        top: 800px;
        opacity: 0;
      }
    }
  }
`;
const mobileStyles = `
  @media (max-width: 768px) {
    .w-10 {
      width: 2.5rem;
    }
    .h-10 {
      height: 2.5rem;
    }
    .w-6 {
      width: 1.5rem;
    }
    .h-6 {
      height: 1.5rem;
    }
    .mobile-icon-adjust {
      transform: translateX(0);
      transition: transform 0.3s ease-in-out;
    }
    .mobile-icon-adjust:nth-child(2) {
      transform: translateX(5%);
    }
    .mobile-icon-adjust:nth-child(3) {
      transform: translateX(5%);
    }
    .mobile-icon-adjust:nth-child(4) {
      transform: translateX(2%);
    }
    .mobile-icon-adjust:nth-child(5) {
      transform: translateX(5%);
    }
    .hiring-label {
      font-size: 0;
    }
    .hiring-label:before {
      content: "HIRING SYSTEMS";
      font-size: 8px;
    }
    .timeline-line {
      top: -50px !important;
    }
    .framework-path {
      stroke-width: 5 !important;
    }
    svg circle.framework-dot {
      r: 8 !important;
    }
    .framework-connection {
      r: 4.5 !important;
    }
    .mobile-text-xs {
      font-size: 0.65rem !important;
    }
    .mobile-text-sm {
      font-size: 0.75rem !important;
    }
    .mobile-text-base {
      font-size: 0.825rem !important;
    }
    .mobile-leading-tight {
      line-height: 1.2 !important;
    }
    .mobile-description {
      font-size: 0.7rem !important;
      line-height: 1.3 !important;
    }
    .mobile-title-heading {
      font-size: 1.75rem !important;
    }
    .mobile-subheading {
      font-size: 0.85rem !important;
    }
  }
`;
// Add all keyframes to document
if (typeof document !== "undefined") {
    const style = document.createElement("style");
    style.textContent = purpleDotKeyframes + mobileStyles;
    document.head.appendChild(style);
}
const ColoredIcon = ({ icon: Icon, color })=>{
    return /*#__PURE__*/ _jsx(Icon, {
        className: "w-4 h-4 md:w-10 md:h-10",
        color: color
    });
};
const FeatureBox = ({ icon: Icon, title, description, whatYoullGet, comparison, label, isActive, color, isLeft, isModalOpen, setActiveModal, featureIndex, portfolio, serviceDetails })=>{
    const ref = (0,react_.useRef)(null);
    const [isHovered, setIsHovered] = (0,react_.useState)(false);
    const buttonRef = (0,react_.useRef)(null);
    // Add a click handler that stops propagation
    const handleLearnMoreClick = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        setActiveModal(featureIndex);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(proxy/* motion */.E.div, {
        ref: ref,
        initial: {
            opacity: 0,
            x: isLeft ? -20 : 20
        },
        animate: {
            opacity: isActive || isHovered ? 1 : 0.5,
            x: 0
        },
        transition: {
            duration: 0.5,
            ease: "easeOut"
        },
        className: `relative ${isLeft ? "text-right md:pr-12 pr-6" : "md:pl-12 pl-6"}`,
        onMouseEnter: ()=>setIsHovered(true),
        onMouseLeave: ()=>setIsHovered(false),
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(proxy/* motion */.E.div, {
                className: "relative overflow-visible",
                transition: {
                    duration: 0.3
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(proxy/* motion */.E.div, {
                        className: `flex items-center gap-2 md:gap-3 mb-2 md:mb-3 ${isLeft ? "justify-end" : ""}`,
                        initial: {
                            y: 0
                        },
                        animate: {
                            y: isHovered ? -2 : 0
                        },
                        transition: {
                            duration: 0.2
                        },
                        children: [
                            !isLeft && /*#__PURE__*/ jsx_runtime_.jsx(proxy/* motion */.E.div, {
                                className: "relative",
                                animate: isHovered ? {
                                    scale: [
                                        1,
                                        1.1,
                                        1
                                    ],
                                    rotate: [
                                        0,
                                        -5,
                                        5,
                                        0
                                    ]
                                } : {},
                                transition: {
                                    duration: 0.5
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "relative z-10",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Icon, {
                                        className: "h-6 w-6 md:h-8 md:w-8 stroke-[1.5]",
                                        style: {
                                            color
                                        }
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "text-[8px] md:text-xs font-medium text-gray-400 uppercase tracking-wider whitespace-nowrap mobile-text-xs hidden md:inline",
                                        children: label
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        className: "text-[8px] font-medium text-gray-400 tracking-wider whitespace-nowrap mobile-text-xs md:hidden",
                                        children: [
                                            label === "HIRING SYSTEMS" && "HIRING",
                                            label === "SMART HIRING & OPTIMISATION" && "HIRING",
                                            label === "PROJECT MANAGEMENT" && "PROJECT MGMT",
                                            label === "WORKFLOW MANAGEMENT SYSTEMS" && "WORKFLOW",
                                            label === "PROCESS AUTOMATION" && "WORKFLOW",
                                            label === "MARKETING OPTIMISATION" && "MARKETING",
                                            label === "DATA-DRIVEN LEAD ACQUISITION" && "LEAD GEN",
                                            label === "WEBSITE DESIGN" && "WEBSITE",
                                            label === "CONVERSATIONAL AI" && "AI CHAT",
                                            label === "AI INTEGRATION" && "AI STRATEGY"
                                        ]
                                    })
                                ]
                            }),
                            isLeft && /*#__PURE__*/ jsx_runtime_.jsx(proxy/* motion */.E.div, {
                                className: "relative",
                                animate: isHovered ? {
                                    scale: [
                                        1,
                                        1.1,
                                        1
                                    ],
                                    rotate: [
                                        0,
                                        -5,
                                        5,
                                        0
                                    ]
                                } : {},
                                transition: {
                                    duration: 0.5
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "relative z-10",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Icon, {
                                        className: "h-6 w-6 md:h-8 md:w-8 stroke-[1.5]",
                                        style: {
                                            color
                                        }
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(proxy/* motion */.E.h3, {
                        className: "text-sm md:text-lg font-semibold text-white mb-1 md:mb-2 mobile-text-sm",
                        initial: {
                            y: 0
                        },
                        animate: {
                            y: isHovered ? -1 : 0
                        },
                        transition: {
                            duration: 0.2,
                            delay: 0.1
                        },
                        children: title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(proxy/* motion */.E.p, {
                        className: "text-xs md:text-base text-gray-400 leading-relaxed mobile-description",
                        initial: {
                            y: 0
                        },
                        animate: {
                            y: isHovered ? -1 : 0
                        },
                        transition: {
                            duration: 0.2,
                            delay: 0.15
                        },
                        children: description
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(proxy/* motion */.E.div, {
                        initial: {
                            x: 0
                        },
                        animate: {
                            x: isHovered ? isLeft ? -3 : 3 : 0
                        },
                        transition: {
                            duration: 0.2
                        },
                        className: "relative",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                            ref: buttonRef,
                            onClick: handleLearnMoreClick,
                            className: `inline-flex items-center text-xs md:text-sm font-medium transition-colors relative group mobile-text-xs ${isLeft ? "flex-row-reverse" : ""}`,
                            style: {
                                color: isHovered ? color : "#6B7280"
                            },
                            children: [
                                "Learn more",
                                /*#__PURE__*/ jsx_runtime_.jsx(proxy/* motion */.E.div, {
                                    animate: isHovered ? {
                                        x: isLeft ? -5 : 5
                                    } : {
                                        x: 0
                                    },
                                    transition: {
                                        duration: 0.2
                                    },
                                    children: isLeft ? /*#__PURE__*/ jsx_runtime_.jsx(IconArrowLeft, {
                                        className: `h-3 w-3 md:h-4 md:h-4 ${isLeft ? "mr-1 md:mr-2" : "ml-1 md:ml-2"}`
                                    }) : /*#__PURE__*/ jsx_runtime_.jsx(IconArrowRight, {
                                        className: `h-3 w-3 md:h-4 md:h-4 ${isLeft ? "mr-1 md:mr-2" : "ml-1 md:ml-2"}`
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(proxy/* motion */.E.div, {
                                    className: "absolute bottom-0 left-0 right-0 h-0.5 origin-left",
                                    style: {
                                        backgroundColor: color
                                    },
                                    initial: {
                                        scaleX: 0
                                    },
                                    animate: {
                                        scaleX: isHovered ? 1 : 0
                                    },
                                    transition: {
                                        duration: 0.3
                                    }
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "h-8 md:h-12"
            }),
            isModalOpen && /*#__PURE__*/ jsx_runtime_.jsx(ServiceDetailsPopup, {
                isOpen: isModalOpen,
                onClose: ()=>setActiveModal(null),
                service: {
                    icon: Icon,
                    title: title,
                    color: color,
                    details: {
                        description: description,
                        benefits: whatYoullGet,
                        howItWorks: [],
                        results: [],
                        integrations: [],
                        comparison: comparison,
                        whatYoullGet: whatYoullGet,
                        serviceDetails: {
                            overview: serviceDetails?.overview || description
                        }
                    }
                }
            })
        ]
    });
};
// Define the paths
const paths = [
    "M100 10 C 100 10, 250 505, 600 505",
    "M300 10 C 300 10, 375 505, 600 505",
    "M500 10 C 500 10, 525 505, 600 505",
    "M700 10 C 700 10, 675 505, 600 505",
    "M900 10 C 900 10, 825 505, 600 505",
    "M1100 10 C 1100 10, 950 505, 600 505"
];
const HAL900FrameworkDiagram = ()=>{
    const containerRef = (0,react_.useRef)(null);
    const timelineRef = (0,react_.useRef)(null);
    const [activeFeature, setActiveFeature] = (0,react_.useState)(0);
    const [activeModal, setActiveModal] = (0,react_.useState)(null);
    const featureRefs = (0,react_.useRef)([]);
    const [isMounted, setIsMounted] = (0,react_.useState)(false);
    const { scrollYProgress } = (0,use_scroll/* useScroll */.v)({
        target: containerRef,
        offset: [
            "start end",
            "end start"
        ]
    });
    const lineHeight = (0,use_transform/* useTransform */.H)(scrollYProgress, [
        0,
        1
    ], [
        "0%",
        "100%"
    ]);
    const lineOpacity = (0,use_transform/* useTransform */.H)(scrollYProgress, [
        0,
        0.1,
        0.9,
        1
    ], [
        0.1,
        0.15,
        0.15,
        0.1
    ]);
    const features = [
        {
            icon: chart_no_axes_column_increasing/* default */.Z,
            label: "DATA-DRIVEN LEAD ACQUISITION",
            title: "Personalised Lead Generation",
            description: "Uncover high-value leads with advanced data scraping and predictive targeting.",
            whatYoullGet: [
                "Consistent pipeline of qualified, high-intent leads",
                "AI-personalised outreach that increases engagement",
                "Automated follow-ups to boost conversions and reviews",
                "Focused targeting using behavioural and demographic data",
                "Seamless CRM integration for efficient lead tracking",
                "Reduced reliance on paid ads and manual prospecting"
            ],
            comparison: [
                {
                    traditional: "Manual lead research that's time-consuming and often results in low-quality prospects",
                    ourApproach: "AI-powered data scraping and analysis that identifies high-value prospects with precision"
                },
                {
                    traditional: "Generic targeting based on broad demographic criteria with high waste",
                    ourApproach: "Predictive targeting using behavioral and intent signals to focus on leads most likely to convert"
                },
                {
                    traditional: "Static lead lists that quickly become outdated",
                    ourApproach: "Dynamic lead generation that continuously learns and improves based on conversion data"
                }
            ],
            serviceDetails: {
                overview: "Our data-driven lead acquisition system uses advanced algorithms to identify and target high-value prospects with precision. We combine data scraping, predictive analytics, and machine learning to generate qualified leads that are most likely to convert, saving you time and resources while maximising your sales potential."
            }
        },
        {
            icon: settings/* default */.Z,
            label: "PROCESS AUTOMATION",
            title: "Workflow Automation",
            description: "Streamline tasks, boost efficiency, and enhance customer interactions with intelligent automation.",
            whatYoullGet: [
                "Automated workflows for key admin and ops tasks",
                "Faster invoicing and reduced payment delays",
                "Custom approval and delegation flows",
                "Smart notifications and reminders",
                "Integrated with your CRM, email, and project tools",
                "Increased team productivity and consistency"
            ],
            comparison: [
                {
                    traditional: "Manual handoffs between team members that create delays and information gaps",
                    ourApproach: "Automated workflows with real-time updates and transparent process tracking"
                },
                {
                    traditional: "Siloed systems requiring duplicate data entry and manual reconciliation",
                    ourApproach: "Integrated platforms with automated data synchronization across all business systems"
                },
                {
                    traditional: "Reactive process management that addresses issues after they occur",
                    ourApproach: "Proactive workflow optimization with predictive analytics to prevent bottlenecks before they happen"
                }
            ],
            serviceDetails: {
                overview: "Our intelligent workflow automation platform streamlines your business processes, eliminates repetitive tasks, and enhances customer interactions. We build custom solutions that integrate with your existing systems to boost efficiency across your organisation, allowing your team to focus on high-value activities rather than manual processes."
            }
        },
        {
            icon: zap/* default */.Z,
            label: "MARKETING OPTIMISATION",
            title: "Precision Marketing",
            description: "Elevate campaigns with data-driven targeting, content creation, and predictive analytics.",
            whatYoullGet: [
                "Targeted campaigns that attract the right audience",
                "AI-optimised ad performance for better ROI",
                "Strong social media presence with engaging content",
                "Improved Google rankings through structured SEO",
                "Automated review collection to build trust and credibility",
                "Clear reporting focused on sales and lead growth"
            ],
            comparison: [
                {
                    traditional: "Broad targeting that wastes budget on uninterested audiences",
                    ourApproach: "Precision targeting based on intent signals and behavioral data to reach only the most relevant prospects"
                },
                {
                    traditional: "Generic messaging that tries to appeal to everyone but resonates with no one",
                    ourApproach: "Personalized content tailored to specific audience segments based on their unique needs and pain points"
                },
                {
                    traditional: "Campaign optimization based on gut feeling and limited data",
                    ourApproach: "Data-driven optimization using AI and machine learning to continuously improve performance"
                }
            ],
            serviceDetails: {
                overview: "Our precision marketing approach leverages data-driven insights to create highly targeted campaigns that deliver measurable results. We combine advanced targeting, compelling content creation, and predictive analytics to maximise your marketing ROI, ensuring that your message reaches the right audience at the right time with the right message."
            }
        },
        {
            icon: users/* default */.Z,
            label: "PROJECT MANAGEMENT",
            title: "Project Management Systems",
            description: "Keep customers engaged with personalised experiences and automated re-engagement strategies.",
            whatYoullGet: [
                "AI-powered lead prioritisation and scoring",
                "Centralised view of your entire sales pipeline",
                "Automated tasks and reminders for your team",
                "Real-time visibility into customer activity",
                "Seamless integrations with existing tools",
                "Improved sales team efficiency and deal velocity"
            ],
            comparison: [
                {
                    traditional: "Disorganized project tracking with tasks scattered across different tools and platforms",
                    ourApproach: "Unified project management system that organizes all tasks, deadlines, and team responsibilities in one place"
                },
                {
                    traditional: "Manual follow-ups that are often forgotten or delayed",
                    ourApproach: "Automated task creation and reminders that ensure consistent follow-up and nothing falls through the cracks"
                },
                {
                    traditional: "Limited visibility into project progress and team workloads",
                    ourApproach: "Complete visibility and control over every stage of the project with real-time insights and reporting"
                }
            ],
            serviceDetails: {
                overview: "We implement smart project management systems that streamline your workflows and keep your team organised. Our solutions integrate with your existing tools, automate repetitive tasks, and provide clear visibility into project progress. By centralising task management and automating follow-ups, we help you deliver projects on time and keep everything moving forward efficiently."
            }
        },
        {
            icon: user/* default */.Z,
            label: "HIRING SYSTEMS",
            title: "Hiring Systems",
            description: "Streamline hiring and workforce management with intelligent sourcing and optimisation.",
            whatYoullGet: [
                "AI-driven candidate sourcing and engagement",
                "Custom email campaigns tailored to job seekers",
                "Smart screening using role-specific questionnaires",
                "Automated scoring to rank and prioritise candidates",
                "Faster, more efficient hiring decisions",
                "Reduced recruitment costs and improved candidate quality"
            ],
            comparison: [
                {
                    traditional: "Manual resume screening that's time-consuming and subject to unconscious bias",
                    ourApproach: "AI-powered candidate screening that evaluates skills and fit objectively based on data"
                },
                {
                    traditional: "Passive job postings that rely on candidates finding you",
                    ourApproach: "Proactive talent sourcing that identifies and engages qualified candidates even when they're not actively job hunting"
                },
                {
                    traditional: "Slow hiring processes that lose top candidates to faster-moving competitors",
                    ourApproach: "Streamlined recruitment workflows that reduce time-to-hire without sacrificing quality"
                }
            ],
            serviceDetails: {
                overview: "Our recruitment automation system uses proprietary systems to source, assess, and rank job candidates with precision. From personalised outreach to intelligent questionnaires and scoring, we streamline your hiring process and deliver a shortlist of high-quality applicants—using AI to rank candidates and removing guesswork while saving you time and ensuring you find the perfect candidates faster."
            }
        },
        {
            icon: globe/* default */.Z,
            label: "WEBSITE DESIGN",
            title: "Website Design & Optimisation",
            description: "Create high-performance, SEO-friendly sites optimised for conversions and user experience.",
            whatYoullGet: [
                "Custom design aligned with your brand and goals",
                "SEO-optimised for increased search visibility",
                "Built for speed and mobile responsiveness",
                "Layouts engineered for lead conversion",
                "Seamless integration with sales and automation tools",
                "Future-proofed to grow with your business"
            ],
            comparison: [
                {
                    traditional: "Template-based designs that look generic and fail to differentiate your brand",
                    ourApproach: "Custom designs tailored to your unique brand identity and specific business objectives"
                },
                {
                    traditional: "Static websites that quickly become outdated and require complete rebuilds",
                    ourApproach: "Scalable, modular websites built on flexible frameworks that can evolve with your business"
                },
                {
                    traditional: "Design-first approach that prioritizes aesthetics over results",
                    ourApproach: "Conversion-focused design that balances visual appeal with proven conversion principles"
                }
            ],
            portfolio: [
                "womensfaithforum.com"
            ],
            serviceDetails: {
                overview: "We create high-performance, SEO-friendly websites that are optimised for conversions. Our designs combine visual appeal with strategic functionality to ensure your website becomes your most effective digital asset. Current portfolio: womensfaithforum.com"
            }
        },
        {
            icon: message_square/* default */.Z,
            label: "CONVERSATIONAL AI",
            title: "Conversational AI",
            description: "Build intelligent chatbots and virtual assistants that engage customers and automate support.",
            whatYoullGet: [
                "24/7 automated customer support",
                "Instant handling of enquiries and lead qualification",
                "AI-driven email responders for sales and support",
                "Seamless appointment booking and routing",
                "Consistent customer experience across all channels",
                "Scalable support without increasing headcount"
            ],
            comparison: [
                {
                    traditional: "Basic chatbots with rigid scripts that frustrate users when they go off-script",
                    ourApproach: "Intelligent conversational AI that understands context and handles natural language variations"
                },
                {
                    traditional: "Siloed support channels that create inconsistent customer experiences",
                    ourApproach: "Unified conversational layer that provides consistent experiences across all channels"
                },
                {
                    traditional: "Static FAQ systems that require customers to search for information",
                    ourApproach: "Proactive virtual assistants that guide users and anticipate their needs"
                }
            ],
            serviceDetails: {
                overview: "We build and deploy AI-driven assistants—like chatbots, virtual receptionists, and email responders—to handle customer communication at scale. These tools respond instantly, qualify leads, schedule appointments, and manage enquiries—giving you a fully responsive front-line without the overhead."
            }
        },
        {
            icon: circuit_board/* default */.Z,
            label: "AI INTEGRATION",
            title: "AI Strategy & Consultancy",
            description: "Expert guidance on AI strategy, implementation, and integration with your existing systems.",
            whatYoullGet: [
                "In-depth operational audit across departments",
                "Custom AI and automation strategy development",
                "Review of CRMs, workflows, marketing, and sales processes",
                "Practical roadmap with step-by-step improvements",
                "Hands-on support through implementation",
                "Long-term efficiency, scalability, and cost savings"
            ],
            comparison: [
                {
                    traditional: "Technology-first approach that focuses on AI capabilities rather than business outcomes",
                    ourApproach: "Business-first strategy that aligns AI initiatives with specific organizational objectives"
                },
                {
                    traditional: "Siloed AI projects that create technical debt and integration challenges",
                    ourApproach: "Holistic approach that considers your entire technology ecosystem and ensures seamless integration"
                },
                {
                    traditional: "One-time AI implementations that quickly become outdated",
                    ourApproach: "Sustainable AI strategy with continuous improvement and adaptation to emerging technologies"
                }
            ],
            serviceDetails: {
                overview: "Our AI Consultancy provides expert guidance on AI strategy, implementation, and integration with your existing systems. We help you navigate the complex AI landscape, identify high-impact opportunities, and develop a roadmap for successful adoption. Our team of specialists ensures your AI initiatives align with business goals, deliver measurable ROI, and create sustainable competitive advantages."
            }
        }
    ];
    (0,react_.useEffect)(()=>{
        const unsubscribe = scrollYProgress.onChange((latest)=>{
            const featureIndex = Math.min(Math.floor(latest * features.length), features.length - 1);
            setActiveFeature(featureIndex);
        });
        return ()=>unsubscribe();
    }, [
        scrollYProgress,
        features.length
    ]);
    (0,react_.useEffect)(()=>{
        setIsMounted(true);
    }, []);
    const scrollToTimeline = ()=>{
        if (timelineRef.current) {
            const element = timelineRef.current;
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - offset;
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };
    const scrollToFeature = (index)=>{
        const featureElement = featureRefs.current[index];
        if (featureElement) {
            const offset = 100;
            const elementPosition = featureElement.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - offset;
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };
    (0,react_.useEffect)(()=>{
        // Debug logging for container and SVG dimensions
        const container = document.querySelector(".max-w-sm");
        const svg = container?.querySelector("svg");
        const iconContainer = container?.querySelector(".flex.justify-between");
        if (container && svg && iconContainer) {
            console.log("Container width:", container.clientWidth);
            console.log("SVG width:", svg.clientWidth);
            console.log("SVG viewBox:", svg.getAttribute("viewBox"));
            console.log("Icon container width:", iconContainer.clientWidth);
            console.log("Icon container offset:", iconContainer.getBoundingClientRect().x);
            console.log("Visible viewport width:", window.innerWidth);
        }
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "py-24 md:py-32 bg-[#2a2a2a] relative",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container mx-auto px-4",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(proxy/* motion */.E.div, {
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
                    className: "text-center mb-12 md:mb-24",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                            className: "text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 md:mb-12 mobile-title-heading",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "block",
                                    children: "Infrastructure That Scales"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "block",
                                    children: "Your Business Automatically"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "flex flex-col items-center space-y-1 mt-4 md:mt-8",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "text-base md:text-xl text-gray-300 px-4 md:px-0 max-w-3xl mx-auto leading-relaxed mobile-subheading mobile-leading-tight",
                                children: "Leverage our precision-engineered, intelligent automation frameworks to deliver your business at scale, without added infrastructure overhead."
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "relative w-full aspect-[16/9] max-w-sm mx-auto z-10 md:max-w-5xl",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                            viewBox: "0 0 1200 675",
                            className: "w-full h-full",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            preserveAspectRatio: "xMidYMid meet",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("defs", {
                                    children: paths.map((d, i)=>/*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            id: `path-${i}`,
                                            d: d
                                        }, i))
                                }),
                                paths.map((d, i)=>/*#__PURE__*/ jsx_runtime_.jsx("use", {
                                        href: `#path-${i}`,
                                        stroke: iconColors[i],
                                        strokeWidth: "3",
                                        className: "framework-path"
                                    }, i)),
                                [
                                    100,
                                    300,
                                    500,
                                    700,
                                    900,
                                    1100
                                ].map((cx, i)=>/*#__PURE__*/ jsx_runtime_.jsx("circle", {
                                        cx: cx,
                                        cy: "10",
                                        r: "3",
                                        fill: iconColors[i],
                                        className: "framework-connection"
                                    }, i)),
                                paths.map((_, i)=>[
                                        ...Array(3)
                                    ].map((_, dotIndex)=>/*#__PURE__*/ jsx_runtime_.jsx("circle", {
                                            r: "4",
                                            fill: iconColors[i],
                                            className: "framework-dot",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("animateMotion", {
                                                dur: "3s",
                                                repeatCount: "indefinite",
                                                begin: `${dotIndex * 1}s`,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("mpath", {
                                                    href: `#path-${i}`
                                                })
                                            })
                                        }, `${i}-${dotIndex}`))),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                                    transform: "translate(500, 485)",
                                    style: {
                                        cursor: "pointer"
                                    },
                                    onClick: scrollToTimeline,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                            x: "0",
                                            y: "0",
                                            width: "200",
                                            height: "56",
                                            rx: "28",
                                            fill: "#1a1a1a",
                                            className: "hover:fill-scailer-light transition-colors"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("text", {
                                            x: "100",
                                            y: "36",
                                            textAnchor: "middle",
                                            fill: "white",
                                            fontSize: "20",
                                            fontFamily: "system-ui",
                                            className: "font-medium pointer-events-none",
                                            children: "Our Services"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "absolute top-[10px] transform -translate-y-1/2 inset-x-0",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "flex justify-between items-center px-4 md:px-12",
                                children: [
                                    IconBarChart,
                                    IconSettings,
                                    IconZap,
                                    IconUsers,
                                    IconUser,
                                    IconGlobe
                                ].map((Icon, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (0,utils.cn)("relative", index === 1 || index === 2 || index === 3 || index === 4 ? "mobile-icon-adjust" : ""),
                                        onClick: ()=>{
                                            setActiveFeature(index);
                                            // Scroll to the feature element
                                            const featureEl = featureRefs.current[index];
                                            if (featureEl) {
                                                // Scroll with smooth behavior
                                                featureEl.scrollIntoView({
                                                    behavior: "smooth",
                                                    block: "center"
                                                });
                                                // Open the popup after scrolling
                                                setTimeout(()=>{
                                                    setActiveModal(index);
                                                }, 800); // Wait a bit for the scroll to complete
                                            }
                                        },
                                        role: "button",
                                        tabIndex: 0,
                                        "aria-label": `View ${features[index]?.label}`,
                                        onKeyDown: (e)=>{
                                            if (e.key === "Enter" || e.key === " ") {
                                                setActiveFeature(index);
                                                // Scroll to the feature element
                                                const featureEl = featureRefs.current[index];
                                                if (featureEl) {
                                                    // Scroll with smooth behavior
                                                    featureEl.scrollIntoView({
                                                        behavior: "smooth",
                                                        block: "center"
                                                    });
                                                    // Open the popup after scrolling
                                                    setTimeout(()=>{
                                                        setActiveModal(index);
                                                    }, 800); // Wait a bit for the scroll to complete
                                                }
                                            }
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "w-10 h-10 md:w-20 md:h-20 rounded-full bg-[#1a1a1a] hover:bg-[#252525] shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(Icon, {
                                                className: "w-6 h-6 md:w-10 md:h-10",
                                                color: iconColors[index]
                                            })
                                        })
                                    }, index))
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "relative max-w-5xl mx-auto",
                    style: {
                        minHeight: "1200px"
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "relative pt-8",
                        ref: timelineRef,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(proxy/* motion */.E.div, {
                                className: "absolute left-1/2 w-[1px] h-[1250px] -top-[150px] origin-top timeline-line",
                                style: {
                                    background: "rgba(255, 255, 255, 0.3)",
                                    opacity: (0,use_transform/* useTransform */.H)(scrollYProgress, [
                                        0,
                                        0.2,
                                        0.8,
                                        1
                                    ], [
                                        0.3,
                                        0.4,
                                        0.4,
                                        0.3
                                    ])
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "absolute left-1/2 -translate-x-[2px] z-[2] hidden md:block",
                                children: [
                                    ...Array(2)
                                ].map((_, i)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "absolute",
                                        style: {
                                            width: "10px",
                                            height: "10px",
                                            left: "-3px",
                                            animation: `streamDot 2s cubic-bezier(0.4, 0, 1, 1) infinite`,
                                            animationDelay: `${i * 3}s`,
                                            willChange: "top, opacity"
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "w-full h-full rounded-full",
                                            style: {
                                                backgroundColor: timelineColor
                                            }
                                        })
                                    }, i))
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "absolute left-1/2 -translate-x-[2px] z-[2] md:hidden",
                                children: [
                                    ...Array(2)
                                ].map((_, i)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "absolute",
                                        style: {
                                            width: "8px",
                                            height: "8px",
                                            left: "-2px",
                                            top: `-65px`,
                                            animation: `streamDotMobile 2s cubic-bezier(0.4, 0, 1, 1) infinite`,
                                            animationDelay: `${i * 3}s`,
                                            willChange: "top, opacity"
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "w-full h-full rounded-full",
                                            style: {
                                                backgroundColor: timelineColor
                                            }
                                        })
                                    }, i))
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "relative grid grid-cols-2 gap-y-8 z-[3]",
                                children: features.map((feature, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: index % 2 === 0 ? "pr-8" : "pl-8",
                                        ref: (el)=>{
                                            featureRefs.current[index] = el;
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(FeatureBox, {
                                            ...feature,
                                            isLeft: index % 2 === 0,
                                            isActive: index === activeFeature,
                                            color: iconColors[index],
                                            isModalOpen: activeModal === index,
                                            setActiveModal: setActiveModal,
                                            featureIndex: index
                                        })
                                    }, index))
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const HAL900_FrameworkDiagram = (HAL900FrameworkDiagram);


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