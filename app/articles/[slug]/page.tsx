import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'

export const revalidate = 3600

interface PageProps {
  params: Promise<{ slug: string }>
}

const GATEWAY_URL = process.env.GATEWAY_URL || process.env.NEXT_PUBLIC_GATEWAY_URL || 'https://quest-gateway-production.up.railway.app'

interface Article {
  id: number
  slug: string
  title: string
  excerpt: string | null
  content: string | null
  hero_asset_url: string | null
  hero_asset_alt: string | null
  featured_asset_url: string | null
  published_at: string | null
  word_count: number | null
  country: string | null
  flag_emoji: string | null
  article_mode: string
}

async function getArticle(slug: string): Promise<Article | null> {
  try {
    const res = await fetch(
      `${GATEWAY_URL}/dashboard/content/articles/${slug}`,
      {
        next: { revalidate: 3600 },
        headers: { 'Accept': 'application/json' }
      }
    )
    if (!res.ok) return null
    const data = await res.json()
    return data.article || null
  } catch (error) {
    console.error(`Error fetching article ${slug}:`, error)
    return null
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const article = await getArticle(slug)

  if (!article) {
    return { title: 'Article Not Found | Relocation Quest' }
  }

  return {
    title: `${article.title} | Relocation Quest`,
    description: article.excerpt || article.title,
  }
}

export default async function ArticleDetailPage({ params }: PageProps) {
  const { slug } = await params
  const article = await getArticle(slug)

  if (!article) {
    notFound()
  }

  const readingTime = article.word_count ? Math.ceil(article.word_count / 200) : null
  const formattedDate = article.published_at
    ? new Date(article.published_at).toLocaleDateString('en-GB', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : null

  return (
    <article className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="relative bg-gradient-to-br from-amber-50 to-orange-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          {/* Breadcrumb */}
          <nav className="mb-6">
            <Link href="/articles" className="text-amber-600 hover:text-amber-700 transition-colors text-sm font-medium">
              ← Back to Articles
            </Link>
          </nav>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
            {article.title}
          </h1>

          {/* Excerpt */}
          {article.excerpt && (
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 max-w-3xl">
              {article.excerpt}
            </p>
          )}

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600">
            {formattedDate && (
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {formattedDate}
              </span>
            )}
            {readingTime && (
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {readingTime} min read
              </span>
            )}
            {article.word_count && (
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                {article.word_count.toLocaleString()} words
              </span>
            )}
          </div>
        </div>
      </header>

      {/* Hero Image */}
      {article.hero_asset_url && (
        <div className="relative -mt-8 max-w-5xl mx-auto px-4">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={article.hero_asset_url}
              alt={article.hero_asset_alt || article.title}
              width={1200}
              height={400}
              className="w-full h-64 md:h-96 object-cover"
              priority
            />
          </div>
        </div>
      )}

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Article Body */}
        {article.content ? (
          <div
            className="article-content bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        ) : (
          <div className="text-center py-12 text-gray-500">
            <p>No content available for this article.</p>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl p-8 md:p-10 text-white">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Ready to start your relocation journey?</h3>
              <p className="text-amber-100">Chat with our AI relocation assistant for personalized guidance.</p>
            </div>
            <Link href="/chat">
              <button className="px-8 py-4 bg-white text-amber-600 rounded-xl font-bold hover:bg-amber-50 transition-colors whitespace-nowrap shadow-lg">
                Start Chat →
              </button>
            </Link>
          </div>
        </div>

        {/* Back Link */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex justify-between items-center">
          <Link href="/articles" className="text-amber-600 hover:text-amber-700 font-medium flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to All Articles
          </Link>
          <a
            href="#top"
            className="text-gray-600 hover:text-gray-700 flex items-center gap-2"
          >
            Back to top
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </a>
        </div>
      </div>
    </article>
  )
}
