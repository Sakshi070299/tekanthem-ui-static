import type { Metadata } from 'next'
import {
  CheckCircle2,
  ArrowRight,
  BarChart3,
  Layers,
  FileText,
  Receipt,
  ShieldCheck,
  Lock,
  TrendingUp,
  PieChart,
  Table2,
  Target,
  Globe,
  Wallet,
  Users,
  BookOpen,
  Package,
  Boxes,
} from 'lucide-react'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Finance – Financial Accounting | Tekanthem',
  description:
    'Complete financial accounting with Payables, Receivables, Ledger, KPI dashboards, and document intelligence — built for freight forwarders.',
}

/* ─────────── Data ─────────── */

const outcomes = [
  {
    Icon: CheckCircle2,
    title: 'Enterprise-wide Financial Control',
    desc: 'Gain full financial control across branches, departments, and entities — without duplication or delay.',
  },
  {
    Icon: CheckCircle2,
    title: 'Revenue Accuracy from the Source',
    desc: 'With direct postings from operations, every transaction is captured at the right moment — without manual entries.',
  },
  {
    Icon: CheckCircle2,
    title: 'Stronger Credit & Cost Control',
    desc: 'Set credit limits, monitor outstanding amounts, and control operational costs — all from one unified view.',
  },
]

const coreFeatures = [
  {
    Icon: BarChart3,
    title: 'KPI Dashboard',
    desc: 'Real-time revenue, expenses, profit, and cash flow metrics on a single screen — fully widget-driven.',
  },
  {
    Icon: FileText,
    title: 'Document Intelligence',
    desc: 'Smart capture for purchase invoices, debit notes, credit notes, and receipts with zero manual re-entry.',
  },
  {
    Icon: ShieldCheck,
    title: 'Smart Tax Handling',
    desc: 'Configure taxes for local and international trade with accuracy — GST-ready and audit-compliant.',
  },
  {
    Icon: Layers,
    title: 'Direct Postings from Operations',
    desc: 'Sync financial data directly from your operations, enhancing efficiency and accuracy across entities.',
  },
  {
    Icon: TrendingUp,
    title: 'Budget Tracker',
    desc: 'Set, monitor, and alert on budget thresholds across cost centres — prevent overruns before they happen.',
  },
  {
    Icon: Wallet,
    title: 'Efficient Bank & Cash Management',
    desc: 'Centralise and streamline all bank and cash transactions for optimal clarity and control.',
  },
]

const reportingItems = [
  {
    side: 'right' as const,
    title: 'MIS & Financial Reports',
    desc: 'Get ready-to-use reports — P&L, balance sheet, cost centre views, income vs expense charts, and more — instantly, powered by ECharts visualisations.',
    bullets: ['P&L and Balance Sheet', 'Income vs Expense Chart', 'Cost Centre Analysis', 'ECharts bar / line / pie'],
  },
  {
    side: 'left' as const,
    title: 'Global System Integration',
    desc: 'Link effortlessly with Tekanthem Operations, Payroll, and CRM modules — ensuring broader operational scope and eliminating data silos.',
    bullets: ['Operations auto-postings', 'Payroll cost sync', 'CRM invoice flow', 'Multi-branch consolidation'],
  },
]

const securityItems = [
  {
    side: 'right' as const,
    title: 'Automated & Secure Reconciliation',
    desc: 'Match and reconcile bank entries with precision using secure automated workflows — reducing effort and boosting confidence in every closing cycle.',
    bullets: ['Bank statement import', 'Auto-match rules', 'Exception flagging', 'Audit-ready trail'],
  },
  {
    side: 'left' as const,
    title: 'Month Lock & Batch Processing',
    desc: 'Prevent backdated changes with smart month-close controls and batch processing that protects financial accuracy across locations.',
    bullets: ['Period locking', 'Batch journal posting', 'Role-based approvals', 'Multi-location sync'],
  },
]

const insightsItems = [
  {
    side: 'right' as const,
    title: 'Revenue Recognition',
    desc: 'Recognise revenue not just by timeline but by operational milestones. Get clarity on what\'s earned, booked, or pending in real time.',
    bullets: ['Milestone-based recognition', 'Pending vs earned split', 'Real-time accruals', 'Deferred revenue tracking'],
  },
  {
    side: 'left' as const,
    title: 'Transaction Table & Drill-Down',
    desc: 'Access the complete transaction table with filtering, sorting, and one-click drill-down from summary reports to source documents.',
    bullets: ['Full transaction log', 'Filter by entity / date / type', 'Source document linkage', 'Export to Excel / PDF'],
  },
]

const moduleGroups = [
  {
    name: 'Payables',
    Icon: Receipt,
    bullets: [
      'Supplier management',
      'Purchase Invoice & Debit Note',
      'Supplier Payment & Receipt',
      'Purchase Credit Note',
    ],
  },
  {
    name: 'Receivables',
    Icon: TrendingUp,
    bullets: [
      'Customer management',
      'Sales Invoice & Credit Note',
      'Customer Receipt',
      'Ageing & outstanding reports',
    ],
  },
  {
    name: 'Ledger',
    Icon: BookOpen,
    bullets: [
      'Chart of Accounts',
      'Journal Entry & Contra Entry',
      'Opening & Current Balance',
      'Sales / Purchase Credit & Debit Notes',
    ],
  },
  {
    name: 'Reports Dashboard',
    Icon: PieChart,
    bullets: [
      'User Dashboard with widgets',
      'ECharts bar / line / pie',
      'Income vs Expense Chart',
      'Branch-level MIS reports',
    ],
  },
  {
    name: 'Inventory',
    Icon: Boxes,
    bullets: [
      'Item management',
      'Warehouse management',
      'Hierarchies',
      'Stock valuation',
    ],
  },
]

/* ─────────── Block visuals ─────────── */

const BLOCK_VISUALS = [
  // 0 — Analytics / bar chart
  <svg key="chart" viewBox="0 0 176 96" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-hidden>
    <rect width="176" height="96" rx="12" fill="#eff6ff"/>
    <rect x="8" y="8" width="160" height="10" rx="3" fill="#dbeafe"/>
    <circle cx="16" cy="13" r="3" fill="#93c5fd"/><circle cx="24" cy="13" r="3" fill="#93c5fd"/><circle cx="32" cy="13" r="3" fill="#bfdbfe"/>
    <rect x="12" y="55" width="14" height="30" rx="3" fill="#3b82f6" fillOpacity="0.4"/>
    <rect x="30" y="44" width="14" height="41" rx="3" fill="#3b82f6" fillOpacity="0.6"/>
    <rect x="48" y="49" width="14" height="36" rx="3" fill="#3b82f6" fillOpacity="0.75"/>
    <rect x="66" y="36" width="14" height="49" rx="3" fill="#2563eb" fillOpacity="0.85"/>
    <rect x="84" y="27" width="14" height="58" rx="3" fill="#2563eb"/>
    <polyline points="110,62 122,48 134,54 146,38 160,44" stroke="#1d4ed8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <circle cx="146" cy="38" r="3.5" fill="#1d4ed8"/>
  </svg>,
  // 1 — Document / filing
  <svg key="doc" viewBox="0 0 176 96" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-hidden>
    <rect width="176" height="96" rx="12" fill="#eff6ff"/>
    <rect x="56" y="22" width="68" height="55" rx="5" fill="#dbeafe"/>
    <rect x="44" y="14" width="68" height="55" rx="5" fill="#bfdbfe"/>
    <rect x="32" y="7" width="68" height="55" rx="5" fill="white" stroke="#bfdbfe" strokeWidth="1.5"/>
    <rect x="42" y="17" width="36" height="4" rx="2" fill="#93c5fd"/>
    <rect x="42" y="26" width="48" height="3" rx="1.5" fill="#dbeafe"/>
    <rect x="42" y="33" width="42" height="3" rx="1.5" fill="#dbeafe"/>
    <rect x="42" y="40" width="48" height="3" rx="1.5" fill="#dbeafe"/>
    <rect x="42" y="47" width="32" height="3" rx="1.5" fill="#dbeafe"/>
    <circle cx="126" cy="68" r="14" fill="#2563eb"/>
    <polyline points="120,68 124,72 132,61" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>,
  // 2 — Integration / network
  <svg key="net" viewBox="0 0 176 96" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-hidden>
    <rect width="176" height="96" rx="12" fill="#eff6ff"/>
    <circle cx="88" cy="48" r="16" fill="#2563eb"/><circle cx="88" cy="48" r="10" fill="#1d4ed8"/>
    <circle cx="30" cy="22" r="10" fill="white" stroke="#93c5fd" strokeWidth="2"/>
    <circle cx="146" cy="22" r="10" fill="white" stroke="#93c5fd" strokeWidth="2"/>
    <circle cx="26" cy="76" r="10" fill="white" stroke="#93c5fd" strokeWidth="2"/>
    <circle cx="150" cy="76" r="10" fill="white" stroke="#93c5fd" strokeWidth="2"/>
    <line x1="39" y1="28" x2="74" y2="41" stroke="#93c5fd" strokeWidth="1.5" strokeDasharray="4 3"/>
    <line x1="137" y1="28" x2="102" y2="41" stroke="#93c5fd" strokeWidth="1.5" strokeDasharray="4 3"/>
    <line x1="35" y1="69" x2="74" y2="55" stroke="#93c5fd" strokeWidth="1.5" strokeDasharray="4 3"/>
    <line x1="141" y1="69" x2="102" y2="55" stroke="#93c5fd" strokeWidth="1.5" strokeDasharray="4 3"/>
    <rect x="23" y="18" width="14" height="3" rx="1.5" fill="#bfdbfe"/><rect x="139" y="18" width="14" height="3" rx="1.5" fill="#bfdbfe"/>
    <rect x="19" y="73" width="14" height="3" rx="1.5" fill="#bfdbfe"/><rect x="143" y="73" width="14" height="3" rx="1.5" fill="#bfdbfe"/>
  </svg>,
  // 3 — Security / compliance
  <svg key="shield" viewBox="0 0 176 96" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-hidden>
    <rect width="176" height="96" rx="12" fill="#eff6ff"/>
    <path d="M88 6 L122 21 L122 55 C122 74 88 88 88 88 C88 88 54 74 54 55 L54 21 Z" fill="#dbeafe" stroke="#93c5fd" strokeWidth="1.5"/>
    <path d="M88 16 L114 29 L114 55 C114 70 88 82 88 82 C88 82 62 70 62 55 L62 29 Z" fill="#bfdbfe"/>
    <circle cx="88" cy="52" r="17" fill="#2563eb"/>
    <polyline points="80,52 85,58 97,44" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>,
]

/* ─────────── Sub-components ─────────── */

function AlternatingBlock({
  item,
  index,
}: {
  item: (typeof reportingItems)[0]
  index: number
}) {
  const flip = index % 2 === 1
  return (
    <div
      className={`flex flex-col gap-4 rounded-2xl border border-ink-200 bg-white p-5 md:flex-row md:items-center ${
        flip ? 'md:flex-row-reverse' : ''
      }`}
    >
      <div className="flex-shrink-0 w-full md:w-44 h-24 rounded-xl overflow-hidden">
        {BLOCK_VISUALS[index % BLOCK_VISUALS.length]}
      </div>

      {/* Content */}
      <div className="flex-1">
        <h3 className="text-base font-semibold text-brand-700">{item.title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-ink-600">{item.desc}</p>
        <ul className="mt-3 space-y-1.5">
          {item.bullets.map((b) => (
            <li key={b} className="flex items-center gap-2 text-xs text-ink-500">
              <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-500" aria-hidden />
              {b}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

/* ─────────── Page ─────────── */

export default function FinancePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-brand-950">
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(ellipse at 20% 50%, #2563eb 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, #1d4ed8 0%, transparent 50%)',
          }}
          aria-hidden
        />
        <div className="container-pro relative py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-800/60 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-200 ring-1 ring-inset ring-brand-700">
              Payables · Receivables · Ledger · Reports · Inventory
            </span>
            <h1 className="heading-2 mt-4 text-white text-balance">
              Built-In Financial Accounting: Finance &amp; Operations on the Same Page
            </h1>
            <p className="mt-4 mx-auto max-w-2xl text-balance text-brand-200 text-base leading-relaxed">
              Gain unmatched visibility and control without relying on third-party systems. Tekanthem Finance enables you to manage receivables, payables, revenue flow, and outstanding transactions with high precision and efficiency.
            </p>
            <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button href="/contact?intent=demo" size="lg">
                Get a free demo
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                href="/pricing"
                variant="outline"
                size="lg"
                className="!border-brand-600 !text-brand-200 hover:!bg-brand-800"
              >
                View pricing
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Key Outcomes ── */}
      <section className="py-8 lg:py-12 border-y border-ink-200/70 bg-ink-50/60">
        <div className="container-pro">
          <div className="mx-auto max-w-xl text-center mb-6">
            <h2 className="heading-3">Key Outcomes with Tekanthem Finance</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {outcomes.map(({ Icon, title, desc }) => (
              <div
                key={title}
                className="flex flex-col items-center text-center rounded-2xl border border-ink-200 bg-white p-6 hover:shadow-md transition-shadow"
              >
                <Icon className="h-8 w-8 text-brand-600 mb-3" />
                <h3 className="text-sm font-semibold text-ink-900 leading-snug">{title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-ink-500">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Core Features ── */}
      <section className="py-8 lg:py-12">
        <div className="container-pro">
          {/* Section banner */}
          <div className="flex items-center justify-between rounded-2xl bg-brand-900 px-6 py-4 mb-8">
            <h2 className="text-lg font-semibold text-white">Core Features That Matter</h2>
            <Button
              href="/contact?intent=demo"
              className="!bg-white !text-brand-900 hover:!bg-brand-50"
              size="sm"
            >
              Let&apos;s Connect
            </Button>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {coreFeatures.map(({ Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-xl border border-ink-200 bg-white p-5 hover:border-brand-300 hover:shadow-sm transition-all"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-brand-800 text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-sm font-semibold text-ink-900 leading-snug">{title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-ink-500">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Advanced Reporting & Integration ── */}
      <section className="py-8 lg:py-12 bg-ink-50/60 border-y border-ink-200/70">
        <div className="container-pro">
          <div className="mx-auto max-w-xl text-center mb-6">
            <h2 className="heading-3">Advanced Reporting &amp; Integration</h2>
          </div>
          <div className="space-y-5">
            {reportingItems.map((item, i) => (
              <AlternatingBlock key={item.title} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Security & Data Accuracy ── */}
      <section className="section-block">
        <div className="container-pro">
          <div className="mx-auto max-w-xl text-center mb-6">
            <h2 className="heading-3">Security &amp; Data Accuracy</h2>
          </div>
          <div className="space-y-5">
            {securityItems.map((item, i) => (
              <AlternatingBlock key={item.title} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Deeper Financial Insights ── */}
      <section className="py-8 lg:py-12 bg-ink-50/60 border-y border-ink-200/70">
        <div className="container-pro">
          <div className="mx-auto max-w-xl text-center mb-6">
            <h2 className="heading-3">Deeper Financial Insights</h2>
          </div>
          <div className="space-y-5">
            {insightsItems.map((item, i) => (
              <AlternatingBlock key={item.title} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Modules ── */}
      <section className="section-block">
        <div className="container-pro">
          <div className="mx-auto max-w-xl text-center mb-6">
            <h2 className="heading-3">Tekanthem Finance Modules</h2>
            <p className="mt-2 text-sm text-ink-500">
              A complete module suite with deep integrations across the Tekanthem platform.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {moduleGroups.map(({ name, Icon, bullets }) => (
              <div
                key={name}
                className="rounded-2xl border border-ink-200 bg-white p-5 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-brand-600 to-brand-800 text-white flex-shrink-0">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h3 className="text-sm font-semibold text-ink-900">{name}</h3>
                </div>
                <ul className="space-y-2">
                  {bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 mt-0.5 flex-shrink-0 text-emerald-500" />
                      <span className="text-xs text-ink-600">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-8 lg:py-12 bg-ink-50/60 border-t border-ink-200/70">
        <div className="container-pro">
          <div className="rounded-3xl bg-gradient-to-br from-brand-600 to-brand-900 p-8 text-center">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
              Ready to streamline your financial management processes?
            </h2>
            <p className="mt-3 text-brand-200 text-sm max-w-xl mx-auto">
              Contact us to explore Tekanthem Finance or fill the contact form. Experience the future of financial management.
            </p>
            <div className="mt-7 flex flex-col sm:flex-row justify-center gap-3">
              <Button
                href="/contact?intent=demo"
                className="!bg-white !text-brand-800 hover:!bg-brand-50"
                size="lg"
              >
                Book a demo
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                href="/contact"
                variant="outline"
                className="!border-white/30 !text-white bg-transparent hover:!bg-white/10"
                size="lg"
              >
                Contact us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
