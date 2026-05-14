const STATS = [
  { value: '2,000+', label: 'Active businesses' },
  { value: '₹1,200 Cr+', label: 'Processed annually' },
  { value: '99.97%', label: 'Uptime SLA' },
  { value: '< 4 hrs', label: 'Median support response' },
] as const

export function Stats() {
  return (
    <section className="py-20 lg:py-24">
      <div className="container-pro">
        <div className="rounded-3xl bg-gradient-to-br from-brand-900 via-brand-800 to-brand-950 px-6 sm:px-12 py-14 text-white overflow-hidden relative">
          <div
            className="absolute inset-0 bg-grid-faint bg-[size:32px_32px] opacity-[0.07] pointer-events-none"
            aria-hidden
          />
          <div className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label}>
                <div className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight">
                  {s.value}
                </div>
                <div className="mt-2 text-sm text-brand-200">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
