"use client";

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import ScrollAnimationWrapper from "@/components/HAL900-ScrollAnimationWrapper";

// Add component ID for tracking
const PAGE_COMPONENT_ID = "page_" + Math.random().toString(36).substr(2, 9);

const HAL900Header = dynamic(() => import("@/components/HAL900-Header"), {
  ssr: true,
});

const HAL900Hero = dynamic(() => import("@/components/HAL900-Hero"), {
  ssr: true,
});

const HAL900OperationsService = dynamic(() => import("@/components/HAL900-OperationsService"), {
  ssr: true,
});

const MeetTheTeam = dynamic(() => import("@/components/MeetTheTeam"), {
  ssr: true,
});

const HAL900ScaleWithPrecision = dynamic(
  () => import("@/components/HAL900-ScaleWithPrecision"),
  { ssr: true }
);

const HAL900FrameworkDiagram = dynamic(
  () => import("@/components/HAL900-FrameworkDiagram"),
  { ssr: true }
);

const HAL900BookingInterface = dynamic(
  () => import("@/components/HAL900-BookingInterface"),
  { ssr: true }
);

export default function Home() {
  const [showContent, setShowContent] = useState(true);

  // Add useEffect to adjust document height
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Set minimum height for the main element to ensure scrollability
      const setMinHeight = () => {
        const mainElement = document.querySelector('main');
        if (mainElement) {
          // Make the document at least 3x viewport height to ensure scrollability
          mainElement.style.minHeight = `${window.innerHeight * 3}px`;
          console.log("[PAGE DEBUG] Set minimum height on main element:", window.innerHeight * 3);
          // Force reflow
          void mainElement.offsetHeight;
        }
      };
      
      // Set height after a short delay to ensure all components are loaded
      setTimeout(setMinHeight, 100);
      
      // Also set on resize
      window.addEventListener('resize', setMinHeight);
      return () => window.removeEventListener('resize', setMinHeight);
    }
  }, []);
  
  // Function to find elements with overflow properties that might block scrolling
  const findElementsWithOverflowProperties = () => {
    console.log("[PAGE DEBUG] Scanning for elements with overflow properties that might block scrolling...");
    const allElements = document.querySelectorAll('*');
    
    interface ElementIssue {
      id: string;
      tag: string;
      overflow: string;
      overflowY: string;
      position: string;
      height: string;
      classes: string;
    }
    
    const potentialIssues: ElementIssue[] = [];
    
    allElements.forEach(el => {
      const styles = window.getComputedStyle(el);
      if (
        el.id && // Only check elements with IDs for easier reference
        (styles.overflow === 'hidden' || 
         styles.overflowY === 'hidden' ||
         styles.overflow === 'scroll' || 
         styles.overflowY === 'scroll')
      ) {
        potentialIssues.push({
          id: el.id,
          tag: el.tagName,
          overflow: styles.overflow,
          overflowY: styles.overflowY,
          position: styles.position,
          height: styles.height,
          classes: Array.from(el.classList).join(', ')
        });
      }
    });
    
    if (potentialIssues.length > 0) {
      console.log("[PAGE DEBUG] Found elements with potential scroll-blocking properties:", potentialIssues);
    } else {
      console.log("[PAGE DEBUG] No elements with obvious scroll-blocking properties found");
    }
    
    // Also check for elements with specific class mentioned in GitHub issues
    const overflowHiddenElements = document.querySelectorAll('.overflow-hidden');
    if (overflowHiddenElements.length > 0) {
      console.log("[PAGE DEBUG] Found elements with overflow-hidden class:", overflowHiddenElements.length);
      Array.from(overflowHiddenElements).forEach((el, i) => {
        console.log(`[PAGE DEBUG] overflow-hidden element ${i}:`, {
          tag: el.tagName,
          id: el.id || 'no-id',
          classes: Array.from(el.classList).join(', '),
          parent: el.parentElement ? el.parentElement.tagName + (el.parentElement.id ? '#'+el.parentElement.id : '') : 'none'
        });
      });
    }
  };

  const handleLearnMore = () => {
    console.log("Learn More button clicked");
    // Scroll to operations service
    const element = document.getElementById("operations-service");
    if (element) {
      // Use modern scrollIntoView with smooth behavior
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
  };

  const handleBookMeeting = () => {
    console.log("Book Meeting button clicked");
    // Scroll to booking calendar
    const element = document.getElementById("booking-interface");
    if (element) {
      // Use modern scrollIntoView with smooth behavior
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
  };

  const handleTryForFree = () => {
    console.log("Try For Free button clicked");
    const element = document.getElementById("scale-with-precision");
    if (element) {
      // Use a more modern, forceful approach to smooth scrolling
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
      
      // Also set a CSS scroll behavior as backup
      document.documentElement.style.scrollBehavior = 'smooth';
      
      // Force a CSS transition for scrolling
      document.body.style.transition = 'scroll-position 2s cubic-bezier(0.65, 0, 0.35, 1)';
    }
  };

  return (
    <main className="min-h-[300vh] bg-[#2a2a2a]">
      <HAL900Header onTryForFree={handleTryForFree} />
      <ScrollAnimationWrapper>
        <HAL900Hero onLearnMore={handleLearnMore} onBookMeeting={handleBookMeeting} />
      </ScrollAnimationWrapper>
      <div className="transition-opacity duration-700 opacity-100">
        <div id="operations-service" className="mt-24">
          <ScrollAnimationWrapper delay={0.6}>
            <HAL900OperationsService />
          </ScrollAnimationWrapper>
        </div>
        <div className="mt-16 mb-40" id="scale-with-precision">
          <ScrollAnimationWrapper delay={1.8}>
            <HAL900ScaleWithPrecision />
          </ScrollAnimationWrapper>
        </div>
        <div id="framework-diagram">
          <ScrollAnimationWrapper delay={0.4}>
            <HAL900FrameworkDiagram />
          </ScrollAnimationWrapper>
        </div>
        <div>
          <ScrollAnimationWrapper delay={0.6}>
            <MeetTheTeam />
          </ScrollAnimationWrapper>
        </div>
        <div id="booking-interface">
          <ScrollAnimationWrapper delay={0.5}>
            <HAL900BookingInterface />
          </ScrollAnimationWrapper>
        </div>
      </div>
    </main>
  );
}
