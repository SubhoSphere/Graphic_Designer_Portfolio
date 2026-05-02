"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    name: "RAJ PATEL",
    role: "Founder",
    image: "/images/client-1.png",
    quote: "Aurelia helped us redefine our identity with stunning visuals and impactful messaging. They exceeded our expectations in every way. It was a pleasure working with such a talented team.",
  },
  {
    name: "MIA BROWN",
    role: "Creative Director",
    image: "/images/client-2.png",
    quote: "The team at Aurelia turned our goals into reality with ease. Their professionalism and creativity set them apart from other agencies. We couldn't be happier with the results!",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#111111] py-24 lg:py-32 px-6 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16 lg:mb-24">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
                <path
                  d="M16 0L19.5 12.5L32 16L19.5 19.5L16 32L12.5 19.5L0 16L12.5 12.5L16 0Z"
                  fill="#c8ff00"
                />
              </svg>
              <span className="text-white font-bold uppercase tracking-[3px] text-sm font-heading">
                Testimonials
              </span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-[72px] font-black text-white uppercase leading-[1]">
              What Our Client Says
            </h2>
          </div>

          <a
            href="#"
            className="inline-flex items-center gap-3 px-8 py-3 border border-neon rounded-sm text-xs font-bold uppercase tracking-[2px] text-white hover:bg-neon hover:text-blue-primary transition-all duration-300"
          >
            View More
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M10 8L14 12L10 16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              className="bg-[#1a1a1a] p-10 md:p-14 lg:p-16 flex flex-col justify-between h-full relative group shadow-2xl"
              initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-8">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                      fill="#c8ff00"
                    />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-12 italic">
                "{item.quote}"
              </p>

              {/* Footer */}
              <div className="flex justify-between items-end">
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-neon/20">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-white font-black uppercase tracking-wider font-heading">
                      {item.name}
                    </h4>
                    <p className="text-neon text-[10px] md:text-xs font-bold uppercase tracking-widest">
                      {item.role}
                    </p>
                  </div>
                </div>

                {/* Quote Icon */}
                <div className="text-neon opacity-20 group-hover:opacity-100 transition-opacity duration-500">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="currentColor">
                    <path d="M14 12c-4.418 0-8 3.582-8 8v16h12V20h-8c0-2.206 1.794-4 4-4V12zm22 0c-4.418 0-8 3.582-8 8v16h12V20h-8c0-2.206 1.794-4 4-4V12z" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
