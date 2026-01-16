'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { CopilotSidebar } from '@copilotkit/react-ui';
import { useCopilotReadable } from '@copilotkit/react-core';
import { motion, AnimatePresence } from 'framer-motion';
import { PageContextProvider, VoiceChatProvider, SyncedVoiceButton } from '@/components/voice';
import { CostChart } from '@/components/mdx/CostChart';
import { QualityOfLifeRadar } from '@/components/mdx/QualityOfLifeRadar';

// Types
interface QuickFact {
  icon: string;
  label: string;
  value: string;
}

interface Highlight {
  icon?: string;
  text?: string;
}

interface Visa {
  name: string;
  type?: string;
  description?: string;
  duration?: string;
  requirements?: string[];
  processingTime?: string;
  cost?: string;
}

interface CostCity {
  cityName: string;
  rent1BRCenter?: number;
  rent1BROutside?: number;
  rent3BRCenter?: number;
  utilities?: number;
  groceries?: number;
  transportation?: number;
  dining?: number;
  costIndex?: number;
  currency?: string;
}

interface JobMarket {
  topIndustries?: string[];
  growingSectors?: string[];
  avgSalaryTech?: number;
  in_demand_sectors?: string[];
  avg_salaries?: Record<string, string>;
}

interface FAQ {
  question: string;
  answer: string;
}

interface Destination {
  id: string;
  slug: string;
  country_name: string;
  flag: string;
  region: string;
  hero_title: string;
  hero_subtitle: string;
  hero_gradient: string;
  hero_image_url: string;
  language: string;
  quick_facts: QuickFact[];
  highlights: Highlight[];
  visas: Visa[];
  cost_of_living: CostCity[] | { currency: string; items: Array<{ category: string; item: string; cost: number; frequency: string }> };
  job_market: JobMarket;
  faqs: FAQ[];
}

interface DestinationClientProps {
  slug: string;
  destination: Destination;
}

interface UnsplashImage {
  id: string;
  url: string;
  alt: string;
  credit?: { name: string; link: string };
}

// Nav Bar Component
function NavBar({ countryName }: { countryName: string }) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/60 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">🌍</span>
            <span className="text-white font-bold text-lg">Relocation<span className="text-amber-400">Quest</span></span>
          </Link>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/destinations" className="text-white/90 hover:text-white text-sm font-medium transition-colors">
              Destinations
            </Link>
            <Link href="/guides" className="text-white/90 hover:text-white text-sm font-medium transition-colors">
              Guides
            </Link>
            <Link href="/tools" className="text-white/90 hover:text-white text-sm font-medium transition-colors">
              Tools
            </Link>
            <Link href="/auth/sign-in" className="text-white/90 hover:text-white text-sm font-medium transition-colors">
              Sign In
            </Link>
            <Link
              href="/auth/sign-up"
              className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden text-white p-2">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

// Image Gallery Card
function ImageCard({ image, size = 'medium' }: { image: UnsplashImage; size?: 'small' | 'medium' | 'large' }) {
  const sizeClasses = {
    small: 'h-40',
    medium: 'h-56',
    large: 'h-72',
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`relative rounded-2xl overflow-hidden ${sizeClasses[size]}`}
    >
      <img src={image.url} alt={image.alt} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      {image.credit && (
        <a
          href={image.credit.link}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-2 right-2 text-[10px] text-white/60 hover:text-white"
        >
          Photo by {image.credit.name}
        </a>
      )}
    </motion.div>
  );
}

// City Card Component
function CityCard({ city, flag, image }: { city: CostCity; flag: string; image?: UnsplashImage }) {
  const monthlyTotal = (city.rent1BRCenter || 0) + (city.utilities || 0) + (city.groceries || 0) + (city.transportation || 0) + (city.dining || 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl overflow-hidden shadow-lg"
    >
      {/* City Image */}
      {image && (
        <div className="h-40 relative">
          <img src={image.url} alt={city.cityName} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-4 flex items-center gap-2">
            <span className="text-2xl">{flag}</span>
            <h3 className="text-xl font-bold text-white">{city.cityName}</h3>
          </div>
        </div>
      )}

      {!image && (
        <div className="bg-gradient-to-r from-amber-500 to-orange-500 px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="text-xl">{flag}</span>
            <h3 className="font-semibold text-white">{city.cityName}</h3>
            {city.costIndex && (
              <span className="ml-auto text-xs bg-white/20 px-2 py-1 rounded-full text-white">
                Cost Index: {city.costIndex}
              </span>
            )}
          </div>
        </div>
      )}

      <div className="p-4 space-y-3">
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="bg-slate-50 rounded-lg p-3">
            <div className="text-slate-500 text-xs">1BR City Center</div>
            <div className="text-slate-900 font-semibold">€{city.rent1BRCenter?.toLocaleString()}/mo</div>
          </div>
          <div className="bg-slate-50 rounded-lg p-3">
            <div className="text-slate-500 text-xs">Utilities</div>
            <div className="text-slate-900 font-semibold">€{city.utilities}/mo</div>
          </div>
          <div className="bg-slate-50 rounded-lg p-3">
            <div className="text-slate-500 text-xs">Groceries</div>
            <div className="text-slate-900 font-semibold">€{city.groceries}/mo</div>
          </div>
          <div className="bg-slate-50 rounded-lg p-3">
            <div className="text-slate-500 text-xs">Dining Out</div>
            <div className="text-slate-900 font-semibold">€{city.dining}/mo</div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg p-3 text-center">
          <div className="text-white/80 text-xs">Estimated Monthly Total</div>
          <div className="text-white font-bold text-xl">€{monthlyTotal.toLocaleString()}</div>
        </div>
      </div>
    </motion.div>
  );
}

// Visa Card Component
function VisaCard({ visa }: { visa: Visa }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-white rounded-xl shadow-md p-5 border border-slate-100"
    >
      <div className="flex items-start justify-between mb-2">
        <h4 className="font-semibold text-slate-900">{visa.name}</h4>
        {visa.processingTime && (
          <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
            {visa.processingTime}
          </span>
        )}
      </div>
      {visa.description && (
        <p className="text-slate-600 text-sm mb-3">{visa.description}</p>
      )}
      {visa.requirements && visa.requirements.length > 0 && (
        <ul className="space-y-1">
          {visa.requirements.slice(0, 4).map((req, i) => (
            <li key={i} className="text-sm text-slate-600 flex items-start gap-2">
              <span className="text-emerald-500 mt-0.5">✓</span>
              {req}
            </li>
          ))}
        </ul>
      )}
      {visa.cost && (
        <div className="mt-4 pt-3 border-t border-slate-100 flex justify-between items-center">
          <span className="text-slate-500 text-sm">Cost</span>
          <span className="text-amber-600 font-semibold">{visa.cost}</span>
        </div>
      )}
    </motion.div>
  );
}

export default function DestinationClient({ slug, destination }: DestinationClientProps) {
  const [heroImage, setHeroImage] = useState(destination.hero_image_url);
  const [galleryImages, setGalleryImages] = useState<UnsplashImage[]>([]);
  const [cityImages, setCityImages] = useState<Record<string, UnsplashImage>>({});
  const [activeSection, setActiveSection] = useState<'overview' | 'cities' | 'visas' | 'jobs' | 'lifestyle'>('overview');

  // Fetch Unsplash images
  useEffect(() => {
    // Hero image
    if (!destination.hero_image_url) {
      fetch(`/api/unsplash?query=${encodeURIComponent(destination.country_name + ' landscape scenic')}&count=1`)
        .then(res => res.json())
        .then(data => {
          if (data.images?.[0]?.url) {
            setHeroImage(data.images[0].url);
          }
        })
        .catch(() => {});
    }

    // Gallery images
    fetch(`/api/unsplash?query=${encodeURIComponent(destination.country_name + ' travel tourism')}&count=6`)
      .then(res => res.json())
      .then(data => {
        if (data.images) {
          setGalleryImages(data.images);
        }
      })
      .catch(() => {});

    // City images
    const costCities = Array.isArray(destination.cost_of_living) ? destination.cost_of_living : [];
    costCities.forEach((city: CostCity) => {
      fetch(`/api/unsplash?query=${encodeURIComponent(city.cityName + ' ' + destination.country_name + ' city')}&count=1`)
        .then(res => res.json())
        .then(data => {
          if (data.images?.[0]) {
            setCityImages(prev => ({ ...prev, [city.cityName]: data.images[0] }));
          }
        })
        .catch(() => {});
    });
  }, [destination.country_name, destination.hero_image_url, destination.cost_of_living]);

  // Make destination data readable to CopilotKit
  useCopilotReadable({
    description: `Full destination data for ${destination.country_name}`,
    value: {
      country: destination.country_name,
      region: destination.region,
      highlights: destination.highlights,
      visas: destination.visas,
      costOfLiving: destination.cost_of_living,
      jobMarket: destination.job_market,
      faqs: destination.faqs,
    },
  });

  // Parse cost data for visualizations
  const costCities = Array.isArray(destination.cost_of_living)
    ? destination.cost_of_living as CostCity[]
    : [];

  const costChartItems = costCities[0] ? [
    { label: 'Rent (1BR Center)', amount: costCities[0].rent1BRCenter || 0 },
    { label: 'Groceries', amount: costCities[0].groceries || 0 },
    { label: 'Dining', amount: costCities[0].dining || 0 },
    { label: 'Utilities', amount: costCities[0].utilities || 0 },
    { label: 'Transport', amount: costCities[0].transportation || 0 },
  ] : [];

  const qualityMetrics = [
    { label: 'Climate', value: 92, icon: '☀️' },
    { label: 'Safety', value: 85, icon: '🛡️' },
    { label: 'Healthcare', value: 78, icon: '🏥' },
    { label: 'Internet', value: 88, icon: '📶' },
    { label: 'English', value: 90, icon: '🗣️' },
    { label: 'Cost', value: 75, icon: '💰' },
  ];

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '🌟' },
    { id: 'cities', label: 'Cities', icon: '🏙️' },
    { id: 'visas', label: 'Visas', icon: '📋' },
    { id: 'jobs', label: 'Jobs', icon: '💼' },
    { id: 'lifestyle', label: 'Lifestyle', icon: '🌴' },
  ];

  return (
    <PageContextProvider pageSlug={`/destinations/${slug}`}>
      <VoiceChatProvider>
        <div className="min-h-screen bg-slate-50">
          {/* Navigation */}
          <NavBar countryName={destination.country_name} />

        {/* Hero Section */}
        <div
          className="relative h-[70vh] min-h-[500px] bg-cover bg-center"
          style={{ backgroundImage: heroImage ? `url(${heroImage})` : undefined }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/70" />

          {/* Hero Content - Centered */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <span className="text-7xl mb-4 block">{destination.flag}</span>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                {destination.hero_title || `Moving to ${destination.country_name}`}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                {destination.hero_subtitle}
              </p>

              {/* Quick Facts Pills */}
              <div className="flex flex-wrap justify-center gap-3">
                {destination.quick_facts?.slice(0, 5).map((fact, i) => (
                  <span
                    key={i}
                    className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm text-white flex items-center gap-2 border border-white/20"
                  >
                    <span>{fact.icon}</span>
                    <span>{fact.value}</span>
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Voice Widget - Bottom Left */}
          <div className="absolute bottom-8 left-8">
            <SyncedVoiceButton />
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 animate-bounce">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>

        {/* Main Content: Split Panel Layout */}
        <div className="flex flex-col lg:flex-row">
          {/* LEFT Panel: Content Sections */}
          <div className="lg:w-3/5 xl:w-2/3">
            {/* Section Tabs */}
            <div className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-sm">
              <div className="max-w-4xl mx-auto">
                <div className="flex overflow-x-auto scrollbar-hide">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveSection(tab.id as typeof activeSection)}
                      className={`flex items-center gap-2 px-6 py-4 font-medium whitespace-nowrap transition-colors border-b-2 ${
                        activeSection === tab.id
                          ? 'text-amber-600 border-amber-500'
                          : 'text-slate-500 border-transparent hover:text-slate-700'
                      }`}
                    >
                      <span>{tab.icon}</span>
                      <span>{tab.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-4 py-8">
              <AnimatePresence mode="wait">
                {activeSection === 'overview' && (
                  <motion.div
                    key="overview"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-8"
                  >
                    {/* Intro Text */}
                    <div className="prose prose-lg max-w-none">
                      <h2 className="text-3xl font-bold text-slate-900">
                        Why Move to {destination.country_name}?
                      </h2>
                      <p className="text-slate-600 leading-relaxed">
                        {destination.country_name} offers an exceptional combination of Mediterranean lifestyle,
                        favorable tax benefits, and modern infrastructure. With English widely spoken,
                        a thriving expat community, and strategic location between Europe, Asia, and Africa,
                        it's become one of the most attractive destinations for digital nomads, entrepreneurs,
                        and families seeking a better quality of life.
                      </p>
                    </div>

                    {/* Image Gallery */}
                    {galleryImages.length > 0 && (
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {galleryImages.slice(0, 6).map((img, i) => (
                          <ImageCard
                            key={img.id}
                            image={img}
                            size={i === 0 ? 'large' : 'medium'}
                          />
                        ))}
                      </div>
                    )}

                    {/* Highlights */}
                    <div className="bg-white rounded-2xl shadow-md p-6">
                      <h3 className="text-xl font-bold text-slate-900 mb-4">
                        Key Highlights
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {destination.highlights?.map((h, i) => (
                          <div key={i} className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg">
                            <span className="text-emerald-500 text-lg">{h.icon || '✓'}</span>
                            <span className="text-slate-700">{h.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Quality of Life */}
                    <div className="bg-white rounded-2xl shadow-md p-6">
                      <QualityOfLifeRadar
                        title="Quality of Life Index"
                        country={destination.country_name}
                        flag={destination.flag}
                        metrics={qualityMetrics}
                        overallScore={85}
                      />
                    </div>

                    {/* Cost Overview */}
                    {costChartItems.length > 0 && (
                      <div className="bg-white rounded-2xl shadow-md p-6">
                        <CostChart
                          title={`Monthly Costs in ${costCities[0]?.cityName || destination.country_name}`}
                          items={costChartItems}
                          currency="€"
                        />
                      </div>
                    )}
                  </motion.div>
                )}

                {activeSection === 'cities' && (
                  <motion.div
                    key="cities"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-8"
                  >
                    <div>
                      <h2 className="text-3xl font-bold text-slate-900 mb-2">
                        Popular Cities in {destination.country_name}
                      </h2>
                      <p className="text-slate-600">
                        Explore the best cities for expats, each with unique character and lifestyle.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      {costCities.map((city, i) => (
                        <CityCard
                          key={i}
                          city={city}
                          flag={destination.flag}
                          image={cityImages[city.cityName]}
                        />
                      ))}
                    </div>
                  </motion.div>
                )}

                {activeSection === 'visas' && (
                  <motion.div
                    key="visas"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6"
                  >
                    <div>
                      <h2 className="text-3xl font-bold text-slate-900 mb-2">
                        Visa Options for {destination.country_name}
                      </h2>
                      <p className="text-slate-600">
                        Multiple pathways to residency depending on your situation and goals.
                      </p>
                    </div>

                    <div className="grid gap-4">
                      {destination.visas?.map((visa, i) => (
                        <VisaCard key={i} visa={visa} />
                      ))}
                    </div>
                  </motion.div>
                )}

                {activeSection === 'jobs' && (
                  <motion.div
                    key="jobs"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6"
                  >
                    <div>
                      <h2 className="text-3xl font-bold text-slate-900 mb-2">
                        Job Market & Opportunities
                      </h2>
                      <p className="text-slate-600">
                        Discover career opportunities and growing sectors in {destination.country_name}.
                      </p>
                    </div>

                    {destination.job_market?.topIndustries && (
                      <div className="bg-white rounded-2xl shadow-md p-6">
                        <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                          <span>🏢</span> Top Industries
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {destination.job_market.topIndustries.map((industry, i) => (
                            <span key={i} className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                              {industry}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {destination.job_market?.growingSectors && (
                      <div className="bg-white rounded-2xl shadow-md p-6">
                        <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                          <span>📈</span> Growing Sectors
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {destination.job_market.growingSectors.map((sector, i) => (
                            <span key={i} className="bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium">
                              {sector}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {destination.job_market?.avgSalaryTech && (
                      <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-6 text-center text-white">
                        <div className="text-white/80 text-sm">Average Tech Salary</div>
                        <div className="text-4xl font-bold">
                          €{destination.job_market.avgSalaryTech.toLocaleString()}/year
                        </div>
                      </div>
                    )}

                    {destination.job_market?.avg_salaries && (
                      <div className="bg-white rounded-2xl shadow-md p-6">
                        <h3 className="text-lg font-semibold text-slate-900 mb-4">Salary Ranges by Role</h3>
                        <div className="space-y-3">
                          {Object.entries(destination.job_market.avg_salaries).map(([role, salary], i) => (
                            <div key={i} className="flex justify-between items-center py-2 border-b border-slate-100 last:border-0">
                              <span className="text-slate-700">{role}</span>
                              <span className="text-slate-900 font-medium">{salary}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                )}

                {activeSection === 'lifestyle' && (
                  <motion.div
                    key="lifestyle"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6"
                  >
                    <div>
                      <h2 className="text-3xl font-bold text-slate-900 mb-2">
                        Lifestyle in {destination.country_name}
                      </h2>
                      <p className="text-slate-600">
                        Discover what daily life looks like as an expat in {destination.country_name}.
                      </p>
                    </div>

                    {/* Lifestyle Images */}
                    {galleryImages.length > 2 && (
                      <div className="grid grid-cols-2 gap-4">
                        {galleryImages.slice(2, 6).map((img) => (
                          <ImageCard key={img.id} image={img} size="medium" />
                        ))}
                      </div>
                    )}

                    {/* FAQs */}
                    {destination.faqs && destination.faqs.length > 0 && (
                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-slate-900">
                          Frequently Asked Questions
                        </h3>
                        <div className="space-y-3">
                          {destination.faqs.map((faq, i) => (
                            <details key={i} className="bg-white rounded-xl shadow-sm group">
                              <summary className="p-5 cursor-pointer text-slate-900 font-medium flex items-center justify-between">
                                {faq.question}
                                <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                              </summary>
                              <div className="px-5 pb-5 text-slate-600">{faq.answer}</div>
                            </details>
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* RIGHT Panel: CopilotKit Chat */}
          <div className="lg:w-2/5 xl:w-1/3 border-l border-slate-200 bg-white">
            <div className="sticky top-0 h-screen">
              <div className="h-full flex flex-col">
                <div className="bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-5">
                  <h2 className="text-lg font-semibold text-white flex items-center gap-2">
                    <span>💬</span> Ask ATLAS
                  </h2>
                  <p className="text-sm text-white/80">Your AI relocation assistant for {destination.country_name}</p>
                </div>
                <div className="flex-1 overflow-hidden">
                  <CopilotSidebar
                    labels={{
                      title: `ATLAS - ${destination.country_name} Expert`,
                      initial: `Hi! I'm ATLAS, your ${destination.country_name} relocation expert. I can help you with:\n\n• Visa options and requirements\n• Cost of living breakdown\n• Best cities to live in\n• Job market insights\n• Tax benefits and planning\n• Lifestyle and culture\n\nWhat would you like to know about moving to ${destination.country_name}?`,
                    }}
                    className="h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </VoiceChatProvider>
    </PageContextProvider>
  );
}
