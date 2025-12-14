// V3 - Aggressive inline spacing on all elements
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

function addSpacing(html: string): string {
  if (!html) return ''

  let result = html
    .replace(/<h1([^>]*)>/g, '<h1$1 style="display: block; font-size: 28px; margin: 40px 0 20px 0; font-weight: bold; line-height: 1.3;">')
    .replace(/<h2([^>]*)>/g, '<h2$1 style="display: block; font-size: 24px; margin: 35px 0 18px 0; font-weight: bold; line-height: 1.3;">')
    .replace(/<h3([^>]*)>/g, '<h3$1 style="display: block; font-size: 20px; margin: 30px 0 15px 0; font-weight: bold; line-height: 1.3;">')
    .replace(/<h4([^>]*)>/g, '<h4$1 style="display: block; font-size: 18px; margin: 25px 0 12px 0; font-weight: bold; line-height: 1.3;">')
    .replace(/<p([^>]*)>/g, '<p$1 style="display: block; margin: 0 0 20px 0; line-height: 1.8;">')
    .replace(/<ul([^>]*)>/g, '<ul$1 style="display: block; margin: 20px 0; padding-left: 40px; list-style-type: disc;">')
    .replace(/<ol([^>]*)>/g, '<ol$1 style="display: block; margin: 20px 0; padding-left: 40px; list-style-type: decimal;">')
    .replace(/<li([^>]*)>/g, '<li$1 style="display: list-item; margin-bottom: 12px; line-height: 1.8;">')
    .replace(/<blockquote([^>]*)>/g, '<blockquote$1 style="display: block; margin: 25px 0; padding: 0 0 0 20px; border-left: 4px solid #ccc; color: #666; font-style: italic;">')
    .replace(/<strong([^>]*)>/g, '<strong$1 style="font-weight: bold;">')
    .replace(/<em([^>]*)>/g, '<em$1 style="font-style: italic;">')

  return result
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = await getArticle(slug)
  if (!article) notFound()

  const spacedContent = addSpacing(article.content || '')

  return (
    <article style={styles.article}>
      {article.hero_asset_url && (
        <figure style={styles.figure}>
          <img src={article.hero_asset_url} alt={article.hero_asset_alt || article.title} style={styles.img} />
        </figure>
      )}

      <div style={styles.container}>
        <header style={styles.header}>
          <h1 style={styles.h1}>{article.title}</h1>
          {article.excerpt && <p style={styles.subtitle}>{article.excerpt}</p>}
        </header>

        <main style={styles.main} dangerouslySetInnerHTML={{ __html: spacedContent }} />

        <nav style={styles.nav}>
          <a href="/articles" style={styles.link}>← Back to Articles</a>
        </nav>
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
    color: '#333',
    background: '#fff',
    lineHeight: '1.6',
  } as React.CSSProperties,

  figure: {
    width: '100%',
    height: '400px',
    margin: '0 0 40px 0',
    padding: '0',
    overflow: 'hidden',
  } as React.CSSProperties,

  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover' as const,
    display: 'block',
  } as React.CSSProperties,

  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '0 20px 60px 20px',
  } as React.CSSProperties,

  header: {
    marginBottom: '40px',
    paddingBottom: '30px',
    borderBottom: '1px solid #ddd',
  } as React.CSSProperties,

  h1: {
    fontSize: '36px',
    fontWeight: 'bold' as const,
    margin: '0 0 20px 0',
    lineHeight: '1.2',
  } as React.CSSProperties,

  subtitle: {
    fontSize: '18px',
    color: '#666',
    margin: '0',
    lineHeight: '1.6',
  } as React.CSSProperties,

  main: {
    marginBottom: '40px',
    fontSize: '16px',
  } as React.CSSProperties,

  nav: {
    paddingTop: '20px',
    borderTop: '1px solid #ddd',
  } as React.CSSProperties,

  link: {
    display: 'inline-block' as const,
    color: '#0066cc',
    textDecoration: 'none',
  } as React.CSSProperties,
}
