import type { Metadata } from 'next'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { CTA } from '@/components/sections/CTA'
import { Stats } from '@/components/sections/Stats'


export const metadata: Metadata = {
  title: 'About',
  description:
    'Tekanthem is on a mission to give every Indian business an integrated, modern operating system that just works.',
}

const VALUES = [
  {
    title: 'Customer obsession',
    description:
      'We talk to customers every day. Our roadmap is built on real conversations, not opinions in a room.',
  },
  {
    title: 'Indian by design',
    description:
      'GST, TDS, PF, ESI — built natively, not bolted on. We know what running a business in India actually feels like.',
  },
  {
    title: 'Speed beats perfection',
    description:
      'Ship weekly. Listen. Iterate. The fastest team learns the most — and we love learning.',
  },
  {
    title: 'Quality is non-negotiable',
    description:
      'Speed without quality is reckless. Every release ships with tests, security review, and design polish.',
  },
] as const

const TEAM = [
  { name: 'Arjun Vasist', role: 'Co-founder & CEO', city: 'Hyderabad' },
  { name: 'Meera Krishnan', role: 'Co-founder & CTO', city: 'Bangalore' },
  { name: 'Devansh Patel', role: 'Head of Product', city: 'Mumbai' },
  { name: 'Aisha Khan', role: 'Head of Design', city: 'Pune' },
  { name: 'Rahul Verma', role: 'Head of Engineering', city: 'Hyderabad' },
  { name: 'Sneha Iyer', role: 'Head of Customer', city: 'Chennai' },
] as const

export default function AboutPage() {
  return (
    <>
      <section className="pt-20 pb-12 lg:pt-28">
        <div className="container-pro">
          <SectionHeading
            eyebrow="About Tekanthem"
            title={
              <>
                Building the{' '}
                <span className="gradient-text">operating system</span>
                {' '}for Indian business
              </>
            }
            description="We started Tekanthem in 2023 because running a business in India still meant juggling five different tools, spreadsheets, and CAs. We knew it could be better — so we built it."
          />
        </div>
      </section>

      <section className="py-12">
        <div className="container-pro">
          <div className="rounded-3xl bg-gradient-to-br from-brand-50 via-white to-accent-50 border border-ink-200 p-10 sm:p-14">
            <div className="max-w-3xl">
              <h2 className="heading-3">Our story</h2>
              <div className="mt-6 space-y-4 text-ink-700 leading-relaxed">
                <p>
                  Tekanthem was founded by a team of engineers, accountants
                  and operators who spent a decade running businesses across
                  finance, logistics and SaaS. We saw the same pattern
                  everywhere: companies were stitching together Tally, Excel,
                  WhatsApp groups, and ten different SaaS tools to keep things
                  moving.
                </p>
                <p>
                  The data didn&apos;t flow. The reports were always late. The
                  CA was always chasing. And the founder was always tired.
                </p>
                <p className="font-semibold text-ink-900">
                  We are building the system we always wished existed — one
                  unified platform where finance, payroll, logistics and sales
                  speak the same language.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Stats />

      {/* Values */}
      <section className="py-20 lg:py-24 bg-ink-50/60 border-y border-ink-200/70">
        <div className="container-pro">
          <SectionHeading
            eyebrow="What we believe"
            title="Our values"
            align="center"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {VALUES.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-ink-200 bg-white p-7"
              >
                <h3 className="text-lg font-semibold text-ink-900">
                  {v.title}
                </h3>
                <p className="mt-2 text-ink-600 leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 lg:py-24">
        <div className="container-pro">
          <SectionHeading
            eyebrow="Leadership"
            title="The people behind Tekanthem"
            align="center"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM.map((m) => (
              <div
                key={m.name}
                className="flex items-center gap-4 rounded-2xl border border-ink-200 bg-white p-5"
              >
                <div className="h-14 w-14 flex-shrink-0 rounded-full bg-gradient-to-br from-brand-200 to-accent-200 flex items-center justify-center font-bold text-ink-800">
                  {m.name
                    .split(' ')
                    .map((s) => s[0])
                    .join('')}
                </div>
                <div>
                  <div className="font-semibold text-ink-900">{m.name}</div>
                  <div className="text-sm text-ink-600">{m.role}</div>
                  <div className="text-xs text-ink-500">{m.city}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
