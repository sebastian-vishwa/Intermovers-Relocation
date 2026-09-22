import React from 'react';
import Counter from '../common/Counter';
import './StatsBand.css';

const stats = [
  { target: '25', suffix: '+', label: 'Years Experience' },
  { target: '60', suffix: '+', label: 'Countries Served' },
  { target: '50', suffix: 'K+', label: 'Successful Relocations' },
  { target: '98', suffix: '%', label: 'Customer Satisfaction' },
  { target: '150', suffix: '+', label: 'International Partners' }
];

export default function StatsBand() {
  return (
    <section className="stats-band">
      <div className="container">
        {stats.map((s, idx) => (
          <div key={idx}>
            <Counter target={s.target} suffix={s.suffix} className="sb-num" />
            <div className="sb-lbl">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
