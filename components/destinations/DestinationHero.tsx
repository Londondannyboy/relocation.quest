interface DestinationHeroProps {
  title: string
  subtitle: string
  gradient: string
  flag: string
  countryName: string
}

export function DestinationHero({ title, subtitle, gradient, flag, countryName }: DestinationHeroProps) {
  return (
    <section className={`bg-gradient-to-r ${gradient} text-white py-16`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-7xl filter drop-shadow-lg">{flag}</span>
          <div>
            <h1 className="text-5xl font-bold mb-2">{title}</h1>
            <p className="text-xl opacity-90">{subtitle}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
