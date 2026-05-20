import Link from 'next/link'
import { Twitter, Linkedin, Github, Youtube, Mail, Phone, MapPin } from 'lucide-react'
import { Logo } from '@/components/ui/Logo'
import { FOOTER_LINKS, SITE } from '@/lib/site'

export function Footer() {
  return (
    <footer className=" border-t border-ink-200 bg-ink-50/60">
      <div className="container-pro py-16">
        <div className="grid gap-10 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 max-w-sm text-sm text-ink-600 leading-relaxed">
              {SITE.description}
            </p>
            <div className="mt-6 space-y-2 text-sm text-ink-600">
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-2 hover:text-ink-900"
              >
                <Mail className="h-4 w-4" /> {SITE.email}
              </a>
              <a
                href={`tel:${SITE.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-2 hover:text-ink-900"
              >
                <Phone className="h-4 w-4" /> {SITE.phone}
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4" /> {SITE.address}
              </span>
            </div>
            <div className="mt-6 flex gap-2">
              <a
                href={SITE.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-ink-200 bg-white text-ink-600 hover:text-brand-600 hover:border-brand-200"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href={SITE.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-ink-200 bg-white text-ink-600 hover:text-brand-600 hover:border-brand-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={SITE.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-ink-200 bg-white text-ink-600 hover:text-brand-600 hover:border-brand-200"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href={SITE.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-ink-200 bg-white text-ink-600 hover:text-brand-600 hover:border-brand-200"
                aria-label="YouTube"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-sm font-semibold text-ink-900">{heading}</h4>
              <ul className="mt-4 space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-ink-600 hover:text-brand-700 transition"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-ink-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-sm text-ink-500">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p className="text-xs text-ink-500">
            Built in India ·{' '}
            <span className="font-medium text-ink-700">GST-ready</span> ·{' '}
            <span className="font-medium text-ink-700">SOC 2 in progress</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
