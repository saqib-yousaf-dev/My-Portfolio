"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Briefcase } from "lucide-react";

interface HeroProps {
  greetings: string[];
  greetingIndex: number;
}

export default function Hero({ greetings, greetingIndex }: HeroProps) {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center bg-transparent">
      {/* Speech Bubble */}
      <div className="relative mb-2.5 inline-flex items-center justify-center">
        <div className="relative bg-white border border-black/[0.06] rounded-full px-6 py-1.5 sm:px-6.5 sm:py-1.5 shadow-[0_4px_16px_rgba(0,0,0,0.06)] z-10">
          <AnimatePresence mode="wait">
            <motion.span
              key={greetings[greetingIndex]}
              initial={{ opacity: 0, y: 3 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -3 }}
              transition={{ duration: 0.2 }}
              className="inline-block font-display font-semibold text-[#111215] text-sm sm:text-base select-none tracking-tight"
            >
              {greetings[greetingIndex]}
            </motion.span>
          </AnimatePresence>
          <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-r border-b border-black/[0.06] rotate-45 shadow-[2px_2px_4px_rgba(0,0,0,0.02)]" />
        </div>

        <svg
          viewBox="0 0 24 24"
          className="absolute -top-3.5 -right-5 w-6 h-6 text-[#e87a24]"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        >
          <path d="M12 2v4M19.07 4.93l-2.83 2.83M22 12h-4" />
        </svg>
      </div>

      {/* Main Title Heading */}
      <h1 className="font-display text-5xl sm:text-7xl md:text-[80px] font-extrabold tracking-[-3px] text-center text-[#111215] leading-[0.98]">
        I&apos;m <span className="text-[#e87a24]">Saqib Yousaf.</span>
       </h1>

      {/* Subtitle */}
      <p className="text-base sm:text-xl md:text-[23px] font-medium text-center text-[#2b2e35] mt-3 max-w-3xl leading-snug tracking-tight">
        I&apos;m Performance Marketing Strategist, Growth Expert{" "}
        <br className="hidden sm:inline" />
        &amp; <span className="text-[#e87a24] font-bold">Web Developer.</span>
      </p>

      {/* 3-Column Hero Grid */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-center mt-2 md:mt-4 pb-14 bg-transparent">
        {/* Left Column */}
        <div className="lg:col-span-3 flex flex-col justify-center order-2 lg:order-1 text-left lg:pr-6 z-20">
          <div className="text-[#e87a24] mb-3 select-none">
            <svg className="w-10 h-10 fill-current" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>

          <p className="text-sm font-medium text-[#555a64]">
            My focus is simple:
          </p>

          <div className="mt-1 font-display text-[26px] sm:text-[28px] lg:text-[30px] font-bold text-[#111215] leading-[1.18] tracking-[-1px]">
            <span>Drive </span>
            <span className="font-extrabold text-[#111215]">Performance</span>
            <span className="text-[#e87a24]">,</span>
            <br />
            <span>Maximize </span>
            <span className="font-extrabold text-[#e87a24]">Growth</span>
            <span className="text-[#111215]">.</span>
          </div>
        </div>

        {/* Middle Column: Hero Visual */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center relative order-1 lg:order-2 px-2 z-10">
          <div className="relative w-[420px] sm:w-[540px] md:w-[620px] lg:w-[660px] aspect-square flex items-center justify-center bg-transparent">
            <Image
              src="/saqib-dp.png"
              alt="Saqib Yousaf"
              fill
              priority
              className="object-contain pointer-events-none"
              unoptimized
            />
          </div>

          {/* Exact CTA Pod */}
          <div className="relative -mt-12 sm:-mt-16 z-30 inline-flex items-center bg-[#111215] p-1.5 rounded-full border border-white/15 shadow-xl backdrop-blur-md">
            <a
              href="#case-studies"
              className="no-underline text-white bg-[#e87a24] hover:bg-[#cf6617] rounded-full px-8 py-3 text-sm md:text-base font-semibold transition-all flex items-center gap-1.5 hover:-translate-y-0.5 active:translate-y-0"
            >
              Portfolio <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href="https://wa.me/923222111938?text=Hi%20Saqib,%20I%20would%20like%20to%20discuss%20a%20project%20with%20you."
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline text-white hover:bg-white/10 rounded-full px-7 py-3 text-sm md:text-base font-medium transition-all hover:text-[#e87a24]"
            >
              Hire me
            </a>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-3 flex flex-col justify-center order-3 text-left lg:pl-6 z-20">
          <div className="w-12 h-12 rounded-2xl bg-white border border-[#e5e7eb] shadow-sm flex items-center justify-center mb-3">
            <Briefcase className="w-6 h-6 text-[#e87a24] stroke-[2]" />
          </div>

          <div className="font-display text-4xl sm:text-5xl font-extrabold text-[#e87a24] tracking-tight">
            2+ Years
          </div>

          <p className="text-sm font-semibold text-[#111215] mt-1 leading-snug">
            of Experience in Performance Marketing, Growth &amp; Web Development.
          </p>

          <div className="w-8 h-[2.5px] bg-[#e87a24] my-3.5 opacity-90" />

          <p className="text-xs sm:text-sm text-[#4a4d55] leading-relaxed">
            Building high-converting <strong className="text-[#111215] font-extrabold">portfolios</strong> and productive <strong className="text-[#111215] font-extrabold">websites</strong> for agencies, businesses, and marketing teams that drive real results.
          </p>
        </div>
      </div>
    </section>
  );
}