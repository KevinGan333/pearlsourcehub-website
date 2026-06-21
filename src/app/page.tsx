import Link from "next/link";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";

const painPoints = [
  { icon: "🏭", title: "Unverified factories", desc: "Suppliers claim to be manufacturers but many are middlemen with no real production capability." },
  { icon: "🔄", title: "Trading companies posing as factories", desc: "Intermediaries add cost layers and reduce your control over quality and lead times." },
  { icon: "📋", title: "Unclear quotations", desc: "Vague pricing obscures tooling costs, material specifications, and certification expenses." },
  { icon: "⏳", title: "Sample delays", desc: "Without on-site follow-up, prototype timelines drift and product launches are delayed." },
  { icon: "⚠️", title: "Quality issues after deposit", desc: "Production quality can deteriorate once payment is made and no one monitors the line." },
  { icon: "📡", title: "No on-site production follow-up", desc: "Remote sourcing leaves you blind to real-time production issues on the factory floor." },
];

const clusters = [
  { city: "Shenzhen", tags: ["Electronics", "PCBA", "Smart Devices"], desc: "Global electronics capital — components, SMT assembly, and prototyping within a 50 km radius." },
  { city: "Dongguan", tags: ["Molds", "Plastic Parts", "Hardware", "Assembly"], desc: "World's largest mold-making hub, plus injection molding and finished product assembly." },
  { city: "Guangzhou", tags: ["Packaging", "Beauty", "Apparel", "Wholesale"], desc: "Southern China's commercial capital — packaging, printing, and the Canton Fair." },
  { city: "Foshan", tags: ["Furniture", "Building Materials", "Home"], desc: "One of the world's largest furniture manufacturing centers with deep export experience." },
  { city: "Zhongshan", tags: ["LED Lighting", "Small Appliances"], desc: "Produces ~70% of the world's LED lighting — from drivers to finished fixtures." },
  { city: "Huizhou", tags: ["Battery", "Audio", "Electronics Assembly"], desc: "Growing hub for battery tech, audio equipment, and cost-competitive electronics assembly." },
];

const executionBlocks = [
  {
    icon: "✅",
    title: "Verify the factory before recommendation",
    desc: "Every supplier we recommend has been visited in person. We check business licenses, production lines, certifications, and export history. You receive a factory verification report before you commit to samples or deposits.",
  },
  {
    icon: "📊",
    title: "Compare real manufacturing costs, not just quotes",
    desc: "We collect and compare quotes from multiple qualified factories. We break down material costs, labor, tooling, and overhead so you understand what you are paying for — not just a single unit price with hidden assumptions.",
  },
  {
    icon: "🔧",
    title: "Validate samples before mass production",
    desc: "We manage sample development with your chosen factory. Our engineers review DFM feedback, inspect prototypes against your specs, and track revisions until golden sample approval. You do not release production until the sample is right.",
  },
  {
    icon: "🏭",
    title: "Follow production on-site until shipment",
    desc: "We visit production lines during manufacturing, conduct in-line quality inspections, and provide weekly progress reports. Pre-shipment inspection and container loading supervision ensure products leave the factory to specification.",
  },
];

const servicesSlim = [
  { icon: "🔍", title: "Supplier Sourcing", desc: "Shortlist qualified factories matched to your product specifications and volume." },
  { icon: "✅", title: "Factory Verification", desc: "On-site checks to confirm real manufacturers before you commit time or deposits." },
  { icon: "📋", title: "Factory Audit", desc: "Quality system, capacity, and compliance assessment following ISO 9001 principles." },
  { icon: "🔧", title: "Sample Development", desc: "Prototype coordination, DFM feedback, and golden sample validation." },
  { icon: "🏭", title: "OEM/ODM Project Management", desc: "Timeline, BOM cost, tooling, and milestone management with weekly reporting." },
  { icon: "🔬", title: "Quality Inspection", desc: "In-line DUPRO and pre-shipment PSI inspection to catch defects before shipping." },
  { icon: "📦", title: "Packaging & Branding", desc: "Packaging design, material sourcing, and retail-ready compliance across PRD clusters." },
  { icon: "🚢", title: "Shipping Coordination", desc: "Freight comparison, customs documentation, Incoterms guidance, and delivery tracking." },
];

const industries = [
  { name: "Consumer Electronics", tags: ["Wearables", "Smart home", "Mobile accessories"] },
  { name: "Smart Hardware", tags: ["IoT devices", "Robotics", "Connected sensors"] },
  { name: "LED Lighting", tags: ["Commercial fixtures", "Residential", "Automotive LED"] },
  { name: "Small Appliances", tags: ["Kitchen", "Personal care", "Floor care"] },
  { name: "Beauty Devices", tags: ["LED therapy", "Hair tools", "Skincare devices"] },
  { name: "Packaging", tags: ["Custom boxes", "Luxury rigid", "Sustainable"] },
  { name: "Hardware & Molds", tags: ["Injection molds", "Die casting", "CNC machining"] },
  { name: "Furniture & Home", tags: ["Residential", "Office", "Outdoor"] },
];

const advantages = [
  { icon: "📍", title: "Pearl River Delta Focus", desc: "We work exclusively across six PRD cities — not all of China. This focus means deeper factory relationships and better cluster-specific knowledge." },
  { icon: "🔎", title: "Factory Verification First", desc: "Every supplier we recommend has been visited in person, licenses checked, and production lines inspected by our own team." },
  { icon: "🔄", title: "Sample-to-Production Support", desc: "From prototype through mass production, our engineers manage each stage on-site and report progress to you weekly." },
  { icon: "💰", title: "Transparent Cost Comparison", desc: "We break down material, labor, tooling, and logistics costs so you see exactly what you are paying for across multiple factories." },
];

const workflow = [
  { step: "01", title: "Product Brief Review", desc: "We analyze your product requirements, target cost, volumes, and target market certifications." },
  { step: "02", title: "Supplier Shortlisting", desc: "We match your product to 3–5 qualified factories in the right PRD manufacturing cluster." },
  { step: "03", title: "Factory Audit", desc: "On-site inspection of quality systems, production capacity, certifications, and compliance." },
  { step: "04", title: "Sample Development", desc: "DFM feedback, prototype coordination, iterative review, and golden sample sign-off." },
  { step: "05", title: "Production Follow-up", desc: "Weekly in-line checks, progress reports, and milestone tracking from the factory floor." },
  { step: "06", title: "Quality Inspection & Shipping", desc: "Pre-shipment inspection, packaging verification, and logistics coordination to your destination." },
];

export default function HomePage() {
  return (
    <>
      {/* 1. Hero — handled by Hero component */}
      <Hero />

      {/* 2. What Goes Wrong Without On-the-Ground Support */}
      <section className="relative py-16 sm:py-24 bg-[#F1F6FA]">
        <div className="pointer-events-none absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #0f172a 1px, transparent 0)", backgroundSize: "36px 36px" }} aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Sourcing Challenges" title="What Goes Wrong Without On-the-Ground Support" />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {painPoints.map((p) => (
              <div key={p.title} className="flex items-start gap-4 rounded-lg border border-slate-200 bg-white shadow-sm p-5">
                <span className="mt-0.5 text-2xl flex-shrink-0" aria-hidden="true">{p.icon}</span>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">{p.title}</h3>
                  <p className="mt-1 text-sm text-slate-500 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Pearl River Delta Manufacturing Network */}
      <section className="relative py-16 sm:py-24 bg-[#FFF8EF]">
        <div className="pointer-events-none absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "linear-gradient(rgba(217,119,6,0.3) 0.5px, transparent 0.5px), linear-gradient(90deg, rgba(217,119,6,0.3) 0.5px, transparent 0.5px)", backgroundSize: "60px 60px" }} aria-hidden="true" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-100/40 blur-[100px]" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Manufacturing Network" title="Pearl River Delta Manufacturing Clusters" description="Six cities, each with specialized industrial strengths. We cover the entire region." />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {clusters.map((c) => (
              <div key={c.city} className="group flex flex-col rounded-lg border border-slate-200 bg-white shadow-sm p-6 transition-shadow hover:shadow-md">
                <h3 className="text-lg font-bold text-slate-900">{c.city}</h3>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {c.tags.map((tag) => (<span key={tag} className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600">{tag}</span>))}
                </div>
                <p className="mt-3 text-sm text-slate-500 leading-relaxed">{c.desc}</p>
                <Link href={`/manufacturing-clusters#${c.city.toLowerCase()}`} className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-amber-600 hover:text-amber-700 transition-colors">View cluster<svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg></Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. What We Actually Do — 4 execution blocks */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading label="What We Actually Do" title="We Reduce Sourcing Risk Before Production Starts" description="We do not just find suppliers. We verify factories, compare real costs, validate samples, and follow production on-site." />
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {executionBlocks.map((block) => (
              <div key={block.title} className="flex items-start gap-5 rounded-lg border border-slate-200 bg-white shadow-sm p-6 sm:p-7">
                <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-amber-50 text-2xl" aria-hidden="true">{block.icon}</span>
                <div>
                  <h3 className="text-base font-bold text-slate-900">{block.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{block.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Core Services */}
      <div className="h-0 border-t border-slate-100 bg-[#F7FAF6]" aria-hidden="true" />
      <section className="py-16 sm:py-24 bg-[#F7FAF6]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Services" title="Core Services" description="From supplier discovery to final shipment. Engage us for one service or the full product development lifecycle." />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {servicesSlim.map((s) => (
              <div key={s.title} className="group flex flex-col rounded-lg border border-slate-200 bg-white shadow-sm p-5 transition-shadow hover:shadow-md">
                <span className="text-2xl" aria-hidden="true">{s.icon}</span>
                <h3 className="mt-3 text-sm font-semibold text-slate-900">{s.title}</h3>
                <p className="mt-1.5 text-sm text-slate-500 leading-relaxed">{s.desc}</p>
                <Link href={`/services#${s.title.toLowerCase().replace(/\s+/g, "-").replace(/[&\/]/g, "")}`} className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-amber-600 hover:text-amber-700 transition-colors">Learn more<svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg></Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Industries We Support */}
      <div className="h-0 border-t border-slate-100 bg-amber-50/30" aria-hidden="true" />
      <section className="py-16 sm:py-24 bg-amber-50/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Industries" title="Industries We Support" description="Specialized supply chains for each product category across the Pearl River Delta." />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((ind) => (
              <div key={ind.name} className="group flex flex-col rounded-lg border border-slate-200 bg-white shadow-sm p-5 transition-shadow hover:shadow-md">
                <h3 className="text-sm font-semibold text-slate-900">{ind.name}</h3>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {ind.tags.map((tag) => (<span key={tag} className="rounded-full bg-amber-50 px-2 py-0.5 text-xs font-medium text-amber-700">{tag}</span>))}
                </div>
                <Link href={`/industries#${ind.name.toLowerCase().replace(/\s+/g, "-").replace(/[&\/]/g, "")}`} className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-amber-600 hover:text-amber-700 transition-colors">Explore industry<svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg></Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Why PearlSourceHub Is Different */}
      <div className="h-0 border-t border-amber-100 bg-[#EEF5FA]" aria-hidden="true" />
      <section className="py-16 sm:py-24 bg-[#EEF5FA]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Why Us" title="Why PearlSourceHub Is Different" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {advantages.map((a) => (
              <div key={a.title} className="text-center">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm text-2xl" aria-hidden="true">{a.icon}</span>
                <h3 className="mt-4 text-sm font-semibold text-slate-900">{a.title}</h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Sample-to-Production Workflow */}
      <div className="h-0 border-t border-blue-100 bg-[#F7F7F5]" aria-hidden="true" />
      <section className="py-16 sm:py-24 bg-[#F7F7F5]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading label="How It Works" title="Sample-to-Production Workflow" description="A typical engagement moves through six stages — each designed to reduce a specific sourcing risk." />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {workflow.map((w) => (
              <div key={w.step} className="flex items-start gap-4 rounded-lg border border-slate-200 bg-white shadow-sm p-5">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-slate-900 text-sm font-bold text-white">{w.step}</span>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">{w.title}</h3>
                  <p className="mt-1 text-sm text-slate-500 leading-relaxed">{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Proof of How We Work */}
      <section className="py-16 sm:py-24 bg-[#F1F6FA]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading label="How We Work" title="Proof of How We Work" description="Every engagement produces structured, documented deliverables — not just verbal updates. Here is what you receive at each stage." />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: "📋", title: "Factory Verification Report", items: ["Business license verification", "Production line photos", "Manufacturer vs. trading company status", "Certification and export history check"] },
              { icon: "📊", title: "Quote Comparison Matrix", items: ["Normalized pricing across factories", "Material, labor, tooling breakdown", "Payment term comparison", "MOQ and lead time analysis"] },
              { icon: "✅", title: "Sample Approval Checklist", items: ["Specification compliance check", "Functional and visual inspection", "DFM issue tracking", "Golden sample sign-off document"] },
              { icon: "🔬", title: "QC Inspection Report", items: ["AQL-based defect classification", "DUPRO and PSI results", "Defect photos and descriptions", "Corrective action recommendations"] },
            ].map((proof) => (
              <div key={proof.title} className="rounded-lg border border-slate-200 bg-white shadow-sm p-5 sm:p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-50 text-xl" aria-hidden="true">{proof.icon}</span>
                  <h3 className="text-sm font-bold text-slate-900">{proof.title}</h3>
                </div>
                <ul className="space-y-2">
                  {proof.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                      <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-600" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Proof and Trust Signals */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Case Studies" title="Proof and Trust Signals" />
          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            <div className="group rounded-lg border border-slate-200 bg-white shadow-md p-6 transition-shadow hover:shadow-lg sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-amber-600">Consumer Electronics · Shenzhen</p>
              <h3 className="mt-2 text-lg font-bold text-slate-900">Smart Home Device: Prototype to Pilot Production</h3>
              <p className="mt-2 text-sm text-slate-500 leading-relaxed">Representative scenario: A European hardware startup needed to move from prototype to pilot production. We verified Shenzhen PCBA and assembly factories, managed sample iterations, and set up quality inspection before the first production run.</p>
              <div className="mt-4 flex items-center gap-3">
                <span className="rounded-full bg-green-50 px-3 py-1 text-sm font-semibold text-green-700">Factory verified before commitment</span>
              </div>
              <Link href="/case-studies" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-amber-600 hover:text-amber-700 transition-colors">Read full scenario<svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg></Link>
            </div>
            <div className="group rounded-lg border border-slate-200 bg-white shadow-md p-6 transition-shadow hover:shadow-lg sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-amber-600">LED Lighting · Zhongshan</p>
              <h3 className="mt-2 text-lg font-bold text-slate-900">LED Lighting Supplier Qualification and Cost Comparison</h3>
              <p className="mt-2 text-sm text-slate-500 leading-relaxed">Representative scenario: A US lighting brand needed to qualify direct manufacturers in Zhongshan and compare real production costs. We audited factories, verified certifications, and provided a transparent cost comparison across three qualified suppliers.</p>
              <div className="mt-4 flex items-center gap-3">
                <span className="rounded-full bg-green-50 px-3 py-1 text-sm font-semibold text-green-700">Cost comparison across 3 factories</span>
              </div>
              <Link href="/case-studies" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-amber-600 hover:text-amber-700 transition-colors">Read full scenario<svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg></Link>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Final CTA */}
      <CTASection
        title="Ready to source from the Pearl River Delta?"
        description="Send your product brief and get a verified supplier direction before you commit to production."
        primaryButtonLabel="Upload Your Product Brief"
        primaryButtonHref="/quote"
        secondaryButtonLabel="Talk to a Sourcing Specialist"
        secondaryButtonHref="/contact"
      />
    </>
  );
}
