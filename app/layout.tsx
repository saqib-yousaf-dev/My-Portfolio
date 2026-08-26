import type { Metadata } from "next";
import { Outfit, Space_Grotesk } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const BASE_URL = "https://saqib-yousaf-dev.vercel.app"; // update to your actual domain

export const metadata: Metadata = {
  /* ── Core ── */
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Saqib Yousaf | Performance Marketing Strategist & Web Developer",
    template: "%s | Saqib Yousaf",
  },
  description:
    "Saqib Yousaf is a Performance Marketing Strategist, Meta Ads Expert, and Front-End Developer from Pakistan. Specializing in Meta Ads, Multi-Account Ad Operations, Conversion Tracking (CAPI), and Next.js web development. Managing $1,500+/day in ad spend.",
  keywords: [
    "Saqib Yousaf",
    "Muhammad Saqib Yousaf",
    "Performance Marketing Strategist",
    "Meta Ads Expert Pakistan",
    "Facebook Ads Expert",
    "Growth Marketer",
    "Web Developer Pakistan",
    "Next.js Developer",
    "Conversion Tracking Expert",
    "Meta Conversions API",
    "Multi-Account Ad Operations",
    "Paid Social Expert",
    "ROAS Optimization",
    "AdsPower Expert",
    "Keitaro Tracker",
    "saqibyousaf",
  ],
  authors: [{ name: "Saqib Yousaf", url: BASE_URL }],
  creator: "Saqib Yousaf",
  publisher: "Saqib Yousaf",
  category: "Portfolio",

  /* ── Canonical ── */
  alternates: {
    canonical: "/",
  },

  /* ── Google / Search Engine Verification ── */
  verification: {
    google: "ysZ9MF1qA7CQZwxOdUibcCdkG833s88yiudsei4pxKo",
  },

  /* ── Icons & Favicon Config ── */
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "android-chrome",
        url: "/android-chrome-192x192.png",
      },
      {
        rel: "android-chrome",
        url: "/android-chrome-512x512.png",
      },
    ],
  },
  manifest: "/site.webmanifest",

  /* ── Open Graph ── */
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Saqib Yousaf Portfolio",
    title: "Saqib Yousaf | Performance Marketing Strategist & Web Developer",
    description:
      "Saqib Yousaf — Meta Ads Expert managing $1,500+/day, multi-account ad operations, Conversions API tracking & Next.js web development.",
    images: [
      {
        url: "/saqib-portrait-new.png",
        width: 1200,
        height: 630,
        alt: "Saqib Yousaf – Performance Marketing Strategist",
      },
    ],
  },

  /* ── Twitter / X ── */
  twitter: {
    card: "summary_large_image",
    title: "Saqib Yousaf | Performance Marketing Strategist & Web Developer",
    description:
      "Meta Ads Expert • $1,500+/day Ad Spend • Multi-Account Ops • Next.js Dev — Saqib Yousaf Portfolio",
    images: ["/saqib-portrait-new.png"],
    creator: "@saqibyousaf",
  },

  /* ── Robots ── */
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

/* ── JSON-LD Person Schema ── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Saqib Yousaf",
  alternateName: "Muhammad Saqib Yousaf",
  url: BASE_URL,
  image: `${BASE_URL}/saqib-portrait-new.png`,
  sameAs: [
    "https://linkedin.com/in/saqib-yousaf-dev",
    "https://wa.me/923222111938",
    "mailto:muhammadsaqibyousaf7@gmail.com",
  ],
  jobTitle: "Performance Marketing Strategist & Web Developer",
  worksFor: {
    "@type": "Organization",
    name: "Freelance",
  },
  knowsAbout: [
    "Meta Ads",
    "Performance Marketing",
    "Multi-Account Ad Operations",
    "Conversions API",
    "Next.js",
    "Web Development",
    "Growth Marketing",
    "Paid Social Advertising",
  ],
  address: {
    "@type": "PostalAddress",
    addressCountry: "PK",
  },
  email: "muhammadsaqibyousaf7@gmail.com",
  telephone: "+923222111938",
  description:
    "Performance Marketing Strategist and Web Developer from Pakistan, specializing in Meta Ads, high-budget ad operations, and Next.js development.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${spaceGrotesk.variable} scroll-smooth`}>
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <meta name="theme-color" content="#e87a24" />
      </head>
      <body className="font-sans antialiased bg-[#ededed] text-[#111215]">
        {children}
      </body>
    </html>
  );
}