// TypeScript types for destination data

export interface VisaOption {
  name: string
  description: string
  processingTime?: string
  cost?: string
  requirements?: string[]
  isWorkPermit?: boolean
  isResidencyPath?: boolean
}

export interface CostOfLiving {
  cityName?: string // null for country average
  rent1BRCenter?: number
  rent1BROutside?: number
  rent3BRCenter?: number
  utilities?: number
  groceries?: number
  transportation?: number
  dining?: number
  costIndex: number // Compared to London = 100
  currency: string
}

export interface JobMarket {
  unemploymentRate?: number
  avgSalaryTech?: number
  avgSalaryFinance?: number
  avgSalaryMarketing?: number
  topIndustries: string[]
  growingSectors?: string[]
  avgWorkHoursWeek?: number
  vacationDaysStandard?: number
}

export interface QuickFact {
  label: string
  value: string
  icon?: string
}

export interface DestinationHighlight {
  text: string
  icon?: string
}

export interface DestinationFAQ {
  question: string
  answer: string
  category?: 'visa' | 'housing' | 'jobs' | 'lifestyle' | 'general'
}

export interface Destination {
  // Core metadata
  slug: string
  countryName: string
  flag: string
  region: string

  // Hero section
  heroTitle: string
  heroSubtitle: string
  heroGradient: string
  heroImage?: string

  // Quick facts
  quickFacts: QuickFact[]

  // Why move here
  whyMoveIntro?: string
  highlights: DestinationHighlight[]

  // Visa options
  visas: VisaOption[]

  // Cost of living
  costOfLiving: CostOfLiving[]

  // Job market
  jobMarket?: JobMarket

  // Lifestyle
  lifestyleDescription?: string
  climate?: string
  language: string
  safetyRating?: number
  healthcareRating?: number
  educationRating?: number

  // FAQs
  faqs: DestinationFAQ[]

  // SEO
  metaTitle?: string
  metaDescription?: string

  // Status
  enabled: boolean
  featured: boolean
  priority: number // For sorting
}

export interface RelatedDestination {
  slug: string
  name: string
  flag: string
  reason: string
}
