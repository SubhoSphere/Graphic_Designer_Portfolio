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
      {/* Background Noise Texture */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url('/nnnoise.svg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
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
                  <div className="w-full h-full bg-[url('https://res.cloudinary.com/drfodwc7q/image/upload/v1773668472/landlord_qssmys.jpg')] bg-cover bg-center" />
                </div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-blue-deep border-2 border-blue-primary overflow-hidden">
                  <div className="w-full h-full bg-[url('https://res.cloudinary.com/drfodwc7q/image/upload/v1772995730/fs1_vafpsg.png')] bg-cover bg-center" />
                </div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-deep border-2 border-blue-primary overflow-hidden">
                  <div className="w-full h-full bg-[url('https://res.cloudinary.com/drfodwc7q/image/upload/v1728151902/vqoflcumqgouirxfc1g6.jpg')] bg-cover bg-center" />
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
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[40vw] md:max-w-[520px] lg:max-w-[590px] min-w-[280px] pointer-events-none z-10"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="relative">
                <Image
                  src="/images/hero-men.png"
                  alt="Reshab"
                  width={520}
                  height={650}
                  className="w-full h-full object-contain"
                  priority
                  quality={100}
                />
                {/* Gradient mask to blend edges */}
                <div className="absolute inset-0 pointer-events-none"
                  style={{
                    background: `linear-gradient(to bottom, transparent 70%, #0D00AA 100%)`
                  }}
                />
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <motion.div
            className="relative z-20 ml-auto flex flex-col items-end justify-between gap-12 pt-8 lg:pt-12 min-h-[calc(100vh-200px)] w-full lg:w-auto mt-8 lg:mt-0 pb-12"
            initial={{ x: 80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Top Right: Rotating Circular Text + Play Button */}
            <div 
              className="relative flex items-center justify-center w-32 h-32 lg:w-40 lg:h-40 group cursor-pointer mt-4 lg:mt-0"
              onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            >
              <svg className="absolute w-full h-full animate-[spin_12s_linear_infinite]" viewBox="0 0 100 100">
                <path id="textPath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none" />
                <text className="text-[10.5px] font-bold uppercase tracking-[4.5px] fill-white/80">
                  <textPath href="#textPath" startOffset="0%">
                    •PLAY•VIEW PORTFOLIO
                  </textPath>
                </text>
              </svg>
              <div className="w-14 h-14 lg:w-16 lg:h-16 bg-neon rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-[0_0_30px_rgba(200,255,0,0.2)]">
                <svg width="18" height="20" viewBox="0 0 18 20" fill="none" className="ml-1">
                  <path d="M2 1L16 10L2 19V1Z" fill="#0D00AA" stroke="#0D00AA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>

            {/* Bottom Right: Experience Tag - Simplified Design */}
            <div className="relative overflow-hidden bg-white/[0.02] backdrop-blur-xl p-6 w-48 mt-auto rounded-lg ml-auto">
              <div className="flex flex-col relative z-10 items-end text-right">
                <span className="font-heading text-6xl lg:text-7xl font-black text-white leading-[0.8] mb-2">
                  5<span className="text-neon text-4xl font-semibold">+</span>
                </span>
                <span className="text-[10px] font-bold text-white uppercase tracking-[3px] leading-tight mt-1">
                  Years Of
                </span>
                <span className="text-[10px] font-bold text-white/40 uppercase tracking-[3px] leading-tight">
                  Experience
                </span>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}

{/* <motion.button
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
      fill="#0D00AA"
      stroke="#0D00AA"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
</motion.button> */}