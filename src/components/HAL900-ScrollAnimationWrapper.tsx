import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
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

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, delay * 1000)

    return () => clearTimeout(timer)
  }, [delay])

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.1, 0.25, 1.0],
            delay: 0.1,
          }}
          className="w-full"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
} 