import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cyprus Expat Jobs | Find Work in Cyprus as an Expat',
  description: 'Find expat jobs in Cyprus. Discover job opportunities, visa requirements, salary expectations, and how to work in Cyprus as a foreigner. Complete guide for expat job seekers.',
  keywords: [
    'cyprus expat jobs',
    'jobs in cyprus',
    'work in cyprus',
    'expat jobs cyprus',
    'cyprus employment',
    'work permit cyprus',
    'job opportunities cyprus',
  ],
  alternates: {
    canonical: 'https://relocation.quest/guides/cyprus-expat-jobs',
  },
  openGraph: {
    title: 'Cyprus Expat Jobs - Find Work & Opportunities',
    description: 'Comprehensive guide to finding expat jobs in Cyprus. Job sectors, visa requirements, salary info, and practical advice for working in Cyprus.',
    type: 'article',
    url: 'https://relocation.quest/guides/cyprus-expat-jobs',
  },
}

export default function CyprusExpatJobsPage() {
  return (
    <>
      

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-amber-400 via-orange-400 to-blue-500 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-6">
              <span className="text-2xl">🇨🇾</span>
              <span>Cyprus Employment Guide</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              Cyprus Expat Jobs & Work Guide
            </h1>
            <p className="text-xl md:text-2xl text-amber-100 mb-8 leading-relaxed">
              Your complete guide to finding and securing jobs in Cyprus. Learn about visa requirements, top employers, salary expectations, and how to relocate for work in Cyprus.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#jobs"
                className="inline-flex items-center gap-2 bg-white text-orange-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-50 transition shadow-lg"
              >
                Find Jobs in Cyprus
              </Link>
              <Link
                href="/guides/moving-to-cyprus"
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition"
              >
                Moving Guide
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-12 bg-orange-50 border-b border-orange-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { label: 'Unemployment Rate', value: '5.2%', icon: '📊' },
              { label: 'Avg Salary', value: '€22k - €35k', icon: '💰' },
              { label: 'Cost of Living', value: 'Moderate', icon: '🏠' },
              { label: 'Expat Population', value: '10%+', icon: '👥' },
            ].map((fact, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl mb-2">{fact.icon}</div>
                <div className="text-2xl font-black text-orange-600 mb-1">{fact.value}</div>
                <div className="text-sm text-gray-600 font-medium">{fact.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Market Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Cyprus Job Market Overview
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl border-2 border-orange-200 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Work in Cyprus?</h3>
              <ul className="space-y-4">
                {[
                  'Mediterranean lifestyle with excellent weather',
                  'Growing economy and tech/tourism sectors',
                  'EU member with stable political system',
                  'Affordable cost of living',
                  'Beautiful country with English widely spoken',
                  'EU work rights for many nationalities',
                ].map((reason, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-orange-600 font-bold mt-1">✓</span>
                    <span className="text-gray-700">{reason}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl border-2 border-orange-200 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Challenges</h3>
              <ul className="space-y-4">
                {[
                  'Smaller job market compared to major cities',
                  'Salaries lower than Western Europe/USA',
                  'May need to learn Greek for some roles',
                  'Work permit required for non-EU citizens',
                  'Bureaucratic processes can be slow',
                  'Limited public transportation outside cities',
                ].map((challenge, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-orange-600 font-bold mt-1">•</span>
                    <span className="text-gray-700">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Top Industries */}
      <section id="jobs" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Top Industries & Job Sectors
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                industry: 'Tourism & Hospitality',
                icon: '🏨',
                jobs: 'Hotel managers, chefs, guides, event coordinators',
                demand: 'Very High',
                salary: '€15k - €35k',
                notes: 'Year-round and seasonal positions available',
              },
              {
                industry: 'Technology & IT',
                icon: '💻',
                jobs: 'Software developers, system admins, web designers',
                demand: 'High',
                salary: '€25k - €50k',
                notes: 'Growing startup scene in Nicosia and Limassol',
              },
              {
                industry: 'Finance & Banking',
                icon: '💼',
                jobs: 'Financial analysts, banking professionals, accountants',
                demand: 'Moderate',
                salary: '€30k - €60k',
                notes: 'International banks and investment firms',
              },
              {
                industry: 'Education',
                icon: '🎓',
                jobs: 'Teachers, lecturers, international school staff',
                demand: 'Moderate',
                salary: '€18k - €40k',
                notes: 'International schools always hiring English teachers',
              },
              {
                industry: 'Real Estate',
                icon: '🏠',
                jobs: 'Property agents, developers, consultants',
                demand: 'Moderate',
                salary: '€20k - €45k',
                notes: 'Booming property market with international interest',
              },
              {
                industry: 'Healthcare',
                icon: '🏥',
                jobs: 'Doctors, nurses, medical staff',
                demand: 'Moderate',
                salary: '€25k - €55k',
                notes: 'Growing private healthcare sector',
              },
            ].map((sector, idx) => (
              <div key={idx} className="bg-white rounded-2xl border-2 border-gray-200 p-8 hover:shadow-lg transition">
                <div className="text-5xl mb-3">{sector.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{sector.industry}</h3>
                <p className="text-sm text-gray-600 mb-4">{sector.jobs}</p>
                <div className="space-y-2">
                  <div>
                    <p className="text-xs text-gray-600 font-bold">Demand</p>
                    <p className="text-orange-600 font-bold">{sector.demand}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 font-bold">Salary Range</p>
                    <p className="text-orange-600 font-bold">{sector.salary}</p>
                  </div>
                  <p className="text-xs text-gray-600 pt-2 border-t">{sector.notes}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visa & Work Permits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Visa & Work Permit Requirements
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                category: 'EU/EEA Citizens',
                icon: '🇪🇺',
                requirements: [
                  'Right to work in Cyprus without visa',
                  'Need to register with local authorities',
                  'Get Social Insurance number',
                  'Employer fills out tax forms',
                  'Family members can often join',
                ],
                timeline: '2-4 weeks',
                cost: 'Minimal',
              },
              {
                category: 'Non-EU Citizens',
                icon: '🌍',
                requirements: [
                  'Work permit from Cyprus Labor Office',
                  'Employer must apply on your behalf',
                  'Residency permit required',
                  'Valid passport required',
                  'Background check often needed',
                ],
                timeline: '4-8 weeks',
                cost: '€50 - €200',
              },
            ].map((visa, idx) => (
              <div key={idx} className="bg-white rounded-2xl border-2 border-orange-200 overflow-hidden">
                <div className="bg-gradient-to-r from-orange-500 to-amber-500 p-6 text-white">
                  <div className="text-5xl mb-2">{visa.icon}</div>
                  <h3 className="text-2xl font-bold">{visa.category}</h3>
                </div>
                <div className="p-8">
                  <div className="mb-6">
                    <p className="text-sm font-bold text-gray-600 mb-3">Requirements</p>
                    <ul className="space-y-2">
                      {visa.requirements.map((req, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-orange-600 mt-1">✓</span>
                          <span className="text-gray-700 text-sm">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                    <div>
                      <p className="text-xs text-gray-600 font-bold">Timeline</p>
                      <p className="font-bold text-orange-600">{visa.timeline}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 font-bold">Cost</p>
                      <p className="font-bold text-orange-600">{visa.cost}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Salary & Cost of Living */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Salary & Cost of Living Expectations
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl border-2 border-orange-200 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Average Salaries by Sector</h3>
              <div className="space-y-4">
                {[
                  { role: 'Software Developer', salary: '€28k - €50k' },
                  { role: 'Hotel Manager', salary: '€20k - €35k' },
                  { role: 'English Teacher', salary: '€18k - €32k' },
                  { role: 'Accountant', salary: '€22k - €40k' },
                  { role: 'Property Agent', salary: '€20k - €45k' },
                  { role: 'Marketing Manager', salary: '€25k - €45k' },
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <span className="text-gray-700">{item.role}</span>
                    <span className="font-bold text-orange-600">{item.salary}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-600 mt-4">
                *Annual gross salary. Actual take-home varies with taxes and benefits.
              </p>
            </div>

            <div className="bg-white rounded-2xl border-2 border-orange-200 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Monthly Living Costs</h3>
              <div className="space-y-4">
                {[
                  { expense: 'Rent (2-bed apartment)', cost: '€600 - €1,000' },
                  { expense: 'Utilities (electricity, water)', cost: '€80 - €150' },
                  { expense: 'Groceries (monthly)', cost: '€250 - €400' },
                  { expense: 'Dining out (mid-range)', cost: '€12 - €20' },
                  { expense: 'Public transport (month pass)', cost: '€30' },
                  { expense: 'Total: Single person budget', cost: '€1,800 - €2,500' },
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <span className="text-gray-700">{item.expense}</span>
                    <span className="font-bold text-orange-600">{item.cost}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-600 mt-4">
                *Approximate costs in Nicosia and Limassol. Resort areas are more expensive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Find Jobs */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            How to Find Jobs in Cyprus
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                method: 'Job Boards & Websites',
                icon: '🌐',
                options: [
                  'PetroJobs Cyprus',
                  'Indeed.com.cy',
                  'LinkedIn (Cyprus jobs)',
                  'CyprusJobs.com.cy',
                  'Facebook job groups',
                ],
              },
              {
                method: 'Direct Application',
                icon: '📧',
                options: [
                  'Company websites',
                  'International hotel chains',
                  'Tech companies in Limassol',
                  'International schools',
                  'Real estate agencies',
                ],
              },
              {
                method: 'Recruitment Agencies',
                icon: '🤝',
                options: [
                  'Manpower Cyprus',
                  'Kelly Services',
                  'Prostaff',
                  'Local recruitment agencies',
                  'Specialized consultants',
                ],
              },
              {
                method: 'Networking & Relocation',
                icon: '👥',
                options: [
                  'Expat communities online',
                  'Meetup groups in Cyprus',
                  'Professional associations',
                  'Chamber of Commerce',
                  'University networks',
                ],
              },
            ].map((method, idx) => (
              <div key={idx} className="bg-white rounded-2xl border-2 border-gray-200 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-4xl">{method.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900">{method.method}</h3>
                </div>
                <ul className="space-y-2">
                  {method.options.map((option, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-700">
                      <span className="text-orange-600">•</span>
                      {option}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practical Steps */}
      <section className="py-20 bg-orange-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Step-by-Step Guide to Working in Cyprus
          </h2>

          <div className="space-y-6">
            {[
              {
                step: 1,
                title: 'Research & Plan',
                tasks: [
                  'Identify your target industry and companies',
                  'Check visa requirements for your nationality',
                  'Research salaries and cost of living',
                  'Learn about Cyprus culture and lifestyle',
                ],
              },
              {
                step: 2,
                title: 'Apply for Jobs',
                tasks: [
                  'Create strong CV/resume tailored to Cyprus',
                  'Apply to jobs online and contact directly',
                  'Network with expat communities',
                  'Consider working with recruitment agencies',
                ],
              },
              {
                step: 3,
                title: 'Interview & Negotiate',
                tasks: [
                  'Prepare for interviews (often conducted remotely)',
                  'Discuss salary, benefits, and relocation support',
                  'Clarify start date and visa sponsorship',
                  'Get offer in writing',
                ],
              },
              {
                step: 4,
                title: 'Prepare & Relocate',
                tasks: [
                  'Apply for work permit/residency if needed',
                  'Arrange housing in Cyprus',
                  'Plan your move and logistics',
                  'Complete medical checks if required',
                ],
              },
              {
                step: 5,
                title: 'Settle In',
                tasks: [
                  'Register with local authorities',
                  'Open bank account',
                  'Register for taxes and social insurance',
                  'Join expat networks and communities',
                ],
              },
            ].map((step, idx) => (
              <div key={idx} className="bg-white rounded-2xl border-2 border-orange-200 p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white font-bold text-lg">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                    <ul className="space-y-2">
                      {step.tasks.map((task, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-orange-600 mt-1">✓</span>
                          <span className="text-gray-700">{task}</span>
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

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {[
              {
                q: 'Do I need to speak Greek to work in Cyprus?',
                a: 'Not required in many sectors (tourism, tech, finance), but learning Greek is beneficial for social integration and local employment.',
              },
              {
                q: 'How long is the work permit process?',
                a: 'For non-EU citizens: 4-8 weeks typically. EU citizens: 2-4 weeks for registration. Always check with your employer for exact timeline.',
              },
              {
                q: 'Can I bring my family to Cyprus when I get a job?',
                a: 'Yes, most employers sponsoring your visa will also sponsor family members. Dependent visas are usually straightforward.',
              },
              {
                q: 'What is the tax situation for expat workers?',
                a: 'Tax on employment income is typically 20-25%. Non-residents may benefit from special tax exemptions. Consult a tax advisor.',
              },
              {
                q: 'Are salaries negotiable in Cyprus?',
                a: 'Yes, especially for professional roles. Larger international companies have set scales, but local firms often negotiate.',
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

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-amber-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Work in Cyprus?
          </h2>
          <p className="text-xl text-amber-100 mb-8">
            Start your Cyprus career journey. Browse jobs, learn about relocation, and connect with employers.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/jobs"
              className="inline-flex items-center gap-2 bg-white text-orange-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-50 transition shadow-lg"
            >
              Browse Jobs Worldwide
            </Link>
            <Link
              href="/guides/moving-to-cyprus"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition"
            >
              Moving to Cyprus Guide
            </Link>
          </div>
        </div>
      </section>

      </>
  )
}
