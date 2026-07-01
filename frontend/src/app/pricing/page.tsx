import type { Metadata } from 'next'
import { Fragment } from 'react'
import { Check, X, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { CTA } from '@/components/sections/CTA'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Simple, transparent pricing for every stage of business. Start free, upgrade as you grow.',
}

const PLANS = [
  {
    name: 'Starter',
    price: 'Free',
    period: 'forever',
    description: 'Perfect for founders and very small teams getting started.',
    features: [
      'Up to 3 users',
      '500 invoices / year',
      'GST invoicing',
      'Basic reports',
      'Email support',
    ],
    excludes: ['Multi-branch', 'API access', 'Priority support'],
    cta: 'Start free',
    popular: false,
  },
  {
    name: 'Growth',
    price: '₹2,499',
    period: 'per month, billed annually',
    description: 'For growing businesses that need more horsepower and integrations.',
    features: [
      'Up to 25 users',
      'Unlimited invoices',
      'Full GST + TDS',
      'Bank integrations',
      'Payroll for 50 employees',
      'Workflow automation',
      'API access',
      'Chat support',
    ],
    excludes: ['Multi-entity consolidation'],
    cta: 'Start 90-day trial',
    popular: true,
  },
  {
    name: 'Business',
    price: '₹6,999',
    period: 'per month, billed annually',
    description: 'Multi-product, multi-team, with advanced controls and analytics.',
    features: [
      'Unlimited users',
      'All products included',
      'Multi-branch, multi-GSTIN',
      'Advanced workflows',
      'Custom roles & approvals',
      'Custom reports',
      'Priority support',
      '99.95% uptime SLA',
    ],
    excludes: [],
    cta: 'Start 90-day trial',
    popular: false,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'tailored to your team',
    description: 'For larger organizations with custom workflows and dedicated support.',
    features: [
      'Custom user limits',
      'Dedicated CSM',
      'SSO, SAML, SCIM',
      'Audit logs & compliance',
      'Custom integrations',
      'On-premise option',
      'Onboarding & training',
      '99.99% uptime SLA',
    ],
    excludes: [],
    cta: 'Talk to sales',
    popular: false,
  },
] as const

const COMPARISON = [
  {
    category: 'Finance',
    rows: [
      ['GST Invoicing', '✓', '✓', '✓', '✓'],
      ['Bank reconciliation', '—', '✓', '✓', '✓'],
      ['Multi-currency', '—', '—', '✓', '✓'],
      ['Multi-entity', '—', '—', '✓', '✓'],
    ],
  },
  {
    category: 'Payroll',
    rows: [
      ['Employees included', '—', '50', 'Unlimited', 'Unlimited'],
      ['Statutory filings', '—', '✓', '✓', '✓'],
      ['Custom payslip templates', '—', '—', '✓', '✓'],
    ],
  },
  {
    category: 'Platform',
    rows: [
      ['API access', '—', '✓', '✓', '✓'],
      ['SSO / SAML', '—', '—', '—', '✓'],
      ['Dedicated support', '—', '—', '✓', '✓'],
      ['Uptime SLA', '99.5%', '99.9%', '99.95%', '99.99%'],
    ],
  },
] as const

const FAQS = [
  {
    q: 'Can I change plans later?',
    a: 'Yes — upgrade anytime. Downgrades take effect at the next billing cycle. No lock-in contracts.',
  },
  {
    q: 'Do you offer discounts for annual billing?',
    a: 'Annual billing saves you 20% across all paid plans. Quarterly billing is also available.',
  },
  {
    q: 'Is there a setup fee?',
    a: 'No setup fees on Starter, Growth, or Business plans. Enterprise plans include white-glove migration and onboarding.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'UPI, NEFT, RTGS, credit/debit cards, and bank transfers (Indian businesses). International cards accepted for non-Indian customers.',
  },
] as const

export default function PricingPage() {
  return (
    <>
      <section className="section-page-head">
        <div className="container-pro">
          <SectionHeading
            eyebrow="Pricing"
            title={
              <>
                Simple pricing that{' '}
                <span className="gradient-text">grows with you</span>
              </>
            }
            description="Start free. Upgrade when you need more. No hidden fees, no surprise charges, no per-feature paywalls."
          />
        </div>
      </section>

      {/* Plans grid */}
      <section className="section-block">
        <div className="container-pro">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PLANS.map((plan) => (
              <div
                key={plan.name}
                className={cn(
                  'relative flex flex-col rounded-2xl border bg-white p-7 transition-all',
                  plan.popular
                    ? 'border-brand-600 shadow-elevated ring-1 ring-brand-600'
                    : 'border-ink-200 shadow-card',
                )}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center rounded-full bg-brand-600 px-3 py-1 text-xs font-semibold text-white shadow-md">
                    Most popular
                  </span>
                )}
                <div className="text-sm font-semibold text-ink-900">
                  {plan.name}
                </div>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="font-display text-4xl font-extrabold text-ink-900">
                    {plan.price}
                  </span>
                </div>
                <div className="text-xs text-ink-500">{plan.period}</div>
                <p className="mt-4 text-sm text-ink-600 min-h-[3rem]">
                  {plan.description}
                </p>
                <Button
                  href={
                    plan.name === 'Enterprise'
                      ? '/contact?intent=sales'
                      : '/contact?intent=trial'
                  }
                  variant={plan.popular ? 'primary' : 'outline'}
                  className="mt-6 w-full justify-center"
                >
                  {plan.cta}
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <ul className="mt-6 space-y-2.5 text-sm text-ink-700">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                  {plan.excludes.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-ink-400"
                    >
                      <X className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      <span className="line-through">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="section-block">
        <div className="container-pro">
          <SectionHeading
            eyebrow="Compare"
            title="What's in every plan"
            align="center"
          />
          <div className="mt-12 overflow-x-auto">
            <table className="w-full min-w-[720px] border-separate border-spacing-0">
              <thead>
                <tr>
                  <th className="text-left text-sm font-semibold text-ink-900 pb-4 pr-4">
                    Feature
                  </th>
                  {PLANS.map((p) => (
                    <th
                      key={p.name}
                      className="px-4 pb-4 text-sm font-semibold text-ink-900 text-center"
                    >
                      {p.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((group) => (
                  <Fragment key={group.category}>
                    <tr>
                      <td
                        colSpan={5}
                        className="bg-ink-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-ink-600 first:rounded-l-md last:rounded-r-md"
                      >
                        {group.category}
                      </td>
                    </tr>
                    {group.rows.map((row, idx) => (
                      <tr key={idx} className="border-b border-ink-100">
                        <td className="py-3 pr-4 text-sm text-ink-800">
                          {row[0]}
                        </td>
                        {row.slice(1).map((v, i) => (
                          <td
                            key={i}
                            className="px-4 py-3 text-sm text-center text-ink-700"
                          >
                            {v === '✓' ? (
                              <Check className="h-4 w-4 text-emerald-600 mx-auto" />
                            ) : v === '—' ? (
                              <span className="text-ink-300">—</span>
                            ) : (
                              v
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-block bg-ink-50/60 border-y border-ink-200/70">
        <div className="container-pro ">
          <SectionHeading eyebrow="FAQ" title="Pricing questions" align="left" />
          <div className="mt-10 divide-y divide-ink-200 border-t border-b border-ink-200">
            {FAQS.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex cursor-pointer items-start justify-between gap-4 font-semibold text-ink-900">
                  {f.q}
                  <span className="text-ink-400 group-open:rotate-180 transition flex-shrink-0">
                    ⌄
                  </span>
                </summary>
                <p className="mt-3 text-ink-600 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
