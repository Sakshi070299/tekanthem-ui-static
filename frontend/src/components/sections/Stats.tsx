const STATS = [
  { value: '4', label: 'Suite products on one platform' },
  { value: 'India', label: 'GST, payroll & ops assumptions baked in' },
  { value: 'Weekly', label: 'Shipping cadence from real usage' },
  { value: 'Direct', label: 'Talk to the people building the product' },
] as const

export function Stats() {
  return (
    <section className="py-8 lg:py-12">
      <div className="container-pro">
        <div className="rounded-3xl bg-gradient-to-br from-brand-900 via-brand-800 to-brand-950 px-6 sm:px-12 py-8 text-white overflow-hidden relative">
          <div
            className="absolute inset-0 bg-grid-faint bg-[size:32px_32px] opacity-[0.07] pointer-events-none"
            aria-hidden
          />
          <div className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label}>
                <div className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight">
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
