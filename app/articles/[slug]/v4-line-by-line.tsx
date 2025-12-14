// VERSION 4: Line-by-line markdown parsing for maximum control
import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
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
}

async function getArticle(slug: string): Promise<Article | null> {
  try {
    const res = await fetch(`${GATEWAY_URL}/dashboard/content/articles/${slug}`, { next: { revalidate: 3600 } })
    if (!res.ok) return null
    const data = await res.json()
    return data.article || null
  } catch {
    return null
  }
}

function convertMarkdownToHtml(markdown: string): string {
  const lines = markdown.split('\n')
  const result: string[] = []
  let inList = false
  let inParagraph = false
  let paragraphBuffer: string[] = []

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    const trimmed = line.trim()

    // Empty line - flush paragraph and list
    if (!trimmed) {
      if (inList) {
        result.push('</ul>')
        inList = false
      }
      if (inParagraph && paragraphBuffer.length > 0) {
        result.push('<p>' + paragraphBuffer.join(' ') + '</p>')
        paragraphBuffer = []
        inParagraph = false
      }
      continue
    }

    // Heading level 3
    if (trimmed.startsWith('### ')) {
      if (inList) {
        result.push('</ul>')
        inList = false
      }
      if (inParagraph && paragraphBuffer.length > 0) {
        result.push('<p>' + paragraphBuffer.join(' ') + '</p>')
        paragraphBuffer = []
        inParagraph = false
      }
      const heading = trimmed.substring(4).trim()
      result.push(`<h3>${heading}</h3>`)
      continue
    }

    // Heading level 2
    if (trimmed.startsWith('## ')) {
      if (inList) {
        result.push('</ul>')
        inList = false
      }
      if (inParagraph && paragraphBuffer.length > 0) {
        result.push('<p>' + paragraphBuffer.join(' ') + '</p>')
        paragraphBuffer = []
        inParagraph = false
      }
      const heading = trimmed.substring(3).trim()
      result.push(`<h2>${heading}</h2>`)
      continue
    }

    // Heading level 1
    if (trimmed.startsWith('# ')) {
      if (inList) {
        result.push('</ul>')
        inList = false
      }
      if (inParagraph && paragraphBuffer.length > 0) {
        result.push('<p>' + paragraphBuffer.join(' ') + '</p>')
        paragraphBuffer = []
        inParagraph = false
      }
      const heading = trimmed.substring(2).trim()
      result.push(`<h1>${heading}</h1>`)
      continue
    }

    // List item
    if (trimmed.startsWith('- ')) {
      if (inParagraph && paragraphBuffer.length > 0) {
        result.push('<p>' + paragraphBuffer.join(' ') + '</p>')
        paragraphBuffer = []
        inParagraph = false
      }
      if (!inList) {
        result.push('<ul>')
        inList = true
      }
      const item = trimmed.substring(2).trim()
      // Apply inline formatting to list items
      let formatted = item
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/_(.*?)_/g, '<em>$1</em>')
      result.push(`<li>${formatted}</li>`)
      continue
    }

    // Regular paragraph text
    let text = trimmed
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/_(.*?)_/g, '<em>$1</em>')
      .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>')

    if (!inParagraph) {
      inParagraph = true
    }
    if (inList) {
      result.push('</ul>')
      inList = false
    }
    paragraphBuffer.push(text)
  }

  // Flush remaining content
  if (inList) {
    result.push('</ul>')
  }
  if (inParagraph && paragraphBuffer.length > 0) {
    result.push('<p>' + paragraphBuffer.join(' ') + '</p>')
  }

  return result.join('\n')
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = await getArticle(slug)
  if (!article) notFound()

  const readingTime = article.word_count ? Math.ceil(article.word_count / 200) : null
  const formattedDate = article.published_at
    ? new Date(article.published_at).toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })
    : null

  const htmlContent = convertMarkdownToHtml(article.content || '')

  return (
    <article className="min-h-screen bg-white">
      {article.hero_asset_url && (
        <div className="relative w-full h-96 bg-gray-100 overflow-hidden">
          <Image src={article.hero_asset_url} alt={article.hero_asset_alt || article.title} fill className="object-cover" priority />
        </div>
      )}

      <header className="border-b border-gray-200 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <div className="flex gap-4 text-sm text-gray-600 mb-6">
            {formattedDate && <span>{formattedDate}</span>}
            {readingTime && <> • <span>{readingTime} min</span></>}
            {article.word_count && <> • <span>{article.word_count.toLocaleString()}</span></>}
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">{article.title}</h1>
          {article.excerpt && <p className="text-xl text-gray-600">{article.excerpt}</p>}
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-6 py-12">
        <div
          className="prose prose-lg max-w-none
            prose-h1:text-4xl prose-h1:font-bold prose-h1:mb-6 prose-h1:text-gray-900
            prose-h2:text-3xl prose-h2:font-bold prose-h2:mt-8 prose-h2:mb-4 prose-h2:text-gray-900
            prose-h3:text-2xl prose-h3:font-bold prose-h3:mt-6 prose-h3:mb-3 prose-h3:text-gray-900
            prose-p:text-gray-700 prose-p:mb-4 prose-p:leading-relaxed
            prose-strong:font-bold prose-strong:text-gray-900
            prose-ul:my-4 prose-ul:ml-6 prose-li:text-gray-700 prose-li:mb-2
            prose-a:text-amber-600 hover:prose-a:text-amber-700"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </div>

      <div className="border-t border-gray-200 bg-gray-50 mt-12">
        <div className="max-w-3xl mx-auto px-6 py-8">
          <Link href="/articles" className="text-amber-600 hover:text-amber-700 font-medium">← Back to Articles</Link>
        </div>
      </div>
    </article>
  )
}
