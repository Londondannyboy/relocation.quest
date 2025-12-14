import { Metadata } from 'next'
import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Jobs Relocation from UK | Work Abroad from the UK',
  description: 'Find relocation jobs for UK professionals. Opportunities to work abroad from UK with visa sponsorship and relocation packages. Move internationally with ease.',
  keywords: [
    'jobs relocation from uk',
    'relocation jobs uk',
    'work abroad from uk',
    'uk professionals jobs abroad',
    'move abroad jobs',
    'expat jobs for brits',
  ],
  alternates: {
    canonical: 'https://relocation.quest/jobs/relocation-from-uk',
  },
  openGraph: {
    title: 'Relocation Jobs for UK Professionals - Work Abroad',
    description: 'Find career opportunities for UK professionals looking to relocate. Jobs with visa support and relocation packages worldwide.',
    type: 'website',
    url: 'https://relocation.quest/jobs/relocation-from-uk',
  },
}

export default function RelocationFromUKPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      <section className="relative pt-32 pb-20 bg-gradient-to-br from-red-600 via-blue-600 to-red-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-6">
              <span className="text-2xl">🇬🇧</span>
              <span>For UK Professionals</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              Relocation Jobs for UK Professionals
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Opportunities for UK-based professionals to work abroad with full relocation support. Move internationally with visa sponsorship and relocation packages.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#opportunities"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition shadow-lg"
              >
                Explore Opportunities
              </Link>
              <Link
                href="/relocation-companies-uk"
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition"
              >
                UK Relocation Agents
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="opportunities" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Top Destinations for UK Professionals
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                country: 'Middle East (UAE/Saudi)',
                flag: '🌙',
                reasons: ['Tax-free salaries', 'Rapid career growth', 'Premium packages'],
                avgSalary: 'AED 150k - 500k+',
                visas: 'Employer sponsored',
              },
              {
                country: 'Singapore/Hong Kong',
                flag: '🏯',
                reasons: ['Finance hubs', 'Career advancement', 'Expat ecosystem'],
                avgSalary: 'SGD 80k - 200k+',
                visas: 'Tech visas available',
              },
              {
                country: 'Australia',
                flag: '🇦🇺',
                reasons: ['Skilled migration path', 'Quality of life', 'Strong job market'],
                avgSalary: 'AUD 80k - 180k+',
                visas: 'Points-based system',
              },
              {
                country: 'USA',
                flag: '🗽',
                reasons: ['Highest salaries', 'Innovation hubs', 'Career growth'],
                avgSalary: 'USD 100k - 250k+',
                visas: 'H-1B, L-1 available',
              },
              {
                country: 'Canada',
                flag: '🇨🇦',
                reasons: ['Path to residency', 'Work-life balance', 'Tech growth'],
                avgSalary: 'CAD 70k - 150k+',
                visas: 'Skilled worker paths',
              },
              {
                country: 'Europe',
                flag: '🇪🇺',
                reasons: ['Work-life balance', 'Quality lifestyle', 'Proximity to UK'],
                avgSalary: '€50k - 120k+',
                visas: 'Visa sponsorship',
              },
            ].map((dest, idx) => (
              <div key={idx} className="bg-white rounded-xl border-2 border-blue-200 p-6">
                <div className="text-4xl mb-2">{dest.flag}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{dest.country}</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="text-gray-600 font-bold mb-1">Why Go</p>
                    <ul className="space-y-1">
                      {dest.reasons.map((reason, i) => (
                        <li key={i} className="text-gray-700">• {reason}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-gray-600 font-bold mb-1">Salary</p>
                    <p className="text-blue-600 font-bold">{dest.avgSalary}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 font-bold mb-1">Visas</p>
                    <p className="text-gray-700">{dest.visas}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Key Advantages for UK Relocating Professionals
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'UK Advantages',
                items: [
                  'English language fluency valued globally',
                  'Strong educational credentials (Oxford/Cambridge)',
                  'UK professional experience highly respected',
                  'British work ethic appreciated internationally',
                  'Network in major global business hubs',
                  'Post-study work visas available for many countries',
                ],
              },
              {
                title: 'Understanding UK Relocation',
                items: [
                  'National Insurance contributions considerations',
                  'UK pension implications when abroad',
                  'Tax residency changes',
                  'UK property rental/sale if applicable',
                  'NHS to private healthcare transition',
                  'Family sponsorship options',
                ],
              },
            ].map((section, idx) => (
              <div key={idx} className="bg-white rounded-2xl border-2 border-blue-200 p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{section.title}</h3>
                <ul className="space-y-3">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-blue-600 font-bold mt-1">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Steps to Relocate from the UK
          </h2>

          <div className="space-y-6">
            {[
              { step: 1, title: 'Research & Plan', action: 'Choose destination, check visa requirements, research job market' },
              { step: 2, title: 'Prepare Documents', action: 'Get certified copies of qualifications, references, health checks' },
              { step: 3, title: 'Search & Apply', action: 'Use job boards, recruiters, company websites' },
              { step: 4, title: 'Interview & Negotiate', action: 'Discuss salary, benefits, relocation package' },
              { step: 5, title: 'Apply for Visa', action: 'Employer sponsors, medical exams, documentation' },
              { step: 6, title: 'Plan Move', action: 'Arrange housing, shipping, flights, settling' },
              { step: 7, title: 'Relocate & Settle', action: 'Move to destination, register locally, start job' },
            ].map((item) => (
              <div key={item.step} className="bg-white rounded-xl p-6 border-l-4 border-blue-600">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white font-bold">
                      {item.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-700">{item.action}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            FAQ for UK Professionals
          </h2>

          <div className="space-y-4">
            {[
              {
                q: 'Will relocating affect my UK pension?',
                a: 'Your pension continues but may be affected by non-residency. Consult a financial advisor about implications.',
              },
              {
                q: 'What about National Insurance contributions?',
                a: 'If working abroad, you may need to continue voluntary contributions for state pension. Check with HMRC.',
              },
              {
                q: 'Can I sell my UK property?',
                a: 'Yes. Decide based on your plans. Many UK professionals let out property as investment while abroad.',
              },
              {
                q: 'Will my UK qualifications be recognized?',
                a: 'Generally yes. UK education is respected globally. Some professions may require local certifications.',
              },
              {
                q: 'What about bringing family?',
                a: 'Most relocation jobs include family visas. Discuss with employer during negotiations.',
              },
            ].map((faq, idx) => (
              <details key={idx} className="group bg-white rounded-xl p-6 hover:bg-gray-100 transition border border-gray-200">
                <summary className="font-bold text-gray-900 cursor-pointer flex justify-between items-center">
                  {faq.q}
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-gray-700">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-red-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Relocate Abroad from the UK?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Explore international career opportunities with full relocation support.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/jobs"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition shadow-lg"
            >
              Browse All Jobs
            </Link>
            <Link
              href="/relocation-companies-uk"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition"
            >
              UK Relocation Companies
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
