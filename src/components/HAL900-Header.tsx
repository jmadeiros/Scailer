"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useState, useCallback } from "react";
import { Menu, X, MessageSquare, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    await navigator.clipboard.writeText('josh@scailer.io');
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2000);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="bg-scailer-dark/80 backdrop-blur-lg border-b border-scailer-light/20"
    >
      <div className="container mx-auto px-4 h-16 md:h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center text-xl md:text-2xl font-bold">
          <span>sc</span>
          <span className="text-scailer-green">ai</span>
          <span>ler</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToElement("framework-diagram")}
            className="text-white/80 hover:text-white transition-colors cursor-pointer"
          >
            Solutions
          </button>

          <button 
            onClick={() => scrollToElement("operations-service")}
            className="text-white/80 hover:text-white transition-colors cursor-pointer"
          >
            About
          </button>
          <Link href="/blog" className="text-white/80 hover:text-white transition-colors">
            Blog
          </Link>
          
          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <button className="text-white/80 hover:text-white transition-colors outline-none">
                Contact
              </button>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
              <DropdownMenu.Content
                className="min-w-[220px] bg-[#111] rounded-lg p-2 shadow-xl border border-[#333] animate-in fade-in-0 zoom-in-95"
                sideOffset={5}
                align="end"
              >
                <DropdownMenu.Item className="flex items-center gap-2 px-3 py-2 text-sm text-white/90 hover:bg-white/10 rounded-md outline-none cursor-pointer" onClick={handleCopyEmail}>
                  <MessageSquare className="w-4 h-4" />
                  <span className="flex-1">josh@scailer.io</span>
                  {hasCopied ? (
                    <Check className="w-4 h-4 text-green-500" />
                  ) : (
                    <Copy className="w-4 h-4 opacity-50" />
                  )}
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
        </nav>

        <div className="flex items-center gap-4">
          <Button
            onClick={onTryForFree}
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
        className="md:hidden overflow-hidden bg-scailer-dark border-t border-scailer-light/20"
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
            <button 
              onClick={handleCopyEmail}
              className="w-full text-left text-white/80 hover:text-white transition-colors py-2 flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>josh@scailer.io</span>
              {hasCopied ? (
                <Check className="w-4 h-4 text-green-500 ml-auto" />
              ) : (
                <Copy className="w-4 h-4 opacity-50 ml-auto" />
              )}
            </button>
            <Button
              onClick={onTryForFree}
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