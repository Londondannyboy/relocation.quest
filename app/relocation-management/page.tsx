import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Relocation Management | Corporate Employee Mobility Programs',
  description: 'Comprehensive relocation management services for corporate employee mobility programs. Manage multiple relocations, reduce costs, and improve employee satisfaction.',
  keywords: [
    'relocation management',
    'employee relocation management',
    'corporate relocation management',
    'mobility management',
    'relocation program management',
  ],
  alternates: {
    canonical: 'https://relocation.quest/relocation-management',
  },
  openGraph: {
    title: 'Relocation Management - Corporate Mobility Solutions',
    description: 'Strategic relocation management for corporate mobility programs. Manage employee relocations efficiently across multiple locations and countries.',
    type: 'website',
    url: 'https://relocation.quest/relocation-management',
  },
}

export default function RelocationManagementPage() {
  return (
    <>

      <section className="relative pt-32 pb-20 bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-6">
              <span className="text-2xl">📊</span>
              <span>Strategic Management</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              Relocation Management
            </h1>
            <p className="text-xl md:text-2xl text-indigo-100 mb-8 leading-relaxed">
              Strategic relocation management for corporate mobility programs. Manage multiple employee relocations efficiently while controlling costs and maximizing employee satisfaction.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#services"
                className="inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-purple-50 transition shadow-lg"
              >
                Learn More
              </Link>
              <Link
                href="/services/corporate-relocation"
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition"
              >
                Service Details
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-purple-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            What is Relocation Management?
          </h2>

          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Relocation management is the strategic oversight and coordination of employee mobility programs. It involves managing multiple relocations simultaneously, controlling costs, ensuring compliance, and maintaining employee satisfaction across domestic and international moves.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl border-2 border-purple-200 p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Core Components</h3>
                <ul className="space-y-3">
                  {[
                    'Policy development & compliance',
                    'Vendor management & negotiations',
                    'Cost tracking & budgeting',
                    'Employee support & satisfaction',
                    'Technology & systems',
                    'Program analytics & reporting',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-purple-600 font-bold mt-1">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl border-2 border-purple-200 p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Benefits</h3>
                <ul className="space-y-3">
                  {[
                    'Reduce relocation costs 25-40%',
                    'Improve employee satisfaction',
                    'Ensure legal compliance',
                    'Streamline processes',
                    'Better employee retention',
                    'Faster productivity',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-purple-600 font-bold mt-1">→</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Relocation Management Services
          </h2>

          <div className="space-y-8">
            {[
              {
                service: 'Policy Development',
                icon: '📋',
                description: 'Create and maintain relocation policies aligned with business strategy',
                includes: ['Policy creation', 'Compliance review', 'Regular updates', 'Employee communication'],
              },
              {
                service: 'Vendor Management',
                icon: '🤝',
                description: 'Negotiate and manage relationships with relocation service providers',
                includes: ['Vendor selection', 'Rate negotiation', 'SLA management', 'Performance tracking'],
              },
              {
                service: 'Cost Management',
                icon: '💰',
                description: 'Control and optimize relocation expenses across the program',
                includes: ['Budget tracking', 'Cost analysis', 'Savings opportunities', 'Reporting'],
              },
              {
                service: 'Employee Support',
                icon: '👥',
                description: 'Ensure employees receive support and maintain satisfaction',
                includes: ['Employee assistance', 'Issue resolution', 'Feedback collection', 'Support coordination'],
              },
            ].map((svc, idx) => (
              <div key={idx} className="bg-white rounded-2xl border-2 border-purple-200 overflow-hidden">
                <div className="bg-gradient-to-r from-purple-500 to-indigo-600 p-6 text-white">
                  <div className="flex items-center gap-3">
                    <div className="text-4xl">{svc.icon}</div>
                    <h3 className="text-2xl font-bold">{svc.service}</h3>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-gray-700 mb-6">{svc.description}</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {svc.includes.map((item, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="text-purple-600 font-bold">•</span>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            ROI of Relocation Management
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                metric: '25-40%',
                label: 'Cost Reduction',
                description: 'Through vendor negotiation and process optimization',
              },
              {
                metric: '90%',
                label: 'Employee Satisfaction',
                description: 'With proper relocation management and support',
              },
              {
                metric: '3 months',
                label: 'Time Savings',
                description: 'Faster employee productivity and ROI',
              },
            ].map((metric, idx) => (
              <div key={idx} className="bg-white rounded-2xl border-2 border-purple-200 p-8 text-center">
                <div className="text-5xl font-black text-purple-600 mb-2">{metric.metric}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{metric.label}</h3>
                <p className="text-gray-600">{metric.description}</p>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto bg-purple-50 border-l-4 border-purple-600 rounded p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Outcomes</h3>
            <ul className="grid md:grid-cols-2 gap-4">
              {[
                'Reduced relocation spending',
                'Improved employee retention',
                'Faster time-to-productivity',
                'Better compliance',
                'Scalable operations',
                'Data-driven decisions',
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="text-purple-600 font-bold">✓</span>
                  <span className="text-gray-900">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Relocation Management FAQ
          </h2>

          <div className="space-y-4">
            {[
              {
                q: 'When should a company implement relocation management?',
                a: 'When relocating 5+ employees annually or managing multiple international assignments. Even smaller programs benefit from structured management.',
              },
              {
                q: 'How does relocation management reduce costs?',
                a: 'Through vendor negotiations, policy optimization, eliminating duplicate services, tracking expenses, and identifying savings opportunities.',
              },
              {
                q: 'What technology is used in relocation management?',
                a: 'Specialized software tracks relocations, manages vendors, tracks costs, maintains compliance, and provides reporting and analytics.',
              },
              {
                q: 'How is success measured in relocation management?',
                a: 'Key metrics include cost per relocation, employee satisfaction scores, time-to-productivity, and retention rates of relocated employees.',
              },
            ].map((faq, idx) => (
              <details key={idx} className="group bg-white rounded-xl p-6 hover:bg-gray-100 transition border border-gray-200">
                <summary className="font-bold text-gray-900 cursor-pointer flex justify-between items-center">
                  {faq.q}
                  <span className="text-purple-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-gray-700">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-purple-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Optimize Your Relocation Program
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Strategic relocation management delivers cost savings, employee satisfaction, and business results.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/services/corporate-relocation"
              className="inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-purple-50 transition shadow-lg"
            >
              Learn About Services
            </Link>
            <Link
              href="/corporate-relocation-companies"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition"
            >
              Find Providers
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
