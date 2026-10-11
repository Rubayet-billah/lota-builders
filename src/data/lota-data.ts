/**
 * Lota Builders & Co Ltd - Authentic Business Data & Architectural Specifications
 * 
 * Styled for the "Architron" architectural aesthetic:
 * Clean structural grid lines, technical metadata, monochrome clarity, 
 * precision metrics, and Birmingham heritage.
 */

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  badgeCode: string;
  description: string;
}

export interface OfficeLocation {
  type: 'Headquarters' | 'Operational Yard' | 'Site Depot';
  addressLine1: string;
  district: string;
  city: string;
  postcode?: string;
  coordinatesSummary?: string;
}

export interface CompanyIdentity {
  name: string;
  shortName: string;
  established: number;
  experienceYearsLabel: string;
  companyNumber?: string;
  tagline: string;
  summary: string;
  headquarters: OfficeLocation;
  operations: OfficeLocation;
  phones: {
    primaryLandline: string;
    mobileDirect: string;
    formatted: string[];
  };
  email: string;
  workingHours: string;
  serviceAreas: string[];
  certifications: Certification[];
}

export interface KeyMetric {
  id: string;
  code: string;
  value: string;
  label: string;
  subtext: string;
  highlight?: boolean;
}

export interface ServiceDeliverable {
  title: string;
  detail: string;
}

export interface CoreService {
  id: string;
  index: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  technicalScope: string[];
  deliverables: ServiceDeliverable[];
  complianceNotes: string;
}

export interface ProjectSpecification {
  key: string;
  value: string;
}

export interface FeaturedProject {
  id: string;
  code: string;
  title: string;
  category: 'Faith & Public' | 'Commercial Build' | 'Residential';
  location: string;
  yearCompleted: string;
  clientType: string;
  scopeSummary: string[];
  description: string;
  structuralHighlights: string[];
  specifications: ProjectSpecification[];
  featuredImagePlaceholderText: string;
}

export interface ProcessStage {
  step: string;
  title: string;
  timeframe: string;
  description: string;
  protocols: string[];
}

export interface FaqItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export interface NavigationLink {
  label: string;
  href: string;
  badge?: string;
}

// -----------------------------------------------------------------------------
// COMPANY IDENTITY DATA
// -----------------------------------------------------------------------------

export const COMPANY_IDENTITY: CompanyIdentity = {
  name: "Lota Builders & Co Ltd",
  shortName: "Lota Builders",
  established: 2000,
  experienceYearsLabel: "25+ Years in Operation",
  tagline: "Commercial, Faith-Assembly & High-End Residential Structural Contractors",
  summary:
    "Established in 2000, Lota Builders & Co Ltd provides integrated design-and-build, heavy structural engineering, places of worship construction, and prime residential developments across Kings Heath, Moseley, and the wider West Midlands.",
  headquarters: {
    type: "Headquarters",
    addressLine1: "114 Silver Street",
    district: "Kings Heath",
    city: "Birmingham",
    postcode: "B14 7QT",
    coordinatesSummary: "Kings Heath Central / High Street Corridor",
  },
  operations: {
    type: "Operational Yard",
    addressLine1: "Moor Green Lane",
    district: "Moseley",
    city: "Birmingham",
    coordinatesSummary: "Moseley & Moor Green Logistics Base",
  },
  phones: {
    primaryLandline: "0121 449 8200",
    mobileDirect: "07973 727 774",
    formatted: ["0121 449 8200", "07973 727 774"],
  },
  email: "info@lotabuilders.co.uk",
  workingHours: "Monday – Friday: 07:30 – 17:30 | Saturday Site Inspections by Appointment",
  serviceAreas: [
    "Kings Heath",
    "Moseley",
    "Edgbaston",
    "Harborne",
    "Solihull",
    "Birmingham Central",
    "West Midlands Metropolitan Area",
  ],
  certifications: [
    {
      id: "niceic",
      name: "NICEIC Approved Contractor",
      issuer: "National Inspection Council for Electrical Installation Contracting",
      badgeCode: "NICEIC-AC",
      description: "Full compliance with BS 7671 standards, industrial 3-phase and commercial electrical certification.",
    },
    {
      id: "gas-safe",
      name: "Gas Safe Registered",
      issuer: "Gas Safe Register UK",
      badgeCode: "GAS-SAFE-REG",
      description: "Accredited commercial and residential plant room, gas works, and hydronic heating infrastructure.",
    },
    {
      id: "council-compliance",
      name: "Local Council Building Control Compliance",
      issuer: "Birmingham City Council & West Midlands Local Authorities",
      badgeCode: "BCC-COMPLIANT",
      description: "End-to-end plan approvals, structural calculations sign-off, and statutory completion certification.",
    },
    {
      id: "jct-standard",
      name: "JCT Contract Adherent",
      issuer: "Joint Contracts Tribunal",
      badgeCode: "JCT-STANDARDS",
      description: "Delivery under transparent Minor Works, Intermediate, and Standard Design & Build contractual frameworks.",
    },
  ],
};

// -----------------------------------------------------------------------------
// KEY METRICS / STATS STRIP (Architron Technical Grid Style)
// -----------------------------------------------------------------------------

export const KEY_METRICS: KeyMetric[] = [
  {
    id: "years-exp",
    code: "STAT // 01",
    value: "25+",
    label: "Years Serving the West Midlands",
    subtext: "Continuous regional operations founded in Birmingham in 2000.",
  },
  {
    id: "schemes-delivered",
    code: "STAT // 02",
    value: "150+",
    label: "Commercial & Faith Schemes Handled",
    subtext: "High-capacity civic, community halls, retail, and multi-unit projects.",
  },
  {
    id: "sign-off-rate",
    code: "STAT // 03",
    value: "100%",
    label: "In-House Architectural & Build Sign-Off",
    subtext: "Statutory Building Control and structural calculations signed off without third-party delay.",
  },
  {
    id: "surprise-costs",
    code: "STAT // 04",
    value: "£0",
    label: "Surprise Costs (Fixed JCT Contract Delivery)",
    subtext: "Rigorous pre-construction bills of quantities and transparent index-locked pricing.",
    highlight: true,
  },
];

// -----------------------------------------------------------------------------
// CORE SERVICES (Detailed & Technical)
// -----------------------------------------------------------------------------

export const CORE_SERVICES: CoreService[] = [
  {
    id: "design-and-build",
    index: "01",
    title: "Design & Build Schemes",
    category: "Full Turnkey Contracting",
    tagline: "Single-source accountability from architectural drafting to handover.",
    description:
      "Full turnkey management from planning permission, structural steel calculations, and building control sign-off to completion. We unify architectural design, engineering analysis, sub-structure preparation, and superstructure erection under a single cohesive contract.",
    technicalScope: [
      "RIBA Stage 1 through Stage 6 end-to-end principal contractor delivery",
      "Structural steel beam sizing, padstone calculations, and localized foundation design",
      "Birmingham City Council planning portal submissions and lawful development certs",
      "Building Control statutory inspections, air permeability, and acoustic compliance",
    ],
    deliverables: [
      {
        title: "Statutory & Planning Approvals",
        detail: "Full liaison with Birmingham City Council planning officers, conservation zones, and tree preservation orders.",
      },
      {
        title: "Structural Engineering Dossier",
        detail: "Fabrication-ready steel drawings, load calculations, and connection details signed off by certified engineers.",
      },
      {
        title: "Turnkey Site Execution",
        detail: "CDM 2015 compliant site management, sequenced groundworks, MEP coordination, and final commission.",
      },
    ],
    complianceNotes: "Standard Building Contract / JCT Design & Build. Fully insured with comprehensive Contractors All Risks.",
  },
  {
    id: "faith-and-community",
    index: "02",
    title: "Places of Worship & Community Halls",
    category: "Civic & Faith Infrastructure",
    tagline: "High-volume assembly engineering with cultural and committee sensitivity.",
    description:
      "Specialized construction of temples, gurdwaras, and community assemblies with custom stonework, high capacity, and committee tender compliance. Built to balance long-span architectural grandeur, complex ventilation, and acoustic isolation for multi-generational community longevity.",
    technicalScope: [
      "Large-span clear space engineering with portal frames and bespoke structural trusses",
      "Architectural ashlar stone facade carving, marble flooring, and ornate dome reinforcement",
      "Commercial-scale ventilation (MVHR), acoustic damping, and multi-zone heating systems",
      "Multi-committee governance reporting, milestone transparent audits, and public safety protocols",
    ],
    deliverables: [
      {
        title: "Committee Presentation Packs",
        detail: "Granular cost breakdowns, 3D structural visualisations, and staged funding delivery schedules for executive boards.",
      },
      {
        title: "Bespoke Cultural Stonework",
        detail: "Sourcing and precision dry-jointing of ceremonial stonework, carved balustrades, and monolithic archways.",
      },
      {
        title: "High-Occupancy Fire & Egress",
        detail: "Compliant egress engineering, panic hardware, disabled refuge points, and heavy-duty smoke evacuation.",
      },
    ],
    complianceNotes: "Compliant with non-domestic public assembly health & safety, Equality Act (DDA accessibility), and committee tender covenants.",
  },
  {
    id: "commercial-developments",
    index: "03",
    title: "Commercial Developments",
    category: "Multi-Unit & Mixed-Use Construction",
    tagline: "Commercial asset value creation across urban Birmingham hubs.",
    description:
      "Retail units, multi-unit apartment developments, and industrial refurbishments across Birmingham. Engineered for high yield, rigorous thermal performance, durable commercial tenant fit-outs, and rapid handover timelines.",
    technicalScope: [
      "Groundworks, reinforced concrete slab foundations, and retaining earth structures",
      "Multi-storey light-gauge steel (SFS) and traditional brick & block envelope framing",
      "Full MEP containment, 3-phase power distribution, and commercial sub-metering infrastructure",
      "Fit-outs compliant with Approved Document Part B (Fire) and Part E (Sound Insulation)",
    ],
    deliverables: [
      {
        title: "Multi-Unit Shell & Core",
        detail: "Robust envelope construction with weatherproof sign-off and partition layouts ready for service runs.",
      },
      {
        title: "High-Traffic Commercial Fit-Out",
        detail: "Heavy-duty commercial flooring, security shutter integration, and compliant DDA retail access.",
      },
      {
        title: "Asset Sign-Off File",
        detail: "Complete Health and Safety File (O&M manuals, as-built drawings, warranties, test certificates).",
      },
    ],
    complianceNotes: "Fully compliant with BREEAM efficiency benchmarks, JCT Intermediate contracts, and CDM Principal Contractor duties.",
  },
  {
    id: "high-end-residential",
    index: "04",
    title: "High-End Residential Extensions",
    category: "Bespoke Residential Engineering",
    tagline: "Architectural precision and structural transformation for character properties.",
    description:
      "Double-storey expansions, structural knock-throughs, and luxury finishes in Moseley and Kings Heath. Specialized in blending Victorian and Edwardian architectural fabric with modern cantilevered glass, subterranean steel, and open-plan living.",
    technicalScope: [
      "Precision structural knock-throughs with temporary needle shoring and concealed steel flitch beams",
      "Double-storey rear & side infill extensions with seamless floor-to-ceiling architectural glazing",
      "Underfloor heating manifold integration, wet room uncoupling membranes, and high-efficiency heat pumps",
      "Heritage conservation matching: bespoke brick tinting, lime mortar pointing, and decorative timber rafter horns",
    ],
    deliverables: [
      {
        title: "Structural Knock-Through Engineering",
        detail: "Flush ceiling steel installation eliminating downstands for uninterrupted continuous spatial flow.",
      },
      {
        title: "High-Performance Thermal Envelopes",
        detail: "Warm roof construction, zinc or slate finish, airtight membrane detailing exceeding Part L requirements.",
      },
      {
        title: "Architectural Joinery & Finishing",
        detail: "Custom shadow-gap skirting, concealed pocket doors, bespoke cabinetry, and fine stonework surfaces.",
      },
    ],
    complianceNotes: "Party Wall Act 1996 compliance notices, full architectural detailing, and dedicated homeowner liaison.",
  },
];

// -----------------------------------------------------------------------------
// FEATURED PROJECTS / CASE STUDIES
// -----------------------------------------------------------------------------

export const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    id: "project-01",
    code: "PRJ // 01",
    title: "Community Assembly & Temple Extension",
    category: "Faith & Public",
    location: "West Midlands",
    yearCompleted: "2024",
    clientType: "Faith Trust & Building Committee",
    scopeSummary: ["Structural Steel", "Stone Facade", "Turnkey", "MVHR Ventilation"],
    description:
      "A flagship civic expansion engineered to double prayer hall capacity while introducing a hand-carved natural stone frontage. We engineered a 22-metre clear-span portal frame with zero interior columns, ensuring unimpeded sightlines, integrated sub-floor heating, and bespoke stone work sourced to match traditional iconography.",
    structuralHighlights: [
      "22m clear-span fabricated steel portal frame eliminating load-bearing interior pillars",
      "Bespoke carved ashlar stone elevation with seismic restraint ties and cavity thermal barrier",
      "Commercial acoustic baffles and concealed four-pipe fan coil ventilation system",
      "Delivered on schedule through staged phased zoning without halting weekend community gatherings",
    ],
    specifications: [
      { key: "Footprint Expansion", value: "640 sq m" },
      { key: "Assembly Capacity", value: "850+ Congregants" },
      { key: "Structural Steel", value: "38 Metric Tonnes Fabricated" },
      { key: "Contract Type", value: "JCT Design & Build Framework" },
      { key: "Sign-Off Authority", value: "Approved Inspector & Fire Authority" },
    ],
    featuredImagePlaceholderText: "Community Temple & Assembly Hall West Midlands",
  },
  {
    id: "project-02",
    code: "PRJ // 02",
    title: "Multi-Unit Residential Development",
    category: "Commercial Build",
    location: "Kings Heath, Birmingham",
    yearCompleted: "2023",
    clientType: "Private Property Syndicate",
    scopeSummary: ["Groundworks", "Complete Fit-Out", "SFS Framing", "Acoustic Part E"],
    description:
      "Urban regeneration scheme on a constrained brownfield infill site in Kings Heath. Orchestrated from bulk earthworks, sheet piling, and drainage diversion through to 8 luxury residential rental apartments. Features high acoustic insulation between floors and a contemporary dark-zinc and buff-brick exterior envelope.",
    structuralHighlights: [
      "Rigorous deep-strip foundation design factoring in historical Birmingham soil conditions",
      "Robust acoustic separating floors achieving +7dB above standard Building Regs Part E",
      "Smart-metered 3-phase electrical backbone with communal solar PV battery tie-in",
      "Zero reportable HSE incidents across 48 weeks of tight urban highway delivery",
    ],
    specifications: [
      { key: "Scope", value: "8 Apartments across 3 Storeys" },
      { key: "Ground Footprint", value: "480 sq m Gross Internal Area" },
      { key: "Thermal Rating", value: "EPC Rating A / High B Throughout" },
      { key: "Contract Type", value: "Fixed-Sum JCT Intermediate Form" },
      { key: "Turnaround", value: "48 Weeks Groundworks to Keys" },
    ],
    featuredImagePlaceholderText: "Kings Heath Multi-Unit Contemporary Apartments",
  },
  {
    id: "project-03",
    code: "PRJ // 03",
    title: "Heritage Residential Renovation & Kitchen Suite",
    category: "Residential",
    location: "Moseley, Birmingham",
    yearCompleted: "2024",
    clientType: "Private Homeowner",
    scopeSummary: ["Period Joinery", "Structural Remodel", "Cantilevered Glazing", "Conservation Zone"],
    description:
      "A sensitive transformation of an Edwardian villa situated within the protected Moseley Conservation Area. We executed an 8.5-metre structural knock-through utilizing twin spliced steel beams recessed flush into the ceiling void, opening the rear into an expansive light-filled kitchen, terrace, and bespoke pantry.",
    structuralHighlights: [
      "Recessed spliced steel box-frame structure supporting two floors of heritage brickwork above",
      "Custom timber-frame double glazed sash windows meeting conservation officer specifications",
      "Polished concrete floor with hydronic underfloor heating zones and movement joints",
      "Restoration of original plaster cornices and hand-turned banister spindles by master joiners",
    ],
    specifications: [
      { key: "Floor Area Remodeled", value: "210 sq m" },
      { key: "Glass Aperture", value: "8.5m Flush Threshold Slider" },
      { key: "Heritage Status", value: "Moseley Conservation Area Approved" },
      { key: "Contract Type", value: "JCT Minor Works Building Contract" },
      { key: "Client Handover", value: "100% Fixed Price, Nil Cost Variation" },
    ],
    featuredImagePlaceholderText: "Moseley Edwardian Heritage Renovation & Kitchen",
  },
];

// -----------------------------------------------------------------------------
// ARCHITECTURAL DELIVERY PROCESS (Architron Step Progression)
// -----------------------------------------------------------------------------

export const PROCESS_STAGES: ProcessStage[] = [
  {
    step: "01",
    title: "Structural Survey & Feasibility",
    timeframe: "Week 01 – 02",
    description:
      "Comprehensive site measurement, ground condition assessments, laser scanning, and identification of load-bearing pathways.",
    protocols: [
      "Soil bearing capacity testing & trial pit checks",
      "Existing drainage camera surveys & Thames/Severn Trent asset mapping",
      "Initial feasibility review against permitted development or local planning limits",
    ],
  },
  {
    step: "02",
    title: "Engineering Specs & Planning",
    timeframe: "Week 03 – 05",
    description:
      "Preparation of steel beam calculations, architectural layout drawings, and submission of statutory documents to Birmingham City Council.",
    protocols: [
      "Calculation sheets stamped by chartered structural engineers",
      "Submissions for full plans building control approval",
      "Preparation of fixed-scope Schedule of Works and JCT contracts",
    ],
  },
  {
    step: "03",
    title: "Precision Build & Supervision",
    timeframe: "Programmed Timeline",
    description:
      "Site setup under CDM 2015 regulations. Sequential execution of groundworks, steel erection, masonry, and mechanical/electrical containment.",
    protocols: [
      "Designated on-site project foreman and daily progress logging",
      "Staged Building Control officer inspections at trench, steel, and insulation milestones",
      "Weekly transparent cost tracking against milestones",
    ],
  },
  {
    step: "04",
    title: "Testing, Commissioning & Handover",
    timeframe: "Final Milestone",
    description:
      "Rigorous pre-handover snagging, electrical certification, gas commissioning, and formal handover of the Building Control Completion Certificate.",
    protocols: [
      "NICEIC electrical installation condition report (EICR)",
      "Gas Safe boiler and gas service pressure test certification",
      "Statutory Birmingham City Council Building Control Completion Certificate",
    ],
  },
];

// -----------------------------------------------------------------------------
// FAQS (Commercial, Faith Committees, and High-End Residential)
// -----------------------------------------------------------------------------

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: "faq-01",
    category: "Contracting & Pricing",
    question: "How do you guarantee £0 surprise costs on major projects?",
    answer:
      "We operate primarily on JCT (Joint Contracts Tribunal) fixed-price contracts with comprehensive pre-construction bills of quantities. Before work commences, every structural beam, cubic metre of concrete, and mechanical specification is priced transparently. Variations only occur if you explicitly request an alteration in specification during the build.",
  },
  {
    id: "faq-02",
    category: "Committees & Faith Schemes",
    question: "Do you accommodate committee approvals and phased funding for faith buildings?",
    answer:
      "Yes. Over 25 years we have built gurdwaras, temples, and community assembly halls across the West Midlands. We are accustomed to presenting to executive committees, providing transparent milestone valuations, and accommodating staged procurement schedules that match community donor milestones.",
  },
  {
    id: "faq-03",
    category: "Building Control & Council",
    question: "Do you handle planning permission and Birmingham Building Control directly?",
    answer:
      "Absolutely. We manage the entire statutory cycle in-house: from initial architectural CAD drawings, structural calculations, and application submission to arranging site visits with council or approved inspectors through to issuing the final Completion Certificate.",
  },
  {
    id: "faq-04",
    category: "Heritage & Conservation",
    question: "Can you work in Conservation Areas like Moseley and Edgbaston?",
    answer:
      "Yes. A significant proportion of our residential work is in heritage locations such as Moseley, Kings Heath, and Edgbaston. We handle conservation officer inquiries, tree protection plans (BS 5837), lime mortar requirements, and period-accurate architectural joinery.",
  },
];

// -----------------------------------------------------------------------------
// NAVIGATION LINKS
// -----------------------------------------------------------------------------

export const NAVIGATION_LINKS: NavigationLink[] = [
  { label: "Overview", href: "#overview" },
  { label: "Capabilities", href: "#services" },
  { label: "Specs & Projects", href: "#projects", badge: "03 Case Studies" },
  { label: "Methodology", href: "#process" },
  { label: "Credentials", href: "#credentials" },
  { label: "Contact", href: "#contact" },
];

// -----------------------------------------------------------------------------
// DEFAULT EXPORT (Umbrella Object)
// -----------------------------------------------------------------------------

export const lotaData = {
  company: COMPANY_IDENTITY,
  metrics: KEY_METRICS,
  services: CORE_SERVICES,
  projects: FEATURED_PROJECTS,
  process: PROCESS_STAGES,
  faq: FAQ_ITEMS,
  navigation: NAVIGATION_LINKS,
} as const;

export default lotaData;
