import { createAdminClient } from "@/lib/supabase/admin";
import { notFound } from "next/navigation";
import ResourceEditForm from "./ResourceEditForm";

export default async function AdminEditResourcePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const supabase = createAdminClient();
  const { data: resource } = await supabase.from("resources").select("*").eq("id", id).single();
  if (!resource) notFound();
  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-900 mb-6">Edit Resource</h1>
      <ResourceEditForm resource={resource} />
    </div>
  );
}
