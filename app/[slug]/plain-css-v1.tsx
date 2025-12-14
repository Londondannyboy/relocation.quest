// PLAIN CSS V1 - Basic semantic HTML with plain CSS
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

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = await getArticle(slug)
  if (!article) notFound()

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

        <div style={styles.content} dangerouslySetInnerHTML={{ __html: article.content || '' }} />

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
    borderBottom: '1px solid #ddd',
  },
  h1: {
    fontSize: '36px',
    fontWeight: 'bold',
    margin: '0 0 20px 0',
    lineHeight: '1.2',
  },
  excerpt: {
    fontSize: '18px',
    color: '#666',
    margin: '0',
  },
  content: {
    marginBottom: '40px',
    fontSize: '16px',
    lineHeight: '1.8',
  } as React.CSSProperties & {
    '& h2': any,
    '& h3': any,
    '& p': any,
    '& ul': any,
    '& li': any,
  },
  footer: {
    paddingTop: '20px',
    borderTop: '1px solid #ddd',
  },
  link: {
    color: '#0066cc',
    textDecoration: 'none',
  },
}
