import type { Metadata } from 'next'
import Link from 'next/link'
import { Logo } from '@/components/ui/Logo'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Sign in',
  description: 'Sign in to your Tekanthem account.',
}

export default function LoginPage() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center py-16">
      <div className="w-full max-w-md mx-auto px-4">
        <div className="flex justify-center">
          <Logo />
        </div>
        <div className="mt-8 rounded-2xl border border-ink-200 bg-white p-8 shadow-card">
          <h1 className="font-display text-2xl font-bold text-ink-900 text-center">
            Welcome back
          </h1>
          <p className="mt-2 text-sm text-ink-600 text-center">
            Sign in to your Tekanthem workspace
          </p>

          <form className="mt-8 space-y-4">
            <label className="block">
              <span className="block text-sm font-medium text-ink-800 mb-1.5">
                Work email
              </span>
              <input
                type="email"
                autoComplete="email"
                placeholder="you@company.com"
                className="w-full rounded-xl border border-ink-200 bg-white px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-600 focus:border-brand-600"
              />
            </label>
            <label className="block">
              <span className="flex items-center justify-between text-sm font-medium text-ink-800 mb-1.5">
                Password
                <Link
                  href="/forgot-password"
                  className="text-xs font-normal text-brand-700 hover:underline"
                >
                  Forgot password?
                </Link>
              </span>
              <input
                type="password"
                autoComplete="current-password"
                placeholder="••••••••"
                className="w-full rounded-xl border border-ink-200 bg-white px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-600 focus:border-brand-600"
              />
            </label>
            <Button type="submit" className="w-full justify-center" size="lg">
              Sign in
            </Button>
          </form>

          <div className="mt-6 flex items-center gap-3">
            <div className="flex-1 h-px bg-ink-200" />
            <span className="text-xs text-ink-500">or</span>
            <div className="flex-1 h-px bg-ink-200" />
          </div>

          <button
            type="button"
            className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-xl border border-ink-200 bg-white px-4 py-2.5 text-sm font-medium text-ink-800 hover:bg-ink-50"
          >
            Continue with Google
          </button>
        </div>
        <p className="mt-6 text-center text-sm text-ink-600">
          New to Tekanthem?{' '}
          <Link
            href="/contact?intent=trial"
            className="font-semibold text-brand-700 hover:text-brand-800"
          >
            Start a free trial
          </Link>
        </p>
      </div>
    </section>
  )
}
