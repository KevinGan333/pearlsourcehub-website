import Link from "next/link";
import type { Industry } from "@/data/industries";
import { cn } from "@/lib/utils";

interface IndustryCardProps {
  industry: Industry;
  className?: string;
}

export default function IndustryCard({ industry, className }: IndustryCardProps) {
  return (
    <div
      className={cn(
        "group flex flex-col rounded-lg border border-slate-200 bg-white shadow-sm p-6 transition-shadow hover:shadow-md sm:p-8",
        className,
      )}
    >
      <div className="mb-4 text-3xl" aria-hidden="true">
        {industry.icon}
      </div>
      <h3 className="text-lg font-semibold text-slate-900 group-hover:text-amber-600 transition-colors">
        {industry.title}
      </h3>
      <p className="mt-2 flex-1 text-sm text-slate-600 leading-relaxed">
        {industry.description}
      </p>
      <div className="mt-4 flex flex-wrap gap-1.5 border-t border-slate-100 pt-4">
        {industry.cities.map((city) => (
          <span
            key={city}
            className="inline-block rounded-full bg-amber-50 px-2.5 py-0.5 text-xs font-medium text-amber-700"
          >
            {city}
          </span>
        ))}
      </div>
      <Link
        href={`/industries#${industry.id}`}
        className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-amber-600 hover:text-amber-700 transition-colors"
      >
        View industry details
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
}
