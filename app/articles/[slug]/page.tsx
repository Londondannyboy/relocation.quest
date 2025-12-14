import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { StaticHeader } from '@/components/StaticHeader'
import { StaticFooter } from '@/components/StaticFooter'
import { ArticleVideo } from './ArticleVideo'

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

  // Filter out current article
  const others = allArticles.filter(a => a.slug !== currentSlug)

  // Prioritize: same country > same mode > others
  const sameCountry = others.filter(a => a.country && a.country === currentCountry)
  const sameMode = others.filter(a => a.article_mode === currentMode && a.country !== currentCountry)
  const rest = others.filter(a => a.country !== currentCountry && a.article_mode !== currentMode)

  // Combine and deduplicate
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

// Pre-render articles at build time for SEO
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

  // Compute related articles
  const relatedArticles = getRelatedArticles(allArticles, article, 5)
  const sameCountryArticles = getArticlesByCountry(allArticles, article.country, article.slug, 4)
  const sameModeArticles = getArticlesByMode(allArticles, article.article_mode, article.slug, 4)
    .filter(a => !sameCountryArticles.find(c => c.id === a.id)) // Exclude duplicates

  const config = MODE_CONFIG[article.article_mode] || MODE_CONFIG.topic
  const publishDate = article.published_at
    ? new Date(article.published_at).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : null
  const readTime = article.word_count ? Math.ceil(article.word_count / 200) : 5

  // Normalize FAQ format (some use q/a, some use question/answer)
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

      {/* Hero with Video */}
      <header className="relative pt-16">
        {article.video_playback_id ? (
          <div className="relative">
            <ArticleVideo playbackId={article.video_playback_id} />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-transparent to-white/80 pointer-events-none" />

            {/* Title overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 pointer-events-none">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-3 mb-4">
                  {article.flag_emoji && (
                    <span className="text-3xl">{article.flag_emoji}</span>
                  )}
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
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-transparent to-white/60" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-3 mb-4">
                  {article.flag_emoji && (
                    <span className="text-3xl">{article.flag_emoji}</span>
                  )}
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
                {article.flag_emoji && (
                  <span className="text-3xl">{article.flag_emoji}</span>
                )}
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
              <span className="font-medium text-gray-900">
                Relocation Quest
              </span>
            </div>
            {publishDate && (
              <>
                <span className="text-gray-400">•</span>
                <span>{publishDate}</span>
              </>
            )}
            {article.word_count && (
              <>
                <span className="text-gray-400">•</span>
                <span>{article.word_count.toLocaleString()} words</span>
              </>
            )}
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
        {/* SEO Intro - includes title keywords for search engines */}
        <p className="text-lg text-gray-600 mb-8 pb-8 border-b border-gray-200">
          Welcome to our {new Date().getFullYear()} complete guide on <strong className="text-gray-900">{article.title.replace(/ \| Relocation Quest$/, '').replace(/\d{4}:?\s*/g, '')}</strong>.
          {article.country && (
            <> This comprehensive guide covers everything you need to know about {article.country}, updated for {new Date().getFullYear()}.</>
          )}
          {!article.country && (
            <> This comprehensive resource is updated for {new Date().getFullYear()} with the latest information and practical advice.</>
          )}
        </p>

        {article.content ? (
          <div
            className="prose prose-lg max-w-none
              prose-headings:font-bold prose-headings:text-gray-900
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:border-l-4 prose-h2:border-amber-500 prose-h2:pl-4
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
              prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
              prose-a:text-amber-600 prose-a:no-underline hover:prose-a:text-amber-500
              prose-strong:text-amber-700 prose-strong:font-semibold
              prose-ul:list-none prose-ul:pl-0 prose-ul:space-y-3
              prose-li:bg-amber-50 prose-li:border-l-2 prose-li:border-amber-500 prose-li:px-4 prose-li:py-3 prose-li:rounded-r-lg
              prose-blockquote:border-l-4 prose-blockquote:border-amber-500 prose-blockquote:bg-amber-50 prose-blockquote:rounded-r-xl prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:italic
            "
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        ) : (
          <div className="text-center py-12 text-gray-500">
            <p>No content available for this article.</p>
          </div>
        )}

        {/* Related Guides Section - Internal Links for SEO */}
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
                    <span className={`w-8 h-8 rounded-lg bg-gradient-to-br ${relConfig.gradient} flex items-center justify-center text-sm text-white flex-shrink-0`}>
                      {relConfig.icon}
                    </span>
                    <span className="text-gray-900 font-medium text-sm line-clamp-2 group-hover:text-amber-600 transition-colors">
                      {related.title}
                    </span>
                  </Link>
                )
              })}
            </div>
          </section>
        )}

        {/* Similar Guides by Type */}
        {sameModeArticles.length > 0 && (
          <section className="my-12 p-6 bg-gray-50 border border-gray-200 rounded-xl">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className={`w-8 h-8 rounded-lg bg-gradient-to-br ${config.gradient} flex items-center justify-center text-sm text-white`}>
                {config.icon}
              </span>
              More {config.label}s
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {sameModeArticles.slice(0, 4).map((related) => (
                <Link
                  key={related.id}
                  href={`/articles/${related.slug}`}
                  className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-100 hover:border-amber-300 hover:shadow-sm transition-all group"
                >
                  {related.flag_emoji && (
                    <span className="text-xl flex-shrink-0">{related.flag_emoji}</span>
                  )}
                  <span className="text-gray-900 font-medium text-sm line-clamp-2 group-hover:text-amber-600 transition-colors">
                    {related.title}
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Stat Highlight */}
        {article.payload?.stat_highlight && (
          <div className="my-12 p-8 bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-2xl text-center">
            <div className="text-5xl font-bold text-amber-400 mb-2">
              {article.payload.stat_highlight.value}
            </div>
            <div className="text-xl text-white font-medium mb-2">
              {article.payload.stat_highlight.label}
            </div>
            <div className="text-gray-400">
              {article.payload.stat_highlight.context}
            </div>
          </div>
        )}

        {/* FAQ Section with Schema.org markup */}
        {faqItems.length > 0 && (
          <section className="my-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-amber-500 pl-4">
              Frequently Asked Questions
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
                    <span className="font-medium text-gray-900" itemProp="name">{item.question}</span>
                    <span className="text-amber-500 group-open:rotate-180 transition-transform">▼</span>
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

        {/* Callouts */}
        {article.payload?.callouts && article.payload.callouts.length > 0 && (
          <div className="my-12 space-y-4">
            {article.payload.callouts.map((callout, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-xl border ${
                  callout.type === 'warning'
                    ? 'bg-yellow-500/10 border-yellow-500/30'
                    : callout.type === 'tip'
                    ? 'bg-green-500/10 border-green-500/30'
                    : 'bg-blue-500/10 border-blue-500/30'
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span>{callout.type === 'warning' ? '⚠️' : callout.type === 'tip' ? '💡' : 'ℹ️'}</span>
                  <span className="font-semibold text-gray-900">{callout.title}</span>
                </div>
                <p className="text-gray-700">{callout.content}</p>
              </div>
            ))}
          </div>
        )}

        {/* Timeline */}
        {article.payload?.timeline && article.payload.timeline.length > 0 && (
          <div className="my-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-amber-500 pl-4">
              Timeline
            </h2>
            <div className="space-y-4 border-l-2 border-amber-300 pl-6">
              {article.payload.timeline.map((item, idx) => (
                <div key={idx} className="relative">
                  <div className="absolute -left-8 w-3 h-3 bg-amber-500 rounded-full" />
                  <div className="text-sm text-amber-600 font-medium">{item.date}</div>
                  <div className="text-gray-900 font-semibold">{item.title}</div>
                  <div className="text-gray-600 text-sm">{item.description}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Sources */}
        {article.payload?.sources && article.payload.sources.length > 0 && (
          <div className="my-12 p-6 bg-gray-50 border border-gray-200 rounded-xl">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Sources</h3>
            <ul className="space-y-2">
              {article.payload.sources.map((source, idx) => (
                <li key={idx}>
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-500 hover:text-amber-400 underline"
                  >
                    {source.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Article Footer */}
        <footer className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex items-center gap-4">
            {article.video_playback_id && (
              <Image
                src={getThumbnail(article.video_playback_id, 10)}
                alt="Relocation Quest Editorial Team"
                width={64}
                height={64}
                className="rounded-full border-2 border-amber-300 object-cover"
              />
            )}
            <div>
              <p className="font-medium text-gray-900">Relocation Quest Editorial Team</p>
              <p className="text-sm text-gray-500">
                Published {publishDate} • {article.word_count?.toLocaleString()} words
              </p>
            </div>
          </div>
          <div className="mt-6">
            <Link
              href="/articles"
              className="inline-flex items-center text-amber-600 hover:text-amber-500 font-medium transition-colors"
            >
              ← Back to articles
            </Link>
          </div>
        </footer>
      </article>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="border-t border-gray-200 py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-900">More Articles</h2>
              <Link
                href="/articles"
                className="text-amber-600 hover:text-amber-500 font-medium text-sm flex items-center gap-1"
              >
                View all articles <span>→</span>
              </Link>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
              {relatedArticles.map((related) => {
                const relConfig = MODE_CONFIG[related.article_mode] || MODE_CONFIG.topic
                return (
                  <Link
                    key={related.id}
                    href={`/articles/${related.slug}`}
                    className="group block bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-amber-300 hover:shadow-lg transition-all hover:-translate-y-1"
                  >
                    <div className="relative aspect-video">
                      {related.video_playback_id ? (
                        <Image
                          src={getThumbnail(related.video_playback_id, 5)}
                          alt={related.title}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className={`w-full h-full bg-gradient-to-br ${relConfig.gradient} opacity-20 flex items-center justify-center`}>
                          <span className="text-4xl">{relConfig.icon}</span>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-white/90 to-transparent" />
                      <div className="absolute bottom-3 left-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${relConfig.gradient}`}>
                          {relConfig.icon} {relConfig.label}
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-gray-900 line-clamp-2 group-hover:text-amber-600 transition-colors">
                        {related.title}
                      </h3>
                      {related.excerpt && (
                        <p className="text-gray-500 text-sm mt-2 line-clamp-2">{related.excerpt}</p>
                      )}
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* Browse by Category - Additional Internal Links */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Browse by Category</h2>
          <div className="flex flex-wrap gap-3">
            {Object.entries(MODE_CONFIG).map(([mode, cfg]) => (
              <Link
                key={mode}
                href={`/articles#${mode}`}
                className={`px-4 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r ${cfg.gradient} hover:opacity-90 transition-opacity`}
              >
                {cfg.icon} {cfg.label}
              </Link>
            ))}
            <Link
              href="/articles"
              className="px-4 py-2 rounded-full text-sm font-semibold text-amber-600 border-2 border-amber-500 hover:bg-amber-50 transition-colors"
            >
              All Articles →
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <StaticFooter
        brandName="Relocation"
        brandAccent="Quest"
        brandGradient="from-amber-400 to-orange-500"
      />
    </main>
  )
}
