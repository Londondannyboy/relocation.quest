import { Metadata } from 'next'
import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'What is Corporate Relocation? Complete Guide 2025',
  description: 'Learn everything about corporate relocation: what it is, how it works, costs, benefits, and what to expect when your company relocates you. Complete guide for employees and employers.',
  keywords: [
    'what is corporate relocation',
    'corporate relocation meaning',
    'corporate relocation definition',
    'how does corporate relocation work',
    'corporate relocation explained',
    'employee relocation',
    'job relocation',
  ],
  alternates: {
    canonical: 'https://relocation.quest/guides/what-is-corporate-relocation',
  },
  openGraph: {
    title: 'What is Corporate Relocation? Complete Guide',
    description: 'Comprehensive guide explaining corporate relocation, how it works, what\'s covered, and what to expect during the process.',
    type: 'article',
    url: 'https://relocation.quest/guides/what-is-corporate-relocation',
  },
}

export default function WhatIsCorporateRelocationPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <article className="pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
            Corporate Relocation Guide
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
            What is Corporate Relocation? Everything You Need to Know
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Corporate relocation is when a company moves an employee from one location to another for work purposes. This comprehensive guide explains how it works, what's typically covered, and what to expect during the relocation process.
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-500 pb-8 border-b border-gray-200">
            <span>📅 Updated December 2025</span>
            <span>⏱️ 8 min read</span>
          </div>
        </div>
      </article>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 pb-20">
        <div className="prose prose-lg max-w-none">
          {/* Definition Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Corporate Relocation Definition
            </h2>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl mb-6">
              <p className="text-lg text-gray-800 font-medium mb-0">
                <strong>Corporate relocation</strong> is the process where an employer moves an employee from their current work location to a different office, city, or country to fulfill a business need. The company typically provides financial support and logistical assistance to facilitate the move.
              </p>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Corporate relocations can be domestic (within the same country) or international (cross-border). They range from moving an employee to a nearby city to transferring executive talent across continents. The scope and support provided vary based on the company's relocation policy, the employee's level, and the distance of the move.
            </p>
          </section>

          {/* Why Companies Relocate Employees */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Why Do Companies Relocate Employees?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Business Expansion',
                  description: 'Opening new offices or markets and need experienced employees to lead the charge',
                },
                {
                  title: 'Filling Critical Roles',
                  description: 'Specialized positions that can\'t be filled locally with qualified candidates',
                },
                {
                  title: 'Career Development',
                  description: 'Providing growth opportunities for high-potential employees through international experience',
                },
                {
                  title: 'Knowledge Transfer',
                  description: 'Moving experts to train teams or implement processes in new locations',
                },
                {
                  title: 'Office Consolidation',
                  description: 'Merging offices or restructuring operations requires relocating staff',
                },
                {
                  title: 'Project Assignments',
                  description: 'Temporary relocations for specific projects or initiatives',
                },
              ].map((reason, idx) => (
                <div key={idx} className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-2">{reason.title}</h3>
                  <p className="text-gray-600 text-sm">{reason.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* What's Typically Covered */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              What Does a Corporate Relocation Package Include?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              A comprehensive corporate relocation package typically covers most or all of the following:
            </p>

            <div className="space-y-6">
              {[
                {
                  category: 'Moving & Logistics',
                  icon: '📦',
                  items: [
                    'Professional moving company services',
                    'Packing and unpacking assistance',
                    'Transportation of household goods',
                    'Vehicle shipping (for international moves)',
                    'Storage during transition',
                  ],
                },
                {
                  category: 'Housing Support',
                  icon: '🏡',
                  items: [
                    'Home-finding trips to the new location',
                    'Temporary accommodation (30-90 days)',
                    'Real estate agent fees',
                    'Rental deposit or home purchase assistance',
                    'Home sale assistance for current residence',
                  ],
                },
                {
                  category: 'Immigration & Legal',
                  icon: '📋',
                  items: [
                    'Work visa and permit processing',
                    'Dependent visa applications',
                    'Legal documentation and translation',
                    'Immigration lawyer fees',
                    'Compliance and regulatory support',
                  ],
                },
                {
                  category: 'Family Support',
                  icon: '👨‍👩‍👧‍👦',
                  items: [
                    'Spouse career transition assistance',
                    'School search and enrollment for children',
                    'Cultural and language training',
                    'Pet relocation services',
                    'Family orientation programs',
                  ],
                },
                {
                  category: 'Financial Assistance',
                  icon: '💰',
                  items: [
                    'Cost of living allowance (COLA)',
                    'Tax equalization or gross-up',
                    'Moving expense reimbursement',
                    'Currency exchange support',
                    'Financial planning consultation',
                  ],
                },
              ].map((section, idx) => (
                <div key={idx} className="bg-white border-2 border-gray-200 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl">{section.icon}</span>
                    <h3 className="text-2xl font-bold text-gray-900">{section.category}</h3>
                  </div>
                  <ul className="space-y-2">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">✓</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Cost Breakdown */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              How Much Does Corporate Relocation Cost?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Corporate relocation costs vary significantly based on distance, location, and employee level:
            </p>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl mb-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-black text-blue-600 mb-2">£10,000-£20,000</div>
                  <div className="font-semibold text-gray-900 mb-1">Domestic (UK)</div>
                  <div className="text-sm text-gray-600">Entry to mid-level employees</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-indigo-600 mb-2">£40,000-£100,000</div>
                  <div className="font-semibold text-gray-900 mb-1">International</div>
                  <div className="text-sm text-gray-600">Mid to senior-level employees</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-purple-600 mb-2">£150,000+</div>
                  <div className="font-semibold text-gray-900 mb-1">Executive</div>
                  <div className="text-sm text-gray-600">C-suite and senior leadership</div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-xl">
              <p className="text-gray-800 font-medium">
                <strong>Note:</strong> These are typical ranges. Actual costs depend on family size, destination country, housing market, and the comprehensiveness of the relocation package.
              </p>
            </div>
          </section>

          {/* Types of Corporate Relocation */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Types of Corporate Relocation
            </h2>

            <div className="space-y-6">
              {[
                {
                  type: 'Permanent Relocation',
                  description: 'Employee moves indefinitely to the new location with full relocation package including home sale/purchase assistance.',
                  duration: 'Permanent',
                },
                {
                  type: 'Long-Term Assignment',
                  description: 'Typically 1-5 years. Company provides ongoing support like housing, cost of living adjustments, and home leave trips.',
                  duration: '1-5 years',
                },
                {
                  type: 'Short-Term Assignment',
                  description: 'Usually 3-12 months. Less comprehensive package, often with serviced accommodation and allowances.',
                  duration: '3-12 months',
                },
                {
                  type: 'Commuter Assignment',
                  description: 'Employee works in new location during the week but returns home on weekends. Company covers accommodation and travel.',
                  duration: 'Variable',
                },
                {
                  type: 'Lump Sum Relocation',
                  description: 'Company provides a fixed amount and employee manages their own relocation. More flexibility but more responsibility.',
                  duration: 'Any',
                },
              ].map((type, idx) => (
                <div key={idx} className="bg-gray-50 border-l-4 border-blue-600 p-6 rounded-r-xl">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{type.type}</h3>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                      {type.duration}
                    </span>
                  </div>
                  <p className="text-gray-700">{type.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Process Timeline */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Corporate Relocation Process Timeline
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Here's what to expect during a typical international corporate relocation:
            </p>

            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>
              <div className="space-y-8">
                {[
                  {
                    phase: 'Month 1-2: Decision & Planning',
                    tasks: [
                      'Receive and review relocation offer',
                      'Initial needs assessment',
                      'Begin visa/immigration process',
                      'Home-finding trip to new location',
                    ],
                  },
                  {
                    phase: 'Month 2-3: Pre-Move',
                    tasks: [
                      'Finalize housing in new location',
                      'Arrange schools for children',
                      'Organize moving company',
                      'Begin cultural/language training',
                    ],
                  },
                  {
                    phase: 'Month 3-4: The Move',
                    tasks: [
                      'Pack and ship household goods',
                      'Travel to new location',
                      'Move into temporary accommodation',
                      'Begin orientation programs',
                    ],
                  },
                  {
                    phase: 'Month 4-6: Settling In',
                    tasks: [
                      'Move into permanent housing',
                      'Children start school',
                      'Set up local services and accounts',
                      'Ongoing cultural adaptation support',
                    ],
                  },
                ].map((timeline, idx) => (
                  <div key={idx} className="relative pl-20">
                    <div className="absolute left-0 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {idx + 1}
                    </div>
                    <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">{timeline.phase}</h3>
                      <ul className="space-y-2">
                        {timeline.tasks.map((task, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-blue-600 mt-1">•</span>
                            <span className="text-gray-700">{task}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQs */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {[
                {
                  q: 'Can I negotiate my relocation package?',
                  a: 'Yes! Relocation packages are often negotiable, especially for senior roles. Common negotiation points include temporary housing duration, home-finding trips, spousal career support, and lump sum amounts.',
                },
                {
                  q: 'What if I resign after relocating?',
                  a: 'Most companies include a "clawback" clause requiring you to repay some or all relocation costs if you leave within a certain period (typically 1-2 years). Review your relocation agreement carefully.',
                },
                {
                  q: 'Does corporate relocation cover my family?',
                  a: 'Most comprehensive packages cover spouse and dependent children, including visa processing, school search, and cultural training. The level of support depends on your company\'s policy.',
                },
                {
                  q: 'How long does the relocation process take?',
                  a: 'Domestic relocations typically take 1-3 months. International relocations usually require 3-6 months due to visa processing, housing arrangements, and other logistics.',
                },
                {
                  q: 'Are relocation expenses taxable?',
                  a: 'In the UK, most relocation expenses up to £8,000 are tax-free. Amounts above this are typically taxable. Many companies offer "tax gross-up" to cover the employee\'s tax liability.',
                },
              ].map((faq, idx) => (
                <details key={idx} className="group bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition">
                  <summary className="font-bold text-gray-900 cursor-pointer flex justify-between items-center">
                    {faq.q}
                    <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="mt-4 text-gray-700 leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>
          </section>

          {/* Bottom CTA */}
          <section className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">
              Need Corporate Relocation Support?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Whether you're an employee being relocated or a company managing relocations, we can help.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/services/employee-relocation"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition"
              >
                Employee Relocation Services
              </Link>
              <Link
                href="/services/corporate-relocation"
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition"
              >
                Corporate Relocation Solutions
              </Link>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  )
}
