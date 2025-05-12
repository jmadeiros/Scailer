'use client';

import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Lightformer, Environment } from '@react-three/drei';
import { Physics } from '@react-three/rapier';
import LanyardCard from './LanyardCard';
import dynamic from 'next/dynamic';

// CanvasWrapper needs pointer events auto to capture 3D interaction
const CanvasWrapper = dynamic(() => Promise.resolve(({ children }: { children: React.ReactNode }) => (
  <Canvas 
    camera={{ position: [0, 0, 13], fov: 25 }} 
    gl={{ alpha: true }} // Request alpha buffer
    style={{ background: 'transparent', pointerEvents: 'auto' }} 
    // Explicitly set clear alpha on creation
    onCreated={({ gl }) => {
      gl.setClearAlpha(0);
    }}
    flat // Add flat prop for better transparency compositing
  >
    {children}
  </Canvas>
)), { ssr: false });

interface LanyardBackgroundProps {
  zIndex?: number;
  transparent?: boolean; // Controls whether background is transparent
  showDebug?: boolean; // Controls whether to show debug indicator
  cardSettings?: {
    position1?: [number, number, number];
    position2?: [number, number, number];
  };
  isVisible: boolean; // Add isVisible prop
}

export default function LanyardBackground({ 
  zIndex = 0, // Default zIndex for elements within the section
  transparent = true,
  showDebug = false,
  cardSettings = {
    position1: [-4.5, 0.5, 0],
    position2: [4.5, 0.5, 0]
  },
  isVisible // Destructure isVisible prop
}: LanyardBackgroundProps) {
  // New state to control rendering of the 3D physics content
  const [shouldRender3D, setShouldRender3D] = useState(false);

  console.log(`[LanyardBackground] Rendering. Received isVisible: ${isVisible}, shouldRender3D: ${shouldRender3D}`);

  useEffect(() => {
    console.log(`[LanyardBackground] Effect running. isVisible prop is: ${isVisible}`);
    let visibilityTimer: NodeJS.Timeout | null = null;

    if (isVisible && !shouldRender3D) { 
      console.log('[LanyardBackground] isVisible is true. Starting 2.2-second timer to enable 3D rendering...');
      visibilityTimer = setTimeout(() => {
        console.log("[LanyardBackground] 2.2s timer finished. Enabling 3D rendering (setting shouldRender3D to true).");
        setShouldRender3D(true);
      }, 2200); // <<< Changed delay to 2.2 seconds
    } else if (!isVisible) {
        // Optional Reset Logic
    }

    return () => {
      if (visibilityTimer) {
        console.log('[LanyardBackground] Cleanup: Clearing visibility timer.');
        clearTimeout(visibilityTimer);
      }
    };
  }, [isVisible]); 

  // Define starting positions (higher Y value)
  const startPos1: [number, number, number] = [cardSettings.position1 ? cardSettings.position1[0] : -4, 10, cardSettings.position1 ? cardSettings.position1[2] : 0];
  const startPos2: [number, number, number] = [cardSettings.position2 ? cardSettings.position2[0] : 4, 10, cardSettings.position2 ? cardSettings.position2[2] : 0];

  return (
    // Use absolute positioning to fill parent, not fixed
    <div className="absolute inset-0 w-full h-full" style={{ 
      zIndex, 
      pointerEvents: 'none', // Wrapper allows pass-through
      background: 'transparent'
    }}>
      {/* Debug indicator - only shown when showDebug is true */}
      {showDebug && (
        <div className="absolute top-0 right-0 z-50 bg-black bg-opacity-50 text-white p-2 text-sm pointer-events-auto">
          3D Debug (isVisible: {isVisible.toString()}, shouldRender: {shouldRender3D.toString()})
        </div>
      )}
      
      {/* Conditionally render the Canvas and Physics only when ready */}
      {shouldRender3D && (
        <CanvasWrapper>
          <ambientLight intensity={1.0} /> 
          <directionalLight position={[10, 10, 5]} intensity={1.5} />
          <directionalLight position={[-10, -10, -5]} intensity={0.5} />
          <Physics interpolate gravity={[0, -40, 0]} timeStep={1 / 60}>
            {/* Pass STARTING positions here */}
            <LanyardCard 
              position={startPos1} // <<< Use starting position
              frontImage="/assets/josh.jpg"
              backImage="/assets/Screenshot 2025-04-25 200507.png"
            />
            <LanyardCard 
              position={startPos2} // <<< Use starting position
              frontImage="/assets/WhatsApp Image 2025-04-25 at 16.17.59_8c138974.jpg"
              backImage="/assets/Screenshot 2025-04-25 200507.png"
            />
          </Physics>
          <Environment preset="city" blur={0.5}> 
            {/* Keep lightformers if needed for reflections */}
            <Lightformer intensity={2} color="white" position={[0, -1, 5]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
            <Lightformer intensity={3} color="white" position={[-1, -1, 1]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
            <Lightformer intensity={3} color="white" position={[1, 1, 1]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
            <Lightformer intensity={10} color="white" position={[-10, 0, 14]} rotation={[0, Math.PI / 2, Math.PI / 3]} scale={[100, 10, 1]} />
          </Environment>
        </CanvasWrapper>
      )}
    </div>
  );
} 