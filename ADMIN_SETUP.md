# PearlSourceHub Admin Backend — Setup Guide

## Prerequisites

- [Supabase](https://supabase.com) account with a project
- Vercel deployment (or other Next.js hosting)
- Resend account for email (already configured)

## 1. Create Supabase Project

1. Go to https://supabase.com/dashboard
2. Create a new project
3. Note your project URL and anon key from Settings > API

## 2. Run Database Schema

1. Go to Supabase SQL Editor
2. Copy the contents of `supabase/schema.sql`
3. Run the entire script
4. Verify tables are created: `admin_profiles`, `resources`, `case_studies`, `inquiries`, `site_settings`

## 3. Configure Environment Variables

Copy `.env.local.example` to `.env.local` and fill in:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
SUPABASE_SERVICE_ROLE_KEY=eyJ...
ADMIN_ALLOWED_EMAILS=kevin.gan@pearlsourcehub.com,admin2@example.com
```

In Vercel, add these as environment variables (Settings > Environment Variables).

## 4. Create Admin User

1. Go to Supabase Authentication > Users
2. Click "Add User" > "Create New User"
3. Enter the admin email and password
4. The `handle_new_user()` trigger will auto-create their `admin_profiles` row
5. Make sure the email is listed in `ADMIN_ALLOWED_EMAILS`

## 5. Create Storage Bucket (Optional)

For image uploads in Resources:

1. Go to Supabase Storage
2. Create a bucket named `resource-images`
3. Set to public
4. Optional: add RLS policy to allow admins to upload

## 6. Test Admin Login

1. Visit `https://www.pearlsourcehub.com/admin/login`
2. Sign in with the admin email and password
3. You should be redirected to `/admin/dashboard`

## 7. Verify Form Submissions

1. Submit the Contact form at `/contact`
2. Submit the Quote form at `/quote`
3. Check `/admin/inquiries` — submissions should appear

## 8. Admin Routes

| Route | Page |
|-------|------|
| `/admin` | Redirects to dashboard |
| `/admin/login` | Supabase Auth login |
| `/admin/dashboard` | Stats, recent items, quick actions |
| `/admin/resources` | List all CMS resources |
| `/admin/resources/new` | Create new resource |
| `/admin/resources/[id]/edit` | Edit existing resource |
| `/admin/case-studies` | List case studies |
| `/admin/case-studies/new` | Create new case study |
| `/admin/inquiries` | List all inquiries |
| `/admin/inquiries/[id]` | Inquiry detail + status management |
| `/admin/settings` | View current site config |

## 9. CMS Resources — Public Access

Published CMS resources are automatically available at `/resources/[slug]`. The dynamic route:

- Checks if the slug matches a static article (skips those)
- Looks up the published CMS resource from Supabase
- Renders using react-markdown with remark-gfm
- Includes SEO metadata and JSON-LD

## 10. Troubleshooting

**Can't log in?** Check that email is in `ADMIN_ALLOWED_EMAILS` (comma-separated).

**Forms not saving to Supabase?** Check `SUPABASE_SERVICE_ROLE_KEY` is set correctly in Vercel.

**CMS resources return 404?** Make sure status is `published` and slug is not in `STATIC_SLUGS` list.

**Upgrading from a previous version?** Drop and re-run `supabase/schema.sql` as needed.
