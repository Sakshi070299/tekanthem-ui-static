# Tekanthem — Backend

NestJS 10 · TypeORM 0.3 · PostgreSQL 16 · JWT auth

## Quick start

```bash
# 1. Start Postgres
docker compose up -d

# 2. Configure env
cp .env.example .env

# 3. Install + migrate + run
npm install
npm run migration:run
npm run start:dev
```

API on `http://localhost:3001`. Swagger docs at `http://localhost:3001/api/docs`.

## Endpoints

| Method | Path                          | Auth          | Notes                            |
| ------ | ----------------------------- | ------------- | -------------------------------- |
| POST   | `/api/auth/register`          | Public        |                                  |
| POST   | `/api/auth/login`             | Public        | Returns access + refresh tokens  |
| POST   | `/api/auth/refresh`           | Public        |                                  |
| POST   | `/api/contact`                | Public        | Rate-limited (5/min/IP)          |
| GET    | `/api/contact`                | admin/editor  | Paginated                        |
| GET    | `/api/contact/:id`            | admin/editor  |                                  |
| POST   | `/api/newsletter/subscribe`   | Public        | Rate-limited                     |
| GET    | `/api/blog/posts`             | Public        | Paginated, supports `?category=` |
| GET    | `/api/blog/posts/:slug`       | Public        |                                  |
| POST   | `/api/blog/posts`             | admin/editor  |                                  |
| PATCH  | `/api/blog/posts/:id`         | admin/editor  |                                  |
| DELETE | `/api/blog/posts/:id`         | admin         | Soft-delete                      |
| GET    | `/api/health`                 | Public        |                                  |

## Response envelope

```jsonc
// Success
{ "success": true, "data": { /* ... */ } }

// Paginated
{
  "success": true,
  "data": [ /* ... */ ],
  "pagination": {
    "page": 1, "limit": 20, "total": 42,
    "totalPages": 3, "hasNext": true, "hasPrev": false
  }
}

// Error
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "...",
    "statusCode": 400
  }
}
```

## Environment variables

| Variable               | Required | Default                  |
| ---------------------- | -------- | ------------------------ |
| `NODE_ENV`             | No       | `development`            |
| `PORT`                 | No       | `3001`                   |
| `DB_HOST`              | Yes      | `localhost`              |
| `DB_PORT`              | No       | `5432`                   |
| `DB_NAME`              | Yes      | `tekanthem`              |
| `DB_USER`              | Yes      | `postgres`               |
| `DB_PASSWORD`          | Yes      | `postgres`               |
| `JWT_SECRET`           | Yes      | —                        |
| `JWT_EXPIRES_IN`       | No       | `15m`                    |
| `JWT_REFRESH_SECRET`   | Yes      | —                        |
| `JWT_REFRESH_EXPIRES_IN` | No     | `7d`                     |
| `CORS_ORIGIN`          | No       | `http://localhost:3000`  |
| `SMTP_*`               | No       | (for outbound emails)    |
| `CONTACT_INBOX_EMAIL`  | No       | `hello@tekanthem.com`    |

## Migrations

Generate from entity changes:

```bash
npm run migration:generate -- migrations/AddSomethingNew
```

Apply pending:

```bash
npm run migration:run
```

Roll back the last one:

```bash
npm run migration:revert
```

## Testing

```bash
npm run test          # Jest unit tests
npm run test:cov      # With coverage
npm run test:e2e      # End-to-end (requires Postgres)
```

## Production

```bash
docker build -t tekanthem-backend .
docker run -p 3001:3001 --env-file .env tekanthem-backend
```

Reverse-proxy behind nginx / Cloudflare. Run `npm run migration:run` on every deploy.
