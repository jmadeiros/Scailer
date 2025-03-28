"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ArrowRight, Check, FileText, BarChart } from 'lucide-react'
import { Button } from "@/components/ui/button"

interface ServiceDetail {
  overview?: string
  whatYoullGet?: string[]
  comparison?: Array<{
    traditional: string
    ourApproach: string
  }>
  serviceDetails?: {
    overview?: string
  }
  description?: string
  benefits?: string[]
  howItWorks?: string[]
  results?: string[]
  integrations?: {
    name: string
    description: string
    category: string
  }[]
}

interface ServiceDetailsPopupProps {
  isOpen: boolean
  onClose: () => void
  service: {
    icon: any
    title: string
    color: string
    details: ServiceDetail
  }
}

export default function ServiceDetailsPopup({
  isOpen,
  onClose,
  service
}: ServiceDetailsPopupProps) {
  const [activeTab, setActiveTab] = useState<"overview" | "benefits" | "comparison">("overview")

  if (!service) return null;

  const { icon: Icon, title, color, details } = service;

  // Get the service styles and category label based on the title
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
        return title.toUpperCase()
    }
  }

  // Function to get button background and text colors
  const getButtonColors = () => {
    if (title === "AI Strategy & Consultancy") {
      return {
        bg: "#0EA5E9",
        text: "#FFFFFF"
      }
    }
    
    return {
      bg: color,
      text: "#FFFFFF"
    }
  }

  const buttonColors = getButtonColors();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Fixed backdrop - high z-index to ensure it stays on top */}
          <div 
            className="fixed inset-0 bg-black/60 z-[999]" 
            onClick={onClose} 
          />
          
          {/* Popup content */}
          <div className="fixed inset-0 flex items-center justify-center z-[1000]" onClick={(e) => e.stopPropagation()}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-2xl mx-4 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-[#1a1a1a] rounded-xl overflow-hidden shadow-2xl">
                {/* Header */}
                <div className="p-6 flex items-center justify-between" style={{ backgroundColor: title === "AI Strategy & Consultancy" ? "#0c1c2b" : `${color}10` }}>
                  <div className="flex items-center gap-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: title === "AI Strategy & Consultancy" ? "#0f2942" : `${color}20` }}
                    >
                      {Icon && <Icon className="w-6 h-6" style={{ color }} />}
                    </div>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">
                        {getCategoryLabel()}
                      </div>
                      <h3 className="text-xl font-bold text-white">{title}</h3>
                    </div>
                  </div>
                  <button
                    onClick={onClose}
                    className="w-8 h-8 rounded-full flex items-center justify-center bg-[#2a2a2a] hover:bg-[#3a3a3a] transition-colors"
                  >
                    <X className="w-4 h-4 text-gray-400" />
                  </button>
                </div>

                {/* Tabs */}
                <div className="flex border-b border-[#2a2a2a] overflow-x-auto">
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
                          ? "text-white"
                          : "text-gray-400 hover:text-gray-300"
                      }`}
                    >
                      <tab.icon className="w-4 h-4 mr-2" color={color} />
                      {tab.label}
                      {activeTab === tab.id && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute bottom-0 left-0 right-0 h-0.5"
                          style={{ backgroundColor: color } as any}
                          transition={{ type: "spring", damping: 20, stiffness: 300 }}
                        />
                      )}
                    </button>
                  ))}
                </div>

                {/* Content */}
                <div className="p-6 overflow-y-auto max-h-[60vh] text-left custom-scrollbar">
                  <style jsx>{`
                    .custom-scrollbar::-webkit-scrollbar {
                      width: 8px;
                    }
                    .custom-scrollbar::-webkit-scrollbar-track {
                      background: transparent;
                    }
                    .custom-scrollbar::-webkit-scrollbar-thumb {
                      background-color: rgba(75, 75, 75, 0.5);
                      border-radius: 4px;
                    }
                    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                      background-color: rgba(100, 100, 100, 0.6);
                    }
                  `}</style>
                  <AnimatePresence mode="wait">
                    {activeTab === "overview" && (
                      <motion.div
                        key="overview"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        <p className="text-gray-300 mb-6 leading-relaxed">
                          {details?.serviceDetails?.overview || details?.description || ""}
                        </p>
                        <div className="flex justify-end">
                          <Button
                            onClick={() => setActiveTab("benefits")}
                            className="flex items-center gap-2 text-white px-4 py-2 rounded-md"
                            style={{ 
                              backgroundColor: buttonColors.bg,
                              color: buttonColors.text 
                            } as any}
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
                          <h4 className="text-lg font-semibold mb-3 text-white">
                            What You'll Get
                          </h4>
                          <ul className="space-y-3 mb-6">
                            {(details?.whatYoullGet || details?.benefits || []).map((benefit: string, index: number) => (
                              <motion.li
                                key={index}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-start gap-3"
                              >
                                <Check className="w-5 h-5 mt-0.5 flex-shrink-0" color={color} />
                                <span className="text-gray-300 text-[15px] leading-relaxed">{benefit}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                        <div className="flex justify-end mt-8">
                          <Button
                            onClick={() => setActiveTab("comparison")}
                            className="flex items-center gap-2 text-white px-4 py-2 rounded-md"
                            style={{ 
                              backgroundColor: buttonColors.bg,
                              color: buttonColors.text 
                            } as any}
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
                          <h4 className="text-lg font-semibold mb-3 text-white">
                            Our Approach vs. Traditional Methods
                          </h4>
                          <p className="text-gray-400 mb-4">
                            See how our innovative approach compares to traditional methods in the industry.
                          </p>

                          <div className="space-y-4 mb-6">
                            {(details?.comparison || []).map((item: { traditional: string; ourApproach: string }, index: number) => (
                              <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="grid grid-cols-1 md:grid-cols-2 gap-4"
                              >
                                <div className="bg-[#2a2a2a] p-4 rounded-lg">
                                  <h5 className="font-medium text-gray-300 mb-2 text-sm">
                                    Traditional Approach
                                  </h5>
                                  <p className="text-sm text-gray-400">{item.traditional}</p>
                                </div>
                                <div className="p-4 rounded-lg" style={{ 
                                  backgroundColor: title === "AI Strategy & Consultancy" ? "#0c1c2b" : `${color}15`
                                }}>
                                  <h5 className="font-medium mb-2 text-sm" style={{ color }}>
                                    Our Approach
                                  </h5>
                                  <p className="text-sm text-gray-300">{item.ourApproach}</p>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                        <div className="flex justify-center">
                          <Button 
                            className="px-6 text-white py-2 rounded-md" 
                            style={{ 
                              backgroundColor: buttonColors.bg,
                              color: buttonColors.text 
                            } as any}
                          >
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
        </>
      )}
    </AnimatePresence>
  )
} 