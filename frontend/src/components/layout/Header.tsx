'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown, Wallet, Banknote, Truck, Users } from 'lucide-react'
import { Logo } from '@/components/ui/Logo'
import { Button } from '@/components/ui/Button'
import { MAIN_NAV, PRODUCTS } from '@/lib/site'
import { cn } from '@/lib/utils'

const ICON_MAP = {
  wallet: Wallet,
  banknote: Banknote,
  truck: Truck,
  users: Users,
} as const

export function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8)
    handler()
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    setOpen(false)
    setProductsOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        'sticky top-0 z-40 w-full transition-all',
        scrolled
          ? 'border-b border-ink-200/80 bg-white/80 backdrop-blur-md'
          : 'bg-transparent',
      )}
    >
      <div className="container-pro flex h-16 items-center justify-between gap-6">
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Main">
          {MAIN_NAV.map((item) => {
            if ('children' in item && item.children) {
              return (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setProductsOpen(true)}
                  onMouseLeave={() => setProductsOpen(false)}
                >
                  <button
                    className={cn(
                      'inline-flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-sm font-medium text-ink-700 hover:text-ink-900 hover:bg-ink-100',
                      pathname.startsWith(item.href) && 'text-ink-900',
                    )}
                    aria-expanded={productsOpen}
                  >
                    {item.label}
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  {productsOpen && (
                    <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2">
                      <div className="w-[640px] grid grid-cols-2 gap-2 rounded-2xl border border-ink-200 bg-white p-3 shadow-elevated">
                        {PRODUCTS.map((p) => {
                          const Icon = ICON_MAP[p.icon as keyof typeof ICON_MAP]
                          return (
                            <Link
                              key={p.slug}
                              href={p.href}
                              className="group flex items-start gap-3 rounded-xl p-3 hover:bg-ink-50 transition"
                            >
                              <span
                                className={cn(
                                  'mt-0.5 flex h-10 w-10 items-center justify-center rounded-lg',
                                  p.accent,
                                )}
                              >
                                <Icon className="h-5 w-5" />
                              </span>
                              <span className="flex-1">
                                <span className="block font-semibold text-ink-900">
                                  {p.name}
                                </span>
                                <span className="mt-0.5 block text-sm text-ink-600">
                                  {p.tagline}
                                </span>
                              </span>
                            </Link>
                          )
                        })}
                      </div>
                    </div>
                  )}
                </div>
              )
            }
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'rounded-lg px-3.5 py-2 text-sm font-medium text-ink-700 hover:text-ink-900 hover:bg-ink-100',
                  pathname === item.href && 'text-ink-900',
                )}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          {/* <Button href="/login" variant="ghost" size="sm">
            Sign in
          </Button> */}
          <Button href="/contact?intent=demo" size="sm">
            Request for demo
          </Button>
        </div>

        {/* Mobile menu trigger */}
        <button
          type="button"
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg hover:bg-ink-100"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-ink-200 bg-white">
          <div className="container-pro py-4 space-y-1">
            {MAIN_NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-lg px-3 py-2.5 text-base font-medium text-ink-800 hover:bg-ink-100"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-3 mt-3 border-t border-ink-200 flex flex-col gap-2">
              <Button href="/login" variant="outline">
                Sign in
              </Button>
              <Button href="/contact?intent=demo">Get a demo</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
