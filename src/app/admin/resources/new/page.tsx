"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import slugify from "slugify";

export default function AdminNewResourcePage() {
  const router = useRouter();
  const supabase = createClient();
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSaving(true); setError("");
    const form = new FormData(e.currentTarget);
    const data: Record<string, string> = {};
    form.forEach((v, k) => { data[k] = v.toString().trim(); });
    const title = data.title;
    const slug = data.slug || slugify(title, { lower: true, strict: true });
    if (!title || !data.category || !data.content_md) { setError("Title, category, and content are required."); setSaving(false); return; }

    const { error: insertError } = await supabase.from("resources").insert({
      title, slug, category: data.category, label: data.label || "Guide", excerpt: data.excerpt,
      content_md: data.content_md, cover_image_url: data.cover_image_url || null,
      meta_title: data.meta_title || null, meta_description: data.meta_description || null,
      canonical_url: data.canonical_url || null, status: data.status || "draft",
      published_at: data.status === "published" ? new Date().toISOString() : null,
    });
    if (insertError) { setError(insertError.message); setSaving(false); return; }
    router.push("/admin/resources");
    router.refresh();
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-900 mb-6">New Resource</h1>
      {error && <div className="mb-4 rounded-lg bg-red-50 border border-red-200 p-3 text-sm text-red-700">{error}</div>}
      <form onSubmit={handleSubmit} className="bg-white rounded-lg border border-slate-200 shadow-sm p-6 space-y-5 max-w-3xl">
        <div className="grid gap-5 sm:grid-cols-2">
          <div><label className="block text-sm font-medium text-slate-700 mb-1">Title *</label><input name="title" required className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-amber-600 focus:outline-none focus:ring-1 focus:ring-amber-600" /></div>
          <div><label className="block text-sm font-medium text-slate-700 mb-1">Slug</label><input name="slug" placeholder="auto-generated" className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-amber-600 focus:outline-none focus:ring-1 focus:ring-amber-600" /></div>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <div><label className="block text-sm font-medium text-slate-700 mb-1">Category *</label><input name="category" required placeholder="e.g. Supplier Verification" className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-amber-600 focus:outline-none focus:ring-1 focus:ring-amber-600" /></div>
          <div><label className="block text-sm font-medium text-slate-700 mb-1">Label</label><select name="label" defaultValue="Guide" className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-amber-600 focus:outline-none focus:ring-1 focus:ring-amber-600"><option>Guide</option><option>Checklist</option><option>Template</option><option>Report</option></select></div>
        </div>
        <div><label className="block text-sm font-medium text-slate-700 mb-1">Excerpt</label><textarea name="excerpt" rows={2} className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-amber-600 focus:outline-none focus:ring-1 focus:ring-amber-600" /></div>
        <div><label className="block text-sm font-medium text-slate-700 mb-1">Cover Image URL</label><input name="cover_image_url" placeholder="https://..." className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-amber-600 focus:outline-none focus:ring-1 focus:ring-amber-600" /></div>
        <div><label className="block text-sm font-medium text-slate-700 mb-1">Content (Markdown) *</label><textarea name="content_md" rows={16} required className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm font-mono focus:border-amber-600 focus:outline-none focus:ring-1 focus:ring-amber-600" /></div>
        <div className="grid gap-5 sm:grid-cols-3">
          <div><label className="block text-sm font-medium text-slate-700 mb-1">Meta Title</label><input name="meta_title" className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-amber-600 focus:outline-none focus:ring-1 focus:ring-amber-600" /></div>
          <div><label className="block text-sm font-medium text-slate-700 mb-1">Meta Description</label><input name="meta_description" className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-amber-600 focus:outline-none focus:ring-1 focus:ring-amber-600" /></div>
          <div><label className="block text-sm font-medium text-slate-700 mb-1">Canonical URL</label><input name="canonical_url" className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-amber-600 focus:outline-none focus:ring-1 focus:ring-amber-600" /></div>
        </div>
        <div className="flex items-center gap-4">
          <div><label className="block text-sm font-medium text-slate-700 mb-1">Status</label><select name="status" defaultValue="draft" className="rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-amber-600 focus:outline-none focus:ring-1 focus:ring-amber-600"><option value="draft">Draft</option><option value="published">Published</option><option value="archived">Archived</option></select></div>
          <button type="submit" disabled={saving} className="rounded-lg bg-amber-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-amber-500 disabled:opacity-60 transition-colors">{saving ? "Saving..." : "Save Resource"}</button>
        </div>
      </form>
    </div>
  );
}
