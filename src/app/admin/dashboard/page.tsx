import { createAdminClient } from "@/lib/supabase/admin";
import Link from "next/link";

export default async function AdminDashboardPage() {
  const supabase = createAdminClient();

  const { count: resourceCount } = await supabase.from("resources").select("*", { count: "exact", head: true });
  const { count: publishedCount } = await supabase.from("resources").select("*", { count: "exact", head: true }).eq("status", "published");
  const { count: inquiryCount } = await supabase.from("inquiries").select("*", { count: "exact", head: true });
  const { count: newInquiryCount } = await supabase.from("inquiries").select("*", { count: "exact", head: true }).eq("status", "new");

  const { data: recentInquiries } = await supabase.from("inquiries").select("*").order("created_at", { ascending: false }).limit(5);
  const { data: recentResources } = await supabase.from("resources").select("*").order("updated_at", { ascending: false }).limit(5);

  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-900 mb-8">Dashboard</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        {[{ label: "Resources", value: resourceCount || 0 }, { label: "Published", value: publishedCount || 0 }, { label: "Inquiries", value: inquiryCount || 0 }, { label: "New Inquiries", value: newInquiryCount || 0 }].map((s) => (
          <div key={s.label} className="bg-white rounded-lg border border-slate-200 p-5 shadow-sm"><p className="text-2xl font-bold text-slate-900">{s.value}</p><p className="text-sm text-slate-500 mt-1">{s.label}</p></div>
        ))}
      </div>
      <div className="flex gap-3 mb-8">
        <Link href="/admin/resources/new" className="rounded-lg bg-amber-600 px-4 py-2 text-sm font-semibold text-white hover:bg-amber-500 transition-colors">+ New Resource</Link>
        <Link href="/admin/inquiries" className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors">View Inquiries</Link>
      </div>
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-5">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">Recent Inquiries</h2>
          {recentInquiries?.length ? (
            <div className="space-y-3">{recentInquiries.map((inq: Record<string, unknown>) => (
              <div key={inq.id as string} className="flex items-center justify-between border-b border-slate-100 pb-3 last:border-0">
                <div><p className="text-sm font-medium text-slate-700">{(inq.name as string) || (inq.email as string)}</p><p className="text-xs text-slate-500">{inq.source as string} · {new Date(inq.created_at as string).toLocaleDateString()}</p></div>
                <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${(inq.status as string) === "new" ? "bg-blue-50 text-blue-700" : "bg-slate-100 text-slate-600"}`}>{inq.status as string}</span>
              </div>
            ))}</div>
          ) : <p className="text-sm text-slate-500">No inquiries yet.</p>}
        </div>
        <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-5">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">Recent Resources</h2>
          {recentResources?.length ? (
            <div className="space-y-3">{recentResources.map((r: Record<string, unknown>) => (
              <div key={r.id as string} className="flex items-center justify-between border-b border-slate-100 pb-3 last:border-0">
                <div><p className="text-sm font-medium text-slate-700">{r.title as string}</p><p className="text-xs text-slate-500">{r.category as string}</p></div>
                <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${r.status === "published" ? "bg-green-50 text-green-700" : r.status === "draft" ? "bg-amber-50 text-amber-700" : "bg-slate-100 text-slate-600"}`}>{r.status as string}</span>
              </div>
            ))}</div>
          ) : <p className="text-sm text-slate-500">No resources yet.</p>}
        </div>
      </div>
    </div>
  );
}
