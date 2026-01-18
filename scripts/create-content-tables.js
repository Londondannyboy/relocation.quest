/**
 * Create tables for guides and articles content
 * Run: node scripts/create-content-tables.js
 */

import { neon } from '@neondatabase/serverless';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

const sql = neon(process.env.DATABASE_URL);

async function createTables() {
  console.log('Creating content tables...\n');

  // Guides table - for /relocation/guide/[slug] pages
  await sql`
    CREATE TABLE IF NOT EXISTS guides (
      id SERIAL PRIMARY KEY,
      slug VARCHAR(255) UNIQUE NOT NULL,
      title VARCHAR(255) NOT NULL,
      subtitle TEXT,
      hero_image_url TEXT,
      hero_gradient VARCHAR(100),
      meta_title VARCHAR(60),
      meta_description VARCHAR(160),
      keywords TEXT[],

      -- Structured content
      executive_summary TEXT,
      content_sections JSONB DEFAULT '[]'::jsonb,
      requirements JSONB DEFAULT '{}'::jsonb,
      application_process JSONB DEFAULT '[]'::jsonb,
      costs JSONB DEFAULT '{}'::jsonb,
      pros TEXT[],
      cons TEXT[],
      faqs JSONB DEFAULT '[]'::jsonb,
      related_guides TEXT[],

      -- Relationships
      country_slug VARCHAR(100),
      category VARCHAR(50), -- 'startup-visa', 'digital-nomad', 'remote-work', 'relocation', 'ranking'

      -- Stats
      word_count INTEGER,
      read_time_minutes INTEGER,

      -- Metadata
      author VARCHAR(100),
      published_at TIMESTAMP,
      updated_at TIMESTAMP DEFAULT NOW(),
      enabled BOOLEAN DEFAULT true
    );
  `;
  console.log('Created guides table');

  // Articles table - for /articles/[slug] pages
  await sql`
    CREATE TABLE IF NOT EXISTS content_articles (
      id SERIAL PRIMARY KEY,
      slug VARCHAR(255) UNIQUE NOT NULL,
      title VARCHAR(255) NOT NULL,
      subtitle TEXT,
      hero_image_url TEXT,
      hero_gradient VARCHAR(100),
      meta_title VARCHAR(60),
      meta_description VARCHAR(160),
      keywords TEXT[],

      -- Content
      introduction TEXT,
      body_content TEXT,
      table_of_contents JSONB DEFAULT '[]'::jsonb,
      key_takeaways TEXT[],
      faqs JSONB DEFAULT '[]'::jsonb,
      related_articles TEXT[],

      -- Relationships
      countries TEXT[], -- Related countries
      category VARCHAR(50), -- 'moving-guide', 'visa-guide', 'lifestyle', 'work', 'tax'

      -- Stats
      word_count INTEGER,
      read_time_minutes INTEGER,

      -- Metadata
      author VARCHAR(100),
      published_at TIMESTAMP,
      updated_at TIMESTAMP DEFAULT NOW(),
      enabled BOOLEAN DEFAULT true
    );
  `;
  console.log('Created content_articles table');

  // Direct visa pages table - for /[country]-[visa-type] pages
  await sql`
    CREATE TABLE IF NOT EXISTS visa_pages (
      id SERIAL PRIMARY KEY,
      slug VARCHAR(255) UNIQUE NOT NULL,
      country VARCHAR(100) NOT NULL,
      country_flag VARCHAR(10),
      visa_type VARCHAR(100) NOT NULL,
      title VARCHAR(255) NOT NULL,
      subtitle TEXT,
      hero_image_url TEXT,
      meta_title VARCHAR(60),
      meta_description VARCHAR(160),
      keywords TEXT[],

      -- Visa details
      overview TEXT,
      processing_time VARCHAR(50),
      cost VARCHAR(100),
      duration VARCHAR(100),
      requirements TEXT[],
      required_documents TEXT[],
      financial_requirements JSONB DEFAULT '{}'::jsonb,
      application_steps JSONB DEFAULT '[]'::jsonb,
      tips TEXT[],
      faqs JSONB DEFAULT '[]'::jsonb,

      -- Relationships
      country_slug VARCHAR(100),
      related_visas TEXT[],

      -- Metadata
      updated_at TIMESTAMP DEFAULT NOW(),
      enabled BOOLEAN DEFAULT true
    );
  `;
  console.log('Created visa_pages table');

  // Job categories table - for /jobs/[category] pages
  await sql`
    CREATE TABLE IF NOT EXISTS job_categories (
      id SERIAL PRIMARY KEY,
      slug VARCHAR(100) UNIQUE NOT NULL,
      title VARCHAR(255) NOT NULL,
      subtitle TEXT,
      description TEXT,
      meta_title VARCHAR(60),
      meta_description VARCHAR(160),
      keywords TEXT[],

      -- Category settings
      filters JSONB DEFAULT '{}'::jsonb,
      featured_companies TEXT[],
      salary_ranges JSONB DEFAULT '{}'::jsonb,

      -- Metadata
      job_count INTEGER DEFAULT 0,
      updated_at TIMESTAMP DEFAULT NOW(),
      enabled BOOLEAN DEFAULT true
    );
  `;
  console.log('Created job_categories table');

  // Posts table - for /posts/[slug] pages (legacy format)
  await sql`
    CREATE TABLE IF NOT EXISTS posts (
      id SERIAL PRIMARY KEY,
      slug VARCHAR(255) UNIQUE NOT NULL,
      title VARCHAR(255) NOT NULL,
      subtitle TEXT,
      hero_image_url TEXT,
      meta_title VARCHAR(60),
      meta_description VARCHAR(160),
      keywords TEXT[],

      -- Content
      body_content TEXT,
      faqs JSONB DEFAULT '[]'::jsonb,

      -- Relationships
      country_slug VARCHAR(100),
      category VARCHAR(50),

      -- Metadata
      author VARCHAR(100),
      published_at TIMESTAMP,
      updated_at TIMESTAMP DEFAULT NOW(),
      enabled BOOLEAN DEFAULT true
    );
  `;
  console.log('Created posts table');

  // Create indexes for performance
  await sql`CREATE INDEX IF NOT EXISTS idx_guides_slug ON guides(slug);`;
  await sql`CREATE INDEX IF NOT EXISTS idx_guides_category ON guides(category);`;
  await sql`CREATE INDEX IF NOT EXISTS idx_guides_country ON guides(country_slug);`;
  await sql`CREATE INDEX IF NOT EXISTS idx_content_articles_slug ON content_articles(slug);`;
  await sql`CREATE INDEX IF NOT EXISTS idx_content_articles_category ON content_articles(category);`;
  await sql`CREATE INDEX IF NOT EXISTS idx_visa_pages_slug ON visa_pages(slug);`;
  await sql`CREATE INDEX IF NOT EXISTS idx_visa_pages_country ON visa_pages(country_slug);`;
  await sql`CREATE INDEX IF NOT EXISTS idx_job_categories_slug ON job_categories(slug);`;
  await sql`CREATE INDEX IF NOT EXISTS idx_posts_slug ON posts(slug);`;
  console.log('\nCreated indexes');

  console.log('\nAll content tables created successfully!');
}

createTables().catch(console.error);
