"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Loader2, User, AlertCircle, ArrowRight, TrendingUp, Users, Target, Zap, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import HAL900MessageAnimation from "./HAL900-MessageAnimation";

interface AnimatedWordProps {
  word: string;
  delay: number;
  isAlliteration: boolean;
  section: number;
  startAnimation: boolean;
  isBold: boolean;
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
  );
};

const AnimatedText = ({ startAnimation }: { startAnimation: boolean }) => {
  const [showButton, setShowButton] = useState(false);

  const sections = [
    [
      { word: "We", delay: 0, isAlliteration: false, isBold: false },
      { word: "automate,", delay: 0.25, isAlliteration: true, isBold: true },
      { word: "optimize,", delay: 0.45, isAlliteration: true, isBold: true },
      { word: "and", delay: 0.65, isAlliteration: false, isBold: false },
      { word: "accelerate", delay: 0.8, isAlliteration: true, isBold: true },
    ],
    [
      { word: "how", delay: 1.4, isAlliteration: false, isBold: false },
      { word: "you", delay: 1.4, isAlliteration: false, isBold: false },
      { word: "attract,", delay: 1.85, isAlliteration: true, isBold: true },
      { word: "convert,", delay: 2.05, isAlliteration: true, isBold: true },
      { word: "and", delay: 2.25, isAlliteration: false, isBold: false },
      { word: "retain", delay: 2.4, isAlliteration: true, isBold: true },
    ],
    [
      { word: "—", delay: 3.0, isAlliteration: false, isBold: false },
      { word: "scaling", delay: 3.0, isAlliteration: false, isBold: false },
      { word: "smarter,", delay: 3.45, isAlliteration: true, isBold: true },
      { word: "faster,", delay: 3.65, isAlliteration: true, isBold: true },
      { word: "and", delay: 3.85, isAlliteration: false, isBold: false },
      { word: "stronger.", delay: 4.0, isAlliteration: true, isBold: true },
    ],
  ];

  useEffect(() => {
    if (startAnimation) {
      const timer = setTimeout(() => {
        setShowButton(true);
      }, 5500);

      return () => clearTimeout(timer);
    }
  }, [startAnimation]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: startAnimation ? 1 : 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="max-w-6xl mx-auto px-4 text-center mt-8 md:mt-12"
    >
      <div className="min-h-[120px] md:min-h-[180px] flex flex-col items-center justify-center max-w-[1200px] mx-auto">
        <p className="text-lg sm:text-2xl md:text-[26px] text-white leading-[1.7] tracking-[-0.01em] font-normal mb-6 md:mb-10">
          {sections.map((section, sectionIndex) => (
            <span key={sectionIndex}>
              {section.map((word, wordIndex) => (
                <>
                  <AnimatedWord
                    key={`${sectionIndex}-${wordIndex}`}
                    word={word.word}
                    delay={word.delay}
                    isAlliteration={word.isAlliteration}
                    section={sectionIndex}
                    startAnimation={startAnimation}
                    isBold={word.isBold}
                  />{" "}
                </>
              ))}
            </span>
          ))}
        </p>
      </div>
    </motion.div>
  );
};

const messages = [
  {
    icon: <TrendingUp className="w-5 h-5" />,
    text: "Optimize your conversion funnel for a 25% increase in lead generation.",
    metrics: ["25% Increase", "Lead Gen"],
  },
  {
    icon: <Users className="w-5 h-5" />,
    text: "Implement personalized customer journeys to boost retention by 40%.",
    metrics: ["40% Retention", "Personalization"],
  },
  {
    icon: <Target className="w-5 h-5" />,
    text: "Leverage AI-driven targeting to improve ad spend efficiency by 30%.",
    metrics: ["30% Efficiency", "AI Targeting"],
  },
  {
    icon: <Zap className="w-5 h-5" />,
    text: "Automate key processes to increase team productivity by 50%.",
    metrics: ["50% Productivity", "Automation"],
  },
  {
    icon: <Globe className="w-5 h-5" />,
    text: "Expand into new markets to drive a 60% growth in customer base.",
    metrics: ["60% Growth", "Market Expansion"],
  },
];

function MessageFeed({ animationTriggered }: { animationTriggered: boolean }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % messages.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      className="bg-scailer-light rounded-lg mt-4 overflow-hidden"
      animate={animationTriggered ? { height: 0, opacity: 0 } : { height: "auto", opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{
            duration: 0.5,
            ease: [0.32, 0.72, 0, 1],
          }}
          className="p-3"
        >
          <motion.div
            className="flex gap-3"
            animate={
              animationTriggered
                ? {
                    x: "100%",
                    rotate: 10,
                    scale: 0.8,
                  }
                : {}
            }
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <motion.div className="w-8 h-8 rounded-lg bg-scailer-green/20 flex items-center justify-center">
              {messages[currentIndex].icon}
            </motion.div>
            <motion.div className="flex-1">
              <p className="text-white text-xs mb-2 leading-relaxed">{messages[currentIndex].text}</p>
              <div className="flex gap-2">
                {messages[currentIndex].metrics.map((metric) => (
                  <span
                    key={metric}
                    className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] bg-scailer-green/20 text-scailer-green font-medium"
                  >
                    {metric}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}

const HAL900ScaleWithPrecision = () => {
  const [startAnimation, setStartAnimation] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [validation, setValidation] = useState({
    name: { isValid: false, message: "" },
    email: { isValid: false, message: "" },
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartAnimation(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const validateName = (name: string) => {
    if (name.length < 2) {
      return { isValid: false, message: "Name must be at least 2 characters" };
    }
    if (name.length > 50) {
      return { isValid: false, message: "Name must be less than 50 characters" };
    }
    return { isValid: true, message: "Looks good!" };
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      return { isValid: false, message: "Email is required" };
    }
    if (!emailRegex.test(email)) {
      return { isValid: false, message: "Please enter a valid email" };
    }
    return { isValid: true, message: "Valid email!" };
  };

  const handleInputChange = (field: "name" | "email", value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    const validationResult = field === "name" ? validateName(value) : validateEmail(value);
    setValidation((prev) => ({
      ...prev,
      [field]: validationResult,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validation.name.isValid && validation.email.isValid) {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setLoading(false);
      // Reset form
      setFormData({ name: "", email: "" });
      setValidation({
        name: { isValid: false, message: "" },
        email: { isValid: false, message: "" },
      });
    }
  };

  const isFormValid = validation.name.isValid && validation.email.isValid;

  return (
    <section className="py-12 md:py-20 bg-scailer-darker">
      <div className="container mx-auto px-4">
        <AnimatedText startAnimation={startAnimation} />
        
        <div className="mt-8 md:mt-16 grid grid-cols-2 gap-3 md:gap-12 items-start">
          <div className="w-full col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="bg-scailer-dark rounded-xl p-3 md:p-6 border border-scailer-light/20"
            >
              <div className="flex items-center gap-2 md:gap-3 mb-2">
                <div className="w-6 md:w-8 h-6 md:h-8 rounded-full bg-scailer-green/10 flex items-center justify-center">
                  <User className="w-3 md:w-4 h-3 md:h-4 text-scailer-green" />
                </div>
                <div>
                  <h2 className="text-white text-xs md:text-base font-medium">Get Your Free Growth Roadmap</h2>
                  <p className="text-[10px] md:text-sm text-gray-400">Tailored strategies for rapid, sustainable growth</p>
                </div>
              </div>

              <div className="mt-3 md:mt-6 mb-2 md:mb-4">
                <div className="h-1 md:h-1.5 w-full bg-scailer-light rounded-full overflow-hidden">
                  <div
                    className="h-full bg-scailer-green rounded-full transition-all duration-300"
                    style={{
                      width: `${(Object.values(validation).filter((v) => v.isValid).length / 2) * 100}%`,
                    }}
                  />
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-2 md:space-y-4">
                <div className="space-y-2 md:space-y-4">
                  <div className="relative">
                    <Input
                      type="text"
                      placeholder="Enter your name"
                      className={cn(
                        "w-full pl-2 md:pl-3 pr-7 md:pr-9 py-1.5 md:py-2 bg-scailer-light border-0 text-white placeholder:text-gray-500 text-xs md:text-base",
                        "focus:ring-1 focus:ring-scailer-green/50",
                        "rounded-lg transition-all duration-200"
                      )}
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                    />
                    {formData.name && (
                      <div className="absolute right-2 md:right-3 top-1/2 -translate-y-1/2">
                        {validation.name.isValid ? (
                          <Check className="h-3 w-3 md:h-4 md:w-4 text-scailer-green" />
                        ) : (
                          <AlertCircle className="h-3 w-3 md:h-4 md:w-4 text-red-400" />
                        )}
                      </div>
                    )}
                  </div>

                  <div className="relative">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      className={cn(
                        "w-full pl-2 md:pl-3 pr-7 md:pr-9 py-1.5 md:py-2 bg-scailer-light border-0 text-white placeholder:text-gray-500 text-xs md:text-base",
                        "focus:ring-1 focus:ring-scailer-green/50",
                        "rounded-lg transition-all duration-200"
                      )}
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                    />
                    {formData.email && (
                      <div className="absolute right-2 md:right-3 top-1/2 -translate-y-1/2">
                        {validation.email.isValid ? (
                          <Check className="h-3 w-3 md:h-4 md:w-4 text-scailer-green" />
                        ) : (
                          <AlertCircle className="h-3 w-3 md:h-4 md:w-4 text-red-400" />
                        )}
                      </div>
                    )}
                  </div>
                </div>

                <div className="pt-1 md:pt-2">
                  <Button
                    type="submit"
                    disabled={!isFormValid || loading}
                    className={cn(
                      "w-full py-1.5 md:py-2 text-white text-xs md:text-base font-medium bg-scailer-green",
                      "hover:bg-[#128C7E] disabled:bg-scailer-light disabled:text-gray-500",
                      "disabled:cursor-not-allowed transition-all duration-200 rounded-lg"
                    )}
                  >
                    {loading ? (
                      <>
                        <Loader2 className="mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4 animate-spin" />
                        <span className="text-[10px] md:text-base">Creating your roadmap...</span>
                      </>
                    ) : (
                      <div className="flex items-center justify-center gap-1 md:gap-2">
                        <span className="text-[10px] md:text-base">Get Your Free Growth Roadmap</span>
                        <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
                      </div>
                    )}
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>

          <div className="w-full col-span-1">
            <HAL900MessageAnimation />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HAL900ScaleWithPrecision; 