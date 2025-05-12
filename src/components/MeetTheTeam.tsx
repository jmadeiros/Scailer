import { Globe, User } from "lucide-react";
import { motion } from "framer-motion";
import dynamic from 'next/dynamic';
import React, { useRef, useState, useEffect } from 'react';

// Dynamically import the 3D background component, ensuring it's client-side only
const LanyardBackground = dynamic(() => import("@/components/3d/LanyardBackground"), {
  ssr: false
});

export default function MeetTheTeam() {
  // Keep sectionRef if needed for other purposes, or remove if only for observer
  // const sectionRef = useRef<HTMLElement>(null); 
  const headingRef = useRef<HTMLHeadingElement>(null); // <<< New Ref for the heading
  const [isSectionVisible, setIsSectionVisible] = useState(false);

  // Log component rendering and current state
  console.log(`[MeetTheTeam] Rendering. isSectionVisible: ${isSectionVisible}`);

  useEffect(() => {
    console.log('[MeetTheTeam] useEffect setup running.');
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log(`[MeetTheTeam] IntersectionObserver triggered for HEADING. isIntersecting: ${entry.isIntersecting}, ratio: ${entry.intersectionRatio}`);
        // Trigger when the heading is at least 50% visible
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) { 
           console.log('[MeetTheTeam] HEADING Threshold met! Setting isSectionVisible to true.');
           setIsSectionVisible(true);
           if (headingRef.current) { // <<< Check headingRef
             console.log('[MeetTheTeam] Unobserving HEADING target.');
             observer.unobserve(headingRef.current); // <<< Unobserve headingRef
           }
         }
      },
      {
        rootMargin: '0px', // <<< Reset rootMargin
        threshold: 0.5  // <<< Use 50% threshold for heading
      }
    );

    const currentHeadingRef = headingRef.current; // <<< Use headingRef
    if (currentHeadingRef) {
      console.log('[MeetTheTeam] Starting to observe the HEADING element.');
      observer.observe(currentHeadingRef);
    } else {
      console.warn('[MeetTheTeam] HEADING Ref not available on initial mount for observer.');
    }

    return () => {
      console.log('[MeetTheTeam] Cleanup: Stopping HEADING observer.');
       if (currentHeadingRef) {
         observer.unobserve(currentHeadingRef);
       }
       // Consider disconnect if component unmounts completely
       // observer.disconnect(); 
    };
  }, []);

  return (
    // Remove ref from section if no longer needed
    <section /* ref={sectionRef} */ className="py-10 md:py-20 bg-[#1a1a1a] relative overflow-hidden min-h-screen">
      {/* Wrapper for the 3D background - Pass visibility state */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none"> 
        <LanyardBackground isVisible={isSectionVisible} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center"> {/* Ensure content is above the background */}
        <motion.div 
          className="text-center mb-6 md:mb-10"
          initial={{ opacity: 0, y: 30 }} // <<< Restore animation
          whileInView={{ opacity: 1, y: 0 }} // <<< Restore animation
          viewport={{ once: true }} // <<< Restore animation
          transition={{ duration: 0.6 }} // <<< Restore animation
        >
          <h2 ref={headingRef} className="text-2xl md:text-3xl lg:text-5xl font-bold text-white inline-block relative">
            Meet the Team
          </h2>
        </motion.div>
        
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16 md:mb-24" // Adjusted margin for mobile
          initial={{ opacity: 0, y: 30 }} // <<< Restore animation
          whileInView={{ opacity: 1, y: 0 }} // <<< Restore animation
          viewport={{ once: true }} // <<< Restore animation
          transition={{ duration: 0.6, delay: 0.2 }} // Delay might need adjustment based on new position
        >
          <p className="text-gray-200 text-base md:text-xl leading-relaxed px-2 md:px-0">
            We're passionate about helping companies integrate AI to improve their business. The AI landscape is ever evolving and we're here to support you.
          </p>
        </motion.div>

        {/* --- Team Member Grid Area (Relative Positioning for Hint) --- */}
        <div className="relative max-w-5xl mx-auto w-full"> 
           {/* --- Click to Flip Hint (Absolutely Positioned) --- */}
           <motion.div 
              className="absolute hidden md:flex top-0 left-0 z-10 items-center text-gray-400 text-lg mt-[-30px] ml-[-80px]" // Hide on mobile
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: isSectionVisible ? 1 : 0, y: isSectionVisible ? 0 : -10 }} 
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              {/* Arrow first, then text (reversed order) */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 rotate-45 w-7 h-7"> {/* Adjusted size via Tailwind class */}
                 <polyline points="6 9 12 15 18 9"></polyline>  
              </svg>
              <span>Hold to drag</span>
            </motion.div>

           {/* Mobile-only drag hint (centered) */}
           <motion.div 
              className="flex md:hidden w-full justify-center items-center text-gray-400 text-sm mb-4" 
              initial={{ opacity: 0 }}
              animate={{ opacity: isSectionVisible ? 1 : 0 }} 
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1 w-5 h-5">
                 <path d="M5 9 L 12 16 L 19 9"></path>  
              </svg>
              <span>Hold and drag cards</span>
            </motion.div>

           {/* --- The Actual Grid --- */}
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full"> 
              {/* Josh */}
              <motion.div 
                className="flex flex-col h-full items-center bg-black/20 rounded-xl p-6 shadow-lg md:bg-transparent md:p-0 md:shadow-none" 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 text-center">Josh</h3>
                <div className="flex items-center justify-center text-[#25D366] mb-3 md:mb-4">
                  {/* SVG Icon */}
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2"><path d="M13 10V3L4 14H11V21L20 10H13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  <span className="font-medium text-sm md:text-base">Tech Builder</span>
                </div>
                {/* Adjusted text size for mobile */}
                <p className="text-gray-300 mb-5 md:mb-6 text-center text-base md:text-lg">
                  Josh has experience coding in finance, where he built tools to speed things up and cut out manual tasks. Now, he builds on that by developing systems that help companies run more smoothly and get more done.
                </p>
                <div className="flex justify-center mt-auto">
                  <a href="#" className="mx-2 text-gray-400 hover:text-white transition-colors"><Globe className="w-5 h-5" /></a>
                  <a href="#" className="mx-2 text-gray-400 hover:text-white transition-colors"><User className="w-5 h-5" /></a>
                </div>
              </motion.div>
              
              {/* George */}
              <motion.div 
                className="flex flex-col h-full items-center bg-black/20 rounded-xl p-6 shadow-lg md:bg-transparent md:p-0 md:shadow-none" 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 text-center">George</h3>
                <div className="flex items-center justify-center text-[#25D366] mb-3 md:mb-4">
                  {/* SVG Icon */}
                   <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/></svg>
                  <span className="font-medium text-sm md:text-base">Growth Strategist</span>
                </div>
                 {/* Adjusted text size for mobile */}
                <p className="text-gray-300 mb-5 md:mb-6 text-center text-base md:text-lg">
                  George has worked with companies across a mix of industries, helping them bring AI into the fold. He focuses on sectors where it's still early days, building systems that simplify work, save time, and help them get ahead of the curve.
                </p>
                <div className="flex justify-center mt-auto">
                  <a href="#" className="mx-2 text-gray-400 hover:text-white transition-colors"><Globe className="w-5 h-5" /></a>
                  <a href="#" className="mx-2 text-gray-400 hover:text-white transition-colors"><User className="w-5 h-5" /></a>
                </div>
              </motion.div>
            </div>
        </div>

      </div>
    </section>
  );
} 