import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { neon } from '@neondatabase/serverless'
import { StaticHeader } from '@/components/StaticHeader'
import { StaticFooter } from '@/components/StaticFooter'
import { GuideHero } from './GuideHero'

interface GuideSection {
  title: string
  items: string[]
}

interface GuideFaq {
  question: string
  answer: string
}

interface Guide {
  id: number
  slug: string
  title: string
  excerpt: string | null
  content: string | null
  meta_description: string | null
  hero_asset_url: string | null
  hero_asset_alt: string | null
  featured_asset_url: string | null
  video_url: string | null
  target_keyword: string | null
  keyword_volume: number | null
  keyword_difficulty: number | null
  country: string | null
  country_code: string | null
  published_at: string | null
  payload: {
    sections?: Record<string, GuideSection>
    faq?: GuideFaq[]
  } | null
}

const GATEWAY_URL = process.env.GATEWAY_URL || process.env.NEXT_PUBLIC_GATEWAY_URL || 'https://quest-gateway-production.up.railway.app'

async function getGuide(slug: string): Promise<Guide | null> {
  try {
    // Try gateway first
    const res = await fetch(
      `${GATEWAY_URL}/dashboard/content/articles/${slug}`,
      {
        next: { revalidate: 3600 },
        headers: { 'Accept': 'application/json' }
      }
    )
    if (res.ok) {
      const data = await res.json()
      if (data.article?.guide_type === 'country') {
        return data.article
      }
    }
  } catch (error) {
    console.error('Gateway fetch failed:', error)
  }

  // Fallback to direct DB query
  if (process.env.DATABASE_URL) {
    try {
      const sql = neon(process.env.DATABASE_URL)
      const results = await sql`
        SELECT id, slug, title, excerpt, content, meta_description,
               hero_asset_url, hero_asset_alt, featured_asset_url, video_url,
               target_keyword, keyword_volume, keyword_difficulty,
               country, country_code, published_at, payload
        FROM articles
        WHERE slug = ${slug}
        AND guide_type = 'country'
        AND status = 'published'
        AND app = 'relocation'
        LIMIT 1
      `
      if (results.length > 0) {
        return results[0] as Guide
      }
    } catch (error) {
      console.error('DB fetch failed:', error)
    }
  }

  return null
}

async function getAllGuides(): Promise<Guide[]> {
  if (!process.env.DATABASE_URL) return []

  try {
    const sql = neon(process.env.DATABASE_URL)
    const results = await sql`
      SELECT id, slug, title, excerpt, hero_asset_url, country, country_code
      FROM articles
      WHERE guide_type = 'country'
      AND status = 'published'
      AND app = 'relocation'
      ORDER BY keyword_difficulty ASC
    `
    return results as Guide[]
  } catch {
    return []
  }
}

// Pre-render guides at build time
export async function generateStaticParams() {
  if (!process.env.DATABASE_URL) return []

  try {
    const sql = neon(process.env.DATABASE_URL)
    const guides = await sql`
      SELECT slug FROM articles
      WHERE guide_type = 'country'
      AND status = 'published'
      AND app = 'relocation'
    `
    return guides.map((g) => ({ slug: g.slug }))
  } catch {
    return []
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const guide = await getGuide(slug)

  if (!guide) {
    return { title: 'Guide Not Found | Relocation Quest' }
  }

  const title = guide.title
  const description = guide.meta_description || guide.excerpt || `Comprehensive guide to ${guide.country}`
  const image = guide.hero_asset_url

  return {
    title: `${title} | Relocation Quest`,
    description,
    keywords: [
      guide.target_keyword,
      `moving to ${guide.country?.toLowerCase()}`,
      `${guide.country?.toLowerCase()} expat guide`,
      `relocate to ${guide.country?.toLowerCase()}`,
    ].filter(Boolean) as string[],
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime: guide.published_at || undefined,
      images: image ? [{ url: image, width: 1200, height: 630 }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: image ? [image] : [],
    },
    alternates: {
      canonical: `https://relocation.quest/guides/${slug}`,
    },
  }
}

// Country flag mapping
const COUNTRY_FLAGS: Record<string, string> = {
  'CR': '🇨🇷', 'TH': '🇹🇭', 'MX': '🇲🇽', 'GB': '🇬🇧',
  'DE': '🇩🇪', 'ES': '🇪🇸', 'PT': '🇵🇹',
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const [guide, allGuides] = await Promise.all([
    getGuide(slug),
    getAllGuides(),
  ])

  if (!guide) {
    notFound()
  }

  const flag = guide.country_code ? COUNTRY_FLAGS[guide.country_code] : null
  const relatedGuides = allGuides.filter(g => g.slug !== slug).slice(0, 4)
  const sections = guide.payload?.sections || {}
  const faqItems = guide.payload?.faq || []

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
      <GuideHero
        title={guide.title}
        country={guide.country}
        flag={flag}
        videoUrl={guide.video_url}
        imageUrl={guide.hero_asset_url}
        imageAlt={guide.hero_asset_alt}
        targetKeyword={guide.target_keyword}
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Column */}
          <div className="lg:col-span-2">
            {/* Excerpt */}
            {guide.excerpt && (
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {guide.excerpt}
              </p>
            )}

            {/* Key Info Banner */}
            <div className="mb-10 p-6 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl border border-amber-100">
              <p className="text-gray-700 leading-relaxed">
                <span className="text-3xl mr-3">{flag || '🌍'}</span>
                <strong className="text-amber-700">Planning to relocate to {guide.country}?</strong> This comprehensive guide covers everything you need to know about {guide.target_keyword?.replace(/-/g, ' ') || `moving to ${guide.country}`} - from visa requirements and cost of living to healthcare and the best cities for expats.
              </p>
            </div>

            {/* Content */}
            {guide.content && (
              <div
                className="prose prose-lg max-w-none mb-12
                  prose-headings:font-bold prose-headings:text-gray-900
                  prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:border-l-4 prose-h2:border-amber-500 prose-h2:pl-4
                  prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
                  prose-p:text-gray-700 prose-p:leading-relaxed
                  prose-a:text-amber-600 hover:prose-a:text-amber-500
                  prose-strong:text-amber-700
                "
                dangerouslySetInnerHTML={{ __html: guide.content }}
              />
            )}

            {/* FAQ Section */}
            {faqItems.length > 0 && (
              <section className="mt-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-amber-500 pl-4">
                  Frequently Asked Questions About Moving to {guide.country}
                </h2>
                <div className="space-y-4" itemScope itemType="https://schema.org/FAQPage">
                  {faqItems.map((item, idx) => (
                    <details
                      key={idx}
                      className="group bg-gray-50 border border-gray-200 rounded-xl overflow-hidden"
                      itemScope
                      itemProp="mainEntity"
                      itemType="https://schema.org/Question"
                    >
                      <summary className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-100">
                        <span className="font-medium text-gray-900 pr-4" itemProp="name">
                          {item.question}
                        </span>
                        <span className="text-amber-500 group-open:rotate-180 transition-transform flex-shrink-0">
                          ▼
                        </span>
                      </summary>
                      <div
                        className="px-4 pb-4 text-gray-700"
                        itemScope
                        itemProp="acceptedAnswer"
                        itemType="https://schema.org/Answer"
                      >
                        <span itemProp="text">{item.answer}</span>
                      </div>
                    </details>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Info Cards */}
            {Object.entries(sections).map(([key, section]) => (
              <div key={key} className="mb-6 p-6 bg-gray-50 rounded-2xl">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  {key === 'visa' && '🛂'}
                  {key === 'cost' && '💰'}
                  {key === 'cities' && '🏙️'}
                  {guide.country} {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                      <span className="text-amber-500 mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* CTA Card */}
            <div className="p-6 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl text-white">
              <h3 className="font-bold text-lg mb-2">Need Personalized Advice?</h3>
              <p className="text-white/90 text-sm mb-4">
                Chat with our AI assistant about moving to {guide.country}.
              </p>
              <div className="space-y-2">
                <Link
                  href="/chat"
                  className="block text-center py-3 bg-white text-amber-600 rounded-xl font-semibold hover:bg-gray-100 transition"
                >
                  Start Chat
                </Link>
                <Link
                  href="/voice"
                  className="block text-center py-3 border-2 border-white text-white rounded-xl font-semibold hover:bg-white/10 transition"
                >
                  Voice Assistant
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Guides */}
      {relatedGuides.length > 0 && (
        <section className="border-t border-gray-200 py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-900">More Relocation Guides</h2>
              <Link
                href="/guides"
                className="text-amber-600 hover:text-amber-500 font-medium text-sm"
              >
                View all guides →
              </Link>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedGuides.map((related) => {
                const relatedFlag = related.country_code ? COUNTRY_FLAGS[related.country_code] : null
                return (
                  <Link
                    key={related.id}
                    href={`/guides/${related.slug}`}
                    className="group block bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-amber-300 hover:shadow-lg transition-all"
                  >
                    <div className="relative aspect-video bg-gray-100">
                      {related.hero_asset_url ? (
                        <Image
                          src={related.hero_asset_url}
                          alt={`Moving to ${related.country} - expat relocation guide`}
                          title={`Guide to relocating to ${related.country}`}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-4xl">
                          {relatedFlag || '🌍'}
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-3 left-3 flex items-center gap-2">
                        {relatedFlag && <span className="text-2xl">{relatedFlag}</span>}
                        <span className="text-white font-semibold">{related.country}</span>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-gray-900 line-clamp-2 group-hover:text-amber-600 transition-colors">
                        {related.title}
                      </h3>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      )}

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
