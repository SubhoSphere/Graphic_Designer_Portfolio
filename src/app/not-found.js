"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <main className="relative h-screen flex flex-col items-center justify-center font-body bg-grain overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-deep rounded-full blur-[100px] opacity-80 -z-10"></div>
      
      <div className="container mx-auto px-6 text-center z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative inline-block"
        >
          <h1 className="text-[8rem] md:text-[12rem] font-bold leading-none font-heading tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/10 select-none">
            404
          </h1>
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%]">
            <h2 className="text-xl md:text-3xl font-bold font-heading text-neon drop-shadow-[0_0_15px_rgba(200,255,0,0.3)] bg-blue-primary/90 px-6 py-3 inline-block backdrop-blur-sm -rotate-3 border border-neon/20 shadow-xl">
              Page Not Found
            </h2>
          </div>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-white/70 text-lg max-w-md mx-auto mt-12 mb-10"
        >
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <Link 
            href="/"
            className="group relative inline-flex items-center justify-center px-8 py-4 font-heading font-medium text-blue-primary bg-neon overflow-hidden transition-transform hover:scale-105 active:scale-95 rounded-full"
          >
            <span className="relative flex items-center gap-2">
              Back to Home
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </Link>
        </motion.div>
      </div>

      {/* Floating Elements Animation */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-neon/10 backdrop-blur-md border border-neon/20"
          style={{
            width: Math.random() * 60 + 20 + "px",
            height: Math.random() * 60 + 20 + "px",
            left: Math.random() * 100 + "%",
            top: Math.random() * 100 + "%",
          }}
          animate={{
            y: [0, Math.random() * -100 - 50],
            x: [0, Math.random() * 50 - 25],
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: Math.random() * 8 + 6,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5,
          }}
        />
      ))}
    </main>
  );
}
