import type { Metadata } from 'next'
import {
  CheckCircle2,
  ArrowRight,
  GitBranch,
  Users,
  Zap,
  Mail,
  Target,
  Sparkles,
  TrendingUp,
  Bell,
  BarChart3,
  MessageSquare,
  ClipboardList,
  MapPin,
  FileText,
  PhoneCall,
} from 'lucide-react'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'CRM – Sales & Customer Management | Tekanthem',
  description:
    'A CRM your sales team will actually use — pipeline, contacts, automations, forecasting, and AI assist built for B2B teams.',
}

/* ─────────── Data ─────────── */

const outcomes = [
  {
    Icon: CheckCircle2,
    title: 'All-in-One Sales Journey',
    desc: 'From lead capture to closed deal — manage every stage of your sales journey with full 360° visibility.',
  },
  {
    Icon: CheckCircle2,
    title: 'Built for B2B Sales Teams',
    desc: 'A dedicated CRM designed for teams that care about pipeline velocity, conversion rates, and revenue growth.',
  },
  {
    Icon: CheckCircle2,
    title: 'Less Admin, More Selling',
    desc: 'Auto-log calls, emails, and meetings. Reduce data entry by 60% so your reps focus on closing — not typing.',
  },
]

const coreFeatures = [
  {
    Icon: GitBranch,
    title: 'Visual Pipeline',
    desc: 'Kanban-style deal pipeline with drag-to-stage, weighted forecasts, and rotting deal alerts.',
  },
  {
    Icon: Users,
    title: 'Contacts & Companies',
    desc: 'Unified view of every interaction — emails, calls, meetings, notes, and attachments across the team.',
  },
  {
    Icon: Zap,
    title: 'Workflow Automation',
    desc: 'No-code rules: assign leads, send sequences, update fields, alert managers — all triggered by events.',
  },
  {
    Icon: Mail,
    title: 'Email & Calls',
    desc: 'Two-way Gmail/Outlook sync, call logging, sequenced outreach, and reply tracking in one place.',
  },
  {
    Icon: Target,
    title: 'Forecasting',
    desc: 'Roll-up forecasts by team, region, product, and rep — with confidence bands and historical accuracy.',
  },
  {
    Icon: Sparkles,
    title: 'AI Sales Assist',
    desc: 'Auto-summarise calls, draft follow-up emails, score leads, and surface the next best action.',
  },
]

const acquisitionItems = [
  {
    title: 'Lead & Opportunity Management',
    desc: 'Capture and nurture leads effectively with Inquiry management, Quotation, and Tariff & Rates tools — every prospect tracked from first touch to close.',
    bullets: ['Lead capture & assignment', 'Inquiry & quotation flow', 'Tariff & rate management', 'Lead scoring & prioritisation'],
  },
  {
    title: 'Enhanced Customer Interaction',
    desc: 'Record all touchpoints — staff responses, follow-ups, and service interactions — for improved customer satisfaction and full interaction history.',
    bullets: ['360° customer timeline', 'Staff response tracking', 'Follow-up reminders', 'Customer satisfaction metrics'],
  },
]

const salesPlanningItems = [
  {
    title: 'Strategic Sales Tools',
    desc: 'From forecasting to budgeting, Tekanthem CRM ensures your team is always ahead in the market with data-driven planning.',
    bullets: ['Revenue forecasting', 'Budget vs actual tracking', 'Territory & target setting', 'Team quota management'],
  },
  {
    title: 'Sales Activity Tools',
    desc: 'Keep track of your entire sales lifecycle with Visit & Meeting Planning, To-Do Lists, and Opportunity Analysis — all in one workspace.',
    bullets: ['Visit & meeting planner', 'To-do & task management', 'Opportunity analysis', 'Activity timeline per deal'],
  },
]

const serviceItems = [
  {
    title: 'Performance Tracking',
    desc: 'Monitor your sales team\'s activities with the Executive Wise Sales Report and Sales Person\'s Performance Report — clear visibility into who\'s driving results.',
    bullets: ['Executive-wise sales report', 'Rep performance dashboard', 'Pipeline conversion rates', 'Month-on-month comparison'],
  },
  {
    title: 'Effective Reporting & Intelligence',
    desc: 'Dive deep into Opportunity Conversion Reports and other strategic insights — powered by ECharts visualisations for quick, actionable decisions.',
    bullets: ['Opportunity conversion report', 'Win/loss analysis', 'ECharts dashboards', 'Export to Excel / PDF'],
  },
]

const moduleGroups = [
  {
    name: 'Pipeline & Deals',
    Icon: GitBranch,
    bullets: ['Kanban deal board', 'Drag-to-stage updates', 'Weighted forecasting', 'Rotting deal alerts'],
  },
  {
    name: 'Contacts & Companies',
    Icon: Users,
    bullets: ['Unified contact timeline', 'Company hierarchy view', 'Duplicate detection', 'Tag & segment'],
  },
  {
    name: 'Email Sync',
    Icon: Mail,
    bullets: ['Two-way Gmail & Outlook', 'Email open tracking', 'Reply detection', 'Thread linking to deals'],
  },
  {
    name: 'Sequences',
    Icon: MessageSquare,
    bullets: ['Multi-step email sequences', 'Auto-enrol on trigger', 'Pause on reply', 'A/B subject testing'],
  },
  {
    name: 'Quotes & Proposals',
    Icon: FileText,
    bullets: ['One-click quote from deal', 'PDF proposal builder', 'e-Signature ready', 'Finance invoice sync'],
  },
  {
    name: 'Forecasting',
    Icon: TrendingUp,
    bullets: ['Team & rep roll-ups', 'Confidence band view', 'Historical accuracy', 'Scenario planning'],
  },
  {
    name: 'Territory Mgmt',
    Icon: MapPin,
    bullets: ['Region & zone setup', 'Lead routing rules', 'Territory performance', 'Rep assignment logic'],
  },
  {
    name: 'AI Assistant',
    Icon: Sparkles,
    bullets: ['Call summarisation', 'Follow-up email drafts', 'Lead scoring', 'Next best action'],
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

export default function CRMPage() {
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
              Pipeline · Contacts · Automation · AI
            </span>
            <h1 className="heading-2 mt-4 text-white text-balance">
              Forge Stronger Customer Bonds with Sales &amp; CRM
            </h1>
            <p className="mt-4 mx-auto max-w-2xl text-balance text-brand-200 text-base leading-relaxed">
              Enhance your business acquisition, growth, and customer satisfaction strategies with Tekanthem CRM — designed for B2B sales teams who care about velocity and conversion, not data entry.
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
            <h2 className="heading-3">Comprehensive Sales &amp; Customer Service Management</h2>
            <p className="mt-2 text-sm text-brand-600 font-medium">
              Our CRM helps shape your business&apos;s growth and customer strategies with precision.
            </p>
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
            <h2 className="text-lg font-semibold text-white">Core CRM Features</h2>
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

      {/* ── Customer Acquisition & Retention ── */}
      <section className="py-8 lg:py-12 bg-ink-50/60 border-y border-ink-200/70">
        <div className="container-pro">
          <div className="mx-auto max-w-xl text-center mb-6">
            <h2 className="heading-3">Detailed Customer Acquisition &amp; Retention</h2>
            <p className="mt-2 text-sm text-brand-600 font-medium">
              Every customer interaction is an opportunity.
            </p>
          </div>
          <div className="space-y-5">
            {acquisitionItems.map((item, i) => (
              <AlternatingBlock key={item.title} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Dynamic Sales Planning ── */}
      <section className="py-8 lg:py-12">
        <div className="container-pro">
          <div className="mx-auto max-w-xl text-center mb-6">
            <h2 className="heading-3">Dynamic Sales Planning &amp; Monitoring</h2>
            <p className="mt-2 text-sm text-brand-600 font-medium">
              Revolutionise your sales approach with data-driven tools.
            </p>
          </div>
          <div className="space-y-5">
            {salesPlanningItems.map((item, i) => (
              <AlternatingBlock key={item.title} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Performance & Reporting ── */}
      <section className="py-8 lg:py-12 bg-ink-50/60 border-y border-ink-200/70">
        <div className="container-pro">
          <div className="mx-auto max-w-xl text-center mb-6">
            <h2 className="heading-3">Performance Tracking &amp; Reporting</h2>
            <p className="mt-2 text-sm text-brand-600 font-medium">
              Deep insights to keep your sales strategy always ahead.
            </p>
          </div>
          <div className="space-y-5">
            {serviceItems.map((item, i) => (
              <AlternatingBlock key={item.title} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Modules ── */}
      <section className="py-8 lg:py-12">
        <div className="container-pro">
          <div className="mx-auto max-w-xl text-center mb-6">
            <h2 className="heading-3">Tekanthem CRM Modules</h2>
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
              Ready to take your customer relationships to the next level?
            </h2>
            <p className="mt-3 text-brand-200 text-sm max-w-xl mx-auto">
              Contact us to explore Tekanthem CRM or fill the contact form. Experience the future of sales and customer management.
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
