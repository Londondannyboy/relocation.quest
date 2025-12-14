import { Destination } from './types'

export const DESTINATIONS: Record<string, Destination> = {
  portugal: {
    slug: 'portugal',
    countryName: 'Portugal',
    flag: '🇵🇹',
    region: 'Southern Europe',
    heroTitle: 'Moving to Portugal',
    heroSubtitle: 'Complete relocation guide for Portugal including visas, jobs, lifestyle, and expat community.',
    heroGradient: 'from-green-600 to-red-600',
    language: 'Portuguese (English widely spoken in cities)',
    enabled: true,
    featured: true,
    priority: 1,

    quickFacts: [
      { label: 'Currency', value: 'EUR (€)', icon: '💶' },
      { label: 'Population', value: '10.3M', icon: '👥' },
      { label: 'Time Zone', value: 'WET (UTC+0)', icon: '🕐' },
      { label: 'Climate', value: 'Mediterranean', icon: '☀️' },
    ],

    highlights: [
      { text: 'Affordable living costs in Europe', icon: '✓' },
      { text: 'D7 Visa for passive income earners', icon: '✓' },
      { text: 'Golden Visa for investors', icon: '✓' },
      { text: 'Beautiful coastline and nature', icon: '✓' },
      { text: 'Friendly expat community', icon: '✓' },
      { text: 'Good weather year-round', icon: '✓' },
      { text: 'EU membership benefits', icon: '✓' },
    ],

    visas: [
      {
        name: 'D7 Visa (Passive Income)',
        description: 'For retirees, remote workers, and those with passive income',
        processingTime: '2-4 months',
        cost: '€80-200',
        requirements: ['Proof of passive income (€760/month minimum)', 'Health insurance', 'Clean criminal record'],
        isWorkPermit: false,
        isResidencyPath: true,
      },
      {
        name: 'Golden Visa',
        description: 'Residency through investment (€500k property or €500k capital transfer)',
        processingTime: '3-6 months',
        cost: '€500k+ investment',
        requirements: ['Investment in property/capital/jobs', 'Clean criminal record', 'Health insurance'],
        isWorkPermit: false,
        isResidencyPath: true,
      },
      {
        name: 'Digital Nomad Visa',
        description: 'For remote workers with stable income from outside Portugal',
        processingTime: '2-3 months',
        cost: '€75',
        requirements: ['€3,040/month income', 'Proof of remote work', 'Health insurance'],
        isWorkPermit: true,
        isResidencyPath: true,
      },
      {
        name: 'Work Visa',
        description: 'Employer-sponsored work permit',
        processingTime: '3-6 months',
        cost: '€150-300',
        requirements: ['Job offer from Portuguese employer', 'Relevant qualifications', 'Health insurance'],
        isWorkPermit: true,
        isResidencyPath: true,
      },
    ],

    costOfLiving: [
      {
        cityName: 'Lisbon',
        rent1BRCenter: 1200,
        rent1BROutside: 800,
        rent3BRCenter: 2000,
        utilities: 120,
        groceries: 300,
        transportation: 40,
        dining: 250,
        costIndex: 65,
        currency: 'EUR',
      },
      {
        cityName: 'Porto',
        rent1BRCenter: 900,
        rent1BROutside: 600,
        rent3BRCenter: 1500,
        utilities: 110,
        groceries: 280,
        transportation: 35,
        dining: 220,
        costIndex: 55,
        currency: 'EUR',
      },
      {
        cityName: 'Algarve',
        rent1BRCenter: 850,
        rent1BROutside: 550,
        rent3BRCenter: 1400,
        utilities: 100,
        groceries: 270,
        transportation: 50,
        dining: 200,
        costIndex: 60,
        currency: 'EUR',
      },
    ],

    jobMarket: {
      topIndustries: ['Tourism & Hospitality', 'Technology', 'Finance', 'Real Estate', 'Renewable Energy'],
      growingSectors: ['Tech startups', 'Remote work hubs', 'Digital marketing'],
      avgSalaryTech: 35000,
      avgWorkHoursWeek: 40,
      vacationDaysStandard: 22,
    },

    faqs: [
      {
        question: 'Do I need to speak Portuguese to live in Portugal?',
        answer: 'While Portuguese is the official language, English is widely spoken in major cities like Lisbon and Porto, especially in expat communities and tourist areas. However, learning basic Portuguese will greatly enhance your experience.',
        category: 'lifestyle',
      },
      {
        question: 'How much money do I need to qualify for the D7 Visa?',
        answer: 'You need to demonstrate passive income of at least €760/month (the Portuguese minimum wage). For a family, this increases proportionally (€380/month per additional adult, €228/month per child).',
        category: 'visa',
      },
      {
        question: 'What is the cost of living compared to the UK?',
        answer: 'Portugal is approximately 35-45% cheaper than London. Lisbon is the most expensive city at about 65% of London prices, while smaller cities like Porto or Braga can be 45-55% of London costs.',
        category: 'housing',
      },
      {
        question: 'Can I work in Portugal with a D7 Visa?',
        answer: 'The D7 Visa is primarily for passive income, but you can apply for permission to work after you arrive. Alternatively, consider the Digital Nomad Visa if you plan to work remotely for non-Portuguese companies.',
        category: 'jobs',
      },
    ],

    metaTitle: 'Moving to Portugal 2025: Visa Guide, Cost of Living & Jobs',
    metaDescription: 'Complete guide to relocating to Portugal. D7 Visa, Digital Nomad Visa, cost of living calculator, job market insights, and expat resources.',
  },

  spain: {
    slug: 'spain',
    countryName: 'Spain',
    flag: '🇪🇸',
    region: 'Southern Europe',
    heroTitle: 'Moving to Spain',
    heroSubtitle: 'Complete relocation guide for Spain including visas, jobs, cost of living, and expat resources.',
    heroGradient: 'from-red-500 to-yellow-500',
    language: 'Spanish (Catalan, Basque, Galician in regions)',
    enabled: true,
    featured: true,
    priority: 2,

    quickFacts: [
      { label: 'Currency', value: 'EUR (€)', icon: '💶' },
      { label: 'Population', value: '47.4M', icon: '👥' },
      { label: 'Time Zone', value: 'CET (UTC+1)', icon: '🕐' },
      { label: 'Climate', value: 'Mediterranean/Continental', icon: '☀️' },
    ],

    highlights: [
      { text: 'Mediterranean lifestyle and climate', icon: '✓' },
      { text: 'EU membership', icon: '✓' },
      { text: 'Affordable cost of living', icon: '✓' },
      { text: 'Rich culture and history', icon: '✓' },
      { text: 'Excellent healthcare system', icon: '✓' },
      { text: 'Digital nomad visa available', icon: '✓' },
    ],

    visas: [
      {
        name: 'Digital Nomad Visa',
        description: 'For remote workers employed by foreign companies',
        processingTime: '1-3 months',
        cost: '€80',
        requirements: ['€2,334/month income', 'Remote work contract', 'Health insurance', 'Clean criminal record'],
        isWorkPermit: true,
        isResidencyPath: true,
      },
      {
        name: 'Non-Lucrative Visa',
        description: 'For those with sufficient passive income (similar to Portugal D7)',
        processingTime: '3-6 months',
        cost: '€60',
        requirements: ['€2,400/month income', 'Health insurance', 'Proof of accommodation'],
        isWorkPermit: false,
        isResidencyPath: true,
      },
      {
        name: 'Work Visa',
        description: 'Employer-sponsored work permit',
        processingTime: '3-6 months',
        cost: '€150',
        requirements: ['Job offer', 'University degree or relevant experience', 'Health insurance'],
        isWorkPermit: true,
        isResidencyPath: true,
      },
      {
        name: 'Golden Visa',
        description: 'Residency through €500k property investment',
        processingTime: '4-6 months',
        cost: '€500k+ investment',
        requirements: ['Property purchase €500k+', 'Health insurance', 'Clean criminal record'],
        isWorkPermit: false,
        isResidencyPath: true,
      },
    ],

    costOfLiving: [
      {
        cityName: 'Madrid',
        rent1BRCenter: 1300,
        rent1BROutside: 850,
        rent3BRCenter: 2100,
        utilities: 130,
        groceries: 320,
        transportation: 55,
        dining: 280,
        costIndex: 68,
        currency: 'EUR',
      },
      {
        cityName: 'Barcelona',
        rent1BRCenter: 1400,
        rent1BROutside: 950,
        rent3BRCenter: 2300,
        utilities: 135,
        groceries: 340,
        transportation: 60,
        dining: 300,
        costIndex: 72,
        currency: 'EUR',
      },
      {
        cityName: 'Valencia',
        rent1BRCenter: 950,
        rent1BROutside: 650,
        rent3BRCenter: 1600,
        utilities: 115,
        groceries: 290,
        transportation: 45,
        dining: 240,
        costIndex: 60,
        currency: 'EUR',
      },
    ],

    jobMarket: {
      topIndustries: ['Tourism', 'Technology', 'Automotive', 'Finance', 'Healthcare'],
      growingSectors: ['Tech hubs (Barcelona, Madrid)', 'Renewable energy', 'Digital services'],
      avgSalaryTech: 38000,
      avgWorkHoursWeek: 40,
      vacationDaysStandard: 22,
    },

    faqs: [
      {
        question: 'Do I need to speak Spanish to live in Spain?',
        answer: 'While Spanish is essential for daily life outside tourist areas, major cities like Barcelona and Madrid have growing English-speaking expat communities. Learning Spanish is highly recommended.',
        category: 'lifestyle',
      },
      {
        question: 'How does the Spanish Digital Nomad Visa work?',
        answer: 'The visa allows remote workers to live in Spain for up to 5 years while working for foreign companies. You need to prove €2,334/month income, have health insurance, and a clean criminal record.',
        category: 'visa',
      },
      {
        question: 'What is the healthcare system like in Spain?',
        answer: 'Spain has one of the best healthcare systems in Europe. Public healthcare is excellent and free for residents. Private health insurance is also affordable (€50-150/month).',
        category: 'lifestyle',
      },
    ],

    metaTitle: 'Moving to Spain 2025: Digital Nomad Visa, Cost of Living & Jobs',
    metaDescription: 'Complete guide to relocating to Spain. Digital Nomad Visa, Non-Lucrative Visa, cost of living across major cities, and job opportunities.',
  },

  dubai: {
    slug: 'dubai',
    countryName: 'Dubai',
    flag: '🇦🇪',
    region: 'Middle East',
    heroTitle: 'Moving to Dubai',
    heroSubtitle: 'Complete guide to relocating to Dubai including visa types, jobs, lifestyle, and expat resources.',
    heroGradient: 'from-yellow-500 to-orange-600',
    language: 'Arabic (English widely spoken)',
    enabled: true,
    featured: true,
    priority: 3,

    quickFacts: [
      { label: 'Currency', value: 'AED (dirham)', icon: '💵' },
      { label: 'Population', value: '3.5M', icon: '👥' },
      { label: 'Time Zone', value: 'GST (UTC+4)', icon: '🕐' },
      { label: 'Climate', value: 'Desert', icon: '🌡️' },
    ],

    highlights: [
      { text: 'Tax-free salaries and income', icon: '✓' },
      { text: 'Booming economy and business opportunities', icon: '✓' },
      { text: 'Luxurious lifestyle', icon: '✓' },
      { text: 'Diverse international community', icon: '✓' },
      { text: 'Modern infrastructure', icon: '✓' },
      { text: 'No income tax for residents', icon: '✓' },
    ],

    visas: [
      {
        name: 'Employment Visa',
        description: 'Sponsored by employer - most common option for expats',
        processingTime: '2-4 weeks',
        cost: 'AED 3,000-5,000 (covered by employer)',
        requirements: ['Job offer', 'Passport copy', 'Medical fitness test'],
        isWorkPermit: true,
        isResidencyPath: true,
      },
      {
        name: 'Freelance Visa',
        description: 'For self-employed professionals and freelancers',
        processingTime: '2-3 weeks',
        cost: 'AED 7,500-15,000/year',
        requirements: ['Freelance permit', 'Professional certification', 'Bank statement'],
        isWorkPermit: true,
        isResidencyPath: true,
      },
      {
        name: 'Golden Visa',
        description: '5-10 year long-term residency for investors and professionals',
        processingTime: '1-2 months',
        cost: 'AED 10,000-100,000',
        requirements: ['Property investment AED 2M+ OR high-skilled profession OR investor', 'Health insurance'],
        isWorkPermit: false,
        isResidencyPath: true,
      },
      {
        name: 'Remote Work Visa',
        description: 'One-year visa for remote workers employed abroad',
        processingTime: '2-4 weeks',
        cost: 'AED 600/year',
        requirements: ['$5,000/month income', 'Employment contract', 'Health insurance'],
        isWorkPermit: true,
        isResidencyPath: false,
      },
    ],

    costOfLiving: [
      {
        cityName: 'Dubai',
        rent1BRCenter: 4500,
        rent1BROutside: 3000,
        rent3BRCenter: 8000,
        utilities: 400,
        groceries: 450,
        transportation: 200,
        dining: 400,
        costIndex: 85,
        currency: 'AED',
      },
    ],

    jobMarket: {
      topIndustries: ['Finance & Banking', 'Real Estate', 'Tourism & Hospitality', 'Technology', 'Trade & Logistics'],
      growingSectors: ['Fintech', 'E-commerce', 'Blockchain', 'AI'],
      avgSalaryTech: 180000, // AED
      avgWorkHoursWeek: 48,
      vacationDaysStandard: 30,
    },

    faqs: [
      {
        question: 'Is it really tax-free to live in Dubai?',
        answer: 'Yes, Dubai has no personal income tax. However, there is 5% VAT on most goods and services. Salaries are paid gross with no deductions.',
        category: 'general',
      },
      {
        question: 'How much do I need to earn to live comfortably in Dubai?',
        answer: 'A single person needs around AED 10,000-15,000/month (£2,200-3,300) for a comfortable lifestyle including rent, food, and entertainment. Families typically need AED 20,000-30,000/month.',
        category: 'housing',
      },
      {
        question: 'Can I drink alcohol in Dubai?',
        answer: 'Yes, non-Muslims can drink alcohol in licensed venues (hotels, restaurants, bars). You can also purchase alcohol from licensed stores with a liquor license.',
        category: 'lifestyle',
      },
    ],

    metaTitle: 'Moving to Dubai 2025: Visa Guide, Tax-Free Jobs & Cost of Living',
    metaDescription: 'Complete guide to relocating to Dubai. Employment visa, freelance visa, Golden Visa options, tax-free income, and expat lifestyle.',
  },

  canada: {
    slug: 'canada',
    countryName: 'Canada',
    flag: '🇨🇦',
    region: 'North America',
    heroTitle: 'Moving to Canada',
    heroSubtitle: 'Complete relocation guide for Canada including Express Entry, provincial programs, jobs, and immigrant resources.',
    heroGradient: 'from-red-600 to-red-700',
    language: 'English, French',
    enabled: true,
    featured: true,
    priority: 4,

    quickFacts: [
      { label: 'Currency', value: 'CAD (C$)', icon: '💵' },
      { label: 'Population', value: '40M', icon: '👥' },
      { label: 'Time Zone', value: 'Multiple (UTC-3.5 to -8)', icon: '🕐' },
      { label: 'Provinces', value: '10', icon: '🗺️' },
    ],

    highlights: [
      { text: 'Express Entry fast-track immigration', icon: '✓' },
      { text: 'Strong economy and job opportunities', icon: '✓' },
      { text: 'Excellent healthcare and education', icon: '✓' },
      { text: 'Multicultural society', icon: '✓' },
      { text: 'Pathway to permanent residency', icon: '✓' },
      { text: 'Growing tech hubs (Toronto, Vancouver)', icon: '✓' },
    ],

    visas: [
      {
        name: 'Express Entry',
        description: 'Fast-track program for skilled workers (Federal Skilled Worker, Canadian Experience Class)',
        processingTime: '6 months or less',
        cost: 'CAD $1,365 + $500 per family member',
        requirements: ['CRS score 400+', 'Language test (IELTS/CELPIP)', 'Educational Credential Assessment', 'Work experience'],
        isWorkPermit: false,
        isResidencyPath: true,
      },
      {
        name: 'Provincial Nominee Program (PNP)',
        description: 'Provinces nominate candidates matching their economic needs',
        processingTime: '6-18 months',
        cost: 'CAD $1,500-3,500',
        requirements: ['Province-specific criteria', 'Job offer or skills in demand', 'Language proficiency'],
        isWorkPermit: false,
        isResidencyPath: true,
      },
      {
        name: 'Work Permit (LMIA)',
        description: 'Employer-sponsored work permits for temporary foreign workers',
        processingTime: '3-6 months',
        cost: 'CAD $155 + $1,000 LMIA fee (employer pays)',
        requirements: ['Job offer', 'LMIA approval', 'Relevant qualifications'],
        isWorkPermit: true,
        isResidencyPath: false,
      },
      {
        name: 'Temporary Resident to PR',
        description: 'Pathway from work permit to permanent residency after Canadian experience',
        processingTime: '6-12 months',
        cost: 'CAD $1,365',
        requirements: ['1-3 years Canadian work experience', 'Language proficiency', 'CRS points'],
        isWorkPermit: false,
        isResidencyPath: true,
      },
    ],

    costOfLiving: [
      {
        cityName: 'Toronto',
        rent1BRCenter: 2200,
        rent1BROutside: 1600,
        rent3BRCenter: 3500,
        utilities: 150,
        groceries: 400,
        transportation: 150,
        dining: 350,
        costIndex: 75,
        currency: 'CAD',
      },
      {
        cityName: 'Vancouver',
        rent1BRCenter: 2400,
        rent1BROutside: 1800,
        rent3BRCenter: 3800,
        utilities: 130,
        groceries: 420,
        transportation: 130,
        dining: 370,
        costIndex: 78,
        currency: 'CAD',
      },
      {
        cityName: 'Montreal',
        rent1BRCenter: 1600,
        rent1BROutside: 1100,
        rent3BRCenter: 2600,
        utilities: 110,
        groceries: 350,
        transportation: 90,
        dining: 300,
        costIndex: 60,
        currency: 'CAD',
      },
    ],

    jobMarket: {
      topIndustries: ['Technology', 'Finance', 'Healthcare', 'Energy', 'Manufacturing'],
      growingSectors: ['AI & Machine Learning', 'Clean energy', 'Biotechnology'],
      avgSalaryTech: 85000, // CAD
      avgWorkHoursWeek: 40,
      vacationDaysStandard: 10, // Minimum, many get 15-20
    },

    faqs: [
      {
        question: 'What is Express Entry and how does it work?',
        answer: 'Express Entry is Canada\'s main immigration system for skilled workers. You create a profile, get ranked by the CRS points system (based on age, education, work experience, language), and receive an Invitation to Apply (ITA) if your score is high enough.',
        category: 'visa',
      },
      {
        question: 'How much does it cost to immigrate to Canada?',
        answer: 'Express Entry costs around CAD $2,300 for a single applicant (application fees, medical exam, police check, biometrics). Settlement funds required: CAD $13,310 for single person, $16,570 for a couple.',
        category: 'general',
      },
      {
        question: 'Do I need French to move to Canada?',
        answer: 'No, but French proficiency helps significantly in Express Entry (extra CRS points) and is essential for Quebec. Most of Canada is English-speaking (Ontario, BC, Alberta).',
        category: 'lifestyle',
      },
    ],

    metaTitle: 'Moving to Canada 2025: Express Entry, PNP, Jobs & Immigration Guide',
    metaDescription: 'Complete guide to immigrating to Canada. Express Entry, Provincial Nominee Programs, work permits, cost of living, and job market insights.',
  },

  australia: {
    slug: 'australia',
    countryName: 'Australia',
    flag: '🇦🇺',
    region: 'Oceania',
    heroTitle: 'Moving to Australia',
    heroSubtitle: 'Complete relocation guide for moving to Australia including skilled migration visas, jobs, cost of living, and expat resources.',
    heroGradient: 'from-orange-500 to-red-600',
    language: 'English',
    enabled: true,
    featured: true,
    priority: 5,

    quickFacts: [
      { label: 'Currency', value: 'AUD (A$)', icon: '💵' },
      { label: 'Population', value: '26M', icon: '👥' },
      { label: 'Time Zone', value: 'Multiple (UTC+8 to +11)', icon: '🕐' },
      { label: 'Land Area', value: '7.7M km²', icon: '🗺️' },
    ],

    highlights: [
      { text: 'Strong job market and high salaries', icon: '✓' },
      { text: 'Skilled migration visa pathways', icon: '✓' },
      { text: 'Excellent healthcare system', icon: '✓' },
      { text: 'High quality of life', icon: '✓' },
      { text: 'Beautiful beaches and outdoor lifestyle', icon: '✓' },
      { text: 'Growing tech and professional opportunities', icon: '✓' },
    ],

    visas: [
      {
        name: 'Skilled Independent Visa (189)',
        description: 'Points-based permanent residency for professionals with in-demand skills',
        processingTime: '6-12 months',
        cost: 'AUD $4,640',
        requirements: ['Occupation on skilled list', '65+ points', 'Skills assessment', 'English proficiency'],
        isWorkPermit: false,
        isResidencyPath: true,
      },
      {
        name: 'Skilled Nominated Visa (190)',
        description: 'State/territory nominated skilled migration visa',
        processingTime: '6-12 months',
        cost: 'AUD $4,640',
        requirements: ['State nomination', 'Occupation on list', '65+ points', 'Skills assessment'],
        isWorkPermit: false,
        isResidencyPath: true,
      },
      {
        name: 'Temporary Skill Shortage Visa (482)',
        description: 'Employer-sponsored work visa (2-4 years)',
        processingTime: '2-4 months',
        cost: 'AUD $1,290-2,690',
        requirements: ['Job offer from approved sponsor', '2 years work experience', 'Skills assessment'],
        isWorkPermit: true,
        isResidencyPath: true, // Can lead to 186
      },
      {
        name: 'Working Holiday Visa (417/462)',
        description: 'For young professionals aged 18-35 to work and travel',
        processingTime: '1-4 weeks',
        cost: 'AUD $635',
        requirements: ['Age 18-30/35', 'Passport from eligible country', 'Health insurance'],
        isWorkPermit: true,
        isResidencyPath: false,
      },
    ],

    costOfLiving: [
      {
        cityName: 'Sydney',
        rent1BRCenter: 2800,
        rent1BROutside: 2000,
        rent3BRCenter: 4500,
        utilities: 200,
        groceries: 500,
        transportation: 180,
        dining: 450,
        costIndex: 90,
        currency: 'AUD',
      },
      {
        cityName: 'Melbourne',
        rent1BRCenter: 2400,
        rent1BROutside: 1700,
        rent3BRCenter: 3800,
        utilities: 190,
        groceries: 480,
        transportation: 160,
        dining: 420,
        costIndex: 85,
        currency: 'AUD',
      },
      {
        cityName: 'Brisbane',
        rent1BRCenter: 2200,
        rent1BROutside: 1500,
        rent3BRCenter: 3400,
        utilities: 180,
        groceries: 450,
        transportation: 140,
        dining: 380,
        costIndex: 78,
        currency: 'AUD',
      },
    ],

    jobMarket: {
      topIndustries: ['Mining', 'Healthcare', 'Technology', 'Education', 'Finance'],
      growingSectors: ['Renewable energy', 'Cybersecurity', 'Healthcare tech'],
      avgSalaryTech: 110000, // AUD
      avgWorkHoursWeek: 38,
      vacationDaysStandard: 20, // Plus 10 public holidays
    },

    faqs: [
      {
        question: 'How does the Australian points system work?',
        answer: 'The SkillSelect points system awards points for age (25-32 = max points), English proficiency, work experience, education, and other factors. You need 65+ points to be competitive, though invitations typically go to 70-80+ points.',
        category: 'visa',
      },
      {
        question: 'What are the most in-demand jobs in Australia?',
        answer: 'Currently high demand for: nurses, software developers, engineers, accountants, electricians, plumbers, teachers, and trade workers. Check the skilled occupation list (SOL) for current needs.',
        category: 'jobs',
      },
      {
        question: 'How expensive is Australia compared to the UK?',
        answer: 'Sydney and Melbourne are about 90-95% of London prices. However, salaries are typically 20-30% higher, and quality of life is excellent. Regional areas are significantly cheaper.',
        category: 'housing',
      },
    ],

    metaTitle: 'Moving to Australia 2025: Skilled Migration, Jobs & Cost of Living',
    metaDescription: 'Complete guide to moving to Australia. Skilled migration visas (189/190/491), employer sponsorship, cost of living, and job opportunities.',
  },

  cyprus: {
    slug: 'cyprus',
    countryName: 'Cyprus',
    flag: '🇨🇾',
    region: 'Southern Europe',
    heroTitle: 'Moving to Cyprus',
    heroSubtitle: 'Complete relocation guide for Cyprus including digital nomad visa, business opportunities, and Mediterranean lifestyle.',
    heroGradient: 'from-blue-500 to-orange-500',
    language: 'Greek, Turkish (English widely spoken)',
    enabled: true,
    featured: true,
    priority: 6,

    quickFacts: [
      { label: 'Currency', value: 'EUR (€)', icon: '💶' },
      { label: 'Population', value: '1.2M', icon: '👥' },
      { label: 'Time Zone', value: 'EET (UTC+2)', icon: '🕐' },
      { label: 'Climate', value: 'Mediterranean', icon: '☀️' },
    ],

    highlights: [
      { text: 'Digital nomad visa available', icon: '✓' },
      { text: '12.5% corporate tax (lowest in EU)', icon: '✓' },
      { text: 'English widely spoken', icon: '✓' },
      { text: 'EU membership', icon: '✓' },
      { text: '340 days of sunshine per year', icon: '✓' },
      { text: 'Strategic location between Europe, Asia, Africa', icon: '✓' },
    ],

    visas: [
      {
        name: 'Digital Nomad Visa',
        description: 'For remote workers and digital nomads employed by foreign companies',
        processingTime: '2-3 months',
        cost: '€70',
        requirements: ['€3,500/month income', 'Employment contract or business registration', 'Health insurance'],
        isWorkPermit: true,
        isResidencyPath: false,
      },
      {
        name: 'Startup Visa',
        description: 'For entrepreneurs and startup founders',
        processingTime: '2-4 months',
        cost: '€115',
        requirements: ['Innovative business plan', 'Sufficient funds €30k+', 'Cyprus company registration'],
        isWorkPermit: true,
        isResidencyPath: true,
      },
      {
        name: 'Work Permit',
        description: 'Employer-sponsored work permit',
        processingTime: '2-3 months',
        cost: '€85',
        requirements: ['Job offer', 'Relevant qualifications', 'Employer sponsorship'],
        isWorkPermit: true,
        isResidencyPath: true,
      },
      {
        name: 'Permanent Residency (Fast Track)',
        description: 'Through property investment (€300k+)',
        processingTime: '2-3 months',
        cost: '€500',
        requirements: ['€300k property purchase', '€30k annual income', 'Clean criminal record'],
        isWorkPermit: false,
        isResidencyPath: true,
      },
    ],

    costOfLiving: [
      {
        cityName: 'Limassol',
        rent1BRCenter: 800,
        rent1BROutside: 550,
        rent3BRCenter: 1400,
        utilities: 100,
        groceries: 320,
        transportation: 80,
        dining: 250,
        costIndex: 62,
        currency: 'EUR',
      },
      {
        cityName: 'Nicosia',
        rent1BRCenter: 700,
        rent1BROutside: 500,
        rent3BRCenter: 1200,
        utilities: 90,
        groceries: 300,
        transportation: 70,
        dining: 220,
        costIndex: 58,
        currency: 'EUR',
      },
    ],

    jobMarket: {
      topIndustries: ['Finance & Banking', 'Tourism', 'Technology', 'Shipping', 'Real Estate'],
      growingSectors: ['Fintech', 'Cryptocurrency', 'Remote work hubs'],
      avgSalaryTech: 32000,
      avgWorkHoursWeek: 40,
      vacationDaysStandard: 20,
    },

    faqs: [
      {
        question: 'Is Cyprus a good destination for digital nomads?',
        answer: 'Yes, Cyprus offers excellent infrastructure, fast internet (avg 100+ Mbps), low cost of living, great weather, and English is widely spoken. The digital nomad visa allows 1-year stays.',
        category: 'lifestyle',
      },
      {
        question: 'What are the tax benefits of living in Cyprus?',
        answer: 'Cyprus has 12.5% corporate tax (lowest in EU), no inheritance tax, and various tax incentives. Non-dom residents can benefit from 0% tax on dividends and interest for 17 years.',
        category: 'general',
      },
      {
        question: 'Do I need to speak Greek to live in Cyprus?',
        answer: 'No, English is widely spoken, especially in cities like Limassol and Nicosia. Most businesses, restaurants, and services operate in English. However, learning Greek basics helps with integration.',
        category: 'lifestyle',
      },
    ],

    metaTitle: 'Moving to Cyprus 2025: Digital Nomad Visa, Tax Benefits & Island Living',
    metaDescription: 'Complete guide to relocating to Cyprus. Digital nomad visa, low taxes, EU membership, Mediterranean lifestyle, and expat community.',
  },
}

// Helper function to get all destinations
export function getAllDestinations(): Destination[] {
  return Object.values(DESTINATIONS).sort((a, b) => a.priority - b.priority)
}

// Helper function to get featured destinations
export function getFeaturedDestinations(): Destination[] {
  return getAllDestinations().filter(d => d.featured && d.enabled)
}

// Helper function to get destination by slug
export function getDestinationBySlug(slug: string): Destination | null {
  return DESTINATIONS[slug] || null
}
