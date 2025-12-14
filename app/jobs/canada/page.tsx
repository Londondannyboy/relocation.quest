import { Metadata } from 'next'
import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Relocation Jobs Canada | Jobs with Visa Sponsorship & Immigration',
  description: 'Find relocation jobs in Canada with LMIA/work permit support. Browse opportunities across tech, healthcare, engineering. Full immigration and relocation assistance.',
  keywords: [
    'relocation jobs canada',
    'canada relocation jobs',
    'relocation jobs in canada',
    'canada jobs visa sponsorship',
    'lmia jobs canada',
    'relocate to canada jobs',
    'canadian jobs for uk citizens',
    'express entry jobs canada',
  ],
  alternates: {
    canonical: 'https://relocation.quest/jobs/canada',
  },
  openGraph: {
    title: 'Canada Relocation Jobs - LMIA & Work Permit Support',
    description: 'Browse jobs in Canada with visa sponsorship and immigration support. Tech, healthcare, engineering, and skilled trades.',
    type: 'website',
    url: 'https://relocation.quest/jobs/canada',
  },
}

export default function CanadaJobsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-red-600 via-red-500 to-orange-500 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-6">
              <span className="text-3xl">🇨🇦</span>
              <span>Canada</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              Relocation Jobs in Canada
            </h1>
            <p className="text-xl md:text-2xl text-red-100 mb-8 leading-relaxed">
              Find jobs in Canada with LMIA support, work permits, and pathway to permanent residency. From Toronto to Vancouver, Calgary to Montreal - build your Canadian future.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#jobs"
                className="inline-flex items-center gap-2 bg-white text-red-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-red-50 transition shadow-lg"
              >
                View Jobs
              </Link>
              <Link
                href="/guides"
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition"
              >
                Immigration Guides
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { label: 'Avg. Salary', value: 'CA$65k', icon: '💰' },
              { label: 'Immigration Target', value: '500k/year', icon: '📊' },
              { label: 'Job Growth', value: '+24%', icon: '📈' },
              { label: 'PR Processing', value: '6-12 months', icon: '✈️' },
            ].map((stat, idx) => (
              <div key={idx}>
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-black text-red-600 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            Why Relocate to Canada for Work?
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center">
            Canada is actively seeking 500,000+ immigrants annually - excellent opportunity for skilled workers
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🏠',
                title: 'Path to Permanent Residency',
                description: 'Clear immigration pathways through Express Entry, PNP, and employer-sponsored programs. PR possible within 1-2 years.',
              },
              {
                icon: '🏥',
                title: 'Universal Healthcare',
                description: 'Free public healthcare for permanent residents. High-quality medical system nationwide.',
              },
              {
                icon: '🎓',
                title: 'Excellent Education',
                description: 'Free public schools, world-class universities. Affordable tuition compared to US/UK.',
              },
              {
                icon: '🌲',
                title: 'Quality of Life',
                description: 'Consistently ranked in top 10 countries for quality of life. Safe, clean, and beautiful nature.',
              },
              {
                icon: '🤝',
                title: 'Welcoming to Immigrants',
                description: '22% of population are immigrants. Multicultural society with strong integration support.',
              },
              {
                icon: '💼',
                title: 'Strong Economy',
                description: 'Stable economy, competitive salaries, excellent worker protections and labor rights.',
              },
            ].map((benefit, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition">
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Immigration Pathways */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Canadian Immigration Pathways
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                program: 'Express Entry',
                type: 'Federal Skilled Worker',
                timeline: '6-8 months',
                description: 'Points-based system for skilled workers. Fastest route to permanent residency.',
              },
              {
                program: 'LMIA Work Permit',
                type: 'Employer-Sponsored',
                timeline: '3-6 months',
                description: 'Temporary work permit with employer sponsorship. Can lead to permanent residency.',
              },
              {
                program: 'Provincial Nominee (PNP)',
                type: 'Province-Specific',
                timeline: '8-12 months',
                description: 'Provincial programs targeting specific skills. Each province has different requirements.',
              },
              {
                program: 'Global Talent Stream',
                type: 'Tech Workers',
                timeline: '2-4 weeks',
                description: 'Fast-tracked work permits for tech roles. Expedited processing for in-demand skills.',
              },
              {
                program: 'Atlantic Immigration',
                type: 'Regional Program',
                timeline: '6-12 months',
                description: 'Lower requirements for Atlantic provinces (NS, NB, PEI, NL). Excellent for families.',
              },
              {
                program: 'Canadian Experience',
                type: 'CEC',
                timeline: '6-8 months',
                description: 'For workers with 1+ year Canadian work experience. Easier path to PR.',
              },
            ].map((pathway, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-red-500 transition">
                <div className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-semibold inline-block mb-4">
                  {pathway.timeline}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{pathway.program}</h3>
                <div className="text-red-600 font-semibold mb-3">{pathway.type}</div>
                <p className="text-gray-600 text-sm leading-relaxed">{pathway.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* In-Demand Occupations */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            Most In-Demand Occupations
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center">
            NOC TEER 0, 1, 2, 3 occupations eligible for Express Entry and PNP
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                occupation: 'Software Developers & Engineers',
                noc: 'NOC 21232',
                salary: 'CA$85k - 140k',
                provinces: 'All provinces',
              },
              {
                occupation: 'Registered Nurses',
                noc: 'NOC 31301',
                salary: 'CA$70k - 95k',
                provinces: 'Critical shortage',
              },
              {
                occupation: 'Web Developers & Designers',
                noc: 'NOC 21233',
                salary: 'CA$65k - 110k',
                provinces: 'High demand',
              },
              {
                occupation: 'Accountants & Auditors',
                noc: 'NOC 11100',
                salary: 'CA$60k - 90k',
                provinces: 'All provinces',
              },
              {
                occupation: 'Construction Managers',
                noc: 'NOC 70010',
                salary: 'CA$75k - 120k',
                provinces: 'High demand',
              },
              {
                occupation: 'Electrical Engineers',
                noc: 'NOC 21310',
                salary: 'CA$75k - 115k',
                provinces: 'All provinces',
              },
              {
                occupation: 'Early Childhood Educators',
                noc: 'NOC 42202',
                salary: 'CA$40k - 60k',
                provinces: 'Critical shortage',
              },
              {
                occupation: 'Heavy-Duty Mechanics',
                noc: 'NOC 72401',
                salary: 'CA$55k - 85k',
                provinces: 'Western provinces',
              },
              {
                occupation: 'Financial Analysts',
                noc: 'NOC 11101',
                salary: 'CA$65k - 100k',
                provinces: 'Major cities',
              },
            ].map((job, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{job.occupation}</h3>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-gray-500">{job.noc}</span>
                  <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs font-semibold">
                    {job.provinces}
                  </span>
                </div>
                <div className="bg-red-100 text-red-700 px-3 py-2 rounded-lg text-sm font-semibold">
                  {job.salary}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Cities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Best Canadian Cities for Immigrants
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                city: 'Toronto, ON',
                population: '6.4M',
                avgRent: 'CA$2,200/month (1-bed)',
                pros: 'Largest job market, extremely multicultural, financial hub',
                industries: 'Finance, Tech, Media, Professional Services',
              },
              {
                city: 'Vancouver, BC',
                population: '2.6M',
                avgRent: 'CA$2,100/month (1-bed)',
                pros: 'Mildest climate, beautiful nature, tech hub, Asian community',
                industries: 'Tech, Film, Tourism, Trade',
              },
              {
                city: 'Montreal, QC',
                population: '4.3M',
                avgRent: 'CA$1,400/month (1-bed)',
                pros: 'Affordable, European culture, bilingual, vibrant arts scene',
                industries: 'Aerospace, AI/ML, Gaming, Arts',
              },
              {
                city: 'Calgary, AB',
                population: '1.6M',
                avgRent: 'CA$1,500/month (1-bed)',
                pros: 'High salaries, low taxes, close to Rockies, entrepreneurial',
                industries: 'Energy, Tech, Agriculture, Finance',
              },
            ].map((city, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-200">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{city.city}</h3>
                  <span className="text-gray-500 text-sm">{city.population}</span>
                </div>
                <div className="bg-red-100 text-red-700 px-3 py-2 rounded-lg text-sm font-semibold mb-4 inline-block">
                  {city.avgRent}
                </div>
                <p className="text-gray-700 mb-3">{city.pros}</p>
                <div className="text-sm text-gray-600">
                  <strong>Key Industries:</strong> {city.industries}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-red-600 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Start Your Canadian Journey
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Browse relocation jobs in Canada with LMIA support and pathway to permanent residency. Your new life in Canada awaits.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/jobs"
              className="inline-flex items-center gap-2 bg-white text-red-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-red-50 transition shadow-lg"
            >
              Browse All Jobs
            </Link>
            <Link
              href="/guides"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition"
            >
              Immigration Guides
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
