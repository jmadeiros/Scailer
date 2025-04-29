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
    <section /* ref={sectionRef} */ className="py-20 bg-[#1a1a1a] relative overflow-hidden min-h-screen">
      {/* Wrapper for the 3D background - Pass visibility state */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none"> 
        <LanyardBackground isVisible={isSectionVisible} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center"> {/* Ensure content is above the background */}
        <motion.div 
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }} // <<< Restore animation
          whileInView={{ opacity: 1, y: 0 }} // <<< Restore animation
          viewport={{ once: true }} // <<< Restore animation
          transition={{ duration: 0.6 }} // <<< Restore animation
        >
          <h2 ref={headingRef} className="text-3xl md:text-4xl lg:text-5xl font-bold text-white inline-block relative">
            Meet the Team
          </h2>
        </motion.div>
        
        <motion.div
          className="text-center max-w-3xl mx-auto mb-24" // Increased bottom margin to mb-24
          initial={{ opacity: 0, y: 30 }} // <<< Restore animation
          whileInView={{ opacity: 1, y: 0 }} // <<< Restore animation
          viewport={{ once: true }} // <<< Restore animation
          transition={{ duration: 0.6, delay: 0.2 }} // Delay might need adjustment based on new position
        >
          <p className="text-gray-200 text-xl leading-relaxed">
            We're passionate about helping companies integrate AI to improve their business. The AI landscape is ever evolving and we're here to support you.
          </p>
        </motion.div>

        {/* --- Team Member Grid Area (Relative Positioning for Hint) --- */}
        <div className="relative max-w-5xl mx-auto w-full"> 
           {/* --- Click to Flip Hint (Absolutely Positioned) --- */}
           <motion.div 
              className="absolute top-0 left-0 z-10 flex items-center text-gray-400 text-sm mt-[-20px] ml-[-20px]" // Increased text size to sm and adjusted margins
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: isSectionVisible ? 1 : 0, y: isSectionVisible ? 0 : -10 }} 
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              {/* Arrow first, then text (reversed order) */}
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1 rotate-45"> {/* Increased svg size */} 
                 <polyline points="6 9 12 15 18 9"></polyline>  
              </svg>
              <span>Hold to drag</span>
            </motion.div>

           {/* --- The Actual Grid --- */}
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full"> 
              {/* Josh */}
              <motion.div 
                className="flex flex-col h-full items-center" 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-3xl font-bold text-white mb-2 text-center">Josh</h3>
                <div className="flex items-center justify-center text-[#25D366] mb-4">
                  {/* SVG Icon */}
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2"><path d="M13 10V3L4 14H11V21L20 10H13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  <span className="font-medium">AI Engineer</span>
                </div>
                {/* Restored text size */}
                <p className="text-gray-300 mb-6 text-center text-lg">
                  Josh has extensive experience with coding in finance and implementing AI solutions across financial services. He has automated analytical tools that transform business operations.
                </p>
                <div className="flex justify-center mt-auto">
                  <a href="#" className="mx-2 text-gray-400 hover:text-white transition-colors"><Globe className="w-5 h-5" /></a>
                  <a href="#" className="mx-2 text-gray-400 hover:text-white transition-colors"><User className="w-5 h-5" /></a>
                </div>
              </motion.div>
              
              {/* George */}
              <motion.div 
                className="flex flex-col h-full items-center" 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h3 className="text-3xl font-bold text-white mb-2 text-center">George</h3>
                <div className="flex items-center justify-center text-[#25D366] mb-4">
                  {/* SVG Icon */}
                   <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/></svg>
                  <span className="font-medium">Full Stack Developer</span>
                </div>
                 {/* Restored text size */}
                <p className="text-gray-300 mb-6 text-center text-lg">
                  George has extensive experience assisting large and small operations integrate AI. His areas of expertise are in data analytics, machine learning pipelines, and scalable cloud infrastructure.
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