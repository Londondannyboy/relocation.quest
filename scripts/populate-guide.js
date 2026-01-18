/**
 * Populate guide from data file
 * Usage: node scripts/populate-guide.js <guide-slug>
 * Example: node scripts/populate-guide.js latvia-startup-visa-complete-guide-2025
 */

import { neon } from '@neondatabase/serverless';
import dotenv from 'dotenv';
import { pathToFileURL } from 'url';
import path from 'path';

dotenv.config({ path: '.env.local' });

const sql = neon(process.env.DATABASE_URL);

async function populateGuide(slug) {
  console.log(`\nPopulating guide: ${slug}\n`);

  // Dynamic import of guide data
  const dataPath = path.join(process.cwd(), 'scripts', 'data', 'guides', `${slug}.js`);
  const dataUrl = pathToFileURL(dataPath).href;

  let guideData;
  try {
    const module = await import(dataUrl);
    guideData = module.guide;
  } catch (error) {
    console.error(`Error loading guide data from ${dataPath}:`);
    console.error(error.message);
    process.exit(1);
  }

  if (!guideData) {
    console.error('Guide data not found in module. Make sure to export a "guide" object.');
    process.exit(1);
  }

  console.log(`Title: ${guideData.title}`);
  console.log(`Category: ${guideData.category}`);
  console.log(`Word count: ${guideData.word_count}`);

  // Insert or update guide
  try {
    await sql`
      INSERT INTO guides (
        slug, title, subtitle, hero_image_url, hero_gradient,
        meta_title, meta_description, keywords,
        executive_summary, content_sections, requirements,
        application_process, costs, pros, cons, faqs,
        related_guides, country_slug, category,
        word_count, read_time_minutes, author, published_at, enabled
      ) VALUES (
        ${guideData.slug},
        ${guideData.title},
        ${guideData.subtitle || null},
        ${guideData.hero_image_url || null},
        ${guideData.hero_gradient || null},
        ${guideData.meta_title || null},
        ${guideData.meta_description || null},
        ${guideData.keywords || []},
        ${guideData.executive_summary || null},
        ${JSON.stringify(guideData.content_sections || [])},
        ${JSON.stringify(guideData.requirements || {})},
        ${JSON.stringify(guideData.application_process || [])},
        ${JSON.stringify(guideData.costs || {})},
        ${guideData.pros || []},
        ${guideData.cons || []},
        ${JSON.stringify(guideData.faqs || [])},
        ${guideData.related_guides || []},
        ${guideData.country_slug || null},
        ${guideData.category || null},
        ${guideData.word_count || null},
        ${guideData.read_time_minutes || null},
        ${guideData.author || null},
        ${guideData.published_at || new Date().toISOString()},
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
        executive_summary = EXCLUDED.executive_summary,
        content_sections = EXCLUDED.content_sections,
        requirements = EXCLUDED.requirements,
        application_process = EXCLUDED.application_process,
        costs = EXCLUDED.costs,
        pros = EXCLUDED.pros,
        cons = EXCLUDED.cons,
        faqs = EXCLUDED.faqs,
        related_guides = EXCLUDED.related_guides,
        country_slug = EXCLUDED.country_slug,
        category = EXCLUDED.category,
        word_count = EXCLUDED.word_count,
        read_time_minutes = EXCLUDED.read_time_minutes,
        author = EXCLUDED.author,
        updated_at = NOW()
    `;

    console.log(`\n✅ Guide "${guideData.title}" populated successfully!`);
    console.log(`\nView at: http://localhost:4000/relocation/guide/${slug}`);

  } catch (error) {
    console.error('\nError inserting guide:');
    console.error(error.message);
    process.exit(1);
  }
}

// Get slug from command line
const slug = process.argv[2];

if (!slug) {
  console.log('Usage: node scripts/populate-guide.js <guide-slug>');
  console.log('Example: node scripts/populate-guide.js latvia-startup-visa-complete-guide-2025');
  console.log('\nAvailable guides:');
  console.log('  - latvia-startup-visa-complete-guide-2025');
  process.exit(1);
}

populateGuide(slug);
