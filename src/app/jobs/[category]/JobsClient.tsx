'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CopilotSidebar } from '@copilotkit/react-ui';
import { useCopilotReadable } from '@copilotkit/react-core';
import { motion } from 'framer-motion';
import { PageContextProvider, VoiceChatProvider, SyncedVoiceButton } from '@/components/voice';
import { useZepMemory } from '@/hooks/useZepMemory';
import { authClient } from '@/lib/auth/client';
import type { JobCategory, Job } from './page';

// Icons
const SearchIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const MapPinIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const BriefcaseIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const CheckBadgeIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
  </svg>
);

interface JobsClientProps {
  category: JobCategory;
  jobs: Job[];
}

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
            <Link href="/jobs" className="text-white/90 hover:text-white text-sm font-medium transition-colors">
              Jobs
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

// Job Card Component
function JobCard({ job, index }: { job: Job; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
    >
      <div className="flex items-start gap-4">
        {/* Company Logo */}
        <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0">
          {job.company_logo ? (
            <img src={job.company_logo} alt={job.company} className="w-full h-full object-contain rounded-lg" />
          ) : (
            <BriefcaseIcon />
          )}
        </div>

        {/* Job Info */}
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-slate-900 truncate">{job.title}</h3>
          <p className="text-slate-600 text-sm">{job.company}</p>

          <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-slate-500">
            <span className="flex items-center gap-1">
              <MapPinIcon />
              {job.location}
            </span>
            {job.salary_range && (
              <span>{job.salary_range}</span>
            )}
            <span className="text-slate-400">{job.job_type}</span>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-2 mt-3">
            {job.visa_sponsorship && (
              <span className="inline-flex items-center gap-1 px-2 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">
                <CheckBadgeIcon />
                Visa Sponsorship
              </span>
            )}
            {job.relocation_package && (
              <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                <CheckBadgeIcon />
                Relocation Package
              </span>
            )}
          </div>
        </div>

        {/* Apply Button */}
        {job.url && (
          <a
            href={job.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-lg text-sm font-medium transition-colors"
          >
            Apply
          </a>
        )}
      </div>
    </motion.div>
  );
}

// Sample jobs for when DB is empty
const SAMPLE_JOBS: Job[] = [
  {
    id: 1,
    title: 'Senior Software Engineer',
    company: 'Global Tech Corp',
    company_logo: null,
    location: 'Berlin, Germany',
    salary_range: '€70,000 - €95,000',
    job_type: 'Full-time',
    visa_sponsorship: true,
    relocation_package: true,
    description: 'Join our engineering team...',
    posted_at: new Date().toISOString(),
    url: '#',
  },
  {
    id: 2,
    title: 'Product Manager',
    company: 'Innovation Labs',
    company_logo: null,
    location: 'Amsterdam, Netherlands',
    salary_range: '€65,000 - €85,000',
    job_type: 'Full-time',
    visa_sponsorship: true,
    relocation_package: true,
    description: 'Lead product development...',
    posted_at: new Date().toISOString(),
    url: '#',
  },
  {
    id: 3,
    title: 'Data Scientist',
    company: 'AI Ventures',
    company_logo: null,
    location: 'Lisbon, Portugal',
    salary_range: '€55,000 - €75,000',
    job_type: 'Full-time',
    visa_sponsorship: true,
    relocation_package: false,
    description: 'Work on cutting-edge ML...',
    posted_at: new Date().toISOString(),
    url: '#',
  },
];

export default function JobsClient({ category, jobs }: JobsClientProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [showVisaOnly, setShowVisaOnly] = useState(false);
  const { data: session } = authClient.useSession();
  const { userId, facts, isLoading: zepLoading } = useZepMemory(session?.user?.id ?? null);

  // Use sample jobs if none from DB
  const displayJobs = jobs.length > 0 ? jobs : SAMPLE_JOBS;

  // Filter jobs
  const filteredJobs = displayJobs.filter(job => {
    const matchesSearch = !searchQuery ||
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesVisa = !showVisaOnly || job.visa_sponsorship;
    return matchesSearch && matchesVisa;
  });

  // Make data readable by CopilotKit
  useCopilotReadable({
    description: 'Current job category and listings',
    value: {
      category: category.title,
      totalJobs: filteredJobs.length,
      locations: [...new Set(displayJobs.map(j => j.location))],
    },
  });

  // Build personalized instructions
  const firstName = facts?.find(f => f.includes('name'))?.split(':')[1]?.trim();
  const userContext = userId && !zepLoading
    ? `User Context:
- Name: ${firstName || 'Guest'}
- Browsing: ${category.title}`
    : '';

  const instructions = `You are ATLAS, an expert relocation and career advisor. The user is browsing ${category.title}.

${userContext}

Available Jobs: ${filteredJobs.length} listings
Locations: ${[...new Set(displayJobs.map(j => j.location))].slice(0, 5).join(', ')}

Help the user find suitable jobs. You can:
1. Suggest relevant positions based on their skills
2. Explain visa sponsorship requirements
3. Compare relocation packages
4. Discuss salary expectations by location

Be helpful and provide practical job search advice.`;

  return (
    <PageContextProvider pageSlug={`/jobs/${category.slug}`}>
      <VoiceChatProvider>
        <div className="min-h-screen bg-slate-50">
          <NavBar />

          {/* Hero Section */}
          <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                {category.title}
              </h1>
              {category.subtitle && (
                <p className="text-lg text-white/70 mb-6">{category.subtitle}</p>
              )}

              {/* Search Bar */}
              <div className="flex flex-col sm:flex-row gap-4 max-w-2xl">
                <div className="relative flex-1">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                    <SearchIcon />
                  </span>
                  <input
                    type="text"
                    placeholder="Search jobs, companies, locations..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
                <label className="flex items-center gap-2 text-white cursor-pointer">
                  <input
                    type="checkbox"
                    checked={showVisaOnly}
                    onChange={(e) => setShowVisaOnly(e.target.checked)}
                    className="w-4 h-4 rounded border-white/30 bg-white/10 text-amber-500 focus:ring-amber-500"
                  />
                  <span className="text-sm">Visa sponsorship only</span>
                </label>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-6 mt-6 text-sm text-white/60">
                <span>{filteredJobs.length} jobs found</span>
                <span>{[...new Set(displayJobs.map(j => j.location))].length} locations</span>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex max-w-7xl mx-auto">
            {/* Job Listings */}
            <main className="flex-1 px-4 md:px-8 py-8">
              {category.description && (
                <p className="text-slate-600 mb-6">{category.description}</p>
              )}

              {/* Featured Companies */}
              {category.featured_companies && category.featured_companies.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-sm font-medium text-slate-500 mb-3">Featured Companies</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.featured_companies.map((company) => (
                      <span
                        key={company}
                        className="px-3 py-1 bg-white border border-slate-200 rounded-full text-sm text-slate-700"
                      >
                        {company}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Job Cards */}
              <div className="space-y-4">
                {filteredJobs.map((job, index) => (
                  <JobCard key={job.id} job={job} index={index} />
                ))}

                {filteredJobs.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-slate-500">No jobs match your search criteria.</p>
                    <button
                      onClick={() => {
                        setSearchQuery('');
                        setShowVisaOnly(false);
                      }}
                      className="mt-2 text-amber-500 hover:text-amber-600"
                    >
                      Clear filters
                    </button>
                  </div>
                )}
              </div>

              {/* Other Categories */}
              <div className="mt-12 pt-8 border-t border-slate-200">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Explore Other Categories</h3>
                <div className="flex flex-wrap gap-3">
                  {['no-experience', 'visa-sponsorship', 'relocation-packages', 'international', 'dubai', 'australia'].map((cat) => (
                    <Link
                      key={cat}
                      href={`/jobs/${cat}`}
                      className="px-4 py-2 bg-white border border-slate-200 hover:border-amber-300 hover:bg-amber-50 rounded-lg text-slate-700 text-sm transition-colors"
                    >
                      {cat.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                    </Link>
                  ))}
                </div>
              </div>
            </main>

            {/* CopilotKit Sidebar */}
            <div className="hidden lg:block w-[400px] flex-shrink-0">
              <div className="sticky top-20 h-[calc(100vh-5rem)]">
                <CopilotSidebar
                  instructions={instructions}
                  labels={{
                    title: 'Job Search Assistant',
                    initial: `Hi! I can help you find the perfect ${category.title.toLowerCase()}. What are you looking for?`,
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
