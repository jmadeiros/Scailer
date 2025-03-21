"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import HAL900MessageAnimation from "./HAL900-MessageAnimation";
import HAL900AuditForm from "./HAL900-AuditForm";

export default function HAL900ScaleWithPrecision() {
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartAnimation(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-24 md:py-32 bg-[#2a2a2a] relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">Scale with Precision</h2>
        </motion.div>
        <div className="grid grid-cols-2 gap-4 md:gap-12 items-start max-w-5xl mx-auto">
          <div className="w-full">
            <HAL900AuditForm />
          </div>
          <div className="w-full">
            <HAL900MessageAnimation />
          </div>
        </div>
      </div>
    </section>
  );
} 