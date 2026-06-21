import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
  className,
}: FeatureCardProps) {
  return (
    <div className={cn("flex gap-4", className)}>
      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-amber-50 text-amber-600">
        {icon}
      </div>
      <div>
        <h3 className="text-base font-semibold text-slate-900">{title}</h3>
        <p className="mt-1 text-sm text-slate-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
