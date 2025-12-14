import { Metadata } from 'next'
import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Moving to Cyprus: Complete Relocation Guide 2025 | Visas, Costs & Jobs',
  description: 'Complete guide to moving to Cyprus from the UK. Visa requirements, cost of living, job opportunities, healthcare, housing, and everything you need for a successful relocation.',
  keywords: [
    'moving to cyprus',
    'relocation to cyprus',
    'relocating to cyprus',
    'move to cyprus from uk',
    'cyprus relocation guide',
    'living in cyprus',
    'retiring in cyprus',
    'cyprus expat guide',
  ],
  alternates: {
    canonical: 'https://relocation.quest/guides/moving-to-cyprus',
  },
  openGraph: {
    title: 'Moving to Cyprus: Complete Relocation Guide',
    description: 'Everything you need to know about relocating to Cyprus. Visas, costs, jobs, healthcare, and practical advice for a smooth move.',
    type: 'article',
    url: 'https://relocation.quest/guides/moving-to-cyprus',
  },
}

export default function MovingToCyprusPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <article className="pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
            <span className="text-2xl">🇨🇾</span>
            <span>Cyprus Relocation Guide</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
            Moving to Cyprus: The Complete Guide
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Cyprus offers an exceptional quality of life with over 300 days of sunshine, low taxes, beautiful beaches, and a thriving expat community. This comprehensive guide covers everything you need to know about relocating to Cyprus in 2025.
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-500 pb-8 border-b border-gray-200">
            <span>📅 Updated December 2025</span>
            <span>⏱️ 15 min read</span>
            <span>🎯 68% ready to relocate</span>
          </div>
        </div>
      </article>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 pb-20">
        {/* Quick Facts */}
        <section className="mb-12 bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Cyprus at a Glance</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { label: 'Population', value: '1.2 million', icon: '👥' },
              { label: 'Capital', value: 'Nicosia', icon: '🏛️' },
              { label: 'Language', value: 'Greek, English widely spoken', icon: '🗣️' },
              { label: 'Currency', value: 'Euro (€)', icon: '💶' },
              { label: 'Corporate Tax', value: '12.5% (lowest in EU)', icon: '💼' },
              { label: 'Climate', value: '300+ days of sunshine', icon: '☀️' },
              { label: 'EU Member', value: 'Yes (since 2004)', icon: '🇪🇺' },
              { label: 'Time Zone', value: 'GMT+2', icon: '🕐' },
            ].map((fact, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-white p-4 rounded-xl">
                <span className="text-3xl">{fact.icon}</span>
                <div>
                  <div className="text-sm text-gray-500">{fact.label}</div>
                  <div className="font-bold text-gray-900">{fact.value}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Cyprus */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Why Are People Moving to Cyprus?
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[
              {
                title: '☀️ Mediterranean Lifestyle',
                description: '340 days of sunshine annually, beautiful beaches, and outdoor living year-round.',
              },
              {
                title: '💰 Low Tax Regime',
                description: '12.5% corporate tax, 0% on dividends for non-domiciled residents, and various tax incentives.',
              },
              {
                title: '🏖️ Quality of Life',
                description: 'Relaxed pace of life, excellent cuisine, low crime rate, and friendly local population.',
              },
              {
                title: '🇪🇺 EU Access',
                description: 'EU member state benefits including free movement, while maintaining UK-style legal system.',
              },
              {
                title: '💼 Business Hub',
                description: 'Growing tech sector, international business center, and strategic location between Europe/Asia/Africa.',
              },
              {
                title: '🏥 Quality Healthcare',
                description: 'Modern healthcare system with both public (GESY) and excellent private options.',
              },
            ].map((reason, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">{reason.title}</h3>
                <p className="text-gray-600 text-sm">{reason.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Visa Requirements */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Cyprus Visa & Residency Options
          </h2>

          <div className="space-y-6">
            {[
              {
                visa: 'EU/UK Citizens (Pre-Brexit)',
                requirements: 'Free movement within EU. Can live and work without visa.',
                timeline: 'Immediate',
                cost: '€0',
              },
              {
                visa: 'UK Citizens (Post-Brexit)',
                requirements: 'Can visit visa-free for 90 days. Need work/residence permit for longer stays.',
                timeline: '1-3 months',
                cost: '€70-€140',
              },
              {
                visa: 'Employment Visa',
                requirements: 'Job offer from Cypriot employer. Employer applies for work permit on your behalf.',
                timeline: '2-3 months',
                cost: '€85 + processing',
              },
              {
                visa: 'Self-Employed/Freelancer',
                requirements: 'Proof of income (€10,000+ annually), no local employment, business plan.',
                timeline: '2-4 months',
                cost: '€140 + business registration',
              },
              {
                visa: 'Digital Nomad Visa',
                requirements: 'Remote employment outside Cyprus. €3,500+ monthly income. Valid 1 year (renewable).',
                timeline: '1-2 months',
                cost: '€70',
              },
              {
                visa: 'Retirement/Financially Independent',
                requirements: 'Proof of €24,000+ annual income from pensions/investments. Health insurance.',
                timeline: '2-3 months',
                cost: '€140',
              },
              {
                visa: 'Permanent Residency (Fast Track)',
                requirements: '€300,000 property investment + €30,000 deposit in Cyprus bank.',
                timeline: '2-3 months',
                cost: '€500 + legal fees',
              },
            ].map((option, idx) => (
              <div key={idx} className="bg-gray-50 border-l-4 border-blue-600 p-6 rounded-r-xl">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{option.visa}</h3>
                  <div className="text-right">
                    <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold mb-1">
                      {option.timeline}
                    </div>
                    <div className="text-sm text-gray-600">{option.cost}</div>
                  </div>
                </div>
                <p className="text-gray-700">{option.requirements}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Cost of Living */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Cost of Living in Cyprus
          </h2>
          <p className="text-gray-700 mb-6">
            Cyprus offers excellent value compared to UK/Western Europe. Costs vary by location - Limassol and Paphos are more expensive, while Larnaca and Nicosia are more affordable.
          </p>

          <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Monthly Expenses (Single Person)</h3>
            <div className="space-y-4">
              {[
                { item: 'Rent (1-bedroom, Limassol)', low: '€700', high: '€1,200' },
                { item: 'Rent (1-bedroom, Larnaca)', low: '€500', high: '€800' },
                { item: 'Utilities (electricity, water, internet)', low: '€100', high: '€180' },
                { item: 'Groceries (monthly)', low: '€250', high: '€400' },
                { item: 'Eating Out (mid-range)', low: '€15', high: '€25 per meal' },
                { item: 'Public Transport (monthly)', low: '€40', high: '€60' },
                { item: 'Gym Membership', low: '€40', high: '€70' },
                { item: 'Mobile Phone Plan', low: '€15', high: '€30' },
              ].map((expense, idx) => (
                <div key={idx} className="flex justify-between items-center pb-3 border-b border-gray-100 last:border-0">
                  <span className="text-gray-700">{expense.item}</span>
                  <span className="font-bold text-blue-600">{expense.low} - {expense.high}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-blue-50 rounded-xl">
              <div className="flex justify-between items-center">
                <span className="font-bold text-gray-900">Total Monthly (excluding rent)</span>
                <span className="text-2xl font-black text-blue-600">€500 - €800</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl">
            <h4 className="font-bold text-gray-900 mb-3">💡 Cost Savings Tips</h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-green-600">•</span>
                <span>Shop at local markets for fresh produce (30-40% cheaper than supermarkets)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">•</span>
                <span>Use air conditioning sparingly (biggest expense in summer)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">•</span>
                <span>Consider living outside tourist areas (Larnaca, Nicosia vs Limassol, Paphos)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">•</span>
                <span>Buy a car (public transport limited outside cities)</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Job Market */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Jobs & Employment in Cyprus
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 leading-relaxed mb-4">
              Cyprus has a growing job market, particularly in tech, finance, tourism, and professional services. English is widely used in business, making it easier for expats to find work.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                sector: 'Technology & IT',
                roles: 'Software Developers, DevOps, Cybersecurity',
                salary: '€30k - €60k',
                demand: 'High',
              },
              {
                sector: 'Finance & Accounting',
                roles: 'Accountants, Financial Analysts, Compliance',
                salary: '€25k - €50k',
                demand: 'Medium-High',
              },
              {
                sector: 'Tourism & Hospitality',
                roles: 'Hotel Management, Chefs, Customer Service',
                salary: '€18k - €35k',
                demand: 'Seasonal',
              },
              {
                sector: 'Real Estate',
                roles: 'Property Consultants, Development',
                salary: '€20k - €45k + commission',
                demand: 'Medium',
              },
              {
                sector: 'Education',
                roles: 'English Teachers, International School Teachers',
                salary: '€20k - €40k',
                demand: 'Medium',
              },
              {
                sector: 'Remote/Digital Nomad',
                roles: 'Any remote-friendly role',
                salary: 'Variable (foreign income)',
                demand: 'Growing',
              },
            ].map((job, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-gray-200">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-bold text-gray-900">{job.sector}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                    job.demand === 'High' ? 'bg-green-100 text-green-700' :
                    job.demand === 'Medium-High' ? 'bg-blue-100 text-blue-700' :
                    'bg-gray-100 text-gray-700'
                  }`}>
                    {job.demand}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-3">{job.roles}</p>
                <div className="bg-blue-100 text-blue-700 px-3 py-2 rounded-lg text-sm font-semibold">
                  {job.salary}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-6 bg-yellow-50 border-l-4 border-yellow-500 rounded-r-xl">
            <p className="text-gray-800">
              <strong>Note:</strong> Many expats work remotely for international companies while enjoying Cyprus's favorable tax regime and lifestyle. The Digital Nomad Visa makes this official.
            </p>
          </div>
        </section>

        {/* Healthcare */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Healthcare in Cyprus
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">🏥 Public Healthcare (GESY)</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">✓</span>
                  <span>Universal coverage launched 2019</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">✓</span>
                  <span>2.65% contribution from salary</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">✓</span>
                  <span>Free primary care, specialist visits</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">✓</span>
                  <span>Hospital treatment covered</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">✓</span>
                  <span>€1-€10 co-payments for services</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">🏨 Private Healthcare</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Excellent private hospitals</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>€500-€1,500/year insurance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>No waiting times</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>English-speaking doctors</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Many UK/EU trained physicians</span>
                </li>
              </ul>
            </div>
          </div>

          <p className="text-gray-700">
            Most expats use a combination: GESY for general care and private insurance for faster access and additional coverage. Healthcare quality is excellent, with modern facilities in all major cities.
          </p>
        </section>

        {/* Best Places to Live */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Best Cities & Areas for Expats
          </h2>

          <div className="space-y-6">
            {[
              {
                city: 'Limassol',
                pros: 'Largest expat community, business hub, cosmopolitan, best nightlife',
                cons: 'Most expensive, crowded, hot summers',
                bestFor: 'Young professionals, families, business owners',
              },
              {
                city: 'Paphos',
                pros: 'Large British community, slower pace, beautiful coast, cultural sites',
                cons: 'Limited job market, quieter, older demographic',
                bestFor: 'Retirees, families, remote workers',
              },
              {
                city: 'Larnaca',
                pros: 'Most affordable, international airport, relaxed vibe, central location',
                cons: 'Smaller city, less nightlife',
                bestFor: 'Budget-conscious, digital nomads, families',
              },
              {
                city: 'Nicosia',
                pros: 'Capital city, best job market, authentic Cypriot culture, universities',
                cons: 'No beach, divided city, hot summers',
                bestFor: 'Career-focused, students, government/EU jobs',
              },
              {
                city: 'Protaras/Ayia Napa',
                pros: 'Beautiful beaches, tourist amenities, resort lifestyle',
                cons: 'Very touristy, seasonal, limited local culture',
                bestFor: 'Beach lovers, seasonal workers, vacation home',
              },
            ].map((place, idx) => (
              <div key={idx} className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{place.city}</h3>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <div className="font-semibold text-green-700 mb-2">✓ Pros:</div>
                    <p className="text-gray-700 text-sm">{place.pros}</p>
                  </div>
                  <div>
                    <div className="font-semibold text-red-700 mb-2">✗ Cons:</div>
                    <p className="text-gray-700 text-sm">{place.cons}</p>
                  </div>
                </div>
                <div className="bg-blue-100 text-blue-700 px-3 py-2 rounded-lg text-sm font-semibold inline-block">
                  Best for: {place.bestFor}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Practical Tips */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Essential Tips for Moving to Cyprus
          </h2>

          <div className="space-y-4">
            {[
              {
                tip: 'Get a car',
                detail: 'Public transport is limited outside cities. Cars are affordable (left-hand drive like UK).',
              },
              {
                tip: 'Learn basic Greek',
                detail: 'While English is widely spoken, learning Greek phrases helps integration and shows respect.',
              },
              {
                tip: 'Open a local bank account early',
                detail: 'Required for many services. Bring passport, residency proof, and proof of income.',
              },
              {
                tip: 'Register for GESY healthcare',
                detail: 'Mandatory registration within 30 days of employment or residency approval.',
              },
              {
                tip: 'Understand the tax system',
                detail: 'Hire an accountant for first year. Tax filing deadline is July 31st.',
              },
              {
                tip: 'Prepare for hot summers',
                detail: 'AC costs spike June-September. Consider energy efficiency when choosing accommodation.',
              },
              {
                tip: 'Join expat groups',
                detail: 'Facebook groups, meetups, and local clubs help with settling in and networking.',
              },
              {
                tip: 'Visit before committing',
                detail: 'Spend 2-4 weeks exploring different areas before deciding where to settle.',
              },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 bg-white p-5 rounded-xl border border-gray-200">
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  {idx + 1}
                </div>
                <div>
                  <div className="font-bold text-gray-900 mb-1">{item.tip}</div>
                  <div className="text-gray-600 text-sm">{item.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Make Your Cyprus Move?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Explore more guides, find jobs, or get personalized relocation assistance for your Cyprus journey.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/guides/cyprus-expat-jobs"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition"
            >
              Cyprus Job Guide
            </Link>
            <Link
              href="/destinations/cyprus"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition"
            >
              Cyprus Destination Page
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  )
}
