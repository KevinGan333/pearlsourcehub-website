"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function InquiryDetailForm({ inquiry }: { inquiry: Record<string, unknown> }) {
  const router = useRouter();
  const supabase = createClient();
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState(inquiry.status as string);
  const [notes, setNotes] = useState(inquiry.internal_notes as string || "");

  async function handleSave() {
    setSaving(true);
    await supabase.from("inquiries").update({ status, internal_notes: notes, updated_at: new Date().toISOString() }).eq("id", inquiry.id as string);
    setSaving(false);
    router.refresh();
  }

  const fields: { label: string; key: string }[] = [
    { label: "Source", key: "source" }, { label: "Name", key: "name" }, { label: "Email", key: "email" },
    { label: "Company", key: "company" }, { label: "Country", key: "country" },
    { label: "Product Category", key: "product_category" }, { label: "Target Market", key: "target_market" },
    { label: "Order Quantity", key: "estimated_order_quantity" }, { label: "OEM/ODM", key: "oem_odm_requirement" },
    { label: "Current Stage", key: "current_stage" }, { label: "Main Concern", key: "main_concern" },
    { label: "Target Price", key: "target_price" },
  ];

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-6">
        <h2 className="text-lg font-semibold text-slate-900 mb-4">Details</h2>
        <dl className="space-y-3">
          {fields.map((f) => (
            <div key={f.key}><dt className="text-xs font-medium text-slate-500">{f.label}</dt><dd className="text-sm text-slate-700 mt-0.5">{inquiry[f.key] as string || "—"}</dd></div>
          ))}
        </dl>
        <div className="mt-6 pt-4 border-t border-slate-100">
          <dt className="text-xs font-medium text-slate-500">Message</dt>
          <dd className="text-sm text-slate-700 mt-1 whitespace-pre-wrap">{inquiry.message as string || "—"}</dd>
        </div>
      </div>
      <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-6">
        <h2 className="text-lg font-semibold text-slate-900 mb-4">Manage</h2>
        <div className="mb-4"><label className="block text-sm font-medium text-slate-700 mb-1">Status</label><select value={status} onChange={(e) => setStatus(e.target.value)} className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-amber-600 focus:outline-none focus:ring-1 focus:ring-amber-600"><option value="new">New</option><option value="contacted">Contacted</option><option value="qualified">Qualified</option><option value="unqualified">Unqualified</option><option value="closed">Closed</option></select></div>
        <div className="mb-4"><label className="block text-sm font-medium text-slate-700 mb-1">Internal Notes</label><textarea value={notes} onChange={(e) => setNotes(e.target.value)} rows={5} className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-amber-600 focus:outline-none focus:ring-1 focus:ring-amber-600" /></div>
        <button onClick={handleSave} disabled={saving} className="rounded-lg bg-amber-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-amber-500 disabled:opacity-60 transition-colors">{saving ? "Saving..." : "Update Inquiry"}</button>
      </div>
    </div>
  );
}
