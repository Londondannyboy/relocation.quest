import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { neon } from '@neondatabase/serverless'
import { StaticHeader } from '@/components/StaticHeader'
import { StaticFooter } from '@/components/StaticFooter'

export const metadata: Metadata = {
  title: 'Relocation Guides | Moving Abroad, Digital Nomad Visas & Expat Life',
  description: 'Comprehensive guides for moving abroad. Country guides, digital nomad visas, cost of living, healthcare, and expert tips for relocating to Europe, Asia, and the Americas.',
  keywords: [
    'moving abroad guide',
    'relocate to another country',
    'expat guides',
    'digital nomad visa',
    'cost of living abroad',
    'best countries to move to',
    'move to europe',
  ],
  alternates: {
    canonical: 'https://relocation.quest/guides',
  },
  openGraph: {
    title: 'Relocation Guides - Moving Abroad & Digital Nomad Visas',
    description: 'Comprehensive guides for moving to Costa Rica, Thailand, Mexico, UK, Germany, Spain, Portugal, and more.',
    type: 'website',
    url: 'https://relocation.quest/guides',
  },
}

interface Guide {
  id: number
  slug: string
  title: string
  excerpt: string | null
  hero_asset_url: string | null
  country: string | null
  country_code: string | null
  guide_type: string | null
}

const COUNTRY_FLAGS: Record<string, string> = {
  'CR': '🇨🇷', 'TH': '🇹🇭', 'MX': '🇲🇽', 'GB': '🇬🇧',
  'DE': '🇩🇪', 'ES': '🇪🇸', 'PT': '🇵🇹', 'CY': '🇨🇾',
  'FR': '🇫🇷', 'GR': '🇬🇷', 'MT': '🇲🇹', 'NL': '🇳🇱',
  'SI': '🇸🇮', 'CH': '🇨🇭', 'IT': '🇮🇹', 'HR': '🇭🇷',
  'LV': '🇱🇻', 'NO': '🇳🇴',
}

// Extract country code from slug for comprehensive guides
function getCountryCodeFromSlug(slug: string): string | null {
  const countryMap: Record<string, string> = {
    'cyprus': 'CY', 'france': 'FR', 'greece': 'GR', 'malta': 'MT',
    'netherlands': 'NL', 'slovenia': 'SI', 'switzerland': 'CH',
    'italy': 'IT', 'croatia': 'HR', 'latvia': 'LV', 'norway': 'NO',
  }
  for (const [name, code] of Object.entries(countryMap)) {
    if (slug.includes(name)) return code
  }
  return null
}

async function getGuidesByType(): Promise<{
  countryGuides: Guide[]
  comprehensiveGuides: Guide[]
  nomadGuides: Guide[]
  visaGuides: Guide[]
}> {
  if (!process.env.DATABASE_URL) {
    return { countryGuides: [], comprehensiveGuides: [], nomadGuides: [], visaGuides: [] }
  }

  try {
    const sql = neon(process.env.DATABASE_URL)

    const [countryGuides, comprehensiveGuides, nomadGuides, visaGuides] = await Promise.all([
      sql`
        SELECT id, slug, title, excerpt, hero_asset_url, country, country_code, guide_type
        FROM articles
        WHERE guide_type = 'country'
        AND status = 'published'
        AND app = 'relocation'
        ORDER BY title ASC
      `,
      sql`
        SELECT id, slug, title, excerpt, hero_asset_url, country, country_code, guide_type
        FROM articles
        WHERE guide_type = 'country_comprehensive'
        AND status = 'published'
        AND app = 'relocation'
        ORDER BY title ASC
      `,
      sql`
        SELECT id, slug, title, excerpt, hero_asset_url, country, country_code, guide_type
        FROM articles
        WHERE guide_type = 'country_nomad'
        AND status = 'published'
        AND app = 'relocation'
        ORDER BY title ASC
      `,
      sql`
        SELECT id, slug, title, excerpt, hero_asset_url, country, country_code, guide_type
        FROM articles
        WHERE guide_type = 'topic_visa'
        AND status = 'published'
        AND app = 'relocation'
        ORDER BY title ASC
        LIMIT 8
      `,
    ])

    return {
      countryGuides: countryGuides as Guide[],
      comprehensiveGuides: comprehensiveGuides as Guide[],
      nomadGuides: nomadGuides as Guide[],
      visaGuides: visaGuides as Guide[],
    }
  } catch (error) {
    console.error('Failed to fetch guides:', error)
    return { countryGuides: [], comprehensiveGuides: [], nomadGuides: [], visaGuides: [] }
  }
}

function GuideCard({ guide, basePath = '/guides' }: { guide: Guide; basePath?: string }) {
  const countryCode = guide.country_code || getCountryCodeFromSlug(guide.slug)
  const flag = countryCode ? COUNTRY_FLAGS[countryCode] : null
  const href = guide.guide_type === 'country' ? `${basePath}/${guide.slug}` : `/articles/${guide.slug}`

  return (
    <Link
      href={href}
      className="group block bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-amber-300 hover:shadow-xl transition-all hover:-translate-y-1"
    >
      <div className="relative aspect-video bg-gray-100">
        {guide.hero_asset_url ? (
          <Image
            src={guide.hero_asset_url}
            alt={guide.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-amber-100 to-orange-100">
            <span className="text-6xl">{flag || '🌍'}</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        {flag && (
          <div className="absolute bottom-4 left-4">
            <span className="text-3xl drop-shadow-lg">{flag}</span>
          </div>
        )}
      </div>
      <div className="p-5">
        <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-amber-600 transition-colors line-clamp-2">
          {guide.title}
        </h3>
        {guide.excerpt && (
          <p className="text-gray-600 text-sm line-clamp-2">{guide.excerpt}</p>
        )}
        <div className="mt-3 flex items-center text-amber-600 font-medium text-sm">
          Read Guide <span className="ml-1 group-hover:ml-2 transition-all">→</span>
        </div>
      </div>
    </Link>
  )
}

export default async function GuidesPage() {
  const { countryGuides, comprehensiveGuides, nomadGuides, visaGuides } = await getGuidesByType()

  return (
    <main className="min-h-screen bg-white">
      <StaticHeader
        brandName="Relocation"
        brandAccent="Quest"
        brandGradient="from-amber-400 to-orange-500"
        signInGradient="from-amber-500 to-orange-600"
        navItems={[
          { href: '/guides', label: 'Guides', highlight: true },
          { href: '/articles', label: 'Articles' },
          { href: '/chat', label: 'Chat' },
        ]}
      />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold mb-6">
              Relocation Guides
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
              Your Complete Guide to{' '}
              <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                Moving Abroad
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Expert guides covering visa requirements, digital nomad options, cost of living,
              healthcare, and everything you need to know about relocating to a new country.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/chat"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition shadow-lg shadow-amber-500/25"
              >
                Get Personalized Advice
              </Link>
              <Link
                href="/calculator"
                className="inline-flex items-center gap-2 border-2 border-amber-500 text-amber-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-amber-50 transition"
              >
                Cost Calculator
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="#country-guides" className="px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-medium hover:bg-amber-200 transition">
              Country Guides
            </a>
            <a href="#comprehensive" className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition">
              Comprehensive Guides
            </a>
            <a href="#digital-nomad" className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition">
              Digital Nomad Guides
            </a>
            <a href="#visa-guides" className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition">
              Visa Guides
            </a>
          </div>
        </div>
      </section>

      {/* Country Guides - Primary */}
      <section id="country-guides" className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Popular Destinations for Expats
              </h2>
              <p className="text-gray-600">
                Complete moving guides with visa info, costs, healthcare, and best cities.
              </p>
            </div>
          </div>

          {countryGuides.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {countryGuides.map((guide) => (
                <GuideCard key={guide.id} guide={guide} />
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-center py-8">No country guides available yet.</p>
          )}
        </div>
      </section>

      {/* Comprehensive Guides */}
      {comprehensiveGuides.length > 0 && (
        <section id="comprehensive" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Comprehensive Country Guides
                </h2>
                <p className="text-gray-600">
                  In-depth guides covering every aspect of relocating to these destinations.
                </p>
              </div>
              <Link href="/articles" className="text-amber-600 hover:text-amber-500 font-medium text-sm hidden md:block">
                View all articles →
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {comprehensiveGuides.map((guide) => (
                <GuideCard key={guide.id} guide={guide} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Digital Nomad Guides */}
      {nomadGuides.length > 0 && (
        <section id="digital-nomad" className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Digital Nomad Guides
                </h2>
                <p className="text-gray-600">
                  Remote work visas, coworking spaces, and nomad-friendly destinations.
                </p>
              </div>
              <Link href="/digital-nomad-visa" className="text-amber-600 hover:text-amber-500 font-medium text-sm hidden md:block">
                Digital nomad visa guide →
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {nomadGuides.map((guide) => (
                <GuideCard key={guide.id} guide={guide} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Visa Guides */}
      {visaGuides.length > 0 && (
        <section id="visa-guides" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Visa Requirement Guides
                </h2>
                <p className="text-gray-600">
                  Detailed visa information, requirements, and application processes.
                </p>
              </div>
              <Link href="/articles" className="text-amber-600 hover:text-amber-500 font-medium text-sm hidden md:block">
                View all visa guides →
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {visaGuides.map((guide) => (
                <GuideCard key={guide.id} guide={guide} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            What Our Guides Cover
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🛂', title: 'Visa Requirements', desc: 'Work visas, digital nomad visas, retirement options, and residency paths' },
              { icon: '💰', title: 'Cost of Living', desc: 'Real budgets for rent, food, healthcare, and daily expenses' },
              { icon: '🏥', title: 'Healthcare', desc: 'Public and private healthcare options, insurance requirements' },
              { icon: '🏙️', title: 'Best Cities', desc: 'Top locations for expats with pros and cons of each' },
            ].map((item) => (
              <div key={item.title} className="p-6 bg-white rounded-2xl border border-gray-200">
                <span className="text-4xl mb-4 block">{item.icon}</span>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-amber-500 to-orange-500">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Not Sure Where to Move?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Our AI assistant can help you find the perfect destination based on your budget,
            lifestyle preferences, and career goals.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/chat"
              className="inline-flex items-center gap-2 bg-white text-amber-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition"
            >
              Chat with AI Assistant
            </Link>
            <Link
              href="/voice"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition"
            >
              Voice Assistant
            </Link>
          </div>
        </div>
      </section>

      <StaticFooter
        brandName="Relocation"
        brandAccent="Quest"
        brandGradient="from-amber-400 to-orange-500"
        links={[
          { href: '/guides', label: 'Country Guides' },
          { href: '/articles', label: 'Articles' },
          { href: '/calculator', label: 'Calculator' },
          { href: '/privacy', label: 'Privacy' },
        ]}
      />
    </main>
  )
}
