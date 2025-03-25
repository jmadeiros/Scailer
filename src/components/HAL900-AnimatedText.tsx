"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import React from "react"

interface AnimatedWordProps {
  word: string
  delay: number
  isAlliteration: boolean
  section: number
  startAnimation: boolean
  isBold: boolean
}

const AnimatedWord = ({ word, delay, isAlliteration, section, startAnimation, isBold }: AnimatedWordProps) => {
  return (
    <motion.span
      className={`inline-block ${isBold ? "font-bold" : ""}`}
      initial={{
        opacity: 0,
        filter: "blur(10px)",
        y: 20,
      }}
      animate={
        startAnimation
          ? {
              opacity: 1,
              filter: "blur(0px)",
              y: 0,
            }
          : {}
      }
      transition={{
        duration: 0.55,
        delay: delay,
        ease: [0.43, 0.13, 0.23, 0.96],
      }}
    >
      {word}
    </motion.span>
  )
}

interface AnimatedTextProps {
  startAnimation: boolean
  onLearnMore: () => void
}

export default function HAL900AnimatedText({ startAnimation, onLearnMore }: AnimatedTextProps) {
  const [showButton, setShowButton] = useState(false)

  // Group words into three sections with their respective delays
  const sections = [
    // Section 1: "We Build AI-Powered"
    [
      { word: "We", delay: 1.2, isAlliteration: false, isBold: false },
      { word: "Build", delay: 1.4, isAlliteration: true, isBold: true },
      { word: "AI-Powered", delay: 1.6, isAlliteration: true, isBold: true },
    ],
    // Section 2: "Systems to Help"
    [
      { word: "Systems", delay: 2.0, isAlliteration: true, isBold: true },
      { word: "to", delay: 2.2, isAlliteration: false, isBold: false },
      { word: "Help", delay: 2.4, isAlliteration: true, isBold: true },
    ],
    // Section 3: "your Company Scale Effortlessly"
    [
      { word: "your", delay: 2.8, isAlliteration: false, isBold: false },
      { word: "Company", delay: 3.0, isAlliteration: false, isBold: false },
      { word: "Scale", delay: 3.2, isAlliteration: true, isBold: true },
      { word: "Effortlessly", delay: 3.4, isAlliteration: true, isBold: true },
    ],
  ]

  useEffect(() => {
    if (startAnimation) {
      const timer = setTimeout(() => {
        setShowButton(true)
      }, 5500)

      return () => clearTimeout(timer)
    }
  }, [startAnimation])

  useEffect(() => {
    const style = document.createElement("style")
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
    `
    document.head.appendChild(style)
    return () => {
      document.head.removeChild(style)
    }
  }, [])

  const handleClick = () => {
    onLearnMore();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: startAnimation ? 1 : 0 }}
      transition={{ duration: 1.2, delay: 1.0 }}
      className="max-w-4xl mx-auto px-4 text-center mt-24"
    >
      <div className="min-h-[180px] flex flex-col items-center justify-center max-w-[95%] mx-auto">
        <p className="text-lg md:text-[26px] text-white leading-[1.7] tracking-[-0.01em] font-normal mb-10">
          {sections.map((section, sectionIndex) => (
            <span key={`section-${sectionIndex}`}>
              {section.map((word, wordIndex) => (
                <React.Fragment key={`word-${sectionIndex}-${wordIndex}`}>
                  <AnimatedWord
                    word={word.word}
                    delay={word.delay}
                    isAlliteration={word.isAlliteration}
                    section={sectionIndex}
                    startAnimation={startAnimation}
                    isBold={word.isBold}
                  />{" "}
                </React.Fragment>
              ))}
            </span>
          ))}
        </p>
        <div className="h-16 overflow-visible mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={showButton ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {showButton && (
              <Button
                className="shimmer-button text-black text-base px-6 py-3 font-medium rounded-lg"
                onClick={handleClick}
              >
                Learn more
              </Button>
            )}
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
} 