import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { StaticHeader } from '@/components/StaticHeader'
import { StaticFooter } from '@/components/StaticFooter'
import { ArticleVideo } from './ArticleVideo'
import { MarkdownContent } from './MarkdownContent'

interface Article {
  id: number
  slug: string
  title: string
  excerpt: string | null
  content: string | null
  article_mode: string
  article_angle: string | null
  country: string | null
  flag_emoji: string | null
  featured_asset_url: string | null
  hero_asset_url: string | null
  hero_asset_alt: string | null
  video_playback_id: string | null
  published_at: string | null
  word_count: number | null
  is_featured: boolean | null
  meta_description: string | null
  payload: {
    faq?: Array<{ q: string; a: string } | { question: string; answer: string }>
    callouts?: Array<{ type: string; title: string; content: string }>
    stat_highlight?: { value: string; label: string; context: string }
    timeline?: Array<{ date: string; title: string; description: string }>
    sources?: Array<{ title: string; url: string }>
  } | null
  video_narrative: {
    playback_id?: string
    acts?: Record<string, { start: number; end: number; title: string }>
  } | null
}

interface RelatedArticle {
  id: number
  slug: string
  title: string
  excerpt: string | null
  video_playback_id: string | null
  article_mode: string
  country: string | null
  flag_emoji: string | null
}

const MODE_CONFIG: Record<string, { label: string; icon: string; gradient: string }> = {
  story: { label: 'Story', icon: '📖', gradient: 'from-amber-500 to-orange-600' },
  guide: { label: 'Guide', icon: '📋', gradient: 'from-blue-500 to-indigo-600' },
  yolo: { label: 'YOLO', icon: '🚀', gradient: 'from-pink-500 to-rose-600' },
  voices: { label: 'Voices', icon: '💬', gradient: 'from-purple-500 to-violet-600' },
  topic: { label: 'Deep Dive', icon: '🔍', gradient: 'from-emerald-500 to-teal-600' },
  nomad: { label: 'Digital Nomad', icon: '🌍', gradient: 'from-cyan-500 to-blue-600' },
}

function getThumbnail(playbackId: string | null, time: number = 5): string {
  if (!playbackId) return ''
  return `https://image.mux.com/${playbackId}/thumbnail.jpg?time=${time}&width=800`
}

const GATEWAY_URL = process.env.GATEWAY_URL || process.env.NEXT_PUBLIC_GATEWAY_URL || 'https://quest-gateway-production.up.railway.app'

async function getArticle(slug: string): Promise<Article | null> {
  try {
    const res = await fetch(
      `${GATEWAY_URL}/dashboard/content/articles/${slug}`,
      {
        next: { revalidate: 0 },
        headers: { 'Accept': 'application/json' }
      }
    )
    if (!res.ok) {
      console.error(`Failed to fetch article ${slug}: ${res.status}`)
      return null
    }
    const data = await res.json()
    return data.article || null
  } catch (error) {
    console.error(`Error fetching article ${slug}:`, error)
    return null
  }
}

async function getAllArticles(): Promise<RelatedArticle[]> {
  try {
    const res = await fetch(
      `${GATEWAY_URL}/dashboard/content/articles?limit=200`,
      {
        next: { revalidate: 60 },
        headers: { 'Accept': 'application/json' }
      }
    )
    if (!res.ok) return []
    const data = await res.json()
    return data.articles || []
  } catch {
    return []
  }
}

function getRelatedArticles(
  allArticles: RelatedArticle[],
  currentArticle: Article,
  count: number = 4
): RelatedArticle[] {
  const currentSlug = currentArticle.slug
  const currentCountry = currentArticle.country
  const currentMode = currentArticle.article_mode

  const others = allArticles.filter(a => a.slug !== currentSlug)
  const sameCountry = others.filter(a => a.country && a.country === currentCountry)
  const sameMode = others.filter(a => a.article_mode === currentMode && a.country !== currentCountry)
  const rest = others.filter(a => a.country !== currentCountry && a.article_mode !== currentMode)

  const combined = [...sameCountry, ...sameMode, ...rest]
  const seen = new Set<number>()
  const unique: RelatedArticle[] = []
  for (const article of combined) {
    if (!seen.has(article.id)) {
      seen.add(article.id)
      unique.push(article)
    }
    if (unique.length >= count) break
  }

  return unique
}

function getArticlesByCountry(
  allArticles: RelatedArticle[],
  country: string | null,
  excludeSlug: string,
  count: number = 4
): RelatedArticle[] {
  if (!country) return []
  return allArticles
    .filter(a => a.country === country && a.slug !== excludeSlug)
    .slice(0, count)
}

function getArticlesByMode(
  allArticles: RelatedArticle[],
  mode: string,
  excludeSlug: string,
  count: number = 4
): RelatedArticle[] {
  return allArticles
    .filter(a => a.article_mode === mode && a.slug !== excludeSlug)
    .slice(0, count)
}

export async function generateStaticParams() {
  try {
    const res = await fetch(`${GATEWAY_URL}/dashboard/content/articles?limit=100`, {
      headers: { 'Accept': 'application/json' }
    })
    if (!res.ok) return []
    const data = await res.json()
    return (data.articles || []).map((article: { slug: string }) => ({
      slug: article.slug,
    }))
  } catch {
    return []
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const article = await getArticle(slug)

  if (!article) {
    return {
      title: 'Article Not Found | Relocation Quest',
    }
  }

  const title = article.title
  const description = article.meta_description || article.excerpt || `Read about ${article.title} on Relocation Quest`
  const thumbnail = article.video_playback_id
    ? getThumbnail(article.video_playback_id, 5)
    : article.hero_asset_url

  return {
    title: `${title} | Relocation Quest`,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime: article.published_at || undefined,
      images: thumbnail ? [{ url: thumbnail, width: 800, height: 450 }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: thumbnail ? [thumbnail] : [],
    },
    alternates: {
      canonical: `https://relocation.quest/articles/${slug}`,
    },
  }
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const [article, allArticles] = await Promise.all([
    getArticle(slug),
    getAllArticles(),
  ])

  if (!article) {
    notFound()
  }

  const relatedArticles = getRelatedArticles(allArticles, article, 5)
  const sameCountryArticles = getArticlesByCountry(allArticles, article.country, article.slug, 4)
  const sameModeArticles = getArticlesByMode(allArticles, article.article_mode, article.slug, 4)
    .filter(a => !sameCountryArticles.find(c => c.id === a.id))

  const config = MODE_CONFIG[article.article_mode] || MODE_CONFIG.topic
  const publishDate = article.published_at
    ? new Date(article.published_at).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : null
  const readTime = article.word_count ? Math.ceil(article.word_count / 200) : 5

  const faqItems = article.payload?.faq?.map(item => ({
    question: 'question' in item ? item.question : item.q,
    answer: 'answer' in item ? item.answer : item.a,
  })) || []

  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Navigation */}
      <StaticHeader
        brandName="Relocation"
        brandAccent="Quest"
        brandGradient="from-amber-400 to-orange-500"
        signInGradient="from-amber-500 to-orange-600"
        navItems={[
          { href: '/articles', label: 'Articles', highlight: true },
          { href: '/chat', label: 'Chat' },
          { href: '/voice', label: 'Voice' },
        ]}
      />

      {/* Hero Section */}
      <header className="relative pt-16">
        {article.video_playback_id ? (
          <div className="relative">
            <ArticleVideo playbackId={article.video_playback_id} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 pointer-events-none">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-3 mb-4">
                  {article.flag_emoji && <span className="text-3xl">{article.flag_emoji}</span>}
                  <span className={`px-4 py-1.5 rounded-full text-sm font-semibold bg-gradient-to-r ${config.gradient}`}>
                    {config.icon} {config.label}
                  </span>
                </div>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight drop-shadow-lg">
                  {article.title}
                </h1>
              </div>
            </div>
          </div>
        ) : article.hero_asset_url ? (
          <div className="relative">
            <div className="relative h-[50vh] min-h-[400px] max-h-[600px]">
              <Image
                src={article.hero_asset_url}
                alt={article.hero_asset_alt || article.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/10" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-3 mb-4">
                  {article.flag_emoji && <span className="text-3xl">{article.flag_emoji}</span>}
                  <span className={`px-4 py-1.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r ${config.gradient}`}>
                    {config.icon} {config.label}
                  </span>
                </div>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight drop-shadow-lg">
                  {article.title}
                </h1>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-gradient-to-b from-amber-50 to-white pt-24 pb-16">
            <div className="max-w-4xl mx-auto px-6">
              <div className="flex items-center gap-3 mb-4">
                {article.flag_emoji && <span className="text-3xl">{article.flag_emoji}</span>}
                <span className={`px-4 py-1.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r ${config.gradient}`}>
                  {config.icon} {config.label}
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight">
                {article.title}
              </h1>
            </div>
          </div>
        )}
      </header>

      {/* Article Meta */}
      <div className="border-b border-gray-200 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white font-bold text-sm">
                RQ
              </div>
              <span className="font-medium text-gray-900">Relocation Quest</span>
            </div>
            {publishDate && <>
              <span className="text-gray-400">•</span>
              <span>{publishDate}</span>
            </>}
            {article.word_count && <>
              <span className="text-gray-400">•</span>
              <span>{article.word_count.toLocaleString()} words</span>
            </>}
            <span className="text-gray-400">•</span>
            <span>{readTime} min read</span>
          </div>
          {article.excerpt && (
            <p className="mt-4 text-lg text-amber-600 font-medium leading-relaxed">
              {article.excerpt}
            </p>
          )}
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-6 py-12">
        <p className="text-lg text-gray-600 mb-8 pb-8 border-b border-gray-200">
          Welcome to our {new Date().getFullYear()} complete guide on <strong className="text-gray-900">{article.title.replace(/ \| Relocation Quest$/, '').replace(/\d{4}:?\s*/g, '')}</strong>.
          {article.country && <> This comprehensive guide covers everything you need to know about {article.country}, updated for {new Date().getFullYear()}.</>}
          {!article.country && <> This comprehensive resource is updated for {new Date().getFullYear()} with the latest information and practical advice.</>}
        </p>

        {article.content ? (
          <MarkdownContent content={article.content} />
        ) : (
          <div className="text-center py-12 text-gray-500">
            <p>No content available for this article.</p>
          </div>
        )}

        {sameCountryArticles.length > 0 && (
          <section className="my-12 p-6 bg-amber-50 border border-amber-200 rounded-xl">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              {article.flag_emoji && <span>{article.flag_emoji}</span>}
              More {article.country ? `${article.country} ` : ''}Guides
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {sameCountryArticles.map((related) => {
                const relConfig = MODE_CONFIG[related.article_mode] || MODE_CONFIG.topic
                return (
                  <Link
                    key={related.id}
                    href={`/articles/${related.slug}`}
                    className="flex items-center gap-3 p-3 bg-white rounded-lg border border-amber-100 hover:border-amber-300 hover:shadow-sm transition-all group"
                  >
                    <span className="text-2xl">{relConfig.icon}</span>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-gray-900 line-clamp-2 group-hover:text-amber-600 transition-colors">
                        {related.title}
                      </p>
                      <p className="text-xs text-gray-500">{relConfig.label}</p>
                    </div>
                  </Link>
                )
              })}
            </div>
          </section>
        )}

        {sameModeArticles.length > 0 && (
          <section className="my-12 p-6 bg-blue-50 border border-blue-200 rounded-xl">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              More {config.label}
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {sameModeArticles.map((related) => (
                <Link
                  key={related.id}
                  href={`/articles/${related.slug}`}
                  className="flex items-center gap-3 p-3 bg-white rounded-lg border border-blue-100 hover:border-blue-300 hover:shadow-sm transition-all group"
                >
                  <span className="text-2xl">{config.icon}</span>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {related.title}
                    </p>
                    {related.country && <p className="text-xs text-gray-500">{related.country}</p>}
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>

      <StaticFooter
        brandName="Relocation"
        brandAccent="Quest"
        brandGradient="from-amber-400 to-orange-500"
      />
    </main>
  )
}
