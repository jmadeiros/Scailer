"use client";

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import ScrollAnimationWrapper from "@/components/HAL900-ScrollAnimationWrapper";

const HAL900Header = dynamic(() => import("@/components/HAL900-Header"), {
  ssr: true,
});

const HAL900Hero = dynamic(() => import("@/components/HAL900-Hero"), {
  ssr: true,
});

const HAL900OperationsService = dynamic(() => import("@/components/HAL900-OperationsService"), {
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

  const handleLearnMore = () => {
    // Scroll to operations service
    const element = document.getElementById("operations-service");
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth"
      });
    }
  };

  const handleBookMeeting = () => {
    // Add delay before scrolling
    setTimeout(() => {
      // Scroll to booking calendar
      const element = document.getElementById("booking-interface");
      if (element) {
        const offset = 80;
        const elementPosition = element.offsetTop;
        window.scrollTo({
          top: elementPosition - offset,
          behavior: "smooth"
        });
      }
    }, 300); // 300ms delay
  };

  const handleTryForFree = () => {
    const element = document.getElementById("scale-with-precision");
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth"
      });
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
        <div id="booking-interface">
          <ScrollAnimationWrapper delay={0.5}>
            <HAL900BookingInterface />
          </ScrollAnimationWrapper>
        </div>
      </div>
    </main>
  );
}
