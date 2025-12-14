'use client';

export default function DubaiPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4">Moving to Dubai</h1>
          <p className="text-xl text-yellow-100">Complete guide to relocating to Dubai including visa types, jobs, lifestyle, and expat resources.</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-6">Why Move to Dubai?</h2>
        <ul className="text-lg text-gray-700 space-y-3 mb-12">
          <li>✓ Tax-free salaries and income</li>
          <li>✓ Booming economy and business opportunities</li>
          <li>✓ Luxurious lifestyle</li>
          <li>✓ Diverse international community</li>
          <li>✓ Modern infrastructure</li>
          <li>✓ No income tax for residents</li>
        </ul>

        <h2 className="text-3xl font-bold mb-6">Visa Options</h2>
        <div className="space-y-4 mb-12">
          <div className="border-l-4 border-yellow-600 pl-6">
            <h3 className="font-bold text-lg">Employment Visa</h3>
            <p className="text-gray-700">Sponsored by employer - most common option</p>
          </div>
          <div className="border-l-4 border-yellow-600 pl-6">
            <h3 className="font-bold text-lg">Freelance Visa</h3>
            <p className="text-gray-700">For self-employed professionals</p>
          </div>
          <div className="border-l-4 border-yellow-600 pl-6">
            <h3 className="font-bold text-lg">Golden Visa</h3>
            <p className="text-gray-700">Long-term residency for investors and professionals</p>
          </div>
        </div>

        <div className="space-y-4">
          <button className="w-full bg-yellow-600 text-white py-3 rounded-lg font-bold hover:bg-yellow-700">View Full Guide</button>
          <button className="w-full bg-yellow-600 text-white py-3 rounded-lg font-bold hover:bg-yellow-700">Browse Dubai Jobs</button>
          <button className="w-full bg-yellow-600 text-white py-3 rounded-lg font-bold hover:bg-yellow-700">Find Services</button>
        </div>
      </div>
    </main>
  );
}
