import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/site";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Services: [
      { label: "Supplier Sourcing", href: "/services#supplier-sourcing" },
      { label: "Factory Verification", href: "/services#factory-verification" },
      { label: "Factory Audit", href: "/services#factory-audit" },
      { label: "Sample Development", href: "/services#sample-development" },
      { label: "OEM/ODM Project Management", href: "/services#oem-odm-project-management" },
    ],
    Industries: [
      { label: "Consumer Electronics", href: "/industries#consumer-electronics" },
      { label: "Smart Hardware", href: "/industries#smart-hardware" },
      { label: "LED Lighting", href: "/industries#led-lighting" },
      { label: "Small Appliances", href: "/industries#small-appliances" },
      { label: "Beauty Devices", href: "/industries#beauty-devices" },
    ],
    Clusters: [
      { label: "Shenzhen", href: "/manufacturing-clusters#shenzhen" },
      { label: "Dongguan", href: "/manufacturing-clusters#dongguan" },
      { label: "Guangzhou", href: "/manufacturing-clusters#guangzhou" },
      { label: "Foshan", href: "/manufacturing-clusters#foshan" },
      { label: "Zhongshan", href: "/manufacturing-clusters#zhongshan" },
    ],
    Locations: [
      { label: "Shenzhen Electronics Sourcing", href: "/locations/shenzhen-electronics-sourcing" },
      { label: "Dongguan Factory Audit", href: "/locations/dongguan-factory-audit" },
      { label: "Guangzhou Packaging Sourcing", href: "/locations/guangzhou-packaging-sourcing" },
      { label: "Foshan Furniture Sourcing", href: "/locations/foshan-furniture-sourcing" },
      { label: "Zhongshan LED Lighting Sourcing", href: "/locations/zhongshan-led-lighting-sourcing" },
    ],
    Company: [
      { label: "About", href: "/about" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Resources", href: "/resources" },
      { label: "Contact", href: "/contact" },
      { label: "Get a Quote", href: "/quote" },
    ],
  };

  return (
    <footer className="border-t border-slate-800 bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-6">
          {/* Brand + Contact */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center rounded-xl bg-white/95 px-4 py-3 shadow-sm">
              <Image
                src="/brand/pearlsourcehub-logo-official-footer.svg"
                alt="PearlSourceHub"
                width={895}
                height={292}
                className="w-[190px] sm:w-[240px] lg:w-[270px] h-auto max-h-[88px] object-contain"
              />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              {siteConfig.description}
            </p>
            <div className="mt-4 space-y-1.5">
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
                <svg className="h-4 w-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                {siteConfig.email}
              </a>
              <a href={siteConfig.phoneHref} className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
                <svg className="h-4 w-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                {siteConfig.phone}
              </a>
              <a href={siteConfig.whatsappHref} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
                <svg className="h-4 w-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                WhatsApp
              </a>
              <span className="flex items-center gap-2 text-sm text-slate-400">📍 {siteConfig.location}</span>
            </div>
            <div className="mt-3 flex items-center gap-3">
              <a href={siteConfig.social.tiktok} target="_blank" rel="noopener noreferrer" className="text-xs text-slate-500 hover:text-white transition-colors">TikTok</a>
              <span className="text-slate-600">|</span>
              <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="text-xs text-slate-500 hover:text-white transition-colors">Facebook</a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300">{title}</h3>
              <ul className="mt-4 space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-slate-400 transition-colors hover:text-white">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-slate-800 pt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-slate-500">&copy; {currentYear} {siteConfig.name}. All rights reserved.</p>
          <p className="text-sm text-slate-500">Shenzhen &bull; Dongguan &bull; Guangzhou &bull; Foshan &bull; Zhongshan &bull; Huizhou</p>
        </div>
      </div>
    </footer>
  );
}
