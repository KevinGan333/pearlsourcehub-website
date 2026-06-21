interface ReportPreviewCardProps {
  icon: string;
  title: string;
  items: string[];
}

export default function ReportPreviewCard({ icon, title, items }: ReportPreviewCardProps) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white shadow-sm p-5 sm:p-6">
      <div className="flex items-center gap-3 mb-4">
        <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-50 text-xl" aria-hidden="true">
          {icon}
        </span>
        <h3 className="text-sm font-bold text-slate-900">{title}</h3>
      </div>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
            <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-600" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
