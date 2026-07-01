import Link from 'next/link'
import { ArrowUpRight, Wallet, Banknote, Truck, Users } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { PRODUCTS } from '@/lib/site'
import { cn } from '@/lib/utils'

const ICON_MAP = {
  wallet: Wallet,
  banknote: Banknote,
  truck: Truck,
  users: Users,
} as const

const FEATURES: Record<string, string[]> = {
  finance: ['GST invoicing', 'Bank reconciliation', 'Expense management', 'P&L reports'],
  payroll: ['Salary processing', 'PF / ESI / TDS', 'Payslip portal', 'Statutory filings'],
  cnf: ['Shipment tracking', 'Customs paperwork', 'Freight invoicing', 'Partner network'],
  crm: ['Pipeline mgmt', 'Deal automation', 'Sales analytics', 'Email sequences'],
}

export function ProductSuite() {
  return (
    <section className="py-8 lg:py-12">
      <div className="container-pro">
        <SectionHeading
          eyebrow="The Tekanthem Suite"
          title={<>Four products. One unified platform.</>}
          description="Pick the app you need today. Add more as you grow. Everything talks to everything — no integrations, no duplicated data."
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((p, i) => {
            const Icon = ICON_MAP[p.icon as keyof typeof ICON_MAP]
            return (
              <Link
                key={p.slug}
                href={p.href}
                className="group relative flex flex-col rounded-2xl border border-ink-200 bg-white p-5 shadow-card transition-all hover:-translate-y-1 hover:shadow-elevated"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div
                  className={cn(
                    'inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br shadow-sm',
                    p.color,
                  )}
                >
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="mt-3 text-base font-bold text-ink-900">
                  {p.name}
                </h3>
                <p className="mt-1 text-sm text-ink-600">{p.tagline}</p>
                <ul className="mt-3 space-y-1.5 text-sm text-ink-700">
                  {FEATURES[p.slug].map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-600" />
                      {f}
                    </li>
                  ))}
                </ul>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-700 group-hover:text-brand-800">
                  Learn more
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
