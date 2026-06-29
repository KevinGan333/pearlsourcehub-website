import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Pearl River Delta Sourcing Resources | Factory Audit, Supplier Verification, Product Brief Templates",
  description: "Access practical guides, checklists, and templates for supplier verification, factory audits, product briefs, quality inspection, and manufacturing cluster selection in the Pearl River Delta.",
};

const featuredResources = [
  { title: "Supplier Verification Checklist for Guangdong Manufacturers", format: "Checklist", whoFor: "Buyers evaluating a new supplier in the PRD", solves: "Not sure what to check to confirm a supplier is a real manufacturer?" },
  { title: "Product Brief Template for Accurate Factory Quotes", format: "Template", whoFor: "Buyers preparing to request quotes from multiple factories", solves: "Getting inconsistent quotes because your product brief is unclear?" },
  { title: "Quote Comparison Template for OEM Projects", format: "Template", whoFor: "Buyers comparing OEM proposals from multiple factories", solves: "Need a structured way to compare quotes across different factories?" },
];

const resourceCategories = [
  { category: "Supplier Verification", resources: [
    { title: "How to Hire a Reliable China Product Sourcing Agent in 2026", problem: "Looking for a sourcing agent but not sure how to evaluate and verify them?", format: "Guide", href: "/resources/how-to-hire-a-reliable-china-product-sourcing-agent-in-2026" },
    { title: "Supplier Verification Checklist for Guangdong Manufacturers", problem: "Not sure how to check if a supplier is a real manufacturer?", format: "Checklist" },
    { title: "How to Identify Trading Companies vs. Manufacturers", problem: "Worried about paying middleman markups without real factory access?", format: "Guide" },
    { title: "Factory Visit Checklist: What to Check On-Site", problem: "Planning a factory visit but not sure what to look for?", format: "Checklist" },
  ]},
  { category: "Factory Audit", resources: [
    { title: "The Ultimate China Factory Audit Checklist for Importers", problem: "Need a comprehensive factory audit checklist before your next supplier visit?", format: "Checklist", href: "/resources/china-factory-audit-checklist-for-importers" },
    { title: "Is Your Supplier Real? Why Every Importer Needs a China Factory Audit Service", problem: "Not sure if your supplier is a real manufacturer or a trading company?", format: "Guide", href: "/resources/china-factory-audit-service" },
    { title: "Factory Audit Checklist for First-Time Buyers", problem: "First production order and need to assess factory capability?", format: "Checklist" },
    { title: "Dongguan Factory Audit Guide: Molds, Plastics, and Hardware", problem: "Sourcing tooling or plastic parts in Dongguan?", format: "Guide" },
    { title: "Quality System Audit: What to Evaluate Beyond ISO Certificates", problem: "Factory has ISO 9001 but you want deeper assessment?", format: "Guide" },
  ]},
  { category: "Product Development", resources: [
    { title: "7 Proven Product Sourcing Strategies to Scale Your Ecommerce Business", problem: "Looking for a structured approach to product sourcing for your ecommerce brand?", format: "Guide", href: "/resources/product-sourcing" },
    { title: "Product Brief Template for Accurate Factory Quotes", problem: "Getting inconsistent quotes because your product brief is unclear?", format: "Template" },
    { title: "Design for Manufacturing Checklist", problem: "Design files ready but not sure if they are production-ready?", format: "Checklist" },
    { title: "Sample Approval Checklist Before Mass Production", problem: "Received samples — how to evaluate them systematically?", format: "Checklist" },
  ]},
  { category: "Quality Control", resources: [
    { title: "AQL Inspection Guide for Overseas Buyers", problem: "Not familiar with AQL sampling and defect classification?", format: "Guide" },
    { title: "Pre-Shipment Inspection Checklist by Product Category", problem: "Need to know what to inspect before your shipment leaves?", format: "Checklist" },
    { title: "Common Quality Issues in PRD Electronics Manufacturing", problem: "Sourcing electronics and want to anticipate common defects?", format: "Guide" },
  ]},
  { category: "Manufacturing Clusters", resources: [
    { title: "PRD Manufacturing Cluster Selection Guide", problem: "Not sure whether to source in Shenzhen, Dongguan, or Zhongshan?", format: "Guide" },
    { title: "Shenzhen Electronics Sourcing Guide", problem: "Sourcing electronics and need to understand the Shenzhen ecosystem?", format: "Guide" },
    { title: "Zhongshan LED Lighting Supplier Guide", problem: "Looking for LED lighting suppliers — where to start in Zhongshan?", format: "Guide" },
  ]},
  { category: "Cost and Quotes", resources: [
    { title: "Quote Comparison Template for OEM Projects", problem: "Comparing quotes from multiple factories — how to normalize them?", format: "Template" },
    { title: "Manufacturing Cost Breakdown: Materials, Labor, Tooling, Overhead", problem: "Want to understand what should be in a factory cost breakdown?", format: "Guide" },
    { title: "Incoterms Guide for Importing from China", problem: "Unclear on FOB vs. CIF vs. DDP and what each means for your cost?", format: "Guide" },
  ]},
];

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        label="Knowledge Base"
        title="Practical Sourcing Resources for the Pearl River Delta"
        subtitle="Guides, checklists, and templates to help you verify suppliers, audit factories, develop products, and manage quality."
        primaryCta={{ label: "Request Factory Verification", href: "/contact" }}
        secondaryCta={{ label: "Upload Your Product Brief", href: "/quote" }}
        visual={
          <div className="rounded-xl border border-slate-700/50 bg-slate-800/50 p-6 backdrop-blur-sm w-full max-w-sm">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">Resource Formats</p>
            <div className="flex gap-3">
              {[{ format: "Checklist", icon: "✅" },{ format: "Template", icon: "📋" },{ format: "Guide", icon: "📖" }].map((f) => (
                <div key={f.format} className="flex-1 rounded-lg border border-slate-700 bg-slate-800/70 p-3 text-center"><span className="text-xl" aria-hidden="true">{f.icon}</span><p className="mt-1 text-xs font-bold text-white">{f.format}</p></div>
              ))}
            </div>
          </div>
        }
      />

      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {/* Featured */}
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-3">Featured Downloads</h2>
          <p className="text-base text-slate-600 text-center mb-10">Start with these three essential resources. Most requested by buyers sourcing in the PRD.</p>
          <div className="grid gap-6 sm:grid-cols-3 mb-16">
            {featuredResources.map((r) => (
              <div key={r.title} className="rounded-xl border-2 border-amber-200 bg-gradient-to-b from-amber-50/60 to-white shadow-sm p-6 flex flex-col">
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-600 mb-2">{r.format}</span>
                <h3 className="text-base font-bold text-slate-900 leading-snug">{r.title}</h3>
                <p className="mt-2 text-xs text-slate-500"><span className="font-semibold text-slate-600">For:</span> {r.whoFor}</p>
                <p className="mt-1 text-sm text-slate-600 leading-relaxed flex-1">{r.solves}</p>
                <Link href="/contact" className="mt-4 inline-flex items-center justify-center rounded-lg bg-amber-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-amber-500 transition-colors w-full text-center">Request this resource</Link>
              </div>
            ))}
          </div>

          {/* All Resources */}
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-10">All Resources</h2>
          <div className="space-y-14">
            {resourceCategories.map((cat) => (
              <div key={cat.category}>
                <h3 className="text-lg font-bold text-slate-900 mb-5 flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-amber-600" aria-hidden="true" />{cat.category}</h3>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {cat.resources.map((r) => (
                    <div key={r.title} className="flex flex-col rounded-lg border border-slate-200 bg-white shadow-sm p-5 transition-shadow hover:shadow-md">
                      <span className="text-xs font-semibold uppercase tracking-wider text-amber-600">{r.format}</span>
                      <h4 className="mt-2 text-sm font-semibold text-slate-900 leading-snug">{r.title}</h4>
                      <p className="mt-2 flex-1 text-sm text-slate-600 leading-relaxed">{r.problem}</p>
                      <Link href={r.href || "/contact"} className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-amber-600 hover:text-amber-700 transition-colors">{r.href ? "Read guide" : "Request this resource"}<svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg></Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-xl border border-slate-200 bg-slate-50 p-8 text-center">
            <h2 className="text-xl font-bold text-slate-900">Get Manufacturing Insights by Email</h2>
            <p className="mt-2 text-base text-slate-600">Practical sourcing tips, cluster updates, and factory insights — delivered twice a month.</p>
            <div className="mt-5 mx-auto flex max-w-md gap-3"><input type="email" placeholder="your@email.com" className="block flex-1 rounded-lg border border-slate-300 px-4 py-2.5 text-sm placeholder:text-slate-400 focus:border-amber-600 focus:outline-none focus:ring-1 focus:ring-amber-600" /><button type="button" className="rounded-lg bg-amber-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-amber-700">Subscribe</button></div>
          </div>
        </div>
      </section>

      <CTASection
        title="Need Help Choosing the Right Resources?"
        description="Tell us about your project stage and we will recommend the most relevant guides and templates."
        primaryButtonLabel="Contact Us"
        primaryButtonHref="/contact"
        secondaryButtonLabel="Get a Quote"
        secondaryButtonHref="/quote"
        variant="light"
      />
    </>
  );
}
