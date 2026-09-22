import React from 'react';
import './WhyChooseUs.css';

const whyItems = [
  {
    num: '01',
    title: 'Global Partner Network',
    desc: '150+ trusted agents across 60 countries, coordinated as one team.'
  },
  {
    num: '02',
    title: 'Certified Relocation Experts',
    desc: 'Trained packing crews and accredited move managers on every job.'
  },
  {
    num: '03',
    title: 'Transparent Pricing',
    desc: 'Itemised quotes with no hidden fees, agreed before we lift a box.'
  },
  {
    num: '04',
    title: '24/7 Customer Support',
    desc: 'A dedicated coordinator reachable at every stage of your move.'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="section">
      <div className="container why-wrap">
        <div className="reveal">
          <span className="eyebrow">Why Meridian</span>
          <h2 style={{ fontSize: 'clamp(1.9rem, 3vw, 2.4rem)', margin: '14px 0 26px' }}>
            Built On Trust, Proven Over 25 Years
          </h2>
          <ul className="why-list">
            {whyItems.map((item) => (
              <li key={item.num}>
                <span className="why-num">{item.num}</span>
                <div>
                  <div className="why-tt">{item.title}</div>
                  <div className="why-dd">{item.desc}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="why-visual reveal reveal-d2">
          <img src="/images/why-containers.svg" alt="Shipping containers stacked at a port" />
        </div>
      </div>
    </section>
  );
}
