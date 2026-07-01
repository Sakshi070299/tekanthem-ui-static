import type { Metadata } from 'next'
import {
  Plane,
  Ship,
  Truck,
  FileText,
  Receipt,
  BarChart3,
  Zap,
  Globe,
  Layers,
  Anchor,
  Database,
  Shield,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'C&F – Clearing & Forwarding | Tekanthem',
  description:
    'Manage air freight, sea freight, customs documentation, and EDI filings with Tekanthem C&F — built for Indian logistics.',
}

/* ─────────── Data ─────────── */

const overviewFeatures = [
  {
    Icon: Truck,
    title: 'Inbound & Outbound Operations',
    desc: 'From pre-alerts to delivery orders and bookings — complete visibility across every shipment leg.',
  },
  {
    Icon: Receipt,
    title: 'Freight Billing & Accounting',
    desc: 'Automated operational accounting covering all revenue, expenses, and multi-currency invoicing.',
  },
  {
    Icon: FileText,
    title: 'Advanced Documentation',
    desc: 'Generate and house BL/HBL, manifests, and more — managed in a streamlined, error-free manner.',
  },
  {
    Icon: BarChart3,
    title: 'Reports & MIS',
    desc: 'Detailed, export-ready reports and MIS delivered directly from the platform for smarter decisions.',
  },
  {
    Icon: Zap,
    title: 'Seamless Integration',
    desc: 'Cross-module sync eliminates data re-entry, making it an ideal end-to-end freight automation tool.',
  },
]

const airFeatures = [
  {
    Icon: FileText,
    title: 'Booking & Documentation',
    desc: 'Front AWB to House AWB — complete control over documentation with precision at every step.',
  },
  {
    Icon: Globe,
    title: 'Manage Shipments Worldwide',
    desc: 'Handle both domestic and international consignments through fully customizable workflows.',
  },
  {
    Icon: BarChart3,
    title: 'Comprehensive Reporting',
    desc: 'Gain insights into flight schedules, commissions, incentives, and shipment-level profitability.',
  },
  {
    Icon: Layers,
    title: 'Streamlined Operations',
    desc: 'Consol billing, direct consolidation, and back-to-back shipments managed from one screen.',
  },
  {
    Icon: Database,
    title: 'Integration & Reporting',
    desc: 'IATA integration for members, AMS/AES for US customs, and user-configurable document exports.',
  },
]

const seaFeatures = [
  {
    Icon: FileText,
    title: 'Booking & Documentation',
    desc: 'Manage BL, HBL, and all related documents with ease — single entry, multiple outputs.',
  },
  {
    Icon: Layers,
    title: 'Integrated Operations',
    desc: 'Streamlined sea freight workflow from direct BL & HBL to consolidation and back-to-back shipments.',
  },
  {
    Icon: Anchor,
    title: 'Vessel & Container Management',
    desc: 'Stay updated with vessel sailing schedules, container tracking, and operational notifications.',
  },
  {
    Icon: Receipt,
    title: 'Financial Advantages',
    desc: 'Manage freight rates, charge schedules, direct-account posting, and financial locking systems.',
  },
  {
    Icon: Shield,
    title: 'Integration & Compliance',
    desc: 'IATA/ISF integration for members, compliance features for AMS, AES, and ISF 10+2.',
  },
]

const ediItems = [
  {
    title: 'Direct Data Transfer',
    desc: 'Send freight shipment and consol data directly from our application to respective customs authorities, eliminating any redundancy or manual re-keying.',
  },
  {
    title: 'Independent Submissions',
    desc: 'Declare air and sea freight manifests to any customs office without relying on third-party agents — full control in your hands.',
  },
  {
    title: 'Broad Global Scope',
    desc: 'Seamlessly handle manifest filings for the US, Canada, Japan, Philippines, Singapore, Fiji, Bangladesh, Sri Lanka, Jamaica, and Panama, among others.',
  },
  {
    title: 'Wide Array of Declaration Formats',
    desc: 'Supports US-AMS, AES, ISF, Canada-ACI, Japan-JP24 (AFR), Philippines Manifest, Singapore Customs Permit Filing, Fiji Manifest, and several more for comprehensive air & sea operations.',
  },
]

const moduleGroups = [
  {
    name: 'Air Freight',
    Icon: Plane,
    bullets: [
      'Front AWB to HAWB management',
      'IATA integration & commissions',
      'Consol & direct billing',
      'AMS / AES for US customs',
    ],
  },
  {
    name: 'Sea Freight',
    Icon: Ship,
    bullets: [
      'BL / HBL documentation',
      'Vessel & container tracking',
      'FCL, LCL & NVOCC support',
      'ISF 10+2 compliance',
    ],
  },
  {
    name: 'Customs & Filing',
    Icon: FileText,
    bullets: [
      'ICEGATE / EDI integration',
      'Multi-country manifest filing',
      'Duty & drawback management',
      'Import / Export declarations',
    ],
  },
  {
    name: 'Financial Accounting',
    Icon: Receipt,
    bullets: [
      'Multi-currency freight billing',
      'Agent & vendor statements',
      'Port cost & disbursement',
      'Profit per shipment view',
    ],
  },
]

/* ─────────── Page ─────────── */

const CNF_VISUALS = [
  // 0 — Data transfer / arrows
  <svg key="transfer" viewBox="0 0 176 112" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-hidden>
    <rect width="176" height="112" rx="12" fill="#eff6ff"/>
    <rect x="12" y="18" width="60" height="76" rx="8" fill="white" stroke="#bfdbfe" strokeWidth="1.5"/>
    <rect x="104" y="18" width="60" height="76" rx="8" fill="white" stroke="#bfdbfe" strokeWidth="1.5"/>
    <rect x="20" y="28" width="44" height="4" rx="2" fill="#dbeafe"/>
    <rect x="20" y="37" width="36" height="3" rx="1.5" fill="#eff6ff"/>
    <rect x="20" y="44" width="40" height="3" rx="1.5" fill="#eff6ff"/>
    <rect x="112" y="28" width="44" height="4" rx="2" fill="#dbeafe"/>
    <rect x="112" y="37" width="36" height="3" rx="1.5" fill="#eff6ff"/>
    <rect x="112" y="44" width="40" height="3" rx="1.5" fill="#eff6ff"/>
    <path d="M76 52 L100 52" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" markerEnd="url(#arrow)"/>
    <path d="M100 62 L76 62" stroke="#93c5fd" strokeWidth="2" strokeLinecap="round"/>
    <polygon points="100,49 106,52 100,55" fill="#2563eb"/>
    <polygon points="76,59 70,62 76,65" fill="#93c5fd"/>
  </svg>,
  // 1 — Filing / clipboard
  <svg key="filing" viewBox="0 0 176 112" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-hidden>
    <rect width="176" height="112" rx="12" fill="#eff6ff"/>
    <rect x="48" y="14" width="80" height="84" rx="8" fill="white" stroke="#bfdbfe" strokeWidth="1.5"/>
    <rect x="60" y="10" width="56" height="14" rx="4" fill="#2563eb"/>
    <rect x="60" y="32" width="56" height="4" rx="2" fill="#dbeafe"/>
    <rect x="60" y="42" width="48" height="3" rx="1.5" fill="#eff6ff"/>
    <rect x="60" y="50" width="52" height="3" rx="1.5" fill="#eff6ff"/>
    <rect x="60" y="58" width="44" height="3" rx="1.5" fill="#eff6ff"/>
    <rect x="60" y="70" width="52" height="3" rx="1.5" fill="#dbeafe"/>
    <rect x="60" y="78" width="40" height="3" rx="1.5" fill="#eff6ff"/>
    <circle cx="138" cy="88" r="16" fill="#2563eb"/>
    <polyline points="131,88 135,93 145,81" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>,
  // 2 — Globe / global scope
  <svg key="globe" viewBox="0 0 176 112" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-hidden>
    <rect width="176" height="112" rx="12" fill="#eff6ff"/>
    <circle cx="88" cy="56" r="38" fill="white" stroke="#bfdbfe" strokeWidth="1.5"/>
    <ellipse cx="88" cy="56" rx="18" ry="38" fill="none" stroke="#dbeafe" strokeWidth="1.5"/>
    <line x1="50" y1="56" x2="126" y2="56" stroke="#dbeafe" strokeWidth="1.5"/>
    <path d="M54 38 Q88 46 122 38" stroke="#dbeafe" strokeWidth="1" fill="none"/>
    <path d="M54 74 Q88 66 122 74" stroke="#dbeafe" strokeWidth="1" fill="none"/>
    <circle cx="88" cy="56" r="8" fill="#2563eb"/>
    <circle cx="62" cy="42" r="4" fill="#93c5fd"/>
    <circle cx="118" cy="48" r="4" fill="#93c5fd"/>
    <circle cx="70" cy="70" r="4" fill="#93c5fd"/>
    <circle cx="110" cy="68" r="4" fill="#93c5fd"/>
  </svg>,
  // 3 — Multi-format / layers
  <svg key="layers" viewBox="0 0 176 112" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-hidden>
    <rect width="176" height="112" rx="12" fill="#eff6ff"/>
    <rect x="28" y="72" width="120" height="24" rx="6" fill="#dbeafe" stroke="#93c5fd" strokeWidth="1"/>
    <rect x="28" y="48" width="120" height="24" rx="6" fill="#bfdbfe" stroke="#93c5fd" strokeWidth="1"/>
    <rect x="28" y="24" width="120" height="24" rx="6" fill="white" stroke="#93c5fd" strokeWidth="1.5"/>
    <rect x="38" y="30" width="32" height="4" rx="2" fill="#93c5fd"/>
    <rect x="38" y="38" width="50" height="3" rx="1.5" fill="#dbeafe"/>
    <rect x="38" y="54" width="40" height="3" rx="1.5" fill="#93c5fd"/>
    <rect x="38" y="62" width="55" height="3" rx="1.5" fill="#bfdbfe"/>
    <rect x="38" y="78" width="36" height="3" rx="1.5" fill="#bfdbfe"/>
    <rect x="38" y="86" width="48" height="3" rx="1.5" fill="#dbeafe"/>
    <circle cx="136" cy="30" r="8" fill="#2563eb" opacity="0.8"/>
    <circle cx="136" cy="54" r="8" fill="#2563eb" opacity="0.6"/>
    <circle cx="136" cy="78" r="8" fill="#2563eb" opacity="0.4"/>
  </svg>,
]

export default function CnFPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-50 via-white to-brand-50 pointer-events-none" aria-hidden />
        <div className="container-pro relative section-hero">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Customs · Air Freight · Sea Freight · EDI</span>
            <h1 className="heading-1 mt-6 text-balance">
              Freight Forwarding &amp; Clearing Made Simple
            </h1>
            <p className="lead mt-6 mx-auto max-w-2xl text-balance">
              Tekanthem C&amp;F empowers clearing &amp; forwarding agents with a unified platform that optimises efficiency and accuracy — from booking to customs clearance to final delivery.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button href="/contact?intent=demo" size="lg">
                Get a free demo
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/pricing" variant="outline" size="lg">
                View pricing
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Overview Features ── */}
      <section className="section-block border-y border-ink-200/70 bg-ink-50/60">
        <div className="container-pro">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="heading-3">Everything a C&amp;F agent needs</h2>
            <p className="mt-2 text-ink-600 text-sm">
              One platform. Every workflow. Zero compromise.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {overviewFeatures.map(({ Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-2xl border border-ink-200 bg-white p-5 hover:shadow-md transition-shadow"
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

      {/* ── Air Freight Management ── */}
      <section className="section-block">
        <div className="container-pro">
          {/* Section header strip */}
          <div className="flex items-center justify-between rounded-2xl bg-brand-900 px-6 py-4">
            <div className="flex items-center gap-3">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
                <Plane className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-xs font-medium text-brand-200 uppercase tracking-wider">Module</p>
                <h2 className="text-lg font-semibold text-white">Air Freight Management</h2>
              </div>
            </div>
            <Button
              href="/contact?intent=demo&module=air"
              className="!bg-white !text-brand-900 hover:!bg-brand-50 text-sm"
              size="sm"
            >
              Let&apos;s Connect
            </Button>
          </div>

          <p className="mt-4 mb-8 text-sm text-ink-500 text-center">
            Efficiently manage air cargo operations with precision and global reach.
          </p>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {airFeatures.map(({ Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-xl border border-ink-200 bg-white p-5 hover:border-brand-300 hover:shadow-sm transition-all"
              >
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50">
                  <Icon className="h-4 w-4 text-brand-600" />
                </div>
                <h3 className="mt-3 text-sm font-semibold text-ink-900 leading-snug">{title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-ink-500">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sea Freight Management ── */}
      <section className="section-block bg-ink-50/60 border-y border-ink-200/70">
        <div className="container-pro">
          {/* Section header strip */}
          <div className="flex items-center justify-between rounded-2xl bg-brand-900 px-6 py-4">
            <div className="flex items-center gap-3">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
                <Ship className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-xs font-medium text-brand-200 uppercase tracking-wider">Module</p>
                <h2 className="text-lg font-semibold text-white">Sea Freight Management</h2>
              </div>
            </div>
            <Button
              href="/contact?intent=demo&module=sea"
              className="!bg-white !text-brand-900 hover:!bg-brand-50 text-sm"
              size="sm"
            >
              Let&apos;s Connect
            </Button>
          </div>

          <p className="mt-4 mb-8 text-sm text-ink-500 text-center">
            Handle sea cargo operations with precision and ease — from BL to final delivery.
          </p>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {seaFeatures.map(({ Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-xl border border-ink-200 bg-white p-5 hover:border-brand-300 hover:shadow-sm transition-all"
              >
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50">
                  <Icon className="h-4 w-4 text-brand-600" />
                </div>
                <h3 className="mt-3 text-sm font-semibold text-ink-900 leading-snug">{title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-ink-500">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EDI / Manifest Filing ── */}
      <section className="section-block">
        <div className="container-pro">
          <div className="mx-auto max-w-2xl text-center mb-10">
            <span className="eyebrow">EDI Filing</span>
            <h2 className="heading-3 mt-4">
              Manifest Filing for Air &amp; Sea Freight
            </h2>
            <p className="mt-2 text-sm text-ink-500">
              Streamline your air and sea freight operations through direct and efficient manifest submissions.
            </p>
          </div>

          <div className="space-y-6">
            {ediItems.map((item, i) => (
              <div
                key={item.title}
                className={`flex flex-col gap-5 rounded-2xl border border-ink-200 bg-white p-6 md:flex-row md:items-start ${
                  i % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Visual side */}
                <div className="flex-shrink-0 w-full md:w-48 lg:w-52 h-28 rounded-xl overflow-hidden">
                  {CNF_VISUALS[i % CNF_VISUALS.length]}
                </div>

                {/* Content side */}
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-brand-700">{item.title}</h3>
                  <div className="mt-1.5 flex items-start gap-2">
                    <span className="mt-1 flex-shrink-0 h-1.5 w-1.5 rounded-full bg-brand-500" aria-hidden />
                    <p className="text-sm leading-relaxed text-ink-600">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Modules ── */}
      <section className="section-block bg-ink-50/60 border-y border-ink-200/70">
        <div className="container-pro">
          <div className="mx-auto max-w-xl text-center mb-10">
            <h2 className="heading-3">Tekanthem C&amp;F Modules</h2>
            <p className="mt-2 text-sm text-ink-500">
              A complete module suite with deep integrations across the Tekanthem platform.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {moduleGroups.map(({ name, Icon, bullets }) => (
              <div
                key={name}
                className="rounded-2xl border border-ink-200 bg-white p-6 hover:shadow-md transition-shadow"
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
      <section className="section-block">
        <div className="container-pro">
          <div className="rounded-3xl bg-gradient-to-br from-brand-600 to-brand-900 p-10 text-center">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
              Ready to transform your freight forwarding operations?
            </h2>
            <p className="mt-3 text-white/90 text-sm max-w-xl mx-auto">
              Contact us to explore Tekanthem C&amp;F or fill the contact form. Experience the future of freight management.
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
