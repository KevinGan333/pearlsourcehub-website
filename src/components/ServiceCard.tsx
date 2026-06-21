import Link from "next/link";
import type { Service } from "@/data/services";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  service: Service;
  className?: string;
}

export default function ServiceCard({ service, className }: ServiceCardProps) {
  return (
    <div
      className={cn(
        "group flex flex-col rounded-lg border border-slate-200 bg-white shadow-sm p-6 transition-shadow hover:shadow-md sm:p-8",
        className,
      )}
    >
      <div className="mb-4 text-3xl" aria-hidden="true">
        {service.icon}
      </div>
      <h3 className="text-lg font-semibold text-slate-900 group-hover:text-amber-600 transition-colors">
        {service.title}
      </h3>
      <p className="mt-2 flex-1 text-sm text-slate-600 leading-relaxed">
        {service.description}
      </p>
      <ul className="mt-4 space-y-1.5 border-t border-slate-100 pt-4">
        {service.whatWeCheck.slice(0, 3).map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
            <svg
              className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-600"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <Link
        href={`/services#${service.id}`}
        className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-amber-600 hover:text-amber-700 transition-colors"
      >
        Learn more
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
}
