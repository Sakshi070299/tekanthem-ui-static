import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export function CTA() {
  return (
    <section className="py-8 lg:py-12">
      <div className="container-pro">
        <div className="relative overflow-hidden rounded-3xl bg-white border border-ink-200 px-6 sm:px-12 py-10 sm:py-12 text-center shadow-card">
          <div
            className="absolute inset-0 bg-gradient-to-br from-brand-50 via-white to-accent-50"
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-grid-faint bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]"
            aria-hidden
          />
          <div className="relative max-w-2xl mx-auto">
            <span className="eyebrow">Get started</span>
            <h2 className="heading-2 mt-5 text-balance">
              Ready to run your business on{' '}
              <span className="gradient-text">one platform?</span>
            </h2>
            <p className="lead mt-5">
              Start with any product. Add the rest as you grow. 90-day free
              trial, no credit card.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
              <Button href="/contact?intent=demo" size="lg">
                Book a 30-min demo
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/pricing" variant="outline" size="lg">
                Explore pricing
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
