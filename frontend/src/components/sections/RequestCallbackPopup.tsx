'use client'

import { useCallback, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { X, Phone, CheckCircle2, AlertCircle, PhoneCall } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { callbackFormSchema, type CallbackFormValues } from '@/lib/validators'
import { cn } from '@/lib/utils'

const SEEN_COOKIE = 'tk_callback_seen'
const SEEN_MAX_AGE = 60 * 60 * 24 * 7 // 7 days
const SHOW_DELAY_MS = 18_000 // appears ~18s after load

function alreadySeen(): boolean {
  if (typeof document === 'undefined') return true
  return document.cookie
    .split('; ')
    .some((row) => row.startsWith(`${SEEN_COOKIE}=`))
}

function markSeen() {
  document.cookie = `${SEEN_COOKIE}=1; path=/; max-age=${SEEN_MAX_AGE}; SameSite=Lax`
}

export function RequestCallbackPopup() {
  const [open, setOpen] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CallbackFormValues>({
    resolver: zodResolver(callbackFormSchema),
  })

  useEffect(() => {
    if (alreadySeen()) return
    const timer = setTimeout(() => setOpen(true), SHOW_DELAY_MS)
    return () => clearTimeout(timer)
  }, [])

  const close = useCallback(() => {
    markSeen()
    setOpen(false)
  }, [])

  // Close on Escape
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, close])

  async function onSubmit(values: CallbackFormValues) {
    setStatus('idle')
    try {
      const res = await fetch('/api/callback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })
      if (!res.ok) throw new Error('Submission failed')
      setStatus('success')
      reset()
      markSeen()
      setTimeout(() => setOpen(false), 2500)
    } catch {
      setStatus('error')
    }
  }

  // When the modal is closed, show a compact floating button to reopen it.
  if (!open) {
    return (
      <button
        type="button"
        onClick={() => {
          setStatus('idle')
          setOpen(true)
        }}
        className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-brand-600 px-4 py-3 text-sm font-semibold text-white shadow-elevated transition hover:bg-brand-700 active:bg-brand-800"
        aria-label="Request a callback"
      >
        <PhoneCall className="h-4 w-4" />
        <span className="hidden sm:inline">Request a Callback</span>
      </button>
    )
  }

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-label="Request a callback"
    >
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close"
        onClick={close}
        className="absolute inset-0 bg-ink-900/60 backdrop-blur-sm"
      />

      {/* Card */}
      <div className="relative w-full max-w-3xl overflow-hidden rounded-2xl bg-white shadow-elevated animate-fade-up">
        <button
          type="button"
          onClick={close}
          aria-label="Close popup"
          className="absolute right-3 top-3 z-10 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-ink-500 shadow-sm hover:bg-white hover:text-ink-800"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="grid md:grid-cols-2">
          {/* Left — form */}
          <div className="p-6 sm:p-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-700 ring-1 ring-inset ring-brand-200">
              <PhoneCall className="h-3.5 w-3.5" />
              Request a Callback
            </div>
            <h2 className="mt-4 font-display text-2xl font-bold text-ink-900">
              Talk to a Tekanthem expert
            </h2>
            <p className="mt-1.5 text-sm text-ink-600">
              Leave your details and we&apos;ll call you back shortly.
            </p>

            {status === 'success' ? (
              <div className="mt-6 rounded-xl bg-emerald-50 border border-emerald-200 p-4 flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5" />
                <div>
                  <p className="font-semibold text-emerald-900">
                    Thanks! We&apos;ll call you back shortly.
                  </p>
                  <p className="text-sm text-emerald-700 mt-0.5">
                    Our team usually responds within a few hours.
                  </p>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="mt-6 space-y-3.5"
                noValidate
              >
                {status === 'error' && (
                  <div className="rounded-xl bg-red-50 border border-red-200 p-3 flex items-start gap-2.5">
                    <AlertCircle className="h-4 w-4 text-red-600 mt-0.5" />
                    <p className="text-sm text-red-700">
                      Something went wrong. Please try again or call us
                      directly.
                    </p>
                  </div>
                )}

                <Field label="Name" error={errors.name?.message}>
                  <input
                    {...register('name')}
                    type="text"
                    autoComplete="name"
                    placeholder="Your name"
                    className={fieldClass(!!errors.name)}
                  />
                </Field>
                <Field label="Phone" error={errors.phone?.message}>
                  <input
                    {...register('phone')}
                    type="tel"
                    autoComplete="tel"
                    placeholder="Mobile No."
                    className={fieldClass(!!errors.phone)}
                  />
                </Field>
                <Field label="Email" error={errors.email?.message}>
                  <input
                    {...register('email')}
                    type="email"
                    autoComplete="email"
                    placeholder="Email address"
                    className={fieldClass(!!errors.email)}
                  />
                </Field>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full justify-center"
                >
                  {isSubmitting ? 'Submitting…' : 'Submit'}
                </Button>
                <p className="text-[11px] leading-relaxed text-ink-400">
                  By submitting, you agree to be contacted by Tekanthem about
                  our products and services.
                </p>
              </form>
            )}
          </div>

          {/* Right — visual panel */}
          <div className="relative hidden md:flex flex-col items-center justify-center bg-gradient-to-br from-brand-700 via-brand-800 to-brand-950 p-8 text-center text-white">
            <div
              className="absolute inset-0 bg-grid-faint bg-[size:28px_28px] opacity-[0.08]"
              aria-hidden
            />
            <div className="relative">
              <h3 className="font-display text-2xl font-bold leading-snug">
                Fill in your details &amp;
                <br />
                we&apos;ll call you shortly!
              </h3>
              <div className="mx-auto mt-8 flex h-28 w-28 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-accent-500 shadow-lg">
                  <Phone className="h-9 w-9 text-white" />
                </div>
              </div>
              <p className="mt-8 text-sm text-brand-200">
                One platform for Finance, Payroll, C&amp;F and CRM.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Field({
  label,
  error,
  children,
}: {
  label: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-ink-800 mb-1">
        {label} <span className="text-accent-500">*</span>
      </span>
      {children}
      {error ? (
        <span className="mt-1 block text-xs text-red-600">{error}</span>
      ) : null}
    </label>
  )
}

function fieldClass(hasError: boolean) {
  return cn(
    'w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm text-ink-900 placeholder:text-ink-400 transition shadow-sm',
    'focus:outline-none focus:ring-2 focus:ring-brand-600 focus:border-brand-600',
    hasError ? 'border-red-300' : 'border-ink-200 hover:border-ink-300',
  )
}
