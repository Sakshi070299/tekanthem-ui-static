import Link from 'next/link'
import { Button } from '@/components/ui/Button'

export default function NotFound() {
  return (
    <section className="container-pro py-32 text-center">
      <div className="font-display text-7xl font-extrabold gradient-text">
        404
      </div>
      <h1 className="heading-2 mt-4">We can&apos;t find that page</h1>
      <p className="lead mt-4 max-w-xl mx-auto">
        It may have moved, or you might have followed a broken link. Let&apos;s
        get you back on track.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
        <Button href="/" size="lg">
          Back home
        </Button>
        <Button href="/contact" variant="outline" size="lg">
          Contact support
        </Button>
      </div>
      <p className="mt-12 text-sm text-ink-500">
        Or{' '}
        <Link href="/products" className="underline hover:text-ink-800">
          browse our products
        </Link>
        .
      </p>
    </section>
  )
}
