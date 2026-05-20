/** Focus areas we design for — not customer logos. */
const FOCUS_AREAS = [
  'Finance & GST',
  'Payroll & statutory',
  'C&F / logistics',
  'B2B sales',
  'Multi-branch',
  'Founder-led teams',
  'Compliance-heavy ops',
  'Replacing tool sprawl',
] as const

export function TrustedBy() {
  return (
    <section className="section-block border-y border-ink-200/70 bg-ink-50/40">
      <div className="container-pro">
        <p className="text-center text-xs font-semibold uppercase tracking-wider text-ink-500">
          Built in India · Early product — we work closely with pilot teams shaping the roadmap
        </p>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-x-8 gap-y-6 items-center">
          {FOCUS_AREAS.map((name) => (
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
