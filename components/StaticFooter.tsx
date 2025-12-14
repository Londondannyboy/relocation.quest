import Link from 'next/link'

interface FooterLink {
  href: string
  label: string
}

interface StaticFooterProps {
  brandName?: string
  brandAccent?: string
  brandGradient?: string
  links?: FooterLink[]
}

const defaultLinks: FooterLink[] = [
  { href: '/guides', label: 'Guides' },
  { href: '/move-to-europe', label: 'Move to Europe' },
  { href: '/articles', label: 'Articles' },
  { href: '/chat', label: 'Chat' },
  { href: '/privacy', label: 'Privacy' },
]

export function StaticFooter({
  brandName = 'Relocation',
  brandAccent = 'Quest',
  brandGradient = 'from-purple-400 to-pink-500',
  links = defaultLinks,
}: StaticFooterProps) {
  return (
    <footer className="border-t py-6 border-gray-200 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-between gap-4">
        <p className="text-sm font-bold">
          <span className="text-gray-900">{brandName}</span>
          {brandAccent && <span className={`bg-gradient-to-r ${brandGradient} bg-clip-text text-transparent`}>{brandAccent}</span>}
        </p>
        <div className="flex gap-6">
          {links.slice(0, 4).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm transition text-gray-600 hover:text-gray-900"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} {brandName}{brandAccent}
        </p>
      </div>
    </footer>
  )
}
