"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import ServiceDetailsPopup from "@/components/ServiceDetailsPopup"
import { BarChart, Settings, Zap, Users, User, Globe, MessageCircle, CircuitBoard } from 'lucide-react'

// Define SVG props interface
interface SVGProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
  className?: string;
}

// Simple SVG icons instead of Lucide icons
const IconBarChart = (props: SVGProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <line x1="12" y1="20" x2="12" y2="10"></line>
    <line x1="18" y1="20" x2="18" y2="4"></line>
    <line x1="6" y1="20" x2="6" y2="16"></line>
  </svg>
);

const IconSettings = (props: SVGProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="3"></circle>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
  </svg>
);

const IconZap = (props: SVGProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
  </svg>
);

const IconUsers = (props: SVGProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);

const IconUser = (props: SVGProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

const IconGlobe = (props: SVGProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
  </svg>
);

const IconArrowRight = (props: SVGProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

const IconArrowLeft = (props: SVGProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <line x1="19" y1="12" x2="5" y2="12"></line>
    <polyline points="12 5 5 12 12 19"></polyline>
  </svg>
);

const iconColors = ["#9CA3AF", "#0EA5E9", "#22C55E", "#EF4444", "#EC4899", "#F59E0B", "#8B5CF6", "#ffffff"]
const timelineColor = "#8B5CF6"

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
      transform: translateX(25%);
    }
    .mobile-icon-adjust:nth-child(3) {
      transform: translateX(15%);
    }
    .mobile-icon-adjust:nth-child(4) {
      transform: translateX(-5%);
    }
    .mobile-icon-adjust:nth-child(5) {
      transform: translateX(-15%);
    }
    .hiring-label {
      font-size: 0;
    }
    .hiring-label:before {
      content: "HIRING SYSTEMS";
      font-size: 8px;
    }
  }
`

// Add all keyframes to document
if (typeof document !== "undefined") {
  const style = document.createElement("style")
  style.textContent = purpleDotKeyframes + mobileStyles
  document.head.appendChild(style)
}

const ColoredIcon = ({ icon: Icon, color }: { icon: any; color: string }) => {
  return <Icon className="w-4 h-4 md:w-10 md:h-10" color={color} />
}

const FeatureBox = ({
  icon: Icon,
  title,
  description,
  whatYoullGet,
  comparison,
  label,
  isActive,
  color,
  isLeft,
  isModalOpen,
  setActiveModal,
  featureIndex,
  portfolio,
  serviceDetails,
}: {
  icon: any
  title: string
  description: string
  whatYoullGet: string[]
  comparison: Array<{ traditional: string; ourApproach: string }>
  label: string
  isActive: boolean
  color: string
  isLeft: boolean
  isModalOpen: boolean
  setActiveModal: React.Dispatch<React.SetStateAction<number | null>>
  featureIndex: number
  portfolio?: string[]
  serviceDetails?: { overview: string }
}) => {
  const ref = useRef(null)
  const [isHovered, setIsHovered] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)

  // Add a click handler that stops propagation
  const handleLearnMoreClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveModal(featureIndex);
  };

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
      <motion.div className="relative overflow-visible" transition={{ duration: 0.3 }}>
        {/* Feature Title and Icon section */}
        <motion.div
          className={`flex items-center gap-2 md:gap-3 mb-2 md:mb-3 ${isLeft ? "justify-end" : ""}`}
          initial={{ y: 0 }}
          animate={{ y: isHovered ? -2 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Icon left side rendering */}
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
            <span className="text-[8px] md:text-xs font-medium text-gray-400 uppercase tracking-wider whitespace-nowrap">
              {label === "SMART HIRING & OPTIMISATION" ? (
                <>
                  <span className="md:hidden">HIRING SYSTEMS</span>
                  <span className="hidden md:inline">SMART HIRING & OPTIMISATION</span>
                </>
              ) : label}
            </span>
          </div>
          {/* Icon right side rendering */}
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
          className="text-sm md:text-lg font-semibold text-white mb-1 md:mb-2"
          initial={{ y: 0 }}
          animate={{ y: isHovered ? -1 : 0 }}
          transition={{ duration: 0.2, delay: 0.1 }}
        >
          {title}
        </motion.h3>

        <motion.p
          className="text-xs md:text-base text-gray-400 leading-relaxed"
          initial={{ y: 0 }}
          animate={{ y: isHovered ? -1 : 0 }}
          transition={{ duration: 0.2, delay: 0.15 }}
        >
          {description}
        </motion.p>

        <motion.div
          initial={{ x: 0 }}
          animate={{ x: isHovered ? (isLeft ? -3 : 3) : 0 }}
          transition={{ duration: 0.2 }}
          className="relative"
        >
          <button
            ref={buttonRef}
            onClick={handleLearnMoreClick}
            className={`inline-flex items-center text-xs md:text-sm font-medium transition-colors relative group ${
              isLeft ? "flex-row-reverse" : ""
            }`}
            style={{ color: isHovered ? color : "#6B7280" }}
          >
            Learn more
            <motion.div animate={isHovered ? { x: isLeft ? -5 : 5 } : { x: 0 }} transition={{ duration: 0.2 }}>
              {isLeft ? 
                <IconArrowLeft className={`h-3 w-3 md:h-4 md:h-4 ${isLeft ? "mr-1 md:mr-2" : "ml-1 md:ml-2"}`} /> : 
                <IconArrowRight className={`h-3 w-3 md:h-4 md:h-4 ${isLeft ? "mr-1 md:mr-2" : "ml-1 md:ml-2"}`} />
              }
            </motion.div>
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-0.5 origin-left"
              style={{ backgroundColor: color }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            />
          </button>
        </motion.div>
      </motion.div>
      <div className="h-8 md:h-12" />
      {isModalOpen && (
        <ServiceDetailsPopup
          isOpen={isModalOpen}
          onClose={() => setActiveModal(null)}
          service={{
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
          }}
        />
      )}
    </motion.div>
  )
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

const HAL900FrameworkDiagram = () => {
  const containerRef = useRef(null)
  const timelineRef = useRef(null)
  const [activeFeature, setActiveFeature] = useState(0)
  const [activeModal, setActiveModal] = useState<number | null>(null)
  const featureRefs = useRef<(HTMLDivElement | null)[]>([])
  const [isMounted, setIsMounted] = useState(false)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  const lineOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.1, 0.15, 0.15, 0.1])

  const features = [
    {
      icon: BarChart,
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
        overview: "Our data-driven lead acquisition system uses advanced algorithms to identify and target high-value prospects with precision. We combine data scraping, predictive analytics, and machine learning to generate qualified leads that are most likely to convert, saving you time and resources while maximizing your sales potential."
      }
    },
    {
      icon: Settings,
      label: "PROCESS AUTOMATION",
      title: "Workflow Management Systems",
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
        overview: "Our intelligent workflow automation platform streamlines your business processes, eliminates repetitive tasks, and enhances customer interactions. We build custom solutions that integrate with your existing systems to boost efficiency across your organization, allowing your team to focus on high-value activities rather than manual processes."
      }
    },
    {
      icon: Zap,
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
        overview: "Our precision marketing approach leverages data-driven insights to create highly targeted campaigns that deliver measurable results. We combine advanced targeting, compelling content creation, and predictive analytics to maximize your marketing ROI, ensuring that your message reaches the right audience at the right time with the right message."
      }
    },
    {
      icon: Users,
      label: "PROJECT MANAGEMENT",
      title: "Project Management Systems",
      description: "Keep customers engaged with personalized experiences and automated re-engagement strategies.",
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
        overview: "We implement smart project management systems that streamline your workflows and keep your team organized. Our solutions integrate with your existing tools, automate repetitive tasks, and provide clear visibility into project progress. By centralizing task management and automating follow-ups, we help you deliver projects on time and keep everything moving forward efficiently."
      }
    },
    {
      icon: User,
      label: "HIRING SYSTEMS",
      title: "Smart Hiring Systems",
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
      icon: Globe,
      label: "WEBSITE DESIGN",
      title: "Website Design & Optimisation",
      description: "Create high-performance, SEO-friendly sites optimized for conversions and user experience.",
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
      portfolio: ["womensfaithforum.com"],
      serviceDetails: {
        overview: "We create high-performance, SEO-friendly websites that are optimized for conversions. Our designs combine visual appeal with strategic functionality to ensure your website becomes your most effective digital asset. Current portfolio: womensfaithforum.com"
      }
    },
    {
      icon: MessageCircle,
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
      icon: CircuitBoard,
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
  ]

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      const featureIndex = Math.min(Math.floor(latest * features.length), features.length - 1)
      setActiveFeature(featureIndex)
    })

    return () => unsubscribe()
  }, [scrollYProgress, features.length])

  useEffect(() => {
    setIsMounted(true)
  }, [])

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
      const offset = 100
      const elementPosition = featureElement.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  useEffect(() => {
    // Debug logging for container and SVG dimensions
    const container = document.querySelector('.max-w-sm');
    const svg = container?.querySelector('svg');
    const iconContainer = container?.querySelector('.flex.justify-between');
    
    if (container && svg && iconContainer) {
      console.log('Container width:', container.clientWidth);
      console.log('SVG width:', svg.clientWidth);
      console.log('SVG viewBox:', svg.getAttribute('viewBox'));
      console.log('Icon container width:', iconContainer.clientWidth);
      console.log('Icon container offset:', iconContainer.getBoundingClientRect().x);
      console.log('Visible viewport width:', window.innerWidth);
    }
  }, []);

  return (
    <section className="py-24 md:py-32 bg-[#2a2a2a] relative">
      <div className="container mx-auto px-4">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-24"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 md:mb-12">
            <span className="block">Infrastructure That Scales</span>
            <span className="block">Your Business Automatically</span>
          </h2>
          <div className="flex flex-col items-center space-y-1 mt-4 md:mt-8">
            <p className="text-base md:text-xl text-gray-300 px-4 md:px-0 max-w-3xl mx-auto leading-relaxed">
              Leverage our precision-engineered, intelligent automation frameworks to deliver your business at scale, without added infrastructure overhead.
            </p>
          </div>
        </motion.div>

        {/* Main diagram with icons and lines */}
        <div className="relative w-full aspect-[16/9] max-w-sm mx-auto z-10 md:max-w-5xl">
          <svg
            viewBox="0 0 1200 675"
            className="w-full h-full"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              {paths.map((d, i) => (
                <path key={i} id={`path-${i}`} d={d} />
              ))}
            </defs>

            {/* Curved paths with smooth convergence */}
            {paths.map((d, i) => (
              <use key={i} href={`#path-${i}`} stroke={iconColors[i]} strokeWidth="3" />
            ))}

            {/* Connection circles at the bottom of each icon */}
            {[100, 300, 500, 700, 900, 1100].map((cx, i) => (
              <circle key={i} cx={cx} cy="10" r="3" fill={iconColors[i]} />
            ))}

            {/* Streaming dots for each path */}
            {paths.map((_, i) =>
              [...Array(3)].map((_, dotIndex) => (
                <circle key={`${i}-${dotIndex}`} r="4" fill={iconColors[i]}>
                  <animateMotion dur="3s" repeatCount="indefinite" begin={`${dotIndex * 1}s`}>
                    <mpath href={`#path-${i}`} />
                  </animateMotion>
                </circle>
              ))
            )}

            {/* Our Services button */}
            <g transform="translate(500, 485)" style={{ cursor: "pointer" }} onClick={scrollToTimeline}>
              <rect
                x="0"
                y="0"
                width="200"
                height="56"
                rx="28"
                fill="#1a1a1a"
                className="hover:fill-scailer-light transition-colors"
              />
              <text
                x="100"
                y="36"
                textAnchor="middle"
                fill="white"
                fontSize="20"
                fontFamily="system-ui"
                className="font-medium pointer-events-none"
              >
                Our Services
              </text>
            </g>
          </svg>

          {/* Icons at the same level with connection points */}
          <div className="absolute top-[10px] transform -translate-y-1/2 inset-x-0">
            <div className="flex justify-between items-center px-4 md:px-12">
              {[IconBarChart, IconSettings, IconZap, IconUsers, IconUser, IconGlobe].map((Icon, index) => (
                <div
                  key={index}
                  className={cn(
                    "relative",
                    index === 1 || index === 2 || index === 3 || index === 4 ? "mobile-icon-adjust" : ""
                  )}
                  onClick={() => {
                    setActiveFeature(index);
                    // Scroll to the feature element
                    const featureEl = featureRefs.current[index];
                    if (featureEl) {
                      // Scroll with smooth behavior
                      featureEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
                      // Open the popup after scrolling
                      setTimeout(() => {
                        setActiveModal(index);
                      }, 800); // Wait a bit for the scroll to complete
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  aria-label={`View ${features[index]?.label}`}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setActiveFeature(index);
                      // Scroll to the feature element
                      const featureEl = featureRefs.current[index];
                      if (featureEl) {
                        // Scroll with smooth behavior
                        featureEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        // Open the popup after scrolling
                        setTimeout(() => {
                          setActiveModal(index);
                        }, 800); // Wait a bit for the scroll to complete
                      }
                    }
                  }}
                >
                  <div className="w-10 h-10 md:w-20 md:h-20 rounded-full bg-[#1a1a1a] hover:bg-[#252525] shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110">
                    <Icon className="w-6 h-6 md:w-10 md:h-10" color={iconColors[index]} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline section with continuous line - adjusted positioning */}
        <div className="relative max-w-5xl mx-auto" style={{ minHeight: "1200px" }}>
          {/* Animated line - adjusted positioning */}
          <div className="relative pt-8" ref={timelineRef}>
            <motion.div
              className="absolute left-1/2 w-[1px] h-[1250px] -top-[150px] origin-top"
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
                      backgroundColor: timelineColor,
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
                    color={iconColors[index]}
                    isModalOpen={activeModal === index}
                    setActiveModal={setActiveModal}
                    featureIndex={index}
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