'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Cookie, X } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const COOKIE_NAME = 'tk_cookie_consent'
const COOKIE_MAX_AGE = 60 * 60 * 24 * 180 // 180 days

function getConsentCookie(): string | null {
  if (typeof document === 'undefined') return null
  const match = document.cookie
    .split('; ')
    .find((row) => row.startsWith(`${COOKIE_NAME}=`))
  return match ? match.split('=')[1] : null
}

function setConsentCookie(value: 'accepted' | 'rejected') {
  document.cookie = `${COOKIE_NAME}=${value}; path=/; max-age=${COOKIE_MAX_AGE}; SameSite=Lax`
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Show only if no decision has been recorded yet
    if (!getConsentCookie()) {
      const timer = setTimeout(() => setVisible(true), 1200)
      return () => clearTimeout(timer)
    }
  }, [])

  function decide(choice: 'accepted' | 'rejected') {
    setConsentCookie(choice)
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-50 animate-fade-up p-3 sm:p-4"
    >
      <div className="container-pro">
        <div className="relative flex flex-col gap-4 rounded-2xl border border-ink-200 bg-white p-5 shadow-elevated sm:flex-row sm:items-center sm:gap-6 sm:p-6">
          <div className="flex items-start gap-3 sm:items-center">
            <span className="hidden sm:inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-100">
              <Cookie className="h-5 w-5" />
            </span>
            <p className="text-sm leading-relaxed text-ink-600">
              We use cookies to improve your experience, analyse site traffic,
              and personalise content. By clicking{' '}
              <strong className="text-ink-900">Accept</strong>, you agree to
              our use of cookies. Read our{' '}
              <Link
                href="/legal/privacy"
                className="font-semibold text-brand-700 underline hover:text-brand-800"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>

          <div className="flex flex-shrink-0 items-center gap-2.5">
            <Button
              variant="outline"
              size="sm"
              onClick={() => decide('rejected')}
            >
              Reject
            </Button>
            <Button size="sm" onClick={() => decide('accepted')}>
              Accept
            </Button>
          </div>

          <button
            type="button"
            onClick={() => decide('rejected')}
            aria-label="Dismiss cookie banner"
            className="absolute right-3 top-3 inline-flex h-7 w-7 items-center justify-center rounded-md text-ink-400 hover:bg-ink-100 hover:text-ink-700 sm:hidden"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
