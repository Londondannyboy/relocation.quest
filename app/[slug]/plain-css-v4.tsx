// PLAIN CSS V4 - Full semantic rebuild with pre/white-space handling
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

function processContent(html: string): string {
  if (!html) return ''

  let result = html

  // Ensure all block elements have proper spacing styles
  result = result
    .replace(/<h1([^>]*)>/g, '<h1$1 style="font-size: 28px; margin: 30px 0 15px 0; font-weight: bold; line-height: 1.3;">')
    .replace(/<h2([^>]*)>/g, '<h2$1 style="font-size: 24px; margin: 30px 0 15px 0; font-weight: bold; line-height: 1.3;">')
    .replace(/<h3([^>]*)>/g, '<h3$1 style="font-size: 20px; margin: 25px 0 12px 0; font-weight: bold; line-height: 1.3;">')
    .replace(/<h4([^>]*)>/g, '<h4$1 style="font-size: 18px; margin: 20px 0 10px 0; font-weight: bold; line-height: 1.3;">')
    .replace(/<p([^>]*)>/g, '<p$1 style="margin-bottom: 16px; line-height: 1.8; display: block;">')
    .replace(/<li([^>]*)>/g, '<li$1 style="margin-bottom: 10px; line-height: 1.8; display: list-item;">')
    .replace(/<ul([^>]*)>/g, '<ul$1 style="margin: 15px 0; padding-left: 40px; list-style: disc;">')
    .replace(/<ol([^>]*)>/g, '<ol$1 style="margin: 15px 0; padding-left: 40px; list-style: decimal;">')
    .replace(/<blockquote([^>]*)>/g, '<blockquote$1 style="margin: 20px 0; padding-left: 20px; border-left: 4px solid #ddd; color: #666; font-style: italic;">')
    .replace(/<strong([^>]*)>/g, '<strong$1 style="font-weight: bold;">')
    .replace(/<em([^>]*)>/g, '<em$1 style="font-style: italic;">')
    .replace(/<a([^>]*)>/g, '<a$1 style="color: #0066cc; text-decoration: underline;">')

  // Add wrapper divs for sections if needed
  return result
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = await getArticle(slug)
  if (!article) notFound()

  const processedContent = processContent(article.content || '')

  return (
    <article style={articleStyles.root}>
      {article.hero_asset_url && (
        <figure style={articleStyles.figure}>
          <img src={article.hero_asset_url} alt={article.hero_asset_alt || article.title} style={articleStyles.image} />
        </figure>
      )}

      <div style={articleStyles.wrapper}>
        <header style={articleStyles.headerSection}>
          <h1 style={articleStyles.mainTitle}>{article.title}</h1>
          {article.excerpt && <p style={articleStyles.subtitle}>{article.excerpt}</p>}
        </header>

        <main style={articleStyles.main} dangerouslySetInnerHTML={{ __html: processedContent }} />

        <nav style={articleStyles.nav}>
          <a href="/articles" style={articleStyles.navLink}>← Back to Articles</a>
        </nav>
      </div>
    </article>
  )
}

const articleStyles = {
  root: {
    width: '100%',
    margin: '0',
    padding: '0',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    color: '#333',
    backgroundColor: '#fff',
    lineHeight: '1.6',
  } as React.CSSProperties,

  figure: {
    width: '100%',
    height: '400px',
    margin: '0',
    marginBottom: '40px',
    padding: '0',
    overflow: 'hidden',
  } as React.CSSProperties,

  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover' as const,
    display: 'block',
  } as React.CSSProperties,

  wrapper: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '0 20px 60px 20px',
  } as React.CSSProperties,

  headerSection: {
    marginBottom: '40px',
    paddingBottom: '30px',
    borderBottom: '1px solid #eee',
  } as React.CSSProperties,

  mainTitle: {
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
    lineHeight: '1.8',
  } as React.CSSProperties,

  nav: {
    paddingTop: '20px',
    borderTop: '1px solid #eee',
  } as React.CSSProperties,

  navLink: {
    display: 'inline-block' as const,
    color: '#0066cc',
    textDecoration: 'none',
    padding: '8px 0',
  } as React.CSSProperties,
}
