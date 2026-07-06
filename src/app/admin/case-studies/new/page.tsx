"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import slugify from "slugify";

export default function AdminNewCaseStudyPage() {
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
    const slug = data.slug || slugify(data.title, { lower: true, strict: true });
    if (!data.title) { setError("Title is required."); setSaving(false); return; }
    const { error: insertError } = await supabase.from("case_studies").insert({
      title: data.title, slug, category: data.category, city: data.city,
      product_category: data.product_category, buyer_problem: data.buyer_problem, sourcing_risk: data.sourcing_risk,
      execution_process: data.execution_process, deliverables: data.deliverables, expected_outcome: data.expected_outcome,
      content_md: data.content_md,
      status: data.status || "draft",
      published_at: data.status === "published" ? new Date().toISOString() : null,
    });
    if (insertError) { setError(insertError.message); setSaving(false); return; }
    router.push("/admin/case-studies"); router.refresh();
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-900 mb-6">New Case Study</h1>
      {error && <div className="mb-4 rounded-lg bg-red-50 border border-red-200 p-3 text-sm text-red-700">{error}</div>}
      <form onSubmit={handleSubmit} className="bg-white rounded-lg border border-slate-200 shadow-sm p-6 space-y-5 max-w-3xl">
        <div className="grid gap-5 sm:grid-cols-2">
          <div><label className="block text-sm font-medium text-slate-700 mb-1">Title *</label><input name="title" required className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-amber-600 focus:outline-none focus:ring-1 focus:ring-amber-600" /></div>
          <div><label className="block text-sm font-medium text-slate-700 mb-1">Slug</label><input name="slug" placeholder="auto-generated" className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-amber-600 focus:outline-none focus:ring-1 focus:ring-amber-600" /></div>
        </div>
        <div className="grid gap-5 sm:grid-cols-3">
          <div><label className="block text-sm font-medium text-slate-700 mb-1">Category</label><input name="category" className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-amber-600 focus:outline-none focus:ring-1 focus:ring-amber-600" /></div>
          <div><label className="block text-sm font-medium text-slate-700 mb-1">City</label><input name="city" className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-amber-600 focus:outline-none focus:ring-1 focus:ring-amber-600" /></div>
          <div><label className="block text-sm font-medium text-slate-700 mb-1">Product Category</label><input name="product_category" className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-amber-600 focus:outline-none focus:ring-1 focus:ring-amber-600" /></div>
        </div>
        <div><label className="block text-sm font-medium text-slate-700 mb-1">Buyer Problem</label><textarea name="buyer_problem" rows={2} className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-amber-600 focus:outline-none focus:ring-1 focus:ring-amber-600" /></div>
        <div><label className="block text-sm font-medium text-slate-700 mb-1">Sourcing Risk</label><textarea name="sourcing_risk" rows={2} className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-amber-600 focus:outline-none focus:ring-1 focus:ring-amber-600" /></div>
        <div><label className="block text-sm font-medium text-slate-700 mb-1">Execution Process</label><textarea name="execution_process" rows={3} className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-amber-600 focus:outline-none focus:ring-1 focus:ring-amber-600" /></div>
        <div><label className="block text-sm font-medium text-slate-700 mb-1">Deliverables</label><textarea name="deliverables" rows={3} className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-amber-600 focus:outline-none focus:ring-1 focus:ring-amber-600" /></div>
        <div><label className="block text-sm font-medium text-slate-700 mb-1">Expected Outcome</label><textarea name="expected_outcome" rows={2} className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-amber-600 focus:outline-none focus:ring-1 focus:ring-amber-600" /></div>
        <div><label className="block text-sm font-medium text-slate-700 mb-1">Content (Markdown)</label><textarea name="content_md" rows={8} className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm font-mono focus:border-amber-600 focus:outline-none focus:ring-1 focus:ring-amber-600" /></div>
        <div className="flex items-center gap-4">
          <div><label className="block text-sm font-medium text-slate-700 mb-1">Status</label><select name="status" defaultValue="draft" className="rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-amber-600 focus:outline-none focus:ring-1 focus:ring-amber-600"><option value="draft">Draft</option><option value="published">Published</option><option value="archived">Archived</option></select></div>
          <button type="submit" disabled={saving} className="rounded-lg bg-amber-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-amber-500 disabled:opacity-60 transition-colors">{saving ? "Saving..." : "Save Case Study"}</button>
        </div>
      </form>
    </div>
  );
}
