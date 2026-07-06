import { siteConfig } from "@/data/site";

export default function AdminSettingsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-900 mb-2">Site Settings</h1>
      <p className="text-sm text-slate-500 mb-6">For MVP, settings are managed in <code className="bg-slate-100 px-1.5 py-0.5 rounded text-xs">src/data/site.ts</code>. Database-driven settings coming soon.</p>
      <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-6 max-w-xl">
        <h2 className="text-lg font-semibold text-slate-900 mb-4">Current Site Config</h2>
        <dl className="space-y-3">
          {Object.entries(siteConfig).map(([key, value]) => (
            <div key={key}><dt className="text-xs font-medium text-slate-500">{key}</dt><dd className="text-sm text-slate-700 mt-0.5">{typeof value === "object" ? JSON.stringify(value) : String(value)}</dd></div>
          ))}
        </dl>
      </div>
    </div>
  );
}
