import React, { useState } from 'react';
import ServiceCard from './ServiceCard';
import Modal from './Modal';
import './Services.css';

const servicesData = [
  {
    id: 1,
    title: 'International Household Relocation',
    description: 'Stress-free household moves worldwide — planning, packing, transport, customs and unpacking, handled end to end.',
    detailedDescription: 'Our international household relocation program covers every single detail of your global move. From custom in-home or virtual surveys and certified export packing to customs clearance, intermodal sea/air freight forwarding, and white-glove destination unpacking, we ensure a completely stress-free transition for you and your family.',
    features: [
      'Comprehensive in-home or virtual volume assessment',
      'Multi-layered export-grade packing and bespoke wooden crating',
      'Door-to-door transit via scheduled sea container or expedited air cargo',
      'Full destination customs clearance and debris removal service'
    ],
    image: '/images/gallery-family.svg',
    tags: ['Door-to-door', 'Sea & Air', 'Unpacking'],
    delayClass: '',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M3 10.5 12 3l9 7.5M5 9.5V20h14V9.5" />
        <circle cx="17" cy="7" r="3" />
      </svg>
    )
  },
  {
    id: 2,
    title: 'Domestic Moving',
    description: 'Careful residential moving for apartments, houses and villas, from packing through final furniture assembly.',
    detailedDescription: 'Whether moving across town or to another state, our specialized residential crews handle your furniture, appliances, and valuables with premium care. We supply all heavy padding, floor/door protection, safe disassembly, transport, and reassembly at your new residence.',
    features: [
      'Modern GPS-tracked dedicated moving fleet',
      'Expert disassembly and reassembly of complex furniture systems',
      'Specialized handling of fragile decor, mirrors, and home electronics',
      'Flexible scheduling including weekend and evening moving slots'
    ],
    image: '/images/gallery-packing.svg',
    tags: ['Packing', 'Assembly'],
    delayClass: 'reveal-d1',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M3 16V8h9l4 4h5v4" />
        <circle cx="7.5" cy="18" r="1.7" />
        <circle cx="17.5" cy="18" r="1.7" />
      </svg>
    )
  },
  {
    id: 3,
    title: 'Corporate Relocation',
    description: 'Complete employee relocation management for multinationals — family support, immigration and destination help.',
    detailedDescription: 'Designed for HR directors and multinational global mobility teams, our corporate relocation solutions streamline talent transfers. We combine policy administration, expense management, immigration legal coordination, temporary housing, and school search assistance.',
    features: [
      'Dedicated corporate mobility manager for every corporate account',
      'Comprehensive immigration, visa, and work authorization processing',
      'Area orientation, school search assistance, and home finding',
      'Real-time SLA tracking dashboard for HR and corporate stakeholders'
    ],
    image: '/images/about-team.svg',
    tags: ['Immigration', 'Family support'],
    delayClass: 'reveal-d2',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="4" y="4" width="16" height="17" rx="1" />
        <path d="M9 21v-5h6v5M9 9h1M14 9h1M9 13h1M14 13h1" />
      </svg>
    )
  },
  {
    id: 4,
    title: 'Office Relocation',
    description: 'Office moves engineered to minimise downtime — secure handling of IT equipment, furniture and files.',
    detailedDescription: 'Minimize business disruption with precision-planned corporate workplace transitions. Our commercial teams manage server disconnects/reconnects, modular furniture decommissioning, sequential record indexing, and phased weekend migrations.',
    features: [
      'Pre-move floor plan mapping and sequential asset color-coding',
      'Anti-static packing and climate-controlled transit for server racks & IT',
      'Confidential document chain-of-custody transfer and shredding',
      'After-hours and weekend execution to guarantee zero office downtime'
    ],
    image: '/images/gallery-office.svg',
    tags: ['IT equipment', 'Weekend moves'],
    delayClass: 'reveal-d3',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="6" width="18" height="4" rx="1" />
        <path d="M6 10v10M18 10v10M3 20h18" />
      </svg>
    )
  },
  {
    id: 5,
    title: 'International Freight Forwarding',
    description: 'Reliable cargo transport by air, sea and road, fully coordinated from origin to destination.',
    detailedDescription: 'Full-spectrum ocean and air cargo brokerage connecting all major global trade lanes. We offer Full Container Load (FCL), Less than Container Load (LCL), air chartering, and multi-modal inland drayage backed by contracts with top-tier ocean carriers.',
    features: [
      'Direct contracts with leading global shipping lines and air carriers',
      'FCL and consolidated LCL options tailored to volume and budget',
      'Live satellite container tracking and status notifications',
      'Port-to-port and door-to-door bill of lading management'
    ],
    image: '/images/gallery-cargo.svg',
    tags: ['FCL', 'LCL', 'Consolidation'],
    delayClass: '',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 16h2l1-5h9l2 5h2M6 16v3M18 16v3M9 11V6h5l3 5" />
      </svg>
    )
  },
  {
    id: 6,
    title: 'Customs Clearance',
    description: 'Import and export documentation handled by specialists — smooth clearance, no unnecessary delays.',
    detailedDescription: 'Navigate complex tariff schedules, bilateral trade treaties, duty exemptions, and quarantine protocols with licensed customs brokers. We audit all documentation prior to vessel departure to eliminate costly demurrage, detention, and border delays.',
    features: [
      'Licensed in-house customs brokers and tariff classification experts',
      'Preparation of ATA carnets, certificates of origin, and duty relief forms',
      'Electronic EDI declarations with national port and border authorities',
      'Direct physical representation during customs physical inspections'
    ],
    image: '/images/gallery-containers.svg',
    tags: ['Brokerage', 'Documentation'],
    delayClass: 'reveal-d1',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 3v18M4 8l8-5 8 5M4 8v9l8 5 8-5V8" />
      </svg>
    )
  },
  {
    id: 7,
    title: 'Professional Packing',
    description: 'Trained packing specialists use premium materials — crates, foam and waterproof wrap — for total protection.',
    detailedDescription: 'Our certified packers use exclusively export-grade tri-wall corrugated cartons, acid-free tissue, heavy bubble wrap, and moisture-resistant barrier laminates. Every item is inventoried, labeled, and cushioned to withstand intercontinental transit shocks.',
    features: [
      'Custom wooden crates manufactured to strict ISPM-15 phytosanitary standards',
      'Wardrobe boxes with hang-bars for wrinkle-free clothing transit',
      'Silica gel desiccant packs and vacuum sealing against humidity',
      'Detailed itemized packing manifest with condition inspection notes'
    ],
    image: '/images/gallery-packing.svg',
    tags: ['Wooden crates', 'Export cartons'],
    delayClass: 'reveal-d2',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="8" width="18" height="12" rx="1" />
        <path d="M8 8V5h8v3M3 13h18" />
      </svg>
    )
  },
  {
    id: 8,
    title: 'Fine Art & Antique Moving',
    description: 'Specialised handling for artwork, sculpture and collectibles, with climate protection and insurance options.',
    detailedDescription: 'Museum-standard logistics for galleries, auction houses, and private collectors. Our art technicians fabricate custom museum crates, monitor microclimate conditions, and provide courier accompaniment for irreplaceable works of fine art and historical heirlooms.',
    features: [
      'Museum-grade thermal insulated and shock-dampening crates',
      'Constant monitoring of relative humidity and ambient temperature',
      'White-glove installation, picture hanging, and pedestal positioning',
      'Specialized all-risks fine art transit insurance coverage'
    ],
    image: '/images/gallery-warehouse.svg',
    tags: ['Climate control', 'Insured'],
    delayClass: 'reveal-d3',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="4" y="4" width="16" height="16" rx="1" />
        <path d="M4 15l4-4 3 3 5-6 4 5" />
      </svg>
    )
  },
  {
    id: 9,
    title: 'House Moving',
    description: 'Upright, grand and houses relocated by experienced handlers with specialised lifting equipment.',
    detailedDescription: 'Comprehensive whole-home relocations for luxury estates, multi-story residences, and penthouses. Equipped with hydraulic exterior hoists, stair-climbing dollies, and precision rigging tools, we transport heavy pieces with zero impact to doorways and floors.',
    features: [
      'Hydraulic exterior window elevator lifts for high-rise balconies',
      'Floor runners, banister wraps, and neoprene door jamb protectors',
      'Dedicated heavy-item team for pianos, billiard tables, and safes',
      'Full post-move cleanup, debris haul-away, and furniture placement'
    ],
    image: '/images/gallery-family.svg',
    tags: ['Houses Relocation', 'Specialist rigging'],
    delayClass: '',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 18V9l9-4 7 4v9M4 18h16M8 18v-5h5v5" />
      </svg>
    )
  },
  {
    id: 10,
    title: 'Vehicle Shipping',
    description: 'Secure international transport for cars, motorcycles and luxury vehicles via container or RoRo.',
    detailedDescription: 'Comprehensive global automotive transport for exotic sports cars, classic vintage automobiles, family SUVs, and motorcycles. Choose between enclosed dedicated 20ft/40ft containerized shipping with wheel chocks and nylon lashing, or cost-effective Roll-on/Roll-off (RoRo) services.',
    features: [
      'Exclusive enclosed container transport with 4-point wheel strap tie-downs',
      'Roll-on / Roll-off (RoRo) options across major worldwide vehicle ports',
      'Complete title verification, export validation, and import homologation support',
      'High-resolution pre-shipping condition inspection with photographic report'
    ],
    image: '/images/gallery-seafreight.svg',
    tags: ['Container', 'RoRo'],
    delayClass: 'reveal-d1',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 15l1.5-5h11L17 15M4 15h14v4H4z" />
        <circle cx="7.5" cy="19" r="1.4" />
        <circle cx="15.5" cy="19" r="1.4" />
      </svg>
    )
  },
  {
    id: 11,
    title: 'Storage Solutions',
    description: 'Safe, monitored short and long-term storage with inventory tracking and climate-controlled options.',
    detailedDescription: 'Flexible warehouse storage tailored for interim relocation periods, overseas postings, or commercial excess stock. Our facilities feature 24/7 CCTV surveillance, biometric access control, fire suppression, and precision climate-regulated vaults.',
    features: [
      '24/7 CCTV monitoring, perimeter alarms, and bonded security guards',
      'Climate-controlled vaults with 20°C temperature and 50% humidity control',
      'Barcode-scanned digital inventory portal accessible online anytime',
      'Flexible month-to-month contracts with scheduled retrieval or delivery'
    ],
    image: '/images/gallery-warehouse.svg',
    tags: ['Inventory tracking', 'Climate control'],
    delayClass: 'reveal-d2',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 9.5 12 4l9 5.5V20H3z" />
        <path d="M9 20v-6h6v6" />
      </svg>
    )
  },
  {
    id: 12,
    title: 'Warehousing & Distribution',
    description: 'Inventory management, order fulfilment and last-mile delivery for commercial clients nationwide.',
    detailedDescription: 'Turnkey 3PL distribution center solutions for retail, e-commerce, and industrial supply chains. From pallet rack storage and pick-and-pack fulfillment to cross-docking and scheduled last-mile delivery, we power efficient national logistics.',
    features: [
      'Modern Warehouse Management System (WMS) with API ERP integrations',
      'B2B pallet staging, cross-docking, and container de-stuffing',
      'Reverse logistics, warranty returns handling, and inspection triage',
      'Nationwide route-optimized fleet for guaranteed same-day/next-day dispatch'
    ],
    image: '/images/gallery-cargo.svg',
    tags: ['Fulfilment', 'Last-mile'],
    delayClass: 'reveal-d3',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="4" width="8" height="8" rx="1" />
        <rect x="13" y="4" width="8" height="8" rx="1" />
        <rect x="3" y="14" width="8" height="6" rx="1" />
        <rect x="13" y="14" width="8" height="6" rx="1" />
      </svg>
    )
  },
  {
    id: 13,
    title: 'Project Logistics',
    description: 'Route planning and heavy-lift transport for industrial, construction and engineering cargo.',
    detailedDescription: 'Engineered transport solutions for out-of-gauge (OOG) and breakbulk project cargo. We handle route path surveys, bridge weight stress assessments, police escorts, heavy hydraulic crane rigging, and turnkey delivery directly to construction or industrial project sites.',
    features: [
      'Comprehensive route feasibility, turning radius, and overhead clearance surveys',
      'Multi-axle modular trailers, flat racks, and open-top heavy container equipment',
      'Liaison with national transport ministries for special oversize highway permits',
      'Dedicated engineering teams supervising on-site heavy crane lift rigging'
    ],
    image: '/images/why-containers.svg',
    tags: ['Heavy lift', 'Oversized cargo'],
    delayClass: '',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 20V6l6 4V6l6 4v10M4 20h16" />
      </svg>
    )
  },
  {
    id: 14,
    title: 'Moving Insurance',
    description: 'Comprehensive coverage protecting your belongings against damage, loss, theft and natural disaster.',
    detailedDescription: 'Total peace of mind with international all-risks marine transit insurance underwritten by leading global insurers. Unlike basic statutory carrier liability, our full replacement value coverage safeguards your goods from origin packing through final destination assembly.',
    features: [
      'All-risks full replacement value coverage with zero deductible options',
      'Protection against rough seas, container water ingress, fire, and derailment',
      'Covers individual high-value items, pairs, and matching sets',
      'Expedited digital claims submission with dedicated settlement adjusters'
    ],
    image: '/images/gallery-airfreight.svg',
    tags: ['Full coverage', 'Claims support'],
    delayClass: 'reveal-d1',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 3l8 3v6c0 5-4 8-8 9-4-1-8-4-8-9V6z" />
      </svg>
    )
  }
];

export default function ServicesSection() {
  // Central state to track which service modal is open
  const [activeModalService, setActiveModalService] = useState(null);

  return (
    <section className="section section-alt" id="services">
      <div className="container">
        <div className="route-divider">
          <svg viewBox="0 0 340 16">
            <line className="route-dash" x1="0" y1="8" x2="340" y2="8" />
            <circle className="route-node" cx="4" cy="8" r="4" />
            <circle className="route-node" cx="336" cy="8" r="4" />
          </svg>
        </div>

        <div className="section-head reveal">
          <span className="eyebrow">What We Do</span>
          <h2>End-to-End Relocation &amp; Logistics Services</h2>
          <p>From a single family's household move to complex industrial project cargo — one partner, every mile of the route.</p>
        </div>

        <div className="services-grid">
          {servicesData.map((svc) => (
            <ServiceCard
              key={svc.id}
              icon={svc.icon}
              title={svc.title}
              description={svc.description}
              tags={svc.tags}
              delayClass={svc.delayClass}
              onLearnMoreClick={() => setActiveModalService(svc)}
            />
          ))}
        </div>
      </div>

      {/* Feature 2 & 3: Conditionally rendered Modal */}
      {activeModalService && (
        <Modal
          service={activeModalService}
          onClose={() => setActiveModalService(null)}
        />
      )}
    </section>
  );
}
