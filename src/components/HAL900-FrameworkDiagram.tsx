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
      top: 470px;
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
  return <Icon className={`w-10 h-10 stroke-[1.5]`} color={color} />
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
      className={`relative ${isLeft ? "text-right pr-12" : "pl-12"}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div className="relative overflow-hidden" transition={{ duration: 0.3 }}>
        <div className="relative">
          <motion.div
            className={`flex items-center gap-3 mb-3 ${isLeft ? "justify-end" : ""}`}
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
                  <Icon className="h-8 w-8 stroke-[1.5]" style={{ color }} />
                </div>
              </motion.div>
            )}
            <div>
              <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">{label}</span>
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
                  <Icon className="h-8 w-8 stroke-[1.5]" style={{ color }} />
                </div>
              </motion.div>
            )}
          </motion.div>

          <motion.h3
            className="text-lg font-semibold text-white mb-2"
            initial={{ y: 0 }}
            animate={{ y: isHovered ? -1 : 0 }}
            transition={{ duration: 0.2, delay: 0.1 }}
          >
            {title}
          </motion.h3>

          <motion.p
            className="text-gray-300 mb-4 text-sm leading-relaxed"
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
              className={`inline-flex items-center text-sm font-medium transition-colors relative group ${
                isLeft ? "flex-row-reverse" : ""
              }`}
              style={{ color: isHovered ? color : "#6B7280" }}
            >
              Learn more
              <motion.div animate={isHovered ? { x: isLeft ? -5 : 5 } : { x: 0 }} transition={{ duration: 0.2 }}>
                <ArrowRight className={`h-4 w-4 ${isLeft ? "mr-2" : "ml-2"}`} />
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
        </div>
      </motion.div>
      <div className="h-12" />
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

  // Define the paths
  const paths = [
    "M100 10 C 100 10, 250 505, 600 505",
    "M300 10 C 300 10, 375 505, 600 505",
    "M500 10 C 500 10, 525 505, 600 505",
    "M700 10 C 700 10, 675 505, 600 505",
    "M900 10 C 900 10, 825 505, 600 505",
    "M1100 10 C 1100 10, 950 505, 600 505",
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
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="block">Customisable, automated workflows</span>
            <span className="block">to scale your ops.</span>
          </h2>
          <div className="flex flex-col items-center space-y-1">
            <p className="text-white/80 text-xl">
              Leverage our precision-engineered, intelligent automation frameworks to deliver
            </p>
            <p className="text-white/80 text-xl">
              your business at scale, without added infrastructure overhead.
            </p>
          </div>
        </motion.div>

        {/* Main diagram with icons and lines */}
        <div className="relative w-full max-w-5xl mx-auto aspect-[16/9] z-10">
          <svg viewBox="0 0 1200 675" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              {paths.map((d, i) => (
                <path key={i} id={`path-${i}`} d={d} />
              ))}
            </defs>

            {/* Curved paths with smooth convergence */}
            {paths.map((d, i) => (
              <use key={i} href={`#path-${i}`} stroke={darkMode ? iconColors.dark[i] : iconColors.light[i]} strokeWidth="3" />
            ))}

            {/* Connection circles at the bottom of each icon */}
            {[100, 300, 500, 700, 900, 1100].map((cx, i) => (
              <circle key={i} cx={cx} cy="10" r="3" fill={darkMode ? iconColors.dark[i] : iconColors.light[i]} />
            ))}

            {/* Streaming dots for each path */}
            {paths.map((_, i) =>
              [...Array(3)].map((_, dotIndex) => (
                <circle key={`${i}-${dotIndex}`} r="4" fill={darkMode ? iconColors.dark[i] : iconColors.light[i]}>
                  <animateMotion dur="3s" repeatCount="indefinite" begin={`${dotIndex * 1}s`}>
                    <mpath href={`#path-${i}`} />
                  </animateMotion>
                </circle>
              )),
            )}

            {/* Our Services button */}
            <g transform="translate(500, 485)" style={{ cursor: "pointer" }} onClick={scrollToTimeline}>
              <rect
                x="0"
                y="0"
                width="200"
                height="56"
                rx="28"
                fill={darkMode ? "#4ADE80" : "#22C55E"}
                className="hover:fill-green-600 dark:hover:fill-green-500 transition-colors"
              />
              <text
                x="100"
                y="36"
                textAnchor="middle"
                fill="white"
                fontSize="20"
                fontFamily="Inter, sans-serif"
                className="font-medium pointer-events-none"
              >
                Explore Services
              </text>
            </g>
          </svg>

          {/* Icons at the same level with connection points */}
          <div className="absolute top-[10px] transform -translate-y-1/2 inset-x-0">
            <div className="flex justify-between items-center px-12">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="relative"
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
                  <div className="w-20 h-20 rounded-full bg-white dark:bg-gray-800 shadow-md dark:shadow-gray-700 flex items-center justify-center cursor-pointer transition-transform hover:scale-110">
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
          {/* Continuous vertical line that extends through the entire content */}
          <div className="absolute left-1/2 top-[360px] bottom-0 w-px bg-[#eaeaea] dark:bg-gray-700 -translate-x-1/2 z-[1]" />

          <div className="relative pt-8" ref={timelineRef}>
            {/* Animated line - adjusted positioning */}
            <motion.div
              className="absolute left-1/2 top-[-125px] w-px -translate-x-1/2 origin-top"
              style={{
                height: lineHeight,
                backgroundColor: darkMode ? timelineColor.dark : timelineColor.light,
                opacity: lineOpacity,
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
                    top: "-275px",
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