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
    <section className="pt-0 pb-16 bg-[#2a2a2a] relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Scale with Precision</h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We'll review how your business runs today and send you a tailored roadmap showing exactly where AI, automation, and smarter systems can unlock growth — all for free.
          </p>
        </motion.div>
        <div className="grid grid-cols-2 gap-4 md:gap-12 items-start max-w-5xl mx-auto mt-8">
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