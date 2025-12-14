import { Metadata } from 'next'
import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Relocation Jobs Dubai | Jobs with Relocation Packages to Dubai',
  description: 'Find relocation jobs in Dubai with visa sponsorship and relocation packages. Browse opportunities across tech, finance, healthcare, and more. Full relocation support included.',
  keywords: [
    'relocation jobs dubai',
    'dubai relocation jobs',
    'jobs in dubai with relocation',
    'dubai jobs with visa sponsorship',
    'relocation to dubai jobs',
    'dubai jobs relocation package',
    'expat jobs dubai',
  ],
  alternates: {
    canonical: 'https://relocation.quest/jobs/dubai',
  },
  openGraph: {
    title: 'Relocation Jobs Dubai - Jobs with Visa Sponsorship',
    description: 'Browse relocation jobs in Dubai with full visa sponsorship and relocation packages. Tech, finance, healthcare, and executive roles.',
    type: 'website',
    url: 'https://relocation.quest/jobs/dubai',
  },
}

export default function DubaiJobsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-amber-500 via-orange-500 to-red-500 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-6">
              <span className="text-3xl">🇦🇪</span>
              <span>Dubai, UAE</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              Relocation Jobs in Dubai
            </h1>
            <p className="text-xl md:text-2xl text-orange-100 mb-8 leading-relaxed">
              Find jobs in Dubai with full relocation packages, visa sponsorship, and comprehensive support. From tech to finance, healthcare to hospitality - start your Dubai career today.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#jobs"
                className="inline-flex items-center gap-2 bg-white text-orange-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-50 transition shadow-lg"
              >
                View Jobs
              </Link>
              <Link
                href="/destinations"
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition"
              >
                Relocation Guides
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
              { label: 'Tax-Free Salary', value: '0%', icon: '💰' },
              { label: 'Avg. Salary', value: 'AED 180k', icon: '📊' },
              { label: 'Job Growth', value: '+12%', icon: '📈' },
              { label: 'Visa Processing', value: '2-4 weeks', icon: '✈️' },
            ].map((stat, idx) => (
              <div key={idx}>
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-black text-orange-600 mb-1">{stat.value}</div>
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
            Why Relocate to Dubai for Work?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🏜️',
                title: 'Tax-Free Income',
                description: 'Keep 100% of your salary with no personal income tax. Significantly higher take-home pay compared to UK/Europe.',
              },
              {
                icon: '🌍',
                title: 'Global Hub',
                description: 'Strategic location connecting East and West. Major hub for finance, tech, and logistics industries.',
              },
              {
                icon: '🏙️',
                title: 'Modern Infrastructure',
                description: 'World-class infrastructure, healthcare, and education. Safe, clean, and extremely well-connected.',
              },
              {
                icon: '✈️',
                title: 'Easy Visa Process',
                description: 'Employer-sponsored work visas with fast processing (2-4 weeks). Family visa options available.',
              },
              {
                icon: '💼',
                title: 'Career Growth',
                description: 'Rapidly expanding job market in tech, finance, healthcare, and hospitality sectors.',
              },
              {
                icon: '☀️',
                title: 'Quality of Life',
                description: 'Year-round sunshine, luxury lifestyle, diverse expat community, and excellent dining/entertainment.',
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

      {/* Top Industries */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            Top Industries Hiring in Dubai
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center">
            Dubai's economy is diverse and rapidly growing across multiple sectors
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                industry: 'Technology & IT',
                roles: 'Software Engineers, DevOps, Data Scientists, Cybersecurity',
                salaryRange: 'AED 180k - 500k',
              },
              {
                industry: 'Finance & Banking',
                roles: 'Investment Bankers, Financial Analysts, Wealth Managers',
                salaryRange: 'AED 200k - 600k',
              },
              {
                industry: 'Healthcare',
                roles: 'Doctors, Nurses, Medical Specialists, Healthcare Managers',
                salaryRange: 'AED 150k - 800k',
              },
              {
                industry: 'Real Estate',
                roles: 'Property Consultants, Real Estate Managers, Developers',
                salaryRange: 'AED 120k - 400k',
              },
              {
                industry: 'Hospitality & Tourism',
                roles: 'Hotel Managers, Chefs, Guest Relations, Event Managers',
                salaryRange: 'AED 100k - 350k',
              },
              {
                industry: 'Construction & Engineering',
                roles: 'Civil Engineers, Project Managers, Architects',
                salaryRange: 'AED 150k - 450k',
              },
            ].map((sector, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{sector.industry}</h3>
                <p className="text-sm text-gray-600 mb-4">{sector.roles}</p>
                <div className="bg-orange-100 text-orange-700 px-3 py-2 rounded-lg text-sm font-semibold inline-block">
                  {sector.salaryRange}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Relocation Package Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            What's Included in Dubai Relocation Packages?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Visa & Immigration',
                items: [
                  'Employment visa sponsorship',
                  'Emirates ID processing',
                  'Medical examination',
                  'Visa fees covered',
                  'Family visa support',
                ],
              },
              {
                title: 'Housing & Accommodation',
                items: [
                  '1-2 months temporary housing',
                  'Housing allowance or company accommodation',
                  'Assistance finding permanent housing',
                  'Security deposit support',
                  'Utilities setup assistance',
                ],
              },
              {
                title: 'Travel & Moving',
                items: [
                  'Flight tickets for employee and family',
                  'Shipping of household goods',
                  'Airport pickup',
                  'Baggage allowance',
                  'Moving expense reimbursement',
                ],
              },
              {
                title: 'Additional Benefits',
                items: [
                  'Medical insurance',
                  'School tuition for children',
                  'Sign-on bonus or settling allowance',
                  'Car allowance or company vehicle',
                  'Annual home leave tickets',
                ],
              },
            ].map((pkg, idx) => (
              <div key={idx} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border-2 border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{pkg.title}</h3>
                <ul className="space-y-3">
                  {pkg.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-orange-600 mt-1">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Living in Dubai */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Living in Dubai: What to Expect
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Cost of Living</h3>
              <div className="space-y-4">
                {[
                  { item: 'Studio Apartment (Dubai Marina)', cost: 'AED 60k - 90k/year' },
                  { item: '2-Bed Apartment (JLT/Greens)', cost: 'AED 80k - 120k/year' },
                  { item: 'Monthly Groceries (Family of 4)', cost: 'AED 2,500 - 3,500' },
                  { item: 'Dining Out (Mid-range)', cost: 'AED 150 - 250' },
                  { item: 'Utilities (Monthly)', cost: 'AED 500 - 1,000' },
                  { item: 'Metro Monthly Pass', cost: 'AED 350' },
                ].map((expense, idx) => (
                  <div key={idx} className="flex justify-between items-center bg-white p-4 rounded-xl border border-gray-200">
                    <span className="text-gray-700">{expense.item}</span>
                    <span className="font-bold text-orange-600">{expense.cost}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Lifestyle & Culture</h3>
              <div className="prose prose-lg">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Dubai offers a unique blend of modern luxury and traditional Arabian culture. The city is extremely safe, clean, and welcoming to expats from around the world.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600">•</span>
                    <span>English widely spoken in business and daily life</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600">•</span>
                    <span>Large expat community (over 85% of population)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600">•</span>
                    <span>Year-round sunshine and beach lifestyle</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600">•</span>
                    <span>World-class shopping, dining, and entertainment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600">•</span>
                    <span>Excellent international schools</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600">•</span>
                    <span>Modern healthcare facilities</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-orange-600 to-red-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Dubai Career?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Browse relocation jobs in Dubai with full visa sponsorship and support packages. Your tax-free career awaits.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/jobs"
              className="inline-flex items-center gap-2 bg-white text-orange-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-50 transition shadow-lg"
            >
              Browse All Jobs
            </Link>
            <Link
              href="/guides"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition"
            >
              Relocation Guides
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
