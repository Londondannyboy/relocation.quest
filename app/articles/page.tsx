import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { StaticHeader } from '@/components/StaticHeader'
import { StaticFooter } from '@/components/StaticFooter'

interface Article {
  id: number
  slug: string
  title: string
  excerpt: string | null
  article_mode: string
  country: string | null
  flag_emoji: string | null
  video_playback_id: string | null
  published_at: string | null
  word_count: number | null
}

const MODE_CONFIG: Record<string, { label: string; icon: string; gradient: string }> = {
  story: { label: 'Stories', icon: '📖', gradient: 'from-amber-500 to-orange-600' },
  guide: { label: 'Guides', icon: '📋', gradient: 'from-blue-500 to-indigo-600' },
  yolo: { label: 'YOLO', icon: '🚀', gradient: 'from-pink-500 to-rose-600' },
  voices: { label: 'Voices', icon: '💬', gradient: 'from-purple-500 to-violet-600' },
  topic: { label: 'Deep Dives', icon: '🔍', gradient: 'from-emerald-500 to-teal-600' },
  nomad: { label: 'Digital Nomad', icon: '🌍', gradient: 'from-cyan-500 to-blue-600' },
}

const GATEWAY_URL = process.env.GATEWAY_URL || process.env.NEXT_PUBLIC_GATEWAY_URL || 'https://quest-gateway-production.up.railway.app'

function getThumbnail(playbackId: string | null, time: number = 5): string {
  if (!playbackId) return ''
  return `https://image.mux.com/${playbackId}/thumbnail.jpg?time=${time}&width=400`
}

async function getArticles(): Promise<Article[]> {
  try {
    const res = await fetch(
      `${GATEWAY_URL}/dashboard/content/articles?limit=200`,
      {
        next: { revalidate: 3600 },
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

export const metadata: Metadata = {
  title: 'Articles | Relocation Quest',
  description: 'Expert guides, real expat stories, and actionable advice for your international relocation journey. Browse all our articles on visas, taxes, cost of living, and more.',
  alternates: {
    canonical: 'https://relocation.quest/articles',
  },
}

export default async function ArticlesPage() {
  const articles = await getArticles()

  // Group articles by mode
  const articlesByMode: Record<string, Article[]> = {}
  articles.forEach((article) => {
    const mode = article.article_mode || 'topic'
    if (!articlesByMode[mode]) articlesByMode[mode] = []
    articlesByMode[mode].push(article)
  })

  const sectionOrder = ['story', 'guide', 'yolo', 'voices', 'topic', 'nomad']

  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">
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

      {/* Hero */}
      <header className="pt-24 pb-12 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Expert Relocation Guides
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            {articles.length} articles covering visas, taxes, cost of living, and everything you need for your international move.
          </p>
        </div>
      </header>

      {/* Quick Stats */}
      <section className="border-y border-gray-200 bg-gray-50 py-6">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap gap-4">
            {sectionOrder.filter(mode => articlesByMode[mode]?.length > 0).map(mode => {
              const config = MODE_CONFIG[mode]
              return (
                <a
                  key={mode}
                  href={`#${mode}`}
                  className={`px-4 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r ${config.gradient} hover:opacity-90 transition-opacity`}
                >
                  {config.icon} {config.label} ({articlesByMode[mode].length})
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* Articles by Category */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {sectionOrder.filter(mode => articlesByMode[mode]?.length > 0).map(mode => {
          const config = MODE_CONFIG[mode]
          const modeArticles = articlesByMode[mode]
          return (
            <section key={mode} id={mode} className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <span className={`w-12 h-12 rounded-xl bg-gradient-to-br ${config.gradient} flex items-center justify-center text-xl text-white`}>
                  {config.icon}
                </span>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{config.label}</h2>
                  <p className="text-gray-500 text-sm">{modeArticles.length} articles</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {modeArticles.map((article, idx) => {
                  const thumbnail = getThumbnail(article.video_playback_id, 5)
                  const publishDate = article.published_at
                    ? new Date(article.published_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
                    : null

                  return (
                    <Link
                      key={article.id}
                      href={`/articles/${article.slug}`}
                      className="group block bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-amber-300 hover:shadow-lg transition-all"
                    >
                      <div className="relative aspect-video bg-gray-100">
                        {thumbnail ? (
                          <Image
                            src={thumbnail}
                            alt={article.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        ) : (
                          <div className={`w-full h-full bg-gradient-to-br ${config.gradient} opacity-20 flex items-center justify-center`}>
                            <span className="text-4xl">{config.icon}</span>
                          </div>
                        )}
                        <div className="absolute bottom-3 left-3 flex items-center gap-2">
                          {article.flag_emoji && (
                            <span className="text-xl">{article.flag_emoji}</span>
                          )}
                          <span className={`px-2 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${config.gradient}`}>
                            {config.icon} {config.label}
                          </span>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-gray-900 line-clamp-2 group-hover:text-amber-600 transition-colors mb-2">
                          {article.title}
                        </h3>
                        {article.excerpt && (
                          <p className="text-gray-500 text-sm line-clamp-2 mb-3">{article.excerpt}</p>
                        )}
                        <div className="flex items-center justify-between text-xs text-gray-400">
                          {publishDate && <span>{publishDate}</span>}
                          {article.word_count && <span>{Math.ceil(article.word_count / 200)} min read</span>}
                        </div>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </section>
          )
        })}
      </div>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-amber-50 to-orange-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Need Personalized Advice?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Chat with our AI relocation assistant for tailored guidance.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/chat"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
            >
              Start Chat 💬
            </Link>
            <Link
              href="/voice"
              className="inline-flex items-center gap-2 border-2 border-amber-500 text-amber-600 px-6 py-3 rounded-full font-semibold hover:bg-amber-50 transition-colors"
            >
              Try Voice 🎙️
            </Link>
          </div>
        </div>
      </section>

      <StaticFooter
        brandName="Relocation"
        brandAccent="Quest"
        brandGradient="from-amber-400 to-orange-500"
      />
    </main>
  )
}
