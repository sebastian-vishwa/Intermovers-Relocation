import React from 'react';
import ServiceCard from './ServiceCard';
import './Services.css';

const servicesData = [
  {
    id: 1,
    title: 'International Household Relocation',
    description: 'Stress-free household moves worldwide — planning, packing, transport, customs and unpacking, handled end to end.',
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
            />
          ))}
        </div>
      </div>
    </section>
  );
}
