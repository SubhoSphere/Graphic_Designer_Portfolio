"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const ArrowIcon = () => (
  <div className="w-12 h-12 rounded-full bg-neon flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M7 17L17 7M17 7H7M17 7V17"
        stroke="#1a1a1a"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Services() {
  return (
    <section id="services" className="relative bg-[#111111] py-20 lg:py-28 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-14 lg:mb-20">
          <div className="flex flex-col gap-5">
            {/* Label */}
            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <svg width="20" height="20" viewBox="0 0 32 32" fill="none">
                <path
                  d="M16 0L19.5 12.5L32 16L19.5 19.5L16 32L12.5 19.5L0 16L12.5 12.5L16 0Z"
                  fill="#ffff33"
                />
              </svg>
              <span className="text-sm font-bold text-neon uppercase tracking-[3px]">
                What I Do
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              className="font-heading text-3xl md:text-4xl lg:text-5xl xl:text-[56px] font-black text-white uppercase leading-[1.05] max-w-[900px] "
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              Designing for seamless and enjoyable interactions.
            </motion.h2>
          </div>

          {/* All Services Button */}
          <motion.a
            href="#"
            className="group flex items-center gap-3 px-6 py-3 border border-white/30 rounded-full text-xs font-bold uppercase tracking-[2px] text-white hover:bg-neon hover:text-[#111111] hover:border-neon transition-all duration-300 self-start lg:self-center shrink-0"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            All Services
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
              <path d="M10 8L14 12L10 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.a>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">

          {/* Card 1 — Brand Building & Strategy */}
          <motion.div
            className="group bg-[#1a1a1a] rounded-2xl overflow-hidden border border-white/[0.06] hover:border-neon/20 transition-all duration-500"
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="p-7 pb-5">
              <div className="flex items-start justify-between gap-4 mb-5">
                <h3 className="font-heading text-xl lg:text-2xl font-black text-white uppercase leading-tight">
                  Brand Building &amp;<br />Strategy.
                </h3>
                <ArrowIcon />
              </div>
              <p className="text-[13px] text-white/50 leading-relaxed font-light">
                Developing foundational brand identities, including logo design, color palettes, and typography systems that resonate with your target audience and tell a compelling story.
              </p>
            </div>
            <div className="px-7 pb-7 pt-3">
              <div className="rounded-xl overflow-hidden">
                <Image
                  src="/images/service-branding.png"
                  alt="Brand building and strategy team"
                  width={400}
                  height={260}
                  className="w-full h-[220px] object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
              </div>
            </div>
          </motion.div>

          {/* Card 2 — Creative Digital Solution (Blue card) */}
          <motion.div
            className="group bg-blue-primary rounded-2xl overflow-hidden border border-white/[0.06] hover:border-neon/20 transition-all duration-500"
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="p-7 pb-4">
              <div className="rounded-xl overflow-hidden mb-5">
                <Image
                  src="/images/service-digital.png"
                  alt="Creative digital solution team"
                  width={400}
                  height={260}
                  className="w-full h-[200px] object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
              </div>
            </div>
            <div className="mx-5 mb-5 p-6 rounded-xl">
              <div className="flex items-start justify-between gap-4 mb-4">
                <h3 className="font-heading text-xl lg:text-2xl font-black text-white uppercase leading-tight">
                  Creative Digital<br />Solution.
                </h3>
                <ArrowIcon />
              </div>
              <p className="text-[13px] text-white/60 leading-relaxed font-light">
                Crafting pixel-perfect website interfaces, mobile app layouts, and interactive digital experiences that balance aesthetic beauty with functional, intuitive user flows.
              </p>
            </div>
          </motion.div>

          {/* Card 3 — Marketing & Campaign */}
          <motion.div
            className="group bg-[#1a1a1a] rounded-2xl overflow-hidden border border-white/[0.06] hover:border-neon/20 transition-all duration-500"
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="p-7 pb-5">
              <div className="flex items-start justify-between gap-4 mb-5">
                <h3 className="font-heading text-xl lg:text-2xl font-black text-white uppercase leading-tight">
                  Marketing &amp;<br />Campaign.
                </h3>
                <ArrowIcon />
              </div>
              <p className="text-[13px] text-white/50 leading-relaxed font-light">
                Designing eye-catching visual assets for social media, advertising campaigns, and print materials to ensure consistent, high-impact messaging across all platforms.
              </p>
            </div>
            <div className="px-7 pb-7 pt-3">
              <div className="rounded-xl overflow-hidden">
                <Image
                  src="/images/service-marketing.png"
                  alt="Marketing and campaign team"
                  width={400}
                  height={260}
                  className="w-full h-[220px] object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
