"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="relative h-[600px] md:h-screen w-full overflow-hidden">
      {/* Background Image with Parallax-like feel */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat grayscale-[20%]"
        style={{ backgroundImage: "url('/images/cta-bg-graphic.png')" }}
      />

      {/* Dark Overlay for better contrast */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Content Container */}
      <div className="relative z-10 h-full max-w-[1400px] mx-auto px-6 lg:px-12 flex items-center justify-end">

        {/* The Black Card */}
        <motion.div
          className="relative bg-[#1a1a1a] w-full max-w-[650px] p-10 md:p-16 lg:p-20 shadow-2xl overflow-hidden"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative z-10 space-y-8 md:space-y-12">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-[64px] font-black text-white uppercase leading-[1.05]">
              Let's Create<br />Something<br />Extraordinary<br />Together.
            </h2>

            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-8 py-3 border border-neon rounded-sm text-xs font-bold uppercase tracking-[2px] text-white hover:bg-neon hover:text-blue-primary transition-all duration-300"
            >
              Contact Us
            </a>
          </div>

          {/* Rotating Badge Design Element */}
          <div className="absolute -bottom-10 -right-10 w-48 h-48 md:w-64 md:h-64 pointer-events-none">
            <motion.div
              className="relative w-full h-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            >
              {/* Circular Text */}
              <svg className="w-full h-full text-neon" viewBox="0 0 100 100">
                <defs>
                  <path
                    id="circlePath"
                    d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  />
                </defs>
                <text className="text-[8px] font-black uppercase tracking-[2px] fill-current">
                  <textPath xlinkHref="#circlePath">
                    Brand Identity * Visual Storytelling * Art Direction *
                  </textPath>
                </text>
              </svg>

              {/* Center Star */}
              <div className="absolute inset-0 flex items-center justify-center pt-8 pr-8">
                <svg width="40" height="40" viewBox="0 0 32 32" fill="none" className="text-neon scale-150">
                  <path
                    d="M16 0L19.5 12.5L32 16L19.5 19.5L16 32L12.5 19.5L0 16L12.5 12.5L16 0Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
