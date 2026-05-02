"use client";

import { motion } from "framer-motion";

const items = [
  "BRANDING",
  "GRAPHIC DESIGN",
  "WEB DESIGN",
  "DIGITAL MARKETING",
  "UI/UX DESIGN",
  "MOTION GRAPHICS",
];

export default function Marquee() {
  return (
    <div className="relative z-30 -mt-14 lg:-mt-20 -mb-10 lg:-mb-14">
      <motion.div
        className="relative w-[120vw] -ml-[10vw] bg-neon py-6 lg:py-8 overflow-hidden -rotate-2"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="animate-marquee flex whitespace-nowrap">
          {[...items, ...items, ...items, ...items].map((item, i) => (
            <span key={i} className="flex items-center">
              <span className="font-heading text-3xl md:text-4xl lg:text-5xl font-black text-blue-primary uppercase tracking-wider px-5 lg:px-8">
                {item}
              </span>
              <span className="text-blue-primary/50 text-3xl lg:text-4xl font-black mx-2">
                ✦
              </span>
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
