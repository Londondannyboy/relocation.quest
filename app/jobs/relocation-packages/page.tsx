import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Jobs with Relocation Packages | Find Positions with Full Moving Support',
  description: 'Discover jobs that include comprehensive relocation packages. Housing, visa, travel, and settling-in support included. Browse opportunities worldwide with full relocation assistance.',
  keywords: [
    'jobs with relocation packages',
    'relocation package jobs',
    'jobs including relocation',
    'employment relocation packages',
    'jobs with moving allowance',
    'international jobs relocation package',
    'relocation job benefits',
  ],
  alternates: {
    canonical: 'https://relocation.quest/jobs/relocation-packages',
  },
  openGraph: {
    title: 'Jobs with Relocation Packages - Full Moving Support Included',
    description: 'Find career opportunities with comprehensive relocation packages. Complete moving, visa, and settling-in support from employers worldwide.',
    type: 'website',
    url: 'https://relocation.quest/jobs/relocation-packages',
  },
}

export default function RelocationPackagesPage() {
  return (
    <>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-6">
              <span className="text-2xl">📦</span>
              <span>Relocation Packages Included</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              Jobs with Relocation Packages
            </h1>
            <p className="text-xl md:text-2xl text-pink-100 mb-8 leading-relaxed">
              Find positions where your employer handles everything. Full relocation packages with housing, visa support, travel, and settling-in assistance included.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#browse"
                className="inline-flex items-center gap-2 bg-white text-pink-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-pink-50 transition shadow-lg"
              >
                Browse Jobs
              </Link>
              <Link
                href="/jobs"
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition"
              >
                All Jobs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-12 bg-pink-50 border-b border-pink-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { label: 'Zero Stress Moving', value: '100%', icon: '☑️' },
              { label: 'Covered Costs', value: 'All', icon: '💳' },
              { label: 'Included Services', value: '4+', icon: '⭐' },
              { label: 'Support Duration', value: 'Full', icon: '🤝' },
            ].map((stat, idx) => (
              <div key={idx}>
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-black text-pink-600 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            What Relocation Packages Typically Include
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: '🏠',
                title: 'Housing & Accommodation',
                items: [
                  'Temporary accommodation (1-3 months)',
                  'Company apartment or housing allowance',
                  'Assistance finding permanent housing',
                  'Security deposit covered',
                  'Furniture and utilities setup',
                  'Housing search consultants provided',
                ],
              },
              {
                icon: '📋',
                title: 'Visa & Immigration',
                items: [
                  'Work visa sponsorship',
                  'Visa application processing',
                  'Medical examination covered',
                  'Residency permit assistance',
                  'Family visa support',
                  'Legal documentation help',
                ],
              },
              {
                icon: '✈️',
                title: 'Travel & Logistics',
                items: [
                  'Flight tickets (you + family)',
                  'Airport pickup and transfers',
                  'Household goods shipping',
                  'Vehicle relocation (sometimes)',
                  'Pet transportation (if applicable)',
                  'Travel insurance included',
                ],
              },
              {
                icon: '🎓',
                title: 'Settling-In Support',
                items: [
                  'Settling-in allowance/bonus',
                  'Bank account setup assistance',
                  'School placement for children',
                  'Cultural orientation program',
                  'Language training courses',
                  'Community introduction events',
                ],
              },
              {
                icon: '🏥',
                title: 'Healthcare & Benefits',
                items: [
                  'Health insurance setup',
                  'Medical provider registration',
                  'Dental and vision coverage',
                  'Mental health support',
                  'Benefits coordination',
                  'Emergency medical assistance',
                ],
              },
              {
                icon: '💼',
                title: 'Career & Professional Support',
                items: [
                  'Career coaching (sometimes)',
                  'Professional networking events',
                  'Industry conference access',
                  'Continuing education support',
                  'Professional licensing help',
                  'Mentorship programs',
                ],
              },
            ].map((pkg, idx) => (
              <div key={idx} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border-2 border-gray-200">
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-5xl">{pkg.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900">{pkg.title}</h3>
                </div>
                <ul className="space-y-3">
                  {pkg.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-pink-600 mt-1">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Relocation Package Tiers */}
      <section className="py-20 bg-pink-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Types of Relocation Packages
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Standard Package',
                description: 'Entry-level roles and smaller companies',
                features: [
                  'Visa sponsorship',
                  'Temporary housing (1 month)',
                  'Flight reimbursement',
                  'Moving allowance (limited)',
                  'Basic settling-in support',
                ],
                avgCost: '£5,000 - £15,000',
                roles: 'Junior roles, Fresh graduates',
              },
              {
                name: 'Comprehensive Package',
                description: 'Mid-level positions and growth companies',
                features: [
                  'Full visa sponsorship',
                  'Temporary + permanent housing help',
                  'Flights + family included',
                  'Professional moving service',
                  'School placement assistance',
                  'Cultural integration program',
                ],
                avgCost: '£15,000 - £40,000',
                roles: 'Mid-level professionals',
                highlighted: true,
              },
              {
                name: 'Premium Package',
                description: 'Executive roles and top tier companies',
                features: [
                  'Full comprehensive support',
                  'Executive housing + allowance',
                  'Private flights + business class',
                  'Luxury moving service',
                  'School + childcare placement',
                  'Executive coaching + networking',
                  'Tax optimization service',
                  'Family support coordinator',
                ],
                avgCost: '£40,000 - £150,000+',
                roles: 'Senior executives, Specialists',
              },
            ].map((pkg, idx) => (
              <div
                key={idx}
                className={`rounded-2xl overflow-hidden transition transform hover:scale-105 ${
                  pkg.highlighted
                    ? 'bg-gradient-to-br from-pink-500 to-red-500 text-white shadow-2xl border-2 border-pink-400'
                    : 'bg-white border-2 border-gray-200'
                }`}
              >
                <div className={`p-8 ${pkg.highlighted ? 'bg-black/10' : 'bg-gray-50'}`}>
                  <h3 className={`text-2xl font-bold mb-2 ${pkg.highlighted ? 'text-white' : 'text-gray-900'}`}>
                    {pkg.name}
                  </h3>
                  <p className={pkg.highlighted ? 'text-pink-100' : 'text-gray-600'}>
                    {pkg.description}
                  </p>
                </div>
                <div className="p-8">
                  <div className={`mb-6 pb-6 border-b ${pkg.highlighted ? 'border-pink-200' : 'border-gray-200'}`}>
                    <p className={`text-sm ${pkg.highlighted ? 'text-pink-200' : 'text-gray-600'} mb-2`}>
                      Typical Cost
                    </p>
                    <p className={`text-2xl font-bold ${pkg.highlighted ? 'text-white' : 'text-pink-600'}`}>
                      {pkg.avgCost}
                    </p>
                  </div>
                  <div className="mb-6">
                    <p className={`text-sm font-bold mb-3 ${pkg.highlighted ? 'text-pink-200' : 'text-gray-600'}`}>
                      Typical Roles
                    </p>
                    <p className={pkg.highlighted ? 'text-white' : 'text-gray-900'}>
                      {pkg.roles}
                    </p>
                  </div>
                  <div className="space-y-2">
                    {pkg.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <span className={pkg.highlighted ? 'text-pink-200' : 'text-pink-600'}>✓</span>
                        <span className={pkg.highlighted ? 'text-pink-100' : 'text-gray-700'}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Breakdown */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Relocation Package Cost Breakdown
          </h2>

          <div className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-8 border-b md:border-b-0 md:border-r border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Pre-Relocation Costs</h3>
                <div className="space-y-4">
                  {[
                    { item: 'Visa & Immigration', cost: '£500 - £3,000' },
                    { item: 'Medical examinations', cost: '£200 - £800' },
                    { item: 'Documentation & legal', cost: '£300 - £1,500' },
                    { item: 'Pre-move consultations', cost: '£0 (included)' },
                  ].map((line, idx) => (
                    <div key={idx} className="flex justify-between items-center pb-4 border-b border-gray-100">
                      <span className="text-gray-700">{line.item}</span>
                      <span className="font-bold text-pink-600">{line.cost}</span>
                    </div>
                  ))}
                  <div className="pt-4 flex justify-between items-center font-bold text-lg">
                    <span>Subtotal</span>
                    <span className="text-pink-600">£1,000 - £6,300</span>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Moving & Accommodation</h3>
                <div className="space-y-4">
                  {[
                    { item: 'International flights', cost: '£1,000 - £5,000' },
                    { item: 'Household moving', cost: '£2,000 - £15,000' },
                    { item: 'Temporary housing', cost: '£3,000 - £8,000' },
                    { item: 'Housing deposit', cost: '£2,000 - £10,000' },
                  ].map((line, idx) => (
                    <div key={idx} className="flex justify-between items-center pb-4 border-b border-gray-100">
                      <span className="text-gray-700">{line.item}</span>
                      <span className="font-bold text-pink-600">{line.cost}</span>
                    </div>
                  ))}
                  <div className="pt-4 flex justify-between items-center font-bold text-lg">
                    <span>Subtotal</span>
                    <span className="text-pink-600">£8,000 - £38,000</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-pink-50 px-8 py-6 border-t-2 border-gray-200">
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold text-gray-900">Total Typical Relocation Cost</span>
                <span className="text-3xl font-black text-pink-600">£20,000 - £50,000+</span>
              </div>
              <p className="text-gray-600 mt-4">
                *Comprehensive packages cover most or all of these costs. Company size, job level, and destination impact final costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Employers Offer Packages */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Why Do Employers Offer Relocation Packages?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🎯',
                title: 'Attract Top Talent',
                description: 'Relocation packages help employers recruit the best professionals globally without geographic constraints.',
              },
              {
                icon: '⚡',
                title: 'Faster Onboarding',
                description: 'Reduces time spent on logistics, allowing employees to focus on their role and contribute faster.',
              },
              {
                icon: '🏆',
                title: 'Employee Retention',
                description: 'Shows investment in employee success, leading to higher satisfaction and longer tenure.',
              },
              {
                icon: '💪',
                title: 'Competitive Advantage',
                description: 'Relocation packages are a key differentiator in attracting high-demand professionals.',
              },
              {
                icon: '🌍',
                title: 'Global Expansion',
                description: 'Enables companies to build teams across multiple countries and locations efficiently.',
              },
              {
                icon: '📈',
                title: 'Business Growth',
                description: 'Relocation packages support business expansion by ensuring staffing in new markets.',
              },
            ].map((reason, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition">
                <div className="text-5xl mb-4">{reason.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{reason.title}</h3>
                <p className="text-gray-600 leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section id="browse" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Job Search by Relocation Package Level
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                level: 'Full Packages',
                description: 'Everything covered by employer',
                icon: '⭐⭐⭐⭐⭐',
                jobs: '600+ positions',
                link: '/jobs',
              },
              {
                level: 'Partial Packages',
                description: 'Most expenses covered',
                icon: '⭐⭐⭐⭐',
                jobs: '400+ positions',
                link: '/jobs',
              },
              {
                level: 'Visa + Housing',
                description: 'Core essentials included',
                icon: '⭐⭐⭐',
                jobs: '300+ positions',
                link: '/jobs',
              },
            ].map((cat, idx) => (
              <Link key={idx} href={cat.link} className="group">
                <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition h-full">
                  <div className="bg-gradient-to-br from-pink-500 to-red-500 p-8 text-white">
                    <div className="text-3xl mb-3">{cat.icon}</div>
                    <h3 className="text-2xl font-bold">{cat.level}</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">{cat.description}</p>
                    <p className="font-bold text-pink-600 text-lg">{cat.jobs}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Questions About Relocation Packages
          </h2>

          <div className="space-y-4">
            {[
              {
                q: 'What should I do if the package seems insufficient?',
                a: 'Negotiate! Relocation packages are often flexible. Discuss your specific needs with HR. Common negotiable items include housing allowance, flights for family, and settling allowance.',
              },
              {
                q: 'Are relocation packages the same in every country?',
                a: 'No. Packages vary significantly based on destination cost of living, company size, and job level. Middle East packages differ from European ones, which differ from Asia-Pacific.',
              },
              {
                q: 'What if I need to return to my home country?',
                a: 'Most packages only cover the initial relocation. Return travel is usually your responsibility, though some companies offer end-of-contract return flights.',
              },
              {
                q: 'Can I use relocation funds for different purposes?',
                a: 'Generally no—packages are specifically allocated. However, you can negotiate flexibility with HR. Some companies allow partial lump-sum payments instead of specific services.',
              },
              {
                q: 'What happens if I leave within 6 months?',
                a: 'Some companies require repayment of relocation costs if you leave within a specific period (often 2-3 years). Check your contract for clawback clauses.',
              },
              {
                q: 'Do self-employed or contract workers get relocation packages?',
                a: 'Rarely. Relocation packages are typically for permanent employees. Contractors may negotiate separate allowances.',
              },
            ].map((faq, idx) => (
              <details key={idx} className="group bg-white rounded-xl p-6 hover:bg-gray-100 transition border border-gray-200">
                <summary className="font-bold text-gray-900 cursor-pointer flex justify-between items-center">
                  {faq.q}
                  <span className="text-pink-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-gray-700">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-pink-600 to-red-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Find Jobs with Full Relocation Support
          </h2>
          <p className="text-xl text-pink-100 mb-8">
            Browse positions where employers handle the entire relocation process. No hidden costs. Complete support included.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/jobs"
              className="inline-flex items-center gap-2 bg-white text-pink-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-pink-50 transition shadow-lg"
            >
              Browse All Relocation Jobs
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
    </>
  )
}
