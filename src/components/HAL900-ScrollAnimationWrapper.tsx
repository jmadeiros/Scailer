import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState, useRef } from "react"
import type { ReactNode } from "react"

interface HAL900ScrollAnimationWrapperProps {
  children: ReactNode
  delay?: number
}

export default function HAL900ScrollAnimationWrapper({
  children,
  delay = 0,
}: HAL900ScrollAnimationWrapperProps) {
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Only trigger animation when element is 35% visible
          if (entry.intersectionRatio >= 0.35) {
            const timer = setTimeout(() => {
              setIsVisible(true)
            }, delay * 1000)
            return () => clearTimeout(timer)
          }
        })
      },
      {
        threshold: 0.35, // Trigger when 35% of element is visible
        rootMargin: "0px", // Start observing exactly when element comes into view
      }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [delay])

  return (
    <div ref={elementRef}>
      <AnimatePresence mode="wait">
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.8,
              ease: [0.25, 0.1, 0.25, 1.0],
              opacity: { duration: 2 },
              y: { duration: 2 },
            }}
            className="w-full"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
} 