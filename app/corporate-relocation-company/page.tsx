import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Corporate Relocation Company | Find Professional Movers',
  description: 'Find the best corporate relocation company for your business. Compare services, pricing, and features. Get expert guidance on choosing a relocation provider.',
  keywords: [
    'corporate relocation company',
    'relocation company',
    'corporate moving company',
    'relocation service provider',
    'best relocation company',
    'corporate relocation services',
  ],
  alternates: {
    canonical: 'https://relocation.quest/corporate-relocation-company',
  },
  openGraph: {
    title: 'Corporate Relocation Company - Professional Services',
    description: 'Find and compare top corporate relocation companies. Expert providers for managing employee relocations, housing, and international moves.',
    type: 'website',
    url: 'https://relocation.quest/corporate-relocation-company',
  },
}

export default function CorporateRelocationCompanyPage() {
  return (
    <>
      

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-6">
              <span className="text-2xl">🏢</span>
              <span>Professional Services</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              Corporate Relocation Company
            </h1>
            <p className="text-xl md:text-2xl text-cyan-100 mb-8 leading-relaxed">
              Everything you need to know about hiring a professional corporate relocation company. Understand services, costs, and how to choose the right provider for your organization.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#overview"
                className="inline-flex items-center gap-2 bg-white text-teal-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-teal-50 transition shadow-lg"
              >
                Learn More
              </Link>
              <Link
                href="/corporate-relocation-companies"
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition"
              >
                Compare Companies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is a Corporate Relocation Company */}
      <section id="overview" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            What is a Corporate Relocation Company?
          </h2>

          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              A corporate relocation company is a professional service provider specializing in managing employee relocations for businesses. These companies handle the complete relocation process—from housing searches and visa support to moving logistics and settling-in assistance.
            </p>

            <div className="bg-white rounded-2xl border-2 border-teal-200 p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Core Functions</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  'Manage employee relocations (domestic & international)',
                  'Coordinate housing searches and placements',
                  'Handle visa sponsorship and immigration support',
                  'Arrange moving logistics and household shipping',
                  'Support employee settling-in and integration',
                  'Manage costs and relocation budgets',
                  'Provide ongoing support during transition',
                  'Handle compliance and legal requirements',
                ].map((func, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="text-teal-600 font-bold mt-1">✓</span>
                    <span className="text-gray-700">{func}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-teal-50 border-l-4 border-teal-600 rounded p-6">
              <h3 className="font-bold text-teal-900 mb-3">Key Distinction</h3>
              <p className="text-gray-800">
                Corporate relocation companies differ from traditional moving companies. While movers handle only logistics, corporate relocation companies provide comprehensive solutions including housing, visas, legal support, and employee integration—all crucial for successful international assignments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Companies Use Relocation Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Why Businesses Hire Corporate Relocation Companies
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '⚡',
                title: 'Time Savings',
                description: 'Free up internal HR resources. Relocation companies handle logistics, allowing your team to focus on core business operations.',
                impact: 'Save 3+ months per relocation',
              },
              {
                icon: '💰',
                title: 'Cost Control',
                description: 'Reduce overall relocation expenses through vendor negotiations and bulk discounts. Professional companies optimize spending.',
                impact: 'Save 25-40% on costs',
              },
              {
                icon: '😊',
                title: 'Employee Satisfaction',
                description: 'Comprehensive support increases employee satisfaction and retention. Shows investment in employee wellbeing.',
                impact: '90% satisfaction rate',
              },
              {
                icon: '📋',
                title: 'Legal Compliance',
                description: 'Ensure compliance with immigration, tax, and employment laws. Avoid costly penalties and compliance issues.',
                impact: 'Zero compliance risk',
              },
              {
                icon: '🚀',
                title: 'Faster Productivity',
                description: 'Employees settle faster and become productive sooner. Reduced downtime and quicker ROI on hiring investment.',
                impact: '2-3 months faster',
              },
              {
                icon: '🌐',
                title: 'Scalability',
                description: 'Easily manage multiple relocations simultaneously. Professional companies handle volume without quality loss.',
                impact: 'Handle 100+ moves/year',
              },
            ].map((reason, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition">
                <div className="text-5xl mb-4">{reason.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{reason.title}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{reason.description}</p>
                <div className="bg-teal-50 px-4 py-2 rounded-lg">
                  <p className="text-teal-700 font-bold text-sm">{reason.impact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Types of Services Offered
          </h2>

          <div className="space-y-8">
            {[
              {
                category: 'Housing & Accommodation',
                icon: '🏠',
                services: [
                  'Property search and selection',
                  'Lease negotiation',
                  'Temporary accommodation (bridging)',
                  'Furnished/unfurnished options',
                  'School district research',
                  'Deposit guarantee programs',
                ],
              },
              {
                category: 'Immigration & Visas',
                icon: '📋',
                services: [
                  'Work visa sponsorship',
                  'Permit applications',
                  'Medical examinations',
                  'Family visa support',
                  'Documentation services',
                  'Immigration law compliance',
                ],
              },
              {
                category: 'Moving & Logistics',
                icon: '✈️',
                services: [
                  'International shipping',
                  'Household goods moving',
                  'Packing & unpacking',
                  'Storage solutions',
                  'Vehicle relocation',
                  'Pet transportation',
                ],
              },
              {
                category: 'Settling-In Support',
                icon: '🤝',
                services: [
                  'Cultural orientation',
                  'Language training',
                  'Banking & utilities setup',
                  'School placement',
                  'Community integration',
                  'Ongoing mentorship',
                ],
              },
            ].map((category, idx) => (
              <div key={idx} className="bg-white rounded-2xl border-2 border-teal-200 overflow-hidden">
                <div className="bg-gradient-to-r from-teal-500 to-cyan-600 p-6 text-white">
                  <div className="flex items-center gap-3">
                    <div className="text-4xl">{category.icon}</div>
                    <h3 className="text-2xl font-bold">{category.category}</h3>
                  </div>
                </div>
                <div className="p-8">
                  <div className="grid md:grid-cols-2 gap-4">
                    {category.services.map((service, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <span className="text-teal-600 font-bold">✓</span>
                        <span className="text-gray-700">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Structure */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Relocation Company Pricing Models
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                model: 'Full-Service Packages',
                icon: '⭐⭐⭐⭐⭐',
                costRange: '£20k - £60k+ per employee',
                includes: ['All services', 'Complete support', 'Customizable', 'Dedicated manager'],
                bestFor: 'International, executive, family relocations',
              },
              {
                model: 'À La Carte Services',
                icon: '⭐⭐⭐⭐',
                costRange: '£5k - £25k per service',
                includes: ['Pick services needed', 'Flexible', 'Cost-effective', 'Mix & match'],
                bestFor: 'Domestic, selective support, cost control',
              },
              {
                model: 'Managed Services Agreement',
                icon: '⭐⭐⭐⭐',
                costRange: '£15k - £40k avg with volume discounts',
                includes: ['Pre-negotiated rates', 'Bulk discounts', 'Annual contract', 'Volume pricing'],
                bestFor: 'Companies with 10+ annual relocations',
              },
            ].map((pricing, idx) => (
              <div key={idx} className="bg-white rounded-2xl border-2 border-teal-200 overflow-hidden">
                <div className="bg-teal-50 p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pricing.model}</h3>
                  <p className="text-lg text-teal-700 font-bold">{pricing.icon}</p>
                </div>
                <div className="p-6">
                  <div className="mb-6">
                    <p className="text-sm font-bold text-gray-600 mb-1">Cost Range</p>
                    <p className="text-teal-600 font-bold text-lg">{pricing.costRange}</p>
                  </div>
                  <div className="mb-6">
                    <p className="text-sm font-bold text-gray-600 mb-2">Includes</p>
                    <ul className="space-y-1">
                      {pricing.includes.map((item, i) => (
                        <li key={i} className="text-gray-700 text-sm">• {item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-600 font-bold mb-1">Best For</p>
                    <p className="text-gray-900 font-semibold">{pricing.bestFor}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 max-w-4xl mx-auto bg-teal-50 border-l-4 border-teal-600 rounded p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Cost Breakdown Example</h3>
            <p className="text-gray-700 mb-4">Typical international relocation for family:</p>
            <div className="space-y-3">
              {[
                { item: 'Visa & Immigration', cost: '£1,000 - £3,000' },
                { item: 'Housing (search & placement)', cost: '£3,000 - £8,000' },
                { item: 'Moving & Logistics', cost: '£5,000 - £15,000' },
                { item: 'Temporary Housing', cost: '£2,000 - £5,000' },
                { item: 'Settling-in Support', cost: '£2,000 - £4,000' },
                { item: 'Contingency', cost: '£2,000 - £5,000' },
              ].map((line, idx) => (
                <div key={idx} className="flex justify-between items-center pb-2 border-b border-teal-200">
                  <span className="text-gray-800">{line.item}</span>
                  <span className="font-bold text-teal-700">{line.cost}</span>
                </div>
              ))}
              <div className="flex justify-between items-center pt-3 font-bold text-lg">
                <span className="text-gray-900">Total Estimated</span>
                <span className="text-teal-600">£15k - £40k</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Selection Criteria */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            How to Choose a Corporate Relocation Company
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              {
                criterion: 'Experience & Track Record',
                factors: [
                  'Years in business',
                  'Experience with your company size',
                  'Success in target destinations',
                  'Client testimonials & references',
                  'Industry awards & recognition',
                  'Case studies from similar moves',
                ],
              },
              {
                criterion: 'Service Quality',
                factors: [
                  'Dedicated account manager',
                  'Response time & support',
                  '24/7 emergency availability',
                  'Customizable service options',
                  'Quality assurance processes',
                  'Client satisfaction ratings',
                ],
              },
              {
                criterion: 'Global Network',
                factors: [
                  'Coverage in target countries',
                  'Local partnerships & expertise',
                  'Multilingual support staff',
                  'International vendor relationships',
                  'Ability to handle complexity',
                  'Regional specialization',
                ],
              },
              {
                criterion: 'Financial & Transparency',
                factors: [
                  'Clear, transparent pricing',
                  'No hidden fees',
                  'Volume discounts available',
                  'Contract flexibility',
                  'Financial stability',
                  'Insurance & liability coverage',
                ],
              },
            ].map((section, idx) => (
              <div key={idx} className="bg-white rounded-2xl border-2 border-teal-200 p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{section.criterion}</h3>
                <ul className="space-y-3">
                  {section.factors.map((factor, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-teal-600 font-bold mt-1">✓</span>
                      <span className="text-gray-700">{factor}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto bg-red-50 border-l-4 border-red-600 rounded p-8">
            <h3 className="text-2xl font-bold text-red-900 mb-4">Red Flags to Avoid</h3>
            <ul className="space-y-2">
              {[
                'Cannot provide client references',
                'Unclear or vague pricing',
                'Unresponsive to inquiries',
                'No specialized industry experience',
                'Poor online reviews',
                'Unwilling to customize services',
              ].map((flag, idx) => (
                <li key={idx} className="flex items-center gap-2 text-red-900">
                  <span className="font-bold">✗</span>
                  {flag}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Corporate Relocation Company FAQ
          </h2>

          <div className="space-y-4">
            {[
              {
                q: 'What is the difference between a relocation company and a moving company?',
                a: 'Moving companies handle logistics only. Relocation companies provide comprehensive services including housing, visas, settling-in support, and employee integration—essential for international assignments.',
              },
              {
                q: 'How much should I budget for relocation?',
                a: 'Budgets vary: domestic £5k-£15k, international £15k-£50k+, executive relocations £30k-£100k+. Costs depend on destination, family size, and services included.',
              },
              {
                q: 'Can smaller companies use relocation companies?',
                a: 'Yes. Most companies offer flexible packages for companies of all sizes. À la carte services allow you to choose what you need.',
              },
              {
                q: 'What if relocation fails or employee wants to return?',
                a: 'Most contracts address early departure. Some companies offer return-move services or insurance. Always clarify policy in contract.',
              },
              {
                q: 'How are relocation costs handled - company vs employee?',
                a: 'Typically company covers all or most costs. Tax treatment varies by country. Consult a tax advisor on what is deductible vs taxable income.',
              },
            ].map((faq, idx) => (
              <details key={idx} className="group bg-white rounded-xl p-6 hover:bg-gray-100 transition border border-gray-200">
                <summary className="font-bold text-gray-900 cursor-pointer flex justify-between items-center">
                  {faq.q}
                  <span className="text-teal-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-gray-700">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-teal-600 to-cyan-700 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Partner with a Corporate Relocation Company?
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Find the right relocation company for your business. Compare services, pricing, and expertise to make the best choice.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/corporate-relocation-companies"
              className="inline-flex items-center gap-2 bg-white text-teal-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-teal-50 transition shadow-lg"
            >
              Compare Companies
            </Link>
            <Link
              href="/services/corporate-relocation"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition"
            >
              Service Details
            </Link>
          </div>
        </div>
      </section>

      </>
  )
}
