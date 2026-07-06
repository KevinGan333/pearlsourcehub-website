import { createAdminClient } from "@/lib/supabase/admin";
import Link from "next/link";

export default async function AdminEditCaseStudyPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const supabase = createAdminClient();
  const { data: cs } = await supabase.from("case_studies").select("*").eq("id", id).single();
  if (!cs) return <div className="p-8 text-slate-500">Case study not found.</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-900 mb-6">Edit Case Study</h1>
      <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-6">
        <p className="text-sm text-slate-500 mb-4">Editing case study: <strong>{cs.title as string}</strong>. Full edit form coming soon. For now, use the Supabase dashboard or re-create with updated data.</p>
        <Link href="/admin/case-studies" className="text-amber-600 hover:text-amber-700 text-sm font-medium">← Back to Case Studies</Link>
      </div>
    </div>
  );
}
