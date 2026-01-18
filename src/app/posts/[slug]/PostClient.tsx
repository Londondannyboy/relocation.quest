'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CopilotSidebar } from '@copilotkit/react-ui';
import { useCopilotReadable } from '@copilotkit/react-core';
import { motion, AnimatePresence } from 'framer-motion';
import { PageContextProvider, VoiceChatProvider, SyncedVoiceButton } from '@/components/voice';
import { useZepMemory } from '@/hooks/useZepMemory';
import { authClient } from '@/lib/auth/client';
import type { Post } from './page';

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

interface PostClientProps {
  slug: string;
  post: Post;
}

// Fallback images
const CATEGORY_IMAGES: Record<string, string> = {
  'digital-nomad': 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&q=80',
  'visa': 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&q=80',
  'relocation': 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80',
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

export default function PostClient({ slug, post }: PostClientProps) {
  const { data: session } = authClient.useSession();
  const { userId, facts, isLoading: zepLoading } = useZepMemory(session?.user?.id ?? null);

  // Get hero image
  const heroImage = post.hero_image_url || CATEGORY_IMAGES[post.category || 'default'] || CATEGORY_IMAGES.default;

  // Make post data readable by CopilotKit
  useCopilotReadable({
    description: 'Current post being viewed',
    value: {
      title: post.title,
      category: post.category,
      country: post.country_slug,
    },
  });

  // Build personalized instructions
  const firstName = facts?.find(f => f.includes('name'))?.split(':')[1]?.trim();
  const userContext = userId && !zepLoading
    ? `User Context:
- Name: ${firstName || 'Guest'}
- Viewing: ${post.title}`
    : '';

  const instructions = `You are ATLAS, an expert relocation advisor. The user is reading "${post.title}".

${userContext}

Help the user understand this content and answer any questions about:
1. The topics covered in this post
2. Related relocation information
3. Practical advice for their situation

Be helpful and provide accurate information.`;

  return (
    <PageContextProvider pageSlug={`/posts/${slug}`}>
      <VoiceChatProvider>
        <div className="min-h-screen bg-white">
          <NavBar />

          {/* Hero Section */}
          <div className="relative h-[40vh] min-h-[300px] pt-16">
            <div className="absolute inset-0">
              <img
                src={heroImage}
                alt={post.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
            </div>

            <div className="relative h-full flex flex-col justify-end pb-10 px-4 md:px-8 max-w-4xl mx-auto">
              {/* Category Tag */}
              {post.category && (
                <span className="inline-block mb-3 px-3 py-1 bg-amber-500 text-white rounded-full text-xs font-medium uppercase tracking-wide w-fit">
                  {post.category.replace('-', ' ')}
                </span>
              )}

              {/* Title */}
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                {post.title}
              </h1>

              {/* Meta */}
              <div className="flex items-center gap-4 text-sm text-white/70">
                {post.published_at && (
                  <span className="flex items-center gap-1">
                    <ClockIcon />
                    {new Date(post.published_at).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </span>
                )}
                {post.author && <span>by {post.author}</span>}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex max-w-7xl mx-auto">
            {/* Content Area */}
            <main className="flex-1 max-w-3xl px-4 md:px-8 py-12">
              {/* Body Content */}
              {post.body_content && (
                <div className="prose prose-slate prose-lg max-w-none">
                  <div dangerouslySetInnerHTML={{ __html: post.body_content }} />
                </div>
              )}

              {/* Related Country */}
              {post.country_slug && (
                <div className="mt-8 p-6 bg-slate-50 rounded-xl">
                  <h3 className="font-semibold text-slate-900 mb-2">Related Destination</h3>
                  <Link
                    href={`/destinations/${post.country_slug}`}
                    className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700"
                  >
                    Explore {post.country_slug.charAt(0).toUpperCase() + post.country_slug.slice(1)} →
                  </Link>
                </div>
              )}

              {/* FAQs */}
              {post.faqs && post.faqs.length > 0 && (
                <section className="mt-12">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
                  <div className="bg-slate-50 rounded-xl p-6">
                    {post.faqs.map((faq, i) => (
                      <FAQItem key={i} question={faq.question} answer={faq.answer} />
                    ))}
                  </div>
                </section>
              )}

              {/* CTA */}
              <div className="mt-12 p-6 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl text-white">
                <h3 className="text-xl font-bold mb-2">Need personalized advice?</h3>
                <p className="text-white/90 mb-4">Chat with our AI advisor for tailored relocation guidance.</p>
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
                    title: 'Ask about this post',
                    initial: `Hi! I can answer questions about "${post.title}". How can I help?`,
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
