import Link from "next/link";

const trustPoints = [
  "Verified factories",
  "Transparent costs",
  "On-site production follow-up",
];

const capabilityTags = [
  { label: "OEM / ODM Support", icon: "🏭" },
  { label: "Factory Audit", icon: "📋" },
  { label: "Sample Development", icon: "🔧" },
  { label: "Quality Inspection", icon: "🔬" },
];

const prdCities = [
  { city: "Shenzhen", spec: "Electronics · PCBA · Smart Devices" },
  { city: "Dongguan", spec: "Molds · Plastics · Assembly" },
  { city: "Guangzhou", spec: "Packaging · Beauty · Wholesale" },
  { city: "Foshan", spec: "Furniture · Building · Home" },
  { city: "Zhongshan", spec: "LED Lighting · Appliances" },
  { city: "Huizhou", spec: "Battery · Audio · Assembly" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-amber-50/50 to-slate-100">
      {/* Subtle industrial blueprint grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(15,23,42,0.15) 0.5px, transparent 0.5px),
            linear-gradient(90deg, rgba(15,23,42,0.15) 0.5px, transparent 0.5px)
          `,
          backgroundSize: "48px 48px",
        }}
        aria-hidden="true"
      />

      {/* Accent glow blobs */}
      <div
        className="pointer-events-none absolute -top-32 right-0 h-[500px] w-[500px] rounded-full bg-amber-50/50 blur-[80px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-32 left-1/4 h-[400px] w-[400px] rounded-full bg-blue-50/40 blur-[80px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* ━━━━ Left Column: Content ━━━━ */}
          <div>
            {/* Location badge */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50/80 px-4 py-1.5">
              <span className="h-2 w-2 rounded-full bg-amber-500" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-700">
                Pearl River Delta, China
              </span>
            </div>

            {/* H1 */}
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl lg:leading-[1.08]">
              Pearl River Delta Sourcing Partner{" "}
              <span className="text-amber-600">for Product Brands and Hardware Teams</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 max-w-lg text-base leading-relaxed text-slate-500 sm:text-lg">
              Find verified factories across Shenzhen, Dongguan, Guangzhou, Foshan,
              Zhongshan, and Huizhou — from product brief to sample validation and
              mass production.
            </p>

            {/* CTA buttons */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/quote"
                className="inline-flex items-center justify-center rounded-lg bg-amber-600 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-amber-200/60 transition-all hover:bg-amber-500 hover:shadow-xl hover:shadow-amber-200 active:scale-[0.98]"
              >
                Upload Your Product Brief
                <svg
                  className="ml-2 h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/quote"
                className="inline-flex items-center justify-center rounded-lg border-2 border-slate-300 bg-white px-7 py-3.5 text-base font-semibold text-slate-700 transition-all hover:border-slate-400 hover:bg-slate-50 active:scale-[0.98]"
              >
                Get a Verified Supplier Shortlist
              </Link>
            </div>

            {/* Trust points */}
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-2">
              {trustPoints.map((point) => (
                <div key={point} className="flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-100">
                    <svg
                      className="h-3.5 w-3.5 text-amber-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="3"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-sm font-medium text-slate-500">{point}</span>
                </div>
              ))}
            </div>

            {/* Service capability mini-tags */}
            <div className="mt-6 flex flex-wrap items-center gap-2">
              {capabilityTags.map((tag) => (
                <span
                  key={tag.label}
                  className="inline-flex items-center gap-1.5 rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-500 shadow-sm"
                >
                  <span aria-hidden="true">{tag.icon}</span>
                  {tag.label}
                </span>
              ))}
            </div>
          </div>

          {/* ━━━━ Right Column: Industrial B2B Visual ━━━━ */}
          <div className="relative hidden lg:block" aria-hidden="true">
            <div className="relative mx-auto h-[500px] w-full">
              {/* Central hub card */}
              <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
                <div className="rounded-2xl border border-slate-200/80 bg-white px-6 py-5 shadow-xl shadow-slate-200/50">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Manufacturing Network
                  </p>
                  <p className="mt-1 text-2xl font-bold text-slate-900">6 Cities</p>
                  <p className="mt-0.5 text-sm text-slate-500">500+ Verified Factories</p>
                  <div className="mt-3 flex -space-x-1.5">
                    {["S", "D", "G", "F", "Z", "H"].map((l, i) => (
                      <span
                        key={l}
                        className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-slate-800 text-[10px] font-bold text-white"
                        style={{ zIndex: 6 - i }}
                      >
                        {l}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Surrounding service cards — top-left: Factory Audit */}
              <div className="absolute left-2 top-6 rounded-xl border border-slate-200/80 bg-white px-4 py-3 shadow-md shadow-slate-100/60">
                <span className="text-lg" aria-hidden="true">📋</span>
                <p className="mt-1 text-xs font-semibold text-slate-800">Factory Audit</p>
                <p className="text-[10px] text-slate-400">Quality · Capacity · Compliance</p>
              </div>

              {/* Top-right: Sample Development */}
              <div className="absolute right-2 top-10 rounded-xl border border-slate-200/80 bg-white px-4 py-3 shadow-md shadow-slate-100/60">
                <span className="text-lg" aria-hidden="true">🔧</span>
                <p className="mt-1 text-xs font-semibold text-slate-800">Sample Development</p>
                <p className="text-[10px] text-slate-400">DFM · Prototype · Validation</p>
              </div>

              {/* Mid-right: Quality Inspection */}
              <div className="absolute right-6 top-[55%] -translate-y-1/2 rounded-xl border border-slate-200/80 bg-white px-4 py-3 shadow-md shadow-slate-100/60">
                <span className="text-lg" aria-hidden="true">🔬</span>
                <p className="mt-1 text-xs font-semibold text-slate-800">Quality Inspection</p>
                <p className="text-[10px] text-slate-400">DUPRO · PSI · AQL</p>
              </div>

              {/* Bottom-left: Supplier Sourcing */}
              <div className="absolute left-4 bottom-14 rounded-xl border border-slate-200/80 bg-white px-4 py-3 shadow-md shadow-slate-100/60">
                <span className="text-lg" aria-hidden="true">🔍</span>
                <p className="mt-1 text-xs font-semibold text-slate-800">Supplier Sourcing</p>
                <p className="text-[10px] text-slate-400">Verify · Shortlist · Match</p>
              </div>

              {/* Bottom-right: Shipping */}
              <div className="absolute bottom-16 right-8 rounded-xl border border-slate-200/80 bg-white px-4 py-3 shadow-md shadow-slate-100/60">
                <span className="text-lg" aria-hidden="true">🚢</span>
                <p className="mt-1 text-xs font-semibold text-slate-800">Shipping Coordination</p>
                <p className="text-[10px] text-slate-400">FOB · CIF · DDP</p>
              </div>

              {/* Connection lines SVG */}
              <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 520 500"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Lines from hub to each service card */}
                <line x1="260" y1="250" x2="120" y2="95" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="5 5" />
                <line x1="260" y1="250" x2="400" y2="100" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="5 5" />
                <line x1="260" y1="250" x2="420" y2="275" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="5 5" />
                <line x1="260" y1="250" x2="130" y2="370" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="5 5" />
                <line x1="260" y1="250" x2="390" y2="380" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="5 5" />

                {/* Amber node dots at endpoints */}
                {[[120,95],[400,100],[420,275],[130,370],[390,380]].map(([x,y]) => (
                  <circle key={`${x}-${y}`} cx={x} cy={y} r="2.5" fill="#d97706" />
                ))}
              </svg>
            </div>
          </div>

          {/* ━━━━ Mobile: Simplified Visual ━━━━ */}
          <div className="lg:hidden" aria-hidden="true">
            <div className="grid grid-cols-3 gap-2.5">
              {prdCities.map((c) => (
                <div
                  key={c.city}
                  className="rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-center shadow-sm"
                >
                  <p className="text-xs font-bold text-slate-800">{c.city}</p>
                  <p className="mt-0.5 text-[10px] leading-tight text-slate-400">{c.spec}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center justify-center gap-2">
              <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
                500+ Verified Factories
              </span>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                6-City Coverage
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
