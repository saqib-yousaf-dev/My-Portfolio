"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  TrendingUp,
  Code2,
  Bot,
  ArrowUpRight,
  Check,
  Sparkles,
} from "lucide-react";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  const isInView = useInView(sectionRef, {
    once: true,
    margin: "-100px",
  });

  const fadeUp = (delay = 0) => ({
    initial: {
      opacity: 0,
      y: 28,
    },
    animate: isInView
      ? {
          opacity: 1,
          y: 0,
        }
      : {
          opacity: 0,
          y: 28,
        },
    transition: {
      duration: 0.7,
      delay,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  });

  const capabilities = [
    {
      number: "01",
      icon: <TrendingUp className="h-[18px] w-[18px]" />,
      title: "Performance Marketing",
      subtitle: "META ADS · GOOGLE ADS · E-COMMERCE",
      desc: "Scaling paid acquisition with structured campaigns, creative testing, attribution and performance-focused optimization.",
    },
    {
      number: "02",
      icon: <Code2 className="h-[18px] w-[18px]" />,
      title: "Full-Stack Development",
      subtitle: "NEXT.JS · PHP · MYSQL",
      desc: "Building fast, modern websites and portfolio systems engineered for performance, usability and conversion.",
    },
    {
      number: "03",
      icon: <Bot className="h-[18px] w-[18px]" />,
      title: "AI & Attribution",
      subtitle: "CAPI · AUTOMATION · AI AGENTS",
      desc: "Connecting marketing data with server-side tracking and intelligent automation to turn traffic into measurable results.",
    },
  ];

  const stats = [
    {
      value: "$1.5K+",
      label: "DAILY AD SPEND",
    },
    {
      value: "8–10+",
      label: "AD ACCOUNTS",
    },
    {
      value: "2+",
      label: "YEARS EXPERIENCE",
    },
    {
      value: "3x+",
      label: "TARGET ROAS",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative isolate overflow-hidden bg-[#ededed] py-24 sm:py-28 lg:py-32"
    >
      {/* Very subtle light ambient glow — NOT a circle behind the image */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[8%] top-[30%] -z-10 h-64 w-64 rounded-full bg-[#e87a24]/[0.035] blur-[100px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[5%] bottom-[5%] -z-10 h-72 w-72 rounded-full bg-white/80 blur-[100px]"
      />

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* ─────────────────────────────────────────────
            SECTION LABEL
        ───────────────────────────────────────────── */}

        <motion.div
          {...fadeUp(0)}
          className="mb-14 flex items-center gap-4"
        >
          <span className="font-display text-[11px] font-bold uppercase tracking-[0.28em] text-[#e87a24]">
            About Me
          </span>

          <div className="h-px w-16 bg-[#e87a24]/45" />

          <span className="hidden text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8a8f98] sm:block">
            Performance · Development · Growth
          </span>
        </motion.div>

        {/* ─────────────────────────────────────────────
            MAIN CONTENT
        ───────────────────────────────────────────── */}

        <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          {/* ═══════════════════════════════════════════
              LEFT — PORTRAIT
          ═══════════════════════════════════════════ */}

          <motion.div
            {...fadeUp(0.08)}
            className="relative flex justify-center lg:justify-start"
          >
            <Tilt3DCard isInView={isInView} />
          </motion.div>

          {/* ═══════════════════════════════════════════
              RIGHT — CONTENT
          ═══════════════════════════════════════════ */}

          <div className="relative">
            {/* Eyebrow */}

            <motion.div
              {...fadeUp(0.15)}
              className="mb-5 flex items-center gap-2"
            >
              <Sparkles className="h-4 w-4 text-[#e87a24]" />

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#707680]">
                What I Do
              </span>
            </motion.div>

            {/* Main Heading */}

            <motion.h2
              {...fadeUp(0.2)}
              className="font-display max-w-2xl text-[42px] font-extrabold leading-[0.98] tracking-[-2.5px] text-[#111215] sm:text-[52px] lg:text-[58px]"
            >
              I build systems
              <br />
              that drive{" "}
              <span className="relative inline-block text-[#e87a24]">
                growth.
                <span className="absolute -bottom-1 left-0 h-[3px] w-[58%] rounded-full bg-[#e87a24]/30" />
              </span>
            </motion.h2>

            {/* Description */}

            <motion.p
              {...fadeUp(0.28)}
              className="mt-7 max-w-xl text-[15px] font-medium leading-7 text-[#5c626c] sm:text-[16px]"
            >
              I combine performance marketing, web engineering and AI
              automation to create digital systems that don&apos;t just look
              good — they are built to generate measurable business results.
            </motion.p>

            {/* ═════════════════════════════════════════
                CAPABILITIES
            ═════════════════════════════════════════ */}

            <motion.div
              {...fadeUp(0.36)}
              className="mt-9 flex flex-col gap-3"
            >
              {capabilities.map((cap, index) => (
                <motion.div
                  key={cap.title}
                  initial={{
                    opacity: 0,
                    x: 20,
                  }}
                  animate={
                    isInView
                      ? {
                          opacity: 1,
                          x: 0,
                        }
                      : {
                          opacity: 0,
                          x: 20,
                        }
                  }
                  transition={{
                    duration: 0.6,
                    delay: 0.38 + index * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{
                    x: 5,
                  }}
                  className="group relative overflow-hidden rounded-2xl border border-black/[0.055] bg-white/80 p-4 shadow-[0_8px_28px_rgba(0,0,0,0.025)] backdrop-blur-md transition-all duration-300 hover:border-[#e87a24]/25 hover:shadow-[0_14px_35px_rgba(232,122,36,0.09)] sm:p-5"
                >
                  {/* Orange hover line */}

                  <div className="absolute left-0 top-0 h-full w-[3px] origin-top scale-y-0 rounded-r-full bg-[#e87a24] transition-transform duration-300 group-hover:scale-y-100" />

                  <div className="flex items-start gap-4">
                    {/* Number */}

                    <div className="hidden pt-1 font-mono text-[10px] font-bold tracking-widest text-[#a0a4aa] sm:block">
                      {cap.number}
                    </div>

                    {/* Icon */}

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#e87a24]/15 bg-[#e87a24]/[0.07] text-[#e87a24] transition-all duration-300 group-hover:border-[#e87a24] group-hover:bg-[#e87a24] group-hover:text-white">
                      {cap.icon}
                    </div>

                    {/* Text */}

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                        <h3 className="text-[14px] font-bold text-[#111215] transition-colors duration-200 group-hover:text-[#e87a24] sm:text-[15px]">
                          {cap.title}
                        </h3>

                        <span className="text-[8px] font-bold uppercase tracking-[0.12em] text-[#999da4] sm:text-[9px]">
                          {cap.subtitle}
                        </span>
                      </div>

                      <p className="mt-1.5 max-w-xl text-[12px] leading-5 text-[#707680] sm:text-[13px]">
                        {cap.desc}
                      </p>
                    </div>

                    <ArrowUpRight className="mt-1 hidden h-4 w-4 text-[#b4b7bc] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#e87a24] sm:block" />
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* ═════════════════════════════════════════
                STATS
            ═════════════════════════════════════════ */}

            <motion.div
              {...fadeUp(0.55)}
              className="mt-8 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-black/[0.08] pt-7 sm:grid-cols-4"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{
                    opacity: 0,
                    y: 12,
                  }}
                  animate={
                    isInView
                      ? {
                          opacity: 1,
                          y: 0,
                        }
                      : {
                          opacity: 0,
                          y: 12,
                        }
                  }
                  transition={{
                    duration: 0.5,
                    delay: 0.58 + index * 0.07,
                  }}
                  className="group"
                >
                  <div className="font-display text-[25px] font-extrabold tracking-[-1px] text-[#111215] transition-colors duration-200 group-hover:text-[#e87a24] sm:text-[28px]">
                    {stat.value}
                  </div>

                  <div className="mt-1 text-[9px] font-bold uppercase tracking-[0.13em] text-[#858a93]">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* ═════════════════════════════════════════
                CTA
            ═════════════════════════════════════════ */}

            <motion.div
              {...fadeUp(0.65)}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              {/* ORANGE CTA */}

              <motion.a
                href="mailto:muhammadsaqibyousaf7@gmail.com"
                whileHover={{
                  y: -3,
                  scale: 1.015,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="group inline-flex items-center gap-2.5 rounded-xl bg-[#e87a24] px-6 py-3.5 text-[13px] font-bold text-white shadow-[0_10px_25px_rgba(232,122,36,0.20)] transition-all duration-300 hover:bg-[#d96c18] hover:shadow-[0_14px_30px_rgba(232,122,36,0.28)]"
              >
                Let&apos;s work together

                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </motion.a>

              {/* SOCIAL BUTTONS */}

              <div className="flex items-center gap-2">
                {/* WhatsApp */}

                <SocialButton
                  href="https://wa.me/923222111938"
                  label="WhatsApp"
                  hoverClass="hover:bg-[#25D366]"
                >
                  <svg
                    className="h-[17px] w-[17px] fill-current"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                  </svg>
                </SocialButton>

                {/* LinkedIn */}

                <SocialButton
                  href="https://linkedin.com/in/saqib-yousaf-dev"
                  label="LinkedIn"
                  hoverClass="hover:bg-[#0A66C2]"
                >
                  <svg
                    className="h-[17px] w-[17px] fill-current"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.238 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </SocialButton>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   3D PORTRAIT
   IMPORTANT:
   No orange circle is generated here.
   The orange circle comes from /saqib-dp.png itself.
═══════════════════════════════════════════════════ */

function Tilt3DCard({ isInView }: { isInView: boolean }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = {
    damping: 22,
    stiffness: 150,
    mass: 0.6,
  };

  const rotateX = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [6, -6]),
    springConfig
  );

  const rotateY = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-6, 6]),
    springConfig
  );

  const imageX = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-5, 5]),
    springConfig
  );

  const imageY = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [-5, 5]),
    springConfig
  );

  const badgeX = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-12, 12]),
    springConfig
  );

  const badgeY = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [-12, 12]),
    springConfig
  );

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    const rect = cardRef.current?.getBoundingClientRect();

    if (!rect) return;

    mouseX.set(
      (e.clientX - rect.left) / rect.width - 0.5
    );

    mouseY.set(
      (e.clientY - rect.top) / rect.height - 0.5
    );
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative aspect-square w-[340px] sm:w-[430px] md:w-[500px] lg:w-[540px]"
      style={{
        perspective: "1200px",
      }}
    >
      {/* Main 3D wrapper */}

      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative h-full w-full"
      >
        {/* YOUR IMAGE
            The orange circle is already inside this image.
        */}

        <motion.div
          style={{
            x: imageX,
            y: imageY,
            transform: "translateZ(35px)",
          }}
          initial={{
            opacity: 0,
            scale: 0.96,
          }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  scale: 1,
                }
              : {}
          }
          transition={{
            duration: 0.9,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute inset-0 z-10"
        >
          <Image
            src="/saqib-dp.png"
            alt="Saqib Yousaf"
            fill
            priority
            sizes="(max-width: 640px) 340px, (max-width: 1024px) 500px, 540px"
            className="pointer-events-none object-contain"
          />
        </motion.div>

        {/* ═════════════════════════════════════════
            PERFORMANCE BADGE
        ═════════════════════════════════════════ */}

        <motion.div
          style={{
            x: badgeX,
            y: badgeY,
            transform: "translateZ(70px)",
          }}
          initial={{
            opacity: 0,
            scale: 0.85,
          }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  scale: 1,
                }
              : {}
          }
          transition={{
            delay: 0.5,
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute right-[4%] top-[10%] z-30 rounded-2xl border border-black/[0.06] bg-white/95 px-4 py-3 shadow-[0_14px_32px_rgba(0,0,0,0.09)] backdrop-blur-xl"
        >
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#e87a24]" />

            <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#777c84]">
              Performance
            </span>
          </div>

          <div className="mt-1 font-display text-[18px] font-extrabold leading-none text-[#111215]">
            $1.5K+
          </div>

          <div className="mt-1 text-[9px] font-semibold text-[#8a8f98]">
            Daily Ad Spend
          </div>
        </motion.div>

        {/* ═════════════════════════════════════════
            EXPERIENCE BADGE
        ═════════════════════════════════════════ */}

        <motion.div
          style={{
            x: badgeX,
            y: badgeY,
            transform: "translateZ(80px)",
          }}
          initial={{
            opacity: 0,
            scale: 0.85,
          }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  scale: 1,
                }
              : {}
          }
          transition={{
            delay: 0.65,
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute bottom-[10%] left-[4%] z-30 rounded-2xl border border-[#e87a24]/15 bg-white/95 px-4 py-3 shadow-[0_14px_32px_rgba(0,0,0,0.09)] backdrop-blur-xl"
        >
          <div className="flex items-center gap-2">
            <Check className="h-3 w-3 text-[#e87a24]" />

            <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#777c84]">
              Experience
            </span>
          </div>

          <div className="mt-1 font-display text-[18px] font-extrabold leading-none text-[#111215]">
            2+ Years
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   SOCIAL BUTTON
═══════════════════════════════════════════════════ */

function SocialButton({
  href,
  label,
  hoverClass,
  children,
}: {
  href: string;
  label: string;
  hoverClass: string;
  children: React.ReactNode;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      whileHover={{
        y: -3,
      }}
      whileTap={{
        scale: 0.95,
      }}
      className={`flex h-11 w-11 items-center justify-center rounded-xl border border-black/[0.07] bg-white text-[#5c626c] shadow-sm transition-all duration-300 hover:text-white ${hoverClass}`}
    >
      {children}
    </motion.a>
  );
}