"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ArrowRight, Check, FileText, BarChart } from 'lucide-react'
import { Button } from "@/components/ui/button"

interface ServiceDetail {
  description: string
  benefits: string[]
  howItWorks: string[]
  results: string[]
  integrations: {
    name: string
    description: string
    category: string
  }[]
  comparison: {
    traditional: string
    ourApproach: string
  }[]
  whatYoullGet: string[]
  serviceDetails: {
    overview: string
  }
}

interface ServiceDetailsPopupProps {
  isOpen: boolean
  onClose: () => void
  service: {
    icon: any
    title: string
    color: string
    details: ServiceDetail
  } | null
}

export default function ServiceDetailsPopup({ isOpen, onClose, service }: ServiceDetailsPopupProps) {
  const [activeTab, setActiveTab] = useState<"overview" | "benefits" | "comparison">("overview")

  if (!service) return null

  const { icon: Icon, title, color, details } = service

  // Get the category label based on the service title
  const getCategoryLabel = () => {
    switch (title) {
      case "Personalised Lead Generation":
        return "DATA-DRIVEN LEAD ACQUISITION"
      case "Workflow Management Systems":
        return "PROCESS AUTOMATION"
      case "Precision Marketing":
        return "MARKETING OPTIMISATION"
      case "Project Management Systems":
        return "CUSTOMER RETENTION SYSTEMS"
      case "Smart Hiring Systems":
        return "SMART HIRING & OPTIMISATION"
      case "Website Design & Optimisation":
        return "WEBSITE DESIGN"
      case "AI Strategy & Consultancy":
        return "AI INTEGRATION"
      default:
        return ""
    }
  }

  // Function to render description with hyperlinks
  const renderDescription = (description: string) => {
    if (title === "Website Design & Optimisation" && description.includes("Current portfolio:")) {
      const parts = description.split("Current portfolio:")
      return (
        <>
          {parts[0]}
          <div className="mt-2">
            <p className="font-medium">Current portfolio:</p>
            <a
              href="https://womensfaithforum.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              womensfaithforum.com
            </a>
          </div>
        </>
      )
    }
    return description
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 z-40 overflow-y-auto"
            onClick={onClose}
            style={{ overflowY: "auto", paddingTop: "5vh", paddingBottom: "5vh" }}
          >
            <div className="min-h-full flex items-center justify-center p-4">
              {/* Popup */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl z-50"
                style={{ position: "absolute" }}
                onClick={(e) => e.stopPropagation()} // Add this line to prevent click propagation
              >
                <div className="bg-white dark:bg-[#2a2a2a] rounded-xl overflow-hidden shadow-2xl border border-gray-200 dark:border-[#3a3a3a]">
                  {/* Header */}
                  <div className="p-6 flex items-center justify-between" style={{ backgroundColor: `${color}15` }}>
                    <div className="flex items-center gap-4">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: `${color}30` }}
                      >
                        <Icon className="w-6 h-6" style={{ color }} />
                      </div>
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1">
                          {getCategoryLabel()}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
                      </div>
                    </div>
                    <button
                      onClick={onClose}
                      className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-200 dark:bg-[#3a3a3a] hover:bg-gray-300 dark:hover:bg-[#4a4a4a] transition-colors"
                    >
                      <X className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                    </button>
                  </div>

                  {/* Tabs */}
                  <div className="flex border-b border-gray-200 dark:border-[#3a3a3a] overflow-x-auto">
                    {[
                      { id: "overview", label: "Overview", icon: FileText },
                      { id: "benefits", label: "What You'll Get", icon: Check },
                      { id: "comparison", label: "Comparison", icon: BarChart },
                    ].map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id as any)}
                        className={`px-4 py-3 text-sm font-medium relative flex items-center whitespace-nowrap ${
                          activeTab === tab.id
                            ? "text-gray-900 dark:text-white"
                            : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                        }`}
                      >
                        <tab.icon className="w-4 h-4 mr-2" color={color} />
                        {tab.label}
                        {activeTab === tab.id && (
                          <motion.div
                            layoutId="activeTab"
                            className="absolute bottom-0 left-0 right-0 h-0.5"
                            style={{ backgroundColor: color }}
                            transition={{ type: "spring", damping: 20, stiffness: 300 }}
                          />
                        )}
                      </button>
                    ))}
                  </div>

                  {/* Content */}
                  <div className="p-6 overflow-y-auto max-h-[60vh]">
                    <AnimatePresence mode="wait">
                      {activeTab === "overview" && (
                        <motion.div
                          key="overview"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                        >
                          <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                            {renderDescription(details.serviceDetails?.overview || details.description)}
                          </p>
                          <div className="flex justify-end">
                            <Button
                              onClick={() => setActiveTab("benefits")}
                              className="flex items-center gap-2"
                              style={{ backgroundColor: color }}
                            >
                              <span>See What You'll Get</span>
                              <ArrowRight className="w-4 h-4" />
                            </Button>
                          </div>
                        </motion.div>
                      )}

                      {activeTab === "benefits" && (
                        <motion.div
                          key="benefits"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="mb-4">
                            <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                              What You'll Get
                            </h4>
                            <ul className="space-y-3 mb-6">
                              {details.whatYoullGet.map((benefit, index) => (
                                <motion.li
                                  key={index}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: index * 0.1 }}
                                  className="flex items-start gap-3"
                                >
                                  <Check className="w-5 h-5 mt-0.5 flex-shrink-0" color={color} />
                                  <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                          <div className="flex justify-end">
                            <Button
                              onClick={() => setActiveTab("comparison")}
                              className="flex items-center gap-2"
                              style={{ backgroundColor: color }}
                            >
                              <span>See Comparison</span>
                              <ArrowRight className="w-4 h-4" />
                            </Button>
                          </div>
                        </motion.div>
                      )}

                      {activeTab === "comparison" && (
                        <motion.div
                          key="comparison"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="mb-4">
                            <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                              Our Approach vs. Traditional Methods
                            </h4>
                            <p className="text-gray-600 dark:text-gray-400 mb-4">
                              See how our innovative approach compares to traditional methods in the industry.
                            </p>

                            <div className="space-y-4 mb-6">
                              {details.comparison.map((item, index) => (
                                <motion.div
                                  key={index}
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: index * 0.1 }}
                                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                                >
                                  <div className="bg-gray-100 dark:bg-[#333333] p-4 rounded-lg">
                                    <h5 className="font-medium text-gray-700 dark:text-gray-300 mb-2 text-sm">
                                      Traditional Approach
                                    </h5>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">{item.traditional}</p>
                                  </div>
                                  <div className="p-4 rounded-lg" style={{ backgroundColor: `${color}15` }}>
                                    <h5 className="font-medium mb-2 text-sm" style={{ color }}>
                                      Our Approach
                                    </h5>
                                    <p className="text-sm text-gray-700 dark:text-gray-300">{item.ourApproach}</p>
                                  </div>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                          <div className="flex justify-center">
                            <Button className="px-6" style={{ backgroundColor: color }}>
                              <span>Get Started Today</span>
                            </Button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
} 