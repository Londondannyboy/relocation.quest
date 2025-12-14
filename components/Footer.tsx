import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-green-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-black text-2xl">R</span>
              </div>
              <div>
                <span className="font-bold text-white text-xl">Relocation</span>
                <span className="text-gray-400 font-bold text-xl">.Quest</span>
              </div>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Your complete guide to international relocation. Discover visa options,
              cost of living, job opportunities, and expert services across 50+ destinations.
            </p>
          </div>

          {/* Navigation Columns */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {/* For Individuals */}
              <div>
                <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wide">
                  For Individuals
                </h4>
                <ul className="space-y-3">
                  <li>
                    <Link href="/destinations" className="text-gray-400 hover:text-white text-sm transition-colors">
                      Explore Destinations
                    </Link>
                  </li>
                  <li>
                    <Link href="/calculator" className="text-gray-400 hover:text-white text-sm transition-colors">
                      Cost Calculator
                    </Link>
                  </li>
                  <li>
                    <Link href="/jobs" className="text-gray-400 hover:text-white text-sm transition-colors">
                      Browse Jobs
                    </Link>
                  </li>
                  <li>
                    <Link href="/guides" className="text-gray-400 hover:text-white text-sm transition-colors">
                      Relocation Guides
                    </Link>
                  </li>
                  <li>
                    <Link href="/handler/sign-up" className="text-gray-400 hover:text-white text-sm transition-colors">
                      Get Started
                    </Link>
                  </li>
                </ul>
              </div>

              {/* For Companies */}
              <div>
                <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wide">
                  For Companies
                </h4>
                <ul className="space-y-3">
                  <li>
                    <Link href="/services/corporate-relocation" className="text-gray-400 hover:text-white text-sm transition-colors">
                      Corporate Relocation
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-gray-400 hover:text-white text-sm transition-colors">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Popular Destinations */}
              <div>
                <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wide">
                  Popular Destinations
                </h4>
                <ul className="space-y-3">
                  <li>
                    <Link href="/destinations/portugal" className="text-gray-400 hover:text-white text-sm transition-colors">
                      Portugal
                    </Link>
                  </li>
                  <li>
                    <Link href="/destinations/spain" className="text-gray-400 hover:text-white text-sm transition-colors">
                      Spain
                    </Link>
                  </li>
                  <li>
                    <Link href="/destinations/dubai" className="text-gray-400 hover:text-white text-sm transition-colors">
                      Dubai
                    </Link>
                  </li>
                  <li>
                    <Link href="/destinations/canada" className="text-gray-400 hover:text-white text-sm transition-colors">
                      Canada
                    </Link>
                  </li>
                  <li>
                    <Link href="/destinations/australia" className="text-gray-400 hover:text-white text-sm transition-colors">
                      Australia
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wide">
                  Resources
                </h4>
                <ul className="space-y-3">
                  <li>
                    <Link href="/guides/relocation-tax-allowances" className="text-gray-400 hover:text-white text-sm transition-colors">
                      Tax Guides
                    </Link>
                  </li>
                  <li>
                    <Link href="/guides" className="text-gray-400 hover:text-white text-sm transition-colors">
                      All Guides
                    </Link>
                  </li>
                  <li>
                    <Link href="/calculator" className="text-gray-400 hover:text-white text-sm transition-colors">
                      Cost Calculator
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                      Terms of Service
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Relocation Quest. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <span className="text-xs text-gray-400 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                Beta — Launching 2025
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
