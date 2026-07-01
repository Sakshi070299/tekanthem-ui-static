import type { Metadata } from 'next'
import {
  CheckCircle2,
  ArrowRight,
  UserPlus,
  Banknote,
  BadgeCheck,
  Mail,
  Calendar,
  Wallet,
  FileText,
  LogOut,
  CreditCard,
  PiggyBank,
} from 'lucide-react'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Payroll – HR & Payroll Management | Tekanthem',
  description:
    'Run accurate, compliant payroll in minutes. PF, ESI, TDS, payslips, leave management, and direct disbursements — fully automated.',
}

/* ─────────── Data ─────────── */

const outcomes = [
  {
    Icon: CheckCircle2,
    title: 'Payroll in Under 30 Minutes',
    desc: 'Run payroll for 100+ employees in under 30 minutes — with auto-validation, no manual spreadsheets.',
  },
  {
    Icon: CheckCircle2,
    title: 'Zero Compliance Errors',
    desc: 'PF, ESI, PT, TDS auto-calculated and validated before submission — every statutory requirement covered.',
  },
  {
    Icon: CheckCircle2,
    title: 'Full Employee Self-Service',
    desc: 'Employees manage their own payslips, leaves, and IT declarations — zero HR intervention needed.',
  },
]

const coreFeatures = [
  {
    Icon: UserPlus,
    title: 'Employee Lifecycle',
    desc: 'Digital onboarding with offer letters, document collection, asset assignment, and exit checklists — end to end.',
  },
  {
    Icon: Banknote,
    title: 'Salary Processing',
    desc: 'Configurable salary structures with CTC components, variable pay, deductions, and arrear calculations.',
  },
  {
    Icon: BadgeCheck,
    title: 'Statutory Compliance',
    desc: 'PF, ESI, PT, LWF, TDS — auto-calculated with challans, returns, and ECR-ready files every cycle.',
  },
  {
    Icon: Mail,
    title: 'Payslips & Form 16',
    desc: 'Encrypted digital payslips delivered directly to employees. Annual Form 16 generated in one click.',
  },
  {
    Icon: Calendar,
    title: 'Leave & Attendance',
    desc: 'Customisable leave policies, biometric/GPS attendance import, and automatic LOP deduction calculations.',
  },
  {
    Icon: Wallet,
    title: 'Direct Bank Transfer',
    desc: 'NEFT/IMPS/RTGS via every major bank API. Bulk salary disbursement in a single approval step.',
  },
]

const complianceItems = [
  {
    title: 'PF, ESI & TDS Auto-Calculation',
    desc: 'Statutory deductions are automatically computed on every payroll run — PF (employer + employee), ESI, Professional Tax, LWF, and TDS under the applicable regime.',
    bullets: ['Auto PF & ESI computation', 'PT & LWF by state', 'TDS under old & new regime', 'ECR file generation'],
  },
  {
    title: 'Regulatory Returns & E-Filing',
    desc: 'Generate Form 26Q, 27EQ, and challan reconciliation reports ready for TRACES submission — no third-party tool required.',
    bullets: ['Form 26Q / 27EQ generation', 'Challan reconciliation', 'TRACES-ready export', 'PF & ESI return filing'],
  },
]

const selfServiceItems = [
  {
    title: 'Employee Self-Service Portal',
    desc: 'Every employee gets a self-service portal and mobile app — payslips, leave applications, IT declarations, and reimbursement claims all in one place.',
    bullets: ['Payslip download anytime', 'Leave application & approval', 'IT declaration form', 'Reimbursement claims'],
  },
  {
    title: 'Payslips, Form 16 & Compliance Docs',
    desc: 'Encrypted monthly payslips auto-delivered to employees. Annual Form 16 and 12BB generated and distributed with zero manual effort.',
    bullets: ['Encrypted payslip delivery', 'Form 16 & 12BB in one click', 'Investment proof collection', 'Full & final settlement docs'],
  },
]

const reportsItems = [
  {
    title: 'Payroll Reports & MIS',
    desc: 'Get ready-to-use payroll reports — cost centre summaries, department-wise salary breakdowns, variance reports, and month-on-month trend analysis.',
    bullets: ['Cost centre & department view', 'Month-on-month variance', 'Employer cost summary', 'Export to Excel / PDF'],
  },
  {
    title: 'Attendance & Leave Analytics',
    desc: 'Track leave balances, LOP trends, absenteeism patterns, and overtime across teams — with branch-level drill-down from a single dashboard.',
    bullets: ['Leave balance tracking', 'LOP & absenteeism reports', 'Overtime analysis', 'Branch-level drill-down'],
  },
]

const moduleGroups = [
  {
    name: 'Onboarding',
    Icon: UserPlus,
    bullets: ['Digital offer letters', 'Document collection', 'Asset assignment', 'Probation tracking'],
  },
  {
    name: 'Salary Engine',
    Icon: Banknote,
    bullets: ['CTC & component config', 'Variable & arrear pay', 'Multi-structure support', 'Bulk processing'],
  },
  {
    name: 'Statutory Filing',
    Icon: BadgeCheck,
    bullets: ['PF, ESI, PT, LWF', 'TDS old & new regime', 'ECR & challan files', 'Form 26Q / 27EQ'],
  },
  {
    name: 'Leave & Attendance',
    Icon: Calendar,
    bullets: ['Custom leave policies', 'Biometric / GPS import', 'Auto LOP deduction', 'Leave encashment'],
  },
  {
    name: 'Reimbursements',
    Icon: CreditCard,
    bullets: ['Medical & travel claims', 'Manager approval flow', 'Receipt attachment', 'Tax-exempt tracking'],
  },
  {
    name: 'Loans & Advances',
    Icon: PiggyBank,
    bullets: ['Salary advance requests', 'Loan EMI deduction', 'Outstanding balance view', 'Approval workflow'],
  },
  {
    name: 'Form 16 / 12BB',
    Icon: FileText,
    bullets: ['Auto Form 16 Part A & B', '12BB investment proofs', 'Bulk email delivery', 'Digital signature ready'],
  },
  {
    name: 'Exit Management',
    Icon: LogOut,
    bullets: ['Resignation workflow', 'F&F settlement calc', 'Gratuity & bonus payout', 'Experience letters'],
  },
]

/* ─────────── Block visuals ─────────── */

const BLOCK_VISUALS = [
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
  item: { title: string; desc: string; bullets: string[] }
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

export default function PayrollPage() {
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
              Payroll · Compliance · Leave · Self-Service
            </span>
            <h1 className="heading-2 mt-4 text-white text-balance">
              Run Accurate Payroll in Minutes — Fully Compliant, Fully Automated
            </h1>
            <p className="mt-4 mx-auto max-w-2xl text-balance text-brand-200 text-base leading-relaxed">
              From new hires to full and final settlements, Tekanthem Payroll handles every statutory requirement and disburses salaries directly to your team — no spreadsheets, no headaches.
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
            <h2 className="heading-3">Key Outcomes with Tekanthem Payroll</h2>
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
          <div className="flex items-center justify-between rounded-2xl bg-brand-900 px-6 py-4 mb-8">
            <h2 className="text-lg font-semibold text-white">Core Payroll Features</h2>
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

      {/* ── Statutory & Compliance ── */}
      <section className="py-8 lg:py-12 bg-ink-50/60 border-y border-ink-200/70">
        <div className="container-pro">
          <div className="mx-auto max-w-xl text-center mb-6">
            <h2 className="heading-3">Statutory &amp; Compliance</h2>
          </div>
          <div className="space-y-5">
            {complianceItems.map((item, i) => (
              <AlternatingBlock key={item.title} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Employee Self-Service ── */}
      <section className="py-8 lg:py-12">
        <div className="container-pro">
          <div className="mx-auto max-w-xl text-center mb-6">
            <h2 className="heading-3">Employee Self-Service</h2>
          </div>
          <div className="space-y-5">
            {selfServiceItems.map((item, i) => (
              <AlternatingBlock key={item.title} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Reports & Analytics ── */}
      <section className="py-8 lg:py-12 bg-ink-50/60 border-y border-ink-200/70">
        <div className="container-pro">
          <div className="mx-auto max-w-xl text-center mb-6">
            <h2 className="heading-3">Reports &amp; Analytics</h2>
          </div>
          <div className="space-y-5">
            {reportsItems.map((item, i) => (
              <AlternatingBlock key={item.title} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Modules ── */}
      <section className="py-8 lg:py-12">
        <div className="container-pro">
          <div className="mx-auto max-w-xl text-center mb-6">
            <h2 className="heading-3">Tekanthem Payroll Modules</h2>
            <p className="mt-2 text-sm text-ink-500">
              A complete module suite with deep integrations across the Tekanthem platform.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
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
              Ready to simplify payroll for your team?
            </h2>
            <p className="mt-3 text-brand-200 text-sm max-w-xl mx-auto">
              Contact us to explore Tekanthem Payroll or fill the contact form. Experience the future of HR and payroll management.
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
