"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";

interface NavbarProps {
  navHidden: boolean;
  scrolled: boolean;
}

export default function Navbar({ navHidden, scrolled }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Technologies", href: "#technologies" },
    { label: "Experience", href: "#experience" },
    { label: "Case Studies", href: "#case-studies" },
    { label: "Services", href: "#services" },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: "-120%", opacity: 0 },
        }}
        animate={navHidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-8 pt-4 sm:pt-5 pointer-events-none"
      >
        <nav
          className={`pointer-events-auto w-full max-w-5xl flex items-center justify-between px-5 sm:px-7 py-2.5 rounded-full transition-all duration-300 ${
            scrolled
              ? "bg-white/85 backdrop-blur-2xl border border-black/[0.08] shadow-[0_10px_35px_rgba(0,0,0,0.07)]"
              : "bg-white/70 backdrop-blur-md border border-white/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
          }`}
        >
          {/* Brand Logo (S in dark, Y in brand orange) */}
          <Link href="#" className="flex items-center group no-underline">
            <span className="font-display font-black text-2xl sm:text-[28px] tracking-[-1px] text-[#111215]">
              S<span className="text-[#e87a24]">Y</span>
            </span>
          </Link>

          {/* Desktop Navigation Anchors */}
          <div className="hidden md:flex items-center gap-1 bg-black/[0.03] p-1 rounded-full border border-black/[0.04]">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="no-underline px-4 py-1.5 text-xs sm:text-sm font-semibold text-[#4b515d] hover:text-[#111215] hover:bg-white rounded-full transition-all duration-200"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right Action Area (Let's Talk CTA + Mobile Menu Button) */}
          <div className="flex items-center gap-2">
            <a
              href="mailto:muhammadsaqibyousaf7@gmail.com"
              className="group no-underline overflow-hidden bg-[#111215] hover:bg-[#e87a24] text-white px-4.5 sm:px-5.5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 shadow-[0_4px_14px_rgba(0,0,0,0.12)] hover:shadow-[0_6px_20px_rgba(232,122,36,0.35)] hover:-translate-y-0.5 flex items-center gap-1.5"
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-full bg-black/[0.05] text-[#111215] hover:bg-black/[0.08] transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Dropdown Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="fixed inset-x-4 top-20 z-40 bg-white/95 backdrop-blur-2xl border border-black/[0.08] rounded-3xl p-6 shadow-2xl md:hidden pointer-events-auto"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={handleLinkClick}
                  className="px-4 py-3 text-base font-bold text-[#111215] hover:bg-[#e87a24]/10 hover:text-[#e87a24] rounded-xl transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}