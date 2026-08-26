"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";

export default function ContactFooter() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-60px" });

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 25 },
    animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 },
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  const socials = [
    { name: "LinkedIn", href: "https://www.linkedin.com/in/saqib-yousaf-dev/", icon: "/linkedin.svg" },
    { name: "GitHub", href: "https://github.com/saqib-yousaf-dev", icon: "/github.svg" },
    { name: "Facebook", href: "https://web.facebook.com/digitalsaqibyousaf/", icon: "/facebook.svg" },
    { name: "Instagram", href: "https://www.instagram.com/digital_saqib_yousaf/", icon: "/instagram.svg" },
  ];

  return (
    <footer
      ref={sectionRef}
      className="relative overflow-hidden bg-[#ededed] border-t border-black/[0.08] pt-20 pb-14 sm:pt-28 sm:pb-20"
    >
      <div className="mx-auto max-w-5xl px-6 md:px-12 relative z-10">
        
        {/* =========================================================
            CLEAN LIGHT-MODE PREMIUM CTA BOX
        ========================================================= */}
        <motion.div
          {...fadeUp(0)}
          className="relative overflow-hidden rounded-[36px] border border-black/[0.08] bg-white p-8 sm:p-14 md:p-18 text-center shadow-[0_12px_40px_rgba(0,0,0,0.04)]"
        >
          {/* Subtle warm ambient glow */}
          <div className="absolute -top-32 -left-32 w-72 h-72 rounded-full bg-[#e87a24]/[0.06] blur-[90px] pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 w-72 h-72 rounded-full bg-[#e87a24]/[0.06] blur-[90px] pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="inline-block font-display text-[11px] font-bold uppercase tracking-[3px] text-[#e87a24] mb-4">
              LET&apos;S WORK TOGETHER
            </span>

            <h2 className="font-display text-3xl sm:text-5xl md:text-[52px] font-extrabold tracking-[-1.5px] leading-[1.1] text-[#111215] mb-6">
              Have a project in mind? <br />
              Let&apos;s build <span className="text-[#e87a24]">something great.</span>
            </h2>

            <p className="text-sm sm:text-base text-[#626773] font-medium leading-relaxed mb-10">
              Drop me a line for media buying partnerships, high-ROAS scaling, or full-stack web engineering.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              
              {/* Email Button */}
              <a
                href="mailto:muhammadsaqibyousaf7@gmail.com"
                className="group inline-flex items-center gap-2.5 bg-[#e87a24] hover:bg-[#cf6617] text-white font-bold px-7 py-4 rounded-2xl text-sm transition-all shadow-[0_8px_25px_rgba(232,122,36,0.3)] hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4" />
                <span>Email Me</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/923222111938"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 bg-white hover:bg-[#fafafa] border border-black/[0.1] text-[#111215] font-bold px-7 py-4 rounded-2xl text-sm transition-all shadow-2xs hover:border-[#25D366] hover:-translate-y-0.5"
              >
                <div className="w-4 h-4 relative flex-shrink-0">
                  <Image
                    src="/whatsapp.svg"
                    alt="WhatsApp"
                    fill
                    className="object-contain"
                    unoptimized
                  />
                </div>
                <span>WhatsApp</span>
                <ArrowUpRight className="w-4 h-4 text-[#6e7480] group-hover:text-[#25D366] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

            </div>
          </div>
        </motion.div>

        {/* =========================================================
            MINIMALIST FOOTER BOTTOM (Icon-Only Socials)
        ========================================================= */}
        <motion.div
          {...fadeUp(0.15)}
          className="mt-16 pt-8 border-t border-black/[0.08] flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Brand info */}
          <div className="flex flex-col items-center md:items-start">
            <span className="font-display text-base font-extrabold tracking-tight text-[#111215]">
              Saqib Yousaf<span className="text-[#e87a24]">.</span>
            </span>
            <p className="text-xs text-[#626773] mt-0.5 font-medium">
              Performance Marketer &amp; Software Developer
            </p>
          </div>

          {/* Social Links Icon-Only Bar */}
          <div className="flex items-center gap-3">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                title={social.name}
                className="group flex items-center justify-center w-10 h-10 rounded-xl bg-white border border-black/[0.08] shadow-2xs hover:border-[#e87a24] hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="relative w-4 h-4 shrink-0 transition-transform duration-300 group-hover:scale-110">
                  <Image
                    src={social.icon}
                    alt={social.name}
                    fill
                    className="object-contain"
                    unoptimized
                  />
                </div>
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-xs text-[#7e848f] font-medium">
            &copy; {new Date().getFullYear()} All rights reserved.
          </div>
        </motion.div>

      </div>
    </footer>
  );
}