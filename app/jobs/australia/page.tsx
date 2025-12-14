import { Metadata } from 'next'
import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Relocation Jobs Australia | Jobs with Visa Sponsorship & Relocation',
  description: 'Find relocation jobs in Australia with visa sponsorship (457/482/186 visas). Browse opportunities across tech, healthcare, engineering, and trades. Full relocation support.',
  keywords: [
    'relocation jobs australia',
    'australia relocation jobs',
    'jobs in australia with relocation',
    'australia jobs visa sponsorship',
    'relocate to australia jobs',
    'australian jobs for uk citizens',
    'skilled migration australia jobs',
  ],
  alternates: {
    canonical: 'https://relocation.quest/jobs/australia',
  },
  openGraph: {
    title: 'Australia Relocation Jobs - Visa Sponsorship Available',
    description: 'Browse jobs in Australia with full visa sponsorship and relocation packages. Tech, healthcare, engineering, and skilled trades.',
    type: 'website',
    url: 'https://relocation.quest/jobs/australia',
  },
}

export default function AustraliaJobsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-green-600 via-teal-600 to-blue-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-6">
              <span className="text-3xl">🇦🇺</span>
              <span>Australia</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              Relocation Jobs in Australia
            </h1>
            <p className="text-xl md:text-2xl text-green-100 mb-8 leading-relaxed">
              Find jobs in Australia with visa sponsorship and relocation packages. From Sydney to Melbourne, Perth to Brisbane - start your Australian adventure with full support.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#jobs"
                className="inline-flex items-center gap-2 bg-white text-green-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-50 transition shadow-lg"
              >
                View Jobs
              </Link>
              <Link
                href="/guides"
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition"
              >
                Migration Guides
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
              { label: 'Avg. Salary', value: 'AU$95k', icon: '💰' },
              { label: 'Min. Wage', value: 'AU$23.23/hr', icon: '📊' },
              { label: 'Job Growth', value: '+15%', icon: '📈' },
              { label: 'Visa Processing', value: '3-6 months', icon: '✈️' },
            ].map((stat, idx) => (
              <div key={idx}>
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-black text-green-600 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Why Relocate to Australia for Work?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '☀️',
                title: 'Quality of Life',
                description: 'Consistently ranked in top 10 most liveable cities globally. Excellent work-life balance and outdoor lifestyle.',
              },
              {
                icon: '💼',
                title: 'High Salaries',
                description: 'Among the highest minimum wages globally (AU$23.23/hr). Strong salaries across all sectors.',
              },
              {
                icon: '🏖️',
                title: 'Lifestyle & Climate',
                description: 'Beautiful beaches, year-round outdoor activities, and a relaxed laid-back culture.',
              },
              {
                icon: '🏥',
                title: 'World-Class Healthcare',
                description: 'Public Medicare system plus private insurance. High-quality medical facilities nationwide.',
              },
              {
                icon: '🎓',
                title: 'Education',
                description: 'Excellent public and private schools. Top-ranked universities for higher education.',
              },
              {
                icon: '🌏',
                title: 'Multicultural Society',
                description: '30% of population born overseas. Welcoming to migrants with strong expat communities.',
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

      {/* Visa Options */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            Australian Work Visa Options
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center">
            Multiple pathways to work and live in Australia
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                visa: 'Subclass 482 (TSS)',
                type: 'Temporary Skill Shortage',
                duration: '2-4 years',
                description: 'Employer-sponsored visa for skilled workers in shortage occupations. Pathway to permanent residency.',
              },
              {
                visa: 'Subclass 186 (ENS)',
                type: 'Employer Nomination Scheme',
                duration: 'Permanent',
                description: 'Direct permanent residency visa for skilled workers nominated by Australian employers.',
              },
              {
                visa: 'Subclass 189/190',
                type: 'Skilled Independent',
                duration: 'Permanent',
                description: 'Points-based permanent visa for highly skilled workers without employer sponsorship.',
              },
            ].map((visa, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-green-500 transition">
                <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold inline-block mb-4">
                  {visa.duration}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{visa.visa}</h3>
                <div className="text-green-600 font-semibold mb-4">{visa.type}</div>
                <p className="text-gray-600 leading-relaxed">{visa.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Industries */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            In-Demand Industries & Roles
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                industry: 'Healthcare & Nursing',
                roles: 'Registered Nurses, Doctors, Allied Health',
                salaryRange: 'AU$70k - 180k',
                demand: 'Critical',
              },
              {
                industry: 'Technology & IT',
                roles: 'Software Developers, DevOps, Data Analysts',
                salaryRange: 'AU$90k - 180k',
                demand: 'Very High',
              },
              {
                industry: 'Engineering',
                roles: 'Civil, Mechanical, Electrical Engineers',
                salaryRange: 'AU$80k - 150k',
                demand: 'High',
              },
              {
                industry: 'Trades & Construction',
                roles: 'Electricians, Plumbers, Carpenters, Builders',
                salaryRange: 'AU$65k - 120k',
                demand: 'Critical',
              },
              {
                industry: 'Education',
                roles: 'Teachers (Primary/Secondary), Early Childhood',
                salaryRange: 'AU$65k - 110k',
                demand: 'High',
              },
              {
                industry: 'Accounting & Finance',
                roles: 'Accountants, Financial Analysts, Auditors',
                salaryRange: 'AU$70k - 130k',
                demand: 'Medium-High',
              },
            ].map((sector, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-gray-200">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{sector.industry}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                    sector.demand === 'Critical' ? 'bg-red-100 text-red-700' :
                    sector.demand === 'Very High' ? 'bg-orange-100 text-orange-700' :
                    'bg-green-100 text-green-700'
                  }`}>
                    {sector.demand}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-4">{sector.roles}</p>
                <div className="bg-green-100 text-green-700 px-3 py-2 rounded-lg text-sm font-semibold inline-block">
                  {sector.salaryRange}
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
            Best Australian Cities for Expats
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                city: 'Sydney',
                population: '5.3M',
                avgRent: 'AU$650/week (2-bed)',
                pros: 'Largest job market, iconic harbour, vibrant culture',
                industries: 'Finance, Tech, Healthcare, Professional Services',
              },
              {
                city: 'Melbourne',
                population: '5M',
                avgRent: 'AU$550/week (2-bed)',
                pros: 'Arts & culture capital, excellent food scene, European feel',
                industries: 'Tech, Education, Healthcare, Creative Industries',
              },
              {
                city: 'Brisbane',
                population: '2.6M',
                avgRent: 'AU$520/week (2-bed)',
                pros: 'Subtropical climate, more affordable, growing rapidly',
                industries: 'Mining, Tech, Construction, Tourism',
              },
              {
                city: 'Perth',
                population: '2.1M',
                avgRent: 'AU$500/week (2-bed)',
                pros: 'Mining hub, beautiful beaches, highest wages',
                industries: 'Mining, Oil & Gas, Engineering, Healthcare',
              },
            ].map((city, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-200">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{city.city}</h3>
                  <span className="text-gray-500 text-sm">{city.population}</span>
                </div>
                <div className="bg-green-100 text-green-700 px-3 py-2 rounded-lg text-sm font-semibold mb-4 inline-block">
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
      <section className="py-20 bg-gradient-to-br from-green-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready for Your Australian Adventure?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Browse relocation jobs in Australia with visa sponsorship. Start your journey to the land down under today.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/jobs"
              className="inline-flex items-center gap-2 bg-white text-green-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-50 transition shadow-lg"
            >
              Browse All Jobs
            </Link>
            <Link
              href="/guides"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition"
            >
              Migration Guides
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
