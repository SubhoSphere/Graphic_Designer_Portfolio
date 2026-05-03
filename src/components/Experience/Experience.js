"use client";

import { motion } from "framer-motion";

const experienceData = [
  {
    year: "2021 — PRESENT",
    role: "Independent Art Director",
    company: "Reshab Studio",
    description: "Partnering with global brands to deliver high-end digital identities, web experiences, and award-winning marketing campaigns.",
  },
  {
    year: "2018 — 2021",
    role: "Senior Graphic Designer",
    company: "Ogilvy & Mather",
    description: "Led the visual direction for major advertising campaigns across print, digital, and social media for Fortune 500 clients.",
  },
  {
    year: "2015 — 2018",
    role: "UI/UX Designer",
    company: "Pentagram",
    description: "Designed pixel-perfect web interfaces and mobile applications, focusing on seamless user journeys and brand consistency.",
  },
  {
    year: "2013 — 2015",
    role: "Junior Designer",
    company: "Creative Studio X",
    description: "Assisted in branding projects, logo conceptualization, and creating engaging visual assets for various tech startups.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-[#111111] py-24 lg:py-32 px-6 overflow-hidden">
      <div className="max-w-[1000px] mx-auto">
        
        {/* Header */}
        <div className="flex items-center gap-3 mb-16 lg:mb-24">
          <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
            <path
              d="M16 0L19.5 12.5L32 16L19.5 19.5L16 32L12.5 19.5L0 16L12.5 12.5L16 0Z"
              fill="#ffff33"
            />
          </svg>
          <span className="text-white font-bold uppercase tracking-[3px] text-sm font-heading">
            Experience
          </span>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-white/10 ml-3 lg:ml-0">
          {experienceData.map((exp, index) => (
            <motion.div 
              key={index}
              className="relative pl-8 lg:pl-16 pb-16 last:pb-0 group"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              {/* Glowing Dot on Line */}
              <div className="absolute left-0 top-0 -translate-x-1/2 w-3 h-3 rounded-full bg-white/20 border border-white/40 group-hover:bg-neon group-hover:border-neon group-hover:scale-150 transition-all duration-300 shadow-[0_0_0_rgba(200,255,0,0)] group-hover:shadow-[0_0_20px_rgba(200,255,0,0.5)] z-10" />

              <div className="flex flex-col lg:flex-row gap-2 lg:gap-12 items-start">
                {/* Year */}
                <div className="w-48 shrink-0 pt-1">
                  <span className="text-neon text-[10px] md:text-xs font-bold uppercase tracking-[3px] font-heading">
                    {exp.year}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-3 max-w-[500px]">
                  <h3 className="text-2xl lg:text-3xl font-black text-white uppercase font-heading leading-none">
                    {exp.role}
                  </h3>
                  <span className="text-white/60 font-bold uppercase tracking-widest text-[10px] md:text-xs font-heading">
                    {exp.company}
                  </span>
                  <p className="text-white/40 text-sm leading-relaxed mt-2">
                    {exp.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
