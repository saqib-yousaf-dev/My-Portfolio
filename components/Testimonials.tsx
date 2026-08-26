"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  ArrowUpRight,
  ChevronDown,
  Quote,
  Plus,
  Minus,
} from "lucide-react";

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, {
    once: true,
    margin: "-80px",
  });

  const [showMore, setShowMore] = useState(false);

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    animate: isInView
      ? { opacity: 1, y: 0 }
      : { opacity: 0, y: 30 },
    transition: {
      duration: 0.65,
      delay,
      ease: "easeOut" as const,
    },
  });

  const reviews = [
    {
      name: "David R.",
      role: "Head of Growth",
      company: "BA Marketing INC",
      content:
        "Saqib is hands down the best media buyer we've ever partnered with. His mastery over Meta Ads and Google Ads is completely unmatched. He seamlessly scaled our daily spend using complex multi-account AdsPower setups without ever compromising our ROAS. Absolute game-changer for our agency.",
      initials: "DR",
      featured: true,
    },
    {
      name: "Saqlain Haider Saaki",
      role: "CEO",
      company: "Elvora LTD",
      content:
        "Saqib completely transformed our paid acquisition and lead generation pipeline. His deep understanding of Meta Ads, Keitaro tracking, and high-budget scaling brought us unprecedented results. He doesn't just run ads; he builds full-funnel growth systems.",
      initials: "SH",
    },
    {
      name: "Michael T.",
      role: "Founder",
      company: "E-Commerce Brand",
      content:
        "We hired Saqib for a full-stack Next.js web rebuild and complete Meta Ads setup. The new platform loads instantly, and his server-side CAPI integration finally fixed our tracking issues. Our conversion rate jumped by over 20% in the very first month.",
      initials: "MT",
    },
    {
      name: "Sarah Jenkins",
      role: "Director",
      company: "Solar Agency",
      content:
        "Finding someone who genuinely understands high-intent lead generation is rare. Saqib's localized targeting strategies and instant qualification forms dropped our Cost Per Lead significantly, while actually improving the quality of our booked appointments. Highly recommended.",
      initials: "SJ",
    },
    {
      name: "Omar K.",
      role: "Owner",
      company: "Dropshipping Enterprise",
      content:
        "Unbelievable results. Saqib's creative testing framework and pixel integration dropped our CPA by 30% in just two weeks. He knows exactly how to read the data and pivot the strategy. He is the only media buyer I trust with my budgets now.",
      initials: "OK",
    },
    {
      name: "Alex M.",
      role: "SaaS Founder",
      company: "Tech Startup",
      content:
        "Not only did he build a lightning-fast web app, but his lead generation funnels completely automated our client acquisition. He perfectly bridged the gap between elite software engineering and high-level digital marketing.",
      initials: "AM",
    },
  ];

  const featuredReview = reviews[0];
  const secondaryReviews = reviews.slice(1, 4);
  const additionalReviews = reviews.slice(4);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#ededed] py-24 sm:py-28 lg:py-32"
    >
      {/* =========================================================
          BACKGROUND BRAND ELEMENTS
      ========================================================= */}

      <div className="pointer-events-none absolute left-[-100px] top-[180px] h-[360px] w-[360px] rounded-full bg-[#e87a24]/[0.055] blur-[2px]" />

      <div
        className="pointer-events-none absolute left-[-30px] top-[230px] h-[260px] w-[260px] rounded-full border border-[#e87a24]/10"
      />

      <div
        className="pointer-events-none absolute left-[20px] top-[285px] h-[150px] w-[150px] rounded-full border border-[#e87a24]/10"
      />

      {/* subtle dotted brand pattern */}
      <div
        className="pointer-events-none absolute left-[25px] top-[390px] h-[120px] w-[120px] opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(#e87a24 1px, transparent 1px)",
          backgroundSize: "9px 9px",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 md:px-10 lg:px-12">
        {/* =========================================================
            HEADER
        ========================================================= */}

        <motion.div
          {...fadeUp(0)}
          className="mx-auto mb-14 max-w-4xl text-center"
        >
          {/* Label */}
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-[1.5px] w-9 bg-[#e87a24]/60" />

            <span className="font-display text-[11px] font-bold uppercase tracking-[3px] text-[#e87a24]">
              CLIENT TESTIMONIALS
            </span>

            <span className="h-[1.5px] w-9 bg-[#e87a24]/60" />
          </div>

          {/* Heading */}
          <h2 className="font-display text-4xl font-extrabold leading-[1.05] tracking-[-2px] text-[#111215] sm:text-5xl md:text-6xl lg:text-[64px]">
            Trusted by People
            <br />
            Who{" "}
            <span className="text-[#e87a24]">
              Value Results.
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-2xl text-sm font-medium leading-7 text-[#626773] sm:text-base">
            Real feedback from clients and teams I&apos;ve worked with.
          </p>
        </motion.div>

        {/* =========================================================
            FEATURED TESTIMONIAL
        ========================================================= */}

        <motion.div
          {...fadeUp(0.12)}
          className="relative mb-6 overflow-hidden rounded-[28px] border border-[#e87a24]/30 bg-gradient-to-br from-white via-white to-[#e87a24]/[0.055] shadow-[0_18px_55px_rgba(232,122,36,0.10)]"
        >
          {/* subtle inner glow */}
          <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[#e87a24]/[0.07] blur-3xl" />

          <div className="relative grid items-center gap-8 p-7 sm:p-9 md:grid-cols-[110px_1fr] md:p-12 lg:grid-cols-[125px_1fr] lg:p-14">
            {/* Quote mark */}
            <div className="hidden md:block">
              <Quote
                className="h-[92px] w-[92px] fill-[#e87a24] text-[#e87a24]"
                strokeWidth={1}
              />
            </div>

            <div>
              {/* Mobile quote */}
              <Quote
                className="mb-4 h-12 w-12 fill-[#e87a24] text-[#e87a24] md:hidden"
                strokeWidth={1}
              />

              <p className="font-display text-xl font-bold leading-[1.45] tracking-[-0.4px] text-[#111215] sm:text-2xl md:text-[27px] md:leading-[1.42] lg:text-[29px]">
                &ldquo;{featuredReview.content}&rdquo;
              </p>

              {/* Client */}
              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#e87a24] font-display text-sm font-extrabold text-white shadow-[0_6px_18px_rgba(232,122,36,0.22)]">
                  {featuredReview.initials}
                </div>

                <div>
                  <h4 className="font-display text-base font-extrabold text-[#111215] sm:text-lg">
                    {featuredReview.name}
                  </h4>

                  <div className="mt-1 flex flex-wrap items-center gap-2 text-xs font-medium text-[#6e7480] sm:text-sm">
                    <span className="text-[#e87a24]">
                      {featuredReview.role}
                    </span>

                    <span className="h-1 w-1 rounded-full bg-[#e87a24]" />

                    <span>{featuredReview.company}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* =========================================================
            THREE SUPPORTING TESTIMONIALS
        ========================================================= */}

        <div className="grid gap-5 md:grid-cols-3">
          {secondaryReviews.map((review, index) => (
            <motion.div
              key={review.name}
              {...fadeUp(0.2 + index * 0.08)}
              className="group relative flex min-h-[330px] flex-col overflow-hidden rounded-[24px] border border-[#e87a24]/20 bg-white p-6 shadow-[0_8px_30px_rgba(17,18,21,0.045)] transition-all duration-300 hover:-translate-y-1 hover:border-[#e87a24]/40 hover:shadow-[0_18px_40px_rgba(232,122,36,0.10)] sm:p-7"
            >
              {/* Orange top glow */}
              <div className="pointer-events-none absolute right-[-50px] top-[-50px] h-32 w-32 rounded-full bg-[#e87a24]/[0.07] blur-2xl transition-all duration-500 group-hover:bg-[#e87a24]/[0.12]" />

              {/* Quote */}
              <Quote
                className="mb-5 h-10 w-10 fill-[#e87a24] text-[#e87a24]"
                strokeWidth={1}
              />

              {/* Review */}
              <p className="relative flex-1 text-[14px] font-medium leading-6 text-[#292c32]">
                &ldquo;{review.content}&rdquo;
              </p>

              {/* Divider */}
              <div className="my-6 h-px bg-[#e87a24]/15" />

              {/* Client */}
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#fff0e3] font-display text-xs font-extrabold text-[#e87a24]">
                  {review.initials}
                </div>

                <div className="min-w-0">
                  <h4 className="truncate font-display text-sm font-extrabold text-[#111215]">
                    {review.name}
                  </h4>

                  <div className="mt-1 flex items-center gap-2 text-[11px] font-medium text-[#727782]">
                    <span className="text-[#e87a24]">
                      {review.role}
                    </span>

                    <span className="h-1 w-1 rounded-full bg-[#e87a24]" />

                    <span className="truncate">
                      {review.company}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* =========================================================
            MORE REVIEWS
        ========================================================= */}

        <motion.div
          {...fadeUp(0.45)}
          className="mt-6"
        >
          <button
            onClick={() => setShowMore(!showMore)}
            className="group mx-auto flex items-center gap-3 rounded-full border border-black/[0.08] bg-white px-6 py-3 text-sm font-bold text-[#111215] shadow-[0_5px_20px_rgba(0,0,0,0.035)] transition-all duration-300 hover:border-[#e87a24]/40 hover:text-[#e87a24]"
          >
            {showMore ? "Hide additional reviews" : "View more client reviews"}

            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#fff0e3] text-[#e87a24] transition-transform duration-300 group-hover:scale-105">
              {showMore ? (
                <Minus className="h-4 w-4" />
              ) : (
                <Plus className="h-4 w-4" />
              )}
            </span>
          </button>

          <AnimatePresence initial={false}>
            {showMore && (
              <motion.div
                initial={{ height: 0, opacity: 0, y: -10 }}
                animate={{ height: "auto", opacity: 1, y: 0 }}
                exit={{ height: 0, opacity: 0, y: -10 }}
                transition={{
                  duration: 0.4,
                  ease: [0.04, 0.62, 0.23, 0.98],
                }}
                className="overflow-hidden"
              >
                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  {additionalReviews.map((review) => (
                    <div
                      key={review.name}
                      className="rounded-[22px] border border-[#e87a24]/15 bg-white p-6 shadow-[0_6px_25px_rgba(0,0,0,0.035)]"
                    >
                      <Quote
                        className="mb-4 h-8 w-8 fill-[#e87a24] text-[#e87a24]"
                        strokeWidth={1}
                      />

                      <p className="text-sm font-medium leading-6 text-[#454952]">
                        &ldquo;{review.content}&rdquo;
                      </p>

                      <div className="mt-5 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#fff0e3] text-xs font-extrabold text-[#e87a24]">
                          {review.initials}
                        </div>

                        <div>
                          <div className="font-display text-sm font-extrabold text-[#111215]">
                            {review.name}
                          </div>

                          <div className="mt-0.5 text-[11px] font-medium text-[#727782]">
                            <span className="text-[#e87a24]">
                              {review.role}
                            </span>{" "}
                            · {review.company}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* =========================================================
            BOTTOM BRAND STATEMENT
        ========================================================= */}

        <motion.div
          {...fadeUp(0.5)}
          className="mt-14 flex flex-col items-center justify-center"
        >
          <div className="mb-4 flex items-center gap-4">
            <span className="h-px w-10 bg-[#e87a24]/40" />

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#fff0e3] text-[#e87a24] shadow-[0_4px_12px_rgba(232,122,36,0.15)]">
              <Quote className="h-5 w-5 fill-[#e87a24]" />
            </div>

            <span className="h-px w-10 bg-[#e87a24]/40" />
          </div>

          <p className="font-display text-base font-extrabold text-[#111215] sm:text-lg">
            Results that speak. Relationships that last.
          </p>

          <p className="mt-1 text-xs font-medium text-[#737883] sm:text-sm">
            Focused on growth. Committed to excellence.
          </p>
        </motion.div>

        {/* =========================================================
            FREELANCE PROFILES
        ========================================================= */}

        <motion.div
          {...fadeUp(0.55)}
          className="mt-16 border-t border-black/[0.06] pt-10"
        >
          <p className="mb-6 flex items-center justify-center gap-3 text-center font-display text-[10px] font-bold uppercase tracking-[2.5px] text-[#6a707b] sm:text-xs">
            <span className="h-px w-8 bg-black/10 sm:w-10" />
            Find more verified reviews
            <span className="h-px w-8 bg-black/10 sm:w-10" />
          </p>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-5">
            {/* Fiverr */}
            <a
              href="https://www.fiverr.com/s/L3eL0dL"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-2xl border border-black/[0.08] bg-white px-5 py-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#1DBF73] hover:shadow-[0_8px_28px_rgba(29,191,115,0.16)]"
            >
              <div className="relative h-6 w-6 shrink-0">
                <Image
                  src="/fiverr.svg"
                  alt="Fiverr"
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>

              <span className="font-display text-sm font-extrabold text-[#111215] transition-colors group-hover:text-[#1DBF73]">
                Fiverr Profile
              </span>

              <ArrowUpRight className="h-4 w-4 text-[#6e7480] transition-colors group-hover:text-[#1DBF73]" />
            </a>

            {/* Upwork */}
            <a
              href="https://www.upwork.com/freelancers/~019cd3f7501f531e71?mp_source=share"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-2xl border border-black/[0.08] bg-white px-5 py-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#14A800] hover:shadow-[0_8px_28px_rgba(20,168,0,0.16)]"
            >
              <div className="relative h-6 w-6 shrink-0">
                <Image
                  src="/upwork.svg"
                  alt="Upwork"
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>

              <span className="font-display text-sm font-extrabold text-[#111215] transition-colors group-hover:text-[#14A800]">
                Upwork Profile
              </span>

              <ArrowUpRight className="h-4 w-4 text-[#6e7480] transition-colors group-hover:text-[#14A800]" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}