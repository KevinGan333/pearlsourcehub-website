export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  whoFor: string;
  whatWeCheck: string[];
  clientReceives: string[];
  riskReduction: string;
}

export const services: Service[] = [
  {
    id: "supplier-sourcing",
    title: "Supplier Sourcing",
    description:
      "We identify and shortlist qualified manufacturers across Pearl River Delta clusters that match your product specifications, volume requirements, certifications, and target cost range.",
    icon: "🔍",
    whoFor:
      "Product brands, hardware startups, and procurement teams who need a verified factory shortlist — not a random list of suppliers from online directories.",
    whatWeCheck: [
      "Product category match against PRD manufacturing cluster capabilities",
      "Factory certifications relevant to your product and target market (ISO, BSCI, FDA-registered, SEDEX)",
      "Manufacturer vs. trading company status through on-site verification",
      "Export experience in your product category and target region",
    ],
    clientReceives: [
      "A shortlist of 3–5 pre-screened factories with capability summaries",
      "Preliminary unit cost and tooling cost estimates from each factory",
      "Factory profile sheets with equipment lists and production line photos",
      "A recommended factory ranking based on capability, cost, and risk",
    ],
    riskReduction:
      "Eliminates the risk of contacting trading companies posing as manufacturers. Saves weeks of searching and pre-screening suppliers across multiple cities.",
  },
  {
    id: "factory-verification",
    title: "Factory Verification",
    description:
      "On-site factory verification to confirm that a supplier is a legitimate manufacturer with real production capability — before you commit time, samples, or deposits.",
    icon: "✅",
    whoFor:
      "Buyers who have received supplier recommendations but need independent confirmation that the factory is real, capable, and not a trading intermediary.",
    whatWeCheck: [
      "Business license, export license, and legal registration documents",
      "Physical factory address and facility walk-through with photo/video evidence",
      "Production lines, equipment condition, and workforce size on a normal working day",
      "Export history, past client references, and certification validity",
    ],
    clientReceives: [
      "A factory verification report with on-site photographs and document copies",
      "Clear confirmation of manufacturer vs. trading company status",
      "Production line and facility assessment with capability notes",
      "Red flags identified during the visit, if any",
    ],
    riskReduction:
      "Prevents the common situation where a trading company presents itself as a manufacturer. Confirms actual production capability before any financial commitment.",
  },
  {
    id: "factory-audit",
    title: "Factory Audit",
    description:
      "A structured factory audit covering quality management systems, production capacity, process control, social compliance, and environmental practices — based on ISO 9001 audit principles.",
    icon: "📋",
    whoFor:
      "Buyers who need a deeper assessment of a factory's quality systems, production processes, and compliance before placing production orders.",
    whatWeCheck: [
      "Quality management system: incoming QC, in-process QC, final QC, calibration, defect handling",
      "Production capacity: equipment list, shift structure, current utilization, lead-time capability",
      "Process control: work instructions, operator training, maintenance records, traceability",
      "Social compliance: working hours, wages, safety equipment, dormitory conditions if applicable",
    ],
    clientReceives: [
      "A structured factory audit report with scored sections and photographic evidence",
      "Capacity assessment: can this factory handle your volume within your timeline?",
      "Non-conformance list with severity ratings and recommended corrective actions",
      "Overall factory rating and recommendation for your product type",
    ],
    riskReduction:
      "Identifies quality system gaps, capacity bottlenecks, and compliance issues before they cause production failures, shipment delays, or compliance violations.",
  },
  {
    id: "sample-development",
    title: "Sample Development",
    description:
      "We manage prototype and sample development with your chosen factory — from design file handover through DFM feedback, prototype review, and golden sample sign-off.",
    icon: "🔧",
    whoFor:
      "Product brands and hardware teams moving from design to first physical samples, or teams iterating samples with a factory and needing on-site technical coordination.",
    whatWeCheck: [
      "Design file completeness and manufacturability (DFM review)",
      "Sample quality against your specifications, reference samples, and brand standards",
      "Factory's sample-making capability: in-house toolroom, CNC, 3D printing access",
      "Sample iteration tracking: revision history, change documentation, timeline adherence",
    ],
    clientReceives: [
      "DFM feedback report before sample production begins",
      "Sample inspection report with measurements, functional test results, and photos",
      "Revision tracking log across all sample iterations",
      "Golden sample confirmation with full documentation for production reference",
    ],
    riskReduction:
      "Catches design-for-manufacturing issues before tooling investment. Ensures the golden sample accurately represents what will be produced in mass production.",
  },
  {
    id: "oem-odm-project-management",
    title: "OEM/ODM Project Management",
    description:
      "End-to-end production project management — we act as your on-the-ground engineering and production team, managing timelines, BOM costs, tooling, and quality milestones.",
    icon: "🏭",
    whoFor:
      "Brands and startups running OEM or ODM projects who need on-site project management across multiple factories, tooling shops, and component suppliers in the PRD.",
    whatWeCheck: [
      "Project timeline and milestone tracking against agreed schedule",
      "BOM cost review: material costs, labor, overhead, and margin transparency",
      "Tooling and mold development progress at each stage (design, trial, modification, approval)",
      "Engineering change orders: documentation, cost impact, and timeline effect",
    ],
    clientReceives: [
      "Weekly project status reports with milestone progress and photos from the factory floor",
      "BOM cost breakdown with line-item transparency and cost optimization suggestions",
      "Tooling progress reports with trial shot photos and dimensional reports",
      "Production milestone tracking dashboard",
    ],
    riskReduction:
      "Prevents project timeline drift, cost overruns, and miscommunication. On-site presence means problems are caught and solved within days, not weeks.",
  },
  {
    id: "quality-inspection",
    title: "Quality Inspection",
    description:
      "On-site quality inspections at critical production stages: incoming materials, during production, pre-shipment, and container loading — following AQL sampling standards.",
    icon: "🔬",
    whoFor:
      "Buyers who need independent quality verification before products leave the factory — especially for first production runs, new factory relationships, or high-value orders.",
    whatWeCheck: [
      "Incoming material inspection: components, raw materials, packaging materials against specs",
      "During Production (DUPRO) inspection at 30–60% completion to catch issues early",
      "Pre-Shipment Inspection (PSI) on finished goods following AQL sampling tables",
      "Container Loading Supervision (CLS): quantity verification, packaging integrity, loading conditions",
    ],
    clientReceives: [
      "Detailed inspection reports with measurements, function test results, and defect photos",
      "AQL-based pass/fail determination with defect classification (critical, major, minor)",
      "Corrective action recommendations if defects are found",
      "Container loading report with shipment photos, seal numbers, and loading conditions",
    ],
    riskReduction:
      "Catches quality issues before products leave China. A single rejected shipment costs far more than inspection. Early DUPRO inspection prevents entire batches from being produced with the same defect.",
  },
  {
    id: "packaging-and-branding",
    title: "Packaging and Branding",
    description:
      "We coordinate packaging design, material sourcing, and branding application across Guangzhou and Dongguan packaging clusters — ensuring products arrive retail-ready and brand-compliant.",
    icon: "📦",
    whoFor:
      "Brands launching retail products, DTC e-commerce teams needing branded packaging, and companies requiring Amazon FBA-compliant or retail-ready packaging solutions.",
    whatWeCheck: [
      "Packaging structural design and material specification against product protection needs",
      "Print quality: color accuracy, registration, finish consistency against brand standards",
      "Label and manual content accuracy, regulatory markings, barcode/UPC scannability",
      "Packaging durability: transit testing, compression strength, moisture resistance if applicable",
    ],
    clientReceives: [
      "Packaging material samples with print quality and structural assessment",
      "Supplier sourcing across Guangzhou and Dongguan packaging clusters",
      "Branding application verification against your brand guide",
      "Final packaging inspection report before mass production or shipment",
    ],
    riskReduction:
      "Prevents branding errors, packaging damage in transit, and retail compliance failures. Consolidates packaging sourcing across specialized PRD packaging clusters.",
  },
  {
    id: "shipping-coordination",
    title: "Shipping Coordination",
    description:
      "We manage logistics from factory floor to your destination — comparing freight options, preparing documentation, and tracking shipments across air, sea, rail, and express channels.",
    icon: "🚢",
    whoFor:
      "Buyers who want transparent freight comparison and professional shipment management rather than relying on factory-arranged shipping with unclear markups.",
    whatWeCheck: [
      "Freight option comparison: air vs. sea vs. rail vs. express by cost, transit time, and reliability",
      "Customs documentation: commercial invoice, packing list, certificate of origin, any required certificates",
      "Incoterms analysis: FOB vs. CIF vs. DDP cost and risk comparison for your situation",
      "Shipment tracking from factory departure through customs clearance to destination",
    ],
    clientReceives: [
      "Freight comparison table with cost, transit time, and risk factors for each option",
      "Complete shipping documentation package prepared for customs",
      "Incoterms recommendation based on your volume, product type, and risk tolerance",
      "Shipment tracking updates at key milestones",
    ],
    riskReduction:
      "Prevents inflated factory-arranged shipping costs. Ensures correct documentation to avoid customs delays. Compares real freight options instead of accepting one factory-recommended forwarder.",
  },
];
