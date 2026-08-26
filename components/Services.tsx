"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import gsap from "gsap";
import {
  ShoppingCart,
  Target,
  Activity,
  Bot,
  Code2,
  LayoutTemplate,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerLineRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(sectionRef, {
    once: true,
    margin: "-100px",
  });

  /* ─────────────────────────────────────────
     GSAP — subtle header line animation
  ───────────────────────────────────────── */

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!headerLineRef.current) return;

      gsap.fromTo(
        headerLineRef.current,
        {
          scaleX: 0,
          transformOrigin: "left center",
        },
        {
          scaleX: 1,
          duration: 1,
          delay: 0.15,
          ease: "power3.out",
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const fadeUp = (delay = 0) => ({
    initial: {
      opacity: 0,
      y: 30,
    },
    animate: isInView
      ? {
          opacity: 1,
          y: 0,
        }
      : {
          opacity: 0,
          y: 30,
        },
    transition: {
      duration: 0.65,
      delay,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  });

  const customIcons = {
    // 🎨 New Custom, Colorful Keitaro SVG
    keitaro: (
      <svg
        className="h-full w-full"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M5.5 3v18h4v-7.5l4.5 7.5h5.5l-6.5-9 6-9h-5.5L9.5 11.5V3h-4z"
          fill="url(#keitaro-grad-1)"
        />
        <path
          d="M13 12l6.5 9h-5.5L9.5 13.5 13 12z"
          fill="url(#keitaro-grad-2)"
        />
        <defs>
          <linearGradient
            id="keitaro-grad-1"
            x1="5.5"
            y1="3"
            x2="19.5"
            y2="21"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#00F260" />
            <stop offset="1" stopColor="#0575E6" />
          </linearGradient>
          <linearGradient
            id="keitaro-grad-2"
            x1="9.5"
            y1="12"
            x2="19.5"
            y2="21"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FF416C" />
            <stop offset="1" stopColor="#FF4B2B" />
          </linearGradient>
        </defs>
      </svg>
    ),
  };

  const services = [
    {
      number: "01",
      type: "GROWTH",
      icon: <ShoppingCart className="h-6 w-6" />,
      title: "E-Commerce & Brand Scaling",
      description:
        "I scale online stores through data-driven Meta and Google Ads strategies designed to maximize ROAS, reduce CPA, and create consistent daily revenue.",
      tags: [
        { name: "Meta Ads", iconPath: "/meta.svg" },
        { name: "Google Ads", iconPath: "/google-ads.svg" },
        { name: "Shopify", iconPath: "/shopify.svg" },
      ],
    },

    {
      number: "02",
      type: "ACQUISITION",
      icon: <Target className="h-6 w-6" />,
      title: "High-Intent Lead Generation",
      description:
        "I build targeted acquisition funnels and qualification systems that turn paid traffic into ready-to-close leads for B2B, Solar, and local service businesses.",
      tags: [
        { name: "TikTok Ads", iconPath: "/tiktok.svg" },
        { name: "Meta CAPI", iconPath: "/meta-icon.svg" },
        { name: "Webhooks", iconPath: "/webhooks.svg" },
      ],
    },

    {
      number: "03",
      type: "ATTRIBUTION",
      icon: <Activity className="h-6 w-6" />,
      title: "Advanced Tracking & Attribution",
      description:
        "I build reliable tracking infrastructure that preserves conversion signals and gives you cleaner attribution across your advertising ecosystem.",
      tags: [
        {
          name: "Keitaro Tracker",
          svgNode: customIcons.keitaro,
        },
        {
          name: "GTM",
          iconPath: "/google-tag-manager.svg",
        },
        {
          name: "GA4",
          iconPath: "/google-analytics.svg",
        },
      ],
    },

    {
      number: "04",
      type: "AUTOMATION",
      icon: <Bot className="h-6 w-6" />,
      title: "AI Chatbots & Automation",
      description:
        "I integrate AI agents and automated workflows into your funnels to engage visitors, qualify leads, and move data directly into your systems.",
      tags: [
        { name: "OpenAI", iconPath: "/openai.svg" },
        { name: "n8n", iconPath: "/n8n.svg" },
        { name: "Make", iconPath: "/make.svg" },
      ],
    },

    {
      number: "05",
      type: "ENGINEERING",
      icon: <Code2 className="h-6 w-6" />,
      title: "Full-Stack Web Engineering",
      description:
        "I develop fast, secure, responsive web applications, SaaS platforms, dashboards, and management systems built around real business requirements.",
      tags: [
        { name: "Next.js", iconPath: "/nextdotjs.svg" },
        { name: "Laravel", iconPath: "/laravel.svg" },
        { name: "PostgreSQL", iconPath: "/postgresql.svg" },
      ],
    },

    {
      number: "06",
      type: "CONVERSION",
      icon: <LayoutTemplate className="h-6 w-6" />,
      title: "High-Converting Landing Pages",
      description:
        "I design and develop fast, conversion-focused landing pages and portfolio websites engineered to turn traffic and ad clicks into real business opportunities.",
      tags: [
        { name: "Tailwind CSS", iconPath: "/tailwind-css.svg" },
        { name: "Vercel", iconPath: "/vercel.svg" },
        { name: "GitHub", iconPath: "/github.svg" },
      ],
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#ededed] py-24 sm:py-28 lg:py-32"
    >
      {/* ─────────────────────────────────────────
         SUBTLE AMBIENT LIGHT
      ───────────────────────────────────────── */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-24 h-80 w-80 rounded-full bg-[#e87a24]/[0.035] blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-white/70 blur-[130px]"
      />

      <div className="mx-auto max-w-7xl px-6 md:px-12 relative z-10">
        {/* ─────────────────────────────────────────
            HEADER
        ───────────────────────────────────────── */}

        <motion.div
          {...fadeUp(0)}
          className="mb-14 flex flex-col items-center text-center sm:mb-16"
        >
          {/* Eyebrow */}

          <div className="mb-4 flex items-center gap-3">
            <div
              ref={headerLineRef}
              className="h-px w-10 bg-[#e87a24]/50"
            />

            <div className="flex items-center gap-2">
              <Sparkles className="h-3.5 w-3.5 text-[#e87a24]" />

              <span className="font-display text-[10px] font-bold uppercase tracking-[0.28em] text-[#e87a24]">
                Core Services
              </span>
            </div>

            <div className="h-px w-10 bg-[#e87a24]/50" />
          </div>

          {/* Heading */}

          <h2 className="font-display text-4xl font-extrabold leading-[1] tracking-[-2px] text-[#111215] sm:text-5xl md:text-[56px]">
            How I Can{" "}
            <span className="relative text-[#e87a24]">
              Help You.
              <span className="absolute -bottom-1 left-0 h-[3px] w-[38%] rounded-full bg-[#e87a24]/20" />
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-sm font-medium leading-7 text-[#5a606d] sm:text-[15px]">
            From scaling paid acquisition to building the technology behind
            it, I create growth systems designed around measurable business
            outcomes.
          </p>

          {/* Small positioning line */}

          <div className="mt-6 flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.18em] text-[#92969d]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#e87a24]" />
            Marketing
            <span className="text-black/20">×</span>
            Technology
            <span className="text-black/20">×</span>
            Automation
          </div>
        </motion.div>

        {/* ─────────────────────────────────────────
            SERVICES GRID
        ───────────────────────────────────────── */}

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {services.map((service, idx) => (
            <motion.article
              key={service.number}
              {...fadeUp(0.1 + idx * 0.07)}
              whileHover={{
                y: -6,
              }}
              transition={{
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative flex h-full min-h-[390px] flex-col overflow-hidden rounded-[26px] border border-black/[0.055] bg-white/80 backdrop-blur-sm p-7 shadow-[0_8px_30px_rgba(0,0,0,0.03)] transition-all duration-500 hover:bg-white hover:border-[#e87a24]/30 hover:shadow-[0_20px_50px_rgba(232,122,36,0.08)] sm:p-8"
            >
              {/* Top orange glow */}

              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#e87a24]/[0.045] blur-3xl transition-all duration-700 group-hover:scale-150 group-hover:bg-[#e87a24]/[0.08]" />

              {/* Hover background */}

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#e87a24]/[0.025] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Card top row */}

              <div className="relative z-10 flex items-start justify-between">
                {/* Icon */}

                <motion.div
                  whileHover={{
                    scale: 1.06,
                    rotate: -3,
                  }}
                  className="flex h-14 w-14 items-center justify-center rounded-[17px] border border-[#e87a24]/15 bg-[#e87a24]/[0.055] text-[#e87a24] shadow-[0_5px_18px_rgba(232,122,36,0.06)] transition-all duration-300 group-hover:border-[#e87a24]/30 group-hover:bg-[#e87a24]/[0.09]"
                >
                  {service.icon}
                </motion.div>

                {/* Number */}

                <div className="flex flex-col items-end gap-2">
                  <span className="font-mono text-[10px] font-bold tracking-[0.15em] text-[#e87a24]/60">
                    {service.number}
                  </span>

                  <span className="rounded-full border border-black/[0.06] bg-[#f8f8f8] px-2.5 py-1 text-[8px] font-bold uppercase tracking-[0.14em] text-[#8e939a] transition-colors duration-300 group-hover:border-[#e87a24]/20 group-hover:text-[#e87a24]">
                    {service.type}
                  </span>
                </div>
              </div>

              {/* Main content */}

              <div className="relative z-10 mt-7 flex flex-grow flex-col">
                <h3 className="font-display max-w-[290px] text-[21px] font-extrabold leading-[1.15] tracking-[-0.7px] text-[#111215] transition-colors duration-300 group-hover:text-[#e87a24] sm:text-[22px]">
                  {service.title}
                </h3>

                <p className="mt-4 flex-grow text-[13px] font-medium leading-[1.75] text-[#626873] sm:text-[14px]">
                  {service.description}
                </p>

                {/* Divider */}

                <div className="my-6 h-px w-full bg-black/[0.055]" />

                {/* Tags */}

                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag, tagIdx) => (
                    <motion.span
                      key={`${service.number}-${tag.name}`}
                      whileHover={{
                        y: -2,
                      }}
                      transition={{
                        duration: 0.2,
                      }}
                      className="group/tag inline-flex cursor-default select-none items-center gap-2 rounded-xl border border-black/[0.045] bg-[#f7f7f7] px-3 py-1.5 shadow-[0_2px_7px_rgba(0,0,0,0.015)] transition-all duration-300 hover:border-[#e87a24]/25 hover:bg-white hover:text-[#e87a24] hover:shadow-[0_5px_14px_rgba(232,122,36,0.08)]"
                    >
                      {tag.iconPath ? (
                        <div className="relative h-3.5 w-3.5 shrink-0">
                          <Image
                            src={tag.iconPath}
                            alt=""
                            fill
                            sizes="14px"
                            className="object-contain transition-transform duration-300 group-hover/tag:scale-110"
                            unoptimized
                          />
                        </div>
                      ) : tag.svgNode ? (
                        <div className="h-3.5 w-3.5 shrink-0 text-[#626873] transition-colors duration-300 group-hover/tag:text-[#e87a24]">
                          {tag.svgNode}
                        </div>
                      ) : null}

                      <span className="text-[9px] font-bold uppercase tracking-[0.06em] text-[#555b64] transition-colors duration-300 group-hover/tag:text-[#e87a24] sm:text-[10px]">
                        {tag.name}
                      </span>
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Bottom action */}

              <div className="relative z-10 mt-6 flex items-center justify-between">
                <span className="text-[9px] font-bold uppercase tracking-[0.17em] text-[#a0a4aa] transition-colors duration-300 group-hover:text-[#e87a24]">
                  Let's build
                </span>

                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-black/[0.07] bg-[#fafafa] transition-all duration-300 group-hover:border-[#e87a24]/25 group-hover:bg-[#e87a24]">
                  <ArrowUpRight className="h-3.5 w-3.5 text-[#858a92] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
                </div>
              </div>

              {/* Bottom orange progress line */}

              <div className="absolute bottom-0 left-0 right-0 h-[3px] origin-left scale-x-0 bg-[#e87a24] transition-transform duration-500 ease-out group-hover:scale-x-100" />
            </motion.article>
          ))}
        </div>

        {/* ─────────────────────────────────────────
            BOTTOM STATEMENT
        ───────────────────────────────────────── */}

        <motion.div
          {...fadeUp(0.65)}
          className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-black/[0.06] pt-7 sm:flex-row"
        >
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#e87a24] shadow-[0_0_0_5px_rgba(232,122,36,0.07)]" />

            <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#858a93]">
              Strategy → Execution → Growth
            </span>
          </div>

          <div className="flex items-center gap-2 text-[10px] font-semibold text-[#858a93]">
            <span>Built around measurable outcomes</span>

            <ArrowUpRight className="h-3.5 w-3.5 text-[#e87a24]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}