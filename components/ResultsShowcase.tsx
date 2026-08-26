"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, Sparkles } from "lucide-react";

interface ResultItem {
  id: number;
  title: string;
  subtitle: string;
  src: string;
  tag: string;
}

const resultsData: ResultItem[] = [
  {
    id: 1,
    title: "Keitaro Campaign Tracking & Traffic Routing",
    subtitle: "Real-time conversion tracking, click verification & live ROI dashboard",
    src: "/image-1-keitaro-dashboard.png",
    tag: "Tracking & Analytics",
  },
  {
    id: 2,
    title: "E-Commerce Dropshipping Brand Scaling",
    subtitle: "High-volume website purchases & targeted conversion campaign scaling",
    // Yahan path simple kar diya hai - Apne folder mein bhi file ka naam image-2.jpg kar dein
    src: "/image-2.jpg", 
    tag: "E-Commerce",
  },
  {
    id: 3,
    title: "Full-Funnel Audience Architecture & Retargeting",
    subtitle: "Multi-cluster page engagers and 730-day extended retention targeting",
    src: "/image-3-retargeting-setup-for-brand.png",
    tag: "Audience Setup",
  },
  {
    id: 4,
    title: "High-Volume Lead Generation & ROAS Scaling",
    subtitle: "8.4K+ qualified leads at $1.74 CPL with 27.86x estimated pipeline value",
    src: "/image-4-solar-leads.jpg",
    tag: "Lead Generation",
  },
  {
    id: 5,
    title: "Multi-Account Facebook API Integration",
    subtitle: "Keitaro server-side CAPI integration across GER, UK & UAE profiles",
    src: "/image-5-ad-acc-integration.png",
    tag: "Infrastructure",
  },
];

export default function ResultsShowcase() {
  const [activeImage, setActiveImage] = useState<ResultItem | null>(null);

  return (
    <div className="max-w-6xl mx-auto px-6 md:px-12">
      <div className="mb-14 sm:mb-18 text-left">
        <div className="flex items-center gap-3 mb-2.5">
          <span className="text-[#e87a24] text-xs font-bold uppercase tracking-[3px] font-display">
            PROVEN TRACK RECORD
          </span>
          <div className="h-[2px] w-12 bg-[#e87a24]/50" />
        </div>
        <h2 className="font-display text-4xl sm:text-5xl md:text-[54px] font-extrabold text-[#111215] tracking-[-2px] leading-tight">
          Live Campaign <span className="text-[#e87a24]">Proof &amp; Data</span>
        </h2>
        <p className="text-sm sm:text-base text-[#5a606d] mt-2 max-w-2xl font-medium">
          Verified backend dashboard metrics, live tracking telemetry, and campaign scaling screenshots. Click any image to view in full resolution.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resultsData.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: idx * 0.08, duration: 0.45 }}
            onClick={() => setActiveImage(item)}
            className={`group relative rounded-3xl overflow-hidden bg-white/90 border border-black/[0.08] hover:border-[#e87a24]/60 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_36px_rgba(232,122,36,0.12)] cursor-pointer flex flex-col justify-between ${
              idx === 0 ? "md:col-span-2 lg:col-span-2" : ""
            }`}
          >
            <div className="relative aspect-video w-full overflow-hidden bg-[#111215]/5">
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#e87a24] text-white text-xs font-bold shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <ZoomIn className="w-4 h-4" /> View Fullscreen
                </span>
              </div>
            </div>

            <div className="p-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-[#e87a24]/10 text-[#e87a24] border border-[#e87a24]/20 mb-2.5">
                <Sparkles className="w-3 h-3" />
                {item.tag}
              </span>
              <h3 className="font-display text-lg sm:text-xl font-bold text-[#111215] group-hover:text-[#e87a24] transition-colors leading-snug">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#5a606d] mt-1.5 leading-relaxed font-medium">
                {item.subtitle}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImage(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full bg-[#111215] border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            >
              <div className="flex items-center justify-between p-4 sm:p-5 border-b border-white/10 bg-white/5 flex-shrink-0">
                <div>
                  <h4 className="font-display font-bold text-base sm:text-lg text-white">
                    {activeImage.title}
                  </h4>
                  <p className="text-xs text-white/60 mt-0.5">
                    {activeImage.subtitle}
                  </p>
                </div>
                <button
                  onClick={() => setActiveImage(null)}
                  className="p-2 rounded-xl bg-white/10 hover:bg-[#e87a24] text-white transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="relative flex-1 overflow-auto flex items-center justify-center p-3 bg-black">
                <Image
                  src={activeImage.src}
                  alt={activeImage.title}
                  width={1400}
                  height={900}
                  className="w-full h-auto object-contain rounded-lg"
                  unoptimized
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}