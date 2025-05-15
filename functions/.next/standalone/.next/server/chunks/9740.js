"use strict";
exports.id = 9740;
exports.ids = [9740,9256];
exports.modules = {

/***/ 49740:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ HAL900_Hero)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
var react_default = /*#__PURE__*/__webpack_require__.n(react_);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs + 144 modules
var proxy = __webpack_require__(23694);
// EXTERNAL MODULE: ./src/components/ui/button.tsx
var ui_button = __webpack_require__(29256);
;// CONCATENATED MODULE: ./src/components/HAL900-AnimatedText.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 




const AnimatedWord = ({ word, delay, isAlliteration, section, startAnimation, isBold })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(proxy/* motion */.E.span, {
        className: `inline-block ${isBold ? "font-bold" : ""}`,
        initial: {
            opacity: 0,
            filter: "blur(10px)",
            y: 20
        },
        animate: startAnimation ? {
            opacity: 1,
            filter: "blur(0px)",
            y: 0
        } : {},
        transition: {
            duration: 0.55,
            delay: delay,
            ease: [
                0.43,
                0.13,
                0.23,
                0.96
            ]
        },
        children: word
    });
};
function HAL900AnimatedText({ startAnimation, onLearnMore }) {
    const [showButton, setShowButton] = (0,react_.useState)(false);
    // Group words into sections with delays
    const sections = [
        // Section 1: "We Build AI-Powered"
        [
            {
                word: "We",
                delay: 1.2,
                isAlliteration: false,
                isBold: false
            },
            {
                word: "Build",
                delay: 1.4,
                isAlliteration: true,
                isBold: true
            },
            {
                word: "AI-Powered",
                delay: 1.6,
                isAlliteration: true,
                isBold: true
            }
        ],
        // Section 2: "Systems to Help"
        [
            {
                word: "Systems",
                delay: 2.0,
                isAlliteration: true,
                isBold: true
            },
            {
                word: "to",
                delay: 2.2,
                isAlliteration: false,
                isBold: false
            },
            {
                word: "Help",
                delay: 2.4,
                isAlliteration: true,
                isBold: true
            }
        ],
        // Section 3: "your Company Scale Effortlessly"
        [
            {
                word: "your",
                delay: 2.8,
                isAlliteration: false,
                isBold: false
            },
            {
                word: "Company",
                delay: 3.0,
                isAlliteration: false,
                isBold: false
            },
            {
                word: "Scale",
                delay: 3.2,
                isAlliteration: true,
                isBold: true
            },
            {
                word: "Effortlessly",
                delay: 3.4,
                isAlliteration: true,
                isBold: true
            }
        ]
    ];
    (0,react_.useEffect)(()=>{
        if (startAnimation) {
            const timer = setTimeout(()=>{
                setShowButton(true);
            }, 5500);
            return ()=>clearTimeout(timer);
        }
    }, [
        startAnimation
    ]);
    (0,react_.useEffect)(()=>{
        const style = document.createElement("style");
        style.textContent = `
      .shimmer-button {
        position: relative;
        background: #00FF7F;
        transition: all 0.3s ease;
        border: none;
        isolation: isolate;
      }

      .shimmer-button::before {
        content: '';
        position: absolute;
        inset: -3px;
        background: #00FF7F;
        border-radius: 8px;
        z-index: -1;
        box-shadow: 0 0 15px rgba(0, 255, 127, 0.5);
      }

      .shimmer-button::after {
        content: '';
        position: absolute;
        inset: -3px;
        border-radius: 8px;
        background: linear-gradient(90deg, 
          transparent 0%,
          transparent 35%,
          rgba(255, 255, 255, 0.9) 50%,
          transparent 65%,
          transparent 100%
        );
        background-size: 400% 100%;
        -webkit-mask: 
          linear-gradient(#fff 0 0) content-box,
          linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
        padding: 3px;
        animation: borderMove 8s linear infinite;
      }

      @keyframes borderMove {
        0% {
          background-position: 400% 0;
        }
        100% {
          background-position: -400% 0;
        }
      }

      .shimmer-button:hover {
        transform: translateY(-2px);
      }

      .shimmer-button:hover::before {
        box-shadow: 0 0 20px rgba(0, 255, 127, 0.7);
      }

      .shimmer-button:active {
        transform: translateY(0);
      }
    `;
        document.head.appendChild(style);
        return ()=>{
            document.head.removeChild(style);
        };
    }, []);
    const handleClick = ()=>{
        onLearnMore();
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(proxy/* motion */.E.div, {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: startAnimation ? 1 : 0
        },
        transition: {
            duration: 1.2,
            delay: 1.0
        },
        className: "max-w-4xl mx-auto px-4 text-center mt-24",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "min-h-[180px] flex flex-col items-center justify-center max-w-[95%] mx-auto",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: "text-lg md:text-[26px] text-white leading-[1.7] tracking-[-0.01em] font-normal mb-10",
                    children: sections.map((section, sectionIndex)=>/*#__PURE__*/ jsx_runtime_.jsx("span", {
                            children: section.map((word, wordIndex)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)((react_default()).Fragment, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(AnimatedWord, {
                                            word: word.word,
                                            delay: word.delay,
                                            isAlliteration: word.isAlliteration,
                                            section: sectionIndex,
                                            startAnimation: startAnimation,
                                            isBold: word.isBold
                                        }),
                                        " "
                                    ]
                                }, `word-${sectionIndex}-${wordIndex}`))
                        }, `section-${sectionIndex}`))
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "h-16 overflow-visible mb-8",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(proxy/* motion */.E.div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: showButton ? {
                            opacity: 1,
                            y: 0
                        } : {},
                        transition: {
                            duration: 0.5,
                            ease: "easeOut"
                        },
                        children: showButton && /*#__PURE__*/ jsx_runtime_.jsx(ui_button/* Button */.z, {
                            className: "shimmer-button text-black text-sm md:text-base px-4 md:px-6 py-2 md:py-3 font-medium rounded-lg",
                            onClick: handleClick,
                            children: "Learn more"
                        })
                    })
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./node_modules/styled-jsx/style.js
var style = __webpack_require__(86369);
var style_default = /*#__PURE__*/__webpack_require__.n(style);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/createLucideIcon.js + 3 modules
var createLucideIcon = __webpack_require__(12125);
;// CONCATENATED MODULE: ./node_modules/lucide-react/dist/esm/icons/calendar.js
/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
];
const Calendar = (0,createLucideIcon/* default */.Z)("calendar", __iconNode);


//# sourceMappingURL=calendar.js.map

;// CONCATENATED MODULE: ./src/components/HAL900-BookingIconAnimation.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 



function HAL900BookingIconAnimation({ startAnimation, onBookMeeting }) {
    const [isVisible, setIsVisible] = (0,react_.useState)(false);
    const [isClicked, setIsClicked] = (0,react_.useState)(false);
    const [fillPercentage, setFillPercentage] = (0,react_.useState)(0);
    const [hasBeenHovered, setHasBeenHovered] = (0,react_.useState)(false);
    const buttonRef = (0,react_.useRef)(null);
    const animationTimeoutRef = (0,react_.useRef)(null);
    const isAnimatingRef = (0,react_.useRef)(false);
    // Animation effect
    (0,react_.useEffect)(()=>{
        if (startAnimation && !isAnimatingRef.current) {
            console.log("Setting up animation with:", {
                startAnimation
            });
            isAnimatingRef.current = true;
            animationTimeoutRef.current = setTimeout(()=>{
                console.log("Animation timeout firing");
                setIsVisible(true);
                isAnimatingRef.current = false;
            }, 7000);
        }
    }, [
        startAnimation
    ]);
    // Cleanup effect
    (0,react_.useEffect)(()=>{
        return ()=>{
            if (animationTimeoutRef.current) {
                console.log("Cleaning up animation timer");
                clearTimeout(animationTimeoutRef.current);
            }
        };
    }, []);
    // Handle mouse movement over the button
    const handleMouseMove = (e)=>{
        if (isClicked) return;
        if (buttonRef.current) {
            const rect = buttonRef.current.getBoundingClientRect();
            setFillPercentage(100);
        }
    };
    const handleMouseLeave = ()=>{
        if (!isClicked) {
            setFillPercentage(0);
        }
    };
    const handleClick = ()=>{
        setIsClicked(true);
        onBookMeeting();
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "jsx-4772b19f06e1400f" + " " + `
        flex flex-col items-center justify-center h-36 gap-4 overflow-hidden mt-2
        transition-opacity duration-3000
        ${isVisible ? "opacity-100" : "opacity-0"}
      `,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                onMouseEnter: ()=>{
                    setHasBeenHovered(true);
                },
                className: "jsx-4772b19f06e1400f" + " " + `
          flex items-center justify-center cursor-pointer relative
          transition-all duration-3000 ease-[cubic-bezier(0.43,0.13,0.23,0.96)]
          ${isVisible ? "translate-y-0" : "translate-y-16"}
        `,
                children: /*#__PURE__*/ jsx_runtime_.jsx(Calendar, {
                    className: `
            w-10 h-10 md:w-14 md:h-14 text-[#00FF7F] relative z-10 calendar-icon
            ${isVisible ? "animate-very-gentle-float" : ""}
          `,
                    strokeWidth: 1.5
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "jsx-4772b19f06e1400f" + " " + `
          transition-all duration-1000 ease-out
          ${isVisible ? "translate-y-0" : "translate-y-16"}
          ${hasBeenHovered ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}
        `,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                    ref: buttonRef,
                    onClick: handleClick,
                    onMouseMove: handleMouseMove,
                    onMouseLeave: handleMouseLeave,
                    className: "jsx-4772b19f06e1400f" + " " + "relative overflow-hidden rounded-md border border-[#00FF7F]",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            style: {
                                transform: isClicked ? "scaleX(1)" : `scaleX(${fillPercentage / 100})`
                            },
                            className: "jsx-4772b19f06e1400f" + " " + "absolute inset-0 bg-[#00FF7F] transition-transform duration-700 ease-out origin-left"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            style: {
                                color: fillPercentage > 40 || isClicked ? "#2a2a2a" : "#00FF7F"
                            },
                            className: "jsx-4772b19f06e1400f" + " " + "relative z-10 block px-3 md:px-4 py-1 md:py-1.5 text-xs md:text-sm font-medium transition-colors duration-700",
                            children: "Let's chat"
                        })
                    ]
                })
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "4772b19f06e1400f",
                children: "@-webkit-keyframes very-gentle-float{0%{-webkit-transform:translatey(0px);transform:translatey(0px)}50%{-webkit-transform:translatey(-8px);transform:translatey(-8px)}100%{-webkit-transform:translatey(0px);transform:translatey(0px)}}@-moz-keyframes very-gentle-float{0%{-moz-transform:translatey(0px);transform:translatey(0px)}50%{-moz-transform:translatey(-8px);transform:translatey(-8px)}100%{-moz-transform:translatey(0px);transform:translatey(0px)}}@-o-keyframes very-gentle-float{0%{-o-transform:translatey(0px);transform:translatey(0px)}50%{-o-transform:translatey(-8px);transform:translatey(-8px)}100%{-o-transform:translatey(0px);transform:translatey(0px)}}@keyframes very-gentle-float{0%{-webkit-transform:translatey(0px);-moz-transform:translatey(0px);-o-transform:translatey(0px);transform:translatey(0px)}50%{-webkit-transform:translatey(-8px);-moz-transform:translatey(-8px);-o-transform:translatey(-8px);transform:translatey(-8px)}100%{-webkit-transform:translatey(0px);-moz-transform:translatey(0px);-o-transform:translatey(0px);transform:translatey(0px)}}.animate-very-gentle-float{-webkit-animation:very-gentle-float 6s ease-in-out infinite;-moz-animation:very-gentle-float 6s ease-in-out infinite;-o-animation:very-gentle-float 6s ease-in-out infinite;animation:very-gentle-float 6s ease-in-out infinite;-webkit-animation-delay:1s;-moz-animation-delay:1s;-o-animation-delay:1s;animation-delay:1s}.calendar-icon{-webkit-filter:drop-shadow(0 0 12px rgba(0,255,127,.8));filter:drop-shadow(0 0 12px rgba(0,255,127,.8))}.calendar-icon:hover{-webkit-filter:drop-shadow(0 0 16px rgba(0,255,127,1));filter:drop-shadow(0 0 16px rgba(0,255,127,1));-webkit-transform:translatey(-12px);-moz-transform:translatey(-12px);-ms-transform:translatey(-12px);-o-transform:translatey(-12px);transform:translatey(-12px);-webkit-transition:-webkit-filter.5s ease,-webkit-transform.5s cubic-bezier(.34,1.56,.64,1);-moz-transition:filter.5s ease,-moz-transform.5s cubic-bezier(.34,1.56,.64,1);-o-transition:filter.5s ease,-o-transform.5s cubic-bezier(.34,1.56,.64,1);transition:-webkit-filter.5s ease,-webkit-transform.5s cubic-bezier(.34,1.56,.64,1);transition:filter.5s ease,-moz-transform.5s cubic-bezier(.34,1.56,.64,1);transition:filter.5s ease,-o-transform.5s cubic-bezier(.34,1.56,.64,1);transition:filter.5s ease,transform.5s cubic-bezier(.34,1.56,.64,1)}"
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/HAL900-Hero.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 




// Custom Smooth Scroll Function
const customSmoothScrollTo = (targetPosition, duration = 2000)=>{
    if (true) return;
    console.log(`[HERO_SCROLL] Initiating custom scroll to ${targetPosition} over ${duration}ms`);
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;
    if (document.documentElement.scrollHeight <= window.innerHeight && distance !== 0) {
        document.body.style.minHeight = `${Math.max(document.body.scrollHeight, targetPosition + window.innerHeight)}px`;
        void document.body.offsetHeight;
    }
    const animateScroll = (currentTime)=>{
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const easeInOutQuad = (t)=>t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        const newPosition = startPosition + distance * easeInOutQuad(progress);
        window.scrollTo(0, newPosition);
        if (progress < 1) requestAnimationFrame(animateScroll);
        else console.log("[HERO_SCROLL] Custom scroll complete.");
    };
    requestAnimationFrame(animateScroll);
};
const AnimatedHeading = ()=>{
    const [displayText, setDisplayText] = (0,react_.useState)("");
    const texts = [
        "scailer",
        "a better way to"
    ];
    const [currentTextIndex, setCurrentTextIndex] = (0,react_.useState)(0);
    const pauseForScailer = 5000;
    const pauseForBetterWay = 8000;
    const [leftBracketStyle, setLeftBracketStyle] = (0,react_.useState)({});
    const [rightBracketStyle, setRightBracketStyle] = (0,react_.useState)({});
    const containerRef = (0,react_.useRef)(null);
    (0,react_.useEffect)(()=>{
        const deleteText = (text, onComplete, pauseTime)=>{
            const startDeletion = ()=>{
                let currentIndex = text.length;
                const interval = setInterval(()=>{
                    if (currentIndex > 0) {
                        setDisplayText((prev)=>prev.slice(0, currentIndex - 1));
                        currentIndex--;
                    } else {
                        clearInterval(interval);
                        setTimeout(onComplete, 200);
                    }
                }, text === "scailer" ? 60 : 30);
            };
            if (text === "scailer") {
                setTimeout(startDeletion, pauseTime);
            } else {
                setTimeout(startDeletion, pauseTime);
            }
        };
        const animateBrackets = ()=>{
            if (containerRef.current) {
                const containerWidth = containerRef.current.offsetWidth;
                const moveDistance = containerWidth / 2;
                const widthAdjustment = 12;
                setLeftBracketStyle({
                    transform: `translateX(${moveDistance + widthAdjustment}px) rotateY(180deg)`,
                    transition: "transform 0.5s ease-in-out"
                });
                setRightBracketStyle({
                    transform: `translateX(-${moveDistance + widthAdjustment}px) rotateY(-180deg)`,
                    transition: "transform 0.5s ease-in-out"
                });
                setTimeout(()=>{
                    setLeftBracketStyle({});
                    setRightBracketStyle({});
                    setTimeout(()=>{
                        setCurrentTextIndex((prevIndex)=>(prevIndex + 1) % texts.length);
                    }, 300);
                }, 500);
            }
        };
        const typeText = (text, onComplete, isFirstAnimation)=>{
            let currentIndex = 0;
            const interval = setInterval(()=>{
                if (currentIndex < text.length) {
                    setDisplayText((prev)=>text.slice(0, currentIndex + 1));
                    currentIndex++;
                } else {
                    clearInterval(interval);
                    deleteText(text, ()=>{
                        animateBrackets();
                    }, isFirstAnimation ? pauseForScailer : pauseForBetterWay);
                }
            }, text === "scailer" ? 100 : 50);
        };
        const startAnimation = ()=>{
            const currentText = texts[currentTextIndex];
            typeText(currentText, ()=>{}, currentTextIndex === 0);
        };
        const timeout = setTimeout(startAnimation, 500);
        return ()=>clearTimeout(timeout);
    }, [
        currentTextIndex
    ]);
    (0,react_.useEffect)(()=>{
        const style = document.createElement("style");
        style.textContent = `
      @keyframes wordScroll {
        0%, 15% {
          transform: translateY(0);
        }
        25%, 40% {
          transform: translateY(-33.33%);
        }
        50%, 90% {
          transform: translateY(-66.66%);
        }
        100% {
          transform: translateY(-66.66%);
        }
      }
      .scroll-words {
        display: inline-flex;
        flex-direction: column;
        overflow: hidden;
        height: 1.35em; 
      }
      .scroll-words-inner {
        animation: wordScroll 8s cubic-bezier(0.4, 0.0, 0.2, 1) infinite; 
        display: flex;
        flex-direction: column;
      }
      .scroll-words span {
        display: flex;
        align-items: flex-start;
        height: 1.35em;
        line-height: 1;
      }
    `;
        document.head.appendChild(style);
        return ()=>{
            document.head.removeChild(style);
        };
    }, []);
    const formatText = (text)=>{
        if (text.toLowerCase().includes("scailer")) {
            return text.split(/(ai)/i).map((part, index)=>part.toLowerCase() === "ai" ? /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "text-scailer-green",
                    children: part
                }, index) : /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "text-white",
                    children: part
                }, index));
        }
        if (text.startsWith("a better way")) {
            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                className: "text-white",
                children: [
                    text,
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "scroll-words text-3xl sm:text-4xl md:text-5xl lg:text-6xl ml-2 sm:ml-3 inline-flex items-baseline",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "scroll-words-inner",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: "build"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: "grow"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "font-bold",
                                    children: "scale."
                                })
                            ]
                        })
                    })
                ]
            });
        }
        return /*#__PURE__*/ jsx_runtime_.jsx("span", {
            className: "text-white",
            children: text
        });
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "text-center my-4 md:my-6 lg:my-12 px-4",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            ref: containerRef,
            className: "inline-flex items-center justify-center",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                className: "text-4xl sm:text-5xl md:text-7xl lg:text-8xl flex items-center tracking-tight text-white font-medium whitespace-pre-wrap sm:whitespace-nowrap",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "font-normal text-scailer-green text-5xl sm:text-6xl md:text-8xl lg:text-9xl mr-1 sm:mr-2 md:mr-4 flex items-center",
                        style: {
                            ...leftBracketStyle,
                            transformStyle: "preserve-3d"
                        },
                        children: "{"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex items-baseline",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: `flex-shrink-0 transition-all duration-300 ${displayText.startsWith("a better way") ? "text-3xl sm:text-3xl md:text-5xl lg:text-6xl" : "text-5xl sm:text-5xl md:text-7xl lg:text-8xl"}`,
                            children: formatText(displayText)
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "font-normal text-scailer-green text-5xl sm:text-6xl md:text-8xl lg:text-9xl ml-1 sm:ml-2 md:ml-4 flex items-center",
                        style: {
                            ...rightBracketStyle,
                            transformStyle: "preserve-3d"
                        },
                        children: "}"
                    })
                ]
            })
        })
    });
};
const HAL900Hero = ({ onLearnMore, onBookMeeting })=>{
    const [startLearnMoreAnimation, setStartLearnMoreAnimation] = (0,react_.useState)(false);
    const [startBookingAnimation, setStartBookingAnimation] = (0,react_.useState)(false);
    (0,react_.useEffect)(()=>{
        // Start Learn More animation immediately
        setStartLearnMoreAnimation(true);
        // Start booking animation with delay
        const timer = setTimeout(()=>{
            setStartBookingAnimation(true);
        }, 500);
        return ()=>clearTimeout(timer);
    }, []);
    // This specific handleBookMeeting is for the icon animation click
    // It calls the onBookMeeting prop, which in turn should be using the custom scroll from page.tsx
    const internalHandleBookMeeting = ()=>{
        console.log("[HERO_SCROLL] HAL900BookingIconAnimation clicked, calling onBookMeeting prop.");
        onBookMeeting(); // This prop is connected to page.tsx's handleBookMeeting
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "min-h-[80vh] md:min-h-screen pt-24 md:pt-32 pb-12 md:pb-16 px-4 flex flex-col items-center justify-center bg-scailer-dark",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "text-center max-w-4xl mx-auto",
                children: /*#__PURE__*/ jsx_runtime_.jsx(proxy/* motion */.E.div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: 1.2,
                        delay: 0.3
                    },
                    className: "mb-6 md:mb-8",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(AnimatedHeading, {})
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(HAL900AnimatedText, {
                startAnimation: startLearnMoreAnimation,
                onLearnMore: onLearnMore
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(proxy/* motion */.E.div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 1.2,
                    delay: 2.4
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(HAL900BookingIconAnimation, {
                    startAnimation: startBookingAnimation,
                    onBookMeeting: internalHandleBookMeeting
                })
            })
        ]
    });
};
/* harmony default export */ const HAL900_Hero = (HAL900Hero);


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