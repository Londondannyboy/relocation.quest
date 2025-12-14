import type { Metadata } from "next";
import { Suspense } from "react";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import { StackProvider, StackTheme } from "@stackframe/stack";
import { stackServerApp } from "@/stack/server";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CookieConsent } from "@/components/CookieConsent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: "Relocation Quest | International Relocation Services, Visa Guides & Jobs",
    template: "%s | Relocation Quest"
  },
  description: "Your complete guide to international relocation. Discover visa options, cost of living, job opportunities, and expert services across 50+ destinations worldwide.",
  keywords: ["international relocation", "relocation services", "visa guides", "digital nomad visa", "expat jobs", "relocation cost calculator", "moving abroad", "work visa", "immigration guide", "relocation tax allowance"],
  authors: [{ name: "Relocation Quest" }],
  creator: "Relocation Quest",
  publisher: "Relocation Quest",
  metadataBase: new URL("https://relocation.quest"),
  alternates: {
    canonical: "https://relocation.quest",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://relocation.quest",
    siteName: "Relocation Quest",
    title: "Relocation Quest | International Relocation Services & Visa Guides",
    description: "Your complete guide to international relocation. Discover visa options, cost of living, and job opportunities across 50+ destinations.",
    // Images auto-generated from app/opengraph-image.tsx
  },
  twitter: {
    card: "summary_large_image",
    title: "Relocation Quest | International Relocation Guide",
    description: "Your complete guide to international relocation. Visa guides, cost calculators, and job opportunities across 50+ destinations.",
    site: "@relocationquest",
    creator: "@relocationquest",
    // Images auto-generated from app/twitter-image.tsx
  },
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

// JSON-LD Structured Data for the site
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://relocation.quest/#organization",
  name: "Relocation Quest",
  alternateName: ["Relocation Quest", "RelocationQuest"],
  url: "https://relocation.quest",
  logo: {
    "@type": "ImageObject",
    url: "https://relocation.quest/logo.svg",
    width: "512",
    height: "512"
  },
  image: "https://relocation.quest/logo.svg",
  description: "Complete guide to international relocation. Find visa information, cost of living data, job opportunities, and expert relocation services across 50+ destinations.",
  foundingDate: "2024",
  sameAs: [
    "https://twitter.com/relocationquest",
    "https://linkedin.com/company/relocationquest"
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    url: "https://relocation.quest/contact",
    availableLanguage: "English"
  },
  areaServed: {
    "@type": "Country",
    name: "United Kingdom"
  }
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Fractional Quest",
  alternateName: ["Fractional Quest", "FractionalQuest", "Fractional Jobs UK"],
  url: "https://fractional.quest",
  description: "UK marketplace for fractional jobs and executive services. Browse fractional CFO, CMO, CTO roles.",
  inLanguage: "en-GB",
  publisher: {
    "@type": "Organization",
    name: "Fractional Quest",
    url: "https://fractional.quest",
    logo: {
      "@type": "ImageObject",
      url: "https://fractional.quest/logo.svg"
    }
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://fractional.quest/fractional-jobs?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased bg-white text-gray-900`}
      >
        <StackProvider app={stackServerApp}>
          <StackTheme>
            <Suspense fallback={<div className="h-16 bg-white border-b border-gray-200" />}>
              <Navigation />
            </Suspense>
            <main className="min-h-screen">
              {children}
            </main>
            <Footer />
            <CookieConsent />
          </StackTheme>
        </StackProvider>
      </body>
    </html>
  );
}
