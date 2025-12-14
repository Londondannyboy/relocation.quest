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

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-green-500 to-blue-700 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/20" />

        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
            <span className="text-white/90 text-sm font-medium">🌍 Your International Relocation Guide</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            Move Abroad
            <br />
            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              With Confidence
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-10 leading-relaxed">
            Discover visa options, compare cost of living, find jobs with sponsorship,
            and connect with expert services across 50+ destinations worldwide.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/destinations"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              Explore Destinations →
            </Link>
            <Link
              href="/calculator"
              className="bg-blue-700/50 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700/70 transition-all border border-white/20"
            >
              Cost Calculator
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-black mb-1">{stat.value}</div>
                <div className="text-blue-100 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4">Popular Destinations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore comprehensive guides for the world's top relocation destinations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDestinations.map((dest) => (
              <Link
                key={dest.slug}
                href={`/destinations/${dest.slug}`}
                className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all overflow-hidden hover:scale-105"
              >
                <div className={`h-40 bg-gradient-to-r ${dest.gradient} flex items-center justify-center`}>
                  <span className="text-8xl filter drop-shadow-lg group-hover:scale-110 transition-transform">
                    {dest.flag}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{dest.name}</h3>
                  <p className="text-gray-600 mb-4">{dest.tagline}</p>

                  <div className="space-y-2 mb-4">
                    {dest.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-center gap-2 text-sm text-gray-700">
                        <span className="text-green-600">✓</span>
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-sm text-gray-500">Cost of Living</span>
                    <span className="font-bold text-blue-600">{dest.costIndex}% of London</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/destinations"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg"
            >
              View All Destinations
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">Your Relocation Journey</h2>
            <p className="text-xl text-gray-600">Simple steps to start your international move</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">🔍</span>
              </div>
              <h3 className="text-xl font-bold mb-3">1. Explore Destinations</h3>
              <p className="text-gray-600">
                Browse 50+ countries with detailed visa requirements, costs, and lifestyle info
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">📊</span>
              </div>
              <h3 className="text-xl font-bold mb-3">2. Calculate Costs</h3>
              <p className="text-gray-600">
                Use our calculator to estimate your relocation budget and monthly expenses
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">💼</span>
              </div>
              <h3 className="text-xl font-bold mb-3">3. Find Jobs</h3>
              <p className="text-gray-600">
                Browse jobs offering visa sponsorship in your target destination
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">✈️</span>
              </div>
              <h3 className="text-xl font-bold mb-3">4. Get Support</h3>
              <p className="text-gray-600">
                Connect with visa consultants, movers, and relocation services
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Guides */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4">Expert Relocation Guides</h2>
            <p className="text-xl text-gray-600">
              Comprehensive guides covering visas, taxes, and relocation logistics
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {guides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all hover:scale-105"
              >
                <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
                  {guide.category}
                </div>
                <h3 className="text-2xl font-bold mb-3">{guide.title}</h3>
                <p className="text-gray-600 mb-4">{guide.description}</p>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <span>📈</span>
                  <span>{guide.searches} searches</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/guides"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all shadow-md border-2 border-blue-600"
            >
              View All Guides
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            Join thousands of successful relocators who used Relocation Quest to plan their international move.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/handler/sign-up"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all shadow-lg"
            >
              Get Started Free
            </Link>
            <Link
              href="/calculator"
              className="bg-blue-700/50 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700/70 transition-all border border-white/20"
            >
              Try Cost Calculator
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
