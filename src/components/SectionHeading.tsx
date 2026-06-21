import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  alignment?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  label,
  title,
  description,
  alignment = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        alignment === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {label && (
        <p className="text-sm font-semibold uppercase tracking-widest text-amber-600 mb-3">
          {label}
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-slate-600 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
