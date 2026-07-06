import Link from "next/link";

export default function AdminHeader({ userEmail }: { userEmail: string }) {
  return (
    <header className="sticky top-0 z-30 bg-white border-b border-slate-200 px-6 py-3 flex items-center justify-between">
      <span className="text-sm font-semibold text-slate-700 lg:hidden">PS Admin</span>
      <div className="hidden lg:block" />
      <div className="flex items-center gap-4">
        <span className="text-xs text-slate-500 hidden sm:inline">{userEmail}</span>
        <Link href="/admin/dashboard" className="text-xs text-amber-600 hover:text-amber-700 font-medium">Dashboard</Link>
        <Link href="/" className="text-xs text-slate-400 hover:text-slate-600">View Site ↗</Link>
      </div>
    </header>
  );
}
