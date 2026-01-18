'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CopilotSidebar } from '@copilotkit/react-ui';
import { useCopilotReadable, useRenderToolCall } from '@copilotkit/react-core';
import { motion, AnimatePresence } from 'framer-motion';
import { PageContextProvider, VoiceChatProvider, SyncedVoiceButton } from '@/components/voice';
import { CostChart } from '@/components/mdx/CostChart';
import { ProsCons } from '@/components/mdx/ProsCons';
import { RelocationTimeline } from '@/components/mdx/RelocationTimeline';
import { useZepMemory } from '@/hooks/useZepMemory';
import { authClient } from '@/lib/auth/client';
import type { Guide } from './page';

// Icons
const CheckCircleIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const DocumentIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const CurrencyIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const ClockIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const ChevronDownIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

interface GuideClientProps {
  slug: string;
  guide: Guide;
}

// Fallback images for different guide categories
const CATEGORY_IMAGES: Record<string, string> = {
  'startup-visa': 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1920&q=80',
  'digital-nomad': 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&q=80',
  'remote-work': 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&q=80',
  'relocation': 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80',
  'ranking': 'https://images.unsplash.com/photo-1476304884326-cd2c88572c5f?w=1920&q=80',
  'default': 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80',
};

// Nav Bar Component
function NavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">🌍</span>
            <span className="text-white font-bold text-lg">Relocation<span className="text-amber-400">Quest</span></span>
          </Link>
          <div className="flex items-center gap-4 md:gap-8">
            <Link href="/destinations" className="text-white/90 hover:text-white text-sm font-medium transition-colors">
              Destinations
            </Link>
            <Link href="/dashboard" className="text-white/90 hover:text-white text-sm font-medium transition-colors hidden sm:block">
              Dashboard
            </Link>
            <Link
              href="/dashboard"
              className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

// Table of Contents Component
function TableOfContents({ sections, activeSection }: { sections: Array<{ id: string; title: string }>; activeSection: string }) {
  return (
    <div className="hidden xl:block fixed left-8 top-32 w-48">
      <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">On this page</h4>
      <nav className="space-y-2">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={`block text-sm transition-colors ${
              activeSection === section.id
                ? 'text-amber-500 font-medium'
                : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            {section.title}
          </a>
        ))}
      </nav>
    </div>
  );
}

// FAQ Item Component
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-200 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 flex items-center justify-between text-left"
      >
        <span className="font-medium text-slate-900">{question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-slate-400"
        >
          <ChevronDownIcon />
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-4 text-slate-600">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function GuideClient({ slug, guide }: GuideClientProps) {
  const [activeSection] = useState('overview');
  const { data: session } = authClient.useSession();
  const { userId, facts, isLoading: zepLoading } = useZepMemory(session?.user?.id ?? null);

  // Get hero image
  const heroImage = guide.hero_image_url || CATEGORY_IMAGES[guide.category || 'default'] || CATEGORY_IMAGES.default;

  // Build table of contents from sections
  const tocSections = [
    { id: 'overview', title: 'Overview' },
    ...(guide.requirements?.eligibility || guide.requirements?.documents ? [{ id: 'requirements', title: 'Requirements' }] : []),
    ...(guide.application_process?.length ? [{ id: 'process', title: 'Application Process' }] : []),
    ...(guide.costs?.items?.length ? [{ id: 'costs', title: 'Costs' }] : []),
    ...(guide.pros?.length || guide.cons?.length ? [{ id: 'pros-cons', title: 'Pros & Cons' }] : []),
    ...(guide.faqs?.length ? [{ id: 'faqs', title: 'FAQs' }] : []),
  ];

  // Make guide data readable by CopilotKit
  useCopilotReadable({
    description: 'Current guide being viewed',
    value: {
      title: guide.title,
      category: guide.category,
      country: guide.country_slug,
      summary: guide.executive_summary,
      requirements: guide.requirements,
      costs: guide.costs,
      pros: guide.pros,
      cons: guide.cons,
    },
  });

  // CopilotKit tool renderers
  useRenderToolCall({
    name: 'show_cost_breakdown',
    description: 'Display an interactive cost breakdown chart',
    parameters: [
      { name: 'items', type: 'object[]', description: 'Array of cost items with label and amount' },
      { name: 'total', type: 'number', description: 'Total cost', required: false },
      { name: 'currency', type: 'string', description: 'Currency symbol', required: false },
    ],
    render: ({ status, args }) => {
      if (status === 'inProgress') {
        return (
          <div className="p-4 animate-pulse">
            <div className="h-6 bg-slate-200 rounded w-1/2 mb-4" />
            <div className="space-y-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-8 bg-slate-200 rounded" />
              ))}
            </div>
          </div>
        );
      }
      return (
        <div className="p-4">
          <CostChart
            items={args.items || []}
            total={args.total}
            currency={args.currency || 'EUR'}
          />
        </div>
      );
    },
  }, []);

  useRenderToolCall({
    name: 'show_pros_cons',
    description: 'Display pros and cons comparison',
    parameters: [
      { name: 'pros', type: 'string[]', description: 'List of advantages' },
      { name: 'cons', type: 'string[]', description: 'List of disadvantages' },
      { name: 'country', type: 'string', description: 'Country name', required: false },
    ],
    render: ({ status, args }) => {
      if (status === 'inProgress') {
        return (
          <div className="p-4 animate-pulse">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-4 bg-emerald-100 rounded" />
                ))}
              </div>
              <div className="space-y-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-4 bg-rose-100 rounded" />
                ))}
              </div>
            </div>
          </div>
        );
      }
      return (
        <div className="p-4">
          <ProsCons
            pros={args.pros || []}
            cons={args.cons || []}
            country={args.country}
          />
        </div>
      );
    },
  }, []);

  useRenderToolCall({
    name: 'show_timeline',
    description: 'Display a relocation timeline',
    parameters: [
      { name: 'country', type: 'string', description: 'Destination country' },
      { name: 'relocationType', type: 'string', description: 'Type of relocation', required: false },
      { name: 'familyStatus', type: 'string', description: 'Family status', required: false },
    ],
    render: ({ status, args }) => {
      if (status === 'inProgress') {
        return (
          <div className="p-4 animate-pulse">
            <div className="space-y-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-10 h-10 bg-slate-200 rounded-full" />
                  <div className="flex-1 h-16 bg-slate-200 rounded" />
                </div>
              ))}
            </div>
          </div>
        );
      }
      return (
        <div className="p-4">
          <RelocationTimeline
            country={args.country || guide.country_slug || 'Unknown'}
          />
        </div>
      );
    },
  }, [guide.country_slug]);

  // Build personalized instructions
  const firstName = facts?.find(f => f.includes('name'))?.split(':')[1]?.trim();
  const userContext = userId && !zepLoading
    ? `User Context:
- Name: ${firstName || 'Guest'}
- Viewing: ${guide.title}
- Category: ${guide.category || 'general'}
${guide.country_slug ? `- Related Country: ${guide.country_slug}` : ''}`
    : '';

  const instructions = `You are ATLAS, an expert relocation advisor. The user is reading "${guide.title}".

${userContext}

Guide Summary:
${guide.executive_summary || 'No summary available.'}

${guide.requirements?.eligibility ? `Key Requirements: ${guide.requirements.eligibility.slice(0, 3).join(', ')}` : ''}

Help the user understand this guide. You can:
1. Explain requirements in detail
2. Show cost breakdowns using show_cost_breakdown tool
3. Compare pros and cons using show_pros_cons tool
4. Create application timelines using show_timeline tool

Be helpful, concise, and provide accurate information about ${guide.title}.`;

  return (
    <PageContextProvider pageSlug={`/relocation/guide/${slug}`}>
      <VoiceChatProvider>
        <div className="min-h-screen bg-slate-50">
          <NavBar />

          {/* Hero Section */}
          <div className="relative h-[50vh] min-h-[400px] pt-16">
            <div className="absolute inset-0">
              <img
                src={heroImage}
                alt={guide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-slate-900/30" />
            </div>

            <div className="relative h-full flex flex-col justify-end pb-12 px-4 md:px-8 max-w-5xl mx-auto">
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-sm text-white/60 mb-4">
                <Link href="/" className="hover:text-white">Home</Link>
                <span>/</span>
                <Link href="/guides" className="hover:text-white">Guides</Link>
                <span>/</span>
                <span className="text-white">{guide.title}</span>
              </nav>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                {guide.title}
              </h1>

              {guide.subtitle && (
                <p className="text-lg md:text-xl text-white/80 mb-6 max-w-2xl">
                  {guide.subtitle}
                </p>
              )}

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-white/70">
                {guide.read_time_minutes && (
                  <span className="flex items-center gap-1">
                    <ClockIcon />
                    {guide.read_time_minutes} min read
                  </span>
                )}
                {guide.updated_at && (
                  <span>Updated {new Date(guide.updated_at).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</span>
                )}
                {guide.category && (
                  <span className="px-3 py-1 bg-amber-500/20 text-amber-300 rounded-full text-xs font-medium uppercase">
                    {guide.category.replace('-', ' ')}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex">
            {/* Table of Contents (Desktop) */}
            <TableOfContents sections={tocSections} activeSection={activeSection} />

            {/* Content Area */}
            <main className="flex-1 max-w-3xl mx-auto px-4 md:px-8 py-12">
              {/* Executive Summary */}
              <section id="overview" className="mb-12">
                {guide.executive_summary && (
                  <div className="prose prose-lg max-w-none">
                    <p className="text-slate-600 leading-relaxed">{guide.executive_summary}</p>
                  </div>
                )}
              </section>

              {/* Requirements */}
              {(guide.requirements?.eligibility || guide.requirements?.documents) && (
                <section id="requirements" className="mb-12">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <CheckCircleIcon />
                    Requirements
                  </h2>

                  {guide.requirements.eligibility && (
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-slate-800 mb-3">Eligibility Criteria</h3>
                      <ul className="space-y-2">
                        {guide.requirements.eligibility.map((req, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="text-emerald-500 mt-0.5">✓</span>
                            <span className="text-slate-600">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {guide.requirements.documents && (
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-slate-800 mb-3 flex items-center gap-2">
                        <DocumentIcon />
                        Required Documents
                      </h3>
                      <ul className="space-y-2">
                        {guide.requirements.documents.map((doc, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="text-blue-500 mt-0.5">📄</span>
                            <span className="text-slate-600">{doc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {guide.requirements.financial && (
                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                      <h3 className="text-lg font-semibold text-amber-800 mb-2 flex items-center gap-2">
                        <CurrencyIcon />
                        Financial Requirements
                      </h3>
                      <ul className="space-y-1 text-amber-700">
                        {guide.requirements.financial.minimum_income && (
                          <li>Minimum income: €{guide.requirements.financial.minimum_income.toLocaleString()}/month</li>
                        )}
                        {guide.requirements.financial.proof_of_funds && (
                          <li>Proof of funds: €{guide.requirements.financial.proof_of_funds.toLocaleString()}</li>
                        )}
                      </ul>
                    </div>
                  )}
                </section>
              )}

              {/* Application Process */}
              {guide.application_process && guide.application_process.length > 0 && (
                <section id="process" className="mb-12">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">Application Process</h2>
                  <div className="space-y-4">
                    {guide.application_process.map((step, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex gap-4"
                      >
                        <div className="flex-shrink-0 w-10 h-10 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold">
                          {step.step}
                        </div>
                        <div className="flex-1 bg-white rounded-xl p-4 shadow-sm border border-slate-100">
                          <h3 className="font-semibold text-slate-900">{step.title}</h3>
                          <p className="text-slate-600 text-sm mt-1">{step.description}</p>
                          {step.duration && (
                            <span className="inline-block mt-2 text-xs text-amber-600 bg-amber-50 px-2 py-1 rounded">
                              {step.duration}
                            </span>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </section>
              )}

              {/* Costs */}
              {guide.costs?.items && guide.costs.items.length > 0 && (
                <section id="costs" className="mb-12">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <CurrencyIcon />
                    Costs Breakdown
                  </h2>
                  <CostChart
                    items={guide.costs.items.map(item => ({
                      label: item.item,
                      amount: item.amount,
                    }))}
                    total={guide.costs.total}
                    currency={guide.costs.currency || 'EUR'}
                  />
                </section>
              )}

              {/* Pros & Cons */}
              {(guide.pros?.length || guide.cons?.length) && (
                <section id="pros-cons" className="mb-12">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">Pros & Cons</h2>
                  <ProsCons
                    pros={guide.pros || []}
                    cons={guide.cons || []}
                    country={guide.country_slug || undefined}
                  />
                </section>
              )}

              {/* Content Sections */}
              {guide.content_sections && guide.content_sections.length > 0 && (
                <div className="space-y-12">
                  {guide.content_sections.map((section) => (
                    <section key={section.id} id={section.id}>
                      <h2 className="text-2xl font-bold text-slate-900 mb-4">{section.title}</h2>
                      <div className="prose prose-slate max-w-none">
                        <p className="text-slate-600">{section.content}</p>
                      </div>
                    </section>
                  ))}
                </div>
              )}

              {/* FAQs */}
              {guide.faqs && guide.faqs.length > 0 && (
                <section id="faqs" className="mb-12">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
                  <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
                    {guide.faqs.map((faq, i) => (
                      <FAQItem key={i} question={faq.question} answer={faq.answer} />
                    ))}
                  </div>
                </section>
              )}

              {/* Related Guides */}
              {guide.related_guides && guide.related_guides.length > 0 && (
                <section className="mb-12">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">Related Guides</h2>
                  <div className="flex flex-wrap gap-3">
                    {guide.related_guides.map((relatedSlug) => (
                      <Link
                        key={relatedSlug}
                        href={`/relocation/guide/${relatedSlug}`}
                        className="px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg text-slate-700 text-sm transition-colors"
                      >
                        {relatedSlug.replace(/-/g, ' ')}
                      </Link>
                    ))}
                  </div>
                </section>
              )}
            </main>

            {/* CopilotKit Sidebar */}
            <div className="hidden lg:block w-[400px] flex-shrink-0">
              <div className="sticky top-20 h-[calc(100vh-5rem)]">
                <CopilotSidebar
                  instructions={instructions}
                  labels={{
                    title: 'Ask about this guide',
                    initial: `Hi! I'm ATLAS. Ask me anything about ${guide.title}.`,
                  }}
                  className="h-full"
                />
              </div>
            </div>
          </div>

          {/* Voice Button */}
          <SyncedVoiceButton />
        </div>
      </VoiceChatProvider>
    </PageContextProvider>
  );
}
