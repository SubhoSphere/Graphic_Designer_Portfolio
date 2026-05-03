"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-[#f2f2f2] bg-grain py-24 lg:py-32 px-6">
      <div className="max-w-[1400px] mx-auto">
        {/* Header Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12 lg:mb-20">
          <div className="md:col-span-8 space-y-6">
            <div className="flex items-center gap-3">
              <svg width="20" height="20" viewBox="0 0 32 32" fill="none">
                <path
                  d="M16 0L19.5 12.5L32 16L19.5 19.5L16 32L12.5 19.5L0 16L12.5 12.5L16 0Z"
                  fill="#ffff33"
                />
              </svg>
              <span className="text-black font-bold uppercase tracking-[3px] text-sm font-heading">
                Our Work
              </span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-[72px] font-black text-black uppercase leading-[0.95] max-w-[900px]">
              Transforming ideas into memorable brand experiences.
            </h2>
          </div>

          <div className="md:col-span-4 flex flex-col items-start md:items-end justify-between py-2">
            <p className="text-black/60 text-sm leading-relaxed max-w-[320px] md:text-right font-medium">
              Explore a handpicked selection of my most impactful graphic design projects. From complete brand identities to dynamic digital interfaces, each piece demonstrates a commitment to aesthetic perfection.
            </p>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-3 px-8 py-3 border border-black rounded-sm text-xs font-bold uppercase tracking-[2px] text-black hover:bg-black hover:text-white transition-all duration-300"
            >
              Contact Us
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path
                  d="M7 17L17 7M17 7H7M17 7V17"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Portfolio Grid - All Horizontal Rectangles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column - Starts Lower */}
          <div className="flex flex-col gap-16 lg:gap-24 md:mt-32">
            {/* Item 1 - Branding */}
            <motion.div 
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative aspect-[16/11] overflow-hidden bg-gray-200 mb-6 rounded-sm">
                <Image
                  src="/images/work-1.png"
                  alt="Stellar Vision"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="space-y-1.5">
                <span className="text-[10px] font-bold text-black/40 uppercase tracking-widest font-heading">
                  Branding & Identity Design
                </span>
                <h3 className="text-xl md:text-2xl font-black text-black uppercase font-heading">
                  Stellar Vision - Branding & Identity
                </h3>
              </div>
            </motion.div>

            {/* Item 3 - Motion */}
            <motion.div 
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative aspect-[16/11] overflow-hidden bg-gray-200 mb-6 rounded-sm">
                <Image
                  src="/images/work-3.png"
                  alt="Velocity"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="space-y-1.5">
                <span className="text-[10px] font-bold text-black/40 uppercase tracking-widest font-heading">
                  Motion Graphics
                </span>
                <h3 className="text-xl md:text-2xl font-black text-black uppercase font-heading">
                  Velocity - Motion Graphics & Video
                </h3>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Starts Higher */}
          <div className="flex flex-col gap-16 lg:gap-24">
            {/* Item 2 - Web Design */}
            <motion.div 
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative aspect-[16/11] overflow-hidden bg-gray-200 mb-6 rounded-sm">
                <Image
                  src="/images/work-2.png"
                  alt="Horizon Hub"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="space-y-1.5">
                <span className="text-[10px] font-bold text-black/40 uppercase tracking-widest font-heading">
                  Web Design
                </span>
                <h3 className="text-xl md:text-2xl font-black text-black uppercase font-heading">
                  Horzion Hub - Website Design
                </h3>
              </div>
            </motion.div>

            {/* Item 4 - Social Media */}
            <motion.div 
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative aspect-[16/11] overflow-hidden bg-gray-200 mb-6 rounded-sm">
                <Image
                  src="/images/work-4.png"
                  alt="Bloom & Bliss"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="space-y-1.5">
                <span className="text-[10px] font-bold text-black/40 uppercase tracking-widest font-heading">
                  Social Media
                </span>
                <h3 className="text-xl md:text-2xl font-black text-black uppercase font-heading">
                  Bloom & Bliss - Social Media Campaign
                </h3>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
