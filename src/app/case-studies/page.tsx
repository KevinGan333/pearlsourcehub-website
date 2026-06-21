import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Pearl River Delta Sourcing Case Studies | Factory Verification and Product Development",
  description: "Explore representative sourcing scenarios showing how PearlSourceHub verifies factories, manages samples, compares costs, and controls production risk in the Pearl River Delta.",
};

const scenarios = [
  {
    category: "Consumer Electronics", city: "Shenzhen",
    title: "Smart Home Device: Prototype to Pilot Production",
    problem: "A hardware startup had a working prototype but no manufacturing experience. They needed to identify qualified factories, verify production capability, and manage the transition from prototype to pilot production.",
    risk: "Without on-site verification, the startup risked contracting a trading company posing as a manufacturer, receiving substandard samples, or losing months to unqualified suppliers.",
    process: ["Reviewed product brief and identified Shenzhen PCBA and assembly factories", "Shortlisted five factories and conducted on-site verification — eliminated two trading companies", "Managed DFM feedback and three sample iterations with top two qualified factories", "Set up DUPRO at 40% production and PSI before shipment"],
    deliverables: ["Factory verification reports for three qualified manufacturers", "DFM feedback with cost-saving recommendations", "Sample inspection reports across three iterations", "Production QC reports (DUPRO + PSI)"],
    outcome: "Pilot production completed with factory verified before commitment, samples validated before production, and quality confirmed before shipment.",
    services: ["Supplier Sourcing", "Factory Verification", "Sample Development", "Quality Inspection"],
  },
  {
    category: "LED Lighting", city: "Zhongshan",
    title: "LED Lighting Supplier Qualification and Cost Comparison",
    problem: "A US lighting brand was sourcing through a trading company and suspected inflated prices. They needed direct manufacturers in Zhongshan, verified certifications, and real production cost comparison.",
    risk: "Switching suppliers without verification risked quality degradation, certification gaps, and production delays. The trading company controlled both the relationship and pricing.",
    process: ["Mapped product specs to Zhongshan LED cluster and identified potential manufacturers", "Conducted factory audits at three facilities — verified UL certification, production lines, QC", "Collected and normalized quotes from all three factories for direct cost comparison", "Managed sample development with top-ranked factory and set up ongoing QC program"],
    deliverables: ["Factory audit reports for three Zhongshan LED manufacturers", "Transparent cost comparison matrix across materials, labor, and overhead", "UL certification verification documentation", "Sample approval report with photometric test results"],
    outcome: "Identified a qualified direct manufacturer at significantly lower cost. Established direct relationship with ongoing quality inspection program.",
    services: ["Supplier Sourcing", "Factory Audit", "Sample Development", "Quality Inspection"],
  },
  {
    category: "Hardware & Molds", city: "Dongguan",
    title: "Precision Mold and Plastic Housing Development",
    problem: "A hardware brand needed injection molds and plastic enclosures. Quotes ranged from $8,000 to $35,000 for the same mold set. They could not determine which were realistic or which suppliers were capable.",
    risk: "Low quotes likely indicated lower-grade mold steel. High quotes could include unnecessary margin. Without technical evaluation, mold quality could not be assessed.",
    process: ["Shortlisted five Dongguan mold shops with relevant product experience", "Conducted factory audits on mold design capability, CNC/EDM equipment, and previous samples", "Reviewed mold designs, steel specifications, and cavitation proposals", "Tracked mold trials, measured first-article samples, and managed modifications"],
    deliverables: ["Mold shop audit reports with equipment assessment and capability scoring", "Mold quote comparison with steel type, cavitation, and mold life analysis", "First-article inspection reports with dimensional measurements", "Mold ownership and IP documentation review"],
    outcome: "Selected a qualified Dongguan mold shop with appropriate steel grade and realistic pricing. Mold development completed on schedule with specifications met.",
    services: ["Factory Audit", "OEM/ODM Project Management", "Quality Inspection"],
  },
  {
    category: "Small Appliances", city: "Foshan & Zhongshan",
    title: "Kitchen Appliance OEM Comparison and Development",
    problem: "A DTC kitchen brand wanted to launch a new countertop appliance. They needed to compare OEM proposals, evaluate component quality, manage tooling, and ensure safety certifications for target markets.",
    risk: "OEM projects involve significant tooling investment before first production. Selecting the wrong factory could result in costly rework, certification failures, and delayed market entry.",
    process: ["Identified and verified four appliance factories across Foshan and Zhongshan", "Reviewed OEM proposals including BOM, tooling requirements, and certification support", "Managed DFM review and sample development with two top-ranked factories", "Coordinated safety certification testing (GS, CE) with approved samples"],
    deliverables: ["OEM capability comparison across four factories", "BOM cost breakdown and tooling investment analysis", "Sample evaluation reports with functional testing results", "Certification coordination and documentation package"],
    outcome: "Selected an OEM partner in Foshan with competitive tooling costs and strong certification support. First production run completed with GS and CE certification.",
    services: ["Supplier Sourcing", "Factory Audit", "OEM/ODM Project Management", "Sample Development"],
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        label="Project Scenarios"
        title="How PearlSourceHub Reduces Sourcing Risk"
        subtitle="Representative sourcing scenarios showing how we verify factories, compare costs, validate samples, and manage production risk across the Pearl River Delta."
        primaryCta={{ label: "Upload Your Product Brief", href: "/quote" }}
      />

      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg border border-blue-200 bg-blue-50 p-5 mb-14">
            <p className="text-sm text-blue-800 leading-relaxed">
              <strong>Note:</strong> These examples are representative sourcing scenarios that illustrate how we verify factories, compare costs, validate samples, and manage production risk. They describe typical project workflows, not specific client claims.
            </p>
          </div>

          <div className="space-y-14">
            {scenarios.map((cs, i) => (
              <div key={i} className="rounded-xl border border-slate-200 bg-white shadow-sm p-6 sm:p-8">
                <div className="flex items-center gap-2 text-sm text-amber-600 font-medium mb-3">
                  <span>{cs.category}</span><span aria-hidden="true" className="text-slate-300">·</span><span>{cs.city}</span>
                </div>
                <h2 className="text-xl font-bold text-slate-900 mb-5">{cs.title}</h2>
                <div className="grid gap-6 sm:grid-cols-2 mb-6">
                  <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                    <h3 className="text-sm font-semibold text-slate-900 mb-2">Buyer Problem</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{cs.problem}</p>
                  </div>
                  <div className="rounded-lg border border-red-100 bg-red-50/50 p-4">
                    <h3 className="text-sm font-semibold text-red-800 mb-2">Key Sourcing Risks</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{cs.risk}</p>
                  </div>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 mb-6">
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900 mb-3">Execution Process</h3>
                    <ol className="space-y-2">{cs.process.map((p, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-slate-600 leading-relaxed">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-100 text-xs font-medium text-slate-500 flex items-center justify-center mt-0.5">{j + 1}</span>
                        <span>{p}</span>
                      </li>
                    ))}</ol>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900 mb-3">Deliverables</h3>
                    <ul className="space-y-2">{cs.deliverables.map((d) => (
                      <li key={d} className="flex items-start gap-2.5 text-sm text-slate-600 leading-relaxed">
                        <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-600" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                        <span>{d}</span>
                      </li>
                    ))}</ul>
                  </div>
                </div>
                <div className="rounded-lg bg-green-50/60 border border-green-200 p-4 mb-4">
                  <h3 className="text-sm font-semibold text-green-800 mb-1">Expected Outcome</h3>
                  <p className="text-sm text-slate-700 leading-relaxed">{cs.outcome}</p>
                </div>
                <div className="flex flex-wrap gap-2">{cs.services.map((s) => (
                  <Link key={s} href={`/services#${s.toLowerCase().replace(/\s+/g, "-")}`} className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-600 hover:bg-slate-200 transition-colors">{s}</Link>
                ))}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Have a Similar Sourcing Scenario?"
        description="Upload your product brief and we will identify the right approach for your product category."
        primaryButtonLabel="Upload Your Product Brief"
        primaryButtonHref="/quote"
        secondaryButtonLabel="View Services"
        secondaryButtonHref="/services"
      />
    </>
  );
}
