"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-[#111111] min-h-screen  md:h-screen flex flex-col justify-center pt-24 pb-12 px-6 lg:px-12 overflow-hidden border-t border-white/5">
      <div className="max-w-[1400px] mx-auto">

        {/* Top Section Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-24">

          {/* Logo & Contact */}
          <div className="space-y-10">
            <div className="flex items-center gap-3">
              <svg width="40" height="40" viewBox="0 0 32 32" fill="none">
                <path
                  d="M16 0L19.5 12.5L32 16L19.5 19.5L16 32L12.5 19.5L0 16L12.5 12.5L16 0Z"
                  fill="#c8ff00"
                />
              </svg>
              <div className="flex flex-col">
                <span className="text-white text-2xl font-black uppercase tracking-tighter font-heading leading-none">
                  Reshab®
                </span>
                <span className="text-white/40 text-[8px] font-bold uppercase tracking-[4px]">
                  Present
                </span>
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <h4 className="text-white font-bold uppercase tracking-widest text-[10px]">Contact Us</h4>
                <p className="text-white/40 text-xs leading-relaxed max-w-[200px]">
                  {process.env.NEXT_PUBLIC_OFFICE_ADDRESS || "123 Creative Ave, USA"}
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-white font-bold uppercase tracking-widest text-[10px]">Contact Us</h4>
                <p className="text-white text-sm font-bold">{process.env.NEXT_PUBLIC_PHONE_NUMBER || "+1 (800) 234 - 5678"}</p>
              </div>
            </div>
          </div>

          {/* Pages */}
          <div className="space-y-8">
            <h4 className="text-neon font-black uppercase tracking-widest text-xs font-heading">Pages</h4>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Our Services', 'Portfolio', 'FAQs', 'Contact Us'].map((page) => (
                <li key={page}>
                  <a href="#" className="text-white/40 hover:text-white text-sm transition-colors duration-300">
                    {page}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div className="space-y-8">
            <h4 className="text-neon font-black uppercase tracking-widest text-xs font-heading">Connect With Us</h4>
            <ul className="space-y-4">
              {[
                { name: 'Pinterest', icon: 'P' },
                { name: 'Github', icon: 'G' },
                { name: 'Linkedin', icon: 'L' },
                { name: 'Behance', icon: 'B' },
                { name: 'Dribbble', icon: 'D' },
                { name: 'X Twitter', icon: 'X' }
              ].map((social) => (
                <li key={social.name}>
                  <a href="#" className="flex items-center gap-3 text-white/40 hover:text-white text-sm transition-colors duration-300 group">
                    <span className="text-neon font-bold text-[10px] w-4">{social.icon}</span>
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Detailed Info */}
          <div className="space-y-10 lg:pl-8">
            <div className="space-y-4">
              <div className="flex items-baseline gap-3">
                <h3 className="text-white text-xl md:text-2xl font-black uppercase font-heading leading-none">
                  {process.env.NEXT_PUBLIC_PHONE_NUMBER || "(+23) 4356 2345"}
                </h3>
                <span className="text-white/20 text-[8px] font-bold uppercase tracking-widest">Phone Number</span>
              </div>
              <div className="flex items-baseline gap-3">
                <h3 className="text-white text-xl md:text-2xl font-black uppercase font-heading leading-none">
                  {process.env.NEXT_PUBLIC_SUPPORT_EMAIL || "reshab@info.com"}
                </h3>
                <span className="text-white/20 text-[8px] font-bold uppercase tracking-widest">Email Address</span>
              </div>
            </div>
            <p className="text-white/40 text-xs leading-relaxed max-w-[300px]">
              With a team of passionate designers, marketers, and innovators, we specialize in delivering unique solutions that elevate your brand and captivate your audience.
            </p>
          </div>
        </div>

        {/* Massive Outlined Text */}
        <div className="relative py-12 select-none pointer-events-none">
          <h2 className="text-[10vw] font-black uppercase leading-none text-transparent [-webkit-text-stroke:1px_#c8ff00] opacity-20 whitespace-nowrap">
            Reshab Creative
          </h2>
        </div>

        {/* Bottom Legal Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-white/5">
          <p className="text-white/20 text-[10px] font-bold uppercase tracking-widest">
            Nomaden Studio © 2024 All rights reserved
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-white/20 hover:text-white text-[10px] font-bold uppercase tracking-widest transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/20 hover:text-white text-[10px] font-bold uppercase tracking-widest transition-colors">Terms of Services</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
