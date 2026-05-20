# Tekanthem — Website

Next.js 14 App Router · TypeScript · Tailwind CSS · React Hook Form + Zod · Nodemailer

## Quick start

```bash
cp .env.example .env.local      # fill in SMTP_PASSWORD
npm install
npm run dev
```

Open http://localhost:3000.

## Environment variables

All set in `.env.local` (git-ignored):

| Variable                | Required | Purpose                                  |
| ----------------------- | -------- | ---------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`  | Yes      | Metadata, sitemap, JSON-LD               |
| `SMTP_HOST`             | Yes      | `smtp.office365.com`                     |
| `SMTP_PORT`             | Yes      | `587`                                    |
| `SMTP_USER`             | Yes      | SMTP login                               |
| `SMTP_PASSWORD`         | Yes      | SMTP password / app password             |
| `SMTP_FROM_NAME`        | No       | Display name on outgoing mail            |
| `SMTP_FROM_EMAIL`       | No       | From address on outgoing mail            |
| `CONTACT_INBOX_EMAIL`   | No       | Where form submissions are delivered     |

## Scripts

| Command            | Purpose                       |
| ------------------ | ----------------------------- |
| `npm run dev`      | Dev server                    |
| `npm run build`    | Production build              |
| `npm run start`    | Production server             |
| `npm run lint`     | ESLint                        |
| `npm run typecheck`| Standalone `tsc --noEmit`     |
| `npm run format`   | Prettier                      |

## Structure

```
src/
├── app/
│   ├── api/
│   │   ├── contact/route.ts    # Contact form → email (Nodemailer / Office 365)
│   │   └── callback/route.ts   # Callback popup → email
│   ├── about/                  # About Us page
│   ├── blog/[slug]/
│   ├── contact/
│   ├── login/
│   ├── pricing/
│   ├── products/{finance,payroll,cnf,crm}/
│   ├── layout.tsx              # Root layout (fonts, header, footer, cookie banner, callback popup)
│   ├── page.tsx                # Home
│   ├── sitemap.ts / robots.ts
│   ├── not-found.tsx / error.tsx / loading.tsx
│   └── globals.css             # Design tokens + Tailwind
├── components/
│   ├── layout/                 # Header, Footer
│   ├── sections/               # Page sections + RequestCallbackPopup
│   └── ui/                     # Button, Badge, Logo, SectionHeading, CookieConsent
├── data/                       # Static content (products, blog posts, team)
└── lib/                        # site config, validators, mailer, utils
```

## Forms & email

The contact form and the Request-a-Callback popup both POST JSON to local API
routes (`/api/contact`, `/api/callback`). Each route validates with Zod, then
sends an HTML email through `src/lib/mailer.ts` (Nodemailer over Office 365
SMTP). There is no database — submissions live in the team inbox.

## Cookie consent & callback popup

- **CookieConsent** (`components/ui/CookieConsent.tsx`) — shows on first visit,
  remembers Accept/Reject in the `tk_cookie_consent` cookie for 180 days.
- **RequestCallbackPopup** (`components/sections/RequestCallbackPopup.tsx`) —
  auto-opens ~18s after load (suppressed for 7 days once seen via the
  `tk_callback_seen` cookie). A floating button lets users reopen it any time.

## Team photos

To add a photo for a team member: drop the image into `public/images/team/`,
then set the `image` field for that member in `src/data/team.ts`. Without a
photo, a clean initials avatar is shown automatically.

## Design tokens

Brand palette is defined in `tailwind.config.ts` — `brand-*`, `accent-*`,
`ink-*`. Never hardcode hex values in components.
