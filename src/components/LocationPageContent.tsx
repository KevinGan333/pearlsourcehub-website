import Link from "next/link";
import PageHero from "@/components/PageHero";
import Breadcrumb from "@/components/Breadcrumb";
import CTASection from "@/components/CTASection";
import type { LocationPage } from "@/data/locationPages";

export default function LocationPageContent({ data }: { data: LocationPage }) {
  return (
    <>
      <PageHero
        label={data.city}
        title={data.h1}
        subtitle={data.heroSubtitle}
        primaryCta={{ label: data.heroCta, href: "/quote" }}
      />
      <div className="bg-white border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Manufacturing Clusters", href: "/manufacturing-clusters" },
              { label: data.h1 },
            ]}
          />
        </div>
      </div>

      {/* Why this city */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Why {data.city} for {data.productFocus}
          </h2>
          <p className="text-base text-slate-600 leading-7 mb-6">{data.description}</p>
          <p className="text-sm font-medium text-slate-700 mb-4">What buyers typically source here:</p>
          <ul className="grid gap-2 sm:grid-cols-2">
            {data.productTypes.map((p) => (
              <li key={p} className="flex items-start gap-2 text-sm text-slate-600">
                <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-600" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Sourcing Risks */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Common Sourcing Risks</h2>
          <div className="grid gap-5 sm:grid-cols-2">
            {data.sourcingRisks.map((r) => (
              <div key={r.title} className="rounded-lg border border-slate-200 bg-white shadow-sm p-5">
                <h3 className="text-sm font-semibold text-slate-900 mb-2">{r.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Verify + Recommended Services */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">What PearlSourceHub Verifies</h2>
              <ul className="space-y-2.5">
                {data.whatWeVerify.map((v) => (
                  <li key={v} className="flex items-start gap-2.5 text-sm text-slate-600 leading-relaxed">
                    <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-600" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    <span>{v}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Recommended Services</h2>
              <div className="flex flex-wrap gap-2 mb-6">
                {data.recommendedServices.map((s) => (
                  <Link key={s} href={`/services#${s.toLowerCase().replace(/\s+/g, "-")}`} className="rounded-full border border-amber-300 bg-amber-50 px-3 py-1.5 text-sm font-medium text-amber-700 hover:bg-amber-100 transition-colors">{s}</Link>
                ))}
              </div>
              <Link href="/services" className="text-sm font-medium text-amber-600 hover:text-amber-700">View all services →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Typical Sourcing Workflow</h2>
          <div className="space-y-4">
            {data.workflowSteps.map((w, i) => (
              <div key={i} className="flex items-start gap-4 rounded-lg border border-slate-200 bg-white shadow-sm p-5">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-slate-900 text-xs font-bold text-white">{i + 1}</span>
                <div><h3 className="text-sm font-semibold text-slate-900">{w.title}</h3><p className="mt-1 text-sm text-slate-600 leading-relaxed">{w.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Related Resources</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {data.relatedLinks.map((l) => (
              <Link key={l.href} href={l.href} className="rounded-lg border border-slate-200 bg-white shadow-sm p-4 text-sm font-medium text-slate-700 hover:border-amber-200 hover:text-amber-600 transition-colors">{l.label} →</Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={`Ready to Source from ${data.city}?`}
        description="Upload your product brief and get a verified supplier direction for your product category."
        primaryButtonLabel="Upload Your Product Brief"
        primaryButtonHref="/quote"
        secondaryButtonLabel="View All Services"
        secondaryButtonHref="/services"
      />
    </>
  );
}
