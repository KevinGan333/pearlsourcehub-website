import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { clusters } from "@/data/clusters";

export const metadata: Metadata = {
  title: "Pearl River Delta Manufacturing Clusters | Shenzhen, Dongguan, Guangzhou, Foshan, Zhongshan, Huizhou",
  description: "Understand the manufacturing clusters in the Pearl River Delta: Shenzhen electronics, Dongguan molds and hardware, Guangzhou packaging, Foshan furniture, Zhongshan lighting, Huizhou electronics assembly.",
};

const clusterTable = [
  { product: "Consumer electronics, wearables, smart home", city: "Shenzhen", why: "Densest electronics supply chain, fastest prototyping", risk: "Trading company intermediaries", service: "Factory Verification, Quality Inspection" },
  { product: "Plastic parts, injection molds, hardware", city: "Dongguan", why: "Global mold-making capital, best tooling cost and speed", risk: "Mold steel quality, tolerance control", service: "Factory Audit, OEM/ODM Project Management" },
  { product: "Custom packaging, beauty products", city: "Guangzhou", why: "Largest packaging and printing cluster, Canton Fair access", risk: "Print quality variation, material substitution", service: "Sample Development, Quality Inspection" },
  { product: "Furniture, building materials, home products", city: "Foshan", why: "World&apos;s largest furniture manufacturing center", risk: "Material grade claims, finish consistency", service: "Factory Audit, Quality Inspection" },
  { product: "LED lighting, lighting fixtures, small appliances", city: "Zhongshan", why: "~70% of global LED production, vertically integrated", risk: "Driver quality, certification gaps", service: "Supplier Sourcing, Quality Inspection" },
  { product: "Batteries, audio equipment, electronics", city: "Huizhou", why: "Growing manufacturing base, cost advantage vs. Shenzhen", risk: "Export experience variation", service: "Factory Verification, Supplier Sourcing" },
];

export default function ManufacturingClustersPage() {
  return (
    <>
      <PageHero
        label="Manufacturing Network"
        title="Pearl River Delta Manufacturing Clusters"
        subtitle="The Pearl River Delta is not one generic region. Each city has distinct industrial strengths, supplier types, and sourcing risks."
        primaryCta={{ label: "Upload Your Product Brief", href: "/quote" }}
        secondaryCta={{ label: "Explore Industries We Source", href: "/industries" }}
        visual={
          <div className="rounded-xl border border-slate-700/50 bg-slate-800/50 p-6 backdrop-blur-sm w-full max-w-sm">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">6-City Coverage</p>
            <div className="grid grid-cols-2 gap-2">
              {[{ city: "Shenzhen", spec: "Electronics · PCBA · IoT" },{ city: "Dongguan", spec: "Molds · Plastics" },{ city: "Guangzhou", spec: "Packaging · Beauty" },{ city: "Foshan", spec: "Furniture · Building" },{ city: "Zhongshan", spec: "LED · Appliances" },{ city: "Huizhou", spec: "Battery · Audio" }].map((c) => (
                <div key={c.city} className="rounded-lg border border-slate-700 bg-slate-800/70 px-3 py-2.5"><p className="text-xs font-bold text-white">{c.city}</p><p className="text-[10px] text-slate-400 leading-tight mt-0.5">{c.spec}</p></div>
              ))}
            </div>
          </div>
        }
      />

      {/* Region overview */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Why the Pearl River Delta?</h2>
          <p className="text-base text-slate-600 leading-7 mb-10">The Pearl River Delta is the world&apos;s most concentrated manufacturing region. Within a 150-kilometer radius, you can source nearly every manufactured product category — from smartphone components to furniture. This density enables faster prototyping, shorter supply chains, and more competitive pricing than any other manufacturing region.</p>
          <div className="grid gap-5 sm:grid-cols-3">
            {[{ metric: "$1.5T+", label: "Annual manufacturing output" }, { metric: "50,000+", label: "Industrial enterprises" }, { metric: "6 cities", label: "Specialized manufacturing strengths" }].map((s) => (<div key={s.label} className="rounded-lg border border-slate-200 bg-slate-50 p-5 text-center"><div className="text-2xl font-bold text-amber-600">{s.metric}</div><p className="mt-1 text-sm text-slate-600">{s.label}</p></div>))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-3">Which PRD City Fits Your Product?</h2>
          <p className="text-base text-slate-600 text-center mb-10">Use this reference table to identify the most suitable manufacturing cluster for your product category.</p>
          <div className="overflow-x-auto rounded-lg border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-sm leading-relaxed">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-left">
                  <th className="px-5 py-3.5 font-semibold text-slate-700">Product Type</th>
                  <th className="px-5 py-3.5 font-semibold text-slate-700">City</th>
                  <th className="px-5 py-3.5 font-semibold text-slate-700">Why</th>
                  <th className="px-5 py-3.5 font-semibold text-slate-700">Key Risk</th>
                  <th className="px-5 py-3.5 font-semibold text-slate-700">Service</th>
                </tr>
              </thead>
              <tbody>
                {clusterTable.map((row, i) => (
                  <tr key={i} className={`border-b border-slate-100 ${i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}`}>
                    <td className="px-5 py-3.5 text-slate-700">{row.product}</td>
                    <td className="px-5 py-3.5 font-medium text-slate-900">{row.city}</td>
                    <td className="px-5 py-3.5 text-slate-600">{row.why}</td>
                    <td className="px-5 py-3.5 text-slate-600">{row.risk}</td>
                    <td className="px-5 py-3.5"><Link href="/services" className="text-amber-600 hover:text-amber-700 font-medium">{row.service}</Link></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* City profiles */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-12">Detailed Cluster Profiles</h2>
          <div className="space-y-16">
            {clusters.map((c, idx) => (
              <div key={c.id} id={c.id} className={`scroll-mt-24 ${idx % 2 === 1 ? "bg-slate-50/70 rounded-xl p-6 sm:p-8 -mx-4 sm:-mx-6" : "p-0"}`}>
                <div className="flex items-center gap-4 mb-5">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-600 text-lg font-bold text-white">{c.city.charAt(0)}</span>
                  <div><h3 className="text-xl font-bold text-slate-900">{c.city}</h3><p className="text-sm text-slate-500">{c.strategicRole}</p></div>
                </div>
                <p className="text-base text-slate-600 leading-7 mb-5">{c.description}</p>
                <div className="grid gap-5 sm:grid-cols-2 mb-5">
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900 mb-2">Key Specialties</h4>
                    <div className="flex flex-wrap gap-1.5">{c.specialties.map((s) => (<span key={s} className="rounded-full bg-amber-50 px-2.5 py-0.5 text-xs font-medium text-amber-700">{s}</span>))}</div>
                    <h4 className="text-sm font-semibold text-slate-900 mt-5 mb-2">Best-Fit Buyers</h4>
                    <ul className="space-y-1">{c.bestFitBuyers.map((b) => (<li key={b} className="text-sm text-slate-600 flex items-start gap-2"><span className="text-amber-600 mt-0.5">•</span>{b}</li>))}</ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900 mb-2">Common Risks</h4>
                    <ul className="space-y-1">{c.commonRisks.map((r) => (<li key={r} className="flex items-start gap-2 text-sm text-slate-600 leading-relaxed"><svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-400" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" /></svg><span>{r}</span></li>))}</ul>
                    <h4 className="text-sm font-semibold text-slate-900 mt-5 mb-2">How We Support</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">{c.howWeSupport}</p>
                  </div>
                </div>
                <div className="rounded-lg border border-slate-200 bg-white p-4 text-sm text-slate-600"><strong className="text-slate-700">Transport:</strong> {c.transportLinks}</div>
                <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm">
                  <Link href="/industries" className="text-amber-600 hover:text-amber-700 font-medium">Industries in {c.city}</Link>
                  <Link href="/services" className="text-amber-600 hover:text-amber-700 font-medium">Services for {c.city}</Link>
                  <Link href="/quote" className="text-amber-600 hover:text-amber-700 font-medium">Source from {c.city}</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Not Sure Which Cluster Fits Your Product?"
        description="Upload your product brief and we will identify the right manufacturing cluster and suggest a verification plan."
        primaryButtonLabel="Upload Your Product Brief"
        primaryButtonHref="/quote"
        secondaryButtonLabel="View Industries We Source"
        secondaryButtonHref="/industries"
      />
    </>
  );
}
