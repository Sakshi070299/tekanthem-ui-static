import { ArrowRight, CheckCircle2 } from 'lucide-react'
import * as LucideIcons from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { SectionHeading } from '@/components/ui/SectionHeading'
import type { ProductData } from '@/data/products'
import { cn } from '@/lib/utils'

interface ProductPageProps {
  product: ProductData
  accent: string // tailwind gradient classes e.g. "from-blue-500 to-indigo-600"
}

function getIcon(name: string) {
  const formatted = name
    .split('-')
    .map((p) => p[0]?.toUpperCase() + p.slice(1))
    .join('') as keyof typeof LucideIcons
  const Cmp = (LucideIcons[formatted] ?? LucideIcons.Sparkles) as React.ComponentType<{ className?: string }>
  return Cmp
}

export function ProductPage({ product, accent }: ProductPageProps) {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero pointer-events-none" aria-hidden />
        <div className="container-pro relative pt-16 pb-20 sm:pt-24 lg:pt-28">
          <div className="mx-auto max-w-3xl text-center">
            <span className={cn('eyebrow')}>
              {product.hero.badge}
            </span>
            <h1 className="heading-1 mt-6 text-balance">
              {product.hero.title}
            </h1>
            <p className="lead mt-6 mx-auto max-w-2xl text-balance">
              {product.hero.description}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button href="/contact?intent=demo" size="lg">
                Get a personalized demo
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/pricing" variant="outline" size="lg">
                View pricing
              </Button>
            </div>
          </div>

          {/* Mockup placeholder */}
          <div className="mt-16 mx-auto max-w-5xl">
            <div className={cn('rounded-2xl bg-gradient-to-br shadow-elevated p-1', accent)}>
              <div className="rounded-xl bg-white p-6 min-h-[360px]">
                <div className="flex items-center justify-between border-b border-ink-200 pb-4">
                  <div className="font-display text-lg font-bold text-ink-900">
                    {product.name}
                  </div>
                  <div className="flex gap-2">
                    {['Today', 'Week', 'Month', 'Year'].map((t, i) => (
                      <div
                        key={t}
                        className={
                          i === 2
                            ? 'rounded-md bg-ink-900 px-3 py-1.5 text-xs font-medium text-white'
                            : 'rounded-md px-3 py-1.5 text-xs text-ink-600'
                        }
                      >
                        {t}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-4 gap-3">
                  {product.modules.slice(0, 4).map((m, i) => (
                    <div
                      key={m}
                      className="rounded-lg border border-ink-200 p-3"
                    >
                      <div className="text-xs text-ink-500">{m}</div>
                      <div className="mt-2 h-2 bg-ink-100 rounded-full overflow-hidden">
                        <div
                          className={cn('h-full bg-gradient-to-r', accent)}
                          style={{ width: `${[60, 78, 45, 92][i % 4]}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 rounded-lg bg-ink-50 p-4 grid grid-cols-7 gap-1 h-32 items-end">
                  {[40, 55, 48, 62, 70, 65, 80, 72, 88, 92, 85, 96, 60, 75, 50, 68, 82, 90, 78, 95, 88].map(
                    (h, i) => (
                      <div
                        key={i}
                        className={cn('rounded-sm bg-gradient-to-t', accent)}
                        style={{ height: `${h}%`, opacity: 0.4 + (i % 7) / 10 }}
                      />
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section className="py-20 lg:py-28 bg-ink-50/60 border-y border-ink-200/70">
        <div className="container-pro">
          <SectionHeading
            eyebrow="Capabilities"
            title={<>Everything you need in {product.tagline.toLowerCase()}</>}
          />
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {product.features.map((f) => {
              const Icon = getIcon(f.icon)
              return (
                <div
                  key={f.title}
                  className="rounded-2xl border border-ink-200 bg-white p-7"
                >
                  <div
                    className={cn(
                      'inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br text-white',
                      accent,
                    )}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-ink-900">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-600">
                    {f.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 lg:py-24">
        <div className="container-pro">
          <div className="grid gap-8 sm:grid-cols-3">
            {product.benefits.map((b) => (
              <div
                key={b.title}
                className="rounded-2xl border border-ink-200 bg-white p-8 text-center"
              >
                <div
                  className={cn(
                    'font-display text-5xl font-extrabold bg-gradient-to-br bg-clip-text text-transparent',
                    accent,
                  )}
                >
                  {b.metric}
                </div>
                <div className="mt-3 text-base font-semibold text-ink-900">
                  {b.title}
                </div>
                <p className="mt-2 text-sm text-ink-600">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules pill list */}
      <section className="py-16 bg-ink-50/60 border-y border-ink-200/70">
        <div className="container-pro">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="heading-3">Inside {product.name}</h2>
            <p className="mt-3 text-ink-600">
              A complete module suite, with deep integrations across the Tekanthem platform.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-2.5">
            {product.modules.map((m) => (
              <span
                key={m}
                className="inline-flex items-center gap-2 rounded-full bg-white border border-ink-200 px-4 py-2 text-sm font-medium text-ink-700"
              >
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                {m}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-24">
        <div className="container-pro max-w-3xl">
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently asked questions"
            align="left"
          />
          <div className="mt-10 divide-y divide-ink-200 border-t border-b border-ink-200">
            {product.faqs.map((faq) => (
              <details
                key={faq.q}
                className="group py-5"
              >
                <summary className="flex cursor-pointer items-start justify-between gap-4 font-semibold text-ink-900">
                  {faq.q}
                  <span className="text-ink-400 group-open:rotate-180 transition flex-shrink-0">
                    ⌄
                  </span>
                </summary>
                <p className="mt-3 text-ink-600 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20">
        <div className="container-pro">
          <div
            className={cn(
              'rounded-3xl bg-gradient-to-br p-12 text-center text-white',
              accent,
            )}
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold">
              See {product.name} in action
            </h2>
            <p className="mt-4 text-white/90 max-w-xl mx-auto">
              30-minute personalized demo with one of our solution experts.
              Tailored to your workflow.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
              <Button
                href="/contact?intent=demo"
                className="!bg-white !text-ink-900 hover:!bg-ink-100"
                size="lg"
              >
                Book demo
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                href="/pricing"
                variant="outline"
                className="!border-white/30 !text-white hover:!bg-white/10"
                size="lg"
              >
                Compare plans
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
