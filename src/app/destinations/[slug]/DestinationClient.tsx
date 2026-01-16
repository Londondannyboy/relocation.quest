'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CopilotPopup } from '@copilotkit/react-ui';
import { PageContextProvider } from '@/components/voice';
import { HeroBanner } from '@/components/layout';

interface QuickFact {
  icon: string;
  label: string;
  value: string;
}

interface Highlight {
  icon?: string;
  text?: string;
  title?: string;
  description?: string;
}

interface Visa {
  name: string;
  type: string;
  duration: string;
  requirements: string[];
  processingTime: string;
  cost: string;
}

interface CostItem {
  category: string;
  item: string;
  cost: number;
  frequency: string;
}

interface CostOfLiving {
  currency: string;
  items: CostItem[];
}

interface JobMarket {
  remote_friendly?: boolean;
  in_demand_sectors?: string[];
  avg_salaries?: Record<string, string>;
  work_culture?: string;
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
  cost_of_living: CostOfLiving;
  job_market: JobMarket;
  faqs: FAQ[];
}

interface DestinationClientProps {
  slug: string;
  destination: Destination;
}

export default function DestinationClient({ slug, destination }: DestinationClientProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'visas' | 'costs' | 'jobs'>('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '🌟' },
    { id: 'visas', label: 'Visa Options', icon: '📋' },
    { id: 'costs', label: 'Cost of Living', icon: '💰' },
    { id: 'jobs', label: 'Job Market', icon: '💼' },
  ];

  return (
    <PageContextProvider pageSlug={`/destinations/${slug}`}>
      <main className="min-h-screen bg-gradient-to-b from-stone-50 to-white">
        {/* Hero Banner */}
        <HeroBanner
          variant="destination"
          title={destination.hero_title || `Moving to ${destination.country_name}`}
          subtitle={destination.hero_subtitle}
          image={destination.hero_image_url}
          flag={destination.flag}
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Destinations', href: '/destinations' },
            { label: destination.country_name },
          ]}
        />

        {/* Quick Facts */}
        <div className="max-w-6xl mx-auto px-4 -mt-12 relative z-10">
          <div className="bg-white rounded-2xl shadow-xl p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            {destination.quick_facts?.map((fact, i) => (
              <div key={i} className="text-center p-4">
                <div className="text-3xl mb-2">{fact.icon}</div>
                <div className="text-sm text-gray-500">{fact.label}</div>
                <div className="font-semibold text-gray-900">{fact.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="max-w-6xl mx-auto px-4 mt-8">
          <div className="flex gap-2 border-b border-gray-200 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`flex items-center gap-2 px-6 py-3 font-medium whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? 'text-stone-900 border-b-2 border-stone-900'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="max-w-6xl mx-auto px-4 py-8">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Why Move to {destination.country_name}?
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {destination.highlights?.map((highlight, i) => (
                    <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                      <div className="text-3xl mb-3">{highlight.icon || '✓'}</div>
                      <p className="text-gray-700">
                        {highlight.text || highlight.title || highlight.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* FAQs */}
              {destination.faqs && destination.faqs.length > 0 && (
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-4">
                    {destination.faqs.map((faq, i) => (
                      <details
                        key={i}
                        className="bg-white rounded-xl shadow-sm border border-gray-100 group"
                      >
                        <summary className="p-6 cursor-pointer font-medium text-gray-900 flex items-center justify-between">
                          {faq.question}
                          <span className="text-gray-400 group-open:rotate-180 transition-transform">
                            ▼
                          </span>
                        </summary>
                        <div className="px-6 pb-6 text-gray-600">{faq.answer}</div>
                      </details>
                    ))}
                  </div>
                </section>
              )}
            </div>
          )}

          {/* Visas Tab */}
          {activeTab === 'visas' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Visa Options for {destination.country_name}
              </h2>
              {destination.visas?.map((visa, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{visa.name}</h3>
                      <span className="inline-block px-3 py-1 text-sm bg-stone-100 text-stone-700 rounded-full mt-2">
                        {visa.type}
                      </span>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-500">Duration</div>
                      <div className="font-semibold text-gray-900">{visa.duration}</div>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-3">Requirements</h4>
                      <ul className="space-y-2">
                        {visa.requirements?.map((req, j) => (
                          <li
                            key={j}
                            className="flex items-start gap-2 text-sm text-gray-600"
                          >
                            <span className="text-green-500 mt-0.5">✓</span>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <div className="text-sm text-gray-500">Processing Time</div>
                        <div className="font-medium text-gray-900">
                          {visa.processingTime}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Cost</div>
                        <div className="font-medium text-gray-900">{visa.cost}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Costs Tab */}
          {activeTab === 'costs' && destination.cost_of_living && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Cost of Living in {destination.country_name}
              </h2>
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6 grid gap-4">
                  {destination.cost_of_living.items?.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0"
                    >
                      <div>
                        <div className="font-medium text-gray-900">{item.item}</div>
                        <div className="text-sm text-gray-500">{item.category}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-gray-900">
                          {destination.cost_of_living.currency}
                          {item.cost.toLocaleString()}
                        </div>
                        <div className="text-sm text-gray-500">{item.frequency}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Jobs Tab */}
          {activeTab === 'jobs' && destination.job_market && (
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Job Market in {destination.country_name}
              </h2>

              {destination.job_market.in_demand_sectors && (
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <span>🏢</span> In-Demand Sectors
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {destination.job_market.in_demand_sectors.map((sector, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-stone-100 text-stone-700 rounded-full text-sm font-medium"
                      >
                        {sector}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {destination.job_market.avg_salaries && (
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <span>💰</span> Average Salaries
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {Object.entries(destination.job_market.avg_salaries).map(
                      ([role, salary], i) => (
                        <div key={i} className="flex justify-between py-2">
                          <span className="text-gray-600">{role}</span>
                          <span className="font-medium text-gray-900">{salary}</span>
                        </div>
                      )
                    )}
                  </div>
                </div>
              )}

              {destination.job_market.work_culture && (
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <span>🌍</span> Work Culture
                  </h3>
                  <p className="text-gray-600">{destination.job_market.work_culture}</p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="max-w-6xl mx-auto px-4 pb-16">
          <div className="bg-gradient-to-r from-stone-900 to-stone-800 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">
              Ready to move to {destination.country_name}?
            </h2>
            <p className="text-stone-300 mb-6 max-w-xl mx-auto">
              Ask ATLAS for personalized advice about relocating to{' '}
              {destination.country_name}. Get answers about visas, costs, and more.
            </p>
            <Link
              href={`/?topic=${encodeURIComponent(destination.country_name)}`}
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-stone-900 rounded-xl font-medium hover:bg-stone-100 transition-colors"
            >
              <span className="text-xl">🎙️</span>
              <span>Talk to ATLAS about {destination.country_name}</span>
            </Link>
          </div>
        </div>

        {/* CopilotKit Chat Popup */}
        <CopilotPopup
          labels={{
            title: `ATLAS - ${destination.country_name} Expert`,
            initial: `Hi! I'm ATLAS, your relocation advisor. I see you're interested in ${destination.country_name}. What would you like to know about visas, cost of living, or job opportunities there?`,
          }}
        />
      </main>
    </PageContextProvider>
  );
}
