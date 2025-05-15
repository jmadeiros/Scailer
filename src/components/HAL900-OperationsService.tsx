"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { motion, useScroll, useTransform, useSpring, useInView, AnimatePresence } from "framer-motion"
import { Zap, Check, ArrowRight, Target, User, ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import HAL900MessageAnimation from "./HAL900-MessageAnimation"

const implementationSteps = [
  {
    step: "Step 1",
    title: "Identify Bottlenecks",
    description: "We identify inefficiencies in your business through data analysis and targeted discussions.",
    details:
      "Our comprehensive analysis looks at your entire workflow, identifying both obvious and hidden bottlenecks that are limiting your potential.",
  },
  {
    step: "Step 2",
    title: "Custom AI-Powered Solutions",
    description:
      "We design tailored automation and AI-driven systems that integrate seamlessly into your existing processes.",
    details:
      "We leverage cutting-edge AI technologies that are specifically configured to address your unique business challenges.",
  },
  {
    step: "Step 3",
    title: "Rapid Implementation",
    description:
      "No long wait times. We deploy solutions quickly, ensuring minimal disruption. Our onboarding is smooth, and we start optimizing your workflows almost immediately.",
    details:
      "While traditional implementations can take months, our streamlined approach gets you up and running in weeks or even days.",
  },
  {
    step: "Step 4",
    title: "Continuous Optimization & Scaling",
    description: "We continuously refine and scale your automation systems as your business evolves.",
    details:
      "We don't just set it and forget it. Our ongoing optimization ensures your systems evolve as your business grows and market conditions change.",
  },
]

const operationsSteps = [
  {
    step: "Step 1",
    title: "Assess Your Needs",
    description: "We analyze your current operations and identify opportunities for automation and optimization.",
    details:
      "Our assessment includes a thorough review of your workflows, tools, and team structure to identify the highest-impact opportunities.",
  },
  {
    step: "Step 2",
    title: "Design Custom Solutions",
    description: "We create a tailored operations strategy that addresses your specific business challenges.",
    details:
      "Our solutions are designed to integrate seamlessly with your existing systems while providing the flexibility to scale as your business grows.",
  },
  {
    step: "Step 3",
    title: "Implementation & Training",
    description:
      "We deploy the solutions and provide comprehensive training to ensure your team can maximize their effectiveness.",
    details:
      "Our implementation process is designed to minimize disruption while ensuring your team has the knowledge and skills to leverage the new systems.",
  },
  {
    step: "Step 4",
    title: "Ongoing Support & Optimization",
    description: "We provide continuous support and regularly optimize your operations as your business evolves.",
    details:
      "Our team remains available to address any issues and continuously refine your operations to adapt to changing business needs.",
  },
]

const ProcessIcon = ({ progress }: { progress: number }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-5 h-5"
    style={{ transform: `scale(${progress})` }}
  >
    <path
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      stroke="#25D366"
      strokeWidth="2"
    />
    <path
      d="M12 8C12 8 14 10 14 12C14 14 12 16 12 16C12 16 10 14 10 12C10 10 12 8 12 8Z"
      stroke="#25D366"
      strokeWidth="2"
    />
  </svg>
)

const TimelineStep = ({
  step,
  index,
  isExpanded,
  onToggle,
  isMobile,
}: { step: any; index: number; isExpanded: boolean; onToggle: () => void; isMobile: boolean }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const isEven = index % 2 === 0

  return (
    <motion.div
      ref={ref}
      className="relative mb-1"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Timeline dot */}
      <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center justify-center w-5 h-5 bg-[#25D366] rounded-full">
          <div className="w-2 h-2 bg-[#2a2a2a] rounded-full" />
        </div>
      </div>

      {/* Content box - positioned to left or right based on index */}
      <div className={`flex ${isEven ? "justify-start" : "justify-end"}`}>
        <motion.div
          className={`w-[45%] cursor-pointer ${isEven ? "mr-[5%]" : "ml-[5%]"}`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onToggle}
        >
          <div className="px-3 pt-3 pb-2 bg-[#3a3a3a]/50 rounded-lg shadow-sm">
            <div className="flex items-start gap-2 mb-2">
              <span className="font-bold text-[#25D366] text-sm hidden md:inline">{step.step}</span>
              <h3 className="text-base font-semibold text-white">{step.title}</h3>
            </div>
            {/* Desktop: Description always visible, only details expand */}
            {!isMobile && (
              <>
                <p className="text-gray-300 text-sm mb-2">{step.description}</p>
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="mt-2 text-xs text-gray-400">{step.details}</p>
                </motion.div>
              </>
            )}
            {/* Mobile: Both description and details are in the expandable section */}
            {isMobile && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="text-gray-300 text-sm mb-2">{step.description}</p>
                <p className="mt-2 text-xs text-gray-400">{step.details}</p>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

// Custom Smooth Scroll Function
const customSmoothScrollTo = (targetPosition: number, duration: number = 2500) => { // Default to 2.5s
  if (typeof window === 'undefined') return;
  console.log(`[OPS_SCROLL_V2] Attempting scroll to ${targetPosition} (current: ${window.pageYOffset}) over ${duration}ms`);

  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime: number | null = null;
  let frameCount = 0;

  if (Math.abs(distance) < 5) {
    console.log("[OPS_SCROLL_V2] Target too close. Snapping.");
    window.scrollTo({ top: targetPosition, behavior: 'auto' });
    return;
  }

  if (document.documentElement.scrollHeight <= window.innerHeight && distance !== 0) {
    const newMinHeight = Math.max(document.body.scrollHeight, targetPosition + window.innerHeight);
    // console.warn(`[OPS_SCROLL_V2] Document not fully scrollable. Forcing body.minHeight to ${newMinHeight}px`);
    // document.body.style.minHeight = `${newMinHeight}px`;
    // void document.body.offsetHeight;
  }

  const animateScroll = (timestamp: number) => {
    if (startTime === null) {
      startTime = timestamp;
      console.log(`[OPS_SCROLL_V2] Animation START. Timestamp: ${timestamp.toFixed(2)}, StartPos: ${startPosition}`);
    }

    const timeElapsed = timestamp - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    frameCount++;

    const easeInOutCubic = (t: number) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    const newCalculatedPosition = startPosition + distance * easeInOutCubic(progress);

    window.scrollTo({ top: newCalculatedPosition, behavior: 'auto' });
    const actualPositionAfterScroll = window.pageYOffset;

    if (frameCount % 15 === 0 || progress === 1) { // Log more frequently towards the end
      console.log(
        `[OPS_SCROLL_V2] Frame: ${frameCount}, ` +
        `Time: ${timeElapsed.toFixed(0)}ms, ` +
        `Progress: ${progress.toFixed(3)}, ` +
        `TargetCalc: ${newCalculatedPosition.toFixed(0)}, ` +
        `ActualAfterScroll: ${actualPositionAfterScroll.toFixed(0)}`
      );
    }
    
    if (progress < 1 && Math.abs(actualPositionAfterScroll - newCalculatedPosition) > 20 && frameCount > 5) { // Allow some initial deviation
        console.warn(
            `[OPS_SCROLL_V2] INTERFERENCE? Frame: ${frameCount}, ` +
            `Set: ${newCalculatedPosition.toFixed(0)}, ` +
            `Got: ${actualPositionAfterScroll.toFixed(0)}, Diff: ${(actualPositionAfterScroll - newCalculatedPosition).toFixed(0)}`
        );
    }

    if (progress < 1) {
      requestAnimationFrame(animateScroll);
    } else {
      window.scrollTo({ top: targetPosition, behavior: 'auto' });
      console.log(
        `[OPS_SCROLL_V2] Animation END. TotalFrames: ${frameCount}, ` +
        `FinalPos: ${window.pageYOffset.toFixed(0)}, ` +
        `Target: ${targetPosition}`
      );
    }
  };

  console.log("[OPS_SCROLL_V2] Requesting first animation frame.");
  requestAnimationFrame(animateScroll);
};

const MobileFeatures = ({ features }: { features: Array<{title: string, description: string, icon: any}> }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  
  return (
    <div className="md:hidden flex flex-col items-center w-full">
      {/* Small indicator text */}
      <p className="text-xs text-[#25D366]/70 mb-4 text-center">Tap icons to learn more</p>
      
      {/* Horizontal row of icons */}
      <div className="flex justify-around w-full mb-4">
        {features.map((feature, index) => {
          const IconComponent = feature.icon;
          return (
            <motion.button
              key={index}
              className={`relative w-16 h-16 rounded-full flex items-center justify-center shadow-lg ${ 
                activeIndex === index 
                  ? "bg-[#25D366] text-white shadow-[#25D366]/30 scale-110"
                  : "bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366]/20"
              } transition-all duration-300`}
              whileHover={{ scale: activeIndex === index ? 1.1 : 1.05 }} 
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            >
              <IconComponent className={`w-7 h-7 ${activeIndex === index ? "text-white" : "text-[#25D366]"}`} />
              
              {/* Ripple effect on active state */}
              {activeIndex === index && (
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-[#25D366] z-0"
                  initial={{ opacity: 0.8, scale: 1 }}
                  animate={{ 
                    opacity: 0,
                    scale: 1.2,
                  }}
                  transition={{ 
                    repeat: Infinity,
                    duration: 1.5,
                    ease: "easeOut"
                  }}
                />
              )}
            </motion.button>
          );
        })}
      </div>
      
      {/* Content area below icons - shown when an icon is active */}
      {/* Wrapper to maintain space and prevent layout shift */}
      <div className="w-full" style={{ minHeight: '120px' }}> {/* Adjust min-height as needed based on typical content */}
        <AnimatePresence mode="wait">
          {activeIndex !== null && features[activeIndex] && (
            <motion.div 
              key={activeIndex}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10, height: 0 }}
              transition={{ duration: 0.3 }}
              className="text-center mt-2 px-4 py-4 overflow-hidden w-full"
            >
              <h4 className="text-xl font-medium text-white mb-2">{features[activeIndex].title}</h4>
              <p className="text-base text-gray-400 max-w-sm mx-auto leading-relaxed">{features[activeIndex].description}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const MobileSectionDots = ({
  activeSection,
  onDotClick,
}: {
  activeSection: "strategic" | "ops" | "implementation";
  onDotClick: (section: "strategic" | "ops" | "implementation") => void;
}) => {
  const sectionsOrder: Array<"strategic" | "ops" | "implementation"> = ["strategic", "ops", "implementation"];
  const sectionLabels = {
    "strategic": "1",
    "ops": "2",
    "implementation": "3"
  };
  
  return (
    <div className="flex justify-center items-center py-3 space-x-2">
      {sectionsOrder.map((sectionKey, index) => {
        const isActive = activeSection === sectionKey;
        const isPast = sectionsOrder.indexOf(activeSection) > index;
        
        return (
          <div key={sectionKey} className="flex items-center">
            <button
              onClick={() => onDotClick(sectionKey)}
              className={`flex items-center justify-center rounded-full w-6 h-6 transition-all duration-300 ease-in-out focus:outline-none
                ${isActive 
                  ? 'bg-[#25D366] text-white font-medium'
                  : isPast
                    ? 'bg-[#25D366]/40 text-white'
                    : 'bg-gray-600 hover:bg-gray-500 text-white/80'
                }
              `}
              aria-label={`Go to ${sectionKey} section`}
            >
              <span className="text-xs">{sectionLabels[sectionKey]}</span>
            </button>
            
            {index < sectionsOrder.length - 1 && (
              <div 
                className={`h-[2px] w-6 mx-1 ${
                  isPast ? 'bg-[#25D366]/40' : 'bg-gray-600'
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default function HAL900OperationsService() {
  // All refs defined at the top level
  const strategicRef = useRef<HTMLDivElement>(null)
  const opsRef = useRef<HTMLDivElement>(null)
  const implementationRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)
  const opsTimelineRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const strategicContentRef = useRef<HTMLDivElement>(null)
  const opsContentRef = useRef<HTMLDivElement>(null)
  const implementationContentRef = useRef<HTMLDivElement>(null)
  const whySpeedMattersRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const mobileNavHeaderRef = useRef<HTMLDivElement>(null); // Ref for mobile tabs + dots block

  // All state defined at the top level
  const [expandedStep, setExpandedStep] = useState<number | null>(null)
  const [expandedOpsStep, setExpandedOpsStep] = useState<number | null>(null)
  const [activeSection, setActiveSection] = useState<"strategic" | "ops" | "implementation">("strategic")
  const [prevSection, setPrevSection] = useState<"strategic" | "ops" | "implementation">("strategic")
  const [direction, setDirection] = useState<"forward" | "backward">("forward")
  const [resetScroll, setResetScroll] = useState(false)
  const [contentHeight, setContentHeight] = useState<number>(0)
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768); // md breakpoint
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // All hooks called unconditionally at the top level
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "center start"],
  })

  const { scrollYProgress: opsScrollYProgress } = useScroll({
    target: opsTimelineRef,
    offset: ["start end", "center start"],
  })

  const opsScaleX = useSpring(opsScrollYProgress, {
    stiffness: 200,
    damping: 20,
    restDelta: 0.001,
  })

  const { scrollYProgress: strategicScrollProgress } = useScroll({
    target: strategicContentRef,
    offset: ["start start", "end start"],
  })

  const { scrollYProgress: opsScrollProgress } = useScroll({
    target: opsContentRef,
    offset: ["start start", "end start"],
  })

  const { scrollYProgress: implementationScrollProgress } = useScroll({
    target: implementationContentRef,
    offset: ["start start", "end start"],
  })

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 20,
    restDelta: 0.001,
  })

  const yTransform = useTransform(scrollYProgress, [0, 1], [0, 80])
  const progressTransform = useTransform(scrollYProgress, [0, 1], [0.5, 1])

  // Set initial active section
  useEffect(() => {
    setActiveSection("strategic")
  }, [])

  // Reset scroll position when changing sections
  useEffect(() => {
    if (resetScroll) {
      if (activeSection === "strategic" && strategicContentRef.current) {
        strategicContentRef.current.scrollTop = 0
      } else if (activeSection === "ops" && opsContentRef.current) {
        opsContentRef.current.scrollTop = 0
      } else if (activeSection === "implementation" && implementationContentRef.current) {
        implementationContentRef.current.scrollTop = 0
      }
      setResetScroll(false)
    }
  }, [resetScroll, activeSection])

  const scrollToSection = (
    contentRefForAnimationLogic: React.RefObject<HTMLDivElement>, // Renamed to avoid confusion
    section: "strategic" | "ops" | "implementation"
  ) => {
    const sectionsOrderList = ["strategic", "ops", "implementation"];
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
  }

  // Update content height when section changes
  useEffect(() => {
    const updateHeight = () => {
      if (activeSection === "strategic" && strategicRef.current) {
        setContentHeight(strategicRef.current.offsetHeight);
      } else if (activeSection === "ops" && opsRef.current) {
        setContentHeight(opsRef.current.offsetHeight);
      } else if (activeSection === "implementation" && implementationRef.current) {
        setContentHeight(implementationRef.current.offsetHeight);
      }
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, [activeSection]);

  // Animation variants for consistent scrolling in both directions
  const containerVariants = {
    enter: (direction: "forward" | "backward") => ({
      x: direction === "forward" ? "150%" : "-150%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 20,
        mass: 1,
      },
    },
    exit: (direction: "forward" | "backward") => ({
      x: direction === "forward" ? "-150%" : "150%",
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 20,
        mass: 1,
      },
    }),
  }

  useEffect(() => {
    if (headingRef.current) {
      // Log the heading's content structure
      console.log('Heading Debug:', {
        rawHTML: headingRef.current.innerHTML,
        textContent: headingRef.current.textContent,
        childNodes: Array.from(headingRef.current.childNodes).map(node => ({
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

  return (
    <section id="operations-service" className="py-16 md:py-24 bg-[#2a2a2a] relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#25D366]/5 rounded-full blur-3xl -z-10 opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#25D366]/5 rounded-full blur-3xl -z-10 opacity-50"></div>

        <div className="max-w-5xl mx-auto">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-24"
          >
            <h2 ref={headingRef} className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-16 leading-tight max-w-4xl mx-auto">
              The difference between <br className="md:hidden" /><span className="text-[#25D366]">scaling</span> and{" "}
              <br className="hidden md:block" />
              <span className="text-gray-500">stalling</span> <br className="md:hidden" />isn't effort—it's strategy.
            </h2>

            <p className="text-gray-300 text-base md:text-xl mb-32 max-w-3xl mx-auto font-light tracking-wide leading-relaxed">
              <span className="text-[#25D366] font-bold">AI and automation</span> have the power to drive exponential
              growth, but with countless tools available, the path forward often feels overwhelming. You see the
              potential, but without a clear strategy,{" "}
              <span className="text-gray-500 font-bold">opportunity quickly turns into complexity</span>.
            </p>

            <div className="mb-32 max-w-3xl mx-auto text-center">
              <h3 className="text-white text-2xl md:text-3xl font-medium mb-6">That's where we come in.</h3>
              <div className="h-1 w-32 bg-[#25D366] rounded-full mx-auto"></div>
            </div>

            {/* === Mobile Top Tab Navigation (Only Tabs) === */}
            <div ref={mobileNavHeaderRef} className="md:hidden mb-8">
              <div className="flex justify-around items-center border-b border-gray-700">
                {[
                  { section: "strategic", label: "Strategy", Icon: Target },
                  { section: "ops", label: "Operations", Icon: User },
                  { section: "implementation", label: "Implement", Icon: Zap },
                ].map(({ section, label, Icon }) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(
                      section === "strategic" ? strategicRef : section === "ops" ? opsRef : implementationRef,
                      section as "strategic" | "ops" | "implementation"
                    )}
                    className={`flex-1 py-3 px-2 text-center border-b-2 transition-colors duration-300 ease-in-out focus:outline-none
                      ${activeSection === section
                        ? "border-[#25D366] text-[#25D366]"
                        : "border-transparent text-gray-400 hover:text-gray-200"
                      }
                    `}
                  >
                    <div className="flex flex-col items-center">
                      <Icon className={`w-5 h-5 mb-1 ${activeSection === section ? "text-[#25D366]" : "text-gray-400"}`} />
                      <span className="text-xs font-medium">{label}</span>
                    </div>
                  </button>
                ))}
              </div>
              {/* Dots are removed from here, will be placed at the bottom of each section */}
            </div>
            
            {/* Desktop Button container */}
            <div className="hidden md:flex flex-wrap justify-center gap-4 mt-20">
              <motion.button
                onClick={() => scrollToSection(strategicRef, "strategic")}
                className={`flex items-center gap-2 px-5 py-3 rounded-full w-[280px] justify-center ${
                  activeSection === "strategic"
                    ? "bg-[#25D366] text-white"
                    : "bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366]/20"
                } transition-colors text-base font-medium`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Target className="w-5 h-5" />
                <span>Strategic Growth</span>
                <ChevronLeft
                  className={`w-5 h-5 transition-transform rotate-90 ${activeSection === "strategic" ? "rotate-[270deg]" : ""}`}
                />
              </motion.button>

              <motion.button
                onClick={() => scrollToSection(opsRef, "ops")}
                className={`flex items-center gap-2 px-5 py-3 rounded-full w-[280px] justify-center ${
                  activeSection === "ops"
                    ? "bg-[#25D366] text-white"
                    : "bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366]/20"
                } transition-colors text-base font-medium`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <User className="w-5 h-5" />
                <span>Operations as a Service</span>
                <ChevronLeft
                  className={`w-5 h-5 transition-transform rotate-90 ${activeSection === "ops" ? "rotate-[270deg]" : ""}`}
                />
              </motion.button>

              <motion.button
                onClick={() => scrollToSection(implementationRef, "implementation")}
                className={`flex items-center gap-2 px-5 py-3 rounded-full w-[280px] justify-center ${
                  activeSection === "implementation"
                    ? "bg-[#25D366] text-white"
                    : "bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366]/20"
                } transition-colors text-base font-medium`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Zap className="w-5 h-5" />
                <span>Rapid Implementation</span>
                <ChevronLeft
                  className={`w-5 h-5 transition-transform rotate-90 ${activeSection === "implementation" ? "rotate-[270deg]" : ""}`}
                />
              </motion.button>
            </div>
          </motion.div>

          {/* Content container with dynamic height */}
          <div 
            className="relative overflow-visible transition-all duration-300 w-[150%] -ml-[25%]"
            ref={containerRef}
            style={{ minHeight: contentHeight }}
          >
            <AnimatePresence mode="popLayout" custom={direction}>
              {activeSection === "strategic" && (
                <motion.div
                  ref={strategicRef}
                  key="strategic"
                  custom={direction}
                  variants={containerVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="w-full flex justify-center"
                >
                  <div className="w-[66.666%]">
                    {/* Header that slides in with the section */}
                    <motion.div className="text-center mb-12">
                      <div className="inline-block bg-[#25D366]/10 px-3 py-1 rounded-full mb-4">
                        <span className="text-[#25D366] text-sm font-medium">STRATEGIC GROWTH</span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Unlock Your Business Potential</h3>
                      <div className="h-1 w-24 bg-[#25D366] mx-auto rounded-full mb-10"></div>
                    </motion.div>

                    {/* Content that animates on scroll */}
                    <div ref={strategicContentRef} className="pb-16">
                      <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-center mb-12 md:mb-12"
                      >
                        <p className="text-xl md:text-2xl text-white font-medium mb-8 md:mb-2">
                          Our mission is to bridge the gap between where your business is today and where it's built to go.
                        </p>
                      </motion.div>

                      <div className="max-w-3xl mx-auto mb-12">
                        <ul className="space-y-12 md:space-y-8">
                          {[
                            "We remove bottlenecks, streamline operations, and implement the right AI-powered systems that drive growth with speed and precision.",
                            "We analyse how you work, spot the gaps, and deliver solutions that fit seamlessly into your business.",
                          ].map((item, index) => (
                            <motion.li
                              key={index}
                              className="flex items-start"
                              initial={{ opacity: 0, y: 50 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true, amount: 0.2 }}
                              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                            >
                              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#25D366]/20 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                                <Check className="w-4 h-4 md:w-5 md:h-5 text-[#25D366]" />
                              </div>
                              <p className="text-gray-300 text-base md:text-lg">{item}</p>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                      <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="text-center py-16 md:py-8"
                      >
                        {/* DESKTOP: "NEXT SECTION" PROMPT - Arrow and text */}
                        {!isMobile && (
                          <div className="max-w-3xl mx-auto px-4">
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                              Our job? Seeing what you don't. Streamlining what you do. Making AI simple—and scaling what works.
                            </h3>
                            <div className="mt-12 flex flex-col items-center">
                              <motion.p
                                className="text-[#25D366] mb-2 font-medium"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.5 }}
                                viewport={{ once: true }}
                              >
                                Discover our approach
                              </motion.p>
                              <motion.div // Outer div: entrance, click, hover, tap
                                className="flex items-center justify-center cursor-pointer"
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0, transition: { delay: 1.5, duration: 0.7 } }} // Entrance animation
                                viewport={{ once: true }}
                                whileHover={isMobile ? { x: 5 } : {}} // Hover effect on mobile only
                                whileTap={{ scale: 0.95 }} // Tap effect
                                onClick={() => scrollToSection(opsRef, "ops")}
                              >
                                <motion.div // Inner div: continuous animation for SVG
                                  animate={!isMobile ? { // Animation for desktop
                                    x: [0, 8],
                                    transition: {
                                      delay: 2.2, 
                                      duration: 1.0,
                                      repeat: Infinity,
                                      repeatType: "loop",
                                      ease: "easeInOut",
                                      repeatDelay: 0.2
                                    }
                                  } : { x: 0 }} // No continuous animation on mobile
                                >
                                  <svg
                                    className="w-12 h-12 md:w-10 md:h-10"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M4 12H20M20 12L14 6M20 12L14 18"
                                      stroke="#25D366"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </motion.div>
                              </motion.div>
                              <motion.p
                                className="text-gray-400 text-sm mt-2"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.3, duration: 0.5 }}
                                viewport={{ once: true }}
                              >
                                Operations as a Service
                              </motion.p>
                            </div>
                          </div>
                        )}
                        {/* MOBILE: NAVIGATION DOTS + "NEXT SECTION" PROMPT at bottom of Strategic Growth */}
                        {isMobile && (
                          <div className="mt-4 md:hidden">
                            <MobileSectionDots 
                              activeSection={activeSection} 
                              onDotClick={(sectionKey) => {
                                const targetContentRef = sectionKey === "strategic" ? strategicRef : sectionKey === "ops" ? opsRef : implementationRef;
                                scrollToSection(targetContentRef, sectionKey);
                              }}
                            />
                            <p className="text-center text-[#25D366] text-sm font-medium mt-2">
                              Next: Operations
                            </p>
                          </div>
                        )}
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeSection === "ops" && (
                <motion.div
                  ref={opsRef}
                  key="ops"
                  custom={direction}
                  variants={containerVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="w-full flex justify-center"
                >
                  <div className="w-[66.666%]">
                    {/* Header that slides in with the section */}
                    <motion.div className="text-center mb-12">
                      <div className="inline-block bg-[#25D366]/10 px-3 py-1 rounded-full mb-4">
                        <span className="text-[#25D366] text-sm font-medium">OPERATIONS AS A SERVICE</span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">A better way to build ops</h3>
                      <div className="h-1 w-24 bg-[#25D366] mx-auto rounded-full mb-10"></div>
                    </motion.div>

                    {/* Content that animates on scroll */}
                    <div ref={opsContentRef} className="pb-16">
                      <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-10 md:mb-16"
                      >
                        <p className="text-gray-300 text-base md:text-xl max-w-2xl mx-auto mb-4 md:mb-6">
                          Traditional hiring can be slow, costly, and demands significant upfront commitment. Our approach
                          is different:
                        </p>
                      </motion.div>

                      {/* Three column feature layout */}
                      <div className="max-w-5xl mx-auto mb-12 md:mb-20 px-4">
                        {/* Desktop layout - unchanged */}
                        <div className="hidden md:grid md:grid-cols-3 gap-8 md:gap-12">
                          {[
                            {
                              title: "On-demand automation expertise",
                              description:
                                "Access specialized skills exactly when you need them, without the overhead of full-time hires.",
                              icon: Zap,
                            },
                            {
                              title: "Simple implementation process",
                              description:
                                "Clear, straightforward steps from onboarding to execution, with no unnecessary complexity.",
                              icon: Target,
                            },
                            {
                              title: "Systems you need at an affordable rate",
                              description:
                                "Flexible pricing that scales with your needs - enterprise-level solutions at startup-friendly prices.",
                              icon: User,
                            },
                          ].map((item, index) => (
                            <motion.div
                              key={index}
                              className="flex flex-col items-center text-center p-6 rounded-lg"
                              initial={{ opacity: 0, y: 50 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true, amount: 0.2 }}
                              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                            >
                              <div className="w-16 h-16 rounded-full bg-[#25D366]/20 flex items-center justify-center mb-6">
                                <item.icon className="w-7 h-7 text-[#25D366]" />
                              </div>
                              <h4 className="text-xl font-medium text-white mb-4">{item.title}</h4>
                              <p className="text-base text-gray-400 max-w-xs mx-auto leading-relaxed">{item.description}</p>
                            </motion.div>
                          ))}
                        </div>
                        
                        {/* Mobile layout - vertical icons with expandable content */}
                        <MobileFeatures 
                          features={[
                            {
                              title: "On-demand automation expertise",
                              description:
                                "Access specialized skills exactly when you need them, without the overhead of full-time hires.",
                              icon: Zap,
                            },
                            {
                              title: "Simple implementation process",
                              description:
                                "Clear, straightforward steps from onboarding to execution, with no unnecessary complexity.",
                              icon: Target,
                            },
                            {
                              title: "Systems you need at an affordable rate",
                              description:
                                "Flexible pricing that scales with your needs - enterprise-level solutions at startup-friendly prices.",
                              icon: User,
                            },
                          ]}
                        />
                      </div>

                      <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="text-center py-16 md:py-8"
                      >
                        {/* DESKTOP: "NEXT SECTION" PROMPT */}
                        {!isMobile && (
                          <div className="max-w-3xl mx-auto px-4">
                            <motion.p
                              className="text-gray-400 text-lg mb-6"
                              initial={{ opacity: 0, y: 10 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.4, duration: 0.5 }}
                              viewport={{ once: true }}
                            >
                              What sets us apart?
                            </motion.p>
                            <motion.p
                              className="text-[#25D366] text-2xl font-bold mb-3"
                              initial={{ opacity: 0, y: 10 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.7, duration: 0.5 }}
                              viewport={{ once: true }}
                            >
                              Thoughtful solutions. Seamless execution.
                            </motion.p>
                            <motion.p
                              className="text-white text-2xl font-bold"
                              initial={{ opacity: 0, y: 10 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ delay: 1.0, duration: 0.5 }}
                              viewport={{ once: true }}
                            >
                              Building systems that grow with your business.
                            </motion.p>
                            <div className="mt-12 flex flex-col items-center">
                              <motion.p
                                className="text-[#25D366] mb-2 font-medium"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.5 }}
                                viewport={{ once: true }}
                              >
                                See how we do it
                              </motion.p>
                              <motion.div
                                className="flex items-center justify-center cursor-pointer"
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0, transition: { delay: 1.5, duration: 0.7 } }}
                                viewport={{ once: true }}
                                whileHover={isMobile ? { x: 5 } : {}}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => scrollToSection(implementationRef, "implementation")}
                              >
                                <motion.div
                                  animate={!isMobile ? {
                                    x: [0, 8],
                                    transition: {
                                      delay: 2.2,
                                      duration: 1.0,
                                      repeat: Infinity,
                                      repeatType: "loop",
                                      ease: "easeInOut",
                                      repeatDelay: 0.2
                                    }
                                  } : { x: 0 }}
                                >
                                  <svg
                                    className="w-12 h-12 md:w-10 md:h-10"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M4 12H20M20 12L14 6M20 12L14 18"
                                      stroke="#25D366"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </motion.div>
                              </motion.div>
                              <motion.p
                                className="text-gray-400 text-sm mt-2"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.3, duration: 0.5 }}
                                viewport={{ once: true }}
                              >
                                Rapid Implementation
                              </motion.p>
                            </div>
                          </div>
                        )}
                        {/* MOBILE: NAVIGATION DOTS + "NEXT SECTION" PROMPT at bottom of Operations */}
                        {isMobile && (
                          <div className="mt-4 md:hidden">
                            <MobileSectionDots 
                              activeSection={activeSection} 
                              onDotClick={(sectionKey) => {
                                const targetContentRef = sectionKey === "strategic" ? strategicRef : sectionKey === "ops" ? opsRef : implementationRef;
                                scrollToSection(targetContentRef, sectionKey);
                              }}
                            />
                            <p className="text-center text-[#25D366] text-sm font-medium mt-2">
                              Next: Implementation
                            </p>
                          </div>
                        )}
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeSection === "implementation" && (
                <motion.div
                  ref={implementationRef}
                  key="implementation"
                  custom={direction}
                  variants={containerVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="w-full flex justify-center"
                >
                  <div className="w-[66.666%]">
                    {/* Header that slides in with the section */}
                    <motion.div className="text-center mb-12">
                      <div className="inline-block bg-[#25D366]/10 px-3 py-1 rounded-full mb-4">
                        <span className="text-[#25D366] text-sm font-medium">RAPID IMPLEMENTATION</span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Why Speed Matters</h3>
                      <div className="h-1 w-24 bg-[#25D366] mx-auto rounded-full mb-10"></div>
                    </motion.div>

                    {/* Content that animates on scroll */}
                    <div ref={implementationContentRef} className="pb-16">
                      {/* Why Speed Matters section - moved above the timeline */}
                      {/* Conditionally render testimonial for non-mobile only */}
                      {!isMobile && (
                        <motion.div
                          initial={{ opacity: 0, y: 50 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, amount: 0.2 }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                          className="text-center mb-16"
                        >
                          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                            In today's fast-paced business environment, the ability to quickly implement and iterate on
                            solutions is a competitive advantage.
                          </p>
                          <p className="text-[#25D366] text-xl font-bold mb-2">
                            "We achieved in 2 weeks what would have taken us 3 months internally."
                          </p>
                          <p className="text-white text-sm mb-12">— Nima S, Women's Faith Forum</p>
                        </motion.div>
                      )}
                      {/* If on mobile, show a shorter introductory text instead of the quote */}
                      {isMobile && (
                        <motion.div
                          initial={{ opacity: 0, y: 50 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, amount: 0.2 }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                          className="text-center mb-12" // Slightly less margin for mobile if quote is removed
                        >
                          <p className="text-gray-300 max-w-2xl mx-auto">
                            In today's fast-paced business environment, quickly implementing and iterating solutions is key. Our streamlined approach delivers results fast.
                          </p>
                        </motion.div>
                      )}

                      {/* What sets us apart section - Conditionally render for non-mobile */}
                      {!isMobile && (
                        <motion.div
                          initial={{ opacity: 0, y: 50 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, amount: 0.2 }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                          className="text-center mb-12"
                        >
                          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Our Approach</h3>
                          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            A proven process that delivers results twice as fast.
                          </p>
                        </motion.div>
                      )}

                      {/* New Timeline Implementation */}
                      <div className="relative py-2 mb-8" ref={timelineRef}>
                        {/* Vertical line */}
                        <motion.div
                          className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-[#25D366]/20"
                          style={{ scaleY: scaleX }}
                        />

                        <div className="py-4">
                          {implementationSteps.map((step, index) => (
                            <TimelineStep
                              key={index}
                              step={step}
                              index={index}
                              isExpanded={expandedStep === index}
                              onToggle={() => setExpandedStep(expandedStep === index ? null : index)}
                              isMobile={isMobile}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Implementation Button */}
                      <div className="text-center mb-16 mt-8">
                        <p className="text-[#25D366] text-3xl font-bold mb-12 tracking-tight">
                          Still hiring people? Let's automate that.
                        </p>
                        <motion.div 
                          whileHover={{ scale: 1.05 }} 
                          whileTap={{ scale: 0.95 }} 
                          className="inline-block"
                        >
                          <Button 
                            className="bg-[#25D366] hover:bg-[#128C7E] text-black font-bold text-lg px-8 py-3 rounded-lg flex items-center gap-2 shadow-lg shadow-[#25D366]/20"
                            onClick={() => {
                              console.log("[OPS_SCROLL_V2] Implementation button clicked");
                              const element = document.getElementById("booking-interface");
                              if (element) {
                                const offset = 80;
                                const elementPosition = element.offsetTop - offset;
                                customSmoothScrollTo(elementPosition, 3000); // Longer duration (3 seconds)
                              }
                            }}
                          >
                            Start Your Implementation
                            <ArrowRight className="w-5 h-5" />
                          </Button>
                        </motion.div>
                      </div>

                      {/* MOBILE: NAVIGATION DOTS at bottom of Implementation (no "Next" text) */}
                        {isMobile && (
                          <div className="mt-4 md:hidden">
                            <MobileSectionDots 
                              activeSection={activeSection} 
                              onDotClick={(sectionKey) => {
                                const targetContentRef = sectionKey === "strategic" ? strategicRef : sectionKey === "ops" ? opsRef : implementationRef;
                                scrollToSection(targetContentRef, sectionKey);
                              }}
                            />
                          </div>
                        )}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Spacer that adjusts based on content height */}
          <motion.div
            className="h-24 md:h-32 lg:h-40"
            initial={false}
            animate={{ 
              marginTop: "4rem"
            }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>
    </section>
  )
} 