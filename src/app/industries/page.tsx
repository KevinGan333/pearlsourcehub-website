import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { industries } from "@/data/industries";

export const metadata: Metadata = {
  title: "Pearl River Delta Manufacturing Industries | Electronics, Hardware, Lighting, Packaging",
  description: "Explore PearlSourceHub's sourcing coverage across consumer electronics, smart hardware, LED lighting, small appliances, beauty devices, packaging, hardware, molds, furniture, and home products in the Pearl River Delta.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        label="Industries"
        title="Industries We Source Across the Pearl River Delta"
        subtitle="Each industry has specific manufacturing clusters, common sourcing risks, and recommended verification approaches. Match your product category to the right supply chain."
        primaryCta={{ label: "Upload Your Product Brief", href: "/quote" }}
        secondaryCta={{ label: "Explore Manufacturing Clusters", href: "/manufacturing-clusters" }}
        visual={
          <div className="rounded-xl border border-slate-700/50 bg-slate-800/50 p-6 backdrop-blur-sm w-full max-w-sm">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">Industries Covered</p>
            <div className="flex flex-wrap gap-2">
              {["Electronics", "Smart Hardware", "LED Lighting", "Small Appliances", "Beauty Devices", "Packaging", "Hardware & Molds", "Furniture & Home"].map((ind) => (
                <span key={ind} className="rounded-full border border-slate-600 bg-slate-700/50 px-3 py-1 text-xs font-medium text-slate-200">{ind}</span>
              ))}
            </div>
            <p className="mt-5 text-xs text-slate-400">Across Shenzhen, Dongguan, Guangzhou, Foshan, Zhongshan, and Huizhou</p>
          </div>
        }
      />

      {/* Comparison Table */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-3">Match Your Product Category to the Right PRD Supply Chain</h2>
          <p className="text-base text-slate-600 text-center mb-10">Quick reference: which cities, risks, and services apply to each industry.</p>
          <div className="overflow-x-auto rounded-lg border border-slate-200 shadow-sm">
            <table className="w-full text-sm leading-relaxed">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-left">
                  <th className="px-5 py-3.5 font-semibold text-slate-700">Industry</th>
                  <th className="px-5 py-3.5 font-semibold text-slate-700">Primary Cities</th>
                  <th className="px-5 py-3.5 font-semibold text-slate-700">Common Risks</th>
                  <th className="px-5 py-3.5 font-semibold text-slate-700">What We Verify</th>
                  <th className="px-5 py-3.5 font-semibold text-slate-700">Services</th>
                </tr>
              </thead>
              <tbody>
                {industries.map((ind, i) => (
                  <tr key={ind.id} className={`border-b border-slate-100 ${i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}`}>
                    <td className="px-5 py-3.5 font-medium text-slate-900"><Link href={`#${ind.id}`} className="hover:text-amber-600 transition-colors">{ind.title}</Link></td>
                    <td className="px-5 py-3.5"><div className="flex flex-wrap gap-1">{ind.cities.map((c) => (<span key={c} className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600">{c}</span>))}</div></td>
                    <td className="px-5 py-3.5 text-slate-600 text-sm">{ind.risks[0]}</td>
                    <td className="px-5 py-3.5 text-slate-600 text-sm max-w-xs">{ind.whatWeVerify.slice(0, 80)}...</td>
                    <td className="px-5 py-3.5"><div className="flex flex-wrap gap-1">{ind.recommendedServices.slice(0, 2).map((s) => (<Link key={s} href={`/services#${s.toLowerCase().replace(/\s+/g, "-")}`} className="rounded-full bg-amber-50 px-2 py-0.5 text-xs font-medium text-amber-700 hover:bg-amber-100 transition-colors">{s}</Link>))}</div></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Detailed Industry Cards */}
      {industries.map((ind, idx) => (
        <section key={ind.id} id={ind.id} className={`py-16 sm:py-20 scroll-mt-24 ${idx % 2 === 0 ? "bg-white" : "bg-slate-50"}`}>
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-5">
              <span className="text-3xl" aria-hidden="true">{ind.icon}</span>
              <div>
                <h2 className="text-xl font-bold text-slate-900">{ind.title}</h2>
                <div className="flex flex-wrap gap-1.5 mt-1.5">{ind.cities.map((c) => (<span key={c} className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600">{c}</span>))}</div>
              </div>
            </div>
            <p className="text-base text-slate-600 leading-7 mb-6">{ind.description}</p>

            <div className="grid gap-5 sm:grid-cols-2 mb-6">
              <div className="rounded-lg border border-slate-200 bg-white p-5">
                <h3 className="text-sm font-semibold text-slate-900 mb-3">Common Sourcing Risks</h3>
                <ul className="space-y-1.5">{ind.risks.map((r) => (<li key={r} className="flex items-start gap-2 text-sm text-slate-600 leading-relaxed"><svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-400" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" /></svg><span>{r}</span></li>))}</ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-white p-5">
                <h3 className="text-sm font-semibold text-slate-900 mb-3">What We Verify</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{ind.whatWeVerify}</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm font-medium text-slate-700">Recommended:</span>
              {ind.recommendedServices.map((s) => (
                <Link key={s} href={`/services#${s.toLowerCase().replace(/\s+/g, "-")}`} className="rounded-full border border-amber-300 bg-amber-50 px-3 py-1 text-sm font-medium text-amber-700 hover:bg-amber-100 transition-colors">{s}</Link>
              ))}
            </div>
          </div>
        </section>
      ))}

      <CTASection
        title="Not Sure Which Industry Category Your Product Fits?"
        description="Upload your product brief and we will identify the right manufacturing cluster and service combination."
        primaryButtonLabel="Upload Your Product Brief"
        primaryButtonHref="/quote"
        secondaryButtonLabel="View Manufacturing Clusters"
        secondaryButtonHref="/manufacturing-clusters"
      />
    </>
  );
}
