// ──────────────────────────────────────────────────────────────
// Site-wide constants for Velani Metal Industries
// ──────────────────────────────────────────────────────────────

export const SITE = {
  name: 'Velani Metal Industries',
  domain: 'https://velani.in',
  tagline: 'Precision CNC Machining & Industrial Components',
  phone: '+91 92272 80524',
  phoneRaw: '919227280524',
  email: 'viral@velani.in',
  whatsappLink: 'https://wa.me/919227280524',
  address: {
    line1: '4/A, Sardar Patel Industrial Estate,',
    line2: 'B/H Gujarat Petrol Pump, Narol - Vatva Rd,',
    line3: 'Narol, Ahmedabad – 382405,',
    line4: 'Gujarat, India.',
    full: '4/A, Sardar Patel Industrial Estate, B/H Gujarat Petrol Pump, Narol - Vatva Rd, Ahmedabad, Gujarat 382405, India.',
  },
  mapsEmbedUrl:
    'https://maps.google.com/maps?q=VELANI+METAL+INDUSTRIES%2C+4%2FA+Sardar+Patel+Industrial+Estate%2C+Narol+-+Vatva+Rd%2C+Ahmedabad%2C+Gujarat+382405&t=&z=16&ie=UTF8&iwloc=&output=embed',
  mapsDirectUrl:
    'https://maps.app.goo.gl/L1mk8mSUviqUjU9m6',
} as const;

export const SITE_IMAGES = {
  hero: '/images/hero/hero-cnc-shop.webp',
  precisionEngineering: '/images/about/precision-engineering.webp',
  jobWork: '/images/services/cnc-job-work.webp',
  qualityInspection: '/images/about/quality-inspection.webp',
  workshopOverview: '/images/hero/workshop-overview.webp',
  founder: '/images/about/founder.webp',
  leadership: '/images/about/viral-velani.webp',
} as const;

export const COMPANY_HERITAGE = {
  establishedYear: 1980,
  founder: {
    name: 'Praful Velani',
    qualifications: 'B.E. (Mechanical & Electrical)',
    role: 'Founder',
    bio: 'Established the business in 1980 in Vatva, Ahmedabad, laying a strong foundation of engineering rigor, technical craftsmanship, and industrial component manufacturing.',
    image: '/images/about/founder.webp',
  },
  currentLeadership: {
    name: 'Viral Velani',
    qualifications: 'B.E. (Mechanical), MBA',
    role: 'Managing Director / Second Generation Leadership',
    bio: 'Leading the company into modern precision CNC machining, advanced turning, milling operations, and tailored industrial component job work for diverse engineering sectors.',
    image: '/images/about/viral-velani.webp',
  },
};

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about/' },
  { label: 'Products & Services', href: '/products-services/' },
  { label: 'Contact', href: '/contact/' },
] as const;

// ──────────────────────────────────────────────────────────────
// Core capabilities / services
// ──────────────────────────────────────────────────────────────
export interface Capability {
  title: string;
  description: string;
  icon: string;
  image: string;
}

export const CAPABILITIES: Capability[] = [
  {
    title: 'CNC Turning',
    description:
      'Precision CNC turning for cylindrical and turned components manufactured according to required dimensions, drawings and application specifications.',
    icon: '⚙️',
    image: '/images/services/cnc-turning.webp',
  },
  {
    title: 'CNC Milling',
    description:
      'CNC milling for precision components, profiles, slots, pockets and complex machined geometries.',
    icon: '🔩',
    image: '/images/services/cnc-milling.webp',
  },
  {
    title: 'Precision Machining',
    description:
      'Precision machining for industrial components requiring dimensional accuracy, consistent finishing and reliable manufacturing.',
    icon: '📐',
    image: '/images/services/precision-machining.webp',
  },
  {
    title: 'Custom Component Manufacturing',
    description:
      'Custom manufacturing based on customer drawings, samples, dimensions and technical requirements.',
    icon: '🛠️',
    image: '/images/services/custom-components.webp',
  },
];

// ──────────────────────────────────────────────────────────────
// Products (all mapped to /images/products/*.webp)
// ──────────────────────────────────────────────────────────────
export interface Product {
  name: string;
  slug: string;
  description: string;
  application: string;
  category: 'pulleys' | 'machined' | 'elevator' | 'transmission' | 'custom';
  image: string;
}

export const PRODUCTS: Product[] = [
  {
    name: 'V Groove Pulleys',
    slug: 'v-groove-pulleys',
    description:
      'V groove pulleys for belt-driven power transmission systems. Manufactured with precision groove profiles for reliable belt engagement and smooth operation.',
    application: 'Power transmission, conveyor drives, industrial machinery',
    category: 'pulleys',
    image: '/images/products/v-groove-pulleys.webp',
  },
  {
    name: 'Flat Belt Pulleys',
    slug: 'flat-belt-pulleys',
    description:
      'Flat belt pulleys designed for flat belt drive applications. Machined with accurate crown profiles and balanced construction.',
    application: 'Textile machinery, material handling, general engineering',
    category: 'pulleys',
    image: '/images/products/flat-belt-pulleys.webp',
  },
  {
    name: 'Poly-V Pulleys',
    slug: 'poly-v-pulleys',
    description:
      'Poly-V (multi-ribbed) pulleys for compact, high-speed power transmission applications requiring consistent belt tracking.',
    application: 'Automotive accessories, HVAC systems, industrial drives',
    category: 'pulleys',
    image: '/images/products/poly-v-pulleys.webp',
  },
  {
    name: 'Taper Lock Pulleys',
    slug: 'taper-lock-pulleys',
    description:
      'Taper lock pulleys featuring taper lock bush mounting for easy installation, removal and re-positioning on shafts.',
    application: 'Industrial drives, conveyors, processing equipment',
    category: 'pulleys',
    image: '/images/products/taper-lock-pulleys.webp',
  },
  {
    name: 'Elevator Pulleys',
    slug: 'elevator-pulleys',
    description:
      'Pulleys engineered for elevator and lift systems. Manufactured for reliable operation in vertical transportation applications.',
    application: 'Passenger elevators, goods lifts, material hoists',
    category: 'elevator',
    image: '/images/products/elevator-pulleys.webp',
  },
  {
    name: 'Transmission Shafts',
    slug: 'transmission-shafts',
    description:
      'Precision machined transmission shafts for power transmission and rotary motion applications. Manufactured to required shaft dimensions and tolerances.',
    application: 'Industrial gearboxes, power transmission, rotating equipment',
    category: 'transmission',
    image: '/images/products/transmission-shafts.webp',
  },
  {
    name: 'CAM Components',
    slug: 'cam-components',
    description:
      'CNC machined CAM profiles and components for motion conversion applications. Manufactured according to required cam profiles and specifications.',
    application: 'Packaging machinery, textile equipment, automation systems',
    category: 'custom',
    image: '/images/products/cam-components.webp',
  },
  {
    name: 'Pillow / Bearing Blocks',
    slug: 'pillow-bearing-blocks',
    description:
      'Machined pillow blocks and bearing housings for shaft support applications. Precision bored to accommodate standard bearing sizes.',
    application: 'Conveyor systems, rotating shafts, industrial equipment',
    category: 'custom',
    image: '/images/products/pillow-bearing-blocks.webp',
  },
  {
    name: 'Taper Lock Bushes',
    slug: 'taper-lock-bushes',
    description:
      'Taper lock bushes for secure shaft-to-hub connections. Machined with precision taper for reliable clamping and easy installation.',
    application: 'Pulley mounting, sprocket mounting, coupling connections',
    category: 'transmission',
    image: '/images/products/taper-lock-bushes.webp',
  },
  {
    name: 'Tube Mill Parts',
    slug: 'tube-mill-parts',
    description:
      'Precision machined components for tube mill and pipe manufacturing equipment. Manufactured to application-specific requirements.',
    application: 'Tube mills, pipe manufacturing, steel processing',
    category: 'custom',
    image: '/images/products/tube-mill-parts.webp',
  },
  {
    name: 'CNC Turned Parts',
    slug: 'cnc-turned-parts',
    description:
      'Precision CNC turned components manufactured on CNC turning centres. Cylindrical parts, bushings, spacers, adapters and custom turned profiles.',
    application: 'General engineering, machinery components, industrial equipment',
    category: 'machined',
    image: '/images/products/cnc-turned-parts.webp',
  },
  {
    name: 'CNC Milled Parts',
    slug: 'cnc-milled-parts',
    description:
      'CNC milled components with precision flat surfaces, pockets, slots, profiles and complex geometries manufactured on CNC milling machines.',
    application: 'Machine building, tool rooms, precision assemblies',
    category: 'machined',
    image: '/images/products/cnc-milled-parts.webp',
  },
];

// ──────────────────────────────────────────────────────────────
// Services
// ──────────────────────────────────────────────────────────────
export interface Service {
  title: string;
  description: string;
  image: string;
  icon?: string;
}

export const SERVICES: Service[] = [
  {
    title: 'CNC Turning',
    description:
      'Precision CNC turning services for cylindrical components, shafts, bushings, spacers, adapters and custom turned parts. Components are manufactured on CNC turning centres according to customer drawings, dimensions and specifications.',
    image: '/images/services/cnc-turning.webp',
    icon: '⚙️',
  },
  {
    title: 'CNC Milling',
    description:
      'CNC milling services for precision components requiring flat surfaces, profiles, slots, pockets, stepped features and complex machined geometries. Parts are manufactured on CNC milling machines to meet required dimensional accuracy.',
    image: '/images/services/cnc-milling.webp',
    icon: '🔩',
  },
  {
    title: 'Precision CNC Machining',
    description:
      'Comprehensive CNC machining services combining turning and milling operations for industrial components requiring dimensional accuracy, consistent surface finishing and reliable manufacturing output.',
    image: '/images/services/precision-machining.webp',
    icon: '📐',
  },
  {
    title: 'CNC Machining Job Work',
    description:
      'CNC machining job work services in Ahmedabad for businesses requiring outsourced precision machining. We accept job work for CNC turning and CNC milling based on customer drawings, samples and technical specifications.',
    image: '/images/services/cnc-job-work.webp',
    icon: '🛠️',
  },
];

// ──────────────────────────────────────────────────────────────
// Industries
// ──────────────────────────────────────────────────────────────
export interface Industry {
  name: string;
  description: string;
  icon: string;
  image?: string;
}

export const INDUSTRIES: Industry[] = [
  {
    name: 'Elevator & Lift',
    description: 'Pulleys, shafts and machined components for elevator and lift systems.',
    icon: '🏗️',
    image: '/images/industries/elevator.webp',
  },
  {
    name: 'Textile Machinery',
    description: 'Precision components for textile processing and manufacturing equipment.',
    icon: '🧵',
    image: '/images/industries/textile.webp',
  },
  {
    name: 'Material Handling',
    description: 'Conveyor pulleys, rollers and drive components for material handling systems.',
    icon: '📦',
    image: '/images/industries/material-handling.webp',
  },
  {
    name: 'Power Transmission',
    description: 'Pulleys, shafts and bushes for industrial power transmission applications.',
    icon: '⚡',
    image: '/images/industries/power-transmission.webp',
  },
  {
    name: 'General Engineering',
    description: 'CNC machined components for general engineering and industrial applications.',
    icon: '🔧',
    image: '/images/industries/general-engineering.webp',
  },
  {
    name: 'Packaging Machinery',
    description: 'CAM components, shafts and precision parts for packaging equipment.',
    icon: '📋',
    image: '/images/industries/packaging.webp',
  },
];

// ──────────────────────────────────────────────────────────────
// Manufacturing process steps
// ──────────────────────────────────────────────────────────────
export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: 'Requirement Discussion',
    description: 'Understanding your component requirements, application and specifications.',
  },
  {
    step: 2,
    title: 'Drawing & Sample Review',
    description: 'Technical review of drawings, samples, dimensions and tolerances.',
  },
  {
    step: 3,
    title: 'Material Selection',
    description: 'Selecting appropriate material based on application requirements.',
  },
  {
    step: 4,
    title: 'CNC Machining',
    description: 'Precision CNC turning and milling operations as per specifications.',
  },
  {
    step: 5,
    title: 'Quality Inspection',
    description: 'Dimensional inspection and quality verification of machined components.',
  },
  {
    step: 6,
    title: 'Delivery',
    description: 'Packaging and timely delivery of finished components.',
  },
];

// ──────────────────────────────────────────────────────────────
// Product category labels (for Products & Services page)
// ──────────────────────────────────────────────────────────────
export const PRODUCT_CATEGORIES: Record<Product['category'], string> = {
  pulleys: 'Pulleys',
  machined: 'Machined Components',
  elevator: 'Elevator Components',
  transmission: 'Transmission Components',
  custom: 'Custom Components',
};