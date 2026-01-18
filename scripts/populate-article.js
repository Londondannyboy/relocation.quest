/**
 * Populate article from data file
 * Usage: node scripts/populate-article.js <article-slug>
 * Example: node scripts/populate-article.js moving-from-the-uk-to-the-netherlands
 */

import { neon } from '@neondatabase/serverless';
import dotenv from 'dotenv';
import { pathToFileURL } from 'url';
import path from 'path';

dotenv.config({ path: '.env.local' });

const sql = neon(process.env.DATABASE_URL);

async function populateArticle(slug) {
  console.log(`\nPopulating article: ${slug}\n`);

  // Dynamic import of article data
  const dataPath = path.join(process.cwd(), 'scripts', 'data', 'articles', `${slug}.js`);
  const dataUrl = pathToFileURL(dataPath).href;

  let articleData;
  try {
    const module = await import(dataUrl);
    articleData = module.article;
  } catch (error) {
    console.error(`Error loading article data from ${dataPath}:`);
    console.error(error.message);
    process.exit(1);
  }

  if (!articleData) {
    console.error('Article data not found in module. Make sure to export an "article" object.');
    process.exit(1);
  }

  console.log(`Title: ${articleData.title}`);
  console.log(`Category: ${articleData.category}`);
  console.log(`Word count: ${articleData.word_count}`);

  // Insert or update article
  try {
    await sql`
      INSERT INTO content_articles (
        slug, title, subtitle, hero_image_url, hero_gradient,
        meta_title, meta_description, keywords,
        introduction, body_content, table_of_contents,
        key_takeaways, faqs, related_articles,
        countries, category,
        word_count, read_time_minutes, author, published_at, enabled
      ) VALUES (
        ${articleData.slug},
        ${articleData.title},
        ${articleData.subtitle || null},
        ${articleData.hero_image_url || null},
        ${articleData.hero_gradient || null},
        ${articleData.meta_title || null},
        ${articleData.meta_description || null},
        ${articleData.keywords || []},
        ${articleData.introduction || null},
        ${articleData.body_content || null},
        ${JSON.stringify(articleData.table_of_contents || [])},
        ${articleData.key_takeaways || []},
        ${JSON.stringify(articleData.faqs || [])},
        ${articleData.related_articles || []},
        ${articleData.countries || []},
        ${articleData.category || null},
        ${articleData.word_count || null},
        ${articleData.read_time_minutes || null},
        ${articleData.author || null},
        ${articleData.published_at || new Date().toISOString()},
        true
      )
      ON CONFLICT (slug) DO UPDATE SET
        title = EXCLUDED.title,
        subtitle = EXCLUDED.subtitle,
        hero_image_url = EXCLUDED.hero_image_url,
        hero_gradient = EXCLUDED.hero_gradient,
        meta_title = EXCLUDED.meta_title,
        meta_description = EXCLUDED.meta_description,
        keywords = EXCLUDED.keywords,
        introduction = EXCLUDED.introduction,
        body_content = EXCLUDED.body_content,
        table_of_contents = EXCLUDED.table_of_contents,
        key_takeaways = EXCLUDED.key_takeaways,
        faqs = EXCLUDED.faqs,
        related_articles = EXCLUDED.related_articles,
        countries = EXCLUDED.countries,
        category = EXCLUDED.category,
        word_count = EXCLUDED.word_count,
        read_time_minutes = EXCLUDED.read_time_minutes,
        author = EXCLUDED.author,
        updated_at = NOW()
    `;

    console.log(`\n✅ Article "${articleData.title}" populated successfully!`);
    console.log(`\nView at: http://localhost:4000/articles/${slug}`);

  } catch (error) {
    console.error('\nError inserting article:');
    console.error(error.message);
    process.exit(1);
  }
}

// Get slug from command line
const slug = process.argv[2];

if (!slug) {
  console.log('Usage: node scripts/populate-article.js <article-slug>');
  console.log('Example: node scripts/populate-article.js moving-from-the-uk-to-the-netherlands');
  process.exit(1);
}

populateArticle(slug);
