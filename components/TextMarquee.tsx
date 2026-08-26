"use client";

import { motion } from "framer-motion";

export default function TextMarquee() {
  const statements = [
    "SCALE E-COMMERCE ROAS",
    "BUILD HIGH-PERFORMANCE WEB APPS",
    "DEPLOY INTELLIGENT AI CHATBOTS",
    "LOSSLESS CAPI & SERVER-SIDE TRACKING",
    "MULTI-ACCOUNT MEDIA BUYING",
    "HIGH-CONVERTING LANDING PAGES",
  ];

  return (
    <section className="w-full bg-[#e3e3e3] text-[#111215] py-5 border-y border-black/[0.08] relative overflow-hidden select-none">
      <div className="w-full relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <motion.div
          className="flex w-max gap-8 items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 22,
          }}
        >
          {[...statements, ...statements].map((text, idx) => (
            <div key={idx} className="flex items-center gap-8 whitespace-nowrap">
              <span className="font-display font-extrabold text-sm sm:text-base tracking-wider uppercase text-[#111215]/85">
                {text}
              </span>
              <span className="w-2 h-2 rounded-full bg-[#e87a24]" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}