import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { marked } from 'marked'

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
  published_at: string | null
  word_count: number | null
}

async function getArticle(slug: string): Promise<Article | null> {
  try {
    const res = await fetch(`${GATEWAY_URL}/dashboard/content/articles/${slug}`, {
      next: { revalidate: 3600 },
      headers: { 'Accept': 'application/json' }
    })
    if (!res.ok) return null
    const data = await res.json()
    return data.article || null
  } catch (error) {
    return null
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const article = await getArticle(slug)
  if (!article) return { title: 'Article Not Found | Relocation Quest' }
  return {
    title: `${article.title} | Relocation Quest`,
    description: article.excerpt || article.title,
  }
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params
  const article = await getArticle(slug)
  if (!article) notFound()

  // Convert markdown to HTML
  const htmlContent = article.content ? await marked(article.content) : null

  const readingTime = article.word_count ? Math.ceil(article.word_count / 200) : null
  const formattedDate = article.published_at
    ? new Date(article.published_at).toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })
    : null

  return (
    <article className="min-h-screen bg-white">
      {/* Hero Image */}
      {article.hero_asset_url && (
        <div className="relative w-full h-96 bg-gray-100">
          <Image
            src={article.hero_asset_url}
            alt={article.hero_asset_alt || article.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      {/* Header */}
      <header className="border-b border-gray-200 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
            {formattedDate && <span>{formattedDate}</span>}
            {readingTime && <span>•</span>}
            {readingTime && <span>{readingTime} min read</span>}
            {article.word_count && <span>•</span>}
            {article.word_count && <span>{article.word_count.toLocaleString()} words</span>}
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">{article.title}</h1>
          {article.excerpt && <p className="text-xl text-gray-600">{article.excerpt}</p>}
        </div>
      </header>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-12">
        {htmlContent ? (
          <div
            className="prose prose-lg max-w-none 
              prose-h2:text-3xl prose-h2:font-bold prose-h2:mt-8 prose-h2:mb-4 prose-h2:text-gray-900
              prose-h3:text-2xl prose-h3:font-bold prose-h3:mt-6 prose-h3:mb-3 prose-h3:text-gray-900
              prose-h4:text-xl prose-h4:font-bold prose-h4:mt-4 prose-h4:mb-2
              prose-p:text-gray-700 prose-p:mb-4 prose-p:leading-relaxed
              prose-a:text-amber-600 prose-a:no-underline hover:prose-a:text-amber-700
              prose-strong:text-gray-900 prose-strong:font-bold
              prose-ul:my-4 prose-ul:pl-6 prose-li:text-gray-700
              prose-ol:my-4 prose-ol:pl-6
              prose-blockquote:border-l-4 prose-blockquote:border-amber-500 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-gray-600
              prose-code:text-amber-600 prose-code:bg-gray-100 prose-code:px-1.5 prose-code:rounded prose-code:text-sm
              prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:rounded-lg prose-pre:p-4 prose-pre:overflow-x-auto"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        ) : (
          <p className="text-gray-500">No content available.</p>
        )}
      </div>

      {/* Footer */}
      <div className="border-t border-gray-200 bg-gray-50 mt-12">
        <div className="max-w-3xl mx-auto px-6 py-8">
          <Link href="/articles" className="text-amber-600 hover:text-amber-700 font-medium">
            ← Back to Articles
          </Link>
        </div>
      </div>
    </article>
  )
}
