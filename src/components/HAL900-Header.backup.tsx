"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useState, useCallback } from "react";
import { Menu, X, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

// Custom SVG icons
const MessageSquareIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
  </svg>
);

const CopyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
  </svg>
);

const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
);

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
  </svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const smoothScroll = (targetPosition: number, duration: number = 1500) => {
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime: number | null = null;

  const animation = (currentTime: number) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);

    // Easing function for smoother acceleration and deceleration
    const ease = (t: number) => {
      return t < 0.5
        ? 4 * t * t * t
        : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    };

    window.scrollTo(0, startPosition + distance * ease(progress));

    if (progress < 1) {
      requestAnimationFrame(animation);
    }
  };

  requestAnimationFrame(animation);
};

interface HAL900HeaderProps {
  onTryForFree: () => void;
}

const HAL900Header = ({ onTryForFree }: HAL900HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasCopied, setHasCopied] = useState(false);

  const scrollToElement = useCallback((elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop;
      smoothScroll(elementPosition - offset);
    }
  }, []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('all@scailer.io');
      setHasCopied(true);
      setTimeout(() => setHasCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const handleTryForFree = () => {
    // Use the same smooth scrolling for Try For Free button
    scrollToElement("scale-with-precision");
    // Close mobile menu if open
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  const handleScheduleCall = () => {
    // Navigate to booking section
    scrollToElement("booking-interface");
    // Close dropdown or mobile menu if open
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="bg-scailer-dark/80 backdrop-blur-lg border-b border-scailer-light/20"
    >
      <div className="container mx-auto px-4 h-16 md:h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center text-xl md:text-2xl font-bold group perspective-[800px] transform-gpu">
          <motion.div 
            className="flex transition-all duration-500 transform-gpu"
            initial={{ rotateY: 0 }}
            whileHover={{ 
              rotateY: [0, 0, 360], 
              transition: { 
                duration: 1.2, 
                delay: 0.2,
                times: [0, 0.5, 1],
                ease: "easeInOut" 
              } 
            }}
          >
            <span className="opacity-90 group-hover:opacity-100 group-hover:text-scailer-green transition duration-500">sc</span>
            <span className="relative mx-0.5">
              <span className="text-scailer-green group-hover:text-white transition-colors duration-500 relative z-10 drop-shadow-[0_0_3px_rgba(37,211,102,0.3)]">ai</span>
              <span className="absolute inset-0 bg-scailer-green rounded-md opacity-0 group-hover:opacity-100 blur-md -z-10 scale-0 group-hover:scale-150 transition-all duration-500"></span>
            </span>
            <span className="opacity-90 group-hover:opacity-100 group-hover:text-scailer-green transition duration-500">ler</span>
          </motion.div>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToElement("framework-diagram")}
            className="text-white/80 hover:text-white transition-colors cursor-pointer relative group"
          >
            Solutions
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-scailer-green group-hover:w-full transition-all duration-300"></span>
          </button>

          <button 
            onClick={() => scrollToElement("operations-service")}
            className="text-white/80 hover:text-white transition-colors cursor-pointer relative group"
          >
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-scailer-green group-hover:w-full transition-all duration-300"></span>
          </button>
          
          <Link href="/blog" className="text-white/80 hover:text-white transition-colors relative group">
            Blog
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-scailer-green group-hover:w-full transition-all duration-300"></span>
          </Link>
          
          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <button className="text-white/80 hover:text-white transition-colors outline-none relative group">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-scailer-green group-hover:w-full transition-all duration-300"></span>
              </button>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
              <DropdownMenu.Content
                className="min-w-[280px] bg-[#2a2a2a]/95 backdrop-blur-lg rounded-lg py-3 px-2 shadow-xl animate-in slide-in-from-top-5 duration-200"
                sideOffset={8}
                align="end"
              >
                <div className="px-3 py-2 mb-2">
                  <h3 className="text-gray-400 text-xs font-medium uppercase tracking-wider">Get in touch</h3>
                </div>
                
                <DropdownMenu.Item 
                  className="flex items-center gap-3 px-3 py-3 text-sm text-white/90 hover:bg-scailer-green/10 hover:text-scailer-green rounded-md outline-none cursor-pointer transition-all duration-200" 
                  onClick={handleCopyEmail}
                >
                  <div className="w-8 h-8 rounded-full bg-[#2a2a2a]/70 flex items-center justify-center flex-shrink-0">
                    <MessageSquareIcon />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium">Email us</div>
                    <div className="text-xs text-gray-400">all@scailer.io</div>
                  </div>
                  {hasCopied ? (
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.2 }}
                      className="ml-auto"
                    >
                      <Check className="w-4 h-4 text-scailer-green" />
                    </motion.div>
                  ) : (
                    <div className="ml-auto">
                      <CopyIcon />
                    </div>
                  )}
                </DropdownMenu.Item>
                
                <DropdownMenu.Separator className="h-px bg-white/10 my-1 mx-3" />
                
                <DropdownMenu.Item 
                  className="flex items-center gap-3 px-3 py-3 text-sm text-white/90 hover:bg-scailer-green/10 hover:text-scailer-green rounded-md outline-none cursor-pointer transition-all duration-200"
                  onClick={handleScheduleCall}
                >
                  <div className="w-8 h-8 rounded-full bg-[#2a2a2a]/70 flex items-center justify-center flex-shrink-0">
                    <CalendarIcon />
                  </div>
                  <div>
                    <div className="font-medium">Schedule a Call</div>
                    <div className="text-xs text-gray-400">Book a free consultation</div>
                  </div>
                </DropdownMenu.Item>
                
                <DropdownMenu.Separator className="h-px bg-white/10 my-1 mx-3" />
                
                <div className="px-3 py-2 mt-1">
                  <h3 className="text-gray-400 text-xs font-medium uppercase tracking-wider">Follow us</h3>
                </div>
                
                <div className="flex px-3 py-2 gap-2">
                  <button 
                    onClick={() => window.open('https://twitter.com/scailerAI', '_blank')}
                    className="w-9 h-9 rounded-full bg-[#2a2a2a]/70 hover:bg-[#1d9bf0]/20 hover:text-[#1d9bf0] flex items-center justify-center transition-all duration-200"
                  >
                    <TwitterIcon />
                  </button>
                  
                  <button 
                    onClick={() => window.open('https://linkedin.com/company/scailer', '_blank')}
                    className="w-9 h-9 rounded-full bg-[#2a2a2a]/70 hover:bg-[#0077b5]/20 hover:text-[#0077b5] flex items-center justify-center transition-all duration-200"
                  >
                    <LinkedinIcon />
                  </button>
                </div>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
        </nav>

        <div className="flex items-center gap-4">
          <Button
            onClick={handleTryForFree}
            className="hidden md:flex bg-white hover:bg-white/90 text-black font-medium px-6 py-2 rounded-full"
          >
            Try for free
          </Button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          height: isMobileMenuOpen ? "auto" : 0,
          opacity: isMobileMenuOpen ? 1 : 0,
        }}
        className="md:hidden overflow-hidden bg-[#2a2a2a] border-t border-scailer-light/20"
      >
        <div className="container mx-auto px-4 py-4">
          <nav className="flex flex-col space-y-4">
            <button 
              onClick={() => {
                scrollToElement("framework-diagram");
                setIsMobileMenuOpen(false);
              }}
              className="w-full text-left text-white/80 hover:text-white transition-colors py-2"
            >
              Solutions
            </button>

            <button 
              onClick={() => {
                scrollToElement("operations-service");
                setIsMobileMenuOpen(false);
              }}
              className="text-white/80 hover:text-white transition-colors py-2 text-left"
            >
              About
            </button>
            
            <Link href="/blog" className="text-white/80 hover:text-white transition-colors py-2">
              Blog
            </Link>
            
            <div className="py-2">
              <p className="text-white/70 text-xs uppercase tracking-wider font-medium mb-3">Get in touch</p>
              
              <button 
                onClick={handleCopyEmail}
                className="w-full text-left hover:bg-scailer-green/10 hover:text-scailer-green rounded-md px-3 py-3 transition-colors flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-full bg-[#2a2a2a]/70 flex items-center justify-center flex-shrink-0">
                  <MessageSquareIcon />
                </div>
                <div className="flex-1">
                  <div className="font-medium text-sm">Email us</div>
                  <div className="text-xs text-gray-400">all@scailer.io</div>
                </div>
                {hasCopied ? (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    className="ml-auto"
                  >
                    <Check className="w-4 h-4 text-scailer-green" />
                  </motion.div>
                ) : (
                  <div className="ml-auto">
                    <CopyIcon />
                  </div>
                )}
              </button>
              
              <button 
                onClick={handleScheduleCall}
                className="w-full text-left hover:bg-scailer-green/10 hover:text-scailer-green rounded-md px-3 py-3 mt-1 transition-colors flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-full bg-[#2a2a2a]/70 flex items-center justify-center flex-shrink-0">
                  <CalendarIcon />
                </div>
                <div>
                  <div className="font-medium text-sm">Schedule a Call</div>
                  <div className="text-xs text-gray-400">Book a free consultation</div>
                </div>
              </button>
              
              <p className="text-white/70 text-xs uppercase tracking-wider font-medium mt-4 mb-3 px-3">Follow us</p>
              
              <div className="flex px-3 gap-2">
                <button 
                  onClick={() => {
                    window.open('https://twitter.com/scailerAI', '_blank');
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-9 h-9 rounded-full bg-[#2a2a2a]/70 hover:bg-[#1d9bf0]/20 hover:text-[#1d9bf0] flex items-center justify-center transition-all duration-200"
                >
                  <TwitterIcon />
                </button>
                
                <button 
                  onClick={() => {
                    window.open('https://linkedin.com/company/scailer', '_blank');
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-9 h-9 rounded-full bg-[#2a2a2a]/70 hover:bg-[#0077b5]/20 hover:text-[#0077b5] flex items-center justify-center transition-all duration-200"
                >
                  <LinkedinIcon />
                </button>
              </div>
            </div>
            
            <Button
              onClick={handleTryForFree}
              className="bg-white hover:bg-white/90 text-black px-6 py-2 rounded-full font-medium transition-colors mt-2"
            >
              Try for free
            </Button>
          </nav>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default HAL900Header; 