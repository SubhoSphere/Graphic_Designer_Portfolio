"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section id="about" className="bg-[#111111] min-h-screen flex items-center justify-center py-24 px-6 overflow-hidden">
      <div className="max-w-[1400px] w-full mx-auto">
        <motion.div
          className="flex flex-col items-center text-center space-y-4 md:space-y-6 lg:space-y-7"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Row 1 */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-x-3 md:gap-x-4 gap-y-2">
            <span className="text-white font-heading text-2xl md:text-4xl lg:text-[48px] font-black uppercase">
              Full-stack
            </span>
            <span className="bg-blue-primary text-white px-5 py-1.5 rounded-full font-heading text-2xl md:text-4xl lg:text-[48px] font-black -rotate-2">
              Developer
            </span>
            <span className="text-white font-heading text-2xl md:text-4xl lg:text-[48px] font-black uppercase">
              & Branding
            </span>
            <div className="relative w-24 md:w-36 h-10 md:h-14 rounded-full overflow-hidden border-2 border-white/20">
              <Image
                src="/images/about-1.png"
                alt="Branding"
                fill
                className="object-cover"
              />
            </div>
            <span className="text-white font-heading text-2xl md:text-4xl lg:text-[48px] font-black uppercase">
              Founder
            </span>
          </motion.div>

          {/* Row 2 */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-x-3 md:gap-x-4 gap-y-2">
            <span className="text-white font-heading text-2xl md:text-4xl lg:text-[48px] font-black uppercase">
              Crafting
            </span>
            <span className="text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.4)] font-heading text-2xl md:text-4xl lg:text-[48px] font-black italic">
              PREMIUM,
            </span>
            <span className="bg-neon text-blue-primary px-5 py-1.5 rounded-full font-heading text-2xl md:text-4xl lg:text-[48px] font-black rotate-2 shadow-[0_0_30px_rgba(200,255,0,0.2)]">
              AI-Driven
            </span>
            <span className="text-white font-heading text-2xl md:text-4xl lg:text-[48px] font-black uppercase">
              Digital Identities.
            </span>
          </motion.div>

          {/* Row 3 */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-x-3 md:gap-x-4 gap-y-2">
            <span className="text-white font-heading text-2xl md:text-4xl lg:text-[48px] font-black uppercase">
              I Bridge
            </span>
            <span className="bg-blue-primary text-white px-5 py-1.5 rounded-full font-heading text-2xl md:text-4xl lg:text-[48px] font-black rotate-1">
              High-end UI/UX
            </span>
            <span className="text-white font-heading text-2xl md:text-4xl lg:text-[48px] font-black uppercase">
              With
            </span>
            <div className="relative w-24 md:w-36 h-10 md:h-14 rounded-full overflow-hidden border-2 border-white/20">
              <Image
                src="/images/hero-boy.png"
                alt="Engineering"
                fill
                className="object-cover"
              />
            </div>
            <span className="text-white font-heading text-2xl md:text-4xl lg:text-[48px] font-black uppercase">
              Robust
            </span>
          </motion.div>

          {/* Row 4 */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-x-3 md:gap-x-4 gap-y-2">
            <span className="text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.4)] font-heading text-2xl md:text-4xl lg:text-[48px] font-black italic uppercase">
              Engineering
            </span>
            <span className="text-white font-heading text-2xl md:text-4xl lg:text-[48px] font-black uppercase">
              To
            </span>
            <span className="bg-neon text-blue-primary px-5 py-1.5 rounded-full font-heading text-2xl md:text-4xl lg:text-[48px] font-black -rotate-1">
              Transform
            </span>
            <span className="text-white font-heading text-2xl md:text-4xl lg:text-[48px] font-black uppercase">
              Markets Through
            </span>
          </motion.div>

          {/* Row 5 */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-x-3 md:gap-x-4 gap-y-2">
            <span className="bg-blue-primary text-white px-5 py-1.5 rounded-full font-heading text-2xl md:text-4xl lg:text-[48px] font-black rotate-1">
              Scalable
            </span>
            <span className="text-white font-heading text-2xl md:text-4xl lg:text-[48px] font-black uppercase">
              Code &
            </span>
            <span className="text-transparent [-webkit-text-stroke:1px_#c8ff00] font-heading text-2xl md:text-4xl lg:text-[48px] font-black italic uppercase">
              Strategic,
            </span>
            <span className="text-white font-heading text-2xl md:text-4xl lg:text-[48px] font-black uppercase">
              Modern
            </span>
            <div className="relative w-24 md:w-36 h-10 md:h-14 rounded-full overflow-hidden border-2 border-white/20">
              <Image
                src="/images/about-2.png"
                alt="Storytelling"
                fill
                className="object-cover"
              />
            </div>
            <span className="text-white font-heading text-2xl md:text-4xl lg:text-[48px] font-black uppercase">
              Storytelling.
            </span>
          </motion.div>

          {/* Footer Logo */}
          <motion.div 
            variants={itemVariants}
            className="pt-12 flex flex-col items-center gap-3"
          >
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="animate-star-pulse text-neon">
              <path
                d="M16 0L19.5 12.5L32 16L19.5 19.5L16 32L12.5 19.5L0 16L12.5 12.5L16 0Z"
                fill="currentColor"
              />
            </svg>
            <div className="flex items-center gap-2">
              <span className="text-white/40 text-[10px] md:text-xs font-bold uppercase tracking-[4px]">
                Engineering Digital Identities
              </span>
              <span className="text-white/40 text-[10px] font-bold">®</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
