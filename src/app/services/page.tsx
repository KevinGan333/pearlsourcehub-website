import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import WorkflowStepCard from "@/components/WorkflowStepCard";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Pearl River Delta Sourcing Services | Factory Verification, Sample Development and QC",
  description: "PearlSourceHub provides supplier sourcing, factory verification, factory audit, sample development, OEM/ODM project management, quality inspection, packaging, and shipping coordination across the Pearl River Delta.",
};

const overviewCards = [
  { icon: "🔍", title: "Supplier Qualification", solve: "Eliminates trading companies and unverified factories from your shortlist.", receive: "A verified factory shortlist with capability summaries, certifications, and on-site photos." },
  { icon: "✅", title: "Factory Verification", solve: "Confirms manufacturer status and production capability before you commit deposits.", receive: "Factory verification report with license checks, production line photos, and red flags." },
  { icon: "🔧", title: "Sample Development", solve: "Prevents DFM issues, material problems, and specification drift during prototyping.", receive: "DFM feedback, sample inspection reports, revision tracking, and golden sample documentation." },
  { icon: "🏭", title: "Production & QC Follow-Up", solve: "Catches quality issues during production — not after the shipment arrives.", receive: "In-line inspection reports, weekly progress updates, pre-shipment inspection, and container loading photos." },
];

const deliverablesTable = [
  { service: "Supplier Sourcing", deliverables: "Verified factory shortlist, capability summaries, preliminary quotes", bestFor: "Buyers entering a new product category or PRD cluster", risk: "Trading company intermediaries" },
  { service: "Factory Verification", deliverables: "On-site verification report, license and certification check, production photos", bestFor: "Buyers evaluating a specific supplier before sampling", risk: "Fake manufacturer claims" },
  { service: "Factory Audit", deliverables: "Structured audit report, capacity assessment, compliance scoring", bestFor: "Buyers placing first production order with a new factory", risk: "Quality system gaps, capacity issues" },
  { service: "Sample Development", deliverables: "DFM report, sample inspection reports, revision log, golden sample documentation", bestFor: "Buyers developing a new product or iterating samples", risk: "Specification drift, material substitution" },
  { service: "OEM/ODM Project Mgmt", deliverables: "Weekly progress reports, BOM cost breakdown, milestone tracking", bestFor: "Brands running multi-factory OEM/ODM projects", risk: "Timeline delays, cost overruns" },
  { service: "Quality Inspection", deliverables: "DUPRO report, PSI report with AQL results, defect photos", bestFor: "Every production order before shipment", risk: "Batch defects, shipment rejects" },
  { service: "Packaging & Branding", deliverables: "Packaging sample review, print quality check, FBA compliance check", bestFor: "Brands launching retail or Amazon products", risk: "Brand damage, FBA rejection" },
  { service: "Shipping Coordination", deliverables: "Freight comparison table, customs docs, Incoterms recommendation", bestFor: "Buyers who want transparent logistics without factory markups", risk: "Inflated shipping costs, customs delays" },
];

const workflowSteps = [
  { step: "01", title: "Product Brief Review", description: "You share your product specs, target cost, and volume. We analyze manufacturability and identify the right PRD cluster.", deliverable: "Cluster recommendation" },
  { step: "02", title: "Supplier Shortlisting", description: "We identify 3–5 qualified factories, pre-screen certifications, and prepare capability summaries.", deliverable: "Verified shortlist" },
  { step: "03", title: "Factory Verification or Audit", description: "On-site visits to confirm manufacturer status, production capability, quality systems, and compliance.", deliverable: "Audit report" },
  { step: "04", title: "Sample Development", description: "DFM review, prototype coordination, iterative inspection, and golden sample sign-off.", deliverable: "Golden sample" },
  { step: "05", title: "Production & QC", description: "In-line inspection, weekly progress reporting, pre-shipment inspection, and container loading supervision.", deliverable: "QC reports" },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="Services"
        title="Pearl River Delta Sourcing and Manufacturing Execution Services"
        subtitle="We verify suppliers, compare costs, validate samples, and manage production across Shenzhen, Dongguan, Guangzhou, Foshan, Zhongshan, and Huizhou."
        primaryCta={{ label: "Upload Your Product Brief", href: "/quote" }}
        secondaryCta={{ label: "Explore Manufacturing Clusters", href: "/manufacturing-clusters" }}
        visual={
          <div className="rounded-xl border border-slate-700/50 bg-slate-800/50 p-6 backdrop-blur-sm w-full max-w-sm">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">How We Execute</p>
            <div className="space-y-3">
              {[
                { step: "01", label: "Verify", desc: "On-site factory checks" },
                { step: "02", label: "Develop", desc: "Sample validation and DFM" },
                { step: "03", label: "Inspect", desc: "DUPRO and PSI quality control" },
                { step: "04", label: "Ship", desc: "Logistics and documentation" },
              ].map((s) => (
                <div key={s.step} className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-600/20 text-xs font-bold text-amber-400">{s.step}</span>
                  <div><p className="text-sm font-semibold text-white">{s.label}</p><p className="text-xs text-slate-400">{s.desc}</p></div>
                </div>
              ))}
            </div>
          </div>
        }
      />

      {/* Overview Cards */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-3">From Supplier Search to Production Control</h2>
          <p className="text-base text-slate-600 text-center max-w-2xl mx-auto mb-12">Four core capabilities cover the full sourcing and production lifecycle.</p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {overviewCards.map((c) => (
              <div key={c.title} className="flex flex-col rounded-lg border border-slate-200 bg-white shadow-sm p-6">
                <span className="text-2xl mb-3" aria-hidden="true">{c.icon}</span>
                <h3 className="text-base font-bold text-slate-900">{c.title}</h3>
                <p className="mt-2 flex-1 text-sm text-slate-600 leading-relaxed"><span className="font-semibold">Solves:</span> {c.solve}</p>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed"><span className="font-semibold">You receive:</span> {c.receive}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables Table */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-3">Service Deliverables at a Glance</h2>
          <p className="text-base text-slate-600 text-center mb-10">What you receive from each service and which sourcing risk it addresses.</p>
          <div className="overflow-x-auto rounded-lg border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-sm leading-relaxed">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-left">
                  <th className="px-5 py-3.5 font-semibold text-slate-700">Service</th>
                  <th className="px-5 py-3.5 font-semibold text-slate-700">Main Deliverables</th>
                  <th className="px-5 py-3.5 font-semibold text-slate-700">Best For</th>
                  <th className="px-5 py-3.5 font-semibold text-slate-700">Risk Reduced</th>
                </tr>
              </thead>
              <tbody>
                {deliverablesTable.map((row, i) => (
                  <tr key={i} className={`border-b border-slate-100 ${i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}`}>
                    <td className="px-5 py-3.5 font-medium text-slate-900"><Link href={`#${row.service.toLowerCase().replace(/\s+/g, "-").replace(/[\/&]/g, "")}`} className="hover:text-amber-600 transition-colors">{row.service}</Link></td>
                    <td className="px-5 py-3.5 text-slate-600">{row.deliverables}</td>
                    <td className="px-5 py-3.5 text-slate-600">{row.bestFor}</td>
                    <td className="px-5 py-3.5 text-slate-600">{row.risk}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Detailed Services — alternating backgrounds every 2 services */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-12">Detailed Service Breakdown</h2>
          <div className="space-y-16">
            {services.map((s, idx) => (
              <div key={s.id} id={s.id} className={`scroll-mt-24 rounded-xl ${idx % 2 === 1 ? "bg-slate-50/70 p-6 sm:p-8 -mx-4 sm:-mx-6" : "p-0"}`}>
                <div className="flex items-center gap-4 mb-5">
                  <span className="text-3xl" aria-hidden="true">{s.icon}</span>
                  <h3 className="text-xl font-bold text-slate-900">{s.title}</h3>
                </div>
                <p className="text-base text-slate-600 leading-7 mb-6">{s.description}</p>

                <div className="grid gap-6 lg:grid-cols-5">
                  {/* Left: Who + What We Check */}
                  <div className="lg:col-span-3 space-y-5">
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900 mb-2">Who It Is For</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">{s.whoFor}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900 mb-2">What We Check</h4>
                      <ul className="space-y-1.5">
                        {s.whatWeCheck.map((item) => (
                          <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600 leading-relaxed">
                            <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-600" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right: Deliverables + Risk */}
                  <div className="lg:col-span-2 space-y-4">
                    <div className="rounded-lg border border-amber-200 bg-amber-50/60 p-5">
                      <h4 className="text-sm font-semibold text-amber-800 mb-3">What You Receive</h4>
                      <ul className="space-y-1.5">
                        {s.clientReceives.map((item) => (
                          <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600 leading-relaxed">
                            <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-600" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-lg border border-green-200 bg-green-50/60 p-4">
                      <h4 className="text-sm font-semibold text-green-800 mb-1">Risk Reduced</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">{s.riskReduction}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-3">Typical Engagement Workflow</h2>
          <p className="text-base text-slate-600 text-center mb-12">A standard project moves through five stages. You can engage us at any stage.</p>
          <div className="space-y-4">
            {workflowSteps.map((w) => (
              <WorkflowStepCard key={w.step} step={w.step} title={w.title} description={w.description} deliverable={w.deliverable} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/quote" className="inline-flex items-center justify-center rounded-lg bg-amber-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-amber-500 transition-colors">Start Your Project</Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Tell Us About Your Project"
        description="Share your product requirements and we will recommend the right services for your stage."
        primaryButtonLabel="Upload Your Product Brief"
        primaryButtonHref="/quote"
        secondaryButtonLabel="Explore PRD Manufacturing Clusters"
        secondaryButtonHref="/manufacturing-clusters"
        variant="light"
      />
    </>
  );
}
