"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import {
  motion,
  useInView,
  useScroll,
  useSpring,
} from "framer-motion";
import gsap from "gsap";
import { MapPin, ArrowUpRight, BriefcaseBusiness } from "lucide-react";

export default function Experience() {
  const containerRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(containerRef, {
    once: true,
    margin: "-100px",
  });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 75%", "end 80%"],
  });

  const lineHeight = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  /*
   * GSAP — subtle timeline entrance
   */
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!timelineRef.current) return;

      gsap.fromTo(
        timelineRef.current,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          delay: 0.15,
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const customIcons = {
    telegram: (
      <svg
        className="h-3.5 w-3.5 shrink-0"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          fill="#229ED9"
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.75-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"
        />
      </svg>
    ),

    adsPower: (
      <svg
        className="h-3.5 w-3.5 shrink-0"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          fill="#0066FF"
          d="M12 2L2 7l10 5 10-5-10-5zm0 9l-10-5v9l10 5 10-5v-9l-10 5z"
        />
      </svg>
    ),

    keitaro: (
      <svg
        className="h-3.5 w-3.5 shrink-0"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <circle
          cx="12"
          cy="12"
          r="9"
          fill="none"
          stroke="#e87a24"
          strokeWidth="2.5"
        />

        <path
          d="M12 7v5l3 3"
          fill="none"
          stroke="#e87a24"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    ),

    energy: (
      <svg
        className="h-3.5 w-3.5 shrink-0"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          fill="#e87a24"
          d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
        />
      </svg>
    ),

    growth: (
      <svg
        className="h-3.5 w-3.5 shrink-0"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          fill="#e87a24"
          d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"
        />
      </svg>
    ),
  };

  const timelineData = [
    {
      period: "JUN 2026 – PRESENT",
      badge: "CAPI & Telegram Joiners",
      title: "Meta Ads Expert",
      company: "BA Marketing INC",
      location: "Dover, Delaware, USA (Remote)",
      current: true,
      description:
        "Operate and scale high-budget Meta Ads campaigns dedicated to driving targeted Telegram channel joiners and community subscribers. Manage daily budgets of $1,000–$1,500+ across 8–10+ accounts using AdsPower anti-detect browser. Deploy Keitaro tracking and Meta Conversions API (CAPI) with custom webhook event routing to attribute channel join requests in real time, sustaining a high-volume pipeline of qualified subscriber acquisitions.",
      tags: [
        { name: "Meta Ads", iconPath: "/meta.svg" },
        {
          name: "Telegram Channel Joiners",
          svgNode: customIcons.telegram,
        },
        { name: "Meta CAPI", iconPath: "/meta-icon.svg" },
        {
          name: "Keitaro Tracker",
          svgNode: customIcons.keitaro,
        },
        {
          name: "AdsPower Anti-Detect",
          svgNode: customIcons.adsPower,
        },
        {
          name: "High-Budget Media Buying",
          svgNode: customIcons.energy,
        },
        {
          name: "$1.5K+/Day Spend",
          svgNode: customIcons.growth,
        },
      ],
    },

    {
      period: "MAY 2025 – APR 2026",
      badge: "E-Commerce Scaling",
      title: "Senior Meta Ads & Performance Strategist",
      company: "Elvora Strategies",
      location: "Liverpool, UK (Remote)",
      current: false,
      description:
        "Manage end-to-end Facebook and Instagram advertising campaigns focused on e-commerce brand scaling, lead generation, and business development. Oversee marketing strategies including Google Ads to scale online store sales and maximize ROAS. Plan, execute, and optimize ad creative angles, testing reels and promotional copies to drive 100+ qualified leads and sales monthly while reducing customer acquisition costs by 10–15%.",
      tags: [
        { name: "Meta Ads", iconPath: "/meta.svg" },
        { name: "Google Ads", iconPath: "/google-ads.svg" },
        {
          name: "E-Commerce Scaling",
          svgNode: customIcons.growth,
        },
        {
          name: "Dropshipping Brands",
          iconPath: "/shopify.svg",
        },
        {
          name: "Target ROAS Lift",
          svgNode: customIcons.energy,
        },
        {
          name: "Creative Testing",
          iconPath: "/google-analytics.svg",
        },
      ],
    },

    {
      period: "MAY 2025 – APR 2026",
      badge: "Solar Lead Acquisition",
      title: "Social Media & Meta Ads Specialist",
      company: "Elvora Powers",
      location: "Liverpool, UK (Remote)",
      current: false,
      description:
        "Executed high-intent Meta advertising campaigns targeted at acquiring qualified leads for residential and commercial solar panel installations. Structured localized lead generation funnels with instant qualification forms, testing ad angles centered around zero-upfront costs and energy savings to improve conversion rates by 10–20%.",
      tags: [
        {
          name: "Solar Lead Generation",
          svgNode: customIcons.energy,
        },
        { name: "Meta Ads", iconPath: "/meta.svg" },
        {
          name: "Instant Forms",
          iconPath: "/webhooks.svg",
        },
        {
          name: "Conversion Optimization",
          svgNode: customIcons.growth,
        },
        {
          name: "Localized Targeting",
          iconPath: "/meta-icon.svg",
        },
      ],
    },

    {
      period: "JAN 2024 – PRESENT",
      badge: "Web Dev & Paid Acquisition",
      title: "Freelance Front-End Developer & Meta Ads Expert",
      company: "Fiverr",
      location: "Multan, Pakistan (Global Clients)",
      current: true,
      description:
        "Delivered 20+ freelance projects including portfolio websites, responsive web design, and digital marketing solutions for international clients. Designed and developed 10+ modern websites using HTML, CSS, JavaScript, Tailwind CSS, Bootstrap, and PHP while managing client ad accounts to improve acquisition volume and brand visibility.",
      tags: [
        { name: "Next.js", iconPath: "/nextdotjs.svg" },
        {
          name: "Tailwind CSS",
          iconPath: "/tailwind-css.svg",
        },
        {
          name: "PHP Development",
          iconPath: "/php.svg",
        },
        { name: "Meta Ads", iconPath: "/meta.svg" },
        {
          name: "20+ Delivered Projects",
          svgNode: customIcons.energy,
        },
      ],
    },

    {
      period: "JUN 2025 – SEP 2026",
      badge: "Full-Stack Development",
      title: "PHP Developer Intern",
      company: "Developer Hub Corporation",
      location: "Lahore, Pakistan",
      current: false,
      description:
        "Developed and maintained 5+ dynamic, responsive web applications using PHP, MySQL, HTML, CSS, Bootstrap, and JavaScript. Built website functionalities that improved page performance and user experience, collaborating with senior developers to manage databases and resolve critical system bugs.",
      tags: [
        { name: "PHP", iconPath: "/php.svg" },
        { name: "MySQL", iconPath: "/mysql.svg" },
        {
          name: "Database Architecture",
          iconPath: "/postgresql.svg",
        },
        {
          name: "GitHub Workflows",
          iconPath: "/github.svg",
        },
        {
          name: "REST APIs",
          iconPath: "/webhooks.svg",
        },
      ],
    },
  ];

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-[#ededed] py-24 sm:py-28 lg:py-32"
    >
      {/* Very subtle ambient light */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-120px] top-[25%] h-72 w-72 rounded-full bg-[#e87a24]/[0.025] blur-[110px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-140px] bottom-[10%] h-80 w-80 rounded-full bg-white/70 blur-[120px]"
      />

      <div className="mx-auto max-w-6xl px-6 md:px-12">
        {/* ═══════════════════════════════════════════
            HEADER
        ═══════════════════════════════════════════ */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {}
          }
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-14 text-left sm:mb-16"
        >
          <div className="mb-3 flex items-center gap-3">
            <span className="font-display text-[10px] font-bold uppercase tracking-[0.28em] text-[#e87a24]">
              Career & Track Record
            </span>

            <div className="h-px w-12 bg-[#e87a24]/40" />

            <BriefcaseBusiness className="h-3.5 w-3.5 text-[#e87a24]/60" />
          </div>

          <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div>
              <h2 className="font-display text-4xl font-extrabold leading-[1] tracking-[-2px] text-[#111215] sm:text-5xl md:text-[54px]">
                Work{" "}
                <span className="relative text-[#e87a24]">
                  Experience
                  <span className="absolute -bottom-1 left-0 h-[3px] w-[38%] rounded-full bg-[#e87a24]/20" />
                </span>
              </h2>

              <p className="mt-3 max-w-xl text-sm font-medium leading-6 text-[#5a606d] sm:text-base">
                A timeline of managing high-budget ad infrastructure,
                scaling e-commerce brands, and engineering production
                software.
              </p>
            </div>

            {/* Experience count */}

            <div className="flex items-center gap-3 self-start rounded-2xl border border-black/[0.06] bg-white/70 px-4 py-3 shadow-[0_8px_25px_rgba(0,0,0,0.025)] backdrop-blur-md lg:self-end">
              <div className="font-display text-2xl font-extrabold tracking-[-1px] text-[#111215]">
                05
              </div>

              <div className="h-8 w-px bg-black/[0.08]" />

              <div className="text-[9px] font-bold uppercase leading-4 tracking-[0.15em] text-[#858a93]">
                Career
                <br />
                Milestones
              </div>
            </div>
          </div>
        </motion.div>

        {/* ═══════════════════════════════════════════
            TIMELINE
        ═══════════════════════════════════════════ */}

        <div
          ref={timelineRef}
          className="relative pl-7 sm:pl-11"
        >
          {/* Base timeline */}

          <div className="absolute bottom-7 left-0 top-7 w-px bg-black/[0.08]" />

          {/* Animated orange timeline */}

          <motion.div
            style={{
              scaleY: lineHeight,
              originY: 0,
            }}
            className="absolute bottom-7 left-0 top-7 w-[2px] bg-gradient-to-b from-[#e87a24] via-[#e87a24] to-[#d56c1b] shadow-[0_0_10px_rgba(232,122,36,0.35)]"
          />

          <div className="flex flex-col gap-8 sm:gap-10">
            {timelineData.map((item, idx) => (
              <motion.article
                key={`${item.company}-${item.title}`}
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  margin: "-70px",
                }}
                transition={{
                  duration: 0.65,
                  delay: idx * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative"
              >
                {/* Timeline node */}

                <div className="absolute -left-7 top-8 z-20 flex -translate-x-1/2 items-center justify-center sm:-left-11">
                  <div className="absolute h-7 w-7 rounded-full bg-[#e87a24]/[0.07] opacity-0 transition-all duration-500 group-hover:scale-150 group-hover:opacity-100" />

                  <div className="relative h-3.5 w-3.5 rounded-full border-[3px] border-[#ededed] bg-[#e87a24] shadow-[0_0_0_1px_rgba(232,122,36,0.25),0_0_12px_rgba(232,122,36,0.35)] transition-transform duration-300 group-hover:scale-125" />
                </div>

                {/* ═══════════════════════════════════
                    EXPERIENCE CARD
                ═══════════════════════════════════ */}

                <motion.div
                  whileHover={{
                    y: -3,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="relative overflow-hidden rounded-[24px] border border-black/[0.055] bg-white/75 p-5 shadow-[0_8px_30px_rgba(0,0,0,0.025)] backdrop-blur-md transition-all duration-400 hover:border-[#e87a24]/25 hover:bg-white hover:shadow-[0_18px_45px_rgba(232,122,36,0.075)] sm:p-7"
                >
                  {/* Left hover accent */}

                  <div className="absolute bottom-0 left-0 top-0 w-[3px] origin-bottom scale-y-0 bg-[#e87a24] transition-transform duration-500 group-hover:scale-y-100" />

                  {/* Top metadata */}

                  <div className="mb-3 flex flex-col gap-2.5 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-3">
                      <span className="font-display text-[10px] font-bold uppercase tracking-[0.2em] text-[#e87a24] sm:text-xs">
                        {item.period}
                      </span>

                      {item.current && (
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-[#e87a24]/15 bg-[#e87a24]/[0.06] px-2 py-1 text-[8px] font-bold uppercase tracking-[0.12em] text-[#e87a24]">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#e87a24]" />
                          Current
                        </span>
                      )}
                    </div>

                    <span className="inline-flex w-fit items-center rounded-full border border-[#e87a24]/15 bg-[#e87a24]/[0.06] px-3 py-1.5 text-[9px] font-bold text-[#e87a24]">
                      {item.badge}
                    </span>
                  </div>

                  {/* Title */}

                  <h3 className="font-display text-xl font-extrabold tracking-[-0.6px] text-[#111215] transition-colors duration-300 group-hover:text-[#e87a24] sm:text-2xl">
                    {item.title}
                  </h3>

                  {/* Company / Location */}

                  <div className="mt-2 flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-xs font-semibold text-[#707680] sm:text-sm">
                    <span className="font-bold text-[#202227]">
                      {item.company}
                    </span>

                    <span className="text-[#b4b7bc]">•</span>

                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 text-[#e87a24]" />

                      {item.location}
                    </span>
                  </div>

                  {/* Description */}

                  <p className="mt-5 max-w-4xl text-xs font-medium leading-6 text-[#555b65] sm:text-sm">
                    {item.description}
                  </p>

                  {/* Tags */}

                  <div className="mt-6 border-t border-black/[0.055] pt-4">
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, tagIdx) => (
                        <motion.span
                          key={`${tag.name}-${tagIdx}`}
                          whileHover={{
                            y: -2,
                          }}
                          className="group/tag inline-flex cursor-default select-none items-center gap-2 rounded-xl border border-black/[0.045] bg-[#f7f7f7] px-3 py-1.5 text-[10px] font-semibold text-[#3d4148] transition-all duration-250 hover:border-[#e87a24]/25 hover:bg-white hover:text-[#e87a24] hover:shadow-[0_5px_14px_rgba(232,122,36,0.08)] sm:text-[11px]"
                        >
                          {tag.iconPath ? (
                            <div className="relative flex h-3.5 w-3.5 shrink-0 items-center justify-center">
                              <Image
                                src={tag.iconPath}
                                alt=""
                                fill
                                sizes="14px"
                                className="object-contain transition-transform duration-300 group-hover/tag:scale-110"
                                unoptimized
                              />
                            </div>
                          ) : (
                            tag.svgNode
                          )}

                          <span>{tag.name}</span>
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Tiny corner indicator */}

                  <div className="pointer-events-none absolute right-5 top-5 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100">
                    <ArrowUpRight className="h-4 w-4 text-[#e87a24]/60" />
                  </div>
                </motion.div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Bottom line */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          className="mt-12 flex items-center gap-3 border-t border-black/[0.06] pt-6"
        >
          <span className="h-2 w-2 rounded-full bg-[#e87a24] shadow-[0_0_0_5px_rgba(232,122,36,0.07)]" />

          <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#858a93]">
            Building, scaling & learning continuously
          </span>
        </motion.div>
      </div>
    </section>
  );
}