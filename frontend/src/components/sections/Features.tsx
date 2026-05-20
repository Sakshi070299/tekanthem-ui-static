import {
  ShieldCheck,
  Zap,
  Globe2,
  GitBranch,
  BarChart3,
  Sparkles,
} from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'

const FEATURES = [
  {
    icon: Sparkles,
    title: 'AI assist, everywhere',
    description:
      'Auto-categorize transactions, draft proposals, predict churn, and answer questions in plain English.',
  },
  {
    icon: ShieldCheck,
    title: 'Bank-grade security',
    description:
      'SOC 2 Type II in progress, end-to-end encryption at rest and in transit, role-based access control on every record.',
  },
  {
    icon: Zap,
    title: 'Built for speed',
    description:
      'Pages load in under 200ms. Bulk operations run in seconds, not hours. Your team stays in flow.',
  },
  {
    icon: Globe2,
    title: 'India-first, world-ready',
    description:
      'GST, TDS, PF, ESI built natively. Multi-currency and multi-entity support when you scale globally.',
  },
  {
    icon: GitBranch,
    title: 'No more integrations',
    description:
      'Invoices flow into your books. Salaries hit your bank. Deals update inventory. One data model, zero CSVs.',
  },
  {
    icon: BarChart3,
    title: 'Reports that decide',
    description:
      'Real-time dashboards, drill-down P&L, AR aging, and customizable views. Export to Excel in one click.',
  },
 
] as const

export function Features() {
  return (
    <section className="section-block bg-ink-50/60 border-y border-ink-200/70">
      <div className="container-pro">
        <SectionHeading
          eyebrow="Why Tekanthem"
          title={<>Built for the way modern businesses actually work</>}
          description="We obsessed over the details so your team doesn't have to. From compliance to UX, every decision is made with growth in mind."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-ink-200 bg-white p-7 transition-all hover:border-brand-200 hover:shadow-card"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-100">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-ink-900">
                {f.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
