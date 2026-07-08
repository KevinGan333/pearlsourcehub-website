import { getAdminUser } from "@/lib/adminAuth";
import { redirect } from "next/navigation";
import AdminSidebar from "@/components/AdminSidebar";
import AdminHeader from "@/components/AdminHeader";
import { isSupabaseConfigured } from "@/lib/supabase/admin";

export const dynamic = "force-dynamic";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  if (!isSupabaseConfigured()) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
        <div className="max-w-md w-full bg-white rounded-xl shadow-sm border border-slate-200 p-8 text-center">
          <h1 className="text-xl font-bold text-slate-900 mb-2">Admin Not Configured</h1>
          <p className="text-sm text-slate-600 mb-4">Supabase environment variables are missing. Add the following to <code className="bg-slate-100 px-1.5 py-0.5 rounded text-xs">.env.local</code>:</p>
          <div className="bg-slate-50 rounded-lg p-4 text-left text-xs font-mono text-slate-600 space-y-1 mb-4">
            <p>NEXT_PUBLIC_SUPABASE_URL=</p>
            <p>NEXT_PUBLIC_SUPABASE_ANON_KEY=</p>
            <p>SUPABASE_SERVICE_ROLE_KEY=</p>
            <p>ADMIN_ALLOWED_EMAILS=</p>
          </div>
          <p className="text-xs text-slate-400">See ADMIN_SETUP.md for full instructions.</p>
        </div>
      </div>
    );
  }

  const admin = await getAdminUser();
  if (!admin) redirect("/admin/login");

  return (
    <div className="flex min-h-screen bg-slate-50">
      <AdminSidebar userEmail={admin.user.email!} />
      <div className="flex-1 flex flex-col lg:ml-64">
        <AdminHeader userEmail={admin.user.email!} />
        <main className="flex-1 p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
}
