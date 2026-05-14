const LOGOS = [
  'Aurelia',
  'Northwind',
  'Lumio',
  'Stellaris',
  'Helix',
  'Mercato',
  'Apex Logix',
  'Vertex',
]

export function TrustedBy() {
  return (
    <section className="py-14 border-y border-ink-200/70 bg-ink-50/40">
      <div className="container-pro">
        <p className="text-center text-xs font-semibold uppercase tracking-wider text-ink-500">
          Trusted by 2,000+ teams across India · From Series A startups to listed enterprises
        </p>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-x-8 gap-y-6 items-center">
          {LOGOS.map((name) => (
            <div
              key={name}
              className="text-center font-display text-lg font-semibold text-ink-400 hover:text-ink-600 transition"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
