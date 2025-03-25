"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useState, useCallback } from "react";
import { Menu, X } from "lucide-react";
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

  const scrollToElement = useCallback((elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop;
      smoothScroll(elementPosition - offset);
    }
  }, []);

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
          <Link href="/contact" className="text-white/80 hover:text-white transition-colors">
            Contact
          </Link>
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
            <Link href="/contact" className="text-white/80 hover:text-white transition-colors py-2">
              Contact
            </Link>
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