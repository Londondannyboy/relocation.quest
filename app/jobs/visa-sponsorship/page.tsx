import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Jobs with Visa Sponsorship | Employers Sponsoring Work Visas',
  description: 'Find jobs with employer visa sponsorship. Work abroad legally with guaranteed visa support. Browse positions with work permit assistance worldwide.',
  keywords: [
    'jobs with visa sponsorship',
    'visa sponsorship jobs',
    'jobs work permit',
    'employer sponsorship',
    'sponsored jobs abroad',
  ],
  alternates: {
    canonical: 'https://relocation.quest/jobs/visa-sponsorship',
  },
  openGraph: {
    title: 'Jobs with Visa Sponsorship - Work Abroad Legally',
    description: 'Find employers willing to sponsor your work visa. Career opportunities with guaranteed visa support and relocation assistance.',
    type: 'website',
    url: 'https://relocation.quest/jobs/visa-sponsorship',
  },
}

export default function VisaSponsorshipJobsPage() {
  return (
    <>
      

      <section className="relative pt-32 pb-20 bg-gradient-to-br from-amber-500 via-orange-500 to-red-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-6">
              <span className="text-2xl">📋</span>
              <span>Visa Sponsored</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              Jobs with Visa Sponsorship
            </h1>
            <p className="text-xl md:text-2xl text-orange-100 mb-8 leading-relaxed">
              Work abroad with guaranteed visa sponsorship. Find employers committed to helping you relocate legally and supporting your work permit process.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#jobs"
                className="inline-flex items-center gap-2 bg-white text-orange-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-50 transition shadow-lg"
              >
                Find Sponsored Jobs
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

      <section id="jobs" className="py-20 bg-orange-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Visa Sponsorship by Country
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                country: 'UAE (Dubai, Abu Dhabi)',
                visa: 'Employment Visa',
                timeline: '2-4 weeks',
                requirements: 'Job offer required',
                whoSponsors: 'Most large employers',
              },
              {
                country: 'USA',
                visa: 'H-1B, L-1, O-1',
                timeline: '3-6 months',
                requirements: 'Specialized skills, degree',
                whoSponsors: 'Tech, finance, consulting',
              },
              {
                country: 'Canada',
                visa: 'Work Permit, Express Entry',
                timeline: '2-4 months',
                requirements: 'Job offer or points',
                whoSponsors: 'Tech, healthcare, skilled trades',
              },
              {
                country: 'Australia',
                visa: 'Skilled Migration, TSS',
                timeline: '4-16 weeks',
                requirements: 'Occupation on skilled list',
                whoSponsors: 'Healthcare, IT, engineering',
              },
              {
                country: 'UK',
                visa: 'Skilled Worker Visa',
                timeline: '2-4 weeks',
                requirements: 'Job offer, £30k+ salary',
                whoSponsors: 'Most employers',
              },
              {
                country: 'Singapore',
                visa: 'Employment Pass',
                timeline: '1-2 weeks',
                requirements: 'Qualification & salary',
                whoSponsors: 'Finance, tech, multinational',
              },
            ].map((country, idx) => (
              <div key={idx} className="bg-white rounded-xl border-2 border-orange-200 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{country.country}</h3>
                <div className="space-y-2 text-sm">
                  <div>
                    <p className="text-gray-600 font-bold">Visa Type</p>
                    <p className="text-gray-900">{country.visa}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 font-bold">Timeline</p>
                    <p className="text-orange-600 font-bold">{country.timeline}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 font-bold">Requirements</p>
                    <p className="text-gray-900">{country.requirements}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 font-bold">Who Sponsors</p>
                    <p className="text-gray-900">{country.whoSponsors}</p>
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
            What Employers Need to Sponsor Your Visa
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl border-2 border-orange-200 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Employer Considerations</h3>
              <ul className="space-y-3">
                {[
                  'Proof you cannot fill role with local talent',
                  'Costs of visa sponsorship (£500-£3000+)',
                  'Time for visa processing (weeks/months)',
                  'Legal compliance with immigration rules',
                  'Commitment to employee retention',
                  'Documentation & record keeping',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-orange-600 font-bold mt-1">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl border-2 border-orange-200 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Employers Sponsor</h3>
              <ul className="space-y-3">
                {[
                  'Access global talent pools',
                  'Fill hard-to-staff positions',
                  'Competitive advantage in recruiting',
                  'Attract specialized experts',
                  'Expand operations internationally',
                  'Build diverse teams',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-orange-600 font-bold mt-1">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="max-w-4xl mx-auto bg-orange-50 border-l-4 border-orange-600 rounded p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Costs Employers Consider</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              {[
                { item: 'Visa Filing', cost: '£500-£1,500' },
                { item: 'Legal Fees', cost: '£1,000-£3,000' },
                { item: 'Immigration Specialist', cost: '£2,000-£5,000' },
                { item: 'Processing Time', cost: 'HR Resources' },
                { item: 'Compliance', cost: 'Documentation' },
              ].map((cost, idx) => (
                <div key={idx}>
                  <p className="text-gray-600 font-bold mb-1">{cost.item}</p>
                  <p className="text-orange-600 font-bold">{cost.cost}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Industries Most Likely to Sponsor
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                industry: 'Technology',
                sponsorRate: 'Very High',
                reason: 'Critical shortage of skilled engineers globally',
                companies: 'Google, Amazon, Microsoft, Apple, Meta',
              },
              {
                industry: 'Finance & Banking',
                sponsorRate: 'Very High',
                reason: 'Need specialized financial professionals',
                companies: 'JP Morgan, Goldman Sachs, HSBC, Barclays',
              },
              {
                industry: 'Healthcare',
                sponsorRate: 'High',
                reason: 'Severe global shortage of doctors, nurses',
                companies: 'Private hospitals, medical clinics',
              },
              {
                industry: 'Consulting',
                sponsorRate: 'High',
                reason: 'Multi-national firms with global assignments',
                companies: 'McKinsey, BCG, Bain, Accenture',
              },
              {
                industry: 'Engineering',
                sponsorRate: 'High',
                reason: 'Specialized engineering expertise needed',
                companies: 'Major construction, manufacturing firms',
              },
              {
                industry: 'Education',
                sponsorRate: 'Moderate',
                reason: 'International schools seeking teachers',
                companies: '500+ international schools globally',
              },
            ].map((sector, idx) => (
              <div key={idx} className="bg-white rounded-xl border-2 border-gray-200 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{sector.industry}</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="text-gray-600 font-bold">Sponsorship</p>
                    <p className="text-orange-600 font-bold">{sector.sponsorRate}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 font-bold">Why</p>
                    <p className="text-gray-700">{sector.reason}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 font-bold">Example Companies</p>
                    <p className="text-gray-700 text-xs">{sector.companies}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            How to Secure Visa Sponsorship
          </h2>

          <div className="space-y-6">
            {[
              {
                step: 1,
                title: 'Build Strong Credentials',
                tips: ['Get relevant qualifications', 'Gain experience in your field', 'Develop specialized skills', 'Build professional portfolio'],
              },
              {
                step: 2,
                title: 'Target Sponsor-Friendly Companies',
                tips: ['Multinational corporations', 'International tech companies', 'Global consulting firms', 'Healthcare organizations'],
              },
              {
                step: 3,
                title: 'Position Your Applications',
                tips: ['Highlight specialized skills', 'Show unique expertise', 'Emphasize experience', 'Demonstrate value to employer'],
              },
              {
                step: 4,
                title: 'During Interviews',
                tips: ['Confirm visa sponsorship directly', 'Ask about the process', 'Clarify timeline and costs', 'Get clarity on support provided'],
              },
              {
                step: 5,
                title: 'Negotiate Terms',
                tips: ['Clarify who pays visa costs', 'Confirm relocation package', 'Discuss timeline expectations', 'Get offer in writing'],
              },
            ].map((section) => (
              <div key={section.step} className="bg-white rounded-xl border-l-4 border-orange-600 p-6">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-600 text-white font-bold">
                      {section.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{section.title}</h3>
                    <ul className="space-y-2">
                      {section.tips.map((tip, i) => (
                        <li key={i} className="flex items-center gap-2 text-gray-700">
                          <span className="text-orange-600">•</span>
                          {tip}
                        </li>
                      ))}
                    </ul>
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
            FAQ - Visa Sponsorship
          </h2>

          <div className="space-y-4">
            {[
              {
                q: 'Will an employer definitely sponsor me?',
                a: 'Not guaranteed, but if you have skills they need and it\'s cost-effective, they\'re likely to sponsor. Always ask directly.',
              },
              {
                q: 'Who pays for visa sponsorship costs?',
                a: 'Usually the employer covers visa fees and legal costs. Negotiate this explicitly in your job offer.',
              },
              {
                q: 'How long is the visa sponsorship process?',
                a: 'Typically 2-6 months depending on country and visa type. Plan accordingly in your timeline.',
              },
              {
                q: 'What if the company goes under after sponsoring me?',
                a: 'You may have grace periods to find new employment. Check visa rules—some allow transfers between employers.',
              },
              {
                q: 'Can I switch jobs after getting sponsored visa?',
                a: 'Usually yes, but you may need employer permission or new visa application. Check local laws.',
              },
            ].map((faq, idx) => (
              <details key={idx} className="group bg-white rounded-xl p-6 hover:bg-gray-100 transition border border-gray-200">
                <summary className="font-bold text-gray-900 cursor-pointer flex justify-between items-center">
                  {faq.q}
                  <span className="text-orange-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-gray-700">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-amber-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Work Abroad with Visa Sponsorship?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Find employers committed to sponsoring your work visa and supporting your relocation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/jobs"
              className="inline-flex items-center gap-2 bg-white text-orange-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-50 transition shadow-lg"
            >
              Browse Sponsored Jobs
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
