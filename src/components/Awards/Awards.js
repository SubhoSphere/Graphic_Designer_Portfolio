"use client";

import { motion } from "framer-motion";

const awardList = [
  {
    category: "AWWWARDS",
    title: "SITE OF THE DAY 2023",
    image: "/images/cert_awwwards.png",
  },
  {
    category: "D&AD AWARDS",
    title: "YELLOW PENCIL IN TYPOGRAPHY",
    image: "/images/cert_dad.png",
  },
  {
    category: "BEHANCE AWARDS",
    title: "BEST IN BRANDING 2022",
    image: "/images/cert_behance.png",
  },
  {
    category: "ADOBE DESIGN ACHIEVEMENT",
    title: "EXCELLENCE IN UI/UX DESIGN",
    image: "/images/cert_adobe.png",
  },
];

export default function Awards() {
  return (
    <section className="bg-[#111111] py-24 lg:py-32 px-6 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        {/* Label - Top Left */}
        <div className="flex items-center gap-3 mb-8">
          <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
            <path
              d="M16 0L19.5 12.5L32 16L19.5 19.5L16 32L12.5 19.5L0 16L12.5 12.5L16 0Z"
              fill="#ffff33"
            />
          </svg>
          <span className="text-white font-bold uppercase tracking-[3px] text-sm font-heading">
            Reshab Awards
          </span>
        </div>

        {/* Header Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 lg:mb-24">
          <div className="lg:col-span-8">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-[72px] font-black text-white uppercase leading-[1.1]">
              Celebrating <span className="text-neon">Excellence</span> <br className="hidden lg:block" /> In Creativity.
            </h2>
          </div>

          <div className="lg:col-span-4 lg:pt-2">
            <p className="text-white/40 text-sm leading-relaxed max-w-[420px]">
              A curated collection of industry recognition and accolades. From prestigious web design honors to global branding awards, these milestones reflect a relentless dedication to pushing the boundaries of visual communication.
            </p>
          </div>
        </div>

        {/* Awards List */}
        <div className="border-t border-white/10">
          {awardList.map((award, index) => (
            <motion.div
              key={index}
              className="group border-b border-white/10 py-10 px-4 lg:py-14 flex flex-col justify-center gap-6 hover:bg-white/[0.02] transition-colors duration-300 relative cursor-pointer overflow-visible"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="space-y-3 z-10">
                <span className="text-neon font-bold uppercase tracking-[2px] text-[10px] md:text-xs font-heading">
                  {award.category}
                </span>
                <h3 className="text-2xl md:text-3xl lg:text-[40px] font-black text-white uppercase font-heading leading-tight">
                  {award.title}
                </h3>
              </div>

              {/* Certificate Popup Image (Triggers on Row Hover) */}
              <div className="absolute right-4 lg:right-12 top-1/2 -translate-y-1/2 w-48 h-32 lg:w-64 lg:h-44 overflow-hidden border border-white/20 opacity-0 pointer-events-none group-hover:opacity-100 transition-all duration-500 translate-x-8 group-hover:translate-x-0 shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-50">
                <img
                  src={award.image}
                  alt={award.title}
                  className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
