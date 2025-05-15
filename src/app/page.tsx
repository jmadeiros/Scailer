"use client";

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import ScrollAnimationWrapper from "@/components/HAL900-ScrollAnimationWrapper";

// Custom Smooth Scroll Function
const customSmoothScrollTo = (targetPosition: number, duration: number = 2500) => {
  if (typeof window === 'undefined') return;
  console.log(`[CustomScroll] Start: To ${targetPosition} over ${duration}ms (from ${window.pageYOffset})`);

  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime: number | null = null;

  if (Math.abs(distance) < 5) {
    window.scrollTo({ top: targetPosition, behavior: 'auto' });
    console.log("[CustomScroll] End (target too close): At " + window.pageYOffset);
    return;
  }

  // Ensure document scrollability (minimal version)
  if (document.documentElement.scrollHeight <= window.innerHeight && distance !== 0) {
    const newMinHeight = Math.max(document.body.scrollHeight, targetPosition + window.innerHeight);
    if (document.body.style.minHeight !== `${newMinHeight}px`) {
        // document.body.style.minHeight = `${newMinHeight}px`;
        // void document.body.offsetHeight; 
    }
  }

  const animateScroll = (timestamp: number) => {
    if (startTime === null) startTime = timestamp;
    const timeElapsed = timestamp - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const easeInOutCubic = (t: number) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    const newPosition = startPosition + distance * easeInOutCubic(progress);

    window.scrollTo({ top: newPosition, behavior: 'auto' });

    if (progress < 1) {
      requestAnimationFrame(animateScroll);
    } else {
      window.scrollTo({ top: targetPosition, behavior: 'auto' }); // Final snap
      console.log("[CustomScroll] End: At " + window.pageYOffset + " (Target: " + targetPosition + ")");
    }
  };
  requestAnimationFrame(animateScroll);
};

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

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Attempt to disable browser/router scroll restoration
      if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
        console.log("[PAGE_SCROLL_CONFIG] Set history.scrollRestoration to 'manual'");
      }

      // Your existing setMinHeight logic for body/main
      const setMinHeight = () => {
        const mainElement = document.querySelector('main');
        if (mainElement) {
          mainElement.style.minHeight = `${window.innerHeight * 4}px`; // Increased multiplier
          // console.log("[PAGE DEBUG] Set minimum height on main element:", mainElement.style.minHeight);
          void mainElement.offsetHeight;
        }
      };
      setTimeout(setMinHeight, 150); // Slightly increased delay
      window.addEventListener('resize', setMinHeight);
      return () => {
        window.removeEventListener('resize', setMinHeight);
        // Optionally, reset scrollRestoration if needed on component unmount, though usually not necessary for SPAs
        // if ('scrollRestoration' in history) { history.scrollRestoration = 'auto'; }
      };
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
    const element = document.getElementById("operations-service");
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      customSmoothScrollTo(elementPosition, 2500);
    }
  };

  const handleBookMeeting = () => {
    console.log("Book Meeting button clicked");
    const element = document.getElementById("booking-interface");
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      customSmoothScrollTo(elementPosition, 2500);
    }
  };

  const handleTryForFree = () => {
    console.log("Try For Free button clicked - scrolling to scale-with-precision");
    const element = document.getElementById("scale-with-precision");
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      customSmoothScrollTo(elementPosition, 3000); 
      document.documentElement.style.scrollBehavior = 'auto'; 
      document.body.style.transition = 'none'; 
    } else {
      console.error("Target element 'scale-with-precision' NOT found for Try For Free.");
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
        
        {/* Scale with Precision - moved extremely close to Operations on mobile */}
        <div className="-mt-24 -mb-4 md:mt-16 md:mb-40" id="scale-with-precision">
          <ScrollAnimationWrapper delay={1.8}>
            <HAL900ScaleWithPrecision />
          </ScrollAnimationWrapper>
        </div>
        
        {/* Framework Diagram - moved much closer to Scale with Precision on mobile */}
        <div id="framework-diagram" className="-mt-8 md:mt-12">
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
