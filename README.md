# Hospital Group Website (Strapi + Next.js)

Monorepo setup for a hospital group website using:

- **CMS:** Strapi (PostgreSQL)
- **Frontend:** Next.js (App Router, TypeScript)
- **Database:** PostgreSQL via Docker Compose

## Project Structure

```text
.
├── apps
│   ├── cms      # Strapi CMS
│   └── web      # Next.js website
├── docker-compose.yml
└── package.json # workspace helper scripts
```

## Prerequisites

- Node.js 20+ (tested with Node 22)
- npm 10+
- Docker + Docker Compose plugin

## 1) Start PostgreSQL

From repo root:

```bash
npm run db:up
```

This starts a local Postgres instance with:

- Host: `localhost`
- Port: `5432`
- Database: `hospital_cms`
- Username: `strapi`
- Password: `strapi`

If needed, copy root env defaults for Docker Compose:

```bash
cp .env.example .env
```

## 2) Configure Environment Files

### Strapi

Copy Strapi environment file:

```bash
cp apps/cms/.env.example apps/cms/.env
```

> `apps/cms/.env` is gitignored by default.

### Next.js

Copy web environment file:

```bash
cp apps/web/.env.local.example apps/web/.env.local
```

## 3) Run Strapi CMS

```bash
npm run dev:cms
```

Open:

- Admin UI: http://localhost:1337/admin

On first launch, create the admin user.

## 4) Run Next.js Website

In another terminal:

```bash
npm run dev:web
```

Open:

- Website: http://localhost:3000

The homepage is preconfigured to read from `NEXT_PUBLIC_STRAPI_URL`.

## 5) Stop PostgreSQL

```bash
npm run db:down
```

---

## What to do next

Recommended next steps for your hospital group site:

1. **Model core content in Strapi**
   - `Hospital`
   - `Facility`
   - `Doctor`
   - `Specialty`
   - `Article` (news/blog)
   - `GlobalSettings` (header/footer/contact info)

2. **Set role permissions in Strapi**
   - Enable public read only for required content types
   - Keep admin/editor permissions restricted

3. **Create API integration layer in Next.js**
   - Add a small `lib/strapi.ts` client
   - Build typed fetchers for each content type

4. **Build page routes**
   - Home
   - About
   - Locations
   - Specialties
   - Doctors
   - News
   - Contact

5. **Add production readiness**
   - Separate production env values
   - Harden CORS + security headers
   - Add CI checks (`npm run lint`, `npm run build`)