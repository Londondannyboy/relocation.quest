'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CopilotSidebar } from '@copilotkit/react-ui';
import { useCopilotReadable } from '@copilotkit/react-core';
import { motion, AnimatePresence } from 'framer-motion';
import { PageContextProvider, VoiceChatProvider, SyncedVoiceButton } from '@/components/voice';
import { useZepMemory } from '@/hooks/useZepMemory';
import { authClient } from '@/lib/auth/client';
import type { Article } from './page';

// Icons
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

const UserIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

interface ArticleClientProps {
  slug: string;
  article: Article;
}

// Category images for articles
const CATEGORY_IMAGES: Record<string, string> = {
  'moving-guide': 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80',
  'visa-guide': 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&q=80',
  'lifestyle': 'https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?w=1920&q=80',
  'work': 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&q=80',
  'tax': 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1920&q=80',
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
            <Link href="/articles" className="text-white/90 hover:text-white text-sm font-medium transition-colors hidden sm:block">
              Articles
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
function TableOfContents({ items, activeId }: { items: Array<{ id: string; title: string; level: number }>; activeId: string }) {
  if (!items || items.length === 0) return null;

  return (
    <div className="hidden xl:block sticky top-24 w-64">
      <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">Contents</h4>
      <nav className="space-y-2">
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`block text-sm transition-colors ${
              item.level === 2 ? 'pl-0' : 'pl-4'
            } ${
              activeId === item.id
                ? 'text-amber-500 font-medium'
                : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            {item.title}
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

// Key Takeaways Component
function KeyTakeaways({ items }: { items: string[] }) {
  if (!items || items.length === 0) return null;

  return (
    <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
      <h3 className="text-lg font-semibold text-amber-800 mb-4 flex items-center gap-2">
        <span>💡</span>
        Key Takeaways
      </h3>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="text-amber-500 mt-0.5">•</span>
            <span className="text-amber-900">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ArticleClient({ slug, article }: ArticleClientProps) {
  const [activeSection] = useState('');
  const { data: session } = authClient.useSession();
  const { userId, facts, isLoading: zepLoading } = useZepMemory(session?.user?.id ?? null);

  // Get hero image
  const heroImage = article.hero_image_url || CATEGORY_IMAGES[article.category || 'default'] || CATEGORY_IMAGES.default;

  // Make article data readable by CopilotKit
  useCopilotReadable({
    description: 'Current article being viewed',
    value: {
      title: article.title,
      category: article.category,
      countries: article.countries,
      introduction: article.introduction,
      key_takeaways: article.key_takeaways,
    },
  });

  // Build personalized instructions
  const firstName = facts?.find(f => f.includes('name'))?.split(':')[1]?.trim();
  const userContext = userId && !zepLoading
    ? `User Context:
- Name: ${firstName || 'Guest'}
- Viewing article: ${article.title}`
    : '';

  const instructions = `You are ATLAS, an expert relocation advisor. The user is reading the article "${article.title}".

${userContext}

Article Summary:
${article.introduction || 'No introduction available.'}

${article.key_takeaways?.length ? `Key Points: ${article.key_takeaways.slice(0, 3).join('; ')}` : ''}

Help the user understand this article. Answer questions about:
1. The topics covered in this article
2. Related relocation information
3. Practical advice for their situation

Be helpful, concise, and provide accurate information.`;

  return (
    <PageContextProvider pageSlug={`/articles/${slug}`}>
      <VoiceChatProvider>
        <div className="min-h-screen bg-white">
          <NavBar />

          {/* Hero Section */}
          <div className="relative h-[40vh] min-h-[320px] pt-16">
            <div className="absolute inset-0">
              <img
                src={heroImage}
                alt={article.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
            </div>

            <div className="relative h-full flex flex-col justify-end pb-10 px-4 md:px-8 max-w-4xl mx-auto">
              {/* Category Tag */}
              {article.category && (
                <span className="inline-block mb-3 px-3 py-1 bg-amber-500 text-white rounded-full text-xs font-medium uppercase tracking-wide w-fit">
                  {article.category.replace('-', ' ')}
                </span>
              )}

              {/* Title */}
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                {article.title}
              </h1>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-white/70">
                {article.author && (
                  <span className="flex items-center gap-1">
                    <UserIcon />
                    {article.author}
                  </span>
                )}
                {article.read_time_minutes && (
                  <span className="flex items-center gap-1">
                    <ClockIcon />
                    {article.read_time_minutes} min read
                  </span>
                )}
                {article.published_at && (
                  <span>
                    {new Date(article.published_at).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex max-w-7xl mx-auto">
            {/* Sidebar - Table of Contents */}
            <aside className="hidden xl:block w-64 flex-shrink-0 px-4 py-12">
              <TableOfContents items={article.table_of_contents || []} activeId={activeSection} />
            </aside>

            {/* Content Area */}
            <main className="flex-1 max-w-3xl px-4 md:px-8 py-12">
              {/* Introduction */}
              {article.introduction && (
                <div className="prose prose-lg max-w-none mb-8">
                  <p className="text-xl text-slate-600 leading-relaxed font-medium">
                    {article.introduction}
                  </p>
                </div>
              )}

              {/* Key Takeaways (at top for quick scanning) */}
              {article.key_takeaways && article.key_takeaways.length > 0 && (
                <KeyTakeaways items={article.key_takeaways} />
              )}

              {/* Body Content */}
              {article.body_content && (
                <div className="prose prose-slate prose-lg max-w-none">
                  <div dangerouslySetInnerHTML={{ __html: article.body_content }} />
                </div>
              )}

              {/* Related Countries */}
              {article.countries && article.countries.length > 0 && (
                <div className="mt-12 mb-8">
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">Related Destinations</h3>
                  <div className="flex flex-wrap gap-2">
                    {article.countries.map((country) => (
                      <Link
                        key={country}
                        href={`/destinations/${country.toLowerCase()}`}
                        className="px-4 py-2 bg-slate-100 hover:bg-amber-100 hover:text-amber-800 rounded-lg text-slate-700 text-sm transition-colors"
                      >
                        {country}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* FAQs */}
              {article.faqs && article.faqs.length > 0 && (
                <section className="mt-12">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
                  <div className="bg-slate-50 rounded-xl p-6">
                    {article.faqs.map((faq, i) => (
                      <FAQItem key={i} question={faq.question} answer={faq.answer} />
                    ))}
                  </div>
                </section>
              )}

              {/* Related Articles */}
              {article.related_articles && article.related_articles.length > 0 && (
                <section className="mt-12">
                  <h2 className="text-xl font-semibold text-slate-900 mb-4">Related Articles</h2>
                  <div className="flex flex-wrap gap-3">
                    {article.related_articles.map((relatedSlug) => (
                      <Link
                        key={relatedSlug}
                        href={`/articles/${relatedSlug}`}
                        className="px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg text-slate-700 text-sm transition-colors"
                      >
                        {relatedSlug.replace(/-/g, ' ')}
                      </Link>
                    ))}
                  </div>
                </section>
              )}

              {/* CTA */}
              <div className="mt-12 p-6 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl text-white">
                <h3 className="text-xl font-bold mb-2">Ready to start your relocation journey?</h3>
                <p className="text-white/90 mb-4">Get personalized guidance from our AI advisor.</p>
                <Link
                  href="/dashboard"
                  className="inline-block bg-white text-amber-600 px-6 py-3 rounded-lg font-semibold hover:bg-amber-50 transition-colors"
                >
                  Get Started Free
                </Link>
              </div>
            </main>

            {/* CopilotKit Sidebar */}
            <div className="hidden lg:block w-[400px] flex-shrink-0">
              <div className="sticky top-20 h-[calc(100vh-5rem)]">
                <CopilotSidebar
                  instructions={instructions}
                  labels={{
                    title: 'Ask about this article',
                    initial: `Hi! I can answer questions about "${article.title}". What would you like to know?`,
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
