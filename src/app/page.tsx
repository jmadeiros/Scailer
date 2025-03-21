"use client";

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

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
  const [showContent, setShowContent] = useState(false);

  const handleLearnMore = () => {
    setShowContent(true);
    
    // Scroll to framework diagram
    const element = document.getElementById("framework-diagram");
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
      <HAL900Header />
      <HAL900Hero onLearnMore={handleLearnMore} />
      <div className={`transition-opacity duration-700 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
        <HAL900OperationsService />
        <HAL900ScaleWithPrecision />
        <div id="framework-diagram">
          <HAL900FrameworkDiagram />
        </div>
        <HAL900BookingInterface />
      </div>
    </main>
  );
}
