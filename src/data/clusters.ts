export interface ManufacturingCluster {
  id: string;
  city: string;
  province: string;
  strategicRole: string;
  specialties: string[];
  description: string;
  bestFitBuyers: string[];
  commonRisks: string[];
  howWeSupport: string;
  advantages: string[];
  transportLinks: string;
}

export const clusters: ManufacturingCluster[] = [
  {
    id: "shenzhen",
    city: "Shenzhen",
    province: "Guangdong",
    strategicRole:
      "Global electronics R&D and manufacturing capital. The primary city for electronics, PCBA, smart devices, IoT hardware, and rapid prototyping.",
    specialties: [
      "Consumer electronics",
      "PCBA and SMT assembly",
      "Smart devices and IoT",
      "R&D and prototyping",
      "Mobile and telecom equipment",
    ],
    description:
      "Shenzhen is the global capital of electronics manufacturing. The Huaqiangbei electronics market supplies components to manufacturers worldwide. The ecosystem combines component sourcing, PCB fabrication, SMT assembly, and final product integration within a 50-kilometer radius. For hardware startups and electronics brands, Shenzhen offers unmatched speed from concept to prototype.",
    bestFitBuyers: [
      "Consumer electronics brands launching new products",
      "Hardware startups moving from prototype to production",
      "IoT and smart device companies needing PCBA and assembly",
      "Buyers needing rapid prototyping and NPI support",
    ],
    commonRisks: [
      "Many trading companies claim to be Shenzhen manufacturers",
      "Component substitution without buyer approval",
      "Quality variation between sample and production batches",
      "IP and design confidentiality concerns",
    ],
    howWeSupport:
      "We verify factory production lines on-site, check component sourcing records, audit QC processes, and confirm manufacturer status before you commit. Our team is based in Shenzhen and can visit factories within hours.",
    advantages: [
      "World's densest electronics supply chain",
      "Rapid prototyping and NPI capability",
      "Deep talent pool in hardware engineering",
      "Access to component markets and distributors",
    ],
    transportLinks:
      "Shenzhen Bao'an International Airport, Yantian deep-water port, 30 minutes to Hong Kong by high-speed rail",
  },
  {
    id: "dongguan",
    city: "Dongguan",
    province: "Guangdong",
    strategicRole:
      "Global mold-making capital and precision manufacturing hub. The primary city for plastic injection molds, tooling, hardware components, and product assembly.",
    specialties: [
      "Plastic injection molds and tooling",
      "Plastic and metal parts manufacturing",
      "Hardware components and fasteners",
      "Product assembly and packaging",
      "Precision machining",
    ],
    description:
      "Dongguan is the world's mold-making capital. Thousands of tooling shops and mold factories serve industries from automotive to consumer electronics. The city is also a major center for plastic injection molding, metal stamping, CNC machining, and finished product assembly. Dongguan's tooling ecosystem is unmatched in speed, cost, and capability variety.",
    bestFitBuyers: [
      "Product brands needing injection molds and plastic parts",
      "Hardware companies requiring precision metal components",
      "Buyers launching products requiring complex tooling",
      "Companies shifting production from higher-cost regions",
    ],
    commonRisks: [
      "Mold steel quality substitution to reduce cost",
      "Tolerance issues in precision components",
      "Mold ownership and IP control ambiguity",
      "Surface finish and treatment quality variation",
    ],
    howWeSupport:
      "We audit mold shops and tooling suppliers, verify steel quality and equipment condition, track mold development milestones, and ensure mold ownership terms are clear in the contract.",
    advantages: [
      "Unmatched mold-making expertise and capacity",
      "Competitive pricing for tooling and molded parts",
      "Strong integration with Shenzhen's electronics ecosystem",
      "Large-scale assembly operations for global brands",
    ],
    transportLinks:
      "45 minutes to Shenzhen by road, direct expressway to Guangzhou, Humen port for river freight",
  },
  {
    id: "guangzhou",
    city: "Guangzhou",
    province: "Guangdong",
    strategicRole:
      "Southern China's commercial and trade capital. The primary city for packaging, printing, beauty products, apparel, wholesale markets, and the Canton Fair.",
    specialties: [
      "Packaging and printing",
      "Beauty and personal care products",
      "Apparel and textiles",
      "Wholesale markets and trade",
      "Leather goods and bags",
    ],
    description:
      "Guangzhou is southern China's commercial capital and home to the Canton Fair — China's largest trade fair. The city hosts massive wholesale markets for nearly every consumer product category and has a deep packaging, printing, beauty product, and apparel manufacturing base. For packaging buyers, Guangzhou offers the widest range of material, print, and finishing options in the PRD.",
    bestFitBuyers: [
      "Brands needing custom packaging and printing at scale",
      "Beauty and personal care product companies",
      "Buyers attending the Canton Fair needing factory verification",
      "Companies sourcing across multiple product categories",
    ],
    commonRisks: [
      "Trading companies dominating wholesale markets",
      "Print color and finishing quality inconsistency",
      "Material substitution in packaging production",
      "MOQ inflation by intermediaries",
    ],
    howWeSupport:
      "We verify packaging factories and printing facilities on-site, check print samples against brand standards, audit beauty product manufacturers for regulatory compliance, and help buyers navigate wholesale markets to identify real manufacturers.",
    advantages: [
      "Largest wholesale trade ecosystem in southern China",
      "World-class packaging and printing industry",
      "Canton Fair access for supplier discovery",
      "Strong beauty and personal care manufacturing cluster",
    ],
    transportLinks:
      "Guangzhou Baiyun International Airport, Nansha deep-water port, Guangzhou-Shenzhen-Hong Kong Express Rail Link",
  },
  {
    id: "foshan",
    city: "Foshan",
    province: "Guangdong",
    strategicRole:
      "Global furniture manufacturing center and building materials hub. The primary city for residential and commercial furniture, ceramics, home products, and small appliances.",
    specialties: [
      "Furniture manufacturing (all categories)",
      "Building materials and ceramics",
      "Aluminum profiles and doors/windows",
      "Home products and décor",
      "Small kitchen and home appliances",
    ],
    description:
      "Foshan is one of the world's largest furniture manufacturing centers, with entire districts dedicated to upholstered furniture, wood furniture, metal furniture, and home décor. The city also leads in ceramics, tiles, aluminum extrusions, and building materials — making it essential for home and construction product sourcing.",
    bestFitBuyers: [
      "Furniture brands and retailers sourcing residential or commercial furniture",
      "Home improvement and building materials companies",
      "Small appliance brands targeting kitchen and home categories",
      "Interior design and hospitality procurement teams",
    ],
    commonRisks: [
      "Material grade substitution (solid wood vs. engineered wood, leather quality)",
      "Finish consistency issues across production batches",
      "Inadequate packaging for international furniture shipping",
      "Production batch not matching showroom or sample quality",
    ],
    howWeSupport:
      "We audit furniture factories for material sourcing and finish quality, verify production batch consistency, check packaging durability for international freight, and inspect goods before shipment.",
    advantages: [
      "Largest furniture manufacturing cluster in the world",
      "Deep supply chain for home improvement products",
      "Competitive pricing on ceramics and building materials",
      "Strong export infrastructure and experience",
    ],
    transportLinks:
      "Foshan Shadi Airport, 30 minutes to Guangzhou South Railway Station, direct highway to Guangzhou Baiyun Airport",
  },
  {
    id: "zhongshan",
    city: "Zhongshan",
    province: "Guangdong",
    strategicRole:
      "Global LED lighting manufacturing capital. The primary city for LED lighting products, lighting fixtures, and small household appliances.",
    specialties: [
      "LED lighting and fixtures",
      "Small household appliances",
      "Lighting components and drivers",
      "Locks and hardware",
      "Electrical components",
    ],
    description:
      "Zhongshan's Guzhen township is known as the 'Lighting Capital of China,' producing an estimated 70% of the world's LED lighting products. The supply chain from LED chips, drivers, and housings to finished fixtures is vertically integrated. The city also has a strong cluster of small appliance manufacturers serving global brands and retailers.",
    bestFitBuyers: [
      "LED lighting brands and distributors",
      "Commercial and architectural lighting buyers",
      "Small appliance brands and importers",
      "Buyers seeking cost-competitive lighting manufacturers",
    ],
    commonRisks: [
      "LED driver quality and reliability issues",
      "Lumen output and color temperature claims not matching actual performance",
      "Heat dissipation design affecting product lifespan",
      "Certification documentation gaps (UL, CE, SAA, etc.)",
    ],
    howWeSupport:
      "We verify LED driver certification and testing, arrange integrating sphere and photometric testing, audit production line QC processes, and inspect pre-shipment batches for color consistency and build quality.",
    advantages: [
      "World's largest concentration of LED lighting manufacturers",
      "Vertical integration from components to finished fixtures",
      "Established export quality standards for lighting",
      "Strong small appliance manufacturing base nearby",
    ],
    transportLinks:
      "1.5 hours to Shenzhen by road, Zhongshan port for coastal shipping, Shenzhen-Zhongshan Bridge improving access",
  },
  {
    id: "huizhou",
    city: "Huizhou",
    province: "Guangdong",
    strategicRole:
      "Emerging manufacturing powerhouse for battery technology, audio equipment, and electronics assembly. A cost-competitive alternative to Shenzhen and Dongguan for selected product categories.",
    specialties: [
      "Battery and power systems",
      "Audio equipment manufacturing",
      "Electronics assembly",
      "New energy and EV components",
      "Automotive electronics",
    ],
    description:
      "Huizhou is a growing manufacturing center with strengths in battery technology, audio equipment, and electronics assembly. Several global battery and audio brands operate major production facilities here. For buyers, Huizhou offers cost advantages compared to Shenzhen while maintaining reasonable proximity to the core PRD supply chain.",
    bestFitBuyers: [
      "Battery and power system buyers",
      "Audio equipment brands and distributors",
      "Companies seeking cost-competitive electronics assembly",
      "New energy and automotive electronics buyers",
    ],
    commonRisks: [
      "Fewer experienced export-oriented factories compared to Shenzhen",
      "Supply chain depth still developing for some categories",
      "Factory capability claims requiring more thorough verification",
      "Logistics and freight coordination less mature than Shenzhen",
    ],
    howWeSupport:
      "We verify factory capabilities on-site with special attention to export experience, audit quality systems, check battery certification and safety testing documentation, and coordinate logistics from Huizhou to major PRD ports.",
    advantages: [
      "Growing battery and new energy manufacturing cluster",
      "Cost-competitive compared to Shenzhen and Dongguan",
      "Major audio equipment manufacturing base with global brand experience",
      "Developing automotive electronics supply chain",
    ],
    transportLinks:
      "Huizhou Pingtan Airport, 1 hour to Shenzhen by high-speed rail, Huizhou port for container shipping",
  },
];
