"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#about" },
  { label: "Our Services", href: "#services", hasDropdown: true },
  { label: "Portfolio", href: "#portfolio", hasDropdown: true },
  { label: "Pages", href: "#pages", hasDropdown: true },
  { label: "Contact Us", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.nav
      className="relative z-[1000] py-5"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 no-underline">
          <svg
            className="flex-shrink-0"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              d="M16 0L19.5 12.5L32 16L19.5 19.5L16 32L12.5 19.5L0 16L12.5 12.5L16 0Z"
              fill="#c8ff00"
            />
          </svg>
          <div className="flex flex-col relative">
            <span className="font-heading text-2xl font-extrabold text-white tracking-[3px] leading-none">
              AURELIA
            </span>
            <span className="absolute -top-0.5 -right-3.5 text-[10px] font-bold text-white">
              ®
            </span>
            <span className="font-heading text-[9px] font-medium text-neon tracking-[5px] uppercase">
              AGENCY
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <li key={i} className="relative group">
              <a
                href={link.href}
                className="flex items-center gap-1.5 text-[13px] font-medium text-white uppercase tracking-wide hover:text-neon transition-colors duration-200 whitespace-nowrap"
              >
                {link.label}
                {link.hasDropdown && (
                  <svg
                    className="transition-transform duration-200 group-hover:rotate-180"
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                  >
                    <path
                      d="M1 1L5 5L9 1"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* WhatsApp CTA */}
        <div className="hidden lg:flex items-center">
          <a
            href="https://wa.me/4387956739876"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 bg-neon rounded-full group hover:bg-white transition-all duration-300"
          >
            <span className="font-heading text-xs font-black text-blue-primary uppercase tracking-widest whitespace-nowrap">
              Schedule a Call
            </span>
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="flex lg:hidden flex-col gap-[5px] p-2 z-[1001]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-[26px] h-[2px] bg-white rounded transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`}
          />
          <span
            className={`block w-[26px] h-[2px] bg-white rounded transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-[26px] h-[2px] bg-white rounded transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="lg:hidden overflow-hidden bg-blue-deep border-t border-neon/15"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <ul className="flex flex-col px-8 py-5">
              {navLinks.map((link, i) => (
                <motion.li
                  key={i}
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.07, duration: 0.4 }}
                >
                  <a
                    href={link.href}
                    className="block py-3.5 font-heading text-lg font-semibold text-white uppercase tracking-wide border-b border-white/[0.08] hover:text-neon transition-colors duration-200"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="px-8 pb-10">
              <a
                href="https://wa.me/4387956739876"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full py-4 bg-neon rounded-sm font-heading text-blue-primary font-black uppercase tracking-widest text-sm"
              >
                Schedule a Call
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
