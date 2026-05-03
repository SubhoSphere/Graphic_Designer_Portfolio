"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  subject: z.string().min(2, 'Subject is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus('success');
        reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error(error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen lg:h-screen flex flex-col lg:flex-row overflow-hidden">
      
      {/* Left Column - Form */}
      <div className="w-full lg:w-1/2 bg-[#111111] py-20 lg:py-0 px-8 md:px-16 lg:px-24 flex flex-col justify-center relative">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-[500px] w-full mx-auto lg:mx-0"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-black text-white uppercase mb-8 lg:mb-10">
            Send A Message.
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 lg:space-y-8">
            <div className="relative group">
              <input
                type="text"
                placeholder="Name *"
                {...register("name")}
                className={`w-full bg-transparent border-b ${errors.name ? 'border-red-500' : 'border-neon/30 focus:border-neon'} py-3 text-sm text-white placeholder:text-white/40 focus:outline-none transition-colors font-medium`}
              />
              {errors.name && <span className="absolute -bottom-5 left-0 text-[10px] text-red-500">{errors.name.message}</span>}
            </div>
            
            <div className="relative group">
              <input
                type="email"
                placeholder="Email Address *"
                {...register("email")}
                className={`w-full bg-transparent border-b ${errors.email ? 'border-red-500' : 'border-neon/30 focus:border-neon'} py-3 text-sm text-white placeholder:text-white/40 focus:outline-none transition-colors font-medium`}
              />
              {errors.email && <span className="absolute -bottom-5 left-0 text-[10px] text-red-500">{errors.email.message}</span>}
            </div>

            <div className="relative group">
              <input
                type="tel"
                placeholder="Telephone (Optional)"
                {...register("phone")}
                className="w-full bg-transparent border-b border-neon/30 focus:border-neon py-3 text-sm text-white placeholder:text-white/40 focus:outline-none transition-colors font-medium"
              />
            </div>

            <div className="relative group">
              <input
                type="text"
                placeholder="Subject *"
                {...register("subject")}
                className={`w-full bg-transparent border-b ${errors.subject ? 'border-red-500' : 'border-neon/30 focus:border-neon'} py-3 text-sm text-white placeholder:text-white/40 focus:outline-none transition-colors font-medium`}
              />
              {errors.subject && <span className="absolute -bottom-5 left-0 text-[10px] text-red-500">{errors.subject.message}</span>}
            </div>

            <div className="relative group pt-2">
              <textarea
                placeholder="Message *"
                rows="3"
                {...register("message")}
                className={`w-full bg-transparent border-b ${errors.message ? 'border-red-500' : 'border-neon/30 focus:border-neon'} py-3 text-sm text-white placeholder:text-white/40 focus:outline-none transition-colors font-medium resize-none`}
              ></textarea>
              {errors.message && <span className="absolute -bottom-5 left-0 text-[10px] text-red-500">{errors.message.message}</span>}
            </div>

            <div className="pt-4 flex items-center gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-10 py-3.5 border border-neon rounded-sm text-[10px] font-bold uppercase tracking-[2px] text-white hover:bg-neon hover:text-blue-primary transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  "Submit Your Inquiry"
                )}
              </button>
              
              <AnimatePresence>
                {submitStatus === 'success' && (
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-neon text-xs font-medium"
                  >
                    Message sent successfully!
                  </motion.span>
                )}
                {submitStatus === 'error' && (
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-red-500 text-xs font-medium"
                  >
                    Failed to send message.
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
          </form>
        </motion.div>
      </div>

      {/* Right Column - Info */}
      <div className="w-full lg:w-1/2 bg-[#f2f2f2] bg-grain py-20 lg:py-0 px-8 md:px-16 lg:px-24 flex flex-col justify-center relative">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8 lg:space-y-12 w-full max-w-[500px] mx-auto lg:mx-0"
        >
          <div className="space-y-3 lg:space-y-4">
            <div className="flex items-center gap-3">
              <svg width="20" height="20" viewBox="0 0 32 32" fill="none">
                <path
                  d="M16 0L19.5 12.5L32 16L19.5 19.5L16 32L12.5 19.5L0 16L12.5 12.5L16 0Z"
                  fill="#ffff33"
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
                <p className="text-blue-primary font-bold text-xs lg:text-sm">{process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact@reshabcreative.com"}</p>
              </div>
              <div className="space-y-1">
                <span className="text-black font-bold uppercase tracking-wider text-[10px]">Phone</span>
                <p className="text-blue-primary font-bold text-xs lg:text-sm">{process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+1 (555) 123-4567"}</p>
              </div>
              <div className="space-y-1">
                <span className="text-black font-bold uppercase tracking-wider text-[10px]">Office Address</span>
                <p className="text-blue-primary font-bold text-xs lg:text-sm leading-tight">{process.env.NEXT_PUBLIC_OFFICE_ADDRESS || "123 Creative Ave, USA"}</p>
              </div>
              <div className="space-y-1">
                <span className="text-black font-bold uppercase tracking-wider text-[10px]">Hours</span>
                <p className="text-blue-primary font-bold text-xs lg:text-sm">{process.env.NEXT_PUBLIC_BUSINESS_HOURS || "9:00 AM - 6:00 PM"}</p>
              </div>
            </div>
          </div>

          {/* Map Snippet */}
          <div className="relative h-40 lg:h-48 w-full group overflow-hidden rounded-sm border border-black/5 shadow-inner">
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
