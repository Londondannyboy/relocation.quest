// V4 - Pre-formatted text with white-space preservation
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

function formatContent(html: string): string {
  if (!html) return ''

  // Wrap in pre-like element with white-space preservation
  let result = html
    .replace(/<h1([^>]*)>([^<]*)<\/h1>/g, '<div style="font-size: 28px; font-weight: bold; margin: 40px 0 20px 0; line-height: 1.3;">$2</div>')
    .replace(/<h2([^>]*)>([^<]*)<\/h2>/g, '<div style="font-size: 24px; font-weight: bold; margin: 35px 0 18px 0; line-height: 1.3;">$2</div>')
    .replace(/<h3([^>]*)>([^<]*)<\/h3>/g, '<div style="font-size: 20px; font-weight: bold; margin: 30px 0 15px 0; line-height: 1.3;">$2</div>')
    .replace(/<h4([^>]*)>([^<]*)<\/h4>/g, '<div style="font-size: 18px; font-weight: bold; margin: 25px 0 12px 0; line-height: 1.3;">$2</div>')
    .replace(/<p([^>]*)>([^<]*)<\/p>/g, '<div style="margin: 0 0 20px 0; line-height: 1.8; white-space: pre-wrap; word-wrap: break-word;">$2</div>')
    .replace(/<li([^>]*)>([^<]*)<\/li>/g, '<div style="margin-left: 20px; margin-bottom: 12px; line-height: 1.8;">• $2</div>')

  return result
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = await getArticle(slug)
  if (!article) notFound()

  const formatted = formatContent(article.content || '')

  return (
    <article style={styles.article}>
      {article.hero_asset_url && (
        <img src={article.hero_asset_url} alt={article.hero_asset_alt || article.title} style={styles.hero} />
      )}

      <div style={styles.wrapper}>
        <header style={styles.header}>
          <h1 style={styles.title}>{article.title}</h1>
          {article.excerpt && <p style={styles.excerpt}>{article.excerpt}</p>}
        </header>

        <div style={styles.body} dangerouslySetInnerHTML={{ __html: formatted }} />

        <footer style={styles.footer}>
          <a href="/articles" style={styles.link}>← Back to Articles</a>
        </footer>
      </div>
    </article>
  )
}

const styles = {
  article: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    color: '#333',
    lineHeight: '1.6',
    background: '#fff',
  } as React.CSSProperties,

  hero: {
    width: '100%',
    height: '400px',
    objectFit: 'cover' as const,
    display: 'block',
    marginBottom: '40px',
  } as React.CSSProperties,

  wrapper: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '0 20px 60px 20px',
  } as React.CSSProperties,

  header: {
    marginBottom: '40px',
    paddingBottom: '30px',
    borderBottom: '1px solid #ddd',
  } as React.CSSProperties,

  title: {
    fontSize: '36px',
    fontWeight: 'bold' as const,
    margin: '0 0 20px 0',
    lineHeight: '1.2',
  } as React.CSSProperties,

  excerpt: {
    fontSize: '18px',
    color: '#666',
    margin: '0',
    lineHeight: '1.6',
  } as React.CSSProperties,

  body: {
    fontSize: '16px',
    lineHeight: '1.8',
    marginBottom: '40px',
    whiteSpace: 'normal' as const,
  } as React.CSSProperties,

  footer: {
    paddingTop: '20px',
    borderTop: '1px solid #ddd',
  } as React.CSSProperties,

  link: {
    color: '#0066cc',
    textDecoration: 'none',
  } as React.CSSProperties,
}
