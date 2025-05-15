"use strict";
exports.id = 8328;
exports.ids = [8328];
exports.modules = {

/***/ 98328:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ HAL900ScaleWithPrecision)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs + 144 modules
var proxy = __webpack_require__(23694);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs + 3 modules
var AnimatePresence = __webpack_require__(37686);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/trending-up.js
var trending_up = __webpack_require__(50007);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/users.js
var users = __webpack_require__(91672);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/target.js
var target = __webpack_require__(70696);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/zap.js
var zap = __webpack_require__(76494);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/globe.js
var globe = __webpack_require__(86078);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/file-text.js
var file_text = __webpack_require__(39546);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/createLucideIcon.js + 3 modules
var createLucideIcon = __webpack_require__(12125);
;// CONCATENATED MODULE: ./node_modules/lucide-react/dist/esm/icons/image.js
/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
];
const Image = (0,createLucideIcon/* default */.Z)("image", __iconNode);


//# sourceMappingURL=image.js.map

// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/chart-no-axes-column-increasing.js
var chart_no_axes_column_increasing = __webpack_require__(18096);
;// CONCATENATED MODULE: ./src/components/HAL900-MessageAnimation.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 










const messages = [
    {
        color: "bg-[#22C55E]",
        iconColor: "text-[#22C55E]",
        lines: 3,
        icon: trending_up/* default */.Z,
        attachments: [
            {
                type: "chart",
                icon: chart_no_axes_column_increasing/* default */.Z
            },
            {
                type: "document",
                icon: file_text/* default */.Z
            }
        ]
    },
    {
        color: "bg-[#0EA5E9]",
        iconColor: "text-[#0EA5E9]",
        lines: 2,
        icon: globe/* default */.Z,
        attachments: [
            {
                type: "image",
                icon: Image
            }
        ]
    },
    {
        color: "bg-[#8B5CF6]",
        iconColor: "text-[#8B5CF6]",
        lines: 4,
        icon: users/* default */.Z,
        attachments: [
            {
                type: "document",
                icon: file_text/* default */.Z
            },
            {
                type: "chart",
                icon: chart_no_axes_column_increasing/* default */.Z
            }
        ]
    },
    {
        color: "bg-[#F59E0B]",
        iconColor: "text-[#F59E0B]",
        lines: 1,
        icon: target/* default */.Z,
        attachments: [
            {
                type: "image",
                icon: Image
            },
            {
                type: "document",
                icon: file_text/* default */.Z
            }
        ]
    },
    {
        color: "bg-[#EC4899]",
        iconColor: "text-[#EC4899]",
        lines: 3,
        icon: zap/* default */.Z,
        attachments: [
            {
                type: "chart",
                icon: chart_no_axes_column_increasing/* default */.Z
            }
        ]
    }
];
const AttachmentIcon = ({ type, icon: Icon, color })=>/*#__PURE__*/ _jsx("div", {
        className: "w-5 md:w-8 h-5 md:h-8 bg-[#2a2a2a] rounded-md flex items-center justify-center",
        children: /*#__PURE__*/ _jsx(Icon, {
            className: `w-2.5 md:w-4 h-2.5 md:h-4 ${color}`
        })
    });
function HAL900MessageAnimation() {
    const [messageQueue, setMessageQueue] = (0,react_.useState)([]);
    const [heights, setHeights] = (0,react_.useState)({});
    const observers = (0,react_.useRef)({});
    (0,react_.useEffect)(()=>{
        let counter = 0;
        const addMessage = ()=>{
            setMessageQueue((prev)=>{
                const newMessage = {
                    ...messages[counter % messages.length],
                    id: counter
                };
                counter++;
                return [
                    newMessage,
                    ...prev
                ].slice(0, 20);
            });
            const nextDelay = Math.random() * 1000 + 500;
            setTimeout(addMessage, nextDelay);
        };
        addMessage();
        return ()=>{
            Object.values(observers.current).forEach((observer)=>observer.disconnect());
        };
    }, []);
    const getOffsetY = (index)=>{
        let offset = 0;
        for(let i = 0; i < index; i++){
            const messageId = messageQueue[i]?.id;
            if (messageId !== undefined) {
                offset += (heights[messageId] || 0) + 12;
            }
        }
        return offset;
    };
    const lineVariants = {
        hidden: {
            width: 0
        },
        visible: (width)=>({
                width,
                transition: {
                    duration: 0.7,
                    ease: "easeOut"
                }
            })
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "bg-scailer-light rounded-xl p-3 md:p-6 border border-scailer-light/20",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex items-center gap-2 md:gap-3 mb-3 md:mb-6",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "w-5 md:w-8 h-5 md:h-8 rounded-full bg-[#25D366]/10 flex items-center justify-center",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(proxy/* motion */.E.div, {
                            animate: {
                                scale: [
                                    1,
                                    1.2,
                                    1
                                ],
                                rotate: [
                                    0,
                                    10,
                                    -10,
                                    0
                                ]
                            },
                            transition: {
                                duration: 2,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut"
                            },
                            className: "w-2 md:w-3 h-2 md:h-3 rounded-full bg-[#25D366]"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            className: "text-white text-xs md:text-base font-medium",
                            children: "Growth Insights Feed"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "h-[200px] md:h-[300px] relative overflow-hidden",
                children: /*#__PURE__*/ jsx_runtime_.jsx(AnimatePresence/* AnimatePresence */.M, {
                    initial: false,
                    children: messageQueue.map((message, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(proxy/* motion */.E.div, {
                            ref: (node)=>{
                                if (node) {
                                    if (!observers.current[message.id]) {
                                        observers.current[message.id] = new ResizeObserver((entries)=>{
                                            const height = entries[0]?.contentRect.height;
                                            if (height) {
                                                setHeights((prev)=>({
                                                        ...prev,
                                                        [message.id]: height
                                                    }));
                                            }
                                        });
                                    }
                                    observers.current[message.id].observe(node);
                                }
                            },
                            initial: {
                                opacity: 0,
                                y: 20,
                                scale: 0.95
                            },
                            animate: {
                                opacity: 1,
                                y: -getOffsetY(index),
                                scale: 1,
                                transition: {
                                    y: {
                                        type: "spring",
                                        stiffness: 120,
                                        damping: 18
                                    },
                                    opacity: {
                                        duration: 0.4
                                    },
                                    scale: {
                                        type: "spring",
                                        stiffness: 220,
                                        damping: 18
                                    }
                                }
                            },
                            exit: {
                                opacity: 0,
                                scale: 0.95,
                                transition: {
                                    duration: 0.3
                                }
                            },
                            className: "absolute left-0 right-0 bottom-0 flex gap-2 md:gap-3 items-start mb-2 md:mb-3 origin-bottom",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "w-10 md:w-16 h-10 md:h-16 rounded-lg flex-shrink-0 bg-[#2a2a2a] flex items-center justify-center",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(message.icon, {
                                        className: `w-5 md:w-8 h-5 md:h-8 ${message.iconColor}`
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(proxy/* motion */.E.div, {
                                    className: "flex-1 overflow-hidden bg-[#2a2a2a] rounded-lg",
                                    initial: {
                                        opacity: 0,
                                        scaleY: 0
                                    },
                                    animate: {
                                        opacity: 1,
                                        scaleY: 1
                                    },
                                    transition: {
                                        duration: 0.5,
                                        ease: "easeOut"
                                    },
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "px-2 md:px-3 py-1.5 md:py-3",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "space-y-1 md:space-y-2",
                                                children: Array.from({
                                                    length: message.lines
                                                }).map((_, idx)=>/*#__PURE__*/ jsx_runtime_.jsx(proxy/* motion */.E.div, {
                                                        className: "h-1 md:h-2 rounded-full overflow-hidden bg-[#25D366]/20",
                                                        variants: lineVariants,
                                                        initial: "hidden",
                                                        animate: "visible",
                                                        custom: idx === 0 ? "40%" : idx === message.lines - 1 ? "60%" : "95%"
                                                    }, idx))
                                            }),
                                            message.attachments && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "flex gap-1 md:gap-2 mt-1.5 md:mt-3",
                                                children: message.attachments.map((attachment, idx)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "w-5 md:w-8 h-5 md:h-8 bg-[#25D366]/20 rounded-md flex items-center justify-center",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(attachment.icon, {
                                                            className: `w-2.5 md:w-4 h-2.5 md:h-4 ${message.iconColor}`
                                                        })
                                                    }, idx))
                                            })
                                        ]
                                    })
                                })
                            ]
                        }, message.id))
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ./src/components/HAL900-AuditForm.tsx
var HAL900_AuditForm = __webpack_require__(21949);
;// CONCATENATED MODULE: ./src/components/HAL900-ScaleWithPrecision.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 




function HAL900ScaleWithPrecision() {
    const [startAnimation, setStartAnimation] = (0,react_.useState)(false);
    const [isMobile, setIsMobile] = (0,react_.useState)(false);
    (0,react_.useEffect)(()=>{
        const timer = setTimeout(()=>{
            setStartAnimation(true);
        }, 500);
        return ()=>clearTimeout(timer);
    }, []);
    (0,react_.useEffect)(()=>{
        const checkMobile = ()=>setIsMobile(window.innerWidth < 768); // md breakpoint
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return ()=>window.removeEventListener("resize", checkMobile);
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        id: "scale-with-precision",
        className: "md:pt-0 pt-0 pb-16 md:pb-16 bg-[#2a2a2a] relative",
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
                        once: true,
                        amount: 0.15
                    },
                    transition: {
                        duration: 1.2,
                        delay: 0.4
                    },
                    className: "text-center md:mb-16 mb-6",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: "text-4xl md:text-5xl font-bold text-white mb-4 md:mb-8",
                            children: "Scale with Precision"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "text-base md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed",
                            children: "We'll review how your business runs today and send you a tailored roadmap showing exactly where AI, automation, and smarter systems can unlock growth — all for free."
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "hidden md:grid grid-cols-2 gap-12 items-start max-w-5xl mx-auto mt-8",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "w-full",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(HAL900_AuditForm/* default */.Z, {})
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "w-full",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(HAL900MessageAnimation, {})
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "md:hidden w-[90%] sm:w-[80%] max-w-[280px] mx-auto mt-8 mb-16 pb-12 pt-6",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(HAL900_AuditForm/* default */.Z, {})
                })
            ]
        })
    });
}


/***/ })

};
;