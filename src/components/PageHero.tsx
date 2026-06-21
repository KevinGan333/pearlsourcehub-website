import Link from "next/link";

interface PageHeroProps {
  label: string;
  title: string;
  subtitle?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  visual?: React.ReactNode;
}

export default function PageHero({
  label,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  visual,
}: PageHeroProps) {
  return (
    <section className="bg-[#0B1628]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className={`grid gap-10 ${visual ? "lg:grid-cols-2 lg:gap-16" : ""}`}>
          {/* Left: Text content */}
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-amber-400">
              {label}
            </p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg">
                {subtitle}
              </p>
            )}
            {(primaryCta || secondaryCta) && (
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                {primaryCta && (
                  <Link
                    href={primaryCta.href}
                    className="inline-flex items-center justify-center rounded-lg bg-amber-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-amber-600/20 transition-all hover:bg-amber-500"
                  >
                    {primaryCta.label}
                  </Link>
                )}
                {secondaryCta && (
                  <Link
                    href={secondaryCta.href}
                    className="inline-flex items-center justify-center rounded-lg border border-slate-400 bg-white/5 px-6 py-3 text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-slate-300 hover:bg-white/10"
                  >
                    {secondaryCta.label}
                  </Link>
                )}
              </div>
            )}
          </div>

          {/* Right: Lightweight visual block */}
          {visual && (
            <div className="hidden lg:flex lg:items-center lg:justify-center" aria-hidden="true">
              {visual}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
