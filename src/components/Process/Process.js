"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    label: "DISCOVER",
    title: "STRATEGIC ALIGNMENT",
    bgColor: "bg-blue-primary",
    isTall: true,
  },
  {
    number: "02",
    label: "CONCEPT",
    title: "VISUAL EXPLORATION",
    bgColor: "bg-[#1a1a1a]",
    isTall: false,
  },
  {
    number: "03",
    label: "REFINE",
    title: "PIXEL PERFECTION",
    bgColor: "bg-blue-primary",
    isTall: true,
  },
  {
    number: "04",
    label: "DELIVER",
    title: "BRAND LAUNCH",
    bgColor: "bg-[#1a1a1a]",
    isTall: false,
  },
];

export default function Process() {
  return (
    <section className="bg-[#f2f2f2] bg-grain py-24 lg:py-32 px-6 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 lg:mb-24 items-start">
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center gap-3">
              <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
                <path
                  d="M16 0L19.5 12.5L32 16L19.5 19.5L16 32L12.5 19.5L0 16L12.5 12.5L16 0Z"
                  fill="#ffff33"
                />
              </svg>
              <span className="text-black font-bold uppercase tracking-[3px] text-sm font-heading">
                My Creative Process
              </span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-[72px] font-black text-black uppercase leading-[1]">
              From Concept To Reality
            </h2>
          </div>

          <div className="lg:col-span-4 lg:pt-12">
            <p className="text-black/60 text-sm leading-relaxed max-w-[420px]">
              Every project is a unique journey. I follow a rigorous, highly collaborative process to ensure that your brand's visual identity not only looks stunning but strategically communicates your core message to the world.
            </p>
          </div>
        </div>

        {/* Process Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className={`relative ${step.bgColor} p-8 md:p-10 flex flex-col justify-between ${step.isTall ? "h-[350px] lg:h-[400px]" : "h-[270px] lg:h-[320px] lg:mt-20"
                } shadow-xl group hover:scale-[1.02] transition-transform duration-500`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex justify-between items-start">
                <span className="text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.2)] font-heading text-5xl md:text-6xl font-black group-hover:text-white/10 transition-colors duration-500">
                  {step.number}
                </span>
                <span className="text-neon font-bold uppercase tracking-[2px] text-xs md:text-sm pt-2">
                  {step.label}
                </span>
              </div>

              <h3 className="font-heading text-2xl md:text-3xl font-black text-white uppercase leading-tight max-w-[180px]">
                {step.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
