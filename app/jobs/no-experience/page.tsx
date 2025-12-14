import { Metadata } from 'next'
import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Relocation Jobs No Experience | Entry-Level Opportunities Abroad',
  description: 'Find entry-level relocation jobs that don\'t require experience. Graduate programs, trainee positions, and junior roles with visa sponsorship and relocation support.',
  keywords: [
    'jobs no experience relocation',
    'entry level relocation jobs',
    'no experience jobs abroad',
    'junior jobs relocation',
    'graduate jobs relocation',
    'trainee positions relocation',
    'first job abroad',
  ],
  alternates: {
    canonical: 'https://relocation.quest/jobs/no-experience',
  },
  openGraph: {
    title: 'Entry-Level Relocation Jobs - No Experience Required',
    description: 'Find your first job abroad. Graduate programs, trainee positions, and entry-level roles with relocation support.',
    type: 'website',
    url: 'https://relocation.quest/jobs/no-experience',
  },
}

export default function NoExperienceJobsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-6">
              <span className="text-2xl">🚀</span>
              <span>Entry-Level Opportunities</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              Relocation Jobs No Experience Required
            </h1>
            <p className="text-xl md:text-2xl text-pink-100 mb-8 leading-relaxed">
              Start your international career with entry-level positions. Graduate programs, trainee roles, and junior positions with relocation support and visa sponsorship.</p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#opportunities"
                className="inline-flex items-center gap-2 bg-white text-pink-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-pink-50 transition shadow-lg"
              >
                Explore Opportunities
              </Link>
              <Link
                href="/jobs"
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition"
              >
                All Relocation Jobs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Entry-Level Abroad */}
      <section className="py-20 bg-pink-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Why Start Your Career Abroad?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🌍',
                title: 'Global Experience',
                description: 'Gain international experience early in your career. Boost resume and build global network from day one.',
              },
              {
                icon: '💰',
                title: 'Relocation Support',
                description: 'Employers cover relocation costs, housing, visas, and flights. Start your career without financial burden.',
              },
              {
                icon: '🚀',
                title: 'Career Acceleration',
                description: 'Fast-track your growth. International roles develop skills and perspective valued globally.',
              },
              {
                icon: '🤝',
                title: 'Mentor & Training',
                description: 'Entry-level programs include mentorship, training, and support. Perfect for career starters.',
              },
              {
                icon: '🎓',
                title: 'Professional Network',
                description: 'Build international network while learning. Meet professionals from around the world.',
              },
              {
                icon: '🏆',
                title: 'Competitive Advantage',
                description: 'International early-career experience sets you apart from peers. Stand out in job market.',
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

      {/* Types of Entry-Level Programs */}
      <section id="opportunities" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Entry-Level Program Types
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                type: 'Graduate Programs',
                icon: '🎓',
                description: 'Structured 2-year programs for recent university graduates',
                typical: 'Big firms (finance, consulting, tech)',
                salary: '£25k - £40k',
                countries: 'UK, US, Singapore, Hong Kong',
                timeline: 'Sept-Oct applications',
              },
              {
                type: 'Trainee Positions',
                icon: '🏢',
                description: 'Entry-level roles with built-in training and support',
                typical: 'Large multinationals',
                salary: '£20k - £35k',
                countries: 'Worldwide',
                timeline: 'Rolling applications',
              },
              {
                type: 'Internships (Paid)',
                icon: '💼',
                description: 'Paid internships with potential permanent conversion',
                typical: 'Tech, finance, consulting',
                salary: '£15k - £25k',
                countries: 'Tech hubs globally',
                timeline: 'Year-round',
              },
              {
                type: 'Junior Professional Roles',
                icon: '🚀',
                description: 'Entry-level permanent positions in growing sectors',
                typical: 'Startups, growth companies',
                salary: '£22k - £38k',
                countries: 'Expanding markets',
                timeline: 'Year-round',
              },
              {
                type: 'Teaching Programs',
                icon: '🎓',
                description: 'TEFL/TESOL certified English teaching positions',
                typical: 'International schools, language centers',
                salary: '£18k - £32k',
                countries: 'Asia, Middle East, Europe',
                timeline: 'Aug-Sept',
              },
              {
                type: 'Au Pair/Care Roles',
                icon: '👨‍👩‍👧',
                description: 'Live-in childcare with pocket money and benefits',
                typical: 'Wealthy families',
                salary: '£400 - £600/month',
                countries: 'Europe, Middle East, Australia',
                timeline: 'Year-round',
              },
            ].map((program, idx) => (
              <div key={idx} className="bg-white rounded-2xl border-2 border-pink-200 overflow-hidden">
                <div className="bg-gradient-to-r from-pink-500 to-red-500 p-6 text-white">
                  <div className="flex items-center gap-3">
                    <div className="text-4xl">{program.icon}</div>
                    <h3 className="text-2xl font-bold">{program.type}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 text-sm mb-4">{program.description}</p>
                  <div className="space-y-2 text-sm">
                    <div>
                      <p className="text-gray-600 font-bold">Common in</p>
                      <p className="text-gray-900">{program.typical}</p>
                    </div>
                    <div>
                      <p className="text-gray-600 font-bold">Salary</p>
                      <p className="text-pink-600 font-bold">{program.salary}</p>
                    </div>
                    <div>
                      <p className="text-gray-600 font-bold">Popular Countries</p>
                      <p className="text-gray-900">{program.countries}</p>
                    </div>
                    <div>
                      <p className="text-gray-600 font-bold">Application Timeline</p>
                      <p className="text-gray-900">{program.timeline}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Employers for Entry-Level */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Top Employers Hiring Entry-Level Talent
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                company: 'Tech Companies',
                examples: 'Google, Meta, Amazon, Microsoft, Apple',
                programs: 'Graduate, internship, junior engineer roles',
                locations: 'Silicon Valley, London, Singapore, Berlin',
              },
              {
                company: 'Finance & Banking',
                examples: 'Goldman Sachs, JP Morgan, HSBC, Barclays',
                programs: 'Graduate scheme, analyst program, trainee',
                locations: 'London, New York, Hong Kong, Singapore',
              },
              {
                company: 'Consulting',
                examples: 'McKinsey, BCG, Bain, Accenture, Deloitte',
                programs: 'Associate program, business analyst roles',
                locations: 'Major cities worldwide',
              },
              {
                company: 'FMCG/Retail',
                examples: 'Unilever, Procter & Gamble, L\'Oreal, Nestlé',
                programs: 'Graduate trainee, junior brand manager',
                locations: 'Expanding markets globally',
              },
              {
                company: 'International Schools',
                examples: '500+ international schools globally',
                programs: 'English teachers, subject specialists',
                locations: 'Asia, Middle East, Europe, Americas',
              },
              {
                company: 'Startups',
                examples: 'Unicorn startups in growth mode',
                programs: 'Early employee roles, junior positions',
                locations: 'Tech hubs worldwide',
              },
            ].map((employer, idx) => (
              <div key={idx} className="bg-white rounded-xl border-2 border-gray-200 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{employer.company}</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="text-gray-600 font-bold mb-1">Examples</p>
                    <p className="text-gray-700">{employer.examples}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 font-bold mb-1">Programs</p>
                    <p className="text-gray-700">{employer.programs}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 font-bold mb-1">Locations</p>
                    <p className="text-gray-700">{employer.locations}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            How to Apply for Entry-Level Relocation Jobs
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl border-2 border-pink-200 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Preparation Steps</h3>
              <ol className="space-y-4">
                {[
                  { step: 1, action: 'Research target countries and companies' },
                  { step: 2, action: 'Check visa eligibility (many have post-study work visas)' },
                  { step: 3, action: 'Build strong resume with academic achievements' },
                  { step: 4, action: 'Get relevant certifications (TEFL, etc.)' },
                  { step: 5, action: 'Practice interview skills' },
                  { step: 6, action: 'Start applications 6-12 months before' },
                ].map((item) => (
                  <li key={item.step} className="flex gap-4">
                    <span className="text-pink-600 font-bold min-w-fit">{item.step}.</span>
                    <span className="text-gray-700">{item.action}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="bg-white rounded-2xl border-2 border-pink-200 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Application Timeline</h3>
              <div className="space-y-4">
                {[
                  { period: 'Jan-Mar', action: 'Summer internship applications' },
                  { period: 'May-Jul', action: 'Graduate program applications' },
                  { period: 'Jul-Sep', action: 'Trainee program applications' },
                  { period: 'Aug-Sep', action: 'Teaching positions (ESL programs)' },
                  { period: 'Sep-Dec', action: 'Interviews & offers' },
                  { period: 'Jan+', action: 'Start date, relocation begins' },
                ].map((timeline, idx) => (
                  <div key={idx} className="flex gap-4">
                    <span className="font-bold text-pink-600 min-w-fit">{timeline.period}</span>
                    <span className="text-gray-700">{timeline.action}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto bg-pink-50 border-l-4 border-pink-600 rounded p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Top Job Search Resources</h3>
            <div className="grid md:grid-cols-2 gap-6 text-gray-700">
              {[
                'LinkedIn (filter by job level & location)',
                'Glassdoor (company reviews & salaries)',
                'Indeed (global job postings)',
                'Company careers websites',
                'University career services',
                'Specialized sites (TeachAway, LinkedIn Learning)',
              ].map((resource, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="text-pink-600 font-bold">→</span>
                  {resource}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Entry-Level Relocation FAQ
          </h2>

          <div className="space-y-4">
            {[
              {
                q: 'Do entry-level jobs come with visa sponsorship?',
                a: 'Most do. International companies and graduate programs specifically budget for visa sponsorship. Always confirm before applying.',
              },
              {
                q: 'Can I work abroad after graduation?',
                a: 'Many countries offer post-graduation work visas (typically 1-2 years). Check your country\'s rules. Companies often hire graduates with this route.',
              },
              {
                q: 'What qualifications do I need?',
                a: 'Usually a bachelor\'s degree minimum. Some programs prefer specific majors (engineering, business, etc.). Teaching roles need TEFL/TESOL certification.',
              },
              {
                q: 'How much will relocation cost me?',
                a: 'Good news: entry-level relocation jobs cover all costs! Flights, visas, housing, and sometimes settling-in allowance included.',
              },
              {
                q: 'What if I fail or want to return?',
                a: 'Most contracts allow flexibility. Discuss expectations upfront. Some programs include return flights if you complete the term.',
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
      <section className="py-20 bg-gradient-to-br from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your International Career?
          </h2>
          <p className="text-xl text-pink-100 mb-8">
            Explore entry-level positions with relocation support. Launch your global career today.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/jobs"
              className="inline-flex items-center gap-2 bg-white text-pink-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-pink-50 transition shadow-lg"
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
