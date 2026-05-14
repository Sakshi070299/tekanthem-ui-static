'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/Button'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // In production, wire this up to Sentry or your error reporter
    if (process.env.NODE_ENV !== 'production') {
      // eslint-disable-next-line no-console
      console.error(error)
    }
  }, [error])

  return (
    <section className="container-pro py-32 text-center">
      <div className="font-display text-7xl font-extrabold gradient-text">
        Oops
      </div>
      <h1 className="heading-2 mt-4">Something went wrong</h1>
      <p className="lead mt-4 max-w-xl mx-auto">
        We hit an unexpected error. Our team has been notified — please try
        again, or get in touch if the problem persists.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
        <Button onClick={reset} size="lg">
          Try again
        </Button>
        <Button href="/" variant="outline" size="lg">
          Back home
        </Button>
      </div>
    </section>
  )
}
