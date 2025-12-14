import Link from 'next/link'

interface NavItem {
  href: string
  label: string
  highlight?: boolean
}

interface StaticHeaderProps {
  brandName?: string
  brandAccent?: string
  navItems?: NavItem[]
  brandGradient?: string
  signInGradient?: string
  signInPath?: string
}

const defaultNavItems: NavItem[] = [
  { href: '/guides', label: 'Guides' },
  { href: '/articles', label: 'Articles', highlight: true },
  { href: '/chat', label: 'Chat' },
  { href: '/voice', label: 'Voice' },
]

export function StaticHeader({
  brandName = 'Relocation',
  brandAccent = 'Quest',
  navItems = defaultNavItems,
  brandGradient = 'from-purple-400 to-pink-500',
  signInGradient = 'from-purple-500 to-pink-500',
  signInPath = '/handler/sign-in',
}: StaticHeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-sm border-gray-200 bg-white/90">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="text-xl font-bold">
            <span className="text-gray-900">{brandName}</span>
            {brandAccent && <span className={`bg-gradient-to-r ${brandGradient} bg-clip-text text-transparent`}>{brandAccent}</span>}
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm transition ${
                  item.highlight
                    ? 'text-amber-600 font-semibold'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href={signInPath}
            className={`px-4 py-2 bg-gradient-to-r ${signInGradient} rounded-lg hover:opacity-90 transition text-sm font-medium text-white`}
          >
            Sign In
          </Link>
        </div>
      </div>
    </header>
  )
}
