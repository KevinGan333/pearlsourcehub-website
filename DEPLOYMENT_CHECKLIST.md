# PearlSourceHub.com — Production Deployment Checklist

## Pre-Deployment

### Local Checks
```bash
npm run lint      # Must pass with 0 errors
npm run build     # Must compile TypeScript and generate all static pages
```

### Environment Variables
- [x] `.env.local.example` created and committed
- [ ] `.env.local` created locally (never commit)
- [ ] `RESEND_API_KEY` set in `.env.local` and Vercel
- [ ] `LEAD_TO_EMAIL` set to `kevin.gan@pearlsourcehub.com`
- [ ] `LEAD_FROM_EMAIL` verified domain in Resend dashboard
- [ ] `NEXT_PUBLIC_SITE_URL` set to `https://www.pearlsourcehub.com`

### Domain & DNS
- [ ] Domain `pearlsourcehub.com` registered
- [ ] DNS pointing to Vercel (or deployment platform)
- [ ] `www.pearlsourcehub.com` redirect configured

## Deploy to Vercel

1. Push to GitHub
2. Import repo in Vercel: `https://vercel.com/import`
3. Configure environment variables in Vercel project settings
4. Deploy

### Vercel Environment Variables
```
RESEND_API_KEY=re_xxxxxxxxxxxx
LEAD_TO_EMAIL=kevin.gan@pearlsourcehub.com
LEAD_FROM_EMAIL=PearlSourceHub <noreply@pearlsourcehub.com>
NEXT_PUBLIC_SITE_URL=https://www.pearlsourcehub.com
```

## Post-Deployment Verification

### Route Check
Visit each URL and confirm HTTP 200:
- [ ] `/`
- [ ] `/services`
- [ ] `/industries`
- [ ] `/manufacturing-clusters`
- [ ] `/case-studies`
- [ ] `/resources`
- [ ] `/about`
- [ ] `/contact`
- [ ] `/quote`
- [ ] `/thank-you/contact`
- [ ] `/thank-you/quote`
- [ ] `/locations/shenzhen-electronics-sourcing`
- [ ] `/locations/dongguan-factory-audit`
- [ ] `/locations/guangzhou-packaging-sourcing`
- [ ] `/locations/foshan-furniture-sourcing`
- [ ] `/locations/zhongshan-led-lighting-sourcing`
- [ ] `/locations/huizhou-electronics-assembly`

### SEO Files
- [ ] `/sitemap.xml` returns valid XML with production URLs
- [ ] `/robots.txt` allows crawling and points to sitemap

### Forms
- [ ] Contact form validates and shows errors on empty submission
- [ ] Contact form submits successfully (redirects to `/thank-you/contact`)
- [ ] Quote form validates and shows errors on empty submission
- [ ] Quote form submits successfully (redirects to `/thank-you/quote`)
- [ ] Honeypot field blocks spam silently

### Mobile Check
- [ ] All pages readable on mobile (375px+)
- [ ] Tables scroll horizontally on mobile
- [ ] Forms usable on mobile
- [ ] TEL and WhatsApp links tappable
- [ ] Header and Footer not broken

### Accessibility
- [ ] Dark sections use white text
- [ ] Form inputs have visible labels
- [ ] External links use `target="_blank" rel="noopener noreferrer"`
- [ ] No tiny unreadable text
- [ ] Color contrast sufficient

## Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add property: `https://www.pearlsourcehub.com`
3. Verify ownership (DNS TXT record or HTML file)
4. Submit sitemap: `https://www.pearlsourcehub.com/sitemap.xml`
5. Request indexing for key pages:
   - Homepage
   - `/manufacturing-clusters`
   - `/locations/shenzhen-electronics-sourcing`
   - `/locations/dongguan-factory-audit`

## Ongoing

### Form Monitoring
- Check Resend dashboard for email delivery
- Monitor spam volume
- Consider adding Cloudflare Turnstile if spam becomes an issue

### Content Updates
- Update `src/data/site.ts` for any company info changes
- Update `src/data/locationPages.ts` for SEO page content
- Update `src/data/seo.ts` for sitemap entries
- Do not hardcode contact info in page components

### Performance
- Run Lighthouse audit monthly
- Monitor Core Web Vitals in Search Console
