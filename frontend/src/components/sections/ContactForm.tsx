'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CheckCircle2, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { contactFormSchema, type ContactFormValues } from '@/lib/validators'
import { cn } from '@/lib/utils'

export function ContactForm() {
  const params = useSearchParams()
  const intentParam = params.get('intent') as ContactFormValues['intent'] | null
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { intent: 'general' },
  })

  useEffect(() => {
    if (intentParam && ['demo', 'sales', 'trial', 'general'].includes(intentParam)) {
      setValue('intent', intentParam)
    }
  }, [intentParam, setValue])

  async function onSubmit(values: ContactFormValues) {
    setStatus('idle')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })
      if (!res.ok) throw new Error('Submission failed')
      setStatus('success')
      reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4"
      aria-label="Contact form"
    >
      <div aria-live="polite" className="sr-only">
        {status === 'success' && 'Thank you, we will be in touch shortly.'}
        {status === 'error' && 'Submission failed. Please try again.'}
      </div>

      {status === 'success' && (
        <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-4 flex items-start gap-3">
          <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5" />
          <div>
            <p className="font-semibold text-emerald-900">
              Got it — thank you!
            </p>
            <p className="text-sm text-emerald-700 mt-0.5">
              Our team will reach out within 1 business day.
            </p>
          </div>
        </div>
      )}

      {status === 'error' && (
        <div className="rounded-xl bg-red-50 border border-red-200 p-4 flex items-start gap-3">
          <AlertCircle className="h-5 w-5 text-red-600 mt-0.5" />
          <div>
            <p className="font-semibold text-red-900">Something went wrong</p>
            <p className="text-sm text-red-700 mt-0.5">
              Please try again, or email us directly at hello@tekanthem.com
            </p>
          </div>
        </div>
      )}

      <input type="hidden" {...register('intent')} />

      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Full name" error={errors.name?.message}>
          <input
            {...register('name')}
            type="text"
            autoComplete="name"
            placeholder="Priya Sharma"
            className={fieldClass(!!errors.name)}
          />
        </Field>
        <Field label="Work email" error={errors.email?.message}>
          <input
            {...register('email')}
            type="email"
            autoComplete="email"
            placeholder="priya@company.com"
            className={fieldClass(!!errors.email)}
          />
        </Field>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Phone (optional)" error={errors.phone?.message}>
          <input
            {...register('phone')}
            type="tel"
            autoComplete="tel"
            placeholder="+91 98765 43210"
            className={fieldClass(!!errors.phone)}
          />
        </Field>
        <Field label="Company" error={errors.company?.message}>
          <input
            {...register('company')}
            type="text"
            autoComplete="organization"
            placeholder="Acme Industries"
            className={fieldClass(!!errors.company)}
          />
        </Field>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Team size">
          <select {...register('employees')} className={fieldClass(false)}>
            <option value="">Select team size</option>
            <option value="1-10">1–10</option>
            <option value="11-50">11–50</option>
            <option value="51-200">51–200</option>
            <option value="201-1000">201–1000</option>
            <option value="1000+">1000+</option>
          </select>
        </Field>
        <Field label="Interested in">
          <select {...register('product')} className={fieldClass(false)}>
            <option value="">Select a product</option>
            <option value="suite">The full Tekanthem Suite</option>
            <option value="finance">Tekanthem Finance</option>
            <option value="payroll">Tekanthem Payroll</option>
            <option value="cnf">Tekanthem C&F</option>
            <option value="crm">Tekanthem CRM</option>
          </select>
        </Field>
      </div>

      <Field label="How can we help?" error={errors.message?.message}>
        <textarea
          {...register('message')}
          rows={5}
          placeholder="Tell us about your team, what you're using today, and what you're hoping to solve…"
          className={fieldClass(!!errors.message)}
        />
      </Field>

      <Button type="submit" disabled={isSubmitting} size="lg" className="w-full sm:w-auto">
        {isSubmitting ? 'Sending…' : 'Send message'}
      </Button>
      <p className="text-xs text-ink-500">
        By submitting, you agree to our{' '}
        <a href="/legal/privacy" className="underline hover:text-ink-800">
          Privacy Policy
        </a>
        . We&apos;ll never share your details.
      </p>
    </form>
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
      <span className="block text-sm font-medium text-ink-800 mb-1.5">
        {label}
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
    'w-full rounded-xl border bg-white px-4 py-2.5 text-sm text-ink-900 placeholder:text-ink-400 transition shadow-sm',
    'focus:outline-none focus:ring-2 focus:ring-brand-600 focus:border-brand-600',
    hasError ? 'border-red-300' : 'border-ink-200 hover:border-ink-300',
  )
}
