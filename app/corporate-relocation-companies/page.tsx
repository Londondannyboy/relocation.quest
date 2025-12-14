import { Metadata } from 'next'
import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Corporate Relocation Companies | Top Providers & Comparison',
  description: 'Find and compare top corporate relocation companies. Browse vetted providers offering housing, visa support, moving, and employee relocation services. Get quotes from multiple providers.',
  keywords: [
    'corporate relocation companies',
    'relocation companies',
    'corporate moving companies',
    'employee relocation companies',
    'best relocation companies',
    'relocation service providers',
    'corporate relocation firms',
  ],
  alternates: {
    canonical: 'https://relocation.quest/corporate-relocation-companies',
  },
  openGraph: {
    title: 'Compare Corporate Relocation Companies - Find Top Providers',
    description: 'Browse and compare vetted corporate relocation companies. Find the best provider for your employee relocation needs with detailed comparisons and quotes.',
    type: 'website',
    url: 'https://relocation.quest/corporate-relocation-companies',
  },
}

export default function CorporateRelocationCompaniesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-6">
              <span className="text-2xl">🏆</span>
              <span>Top Providers</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              Find Corporate Relocation Companies
            </h1>
            <p className="text-xl md:text-2xl text-indigo-100 mb-8 leading-relaxed">
              Compare vetted relocation companies offering comprehensive employee relocation services. Get quotes, compare features, and find the perfect provider for your needs.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#providers"
                className="inline-flex items-center gap-2 bg-white text-indigo-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-indigo-50 transition shadow-lg"
              >
                Browse Companies
              </Link>
              <Link
                href="#quote"
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition"
              >
                Get Quotes
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-12 bg-indigo-50 border-b border-indigo-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { label: 'Top Companies', value: '15+', icon: '⭐' },
              { label: 'Years Experience', value: '500+', icon: '📅' },
              { label: 'Countries Served', value: '120+', icon: '🌍' },
              { label: 'Relocations', value: '100k+', icon: '✈️' },
            ].map((stat, idx) => (
              <div key={idx}>
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-black text-indigo-600 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Compare Providers */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Why Compare Relocation Companies?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '💰',
                title: 'Cost Savings',
                description: 'Compare pricing from multiple providers. Prices vary significantly—saving 10-30% is common when you shop around.',
              },
              {
                icon: '🎯',
                title: 'Right Fit',
                description: 'Different companies specialize in different areas. Find providers with expertise in your destination countries.',
              },
              {
                icon: '⭐',
                title: 'Quality & Service',
                description: 'Reviews and ratings reveal which companies deliver excellent service and employee satisfaction.',
              },
              {
                icon: '🌐',
                title: 'Global Network',
                description: 'Check coverage in your target countries. Some excel globally, others focus on specific regions.',
              },
              {
                icon: '📋',
                title: 'Service Range',
                description: 'Compare what services each company offers—from full-service to à la carte options.',
              },
              {
                icon: '🤝',
                title: 'Support Level',
                description: 'Review support models—dedicated account managers make a difference for ongoing relocations.',
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

      {/* Provider Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Types of Corporate Relocation Companies
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                type: 'Global Full-Service Firms',
                icon: '🌐',
                examples: 'Mercer, Crown, Cartus, Allied Pickfords',
                description: 'Large multinational companies with services worldwide',
                pros: ['Comprehensive services', 'Global presence', 'Large capacity'],
                cons: ['Higher costs', 'Less personal touch', 'Bureaucratic'],
                bestFor: 'Large companies, international relocations',
              },
              {
                type: 'Regional Specialists',
                icon: '🎯',
                examples: 'Santa Fe, Mayflower, Bekins',
                description: 'Strong in specific regions or service areas',
                pros: ['Regional expertise', 'Competitive pricing', 'Specialized'],
                cons: ['Limited coverage', 'Less global reach'],
                bestFor: 'Relocations to specific regions',
              },
              {
                type: 'Destination Services',
                icon: '📍',
                examples: 'Brookfield, Relocation specialists',
                description: 'Focus on settling-in, housing, and local integration',
                pros: ['Local expertise', 'Personal service', 'Integration focus'],
                cons: ['Limited logistics', 'Regional only'],
                bestFor: 'Settling-in support, local expertise',
              },
              {
                type: 'Tech-Enabled Platforms',
                icon: '💻',
                examples: 'Nomad, MoveBlue, ReloPro',
                description: 'Digital platforms for relocation management',
                pros: ['Cost-effective', 'Transparent', 'Easy to use'],
                cons: ['Less personal', 'Limited support', 'Newer companies'],
                bestFor: 'Tech-savvy companies, cost-conscious relocations',
              },
            ].map((provider, idx) => (
              <div key={idx} className="bg-white rounded-2xl border-2 border-indigo-200 overflow-hidden">
                <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-6 text-white">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-4xl">{provider.icon}</div>
                    <h3 className="text-2xl font-bold">{provider.type}</h3>
                  </div>
                  {provider.examples && (
                    <p className="text-indigo-100 text-sm">Examples: {provider.examples}</p>
                  )}
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4">{provider.description}</p>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm font-bold text-green-600 mb-2">Strengths</p>
                      <ul className="space-y-1">
                        {provider.pros.map((pro, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                            <span className="text-green-600">✓</span>
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-red-600 mb-2">Limitations</p>
                      <ul className="space-y-1">
                        {provider.cons.map((con, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                            <span className="text-red-600">✗</span>
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-600">Best for:</p>
                    <p className="font-bold text-gray-900">{provider.bestFor}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section id="providers" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Corporate Relocation Companies Comparison
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-indigo-600 text-white">
                  <th className="border border-gray-300 px-4 py-3 text-left font-bold">Company</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-bold">Type</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-bold">Global Reach</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-bold">Price Range</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-bold">Best For</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-bold">Rating</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    name: 'Mercer',
                    type: 'Global Full-Service',
                    reach: '180+ countries',
                    price: '€25k-60k',
                    bestFor: 'Fortune 500, large relocations',
                    rating: '⭐⭐⭐⭐',
                  },
                  {
                    name: 'Cartus',
                    type: 'Global Full-Service',
                    reach: '160+ countries',
                    price: '€20k-55k',
                    bestFor: 'Large-scale programs',
                    rating: '⭐⭐⭐⭐',
                  },
                  {
                    name: 'Crown',
                    type: 'Global Full-Service',
                    reach: '150+ countries',
                    price: '€18k-50k',
                    bestFor: 'Flexible relocation programs',
                    rating: '⭐⭐⭐⭐',
                  },
                  {
                    name: 'Santa Fe',
                    type: 'Regional Specialist',
                    reach: 'North America focused',
                    price: '€10k-30k',
                    bestFor: 'US/Canada relocations',
                    rating: '⭐⭐⭐⭐',
                  },
                  {
                    name: 'Brookfield',
                    type: 'Destination Services',
                    reach: '100+ countries',
                    price: '€15k-45k',
                    bestFor: 'Settling-in support',
                    rating: '⭐⭐⭐⭐',
                  },
                  {
                    name: 'Allied Pickfords',
                    type: 'Global Full-Service',
                    reach: '120+ countries',
                    price: '€12k-40k',
                    bestFor: 'Cost-effective global',
                    rating: '⭐⭐⭐',
                  },
                ].map((company, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="border border-gray-300 px-4 py-3 font-bold text-indigo-600">
                      {company.name}
                    </td>
                    <td className="border border-gray-300 px-4 py-3">{company.type}</td>
                    <td className="border border-gray-300 px-4 py-3">{company.reach}</td>
                    <td className="border border-gray-300 px-4 py-3 font-semibold">{company.price}</td>
                    <td className="border border-gray-300 px-4 py-3">{company.bestFor}</td>
                    <td className="border border-gray-300 px-4 py-3">{company.rating}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-sm text-gray-600 mt-4">
            *Prices are approximate and vary based on scope, destination, and current market rates.
            Request quotes for accurate pricing.
          </p>
        </div>
      </section>

      {/* Selection Criteria */}
      <section className="py-20 bg-indigo-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            How to Select the Right Relocation Company
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                category: 'Coverage & Experience',
                factors: [
                  'Coverage in your target countries',
                  'Years of experience in relocations',
                  'Track record with your industry',
                  'Local partnerships and networks',
                  'Employee testimonials from similar moves',
                ],
              },
              {
                category: 'Service Offerings',
                factors: [
                  'Housing search and placement',
                  'Visa and immigration support',
                  'Moving and logistics services',
                  'Cultural integration programs',
                  'Customization options available',
                ],
              },
              {
                category: 'Pricing & Value',
                factors: [
                  'Transparent pricing structure',
                  'Volume discounts available',
                  'Hidden fees disclosed',
                  'Cost per relocation',
                  'ROI and cost-saving guarantees',
                ],
              },
              {
                category: 'Support & Quality',
                factors: [
                  'Dedicated account manager',
                  'Customer service availability',
                  '24/7 emergency support',
                  'Quality assurance processes',
                  'Client satisfaction ratings',
                ],
              },
            ].map((section, idx) => (
              <div key={idx} className="bg-white rounded-2xl border-2 border-indigo-200 p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{section.category}</h3>
                <ul className="space-y-3">
                  {section.factors.map((factor, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-indigo-600 font-bold mt-1">✓</span>
                      <span className="text-gray-700">{factor}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Red Flags */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Red Flags to Avoid
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              '❌ Companies that cannot provide references',
              '❌ Vague or unclear pricing',
              '❌ No clear scope of services defined',
              '❌ Poor online reviews or ratings',
              '❌ No emergency support available',
              '❌ Inability to customize services',
              '❌ Hidden fees or surprise charges',
              '❌ Lack of experience in your destination',
            ].map((flag, idx) => (
              <div key={idx} className="bg-red-50 border-l-4 border-red-600 p-4 rounded">
                <p className="text-gray-900 font-semibold">{flag}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {[
              {
                q: 'How do I get quotes from multiple companies?',
                a: 'Request quotes directly from company websites, or use comparison platforms. Provide your relocation scope (destination, number of employees, services needed) for accurate quotes.',
              },
              {
                q: 'What services should I definitely get quotes for?',
                a: 'Always request quotes on: visa support, housing, moving/logistics, and settling-in support. These are the largest cost drivers and most important services.',
              },
              {
                q: 'Do all companies offer the same services?',
                a: 'No. Compare service offerings carefully. Some specialize in housing, others in visa support. Find providers matching your specific needs.',
              },
              {
                q: 'How much should I expect to save by comparing?',
                a: 'Typical savings range from 10-30% when comparing multiple providers. Larger volume relocations get better discounts.',
              },
              {
                q: 'What questions should I ask relocation companies?',
                a: 'Ask about: experience in your destination, success rates, emergency support, hidden fees, client references, and customization options.',
              },
            ].map((faq, idx) => (
              <details key={idx} className="group bg-white rounded-xl p-6 hover:bg-gray-100 transition border border-gray-200">
                <summary className="font-bold text-gray-900 cursor-pointer flex justify-between items-center">
                  {faq.q}
                  <span className="text-indigo-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-gray-700">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="quote" className="py-20 bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Compare Relocation Companies?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Get quotes from multiple vetted providers. Compare pricing, services, and expertise for your relocation needs.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/services/corporate-relocation"
              className="inline-flex items-center gap-2 bg-white text-indigo-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-indigo-50 transition shadow-lg"
            >
              Get Multiple Quotes
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
