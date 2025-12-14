'use client';

export default function CanadaPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4">Moving to Canada</h1>
          <p className="text-xl text-red-100">Complete relocation guide for Canada including Express Entry, provincial programs, jobs, and immigrant resources.</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center p-6 bg-red-50 rounded-lg">
            <p className="text-3xl font-bold text-red-600 mb-2">C$</p>
            <p className="text-gray-700">Canadian Dollar</p>
          </div>
          <div className="text-center p-6 bg-red-50 rounded-lg">
            <p className="text-3xl font-bold text-red-600 mb-2">40M</p>
            <p className="text-gray-700">Population</p>
          </div>
          <div className="text-center p-6 bg-red-50 rounded-lg">
            <p className="text-3xl font-bold text-red-600 mb-2">+24%</p>
            <p className="text-gray-700">YoY Growth Trend</p>
          </div>
          <div className="text-center p-6 bg-red-50 rounded-lg">
            <p className="text-3xl font-bold text-red-600 mb-2">10</p>
            <p className="text-gray-700">Provinces</p>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-6">Why Move to Canada?</h2>
        <ul className="text-lg text-gray-700 space-y-3 mb-12">
          <li>✓ Express Entry fast-track immigration</li>
          <li>✓ Strong economy and job opportunities</li>
          <li>✓ Excellent healthcare and education</li>
          <li>✓ Multicultural society</li>
          <li>✓ Pathway to permanent residency</li>
          <li>✓ Growing tech hubs (Toronto, Vancouver)</li>
        </ul>

        <h2 className="text-3xl font-bold mb-6">Immigration Programs</h2>
        <div className="space-y-4 mb-12">
          <div className="border-l-4 border-red-600 pl-6">
            <h3 className="font-bold text-lg mb-2">Express Entry</h3>
            <p className="text-gray-700">Fast-track program for skilled workers. Process time: 6 months or less.</p>
          </div>
          <div className="border-l-4 border-red-600 pl-6">
            <h3 className="font-bold text-lg mb-2">Provincial Nominee Program (PNP)</h3>
            <p className="text-gray-700">Provinces nominate candidates matching their economic needs.</p>
          </div>
          <div className="border-l-4 border-red-600 pl-6">
            <h3 className="font-bold text-lg mb-2">Work Permit (LMIA)</h3>
            <p className="text-gray-700">Employer-sponsored work permits for temporary foreign workers.</p>
          </div>
          <div className="border-l-4 border-red-600 pl-6">
            <h3 className="font-bold text-lg mb-2">Temporary Resident to Permanent Resident</h3>
            <p className="text-gray-700">Pathway from work permit to permanent residency after gaining Canadian experience.</p>
          </div>
        </div>

        <div className="space-y-4">
          <button className="w-full bg-red-600 text-white py-3 rounded-lg font-bold hover:bg-red-700">View Full Guide</button>
          <button className="w-full bg-red-600 text-white py-3 rounded-lg font-bold hover:bg-red-700">Browse Canada Jobs</button>
          <button className="w-full bg-red-600 text-white py-3 rounded-lg font-bold hover:bg-red-700">Find Services</button>
        </div>
      </div>
    </main>
  );
}
