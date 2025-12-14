import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Relocation Quest | International Relocation Services, Visa Guides & Jobs',
  description: 'Your complete guide to international relocation. Discover visa options, cost of living, job opportunities, and expert services across 50+ destinations worldwide.',
  alternates: {
    canonical: 'https://relocation.quest',
  },
  openGraph: {
    title: 'Relocation Quest | Your Complete International Relocation Guide',
    description: 'Discover visa options, cost of living, and job opportunities across 50+ destinations.',
    url: 'https://relocation.quest',
    siteName: 'Relocation Quest',
    type: 'website',
  },
}

// Revalidate homepage every hour
export const revalidate = 3600

// JSON-LD for homepage
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Relocation Quest',
  url: 'https://relocation.quest',
  description: 'Complete guide to international relocation with visa guides, cost calculators, and job opportunities.',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://relocation.quest/destinations?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
}

const featuredDestinations = [
  {
    slug: 'portugal',
    name: 'Portugal',
    flag: '🇵🇹',
    tagline: 'Digital Nomad Paradise',
    gradient: 'from-green-600 to-red-600',
    highlights: ['D7 Visa', 'Low Cost of Living', 'EU Membership'],
    costIndex: 65, // Compared to London = 100
  },
  {
    slug: 'spain',
    name: 'Spain',
    flag: '🇪🇸',
    tagline: 'Mediterranean Lifestyle',
    gradient: 'from-red-500 to-yellow-500',
    highlights: ['Digital Nomad Visa', 'Excellent Healthcare', 'Rich Culture'],
    costIndex: 68,
  },
  {
    slug: 'dubai',
    name: 'Dubai',
    flag: '🇦🇪',
    tagline: 'Tax-Free Haven',
    gradient: 'from-yellow-500 to-orange-600',
    highlights: ['No Income Tax', 'Booming Economy', 'Modern Infrastructure'],
    costIndex: 85,
  },
  {
    slug: 'canada',
    name: 'Canada',
    flag: '🇨🇦',
    tagline: 'Express Entry Fast-Track',
    gradient: 'from-red-600 to-red-700',
    highlights: ['Express Entry', 'Strong Economy', 'Quality Healthcare'],
    costIndex: 75,
  },
  {
    slug: 'australia',
    name: 'Australia',
    flag: '🇦🇺',
    tagline: 'Skilled Migration Hub',
    gradient: 'from-orange-500 to-red-600',
    highlights: ['Skilled Visas', 'High Salaries', 'Beach Lifestyle'],
    costIndex: 90,
  },
  {
    slug: 'cyprus',
    name: 'Cyprus',
    flag: '🇨🇾',
    tagline: 'EU Island Gem',
    gradient: 'from-blue-500 to-orange-500',
    highlights: ['Digital Nomad Visa', 'Low Taxes', 'English Spoken'],
    costIndex: 62,
  },
]

const stats = [
  { label: 'Destinations', value: '50+', icon: '🌍' },
  { label: 'Visa Guides', value: '100+', icon: '📋' },
  { label: 'Job Listings', value: '500+', icon: '💼' },
  { label: 'Success Stories', value: '1000+', icon: '✨' },
]

const guides = [
  {
    title: 'Relocation Tax Allowances',
    slug: 'relocation-tax-allowances',
    description: 'Complete guide to HMRC tax allowances for relocation',
    searches: '33,100/month',
    category: 'Tax',
  },
  {
    title: 'Digital Nomad Visas Worldwide',
    slug: 'digital-nomad-visas-worldwide',
    description: 'Compare digital nomad visa options across 40+ countries',
    searches: '8,400/month',
    category: 'Visas',
  },
  {
    title: 'Corporate Relocation Packages',
    slug: 'corporate-relocation-packages',
    description: 'What companies offer for international relocations',
    searches: '1,440/month',
    category: 'Corporate',
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section with Video Background */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-white">
        {/* Video Background Layer */}
        <div className="absolute inset-0 opacity-60">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80')] bg-cover bg-center bg-fixed" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/70 to-slate-950/90" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-20">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-8 hover:bg-white/20 transition-all">
              <span className="text-2xl">🌍</span>
              <span className="text-white/90 text-sm font-medium">Your International Relocation Guide</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-6xl lg:text-7xl font-black mb-6 leading-tight text-white tracking-tight">
              Move Abroad <br />
              <span className="bg-gradient-to-r from-amber-300 via-orange-300 to-rose-300 bg-clip-text text-transparent">
                With Confidence
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl lg:text-2xl text-slate-200 max-w-2xl mb-10 leading-relaxed font-light">
              Discover visa options, compare cost of living, find jobs with sponsorship, and connect with expert relocation services across 50+ destinations worldwide.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/destinations"
                className="group inline-flex items-center justify-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-amber-100 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 duration-300"
              >
                Explore Destinations
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
              <Link
                href="/calculator"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all border border-white/30 duration-300"
              >
                Cost Calculator
              </Link>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl">
              {stats.map((stat) => (
                <div key={stat.label} className="group bg-white/5 backdrop-blur-md rounded-lg p-5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300">
                  <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-slate-300 text-xs font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <svg className="w-6 h-6 text-white opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <span className="text-sm font-semibold text-slate-500 uppercase tracking-widest">Popular Destinations</span>
            <h2 className="text-5xl lg:text-6xl font-black text-slate-900 mt-3 leading-tight max-w-2xl">Explore the World's Top Relocation Hubs</h2>
            <p className="text-lg text-slate-600 max-w-3xl mt-6 font-light leading-relaxed">
              Comprehensive guides for the world's most sought-after destinations, with detailed visa requirements, cost analysis, and lifestyle insights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDestinations.map((dest) => (
              <Link
                key={dest.slug}
                href={`/destinations/${dest.slug}`}
                className="group relative bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-slate-300 transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${dest.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                {/* Card Content */}
                <div className="relative z-10 p-8">
                  {/* Flag */}
                  <div className="mb-6 overflow-hidden">
                    <span className="text-7xl block group-hover:scale-110 group-hover:translate-y-2 transition-transform duration-500">
                      {dest.flag}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-3xl font-black text-slate-900 mb-2 tracking-tight">{dest.name}</h3>
                  <p className="text-slate-600 text-lg font-light mb-6">{dest.tagline}</p>

                  {/* Highlights */}
                  <div className="space-y-3 mb-8">
                    {dest.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-center gap-3 text-sm text-slate-700">
                        <span className="text-slate-400 font-light">→</span>
                        <span className="font-medium">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Cost Index */}
                  <div className="pt-6 border-t border-slate-200 flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Cost Index</span>
                    <span className="font-bold text-lg text-slate-900">{dest.costIndex}% vs London</span>
                  </div>
                </div>

                {/* Hover Arrow Indicator */}
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-2xl text-slate-900 font-light group-hover:translate-x-1 inline-block transition-transform">→</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              href="/destinations"
              className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl duration-300"
            >
              View All Destinations
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-28 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20">
            <span className="text-sm font-semibold text-slate-500 uppercase tracking-widest">Four Simple Steps</span>
            <h2 className="text-5xl lg:text-6xl font-black text-slate-900 mt-3 leading-tight max-w-2xl">Your Relocation Journey</h2>
            <p className="text-lg text-slate-600 max-w-3xl mt-6 font-light">
              A straightforward process designed to guide you through every step of your international move.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', icon: '🔍', title: 'Explore Destinations', desc: 'Browse 50+ countries with detailed visa requirements, costs, and lifestyle information' },
              { step: '02', icon: '📊', title: 'Calculate Costs', desc: 'Use our calculator to estimate your relocation budget and monthly expenses' },
              { step: '03', icon: '💼', title: 'Find Jobs', desc: 'Browse jobs offering visa sponsorship in your target destination' },
              { step: '04', icon: '✈️', title: 'Get Support', desc: 'Connect with visa consultants, movers, and relocation services' },
            ].map((item, idx) => (
              <div key={idx} className="group relative">
                {/* Step Number */}
                <div className="mb-8">
                  <span className="text-6xl font-black text-slate-900 opacity-10 group-hover:opacity-20 transition-opacity duration-300">{item.step}</span>
                  <div className="relative -mt-8 mb-6 inline-block">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-3xl border-2 border-slate-200 group-hover:border-slate-900 group-hover:scale-110 transition-all duration-300 shadow-sm">
                      {item.icon}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 font-light leading-relaxed text-sm">
                  {item.desc}
                </p>

                {/* Connection Line (hidden on mobile) */}
                {idx < 3 && (
                  <div className="hidden lg:block absolute top-8 -right-4 w-8 h-0.5 bg-gradient-to-r from-slate-300 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Guides */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <span className="text-sm font-semibold text-slate-500 uppercase tracking-widest">Expert Resources</span>
            <h2 className="text-5xl lg:text-6xl font-black text-slate-900 mt-3 leading-tight max-w-2xl">Relocation Guides & Insights</h2>
            <p className="text-lg text-slate-600 max-w-3xl mt-6 font-light">
              Comprehensive guides covering visas, taxes, cost of living, and relocation logistics from industry experts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {guides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="group relative bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-500 hover:-translate-y-1"
              >
                {/* Category Badge */}
                <div className="inline-flex px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-bold uppercase tracking-wider mb-6 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-300">
                  {guide.category}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-slate-700 transition-colors">
                  {guide.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-sm font-light mb-6 leading-relaxed">
                  {guide.description}
                </p>

                {/* Searches */}
                <div className="flex items-center gap-2 text-sm text-slate-500 font-light">
                  <span className="text-base">📈</span>
                  <span>{guide.searches} monthly searches</span>
                </div>

                {/* Read Arrow */}
                <div className="absolute top-6 right-6 text-2xl text-slate-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  →
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              href="/guides"
              className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl duration-300"
            >
              View All Guides
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-600/10 rounded-full blur-3xl" />

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            Ready to Start Your <span className="bg-gradient-to-r from-amber-300 to-orange-300 bg-clip-text text-transparent">International Journey?</span>
          </h2>
          <p className="text-xl text-slate-300 mb-12 leading-relaxed font-light max-w-2xl mx-auto">
            Join thousands of successful relocators who used Relocation Quest to plan their move abroad. From visa planning to job hunting, we've got you covered.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/handler/sign-up"
              className="group inline-flex items-center justify-center gap-2 bg-white text-slate-900 px-10 py-5 rounded-xl font-bold text-lg hover:bg-amber-100 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 duration-300"
            >
              Get Started Free
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            <Link
              href="/calculator"
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-white/20 transition-all border border-white/30 duration-300"
            >
              Try Cost Calculator
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
