import Link from "next/link";
import type { ManufacturingCluster } from "@/data/clusters";
import { cn } from "@/lib/utils";

interface ClusterMapProps {
  clusters: ManufacturingCluster[];
  className?: string;
}

export default function ClusterMap({ clusters, className }: ClusterMapProps) {
  return (
    <div className={cn("grid gap-6 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {clusters.map((cluster) => (
        <div
          key={cluster.id}
          className="group relative flex flex-col rounded-lg border border-slate-200 bg-white shadow-sm p-6 transition-shadow hover:shadow-md"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-amber-50 text-sm font-bold text-amber-600">
              {cluster.city.charAt(0)}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900">{cluster.city}</h3>
              <p className="text-xs text-slate-500">{cluster.strategicRole}</p>
            </div>
          </div>
          <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-600">
            {cluster.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-1.5 border-t border-slate-100 pt-4">
            {cluster.specialties.map((specialty) => (
              <span key={specialty} className="inline-block rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600">
                {specialty}
              </span>
            ))}
          </div>
          <ul className="mt-4 space-y-1.5">
            {cluster.commonRisks.slice(0, 2).map((risk) => (
              <li key={risk} className="flex items-start gap-2 text-sm text-slate-600">
                <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-400" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
                <span>{risk}</span>
              </li>
            ))}
          </ul>
          <Link
            href={`/manufacturing-clusters#${cluster.id}`}
            className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-amber-600 hover:text-amber-700 transition-colors"
          >
            View cluster details
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      ))}
    </div>
  );
}
