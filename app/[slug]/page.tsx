import { Metadata } from 'next'
import Link from 'next/link'
import { neon } from '@neondatabase/serverless'
import { notFound } from 'next/navigation'

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
  app: string
}

interface PageProps {
  params: Promise<{ slug: string }>
}

async function getArticle(slug: string): Promise<Article | null> {
  try {
    // Try gateway first
    const res = await fetch(
      `${GATEWAY_URL}/dashboard/content/articles/${slug}`,
      { next: { revalidate: 3600 }, headers: { 'Accept': 'application/json' } }
    )
    if (res.ok) {
      const data = await res.json()
      return data.article || null
    }
  } catch (error) {
    console.error('Gateway fetch failed:', error)
  }

  // Fallback to direct DB query
  if (process.env.DATABASE_URL) {
    try {
      const sql = neon(process.env.DATABASE_URL)
      const results = await sql`
        SELECT id, slug, title, excerpt, content, hero_asset_url, hero_asset_alt, published_at, word_count, app
        FROM articles
        WHERE slug = ${slug}
        AND status = 'published'
        LIMIT 1
      `
      if (results.length > 0) {
        return results[0] as Article
      }
    } catch (error) {
      console.error('DB fetch failed:', error)
    }
  }

  return null
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

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params
  const article = await getArticle(slug)

  if (!article) {
    notFound()
  }

  const backLink = article.app === 'fractional' ? '/fractional-jobs-articles' : '/articles'

  return (
    <main className="min-h-screen bg-white">
      {article.hero_asset_url && (
        <div className="w-full h-96 bg-gray-100 overflow-hidden">
          <img
            src={article.hero_asset_url}
            alt={article.hero_asset_alt || article.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <div className="max-w-4xl mx-auto px-6 py-12">
        <header className="mb-12 pb-8 border-b border-gray-200">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{article.title}</h1>
          {article.excerpt && <p className="text-xl text-gray-600">{article.excerpt}</p>}
        </header>

        {article.content && (
          <div
            className="prose prose-lg max-w-none mb-12
              prose-headings:font-bold prose-headings:text-gray-900
              prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
              prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
              prose-p:text-gray-700 prose-p:leading-relaxed
              prose-a:text-blue-600 hover:prose-a:text-blue-700
              prose-strong:text-gray-900
              prose-ul:my-4 prose-li:text-gray-700
            "
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        )}

        <nav className="mt-12 pt-8 border-t border-gray-200">
          <Link href={backLink} className="text-blue-600 hover:text-blue-700 font-medium">
            ← Back to Articles
          </Link>
        </nav>
      </div>
    </main>
  )
}
