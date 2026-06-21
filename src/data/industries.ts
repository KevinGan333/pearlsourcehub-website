export interface Industry {
  id: string;
  title: string;
  description: string;
  icon: string;
  cities: string[];
  subcategories: string[];
  risks: string[];
  whatWeVerify: string;
  recommendedServices: string[];
}

export const industries: Industry[] = [
  {
    id: "consumer-electronics",
    title: "Consumer Electronics",
    description:
      "Shenzhen, Dongguan, and Huizhou form the world's densest consumer electronics manufacturing ecosystem. From wireless earbuds to smart home devices, component sourcing, PCBA, and final assembly happen within a 50 km radius.",
    icon: "📱",
    cities: ["Shenzhen", "Dongguan", "Huizhou"],
    subcategories: [
      "Audio and wearables",
      "Smart home devices",
      "Mobile accessories",
      "Computer peripherals",
      "Consumer IoT products",
    ],
    risks: [
      "Component substitution without approval",
      "Trading companies presenting as manufacturers",
      "Weak in-line QC leading to batch inconsistency",
      "Unclear or missing certification documentation (CE, FCC, RoHS)",
    ],
    whatWeVerify:
      "Factory production lines, component sourcing records, certification status, QC process documentation, and manufacturer vs. trading company status.",
    recommendedServices: [
      "Supplier Sourcing",
      "Factory Verification",
      "Quality Inspection",
      "Sample Development",
    ],
  },
  {
    id: "smart-hardware",
    title: "Smart Hardware",
    description:
      "Shenzhen and Dongguan are global centers for IoT device and smart hardware manufacturing. PCB design, component sourcing, firmware coordination, enclosure manufacturing, and final assembly all happen within the PRD.",
    icon: "🤖",
    cities: ["Shenzhen", "Dongguan"],
    subcategories: [
      "IoT devices and sensors",
      "Smart locks and security",
      "Connected health monitors",
      "Industrial IoT hardware",
      "Robotics and automation components",
    ],
    risks: [
      "PCB assembly quality and soldering defects",
      "Firmware and hardware integration issues",
      "Enclosure fit and finish problems",
      "Supplier claiming capability they do not have",
    ],
    whatWeVerify:
      "PCBA line capability and quality control, firmware development support availability, enclosure tooling quality, and integration testing processes.",
    recommendedServices: [
      "Supplier Sourcing",
      "Factory Audit",
      "OEM/ODM Project Management",
      "Quality Inspection",
    ],
  },
  {
    id: "led-lighting",
    title: "LED Lighting",
    description:
      "Zhongshan's Guzhen township produces an estimated 70% of global LED lighting products. Shenzhen provides driver and component support. The supply chain from LED chips to finished fixtures is vertically integrated in this region.",
    icon: "💡",
    cities: ["Zhongshan", "Shenzhen"],
    subcategories: [
      "Commercial LED fixtures",
      "Residential LED lighting",
      "Automotive LED modules",
      "Grow lights and horticultural lighting",
      "Architectural and decorative lighting",
    ],
    risks: [
      "LED driver quality and lifespan issues",
      "Lumen output not matching claimed specifications",
      "Heat dissipation design problems",
      "Batch-to-batch color temperature and brightness variation",
    ],
    whatWeVerify:
      "LED driver certification and testing, integrating sphere test results, thermal design review, batch consistency sampling, and safety certification validity (UL, CE, SAA).",
    recommendedServices: [
      "Supplier Sourcing",
      "Factory Verification",
      "Sample Development",
      "Quality Inspection",
    ],
  },
  {
    id: "small-appliances",
    title: "Small Appliances",
    description:
      "Foshan, Zhongshan, and Dongguan are major small appliance manufacturing hubs. Kitchen appliances, personal care devices, and home cleaning products are produced here for global brands and retailers.",
    icon: "⚡",
    cities: ["Foshan", "Zhongshan", "Dongguan"],
    subcategories: [
      "Kitchen and cooking appliances",
      "Personal care devices",
      "Floor care and cleaning equipment",
      "Air treatment and purifiers",
      "Beverage and coffee equipment",
    ],
    risks: [
      "Motor and heating element quality issues",
      "Safety certification gaps for target markets",
      "Tooling cost overruns and delays",
      "Sample iteration delays pushing back launch timelines",
    ],
    whatWeVerify:
      "Motor and heating element sourcing and testing, safety certification records (GS, CE, ETL), tooling progress and cost tracking, sample development timeline adherence.",
    recommendedServices: [
      "Supplier Sourcing",
      "Factory Audit",
      "Sample Development",
      "OEM/ODM Project Management",
    ],
  },
  {
    id: "beauty-devices",
    title: "Beauty Devices",
    description:
      "Beauty tech and personal care devices are sourced primarily from Shenzhen (electronics and device assembly) and Guangzhou (beauty product ecosystem and packaging). FDA and CE regulatory requirements make supplier verification especially important.",
    icon: "✨",
    cities: ["Shenzhen", "Guangzhou"],
    subcategories: [
      "LED face masks and light therapy devices",
      "Microcurrent and RF beauty devices",
      "Hair styling and care tools",
      "Cleansing and skincare devices",
      "Manicure and grooming equipment",
    ],
    risks: [
      "FDA and CE certification claims not verified",
      "Battery quality and safety concerns",
      "Material biocompatibility and skin safety",
      "Packaging and labeling regulatory compliance in target markets",
    ],
    whatWeVerify:
      "FDA registration and device listing status, CE marking documentation, battery certification and safety testing, material safety test reports, and packaging compliance for target markets.",
    recommendedServices: [
      "Supplier Sourcing",
      "Factory Verification",
      "Factory Audit",
      "Quality Inspection",
    ],
  },
  {
    id: "packaging",
    title: "Packaging",
    description:
      "Guangzhou is one of the world's largest packaging and printing centers. Dongguan and Foshan complement with structural packaging, rigid boxes, and corrugated solutions. The PRD covers every packaging category from luxury rigid boxes to sustainable flexible packaging.",
    icon: "📦",
    cities: ["Guangzhou", "Dongguan", "Foshan"],
    subcategories: [
      "Custom rigid boxes and luxury packaging",
      "Folding cartons and retail packaging",
      "Flexible packaging and pouches",
      "Corrugated shipping and e-commerce boxes",
      "Sustainable and eco-friendly packaging",
    ],
    risks: [
      "Print color deviation from brand standards",
      "Material substitution or downgrade after sampling",
      "Minimum order quantity misalignment",
      "Luxury finish inconsistency across production batches",
    ],
    whatWeVerify:
      "Print color accuracy against Pantone references, material specification compliance, production batch samples, finishing quality (foil stamping, embossing, lamination), and MOQ alignment with your needs.",
    recommendedServices: [
      "Supplier Sourcing",
      "Sample Development",
      "Quality Inspection",
      "Packaging and Branding",
    ],
  },
  {
    id: "hardware-and-molds",
    title: "Hardware and Molds",
    description:
      "Dongguan is the global capital of mold making, supported by Foshan's metal fabrication cluster. Precision injection molds, die casting, CNC machining, and metal stamping serve every industry from consumer electronics to automotive.",
    icon: "⚙️",
    cities: ["Dongguan", "Foshan"],
    subcategories: [
      "Plastic injection molds",
      "Die casting and metal stamping",
      "CNC precision machining",
      "Sheet metal fabrication",
      "Custom fasteners and industrial components",
    ],
    risks: [
      "Dimensional tolerance not meeting specifications",
      "Mold steel quality substitution",
      "Mold ownership and IP control issues",
      "Surface treatment and finish defects",
    ],
    whatWeVerify:
      "Mold design review against part specifications, steel type and quality verification, dimensional inspection reports, mold trial samples, and mold ownership contract terms.",
    recommendedServices: [
      "Factory Verification",
      "Factory Audit",
      "OEM/ODM Project Management",
      "Quality Inspection",
    ],
  },
  {
    id: "furniture-and-home",
    title: "Furniture and Home Products",
    description:
      "Foshan is one of the world's largest furniture manufacturing centers, with entire districts dedicated to upholstered furniture, wood furniture, metal furniture, and home décor. Dongguan complements with contract-grade and hospitality furniture production.",
    icon: "🪑",
    cities: ["Foshan", "Dongguan"],
    subcategories: [
      "Residential furniture",
      "Office and commercial furniture",
      "Outdoor and garden furniture",
      "Home décor and accessories",
      "Mattresses and bedding",
    ],
    risks: [
      "Material grade substitution (solid wood vs. veneer, leather grade)",
      "Finish quality inconsistency across production batches",
      "Packaging inadequate for international shipping — leading to transit damage",
      "Production batch not matching approved sample quality",
    ],
    whatWeVerify:
      "Material grade and source verification, finish quality against reference samples, packaging durability for international freight, production batch consistency against golden sample.",
    recommendedServices: [
      "Supplier Sourcing",
      "Factory Audit",
      "Sample Development",
      "Quality Inspection",
    ],
  },
];
