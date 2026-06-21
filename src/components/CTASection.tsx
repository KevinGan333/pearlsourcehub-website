import Link from "next/link";
import { cn } from "@/lib/utils";

interface CTASectionProps {
  title: string;
  description?: string;
  primaryButtonLabel: string;
  primaryButtonHref: string;
  secondaryButtonLabel?: string;
  secondaryButtonHref?: string;
  variant?: "default" | "light";
  className?: string;
}

export default function CTASection({
  title,
  description,
  primaryButtonLabel,
  primaryButtonHref,
  secondaryButtonLabel,
  secondaryButtonHref,
  variant = "default",
  className,
}: CTASectionProps) {
  return (
    <section
      className={cn(
        "section-padding",
        variant === "default"
          ? "bg-slate-950"
          : "bg-amber-50",
        className,
      )}
    >
      <div className="mx-auto max-w-3xl text-center">
        <h2
          className={cn(
            "text-3xl font-bold tracking-tight sm:text-4xl",
            variant === "default" ? "text-white" : "text-slate-900",
          )}
        >
          {title}
        </h2>
        {description && (
          <p
            className={cn(
              "mt-4 text-lg leading-relaxed",
              variant === "default" ? "text-slate-200" : "text-slate-600",
            )}
          >
            {description}
          </p>
        )}
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href={primaryButtonHref}
            className="inline-flex items-center justify-center rounded-md bg-amber-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition-colors hover:bg-amber-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
          >
            {primaryButtonLabel}
          </Link>
          {secondaryButtonLabel && secondaryButtonHref && (
            <Link
              href={secondaryButtonHref}
              className={cn(
                "inline-flex items-center justify-center rounded-md px-6 py-3 text-base font-semibold transition-colors",
                variant === "default"
                  ? "border border-slate-500 text-white hover:bg-white hover:text-slate-950"
                  : "border border-amber-300 text-amber-700 hover:bg-amber-100",
              )}
            >
              {secondaryButtonLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
