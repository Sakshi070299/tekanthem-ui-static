import Link from 'next/link'
import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
  href?: string
  mark?: boolean
}

export function Logo({ className, href = '/', mark = false }: LogoProps) {
  return (
    <Link
      href={href}
      className={cn('inline-flex items-center gap-2.5 group', className)}
      aria-label="Tekanthem home"
    >
      <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 via-brand-700 to-brand-900 shadow-sm">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-white"
          aria-hidden
        >
          <path
            d="M4 6h16M9 6v14M15 6v14M4 13h5m6 0h5"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
        </svg>
        <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-accent-500 ring-2 ring-white" />
      </span>
      {!mark && (
        <span className="font-display text-xl font-extrabold tracking-tight text-ink-900">
          Tekanthem
        </span>
      )}
    </Link>
  )
}
