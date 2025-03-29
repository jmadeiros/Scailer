"use client"

import { useState, useEffect, useRef } from "react"
import { Calendar } from "lucide-react"
import type { MouseEvent } from "react"

interface HAL900BookingIconAnimationProps {
  startAnimation: boolean;
  onBookMeeting: () => void;
}

export default function HAL900BookingIconAnimation({ startAnimation, onBookMeeting }: HAL900BookingIconAnimationProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isClicked, setIsClicked] = useState(false)
  const [fillPercentage, setFillPercentage] = useState(0)
  const [hasBeenHovered, setHasBeenHovered] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const animationTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const isAnimatingRef = useRef(false)

  // Animation effect
  useEffect(() => {
    if (startAnimation && !isAnimatingRef.current) {
      console.log('Setting up animation with:', { startAnimation })
      isAnimatingRef.current = true
      
      animationTimeoutRef.current = setTimeout(() => {
        console.log('Animation timeout firing')
        setIsVisible(true)
        isAnimatingRef.current = false
      }, 7000)
    }
  }, [startAnimation])

  // Cleanup effect
  useEffect(() => {
    return () => {
      if (animationTimeoutRef.current) {
        console.log('Cleaning up animation timer')
        clearTimeout(animationTimeoutRef.current)
      }
    }
  }, [])

  // Handle mouse movement over the button
  const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
    if (isClicked) return

    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect()
      setFillPercentage(100)
    }
  }

  const handleMouseLeave = () => {
    if (!isClicked) {
      setFillPercentage(0)
    }
  }

  const handleClick = () => {
    setIsClicked(true)
    onBookMeeting()
  }

  return (
    <div 
      className={`
        flex flex-col items-center justify-center h-36 gap-4 overflow-hidden mt-2
        transition-opacity duration-3000
        ${isVisible ? 'opacity-100' : 'opacity-0'}
      `}
    >
      {/* Calendar icon with matching animation */}
      <div
        className={`
          flex items-center justify-center cursor-pointer relative
          transition-all duration-3000 ease-[cubic-bezier(0.43,0.13,0.23,0.96)]
          ${isVisible ? "translate-y-0" : "translate-y-16"}
        `}
        onMouseEnter={() => {
          setHasBeenHovered(true)
        }}
      >
        <Calendar
          className={`
            w-14 h-14 text-[#00FF7F] relative z-10 calendar-icon
            ${isVisible ? "animate-very-gentle-float" : ""}
          `}
          strokeWidth={1.5}
        />
      </div>

      {/* Button with position-sensitive hover fill animation */}
      <div
        className={`
          transition-all duration-1000 ease-out
          ${isVisible ? "translate-y-0" : "translate-y-16"}
          ${hasBeenHovered ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}
        `}
      >
        <button
          ref={buttonRef}
          className="relative overflow-hidden rounded-md border border-[#00FF7F]"
          onClick={handleClick}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {/* Background fill with faster transition */}
          <div
            className="absolute inset-0 bg-[#00FF7F] transition-transform duration-700 ease-out origin-left"
            style={{
              transform: isClicked ? "scaleX(1)" : `scaleX(${fillPercentage / 100})`,
            }}
          ></div>

          {/* Text content with slower color transition */}
          <span
            className="relative z-10 block px-4 py-1.5 text-sm font-medium transition-colors duration-700"
            style={{
              color: fillPercentage > 40 || isClicked ? "#2a2a2a" : "#00FF7F",
            }}
          >
            Let's chat
          </span>
        </button>
      </div>

      {/* Add custom animations with matching timing */}
      <style jsx global>{`
        @keyframes very-gentle-float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        
        .animate-very-gentle-float {
          animation: very-gentle-float 6s ease-in-out infinite;
          animation-delay: 1s;
        }

        .calendar-icon {
          filter: drop-shadow(0 0 12px rgba(0, 255, 127, 0.8));
        }

        .calendar-icon:hover {
          filter: drop-shadow(0 0 16px rgba(0, 255, 127, 1));
          transform: translateY(-12px);
          transition: filter 0.5s ease, transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
      `}</style>
    </div>
  )
} 