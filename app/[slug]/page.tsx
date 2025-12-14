import { Metadata } from 'next'
import Link from 'next/link'
import { createDbQuery } from '@/lib/db'
import { notFound } from 'next/navigation'
import styles from './article-styles.module.css'

export const revalidate = 14400

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

async function getArticle(slug: string) {
  try {
    const sql = createDbQuery()
    const articles = await sql`
      SELECT
        id,
        slug,
        title,
        excerpt,
        content,
        hero_asset_url,
        hero_asset_alt,
        published_at,
        word_count,
        app
      FROM articles
      WHERE slug = ${slug}
        AND status = 'published'
      LIMIT 1
    `
    return articles[0] || null
  } catch (error) {
    console.error('Error fetching article:', error)
    return null
  }
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
    <div className={styles.wrapper}>
      <article className={styles.article}>
        {article.hero_asset_url && (
          <img
            src={article.hero_asset_url}
            alt={article.hero_asset_alt || article.title}
            className={styles.heroImage}
          />
        )}

        <header className={styles.header}>
          <h1 className={styles.title}>{article.title}</h1>
          {article.excerpt && <p className={styles.excerpt}>{article.excerpt}</p>}
        </header>

        <div className={styles.content} dangerouslySetInnerHTML={{ __html: article.content || '' }} />

        <nav className={styles.nav}>
          <Link href={backLink} className={styles.link}>
            ← Back to Articles
          </Link>
        </nav>
      </article>
    </div>
  )
}
