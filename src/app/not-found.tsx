import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFoundPage() {
  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-amber-600">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Page not found</h1>
        <p className="mt-4 text-base text-slate-600 leading-relaxed">
          The page you are looking for may have moved. Explore our services, manufacturing clusters, or submit your product brief.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link href="/services" className="inline-flex items-center justify-center rounded-lg bg-amber-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-amber-500 transition-colors">
            View Services
          </Link>
          <Link href="/manufacturing-clusters" className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-700 hover:bg-slate-50 transition-colors">
            Explore Manufacturing Clusters
          </Link>
          <Link href="/quote" className="inline-flex items-center justify-center text-base font-semibold text-amber-600 hover:text-amber-700 transition-colors">
            Upload Your Product Brief →
          </Link>
        </div>
      </div>
    </section>
  );
}
