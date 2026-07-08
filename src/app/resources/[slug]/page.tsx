import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { createAdminClient } from "@/lib/supabase/admin";
import PageHero from "@/components/PageHero";
import Breadcrumb from "@/components/Breadcrumb";
import CTASection from "@/components/CTASection";
import { siteConfig } from "@/data/site";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export const dynamic = "force-dynamic";

// Static article slugs that already exist as static pages — skip CMS lookup
const STATIC_SLUGS = [
  "how-to-hire-a-reliable-china-product-sourcing-agent-in-2026",
  "product-sourcing",
  "china-factory-audit-service",
  "china-factory-audit-checklist-for-importers",
  "china-sourcing-agent-dropshipping",
];

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  if (STATIC_SLUGS.includes(slug)) return { title: `${slug} | PearlSourceHub` };

  const supabase = createAdminClient();
  const { data: resource } = await supabase.from("resources").select("*").eq("slug", slug).eq("status", "published").single();
  if (!resource) return { title: "Not Found | PearlSourceHub" };

  return {
    title: (resource.meta_title as string) || `${resource.title} | PearlSourceHub`,
    description: (resource.meta_description as string) || (resource.excerpt as string) || "",
    alternates: { canonical: (resource.canonical_url as string) || `/resources/${slug}` },
    openGraph: {
      title: (resource.meta_title as string) || `${resource.title} | PearlSourceHub`,
      description: (resource.meta_description as string) || (resource.excerpt as string) || "",
      url: `${siteConfig.domain}/resources/${slug}`,
      type: "article",
      siteName: siteConfig.name,
    },
  };
}

export default async function CmsResourcePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (STATIC_SLUGS.includes(slug)) notFound(); // static pages handle themselves

  const supabase = createAdminClient();
  const { data: resource } = await supabase.from("resources").select("*").eq("slug", slug).eq("status", "published").single();
  if (!resource) notFound();

  const jsonLd = {
    "@context": "https://schema.org", "@type": "Article",
    headline: resource.title,
    description: resource.meta_description || resource.excerpt || "",
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.domain },
    mainEntityOfPage: `${siteConfig.domain}/resources/${slug}`,
    datePublished: resource.published_at, dateModified: resource.updated_at,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero label={resource.label as string || "Guide"} title={resource.title as string} subtitle={resource.excerpt as string || ""} />
      <div className="bg-white border-b border-slate-100"><div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8"><Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: resource.title as string }]} /></div></div>
      <article className="py-12 sm:py-16 bg-white"><div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {resource.cover_image_url && <Image src={resource.cover_image_url as string} alt={resource.title as string} width={780} height={440} className="rounded-lg my-6 w-full h-auto" />}
        <div className="prose prose-slate max-w-none prose-headings:text-slate-900 prose-p:text-slate-600 prose-p:leading-7 prose-li:text-slate-600 prose-a:text-amber-600 hover:prose-a:text-amber-700">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{(resource.content_md as string) || ""}</ReactMarkdown>
        </div>
      </div></article>
      <CTASection title="Ready to source from the Pearl River Delta?" description="Upload your product brief and get a verified supplier direction." primaryButtonLabel="Upload Your Product Brief" primaryButtonHref="/quote" secondaryButtonLabel="Talk to a Sourcing Specialist" secondaryButtonHref="/contact" />
    </>
  );
}
