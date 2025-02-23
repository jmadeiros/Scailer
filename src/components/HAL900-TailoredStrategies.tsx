"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { ChartBar, Target, TrendingUp, Users } from "lucide-react";

const features = [
  {
    icon: <ChartBar className="w-6 h-6" />,
    title: "Data Analysis",
    description: "Deep dive into your metrics to uncover growth opportunities",
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Strategic Planning",
    description: "Custom roadmaps aligned with your business goals",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Growth Optimization",
    description: "Continuous improvement of your scaling strategy",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Market Expansion",
    description: "Reach new audiences and markets effectively",
  },
];

const HAL900TailoredStrategies = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const controls = useAnimation();

  useEffect(() => {
    const animateDots = async () => {
      await controls.start({
        strokeDashoffset: 0,
        transition: {
          duration: 2,
          ease: "easeInOut",
        },
      });
    };

    animateDots();
  }, [controls]);

  return (
    <section className="py-20 bg-scailer-dark">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Tailored Strategies</h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Our framework adapts to your unique business needs, ensuring optimal results
            at every stage of growth.
          </p>
        </motion.div>

        <div className="relative mb-20">
          <svg
            ref={svgRef}
            className="w-full h-64"
            viewBox="0 0 800 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              d="M100,100 C200,50 300,150 400,100 C500,50 600,150 700,100"
              stroke="#25D366"
              strokeWidth="2"
              strokeDasharray="5,5"
              initial={{ strokeDashoffset: 1000 }}
              animate={controls}
              className="path"
            />
            
            {[0, 1, 2, 3].map((i) => (
              <motion.circle
                key={i}
                cx={200 + i * 200}
                cy={100}
                r="8"
                fill="#25D366"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: i * 0.2 }}
              />
            ))}
          </svg>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-scailer-light p-6 rounded-xl"
            >
              <div className="bg-scailer-green/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-scailer-green">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-white/70">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HAL900TailoredStrategies; 