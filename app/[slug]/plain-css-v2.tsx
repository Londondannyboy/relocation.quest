// PLAIN CSS V2 - With HTML cleanup and whitespace handling
import { createDbQuery } from '@/lib/db'
import { notFound } from 'next/navigation'

async function getArticle(slug: string) {
  try {
    const sql = createDbQuery()
    const articles = await sql`
      SELECT id, slug, title, excerpt, content, hero_asset_url, hero_asset_alt, published_at, word_count, app
      FROM articles WHERE slug = ${slug} AND status = 'published' LIMIT 1
    `
    return articles[0] || null
  } catch {
    return null
  }
}

function cleanHtml(html: string): string {
  if (!html) return ''

  // Add spacing to block elements
  let cleaned = html
    .replace(/<h[1-6]>/g, '<h$& style="margin-top: 30px; margin-bottom: 15px; font-weight: bold;">')
    .replace(/<h1/g, '<h1 style="font-size: 28px; margin-top: 30px; margin-bottom: 15px; font-weight: bold;"')
    .replace(/<h2/g, '<h2 style="font-size: 24px; margin-top: 30px; margin-bottom: 15px; font-weight: bold;"')
    .replace(/<h3/g, '<h3 style="font-size: 20px; margin-top: 25px; margin-bottom: 12px; font-weight: bold;"')
    .replace(/<p>/g, '<p style="margin-bottom: 15px; line-height: 1.8;">')
    .replace(/<li>/g, '<li style="margin-bottom: 8px; margin-left: 20px;">')
    .replace(/<ul>/g, '<ul style="margin: 15px 0; padding-left: 40px;">')
    .replace(/<strong>/g, '<strong style="font-weight: bold;">')
    .replace(/<em>/g, '<em style="font-style: italic;">')

  return cleaned
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = await getArticle(slug)
  if (!article) notFound()

  const cleanedContent = cleanHtml(article.content || '')

  return (
    <article style={styles.article}>
      {article.hero_asset_url && (
        <div style={styles.hero}>
          <img src={article.hero_asset_url} alt={article.hero_asset_alt || article.title} style={styles.heroImage} />
        </div>
      )}

      <div style={styles.container}>
        <header style={styles.header}>
          <h1 style={styles.h1}>{article.title}</h1>
          {article.excerpt && <p style={styles.excerpt}>{article.excerpt}</p>}
        </header>

        <div style={styles.content} dangerouslySetInnerHTML={{ __html: cleanedContent }} />

        <footer style={styles.footer}>
          <a href="/articles" style={styles.link}>← Back to Articles</a>
        </footer>
      </div>
    </article>
  )
}

const styles = {
  article: {
    width: '100%',
    margin: '0',
    padding: '0',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    lineHeight: '1.6',
    color: '#333',
    background: '#fff',
  },
  hero: {
    width: '100%',
    height: '400px',
    overflow: 'hidden',
    marginBottom: '40px',
  },
  heroImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover' as const,
  },
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '0 20px 60px',
  },
  header: {
    marginBottom: '40px',
    paddingBottom: '30px',
    borderBottom: '1px solid #eee',
  },
  h1: {
    fontSize: '36px',
    fontWeight: 'bold' as const,
    margin: '0 0 20px 0',
    lineHeight: '1.2',
  },
  excerpt: {
    fontSize: '18px',
    color: '#666',
    margin: '0',
    lineHeight: '1.6',
  },
  content: {
    marginBottom: '40px',
    fontSize: '16px',
    lineHeight: '1.8',
  },
  footer: {
    paddingTop: '20px',
    borderTop: '1px solid #eee',
    fontSize: '14px',
  },
  link: {
    color: '#0066cc',
    textDecoration: 'none',
  },
}
