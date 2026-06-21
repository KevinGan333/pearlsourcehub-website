import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About PearlSourceHub | Pearl River Delta Sourcing and Product Development Team",
  description: "PearlSourceHub is an engineering-led sourcing and product development team based in the Pearl River Delta, helping global buyers verify factories, validate samples, and manage production risk.",
};

const principles = [
  { title: "Verify before recommending", desc: "Every factory we recommend has been visited in person by our team. We check business licenses, production lines, certifications, and export history before you commit to samples or deposits." },
  { title: "Compare before committing", desc: "We collect and normalize quotes from multiple qualified factories. You see a transparent cost comparison across materials, labor, tooling, and overhead — not a single take-it-or-leave-it price." },
  { title: "Validate samples before production", desc: "We manage DFM review and sample iterations with your chosen factory. You approve a golden sample with full documentation before production tooling is cut or mass production begins." },
  { title: "Track production before shipment", desc: "We visit the production line during manufacturing. In-line inspections catch defects early. Pre-shipment inspection and container loading supervision ensure products leave to specification." },
  { title: "Report clearly before decisions", desc: "You receive structured reports — not WeChat messages. Factory verification reports, sample inspection reports, and production tracking updates are documented so you can make informed decisions." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About"
        title="Engineering-Led Sourcing in the Pearl River Delta"
        subtitle="We are not a trading company. We are not a remote supplier referral service. We are an engineering-led team based in the Pearl River Delta, helping overseas product brands and procurement teams verify factories, validate samples, and manage production risk."
        primaryCta={{ label: "Upload Your Product Brief", href: "/quote" }}
      />

      {/* Why we exist + What makes us different */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Why PearlSourceHub Exists</h2>
          <p className="text-lg leading-relaxed text-slate-600 mb-10">Most overseas buyers sourcing from the Pearl River Delta face the same problems: unverified factories, trading companies posing as manufacturers, unclear quotations, sample delays, and quality issues after deposits. These problems exist because buyers lack on-the-ground engineering support — someone who can visit factories, verify capabilities, compare costs objectively, and follow production on-site.</p>
          <p className="text-lg leading-relaxed text-slate-600 mb-12">We built PearlSourceHub to solve this gap. We are based in the PRD. We visit factories. We speak engineering. We report transparently. We do not earn commissions from factories — our recommendations are based on what is right for your product.</p>

          <h2 className="text-2xl font-bold text-slate-900 mb-8">What Makes Us Different</h2>
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              { title: "Pearl River Delta Focus", desc: "We work across six PRD cities only. We do not claim to cover all of China. This focus means deeper factory relationships and more specific cluster knowledge than general sourcing agents." },
              { title: "Engineering-Led, Not Sales-Led", desc: "Our team includes engineers who understand your product technically — not just translators passing messages. We assess factory capability at an engineering level." },
              { title: "On-Site, Not Remote", desc: "We visit factories in person. We check production lines with our own eyes. We do not source remotely through phone calls and emails. Physical verification is our foundation." },
              { title: "No Factory Commissions", desc: "We charge fixed project fees or retainers — not supplier commissions. Our recommendations are unbiased. We recommend the right factory for your product, not the one that pays us the most." },
            ].map((d) => (
              <div key={d.title} className="rounded-lg border border-slate-200 bg-white shadow-sm p-5">
                <h3 className="text-sm font-semibold text-slate-900">{d.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sourcing Principles */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-3">Our Risk-First Sourcing Principles</h2>
          <p className="text-slate-600 text-center mb-10">Five principles guide every project. Each is designed to reduce a specific sourcing risk.</p>
          <div className="space-y-4">
            {principles.map((p, i) => (
              <div key={i} className="flex items-start gap-4 rounded-lg border border-slate-200 bg-white shadow-sm p-5">
                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-slate-900 text-sm font-bold text-white">{i + 1}</span>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">{p.title}</h3>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location + CTA */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Based in the Pearl River Delta</h2>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">Our team is based in Shenzhen, with coverage across all six PRD cities. We can visit any factory in the region within two hours.</p>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {["📍 Shenzhen — Headquarters", "📍 Dongguan — Mold & Hardware Hub", "📍 Guangzhou — Office", "📍 Zhongshan — Lighting Hub", "📍 Foshan — Furniture Hub", "📍 Huizhou — Battery & Audio Hub"].map((l) => (<span key={l} className="rounded-full bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-600">{l}</span>))}
          </div>
          <p className="text-slate-500 mb-6">Contact us at <a href="mailto:hello@pearlsourcehub.com" className="text-amber-600 hover:text-amber-700 font-medium">hello@pearlsourcehub.com</a></p>
          <Link href="/quote" className="inline-flex items-center justify-center rounded-lg bg-amber-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-amber-500 transition-colors">Upload Your Product Brief</Link>
        </div>
      </section>

      <CTASection
        title="Work with a Team That Understands Manufacturing"
        description="Share your project with us. We will show you how on-the-ground engineering support transforms your sourcing experience."
        primaryButtonLabel="Upload Your Product Brief"
        primaryButtonHref="/quote"
        secondaryButtonLabel="Explore Manufacturing Clusters"
        secondaryButtonHref="/manufacturing-clusters"
      />
    </>
  );
}
