"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Dashboard", href: "/admin/dashboard", icon: "📊" },
  { label: "Resources", href: "/admin/resources", icon: "📄" },
  { label: "Case Studies", href: "/admin/case-studies", icon: "📋" },
  { label: "Inquiries", href: "/admin/inquiries", icon: "📬" },
  { label: "Settings", href: "/admin/settings", icon: "⚙️" },
];

export default function AdminSidebar({ userEmail }: { userEmail: string }) {
  const pathname = usePathname();
  const isActive = (href: string) => pathname.startsWith(href);

  return (
    <aside className="fixed inset-y-0 left-0 z-40 w-64 bg-slate-900 text-white flex flex-col hidden lg:flex">
      <div className="p-5 border-b border-slate-700">
        <Link href="/admin/dashboard" className="text-lg font-bold tracking-tight">
          <span className="text-amber-500">Pearl</span>Source <span className="text-slate-400 text-sm">Admin</span>
        </Link>
        <p className="text-xs text-slate-500 mt-1 truncate">{userEmail}</p>
      </div>
      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${isActive(item.href) ? "bg-amber-600 text-white" : "text-slate-300 hover:bg-slate-800 hover:text-white"}`}>
            <span aria-hidden="true">{item.icon}</span>{item.label}
          </Link>
        ))}
      </nav>
      <div className="p-4 border-t border-slate-700 space-y-2">
        <Link href="/" className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">↗ View Website</Link>
        <form action="/api/auth/signout" method="POST">
          <button type="submit" className="text-sm text-slate-400 hover:text-red-400 transition-colors w-full text-left">↩ Logout</button>
        </form>
      </div>
    </aside>
  );
}
