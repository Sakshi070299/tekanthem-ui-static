# Tekanthem — Public Website

The marketing & public-facing website for Tekanthem — Finance, Payroll, C&F, and CRM.

This is a monorepo with two services:

| Service    | Stack                                  | Path        |
| ---------- | -------------------------------------- | ----------- |
| `frontend` | Next.js 14 · TypeScript · Tailwind     | `frontend/` |
| `backend`  | NestJS · TypeORM · PostgreSQL          | `backend/`  |

---

## Quick start

### Prerequisites

- Node.js 20+ and `npm` (or `bun`)
- Docker + Docker Compose (for local Postgres)

### 1. Start Postgres

```bash
cd backend
docker compose up -d
```

### 2. Boot the backend

```bash
cd backend
cp .env.example .env
npm install
npm run migration:run
npm run start:dev
# API running at http://localhost:3001
# Swagger docs at http://localhost:3001/api/docs
```

### 3. Boot the frontend

```bash
cd frontend
cp .env.example .env.local
npm install
npm run dev
# Site running at http://localhost:3000
```

---

## What's inside

### Frontend (`frontend/`)

- **Home** — Hero, product suite, features, stats, testimonials, CTA
- **Products** — Index plus dedicated pages for Finance, Payroll, C&F, CRM
- **Pricing** — 4 plan tiers + detailed comparison + pricing FAQ
- **About** — Story, values, leadership team
- **Contact** — Working form (POSTs to backend) with intent routing
- **Blog** — Listing + featured post + dynamic detail page (`/blog/[slug]`)
- **Login** — Static auth page (not wired up to real auth yet)
- **SEO** — Per-page metadata, sitemap.xml, robots.txt, JSON-LD Organization schema
- **Accessibility** — Semantic HTML, skip-to-main, focus rings, reduced-motion support

### Backend (`backend/`)

| Module       | Endpoint                      | Auth         |
| ------------ | ----------------------------- | ------------ |
| Auth         | `/api/auth/{register,login,refresh}` | Public  |
| Contact      | `POST /api/contact`           | Public (rate-limited) |
| Contact      | `GET /api/contact[/:id]`      | Admin/editor |
| Newsletter   | `POST /api/newsletter/subscribe` | Public    |
| Blog         | `GET /api/blog/posts[/:slug]` | Public       |
| Blog         | `POST/PATCH/DELETE /api/blog/posts` | Admin/editor |
| Health       | `GET /api/health`             | Public       |

All responses follow the envelope:

```jsonc
{ "success": true,  "data": { /* ... */ } }
{ "success": false, "error": { "code": "...", "message": "...", "statusCode": 400 } }
```

### Architectural defaults

- Strict TypeScript everywhere
- Snake-case naming strategy in Postgres
- Soft-delete on users and blog posts
- Rate-limited public endpoints (`@nestjs/throttler`)
- Global JWT guard with `@Public()` opt-out
- Helmet security headers + CORS pinned to the frontend origin
- Swagger docs in non-production

---

## Scripts

### Frontend

```bash
npm run dev         # Start Next.js dev server
npm run build       # Production build
npm run typecheck   # tsc --noEmit
npm run lint        # ESLint
npm run format      # Prettier
```

### Backend

```bash
npm run start:dev          # Watch mode
npm run build              # Compile to dist/
npm run typecheck          # tsc --noEmit
npm run test               # Jest unit tests
npm run migration:generate # Generate a new migration from entity changes
npm run migration:run      # Apply pending migrations
npm run migration:revert   # Roll back last migration
```

---

## Project structure

```
tekanthem/
├── frontend/
│   ├── src/
│   │   ├── app/                    # Next.js App Router (pages)
│   │   ├── components/
│   │   │   ├── layout/            # Header, Footer
│   │   │   ├── sections/          # Home/Product page sections
│   │   │   └── ui/                # Button, Badge, Logo, ...
│   │   ├── data/                  # Static content (products, blog)
│   │   └── lib/                   # utils, site config, validators
│   ├── public/                    # Static assets
│   ├── tailwind.config.ts
│   └── next.config.ts
└── backend/
    ├── src/
    │   ├── common/                # Guards, filters, interceptors, decorators
    │   ├── config/                # ConfigService factory + env validation
    │   ├── database/              # TypeORM data-source, naming strategy
    │   ├── entities/              # User, ContactSubmission, BlogPost, ...
    │   ├── modules/
    │   │   ├── auth/
    │   │   ├── blog/
    │   │   ├── contact/
    │   │   ├── newsletter/
    │   │   └── health/
    │   ├── app.module.ts
    │   └── main.ts
    ├── migrations/                # TypeORM migration files
    ├── docker-compose.yml         # Local Postgres
    └── Dockerfile                 # Production image
```

---

## Deployment

The frontend is designed to deploy to **Vercel** (or any Next.js-compatible host). The backend is designed to run as a container — push the included `Dockerfile` to ECS, Render, Railway, or your platform of choice. Point `NEXT_PUBLIC_API_URL` (frontend) at the public hostname of the backend.

For production:

1. Generate strong secrets for `JWT_SECRET` and `JWT_REFRESH_SECRET`
2. Disable `synchronize` (already disabled outside `development`)
3. Run migrations on deploy (`npm run migration:run`)
4. Set `CORS_ORIGIN` to the exact frontend URL
5. Wire up SMTP for contact form notifications (TODO)

---

## License

© 2026 Tekanthem Technologies Pvt Ltd. All rights reserved.
