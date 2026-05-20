import { Star } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'

const QUOTES = [
  {
    quote:
      'Tekanthem replaced three different tools for us. Our month-end close went from 9 days to 2.',
    author: 'Priya Nair',
    role: 'CFO',
    company: 'Helix Healthcare',
  },
  {
    quote:
      'The C&F module handles our entire freight workflow. Customs paperwork that used to take an afternoon is now five minutes.',
    author: 'Rohan Mehta',
    role: 'Operations Head',
    company: 'Apex Logix',
  },
  {
    quote:
      'Payroll runs itself now. Compliance alerts saved us from a TDS notice last quarter. Genuinely a relief.',
    author: 'Anjali Rao',
    role: 'People Ops Lead',
    company: 'Stellaris Tech',
  },
  {
    quote:
      'Best CRM we have used for B2B. The pipeline automation alone paid for the entire suite in two months.',
    author: 'Vikram Singh',
    role: 'VP Sales',
    company: 'Northwind Industries',
  },
  {
    quote:
      'Support is exceptional. They actually understand Indian accounting — GST, RCM, ITC, everything just works.',
    author: 'Sneha Iyer',
    role: 'Founder',
    company: 'Lumio Studio',
  },
  {
    quote:
      'Moved from Tally + spreadsheets to Tekanthem in two weeks. Our auditor was impressed.',
    author: 'Karthik Reddy',
    role: 'Finance Director',
    company: 'Vertex Manufacturing',
  },
] as const

export function Testimonials() {
  return (
    <section className="section-block">
      <div className="container-pro">
        <SectionHeading
          eyebrow="Customer love"
          title={<>Teams that switched, never looked back</>}
          description="Real stories from real businesses running their operations on Tekanthem."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {QUOTES.map((q) => (
            <figure
              key={q.author}
              className="flex flex-col rounded-2xl border border-ink-200 bg-white p-6 shadow-card"
            >
              <div className="flex gap-0.5 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-ink-800 leading-relaxed">
                &ldquo;{q.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 pt-4 border-t border-ink-100">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-brand-200 to-accent-200 flex items-center justify-center font-semibold text-ink-800">
                  {q.author
                    .split(' ')
                    .map((s) => s[0])
                    .join('')}
                </div>
                <div>
                  <div className="text-sm font-semibold text-ink-900">
                    {q.author}
                  </div>
                  <div className="text-xs text-ink-500">
                    {q.role} · {q.company}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
