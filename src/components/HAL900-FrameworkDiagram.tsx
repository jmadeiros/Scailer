"use client"

import { Database, Zap, Network, Cpu, Server, Shield, ArrowRight, Moon, Sun } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import Link from "next/link"

const iconColors = {
  light: ["#22C55E", "#0EA5E9", "#F59E0B", "#EC4899", "#8B5CF6", "#EF4444"],
  dark: ["#4ADE80", "#38BDF8", "#FBBF24", "#F472B6", "#A78BFA", "#FB7185"],
}

const timelineColor = {
  light: "#22C55E",
  dark: "#4ADE80",
}

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
`

// Add all keyframes to the document
if (typeof document !== "undefined") {
  const style = document.createElement("style")
  style.textContent = purpleDotKeyframes
  document.head.appendChild(style)
}

const ColoredIcon = ({ icon: Icon, color }: { icon: any; color: string }) => {
  return <Icon className="w-4 h-4 md:w-10 md:h-10 stroke-[1.5]" color={color} />
}

const FeatureBox = ({
  icon: Icon,
  title,
  description,
  label,
  isActive,
  color,
  isLeft,
}: {
  icon: any
  title: string
  description: string
  label: string
  isActive: boolean
  color: string
  isLeft: boolean
}) => {
  const ref = useRef(null)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
      animate={{ opacity: isActive || isHovered ? 1 : 0.5, x: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`relative ${isLeft ? "text-right md:pr-12 pr-6" : "md:pl-12 pl-6"}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div className="relative overflow-hidden" transition={{ duration: 0.3 }}>
        <motion.div
          className={`flex items-center gap-2 md:gap-3 mb-2 md:mb-3 ${isLeft ? "justify-end" : ""}`}
          initial={{ y: 0 }}
          animate={{ y: isHovered ? -2 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {!isLeft && (
            <motion.div
              className="relative"
              animate={
                isHovered
                  ? {
                      scale: [1, 1.1, 1],
                      rotate: [0, -5, 5, 0],
                    }
                  : {}
              }
              transition={{ duration: 0.5 }}
            >
              <div className="relative z-10">
                <Icon className="h-6 w-6 md:h-8 md:w-8 stroke-[1.5]" style={{ color }} />
              </div>
            </motion.div>
          )}
          <div>
            <span className="text-[10px] md:text-xs font-medium text-gray-400 uppercase tracking-wider">{label}</span>
          </div>
          {isLeft && (
            <motion.div
              className="relative"
              animate={
                isHovered
                  ? {
                      scale: [1, 1.1, 1],
                      rotate: [0, -5, 5, 0],
                    }
                  : {}
              }
              transition={{ duration: 0.5 }}
            >
              <div className="relative z-10">
                <Icon className="h-6 w-6 md:h-8 md:w-8 stroke-[1.5]" style={{ color }} />
              </div>
            </motion.div>
          )}
        </motion.div>

        <motion.h3
          className="text-base md:text-lg font-semibold text-white mb-1 md:mb-2"
          initial={{ y: 0 }}
          animate={{ y: isHovered ? -1 : 0 }}
          transition={{ duration: 0.2, delay: 0.1 }}
        >
          {title}
        </motion.h3>

        <motion.p
          className="text-xs md:text-sm text-gray-300 mb-3 md:mb-4 leading-relaxed"
          initial={{ y: 0 }}
          animate={{ y: isHovered ? -1 : 0 }}
          transition={{ duration: 0.2, delay: 0.2 }}
        >
          {description}
        </motion.p>

        <motion.div
          initial={{ x: 0 }}
          animate={{ x: isHovered ? (isLeft ? -3 : 3) : 0 }}
          transition={{ duration: 0.2 }}
        >
          <Link
            href="#"
            className={`inline-flex items-center text-xs md:text-sm font-medium transition-colors relative group ${
              isLeft ? "flex-row-reverse" : ""
            }`}
            style={{ color: isHovered ? color : "#6B7280" }}
          >
            Learn more
            <motion.div animate={isHovered ? { x: isLeft ? -5 : 5 } : { x: 0 }} transition={{ duration: 0.2 }}>
              <ArrowRight className={`h-3 w-3 md:h-4 md:w-4 ${isLeft ? "mr-1 md:mr-2" : "ml-1 md:ml-2"}`} />
            </motion.div>
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-0.5 origin-left"
              style={{ backgroundColor: color }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            />
          </Link>
        </motion.div>
      </motion.div>
      <div className="h-8 md:h-12" />
    </motion.div>
  )
}

const HAL900FrameworkDiagram = () => {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true"
    setDarkMode(isDarkMode)
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    localStorage.setItem("darkMode", (!darkMode).toString())
    document.documentElement.classList.toggle("dark")
  }

  const features = [
    {
      icon: Database,
      label: "ai-driven lead acquisition",
      title: "Smart Lead Targeting",
      description: "Uncover high-value leads with AI-powered data scraping and predictive targeting.",
    },
    {
      icon: Zap,
      label: "process automation",
      title: "Supercharge Your Workflow",
      description: "Streamline tasks, boost efficiency, and enhance customer interactions with smart automation.",
    },
    {
      icon: Network,
      label: "marketing optimisation",
      title: "Precision Marketing",
      description: "Elevate campaigns with AI-driven targeting, content creation, and predictive analytics.",
    },
    {
      icon: Shield,
      label: "customer retention systems",
      title: "Loyalty on Autopilot",
      description: "Keep customers engaged with personalized experiences and automated re-engagement strategies.",
    },
    {
      icon: Cpu,
      label: "ai-powered hiring & optimisation",
      title: "Build Your Dream Team",
      description: "Streamline hiring and workforce management with AI-powered sourcing and optimization.",
    },
    {
      icon: Server,
      label: "website design",
      title: "Websites That Convert",
      description: "Create high-performance, SEO-friendly sites optimized for conversions and user experience.",
    },
  ]

  const containerRef = useRef(null)
  const timelineRef = useRef(null)
  const [activeFeature, setActiveFeature] = useState(0)
  const featureRefs = useRef<(HTMLDivElement | null)[]>([])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  const lineOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.1, 0.15, 0.15, 0.1])

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      const featureIndex = Math.min(Math.floor(latest * features.length), features.length - 1)
      setActiveFeature(featureIndex)
    })

    return () => unsubscribe()
  }, [scrollYProgress, features.length])

  const scrollToTimeline = () => {
    if (timelineRef.current) {
      const element = timelineRef.current as HTMLElement
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  const scrollToFeature = (index: number) => {
    const featureElement = featureRefs.current[index]
    if (featureElement) {
      const offset = 100 // Adjust this value to fine-tune the scroll position
      const elementPosition = featureElement.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  // Define the paths for desktop
  const desktopPaths = [
    "M150 10 C 150 10, 300 405, 600 435",
    "M300 10 C 300 10, 400 405, 600 435",
    "M450 10 C 450 10, 500 405, 600 435",
    "M750 10 C 750 10, 700 405, 600 435",
    "M900 10 C 900 10, 800 405, 600 435",
    "M1050 10 C 1050 10, 900 405, 600 435"
  ]

  // Define the paths for mobile (adjusted coordinates)
  const mobilePaths = [
    "M20 32 C 20 32, 100 205, 192 235",  // Leftmost path
    "M84 32 C 84 32, 130 205, 192 235",  // Second path
    "M148 32 C 148 32, 160 205, 192 235", // Third path
    "M236 32 C 236 32, 224 205, 192 235", // Fourth path
    "M300 32 C 300 32, 254 205, 192 235", // Fifth path
    "M364 32 C 364 32, 284 205, 192 235", // Rightmost path
  ]

  return (
    <section className="py-24 md:py-32 bg-scailer-dark relative">
      <div className="container mx-auto px-4">
        <button
          onClick={toggleDarkMode}
          className="fixed top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition-colors duration-300"
        >
          {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
        </button>

        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-24"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 md:mb-12">
            <span className="block">Customisable, automated workflows</span>
            <span className="block">to scale your ops.</span>
          </h2>
          <div className="flex flex-col items-center space-y-1 mt-4 md:mt-8">
            <p className="text-white/80 text-lg md:text-xl px-4 md:px-0">
              Leverage our precision-engineered, intelligent automation frameworks to deliver
            </p>
            <p className="text-white/80 text-lg md:text-xl px-4 md:px-0">
              your business at scale, without added infrastructure overhead.
            </p>
          </div>
        </motion.div>

        {/* Main diagram with icons and lines */}
        <div className="relative w-full max-w-sm mx-auto z-10 md:max-w-5xl">
          {/* Mobile SVG */}
          <svg viewBox="0 0 384 275" className="block md:hidden w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              {mobilePaths.map((d, i) => (
                <path key={i} id={`path-mobile-${i}`} d={d} />
              ))}
            </defs>

            {/* Curved paths with smooth convergence */}
            {mobilePaths.map((d, i) => (
              <path
                key={i}
                d={d}
                stroke={darkMode ? iconColors.dark[i] : iconColors.light[i]}
                strokeWidth="2"
                fill="none"
              />
            ))}

            {/* Animated dots for each path */}
            {mobilePaths.map((_, i) => (
              [...Array(2)].map((__, dotIndex) => (
                <circle
                  key={`${i}-${dotIndex}`}
                  r="3"
                  fill={darkMode ? iconColors.dark[i] : iconColors.light[i]}
                >
                  <animateMotion
                    dur="3s"
                    repeatCount="indefinite"
                    begin={`${dotIndex * 1.5}s`}
                  >
                    <mpath href={`#path-mobile-${i}`} />
                  </animateMotion>
                </circle>
              ))
            ))}

            {/* Explore Services Button */}
            <g transform="translate(192, 235)">
              <motion.g whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <circle r="24" className="fill-scailer-green cursor-pointer" onClick={() => scrollToTimeline()} />
                <foreignObject x="-12" y="-12" width="24" height="24" className="overflow-visible">
                  <div className="flex items-center justify-center w-full h-full text-black">
                    <ArrowRight className="w-5 h-5 rotate-90" />
                  </div>
                </foreignObject>
              </motion.g>
            </g>
          </svg>

          {/* Desktop SVG */}
          <svg viewBox="0 0 1200 500" className="hidden md:block w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              {desktopPaths.map((d, i) => (
                <path key={i} id={`path-desktop-${i}`} d={d} />
              ))}
            </defs>

            {/* Curved paths with smooth convergence */}
            {desktopPaths.map((d, i) => (
              <path
                key={i}
                d={d}
                stroke={darkMode ? iconColors.dark[i] : iconColors.light[i]}
                strokeWidth="2"
                fill="none"
              />
            ))}

            {/* Animated dots for each path */}
            {desktopPaths.map((_, i) => (
              [...Array(2)].map((__, dotIndex) => (
                <circle
                  key={`${i}-${dotIndex}`}
                  r="4"
                  fill={darkMode ? iconColors.dark[i] : iconColors.light[i]}
                >
                  <animateMotion
                    dur="4s"
                    repeatCount="indefinite"
                    begin={`${dotIndex * 1.5}s`}
                  >
                    <mpath href={`#path-desktop-${i}`} />
                  </animateMotion>
                </circle>
              ))
            ))}

            {/* Explore Services Button */}
            <g transform="translate(600, 435)">
              <motion.g whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <circle r="32" className="fill-scailer-green cursor-pointer" onClick={() => scrollToTimeline()} />
                <foreignObject x="-16" y="-16" width="32" height="32" className="overflow-visible">
                  <div className="flex items-center justify-center w-full h-full text-black">
                    <ArrowRight className="w-6 h-6 rotate-90" />
                  </div>
                </foreignObject>
              </motion.g>
            </g>
          </svg>

          {/* Icons at the same level with connection points */}
          <div className="absolute top-0 inset-x-0 -mt-8 md:-mt-16">
            <div className="flex justify-between items-center px-2 md:px-12">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="relative flex flex-col items-center"
                  onClick={() => scrollToFeature(index)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Scroll to ${feature.label}`}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      scrollToFeature(index)
                    }
                  }}
                >
                  <div className="w-8 h-8 md:w-20 md:h-20 rounded-full bg-white dark:bg-gray-800 shadow-md dark:shadow-gray-700 flex items-center justify-center cursor-pointer transition-transform hover:scale-110">
                    <ColoredIcon
                      icon={feature.icon}
                      color={darkMode ? iconColors.dark[index] : iconColors.light[index]}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline section with continuous line - adjusted positioning */}
        <div className="relative max-w-5xl mx-auto" style={{ minHeight: "800px" }}>
          {/* Animated line - adjusted positioning */}
          <div className="relative pt-8" ref={timelineRef}>
            <motion.div
              className="absolute left-1/2 w-[1px] h-[950px] -top-[150px] origin-top"
              style={{
                background: "rgba(255, 255, 255, 0.3)",
                opacity: useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 0.4, 0.4, 0.3]),
              }}
            />

            {/* Streaming purple dots - adjusted positioning */}
            <div className="absolute left-1/2 -translate-x-[2px] z-[2]">
              {[...Array(2)].map((_, i) => (
                <div
                  key={i}
                  className="absolute"
                  style={{
                    width: "10px",
                    height: "10px",
                    left: "-3px",
                    animation: `streamDot 2s cubic-bezier(0.4, 0, 1, 1) infinite`,
                    animationDelay: `${i * 3}s`,
                    willChange: "top, opacity",
                    top: "-150px",
                  }}
                >
                  <div
                    className="w-full h-full rounded-full"
                    style={{
                      backgroundColor: darkMode ? timelineColor.dark : timelineColor.light,
                    }}
                  />
                </div>
              ))}
            </div>

            {/* Grid layout for features */}
            <div className="relative grid grid-cols-2 gap-y-8 z-[3]">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={index % 2 === 0 ? "pr-8" : "pl-8"}
                  ref={(el) => {
                    featureRefs.current[index] = el;
                  }}
                >
                  <FeatureBox
                    {...feature}
                    isLeft={index % 2 === 0}
                    isActive={index === activeFeature}
                    color={darkMode ? iconColors.dark[index] : iconColors.light[index]}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HAL900FrameworkDiagram 