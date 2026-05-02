"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Contact() {
  return (
    <section id="contact" className="h-screen flex flex-col lg:flex-row overflow-hidden">
      
      {/* Left Column - Form */}
      <div className="w-full lg:w-1/2 bg-[#111111] h-1/2 lg:h-full py-12 lg:py-0 px-8 md:px-16 lg:px-24 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-[500px] w-full"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-black text-white uppercase mb-8 lg:mb-10">
            Send A Message.
          </h2>

          <form className="space-y-4 lg:space-y-6">
            <div className="relative group">
              <input
                type="text"
                placeholder="Name"
                className="w-full bg-transparent border-b border-neon/30 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-neon transition-colors font-medium"
              />
            </div>
            <div className="relative group">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-transparent border-b border-neon/30 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-neon transition-colors font-medium"
              />
            </div>
            <div className="relative group">
              <input
                type="tel"
                placeholder="Telephone"
                className="w-full bg-transparent border-b border-neon/30 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-neon transition-colors font-medium"
              />
            </div>
            <div className="relative group">
              <input
                type="text"
                placeholder="Subject"
                className="w-full bg-transparent border-b border-neon/30 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-neon transition-colors font-medium"
              />
            </div>
            <div className="relative group">
              <textarea
                placeholder="Message"
                rows="3"
                className="w-full bg-transparent border-b border-neon/30 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-neon transition-colors font-medium resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="mt-6 lg:mt-8 px-10 py-3.5 border border-neon rounded-sm text-[10px] font-bold uppercase tracking-[2px] text-white hover:bg-neon hover:text-blue-primary transition-all duration-300"
            >
              Submit Your Inquiry
            </button>
          </form>
        </motion.div>
      </div>

      {/* Right Column - Info */}
      <div className="w-full lg:w-1/2 bg-[#f2f2f2] bg-grain h-1/2 lg:h-full py-12 lg:py-0 px-8 md:px-16 lg:px-24 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8 lg:space-y-12 w-full"
        >
          <div className="space-y-3 lg:space-y-4">
            <div className="flex items-center gap-3">
              <svg width="20" height="20" viewBox="0 0 32 32" fill="none">
                <path
                  d="M16 0L19.5 12.5L32 16L19.5 19.5L16 32L12.5 19.5L0 16L12.5 12.5L16 0Z"
                  fill="#c8ff00"
                />
              </svg>
              <span className="text-black font-bold uppercase tracking-[3px] text-xs font-heading">
                Get In Touch
              </span>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-[60px] font-black text-black uppercase leading-[1]">
              We're Here To Help.
            </h2>
            <p className="text-black/60 text-[13px] leading-relaxed max-w-[480px]">
              Whether you have a question, need assistance, or want to start a project, our team is ready to assist you.
            </p>
          </div>

          <div className="space-y-6 lg:space-y-8">
            <h3 className="font-heading text-lg md:text-xl font-black text-black uppercase tracking-wider">
              Contact Information
            </h3>

            <div className="grid grid-cols-2 gap-6 lg:gap-8">
              <div className="space-y-1">
                <span className="text-black font-bold uppercase tracking-wider text-[10px]">Email</span>
                <p className="text-blue-primary font-bold text-xs lg:text-sm">contact@aureliacreative.com</p>
              </div>
              <div className="space-y-1">
                <span className="text-black font-bold uppercase tracking-wider text-[10px]">Phone</span>
                <p className="text-blue-primary font-bold text-xs lg:text-sm">+1 (555) 123-4567</p>
              </div>
              <div className="space-y-1">
                <span className="text-black font-bold uppercase tracking-wider text-[10px]">Office Address</span>
                <p className="text-blue-primary font-bold text-xs lg:text-sm leading-tight">123 Creative Ave, USA</p>
              </div>
              <div className="space-y-1">
                <span className="text-black font-bold uppercase tracking-wider text-[10px]">Hours</span>
                <p className="text-blue-primary font-bold text-xs lg:text-sm">9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>

          {/* Map Snippet */}
          <div className="relative h-32 md:h-40 lg:h-48 w-full group overflow-hidden rounded-sm border border-black/5 shadow-inner">
            <Image
              src="/images/map.png"
              alt="Office Location"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700 opacity-80"
            />
            <div className="absolute top-3 left-3">
              <span className="bg-white px-3 py-1.5 text-[9px] font-bold uppercase tracking-widest text-black shadow-sm border border-black/5 inline-flex items-center gap-2">
                Open In Maps
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                </svg>
              </span>
            </div>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
