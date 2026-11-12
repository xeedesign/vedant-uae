import logoImg from "../assets/logo.jpg";
export const BRAND = {
  name: "Vedant Ocean Container Line LLC",
  short: "Vedant",
  tagline: "Around the globe, deliver operational with excellence",
  navy: "#0A2540",
  navyDeep: "#061625",
  red: "#E22513",
  cream: "#F4F1EA",
  logoDark: logoImg,
  logoLight: logoImg,
  heroVideo:
    "https://vedantgroup.org/wp-content/uploads/2026/09/Vedant-Home-Bannar.mp4",
};

export const CONTACT_INFO = {
  phoneUAE: "+971 56 359 2427",
  phoneUAEHref: "tel:+971563592427",
  emailUAE: "mahesh@vmscontainerline.ae",
  hours: "Mon – Sat · 10am to 7pm",
  hoursShort: "MON – SAT: 10AM – 7PM",
  addressUAE:
    "404, 4th Floor, Al-Rifaa Plaza, Khalid Bin Al Waleed Road, Al Fahidi, P.O. Box. 44413, Dubai, United Arab Emirates.",
  footerAbout:
    "Vedant Ocean Container Line LLC is a global service provider for NVOCC, Freight Forwarding, Door To Door Delivery, Cross Trade solutions. We have our office in the United Arab Emirates and an international network of partners and agents.",
  bestBadge: "UAE's best NVOCC services provider",
};

export type Service = {
  slug: string;
  index: string;
  title: string;
  short: string;
  description: string;
  long: string[];
  image: string;
  icon: string;
  capabilities: string[];
  mode: string;
};

export const SERVICES: Service[] = [
  {
    slug: "nvocc",
    index: "01",
    title: "NVOCC",
    short: "Reliable NVOCC through a strong global shipping network",
    description:
      "Vedant Ocean Container Line LLC provides reliable NVOCC services through a strong global shipping network, offering flexible container solutions and efficient cargo management. We ensure secure, cost-effective, and timely transportation, backed by seamless coordination and professional logistics support.",
    long: [
      "Your Trusted NVOCC Partner. Vedant Ocean Container Line LLC makes necessary arrangements with the ship owners, charterers or shipping lines for cargo transportation under our own Bill of Lading. We also undertake all the required contracts to load cargo from the customer facility and transfer it to the gateway ports.",
      "In most cases, the delivery of goods to the consignee at the destination is also taken care of. Since we either lease or rent the space onboard ships and sell it to clients. We do the consolidation of items or sharing of container space with other parties.",
      "These Shipping lines allow us to act as a single point of contact for those small and medium-sized companies that do not require the entire container. Such an arrangement is beneficial to both the parties, i.e. the shipping line and the entrepreneur. It is a win-win situation as the shipping line doesn't have to cater to smaller orders and gets a consolidated shipment. On the bargain, the small/medium scale company enjoys a cost-effective transportation solution.",
    ],
    image:
      "https://vedantgroup.org/wp-content/uploads/2026/08/NVOCC-Freight-Forwarder-1.png",
    icon: "Ship",
    capabilities: [
      "Own Bill of Lading issuance",
      "FCL / LCL consolidation",
      "Leased onboard space at competitive rates",
      "Single point of contact for SMEs",
      "Gateway port handling & on-carriage",
    ],
    mode: "Ocean · FCL / LCL",
  },
  {
    slug: "international-freight-forwarding",
    index: "02",
    title: "International Freight Forwarding",
    short: "Simplify global cargo movement end-to-end",
    description:
      "Our international freight forwarding services simplify global cargo movement through efficient planning, documentation, and transportation management. With an extensive logistics network and customer-focused approach, we deliver reliable shipping solutions tailored to your business needs.",
    long: [
      "Vedant Ocean Container Line LLC takes pride in providing customised solutions for every shipment we receive, no matter any mode of freight they need – Air Cargo (aeroplanes), Ocean Freight (cargo ships), Rail (trains), Road (trucks).",
      "At Vedant Ocean Container Line LLC, we are committed to making the process simple by making the efforts needed to understand our patrons' business professionally. Our services are custom-made to provide flexible and integrated global freight services to create highly adaptable, reliable solutions for our customers' needs.",
    ],
    image:
      "https://vedantgroup.org/wp-content/uploads/2026/08/International-Freight-Forwarding-Vedant-1.jpg",
    icon: "Globe2",
    capabilities: [
      "Air, Ocean, Rail & Road under one roof",
      "Planning, documentation & compliance",
      "Flexible, integrated global freight",
      "Customer-centric routing",
    ],
    mode: "Air · Ocean · Rail · Road",
  },
  {
    slug: "door-to-door-delivery",
    index: "03",
    title: "Door to Door Delivery",
    short: "Every stage managed — pickup to final destination",
    description:
      "We offer comprehensive door-to-door delivery services that manage every stage of your shipment, from pickup to final destination. Our dedicated logistics team ensures safe handling, timely deliveries, and a hassle-free shipping experience.",
    long: [
      "Vedant Ocean Container Line LLC provides reliable door-to-door logistics solutions, ensuring every shipment is handled with the utmost care from pickup to final delivery. Our experienced port and transportation teams coordinate every stage of the process, with thorough planning and monitoring to ensure cargo reaches its destination safely, on time, and in excellent condition via road, rail, or sea.",
      "We offer convenient doorstep pickup at your preferred schedule and deliver customized logistics solutions that simplify supply chain management, reduce costs, and minimize transit risks. By managing the complete delivery process, we enable our customers to focus on growing their business while we ensure their consignments are delivered efficiently and reliably.",
    ],
    image:
      "https://vedantgroup.org/wp-content/uploads/2026/08/Door-to-Door-Delivery-Vedant-1.jpg",
    icon: "DoorOpen",
    capabilities: [
      "Doorstep pickup at your schedule",
      "Port + transport coordination",
      "Road, rail & sea on-carriage",
      "Planning & live monitoring",
    ],
    mode: "Pickup → Final Mile",
  },
  {
    slug: "cross-trade-services",
    index: "04",
    title: "Cross Trade Services",
    short: "Seamless cargo movement between two countries",
    description:
      "Vedant Ocean Container Line LLC specializes in Cross Trade Services, enabling seamless cargo movement between two international locations without passing through the customer's home country. Our global network and expert coordination ensure efficient, reliable, and cost-effective cross-border logistics.",
    long: [
      "Vedant Ocean Container Line LLC provides reliable Cross Trade Services, enabling cargo to be shipped directly between two countries without passing through the customer's registered country. Our experienced team manages every aspect of the shipment, including planning, documentation, customs coordination, and transportation via air, sea, or road, based on the most efficient route.",
      "Backed by a strong global network and extensive expertise in handling diverse cargo, we simplify complex international trade processes, ensuring seamless, compliant, and cost-effective cross-border logistics for our clients worldwide.",
    ],
    image:
      "https://vedantgroup.org/wp-content/uploads/2026/08/Cross-Trade-Services-1.jpg",
    icon: "ArrowLeftRight",
    capabilities: [
      "Direct country-to-country moves",
      "Planning, docs & customs coordination",
      "Air, sea or road by best route",
      "Compliant cross-border handling",
    ],
    mode: "Country → Country",
  },
  {
    slug: "custom-clearance",
    index: "05",
    title: "Custom Clearance",
    short: "Smooth import & export with fast compliance",
    description:
      "Our customs clearance services ensure smooth import and export processes by managing documentation, regulatory compliance, and customs formalities efficiently. We help minimize delays and ensure your shipments move quickly through customs.",
    long: [
      "Our customs clearance services ensure smooth import and export processes by managing documentation, regulatory compliance, and customs formalities efficiently. We help minimize delays and ensure your shipments move quickly through customs.",
      "At Vedant Ocean Container Line LLC, we are committed to making the process simple by making the efforts needed to understand our patrons' business professionally. Our services are custom-made to provide flexible and integrated global freight services to create highly adaptable, reliable solutions for our customers' needs.",
    ],
    image:
      "https://vedantgroup.org/wp-content/uploads/2026/08/Custom-Clearance-Marine-1.jpg",
    icon: "FileCheck2",
    capabilities: [
      "Import & export documentation",
      "Regulatory compliance",
      "Customs formalities & liaison",
      "Delay-free clearance",
    ],
    mode: "Compliance · Docs",
  },
  {
    slug: "road-transport",
    index: "06",
    title: "Road Transport",
    short: "Safe, reliable & timely domestic movement",
    description:
      "Our road transport services provide safe, reliable, and timely cargo movement across domestic destinations. Supported by an experienced logistics team and an efficient transportation network, we ensure every shipment reaches its destination securely and on schedule.",
    long: [
      "Our road transport services provide safe, reliable, and timely cargo movement across domestic destinations. Supported by an experienced logistics team and an efficient transportation network, we ensure every shipment reaches its destination securely and on schedule.",
      "Vedant Ocean Container Line LLC takes pride in providing customised solutions for every shipment we receive, no matter any mode of freight they need – Air Cargo (aeroplanes), Ocean Freight (cargo ships), Rail (trains), Road (trucks).",
    ],
    image:
      "https://vedantgroup.org/wp-content/uploads/2026/08/Road-Transport-1.jpg",
    icon: "Truck",
    capabilities: [
      "Domestic FTL & distribution",
      "Experienced road network",
      "Secure, on-schedule delivery",
      "First & last-mile linkage",
    ],
    mode: "Domestic · FTL",
  },
  {
    slug: "warehousing",
    index: "07",
    title: "Warehousing",
    short: "Secure storage & streamlined fulfillment",
    description:
      "Our warehousing solutions offer secure storage, efficient inventory management, and streamlined order fulfillment to support your supply chain. With professionally managed facilities and flexible storage options, we ensure your goods remain safe, organized, and ready for timely distribution.",
    long: [
      "Reliable Storage & Inventory Management. At Vedant Ocean Container Line LLC, we provide secure and efficient warehousing solutions designed to support your supply chain with reliable storage and streamlined inventory management.",
      "Our strategically located warehouses are equipped to handle a wide range of cargo, ensuring safe storage, accurate stock control, and quick order processing. With professional handling, flexible storage options, and timely dispatch, we help businesses improve operational efficiency while ensuring their goods are always ready for distribution.",
    ],
    image: "https://vedantgroup.org/wp-content/uploads/2026/08/Warhouse-1.jpg",
    icon: "Warehouse",
    capabilities: [
      "Secure, flexible storage",
      "Accurate stock control",
      "Quick order processing",
      "Timely dispatch & distribution",
    ],
    mode: "Storage · Fulfillment",
  },
  {
    slug: "cargo-insurance",
    index: "08",
    title: "Cargo Insurance",
    short: "Complete protection & peace of mind",
    description:
      "Our cargo insurance services provide comprehensive protection against loss, theft, damage, and unforeseen transit risks. With reliable coverage and dedicated claim support, we help safeguard your valuable shipments and provide complete peace of mind throughout the transportation process.",
    long: [
      "Our cargo insurance services provide comprehensive protection against loss, theft, damage, and unforeseen transit risks. With reliable coverage and dedicated claim support, we help safeguard your valuable shipments and provide complete peace of mind throughout the transportation process.",
      "At Vedant Ocean Container Line LLC, we are committed to making the process simple by making the efforts needed to understand our patrons' business professionally — with flexible and integrated protection for every mode of freight.",
    ],
    image:
      "https://vedantgroup.org/wp-content/uploads/2026/08/Cargo-Insurance-1.jpg",
    icon: "ShieldCheck",
    capabilities: [
      "Loss, theft & damage cover",
      "Transit risk protection",
      "Dedicated claim support",
      "End-to-end peace of mind",
    ],
    mode: "Cover · Claims",
  },
];

export const STATS = [
  { value: 20, suffix: "+", label: "Years of Experience", decimals: 0 },
  { value: 1350, suffix: "+", label: "Shipments Delivered", decimals: 0 },
  { value: 60, suffix: "+", label: "Countries Served", decimals: 0 },
  { value: 99.6, suffix: "%", label: "On-time Delivery", decimals: 1 },
  { value: 355, suffix: "+", label: "Clients Worldwide", decimals: 0 },
];

export const WHY_CHOOSE = [
  {
    title: "24 Hours Support",
    text: "Round-the-clock technical support — the kind of partner you only need to brief once.",
    image:
      "https://vedantgroup.org/wp-content/uploads/2026/08/Global-Container-Shipping-Logistics-1.jpg",
    tag: "Always-on",
  },
  {
    title: "Global Supply Chain",
    text: "Outstanding connectivity across the UAE, Far East, Middle East, Europe, UK, US and other major global trading hubs.",
    image:
      "https://vedantgroup.org/wp-content/uploads/2026/08/Container-Ship-at-International-Port-1.jpg",
    tag: "6 continents",
  },
  {
    title: "Shipment Tracking",
    text: "We obsess over the small details — paperwork, customs codes, port windows — so your team can focus on the big ones.",
    image:
      "https://vedantgroup.org/wp-content/uploads/2026/08/Novcc-Shipping-1.jpg",
    tag: "Full visibility",
  },
  {
    title: "Careful Handling of Valuable Goods",
    text: "Vedant ensure your goods are in safe hands — from packaging optimization to materials sourcing and complete supply chain orchestration.",
    image:
      "https://vedantgroup.org/wp-content/uploads/2026/08/Door-to-Door-Delivery-Vedant-1.jpg",
    tag: "Safe hands",
  },
];

export const CERTIFICATIONS = [
  {
    name: "ISO Certified",
    text: "International best practices, quality & continuous improvement.",
    image: "https://vedantgroup.org/wp-content/uploads/2026/08/ISO-LOGO-1.jpg",
  },
  {
    name: "MTO Registered",
    text: "Licensed Multimodal Transport Operator for global moves.",
    image: "https://vedantgroup.org/wp-content/uploads/2026/08/MTO-Logo.jpg",
  },
  {
    name: "MSME Recognised",
    text: "Recognised enterprise committed to compliant operations.",
    image: "https://vedantgroup.org/wp-content/uploads/2026/08/MSME-Logo.jpg",
  },
  {
    name: "FFI Member",
    text: "Active freight industry membership & ethical practices.",
    image: "https://vedantgroup.org/wp-content/uploads/2026/08/FFi-Logo.jpg",
  },
  {
    name: "FICCI Associated",
    text: "Connected to an apex business chamber network.",
    image: "https://vedantgroup.org/wp-content/uploads/2026/08/FICCI-Logo.jpg",
  },
  {
    name: "Global Logistics Alliance",
    text: "International network of partners and agents worldwide.",
    image:
      "https://vedantgroup.org/wp-content/uploads/2026/08/Global-Logistics-Alliance.jpg",
  },
];

export const GLOBAL_HUBS = [
  { region: "UAE", ports: "Jebel Ali · Dubai", x: 60, y: 50 },
  { region: "Far East", ports: "Singapore · Port Klang · Shanghai", x: 78, y: 50 },
  { region: "Middle East", ports: "Dammam · Jeddah · Doha", x: 58, y: 46 },
  { region: "Europe", ports: "Rotterdam · Antwerp · Hamburg", x: 48, y: 28 },
  { region: "United Kingdom", ports: "Felixstowe · Southampton", x: 44, y: 26 },
  { region: "USA", ports: "New York · Houston · LA", x: 18, y: 34 },
];

export const NAV_LINKS = [
  { label: "Home", path: "home" },
  { label: "About Us", path: "about" },
  { label: "Services", path: "services" },
  { label: "Certifications", path: "certifications" },
  { label: "Contact", path: "contact" },
];

export const HOME_COPY = {
  eyebrow: "Around the globe, deliver operational with excellence",
  heroLine1: "Worldwide",
  heroLine2: "Shipping,",
  heroLine3: "Simplified.",
  heroSub: "Optimizing logistics, sourcing, global supply solutions.",
  intro1:
    "Vedant Ocean Container Line LLC is an extension of Vedant Clearing Pvt. Ltd. — a two-decade-old logistics group that delivers comprehensive NVOCC and international freight forwarding services. From a single port in Dubai to consignees across six continents, we move your business with the calm certainty of a team that has done this thousands of times.",
  intro2:
    "We can also optimize your packaging, manage your materials sourcing, and orchestrate the complete supply chain — so you can focus on growth, not paperwork.",
  welcomeTitle: "Welcome to Vedant Ocean Container Line LLC",
  welcomeText:
    "Vedant Ocean Container Line LLC We can also optimize your packaging, manage your materials sourcing, and so much more.",
  additionalTitle: "Additional Capabilities",
  additionalText:
    "Vedant Ocean Container Line LLC is an extension of Vedant Clearing Pvt Ltd. Vedant Ocean Container Line LLC provides comprehensive services in NVOCC, International freight forwarding, taking your business around the globe.",
  whyEyebrow: "Why Choose Us",
  whyTitle: "The kind of partner you only need to brief once.",
  whyText:
    "We obsess over the small details — paperwork, customs codes, port windows — so your team can focus on the big ones.",
};

export const ABOUT_COPY = {
  eyebrow: "About Vedant",
  titleA: "Two decades.",
  titleB: "One promise:",
  titleC: "delivered.",
  leader: "Mr. Mahesh Krishna Minde",
  role: "Managing Director",
  body: "Led by Managing Director Mr. Mahesh Krishna Minde, Vedant Clearing Pvt. Ltd. and Vedant Ocean Container Line LLC have built a strong reputation in the logistics and supply chain industry. With over two decades of experience, he leads a skilled and dedicated team committed to ethical practices, flexibility, and delivering customer satisfaction on time. Vedant Ocean Container Line LLC, an extension of Vedant Clearing Pvt. Ltd., specializes in international freight forwarding and supply chain solutions, offering reliable, secure, and timely services through a strong network across the UAE, the Far East, the Middle East, Europe, the UK, the US, and other major global trade hubs.",
};
