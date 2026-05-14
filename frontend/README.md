# Tekanthem — Frontend

Next.js 14 App Router · TypeScript · Tailwind CSS · React Hook Form + Zod

## Quick start

```bash
cp .env.example .env.local
npm install
npm run dev
```

Open http://localhost:3000.

## Environment variables

| Variable                | Required | Purpose                                  |
| ----------------------- | -------- | ---------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`  | Yes      | Used in metadata, sitemap, JSON-LD       |
| `NEXT_PUBLIC_API_URL`   | Yes      | Base URL for backend (`/api/...`)        |
| `CONTACT_INBOX_EMAIL`   | No       | Where to deliver contact form copies     |

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
├── app/                # Next.js App Router pages
│   ├── about/
│   ├── blog/[slug]/
│   ├── contact/
│   ├── login/
│   ├── pricing/
│   ├── products/{finance,payroll,cnf,crm}/
│   ├── layout.tsx      # Root layout (fonts, header, footer)
│   ├── page.tsx        # Home
│   ├── sitemap.ts      # Dynamic sitemap
│   ├── robots.ts       # robots.txt
│   ├── not-found.tsx
│   ├── error.tsx
│   └── globals.css     # Design tokens + Tailwind
├── components/
│   ├── layout/         # Header, Footer
│   ├── sections/       # Page-level sections
│   └── ui/             # Button, Badge, Logo, SectionHeading
├── data/               # Static content (products, blog posts)
└── lib/                # site config, validators, utils
```

## Design tokens

Brand palette is defined in `tailwind.config.ts`:

- `brand-{50..950}` — primary blue scale (Tekanthem brand)
- `accent-{50..700}` — orange accent
- `ink-{50..900}` — neutral text/surface scale

Never hardcode hex values in components — always use tokens.

## Notes

- All images should use `next/image`. Add domains to `next.config.ts` if pulling from remote sources.
- Heavy interactive components are client (`'use client'`); marketing content is server-rendered for fast LCP.
- The contact form posts to `${NEXT_PUBLIC_API_URL}/contact`. If the backend is down, the user sees a friendly error.
