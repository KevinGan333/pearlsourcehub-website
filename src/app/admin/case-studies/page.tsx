import { createAdminClient } from "@/lib/supabase/admin";
import Link from "next/link";

export default async function AdminCaseStudiesPage() {
  const supabase = createAdminClient();
  const { data: caseStudies } = await supabase.from("case_studies").select("*").order("updated_at", { ascending: false });

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-slate-900">Case Studies</h1>
        <Link href="/admin/case-studies/new" className="rounded-lg bg-amber-600 px-4 py-2 text-sm font-semibold text-white hover:bg-amber-500 transition-colors">+ New Case Study</Link>
      </div>
      <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-x-auto">
        <table className="w-full text-sm">
          <thead><tr className="border-b border-slate-200 bg-slate-50 text-left"><th className="px-4 py-3 font-semibold text-slate-700">Title</th><th className="px-4 py-3 font-semibold text-slate-700">Category</th><th className="px-4 py-3 font-semibold text-slate-700">City</th><th className="px-4 py-3 font-semibold text-slate-700">Status</th><th className="px-4 py-3 font-semibold text-slate-700">Updated</th><th className="px-4 py-3 font-semibold text-slate-700">Actions</th></tr></thead>
          <tbody>
            {caseStudies?.length ? caseStudies.map((cs: Record<string, unknown>) => (
              <tr key={cs.id as string} className="border-b border-slate-100">
                <td className="px-4 py-3 font-medium text-slate-800">{cs.title as string}</td>
                <td className="px-4 py-3 text-slate-600 text-xs">{cs.category as string || "—"}</td>
                <td className="px-4 py-3 text-slate-600 text-xs">{cs.city as string || "—"}</td>
                <td className="px-4 py-3"><span className={`text-xs px-2 py-0.5 rounded-full font-medium ${cs.status === "published" ? "bg-green-50 text-green-700" : cs.status === "draft" ? "bg-amber-50 text-amber-700" : "bg-slate-100 text-slate-600"}`}>{cs.status as string}</span></td>
                <td className="px-4 py-3 text-slate-500 text-xs">{new Date(cs.updated_at as string).toLocaleDateString()}</td>
                <td className="px-4 py-3"><Link href={`/admin/case-studies/${cs.id}/edit`} className="text-amber-600 hover:text-amber-700 text-xs font-medium">Edit</Link></td>
              </tr>
            )) : <tr><td colSpan={6} className="px-4 py-8 text-center text-slate-500">No case studies yet.</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
}
