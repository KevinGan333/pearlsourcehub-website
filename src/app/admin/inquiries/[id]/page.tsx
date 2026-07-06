import { createAdminClient } from "@/lib/supabase/admin";
import { notFound } from "next/navigation";
import InquiryDetailForm from "./InquiryDetailForm";

export default async function AdminInquiryDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const supabase = createAdminClient();
  const { data: inquiry } = await supabase.from("inquiries").select("*").eq("id", id).single();
  if (!inquiry) notFound();
  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-900 mb-6">Inquiry Detail</h1>
      <InquiryDetailForm inquiry={inquiry} />
    </div>
  );
}
