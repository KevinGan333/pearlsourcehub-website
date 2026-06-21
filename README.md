# PearlSourceHub.com

Pearl River Delta Sourcing Partner for Product Brands and Hardware Teams.

**Live site**: [https://www.pearlsourcehub.com](https://www.pearlsourcehub.com)

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Forms**: Zod validation + Resend email
- **SEO**: sitemap.xml, robots.txt, JSON-LD structured data

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production Checks

```bash
npm run lint
npm run build
```

## Environment Variables

Copy `.env.local.example` to `.env.local` and fill in:

| Variable | Description |
|----------|-------------|
| `RESEND_API_KEY` | API key from [resend.com/api-keys](https://resend.com/api-keys) |
| `LEAD_TO_EMAIL` | Email address that receives form submissions |
| `LEAD_FROM_EMAIL` | Verified sender email in Resend |
| `NEXT_PUBLIC_SITE_URL` | Production domain URL |

> **Important**: Do not commit `.env.local`. The sending domain must be verified in Resend before production emails will deliver.

## Company Contact Information

All company contact info (email, phone, WhatsApp, social links, location) is managed in:

**[src/data/site.ts](src/data/site.ts)**

Do not hardcode phone, WhatsApp, email, or social URLs inside page components. Import from `siteConfig` instead.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout + JSON-LD
│   ├── page.tsx            # Homepage
│   ├── sitemap.ts          # Dynamic sitemap
│   ├── robots.ts           # Robots.txt
│   ├── not-found.tsx       # 404 page
│   ├── api/                # Route handlers
│   │   ├── contact/route.ts
│   │   └── quote/route.ts
│   ├── services/           # Services page
│   ├── industries/         # Industries page
│   ├── manufacturing-clusters/
│   ├── case-studies/
│   ├── resources/
│   ├── about/
│   ├── contact/
│   ├── quote/
│   ├── thank-you/          # Post-submission pages
│   └── locations/          # SEO location landing pages
├── components/             # Reusable UI components
├── data/                   # Site config, content data, SEO data
└── lib/                    # Utilities, validators, email templates
```

## Deployment

See **[DEPLOYMENT_CHECKLIST.md](DEPLOYMENT_CHECKLIST.md)** for the full production deployment guide.
