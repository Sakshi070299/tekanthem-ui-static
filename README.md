# Tekanthem — Public Website

The marketing & public-facing website for Tekanthem — Finance, Payroll, C&F, and CRM.

A single **Next.js 14** application. There is no separate backend service — form
submissions are handled by Next.js API route handlers that send email over
Office 365 SMTP.

| Part      | Stack                                  | Path        |
| --------- | -------------------------------------- | ----------- |
| Website   | Next.js 14 · TypeScript · Tailwind     | `frontend/` |
| Form APIs | Next.js Route Handlers · Nodemailer    | `frontend/src/app/api/` |

---

## Quick start

### Prerequisites

- Node.js 20+ and `npm`

### Run it

```bash
cd frontend
cp .env.example .env.local      # then fill in the SMTP password
npm install
npm run dev
# Site running at http://localhost:3000
```

---

## What's inside

### Pages

- **Home** — Hero, product suite, features, stats, testimonials, CTA
- **Products** — Index plus dedicated pages for Finance, Payroll, C&F, CRM
- **Pricing** — 4 plan tiers + detailed comparison + pricing FAQ
- **About** — Who We Are, Vision, Mission, What We Do, Key Offerings, Why Choose Us, Values, and the leadership team
- **Contact** — Working form that emails the team via Office 365 SMTP
- **Blog** — Listing + featured post + dynamic detail page (`/blog/[slug]`)
- **Login** — Static auth page (not wired to real auth)

### Site-wide features

- **Cookie consent banner** — appears on first visit, stores the choice in a cookie (180 days)
- **Request a Callback popup** — auto-opens ~18s after load (once per 7 days), plus a floating button to reopen it any time. Submissions are emailed to the team.
- **SEO** — per-page metadata, sitemap.xml, robots.txt, JSON-LD Organization schema
- **Accessibility** — semantic HTML, skip-to-main link, focus rings, reduced-motion support

### Form API routes

| Route             | Method | Purpose                                  |
| ----------------- | ------ | ---------------------------------------- |
| `/api/contact`    | POST   | Contact form → emails the sales inbox    |
| `/api/callback`   | POST   | Request-a-Callback popup → emails the team |

Both validate input with Zod and send email through the configured Office 365
SMTP account using Nodemailer.

---

## Environment variables

Set these in `frontend/.env.local` (git-ignored — never commit it):

| Variable               | Purpose                                            |
| ---------------------- | -------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | Used in metadata, sitemap, JSON-LD                 |
| `SMTP_HOST`            | `smtp.office365.com`                               |
| `SMTP_PORT`            | `587`                                              |
| `SMTP_USER`            | SMTP login (the "Sales website" account)           |
| `SMTP_PASSWORD`        | SMTP password / app password                       |
| `SMTP_FROM_NAME`       | Display name on outgoing mail (e.g. `Sales website`)|
| `SMTP_FROM_EMAIL`      | From address on outgoing mail                       |
| `CONTACT_INBOX_EMAIL`  | Where form submissions are delivered                |

> Office 365 note: if MFA is enabled on the mailbox, generate an **App Password**
> and use that as `SMTP_PASSWORD`.

---

## Scripts

```bash
npm run dev         # Start dev server
npm run build       # Production build
npm run start       # Production server
npm run typecheck   # tsc --noEmit
npm run lint        # ESLint
npm run format      # Prettier
```

---

## Project structure

```
tekanthem/
└── frontend/
    ├── src/
    │   ├── app/
    │   │   ├── api/
    │   │   │   ├── contact/route.ts    # Contact form → email
    │   │   │   └── callback/route.ts   # Callback popup → email
    │   │   ├── about/                  # About Us page
    │   │   ├── blog/[slug]/
    │   │   ├── contact/
    │   │   ├── pricing/
    │   │   ├── products/{finance,payroll,cnf,crm}/
    │   │   ├── layout.tsx              # Root layout + cookie banner + callback popup
    │   │   └── page.tsx                # Home
    │   ├── components/
    │   │   ├── layout/                 # Header, Footer
    │   │   ├── sections/               # Page sections + RequestCallbackPopup
    │   │   └── ui/                     # Button, Badge, Logo, CookieConsent, ...
    │   ├── data/                       # Static content (products, blog, team)
    │   └── lib/                        # site config, validators, mailer, utils
    └── public/
        └── images/
            ├── about/                  # About-page section images
            └── team/                   # Team member photos
```

---

## Deployment

Deploy `frontend/` to **Vercel** (or any Next.js-compatible host). The API
routes run as serverless functions — set the SMTP environment variables in your
hosting platform's dashboard. No database, no separate backend to operate.

For production:

1. Set all SMTP env vars in the hosting platform
2. Set `NEXT_PUBLIC_SITE_URL` to the production domain
3. Rotate the SMTP password if it was ever shared in plain text

---

## License

© 2026 Tekanthem. All rights reserved.
