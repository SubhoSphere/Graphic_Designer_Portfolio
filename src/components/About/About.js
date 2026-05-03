"use client";

import { motion } from "framer-motion";

export default function About() {
  const text = "I am an independent art director and graphic designer with an uncompromising passion for visual storytelling. I craft premium, high-fidelity digital and physical identities that blur the line between strategic communication and pure aesthetic art.";

  return (
    <section id="about" className="bg-[#111111] py-24 lg:py-32 relative">
      <div className="max-w-[1100px] w-full mx-auto flex flex-col items-center text-center space-y-10 lg:space-y-12 px-6">
        
        <motion.div 
          className="flex flex-col items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <svg width="24" height="24" viewBox="0 0 32 32" fill="none" className="text-neon">
            <path
              d="M16 0L19.5 12.5L32 16L19.5 19.5L16 32L12.5 19.5L0 16L12.5 12.5L16 0Z"
              fill="currentColor"
            />
          </svg>
          <h2 className="text-neon font-bold uppercase tracking-[4px] text-xs font-heading">
            About Reshab
          </h2>
        </motion.div>

        <motion.p 
          className="text-white text-3xl md:text-4xl lg:text-[52px] leading-[1.4] md:leading-[1.2] font-medium tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {text}
        </motion.p>

      </div>
    </section>
  );
}
