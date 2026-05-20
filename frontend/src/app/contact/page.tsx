import type { Metadata } from 'next'
import { Suspense } from 'react'
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react'
import { ContactForm } from '@/components/sections/ContactForm'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Talk to our team. Book a demo, request pricing, or just say hello.',
}

const REASONS = [
  {
    icon: MessageCircle,
    title: 'Sales & demos',
    description: 'See Tekanthem in action with a 30-minute personalized walkthrough.',
    cta: 'hello@tekanthem.com',
  },
  {
    icon: Mail,
    title: 'Customer support',
    description: 'Existing customer? Our support team replies within 4 hours.',
    cta: 'support@tekanthem.com',
  },
  {
    icon: Phone,
    title: 'Partnerships',
    description: 'Accountants, system integrators, and reseller partnerships.',
    cta: 'partners@tekanthem.com',
  },
] as const

export default function ContactPage() {
  return (
    <>
      <section className="section-page-head">
        <div className="container-pro">
          <div className="max-w-3xl">
            <span className="eyebrow">Contact</span>
            <h1 className="heading-1 mt-6 text-balance">
              Let&apos;s talk about your business
            </h1>
            <p className="lead mt-6">
              Whether you&apos;re ready for a demo or just exploring, our team
              would love to hear from you. Most replies in under 4 hours.
            </p>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container-pro">
          <div className="grid gap-10 lg:grid-cols-5">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="rounded-2xl border border-ink-200 bg-white p-6 sm:p-8 shadow-card">
                <h2 className="text-xl font-semibold text-ink-900">
                  Send us a message
                </h2>
                <p className="mt-1 text-sm text-ink-600">
                  Fill out the form and our team will be in touch within 1 business day.
                </p>
                <div className="mt-6">
                  <Suspense fallback={<div className="h-96 animate-pulse rounded-xl bg-ink-100" />}>
                    <ContactForm />
                  </Suspense>
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="rounded-2xl border border-ink-200 bg-white p-6">
                <h3 className="font-semibold text-ink-900">Office</h3>
                <div className="mt-4 space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-brand-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium text-ink-900">
                        Registered Office
                      </div>
                      <div className="text-ink-600">
                        Tekanthem
                        <br />
                        1064 Sector-A, Pocket-B, Vasant Kunj
                        <br />
                        New Delhi - 110070, India
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-brand-600 flex-shrink-0 mt-0.5" />
                    <a
                      href={`tel:${SITE.phone.replace(/\s/g, '')}`}
                      className="text-ink-800 hover:text-brand-700"
                    >
                      {SITE.phone}
                    </a>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-brand-600 flex-shrink-0 mt-0.5" />
                    <a
                      href={`mailto:${SITE.email}`}
                      className="text-ink-800 hover:text-brand-700"
                    >
                      {SITE.email}
                    </a>
                  </div>
                </div>
              </div>

              {REASONS.map((r) => (
                <div
                  key={r.title}
                  className="rounded-2xl border border-ink-200 bg-white p-6"
                >
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                    <r.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-semibold text-ink-900">{r.title}</h3>
                  <p className="mt-1 text-sm text-ink-600">{r.description}</p>
                  <a
                    href={`mailto:${r.cta}`}
                    className="mt-3 inline-block text-sm font-semibold text-brand-700 hover:text-brand-800"
                  >
                    {r.cta} →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
