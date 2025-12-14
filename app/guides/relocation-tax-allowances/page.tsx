import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Relocation Income Tax Allowance Guide 2024 | Tax-Free Benefits for UK Relocations',
  description: 'Complete guide to UK relocation income tax allowance. Learn about HMRC tax-free relocation benefits, qualifying expenses, and how to claim your £8,000 allowance.',
  keywords: 'relocation tax allowance, HMRC relocation, tax-free relocation, qualifying expenses, relocation allowance UK',
  openGraph: {
    title: 'Relocation Income Tax Allowance 2024 | Complete HMRC Guide',
    description: 'Master guide to tax-free relocation benefits in the UK. Understand qualifying expenses, HMRC rules, and maximize your £8,000 allowance.',
    type: 'article',
  },
};

export default function RelocationTaxAllowancePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4">
            Relocation Income Tax Allowance Guide 2024
          </h1>
          <p className="text-xl text-blue-100">
            Complete guide to HMRC tax-free relocation benefits. Learn how to claim your £8,000 allowance and understand qualifying expenses.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Table of Contents */}
        <nav className="bg-blue-50 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">Quick Navigation</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <li><a href="#overview" className="text-blue-600 hover:underline">What is the Allowance?</a></li>
            <li><a href="#qualifying" className="text-blue-600 hover:underline">Qualifying Expenses</a></li>
            <li><a href="#non-qualifying" className="text-blue-600 hover:underline">Non-Qualifying Expenses</a></li>
            <li><a href="#how-to-claim" className="text-blue-600 hover:underline">How to Claim</a></li>
            <li><a href="#calculator" className="text-blue-600 hover:underline">Tax Calculator</a></li>
            <li><a href="#faq" className="text-blue-600 hover:underline">Common Questions</a></li>
          </ul>
        </nav>

        {/* Overview Section */}
        <section id="overview" className="mb-12">
          <h2 className="text-3xl font-bold mb-6">What is Relocation Income Tax Allowance?</h2>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 mb-4">
              The Relocation Income Tax Allowance (also called a "Relocation Deduction" under HMRC rules) is a benefit that allows employees to receive certain relocation expenses from their employer on a tax-free basis, up to a limit of <strong>£8,000 per relocation</strong>.
            </p>

            <div className="bg-green-50 border-l-4 border-green-600 p-6 my-6">
              <h3 className="font-bold text-green-900 mb-2">Key Point</h3>
              <p className="text-gray-800">
                If your employer covers relocation expenses that qualify, you don't pay income tax on those benefits—up to £8,000 total. Anything above £8,000 is taxable.
              </p>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Who is Eligible?</h3>
            <ul className="list-disc list-inside text-gray-700 mb-6">
              <li>Employees moving to a new job location</li>
              <li>Employees transferring within the same company</li>
              <li>New hires relocating for employment</li>
              <li>Directors and certain officers</li>
              <li>UK residents relocating domestically OR internationally</li>
            </ul>

            <h3 className="text-2xl font-bold mt-8 mb-4">The £8,000 Limit</h3>
            <p className="text-gray-700 mb-4">
              <strong>Important:</strong> The £8,000 limit is per relocation, not per year. This means:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6">
              <li>You can claim up to £8,000 tax-free per relocation</li>
              <li>The allowance resets for each new relocation</li>
              <li>Multiple relocations mean multiple £8,000 allowances</li>
              <li>Unused allowance from one relocation cannot roll over</li>
            </ul>
          </div>
        </section>

        {/* Qualifying Expenses */}
        <section id="qualifying" className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Qualifying Relocation Expenses</h2>

          <p className="text-lg text-gray-700 mb-6">
            These expenses are considered qualifying and covered by the allowance:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Housing */}
            <div className="border border-gray-300 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">🏠 Housing Costs</h3>
              <ul className="text-gray-700 space-y-2">
                <li>✓ Housing search fees</li>
                <li>✓ Estate agent fees (partial)</li>
                <li>✓ Rental deposits/guarantees</li>
                <li>✓ Legal fees for property</li>
                <li>✓ Surveys and valuations</li>
              </ul>
            </div>

            {/* Moving & Storage */}
            <div className="border border-gray-300 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">📦 Moving & Shipping</h3>
              <ul className="text-gray-700 space-y-2">
                <li>✓ Professional removal services</li>
                <li>✓ Packing materials</li>
                <li>✓ Storage fees</li>
                <li>✓ Insurance during moving</li>
                <li>✓ Temporary accommodation</li>
              </ul>
            </div>

            {/* Travel */}
            <div className="border border-gray-300 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">✈️ Travel Costs</h3>
              <ul className="text-gray-700 space-y-2">
                <li>✓ Flights or train tickets</li>
                <li>✓ Fuel costs (driving)</li>
                <li>✓ Shipping vehicles</li>
                <li>✓ Visas and documentation</li>
                <li>✓ Travel insurance</li>
              </ul>
            </div>

            {/* Other */}
            <div className="border border-gray-300 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">📋 Other Costs</h3>
              <ul className="text-gray-700 space-y-2">
                <li>✓ Utility connection fees</li>
                <li>✓ Council tax changes</li>
                <li>✓ School registration fees</li>
                <li>✓ Professional advice fees</li>
                <li>✓ Childcare setup costs</li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6">
            <h4 className="font-bold text-blue-900 mb-2">💡 Pro Tip</h4>
            <p className="text-gray-800">
              Keep detailed receipts and invoices for all relocation expenses. HMRC may request documentation to verify your claims, especially for large or unusual expenses.
            </p>
          </div>
        </section>

        {/* Non-Qualifying Expenses */}
        <section id="non-qualifying" className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Non-Qualifying Expenses (Taxable)</h2>

          <p className="text-lg text-gray-700 mb-6">
            These expenses do NOT qualify for the allowance and are taxed:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="border border-red-300 bg-red-50 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-3">❌ Salary & Benefits</h3>
              <ul className="text-gray-700 space-y-2">
                <li>✗ Salary increases</li>
                <li>✗ Bonus payments</li>
                <li>✗ Relocation allowance (general)</li>
                <li>✗ Extra benefits/perks</li>
              </ul>
            </div>

            <div className="border border-red-300 bg-red-50 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-3">❌ Personal Items</h3>
              <ul className="text-gray-700 space-y-2">
                <li>✗ Furniture purchases</li>
                <li>✗ Home décor</li>
                <li>✗ Appliances</li>
                <li>✗ New clothes for climate</li>
              </ul>
            </div>

            <div className="border border-red-300 bg-red-50 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-3">❌ Indirect Costs</h3>
              <ul className="text-gray-700 space-y-2">
                <li>✗ Lost sales commissions</li>
                <li>✗ Career counseling</li>
                <li>✗ Language tuition</li>
                <li>✗ Immigration consultant fees</li>
              </ul>
            </div>

            <div className="border border-red-300 bg-red-50 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-3">❌ Personal Enjoyment</h3>
              <ul className="text-gray-700 space-y-2">
                <li>✗ Holiday trips</li>
                <li>✗ Leisure activities</li>
                <li>✗ Entertainment</li>
                <li>✗ Gifts to family</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6">
            <h4 className="font-bold text-yellow-900 mb-2">⚠️ Common Mistake</h4>
            <p className="text-gray-800">
              Many people try to claim furniture and home decoration as relocation expenses. <strong>These don't qualify</strong> and HMRC will reject them. Stick to direct relocation-related costs only.
            </p>
          </div>
        </section>

        {/* How to Claim */}
        <section id="how-to-claim" className="mb-12">
          <h2 className="text-3xl font-bold mb-6">How to Claim Your Allowance</h2>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Notify Your Employer</h3>
                <p className="text-gray-700">
                  Inform HR/Finance that you're relocating and request relocation expense coverage under the HMRC allowance.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Collect Documentation</h3>
                <p className="text-gray-700">
                  Gather invoices, receipts, and quotes for all relocation expenses. Keep copies of everything.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Submit to Employer</h3>
                <p className="text-gray-700">
                  Provide your employer with itemized expenses. They'll cover up to £8,000 tax-free.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                4
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Report on Tax Return</h3>
                <p className="text-gray-700">
                  If expenses exceed £8,000, declare the excess on your Self Assessment tax return.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                5
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Keep Records</h3>
                <p className="text-gray-700">
                  Retain all documentation for 6 years in case of HMRC enquiries or audits.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Calculator */}
        <section id="calculator" className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Tax Allowance Calculator</h2>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-8 border border-blue-200">
            <p className="text-gray-700 mb-6">
              Quick calculator to see how much tax-free allowance you have remaining:
            </p>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Total Relocation Expenses (£):
                </label>
                <input
                  type="number"
                  placeholder="Enter amount"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-300">
                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-2">Allowance Limit</p>
                  <p className="text-2xl font-bold text-blue-600">£8,000</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-2">Tax-Free Amount</p>
                  <p className="text-2xl font-bold text-green-600">—</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-2">Taxable Amount</p>
                  <p className="text-2xl font-bold text-red-600">—</p>
                </div>
              </div>

              <p className="text-sm text-gray-600 mt-6">
                * Assuming 20% income tax rate. Your actual tax will depend on your tax band (20%, 40%, or 45%).
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>

          <div className="space-y-4">
            <details className="group border border-gray-300 rounded-lg p-6">
              <summary className="flex justify-between items-center cursor-pointer font-bold text-lg">
                Can I claim the allowance if I'm self-employed?
                <span className="ml-2">+</span>
              </summary>
              <p className="mt-4 text-gray-700">
                No, the relocation income tax allowance is only available to employees. Self-employed individuals cannot claim this benefit. However, you may be able to claim relocation expenses as business deductions through your tax return.
              </p>
            </details>

            <details className="group border border-gray-300 rounded-lg p-6">
              <summary className="flex justify-between items-center cursor-pointer font-bold text-lg">
                What if my relocation expenses exceed £8,000?
                <span className="ml-2">+</span>
              </summary>
              <p className="mt-4 text-gray-700">
                You can claim the first £8,000 tax-free. Any amount above £8,000 is considered taxable income and must be reported on your tax return. You'll owe income tax on the excess (20%, 40%, or 45% depending on your tax bracket).
              </p>
            </details>

            <details className="group border border-gray-300 rounded-lg p-6">
              <summary className="flex justify-between items-center cursor-pointer font-bold text-lg">
                Does the allowance apply to international relocations?
                <span className="ml-2">+</span>
              </summary>
              <p className="mt-4 text-gray-700">
                Yes, the allowance applies to both domestic (within the UK) and international relocations. The rules are the same regardless of whether you're moving to another UK city or another country.
              </p>
            </details>

            <details className="group border border-gray-300 rounded-lg p-6">
              <summary className="flex justify-between items-center cursor-pointer font-bold text-lg">
                Can I claim the allowance twice if I relocate again?
                <span className="ml-2">+</span>
              </summary>
              <p className="mt-4 text-gray-700">
                Yes! The £8,000 allowance applies to each relocation separately. If you relocate again in the future, you get a new £8,000 allowance for that relocation. Unused allowance from one relocation does not carry over.
              </p>
            </details>

            <details className="group border border-gray-300 rounded-lg p-6">
              <summary className="flex justify-between items-center cursor-pointer font-bold text-lg">
                How long do I have to claim the allowance after relocating?
                <span className="ml-2">+</span>
              </summary>
              <p className="mt-4 text-gray-700">
                There's no strict time limit, but it's best to claim within the same tax year as the relocation. If you're self-assessing, you must include it in your tax return for the relevant tax year. HMRC generally allows 4 years to make amendments.
              </p>
            </details>

            <details className="group border border-gray-300 rounded-lg p-6">
              <summary className="flex justify-between items-center cursor-pointer font-bold text-lg">
                What if my employer is based abroad?
                <span className="ml-2">+</span>
              </summary>
              <p className="mt-4 text-gray-700">
                The allowance is available if you're working in the UK, regardless of where your employer is based. However, if you're working abroad, you'll need to discuss the tax treatment with your employer and accountant, as different rules may apply.
              </p>
            </details>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-blue-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help With Your Relocation?</h2>
          <p className="text-lg mb-6">
            Our relocation experts can help you understand your allowance and find services to keep your costs down.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100">
              Find Services
            </button>
            <button className="border border-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700">
              Get Quotes
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
