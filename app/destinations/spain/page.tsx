'use client';

export default function SpainPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-red-500 to-yellow-500 text-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4">Moving to Spain</h1>
          <p className="text-xl text-red-100">Complete relocation guide for Spain including visas, jobs, cost of living, and expat resources.</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-6">Why Move to Spain?</h2>
        <ul className="text-lg text-gray-700 space-y-3 mb-12">
          <li>✓ Mediterranean lifestyle and climate</li>
          <li>✓ EU membership</li>
          <li>✓ Affordable cost of living</li>
          <li>✓ Rich culture and history</li>
          <li>✓ Excellent healthcare system</li>
          <li>✓ Digital nomad visa available</li>
        </ul>

        <div className="space-y-4">
          <button className="w-full bg-red-600 text-white py-3 rounded-lg font-bold hover:bg-red-700">View Full Guide</button>
          <button className="w-full bg-red-600 text-white py-3 rounded-lg font-bold hover:bg-red-700">Browse Spain Jobs</button>
          <button className="w-full bg-red-600 text-white py-3 rounded-lg font-bold hover:bg-red-700">Find Services</button>
        </div>
      </div>
    </main>
  );
}
