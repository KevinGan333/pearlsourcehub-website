import { createAdminClient } from "@/lib/supabase/admin";
import Link from "next/link";

export default async function AdminResourcesPage() {
  const supabase = createAdminClient();
  const { data: resources } = await supabase.from("resources").select("*").order("updated_at", { ascending: false });

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-slate-900">Resources</h1>
        <Link href="/admin/resources/new" className="rounded-lg bg-amber-600 px-4 py-2 text-sm font-semibold text-white hover:bg-amber-500 transition-colors">+ New Resource</Link>
      </div>
      <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-x-auto">
        <table className="w-full text-sm">
          <thead><tr className="border-b border-slate-200 bg-slate-50 text-left"><th className="px-4 py-3 font-semibold text-slate-700">Title</th><th className="px-4 py-3 font-semibold text-slate-700">Category</th><th className="px-4 py-3 font-semibold text-slate-700">Status</th><th className="px-4 py-3 font-semibold text-slate-700">Updated</th><th className="px-4 py-3 font-semibold text-slate-700">Actions</th></tr></thead>
          <tbody>
            {resources?.length ? resources.map((r: Record<string, unknown>) => (
              <tr key={r.id as string} className="border-b border-slate-100">
                <td className="px-4 py-3 font-medium text-slate-800">{r.title as string}</td>
                <td className="px-4 py-3 text-slate-600">{r.category as string}</td>
                <td className="px-4 py-3"><span className={`text-xs px-2 py-0.5 rounded-full font-medium ${r.status === "published" ? "bg-green-50 text-green-700" : r.status === "draft" ? "bg-amber-50 text-amber-700" : "bg-slate-100 text-slate-600"}`}>{r.status as string}</span></td>
                <td className="px-4 py-3 text-slate-500 text-xs">{new Date(r.updated_at as string).toLocaleDateString()}</td>
                <td className="px-4 py-3 flex gap-2">
                  <Link href={`/admin/resources/${r.id}/edit`} className="text-amber-600 hover:text-amber-700 text-xs font-medium">Edit</Link>
                  {r.status === "published" && <Link href={`/resources/${r.slug}`} className="text-slate-400 hover:text-slate-600 text-xs">View</Link>}
                </td>
              </tr>
            )) : <tr><td colSpan={5} className="px-4 py-8 text-center text-slate-500">No resources yet. Create your first resource.</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
}
