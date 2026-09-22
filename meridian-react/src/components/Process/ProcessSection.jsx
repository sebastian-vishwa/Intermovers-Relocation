import React from 'react';
import './ProcessSection.css';

const steps = [
  { step: 1, title: 'Request a Quote', delay: '' },
  { step: 2, title: 'Free Survey', delay: 'reveal-d1' },
  { step: 3, title: 'Professional Packing', delay: 'reveal-d2' },
  { step: 4, title: 'Transportation', delay: 'reveal-d3' },
  { step: 5, title: 'Customs Clearance', delay: 'reveal-d4' },
  { step: 6, title: 'Delivery & Unpacking', delay: 'reveal-d4' }
];

export default function ProcessSection() {
  return (
    <section className="section section-alt" id="process">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">How It Works</span>
          <h2>Your Move, In Six Coordinated Steps</h2>
          <p>Every relocation follows the same disciplined route — so nothing gets left behind.</p>
        </div>

        <div className="process-track">
          {steps.map((s) => (
            <div key={s.step} className={`proc-step reveal ${s.delay}`}>
              <div className="proc-dot">{s.step}</div>
              <div className="proc-tt">{s.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
