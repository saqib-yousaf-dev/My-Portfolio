"use client";
import { useEffect, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TextMarquee from "@/components/TextMarquee";
import Technologies from "@/components/Technologies";
import Experience from "@/components/Experience";
import ResultsShowcase from "@/components/ResultsShowcase";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import ContactFooter from "@/components/ContactFooter";

const greetings = [
  "Hello!",
  "Hola!",
  "Hallo!",
  "Bonjour!",
  "Ciao!",
  "مرحبا!",
  "سلام!",
  "Olá!",
];

export default function Home() {
  const [greetingIndex, setGreetingIndex] = useState(0);
  const [navHidden, setNavHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 100) {
      setNavHidden(true);
    } else {
      setNavHidden(false);
    }
    setScrolled(latest > 20);
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setGreetingIndex((prev) => (prev + 1) % greetings.length);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-sans antialiased text-[#111215] bg-[#ededed] min-h-screen selection:bg-[#e87a24] selection:text-white">
      {/* 1. Header Navigation */}
      <Navbar navHidden={navHidden} scrolled={scrolled} />

      <main className="pt-28 md:pt-32 overflow-hidden bg-[#ededed]">
        {/* 2. Hero Section */}
        <Hero greetings={greetings} greetingIndex={greetingIndex} />

        {/* 3. About Section */}
        <section id="about" className="w-full bg-[#ededed] border-t border-black/[0.06] relative z-20 overflow-hidden">
          <About />
        </section>

        {/* 4. Text Marquee Ribbon */}
        <TextMarquee />

        {/* 5. Technologies Section */}
        <section id="technologies" className="w-full bg-[#ededed] py-24 md:py-32 relative z-20 overflow-hidden">
          <Technologies />
        </section>

        {/* 6. Work Experience Timeline */}
        <section id="experience" className="w-full bg-[#ededed] border-t border-black/[0.06] py-24 md:py-32 relative z-20 overflow-hidden">
          <Experience />
        </section>

        {/* 7. Proof & Results Showcase */}
        <section id="case-studies" className="w-full bg-[#ededed] border-t border-black/[0.06] py-24 md:py-32 relative z-20 overflow-hidden">
          <ResultsShowcase />
        </section>

        {/* 8. Client Testimonials & Social Proof */}
        <div id="testimonials" className="border-t border-black/[0.06]">
          <Testimonials />
        </div>

        {/* 9. Core Services / How I Can Help */}
        <div id="services" className="border-t border-black/[0.06]">
          <Services />
        </div>

        {/* 10. Contact CTA & Footer */}
        <ContactFooter />
      </main>
    </div>
  );
}