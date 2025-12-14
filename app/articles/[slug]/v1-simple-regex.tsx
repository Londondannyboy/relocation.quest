// VERSION 1: Simple Regex-based converter
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

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = await getArticle(slug)
  if (!article) notFound()

  let html = article.content || ''
  html = html.replace(/### (.*?)$/gm, '<h3>$1</h3>')
  html = html.replace(/## (.*?)$/gm, '<h2>$1</h2>')
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
  html = html.replace(/\n\n/g, '</p><p>')

  return (
    <article className="min-h-screen bg-white">
      {article.hero_asset_url && (
        <div className="relative w-full h-96 bg-gray-100">
          <Image src={article.hero_asset_url} alt={article.hero_asset_alt || article.title} fill className="object-cover" priority />
        </div>
      )}
      <div className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-5xl font-bold mb-4">{article.title}</h1>
        <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </article>
  )
}
