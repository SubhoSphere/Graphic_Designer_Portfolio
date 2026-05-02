"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

function AnimatedCounter({ target, suffix = "+", label }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 0;
          const duration = 2000;
          const step = target / (duration / 16);
          const timer = setInterval(() => {
            start += step;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="flex flex-col">
      <div className="flex items-baseline gap-1">
        <span className="font-heading text-4xl lg:text-5xl font-extrabold text-white leading-none">
          {count}
        </span>
        <span className="text-neon text-2xl lg:text-3xl font-bold">{suffix}</span>
      </div>
      <span className="text-[10px] font-bold text-white/80 uppercase tracking-[2px] mt-1">
        {label}
      </span>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-blue-primary overflow-hidden pb-0">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="relative flex flex-col lg:flex-row items-start min-h-[calc(100vh-160px)]">

          {/* Left Column — Team + Stats */}
          <motion.div
            className="relative z-20 flex flex-col gap-8 lg:gap-10 pt-8 lg:pt-12 w-full lg:w-auto"
            initial={{ x: -80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Team Avatars */}
            <div className="flex flex-col gap-3">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neon/60 to-blue-deep border-2 border-blue-primary overflow-hidden">
                  <div className="w-full h-full bg-[url('https://api.dicebear.com/9.x/avataaars/svg?seed=Felix')] bg-cover bg-center" />
                </div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-blue-deep border-2 border-blue-primary overflow-hidden">
                  <div className="w-full h-full bg-[url('https://api.dicebear.com/9.x/avataaars/svg?seed=Aneka')] bg-cover bg-center" />
                </div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-deep border-2 border-blue-primary overflow-hidden">
                  <div className="w-full h-full bg-[url('https://api.dicebear.com/9.x/avataaars/svg?seed=Luna')] bg-cover bg-center" />
                </div>
              </div>
              <p className="text-[11px] font-bold text-white/90 uppercase tracking-[1px] leading-relaxed max-w-[180px]">
                The expert team brings a creativity to every project.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-row lg:flex-col gap-8 lg:gap-7">
              <AnimatedCounter target={500} label="Happy Client" />
              <AnimatedCounter target={125} label="Project Done" />
              <AnimatedCounter target={450} label="Media Featured" />
            </div>
          </motion.div>

          {/* Center — Main Heading + Image */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {/* CREATIVE AGENCY Text */}
            <motion.div
              className="relative text-center select-none"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="font-heading font-black uppercase leading-[0.85]">
                <span className="block text-[clamp(60px,12vw,180px)] text-neon drop-shadow-[0_0_60px_rgba(200,255,0,0.15)]">
                  Graphic
                </span>
                <span className="block text-[clamp(60px,12vw,180px)] text-transparent [-webkit-text-stroke:2px_#c8ff00] drop-shadow-[0_0_40px_rgba(200,255,0,0.1)]">
                  Designer
                </span>
              </h1>
            </motion.div>

            {/* Hero Image — Woman with Headphones */}
            <motion.div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[40vw] max-w-[520px] min-w-[280px] pointer-events-none z-10"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="relative">
                <Image
                  src="/images/hero-boy.png"
                  alt="Creative professional with headphones"
                  width={520}
                  height={650}
                  className="w-full h-full object-contain"
                  priority
                />
                {/* Gradient mask to blend edges */}
                <div className="absolute inset-0 pointer-events-none"
                  style={{
                    background: `linear-gradient(to bottom, transparent 70%, #1400ff 100%)`
                  }}
                />
              </div>
            </motion.div>
          </div>

          {/* Right Column — Star, Description, CTA */}
          <motion.div
            className="relative z-20 ml-auto flex flex-col items-end gap-6 pt-8 lg:pt-12 w-full lg:w-auto mt-8 lg:mt-0"
            initial={{ x: 80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Rotating Star Icon */}
            <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full border-2 border-white/30 flex items-center justify-center">
              <svg
                className="animate-star-pulse"
                width="28"
                height="28"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M16 2L20 12L30 16L20 20L16 30L12 20L2 16L12 12L16 2Z"
                  fill="none"
                  stroke="white"
                  strokeWidth="1.5"
                />
              </svg>
            </div>

            {/* Description */}
            <div className="flex flex-col items-end gap-5 mt-auto lg:mt-48">
              {/* <p className="text-[13px] lg:text-sm text-white/70 leading-relaxed max-w-[260px] text-right font-light">
                Engineering Digital Identities through Code and Cinema.
              </p> */}

              {/* Get Started Button */}
              {/* <a
                href="#services"
                className="group flex items-center gap-3 px-7 py-3.5 border border-white/40 rounded-full text-xs font-bold uppercase tracking-[2px] text-white hover:bg-neon hover:text-blue-primary hover:border-neon transition-all duration-300"
              >
                Get Started
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M10 8L14 12L10 16"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a> */}

              {/* Play Button */}
              <motion.button
                className="w-14 h-14 rounded-full bg-neon flex items-center justify-center hover:bg-neon-light transition-colors duration-300 shadow-[0_0_30px_rgba(200,255,0,0.3)]"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Play video"
              >
                <svg
                  width="18"
                  height="20"
                  viewBox="0 0 18 20"
                  fill="none"
                >
                  <path
                    d="M2 1L16 10L2 19V1Z"
                    fill="#1400ff"
                    stroke="#1400ff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
