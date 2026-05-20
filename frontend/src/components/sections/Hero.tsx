import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const HIGHLIGHTS = [
  'GST & TDS ready out of the box',
  '90-day free trial · No card needed',
  'Built in India — we ship weekly with early teams',
]

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero pointer-events-none" aria-hidden />
      <div className="absolute inset-x-0 top-0 h-[640px] bg-grid-faint bg-[size:48px_48px] [mask-image:linear-gradient(to_bottom,white,transparent_80%)] pointer-events-none" aria-hidden />

      <div className="container-pro relative section-hero">
        <div className="mx-auto max-w-4xl text-center">
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-600 animate-pulse" />
            Tekanthem Suite 2026 · Now with AI Assist
          </span>
          <h1 className="heading-1 mt-6 text-balance">
            One platform for your{' '}
            <span className="gradient-text">entire business</span>
          </h1>
          <p className="lead mt-6 mx-auto max-w-2xl text-balance">
            Run finance, payroll, clearing &amp; forwarding, and customer
            relationships from a single integrated system. Built for India,
            ready for the world.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button href="/contact?intent=demo" size="lg">
              Start free trial
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="/pricing" variant="outline" size="lg">
              See pricing
            </Button>
          </div>

          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-ink-600">
            {HIGHLIGHTS.map((h) => (
              <li key={h} className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                {h}
              </li>
            ))}
          </ul>
        </div>

        {/* Product preview mockup */}
        <div className="mt-16 sm:mt-20 relative mx-auto max-w-5xl">
          <div className="absolute -inset-x-4 -inset-y-2 bg-gradient-to-r from-brand-600/20 via-brand-500/10 to-accent-500/20 blur-2xl rounded-3xl" aria-hidden />
          <div className="relative rounded-2xl border border-ink-200 bg-white shadow-elevated overflow-hidden">
            <div className="flex items-center gap-1.5 border-b border-ink-200 bg-ink-50 px-4 py-2.5">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-amber-400" />
              <span className="h-3 w-3 rounded-full bg-emerald-400" />
              <span className="ml-3 text-xs font-mono text-ink-500">
              tekanthem.com/dashboard
              </span>
            </div>
            <div className="grid grid-cols-12 min-h-[420px]">
              <aside className="col-span-3 border-r border-ink-200 bg-ink-50/50 p-4 space-y-1.5">
                {['Dashboard', 'Finance', 'Payroll', 'C&F', 'CRM', 'Reports', 'Settings'].map(
                  (item, i) => (
                    <div
                      key={item}
                      className={
                        i === 0
                          ? 'flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-sm font-medium text-brand-700 shadow-sm'
                          : 'flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-ink-600'
                      }
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-current opacity-60" />
                      {item}
                    </div>
                  ),
                )}
              </aside>
              <div className="col-span-9 p-6 space-y-4">
                <div className="grid grid-cols-4 gap-3">
                  {[
                    { label: 'Revenue (MTD)', value: '₹42.8L', delta: '+12.4%' },
                    { label: 'Outstanding', value: '₹8.2L', delta: '-5.1%' },
                    { label: 'Active Deals', value: '128', delta: '+18' },
                    { label: 'Payroll due', value: '₹16.4L', delta: 'May 31' },
                  ].map((kpi) => (
                    <div
                      key={kpi.label}
                      className="rounded-xl border border-ink-200 bg-white p-3.5"
                    >
                      <div className="text-xs text-ink-500">{kpi.label}</div>
                      <div className="mt-1.5 text-lg font-bold text-ink-900">
                        {kpi.value}
                      </div>
                      <div className="mt-1 text-xs font-medium text-emerald-600">
                        {kpi.delta}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="rounded-xl border border-ink-200 bg-white p-4">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-semibold text-ink-900">
                      Cash flow · last 12 months
                    </div>
                    <div className="text-xs text-ink-500">
                      Updated 2 min ago
                    </div>
                  </div>
                  <div className="mt-4 flex items-end gap-1.5 h-24">
                    {[40, 55, 48, 62, 70, 65, 80, 72, 88, 92, 85, 96].map(
                      (h, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-t bg-gradient-to-t from-brand-600 to-brand-400"
                          style={{ height: `${h}%` }}
                        />
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
