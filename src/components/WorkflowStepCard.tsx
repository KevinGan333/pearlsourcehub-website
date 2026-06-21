interface WorkflowStepCardProps {
  step: string;
  title: string;
  description: string;
  deliverable?: string;
}

export default function WorkflowStepCard({
  step,
  title,
  description,
  deliverable,
}: WorkflowStepCardProps) {
  return (
    <div className="flex items-start gap-4 rounded-lg border border-slate-200 bg-white shadow-sm p-5">
      <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-slate-900 text-sm font-bold text-white">
        {step}
      </span>
      <div>
        <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
        <p className="mt-1 text-sm text-slate-500 leading-relaxed">{description}</p>
        {deliverable && (
          <p className="mt-2 inline-flex items-center rounded-full bg-amber-50 px-2.5 py-0.5 text-xs font-medium text-amber-700">
            {deliverable}
          </p>
        )}
      </div>
    </div>
  );
}
