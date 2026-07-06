import { createAdminClient } from "@/lib/supabase/admin";
import Link from "next/link";

export default async function AdminInquiriesPage() {
  const supabase = createAdminClient();
  const { data: inquiries } = await supabase.from("inquiries").select("*").order("created_at", { ascending: false });

  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-900 mb-6">Inquiries</h1>
      <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-x-auto">
        <table className="w-full text-sm">
          <thead><tr className="border-b border-slate-200 bg-slate-50 text-left"><th className="px-4 py-3 font-semibold text-slate-700">Date</th><th className="px-4 py-3 font-semibold text-slate-700">Source</th><th className="px-4 py-3 font-semibold text-slate-700">Name</th><th className="px-4 py-3 font-semibold text-slate-700">Email</th><th className="px-4 py-3 font-semibold text-slate-700">Product</th><th className="px-4 py-3 font-semibold text-slate-700">Concern</th><th className="px-4 py-3 font-semibold text-slate-700">Status</th><th className="px-4 py-3 font-semibold text-slate-700">Action</th></tr></thead>
          <tbody>
            {inquiries?.length ? inquiries.map((inq: Record<string, unknown>) => (
              <tr key={inq.id as string} className="border-b border-slate-100">
                <td className="px-4 py-3 text-xs text-slate-500">{new Date(inq.created_at as string).toLocaleDateString()}</td>
                <td className="px-4 py-3 text-slate-600">{inq.source as string}</td>
                <td className="px-4 py-3 font-medium text-slate-700">{inq.name as string || "—"}</td>
                <td className="px-4 py-3 text-slate-600 text-xs">{inq.email as string}</td>
                <td className="px-4 py-3 text-slate-600 text-xs">{inq.product_category as string || "—"}</td>
                <td className="px-4 py-3 text-slate-600 text-xs">{(inq.main_concern as string) || "—"}</td>
                <td className="px-4 py-3"><span className={`text-xs px-2 py-0.5 rounded-full font-medium ${inq.status === "new" ? "bg-blue-50 text-blue-700" : inq.status === "contacted" ? "bg-amber-50 text-amber-700" : "bg-slate-100 text-slate-600"}`}>{inq.status as string}</span></td>
                <td className="px-4 py-3"><Link href={`/admin/inquiries/${inq.id}`} className="text-amber-600 hover:text-amber-700 text-xs font-medium">View</Link></td>
              </tr>
            )) : <tr><td colSpan={8} className="px-4 py-8 text-center text-slate-500">No inquiries yet.</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
}
