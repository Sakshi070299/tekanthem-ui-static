import { forwardRef, type ButtonHTMLAttributes } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline'
type Size = 'sm' | 'md' | 'lg'

interface BaseProps {
  variant?: Variant
  size?: Size
  className?: string
  children: React.ReactNode
}

type ButtonProps = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
    href?: undefined
  }

type LinkProps = BaseProps & {
  href: string
  target?: string
  rel?: string
}

const VARIANTS: Record<Variant, string> = {
  primary:
    'bg-brand-600 text-white shadow-sm hover:bg-brand-700 active:bg-brand-800 disabled:bg-ink-300 disabled:cursor-not-allowed',
  secondary:
    'bg-ink-900 text-white shadow-sm hover:bg-ink-800 active:bg-ink-700',
  outline:
    'bg-white text-ink-900 ring-1 ring-inset ring-ink-200 hover:bg-ink-50 hover:ring-ink-300',
  ghost: 'bg-transparent text-ink-700 hover:bg-ink-100',
}

const SIZES: Record<Size, string> = {
  sm: 'h-9 px-3.5 text-sm rounded-lg',
  md: 'h-11 px-5 text-sm rounded-xl',
  lg: 'h-12 px-6 text-base rounded-xl',
}

const BASE =
  'inline-flex items-center justify-center gap-2 font-semibold transition-all whitespace-nowrap select-none'

export const Button = forwardRef<
  HTMLButtonElement,
  ButtonProps | LinkProps
>(function Button(props, ref) {
  const { variant = 'primary', size = 'md', className, children } = props
  const classes = cn(BASE, VARIANTS[variant], SIZES[size], className)

  if ('href' in props && props.href) {
    const isExternal = props.href.startsWith('http')
    if (isExternal) {
      return (
        <a
          href={props.href}
          target={props.target ?? '_blank'}
          rel={props.rel ?? 'noopener noreferrer'}
          className={classes}
        >
          {children}
        </a>
      )
    }
    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    )
  }

  const { variant: _v, size: _s, className: _c, children: _ch, ...rest } =
    props as ButtonProps
  return (
    <button ref={ref} className={classes} {...rest}>
      {children}
    </button>
  )
})
