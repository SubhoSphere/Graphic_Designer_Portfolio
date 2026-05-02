"use client";

import { motion } from "framer-motion";

const awardList = [
  {
    category: "DESIGN EXCELLENCE AWARDS",
    title: "2023 CREATIVE AGENCY OF THE YEAR",
  },
  {
    category: "MARKETING INNOVATORS GUILD",
    title: "BEST DIGITAL CAMPAIGN 2022",
  },
  {
    category: "GLOBAL DESIGN FORUM",
    title: "TOP BRANDING AGENCY 2021",
  },
  {
    category: "CREATIVE LEADERS SUMMIT",
    title: "AWARD FOR OUTSTANDING INNOVATION",
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
              fill="#c8ff00"
            />
          </svg>
          <span className="text-white font-bold uppercase tracking-[3px] text-sm font-heading">
            Aurelia Awards
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
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin hendrerit leo at leo feugiat, in ultrices nunc sollicitudin. Nunc sit amet ligula a sapien porttitor commodo ac sed lorem cras nec velit vitae.
            </p>
          </div>
        </div>

        {/* Awards List */}
        <div className="border-t border-white/10">
          {awardList.map((award, index) => (
            <motion.div
              key={index}
              className="group border-b border-white/10 py-10 lg:py-14 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 hover:bg-white/[0.02] transition-colors duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="space-y-3">
                <span className="text-neon font-bold uppercase tracking-[2px] text-[10px] md:text-xs font-heading">
                  {award.category}
                </span>
                <h3 className="text-2xl md:text-3xl lg:text-[40px] font-black text-white uppercase font-heading leading-tight">
                  {award.title}
                </h3>
              </div>

              <a
                href="#"
                className="inline-flex items-center gap-3 px-8 py-3 border border-neon rounded-sm text-xs font-bold uppercase tracking-[2px] text-white hover:bg-neon hover:text-blue-primary transition-all duration-300 group-hover:scale-105"
              >
                Discover More
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
