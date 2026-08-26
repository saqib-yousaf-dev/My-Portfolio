"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

export default function Technologies() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
    transition: { duration: 0.6, delay, ease: "easeOut" as const },
  });

  const stackCategories = [
    {
      category: "GROWTH & PERFORMANCE MARKETING",
      skills: [
        { name: "Meta Ads", iconPath: "/meta.svg" },
        { name: "Google Ads", iconPath: "/google-ads.svg" },
        {
          name: "AdsPower Anti-Detect",
          svgNode: (
            <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24">
              <path fill="#0066FF" d="M12 2L2 7l10 5 10-5-10-5zm0 9l-10-5v9l10 5 10-5v-9l-10 5z" />
            </svg>
          ),
        },
        {
          name: "Keitaro Tracker",
          svgNode: (
            <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="9" fill="none" stroke="#e87a24" strokeWidth="2.5" />
              <path d="M12 7v5l3 3" fill="none" stroke="#e87a24" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          ),
        },
        {
          name: "Meta Conversion CAPI",
          svgNode: (
            <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24">
              <path fill="#0081FB" d="M4 6h16v12H4z" />
              <path stroke="#ffffff" strokeWidth="2" d="M4 10h16M10 6v12" />
            </svg>
          ),
        },
        { name: "Shopify", iconPath: "/shopify.svg" },
        { name: "Google Analytics 4", iconPath: "/google-analytics.svg" },
        { name: "TikTok Ads", iconPath: "/tiktok.svg" },
        { name: "Google AdSense", iconPath: "/google-adsense.svg" },
      ],
    },
    {
      category: "TRACKING, CLOUD & DATA INFRASTRUCTURE",
      skills: [
        { name: "Google Tag Manager", iconPath: "/google-tag-manager.svg" },
        { name: "Cloudflare", iconPath: "/cloudflare.svg" },
        { name: "Custom Webhooks", iconPath: "/webhooks.svg" },
        { name: "Firebase", iconPath: "/firebase.svg" },
        { name: "Supabase", iconPath: "/supabase.svg" },
        { name: "PostgreSQL", iconPath: "/postgresql.svg" },
        { name: "MongoDB", iconPath: "/mongodb.svg" },
        { name: "MySQL", iconPath: "/mysql.svg" },
        { name: "GCP API", iconPath: "/gcp-api.svg" },
      ],
    },
    {
      category: "FULL-STACK WEB & SOFTWARE ENGINEERING",
      skills: [
        { name: "Next.js", iconPath: "/nextdotjs.svg" },
        { name: "Tailwind CSS", iconPath: "/tailwind-css.svg" },
        {
          name: "TypeScript & JS",
          svgNode: (
            <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24">
              <path fill="#3178C6" d="M2 3h9v18H2V3zm11 0h9v18h-9V3z" />
              <path fill="#FFFFFF" d="M4.5 7.8h4.2v1.4H7v7.3H5.5V9.2H4.5V7.8zm10.8 7c.4.6.9.9 1.6.9.7 0 1.2-.4 1.2-.9 0-.6-.5-.8-1.3-1.2l-.5-.2c-1.3-.6-2.1-1.2-2.1-2.7 0-1.4 1.1-2.4 2.7-2.4 1.2 0 2.1.4 2.7 1.5l-1.3.8c-.3-.5-.7-.7-1.4-.7-.6 0-1 .3-1 .8 0 .5.4.7 1.1 1l.5.2c1.5.7 2.4 1.3 2.4 2.9 0 1.7-1.3 2.6-3 2.6-1.6 0-2.7-.8-3.1-1.9l1.5-.9z" />
            </svg>
          ),
        },
        {
          name: "Python",
          svgNode: (
            <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24">
              <path fill="#3776AB" d="M11.91 2c-5.27 0-4.94 2.28-4.94 2.28l.01 2.36h5.02v.71H4.96S2 7.02 2 12.33c0 5.3 2.58 5.12 2.58 5.12h1.54v-2.16s-.08-2.58 2.54-2.58h4.37s2.46.04 2.46-2.42V4.42S15.89 2 11.91 2z" />
              <path fill="#FFD43B" d="M12.09 22c5.27 0 4.94-2.28 4.94-2.28l-.01-2.36h-5.02v-.71h7.04s2.96.33 2.96-4.98c0-5.3-2.58-5.12-2.58-5.12h-1.54v2.16s.08 2.58-2.54 2.58h-4.37s-2.46-.04-2.46 2.42v8.19s-.4 2.42 3.58 2.42z" />
            </svg>
          ),
        },
        { name: "PHP", iconPath: "/php.svg" },
        { name: "Laravel", iconPath: "/laravel.svg" },
        { name: "Node.js", iconPath: "/nodedotjs.svg" },
        { name: "Git", iconPath: "/git.svg" },
        { name: "GitHub", iconPath: "/github.svg" },
        { name: "Vercel", iconPath: "/vercel.svg" },
      ],
    },
    {
      category: "AI SYSTEMS, LLMS & AUTOMATION",
      skills: [
        { name: "OpenAI", iconPath: "/openai.svg" },
        { name: "Claude API", iconPath: "/claude.svg" },
        {
          name: "RAG Architecture",
          svgNode: (
            <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24">
              <path fill="#e87a24" d="M4 6h16v3H4zM4 11h16v3H4zM4 16h16v3H4z" />
              <circle cx="7" cy="7.5" r="1" fill="#ffffff" />
              <circle cx="7" cy="12.5" r="1" fill="#ffffff" />
              <circle cx="7" cy="17.5" r="1" fill="#ffffff" />
            </svg>
          ),
        },
        { name: "LangGraph", iconPath: "/langgraph.svg" },
        { name: "LangChain", iconPath: "/file.svg" },
        { name: "n8n Automation", iconPath: "/n8n.svg" },
        { name: "Make / Integromat", iconPath: "/make.svg" },
      ],
    },
  ];

  return (
    <div ref={sectionRef} className="max-w-6xl mx-auto px-6 md:px-12">
      {/* Eyebrow and Heading */}
      <motion.div {...fadeUp(0)} className="mb-14">
        <span className="text-[#e87a24] text-xs font-bold uppercase tracking-[3px] font-display block mb-3">
          STACK
        </span>
        <h2 className="font-display text-4xl sm:text-5xl md:text-[54px] font-extrabold text-[#111215] tracking-[-2px] leading-tight">
          Technologies I <span className="text-[#e87a24]">work with</span>
        </h2>
      </motion.div>

      {/* Categorized Rows */}
      <div className="flex flex-col gap-10">
        {stackCategories.map((cat, catIdx) => (
          <motion.div key={cat.category} {...fadeUp(0.1 + catIdx * 0.08)} className="flex flex-col gap-3.5">
            <span className="text-xs font-bold tracking-[2px] text-[#6b7280] uppercase font-display">
              {cat.category}
            </span>

            <div className="flex flex-wrap gap-2.5 sm:gap-3">
              {cat.skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  whileHover={{ y: -3, scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="group relative inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white hover:bg-white border border-black/[0.08] hover:border-[#e87a24] shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_16px_rgba(232,122,36,0.22)] transition-all duration-200 cursor-default select-none backdrop-blur-sm"
                >
                  <div className="absolute inset-0 rounded-full bg-[#e87a24]/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                  {skill.iconPath ? (
                    <div className="w-4 h-4 relative flex items-center justify-center flex-shrink-0">
                      <Image
                        src={skill.iconPath}
                        alt={skill.name}
                        fill
                        className="object-contain"
                        unoptimized
                      />
                    </div>
                  ) : (
                    skill.svgNode
                  )}

                  <span className="text-xs sm:text-sm font-semibold text-[#111215] group-hover:text-[#e87a24] transition-colors">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}