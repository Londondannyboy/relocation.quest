// PLAIN CSS V3 - With external CSS class styling and wrapper div
import { createDbQuery } from '@/lib/db'
import { notFound } from 'next/navigation'
import styles from './article.module.css'

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
    <article className={styles.article}>
      {article.hero_asset_url && (
        <div className={styles.hero}>
          <img src={article.hero_asset_url} alt={article.hero_asset_alt || article.title} className={styles.heroImage} />
        </div>
      )}

      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.h1}>{article.title}</h1>
          {article.excerpt && <p className={styles.excerpt}>{article.excerpt}</p>}
        </header>

        <div className={styles.content} dangerouslySetInnerHTML={{ __html: article.content || '' }} />

        <footer className={styles.footer}>
          <a href="/articles" className={styles.link}>← Back to Articles</a>
        </footer>
      </div>
    </article>
  )
}
