import React from 'react';
import Counter from '../common/Counter';
import './AboutSection.css';

export default function AboutSection() {
  return (
    <section className="section" id="about">
      <div className="container about-grid">
        <div className="about-visual reveal">
          <img src="/images/about-team.svg" alt="Global relocation team coordinating a move" />
          <div className="about-badge">
            <span className="num">150+</span>
            <span className="lbl">Global Partner Agents</span>
          </div>
        </div>

        <div className="about reveal reveal-d2">
          <span className="eyebrow">Who We Are</span>
          <h2>Your Trusted Global Relocation Partner</h2>
          <p>
            We specialise in international household relocation, office moving, corporate mobility, freight forwarding,
            customs clearance, storage and logistics. Backed by decades of experience and a worldwide partner network,
            we deliver seamless moves for families, multinational corporations, embassies and government organisations alike.
          </p>
          <div className="stat-grid">
            <div className="stat-item">
              <Counter target="25" suffix="+" className="stat-num" />
              <div className="stat-lbl">Years Experience</div>
            </div>
            <div className="stat-item">
              <Counter target="60" suffix="+" className="stat-num" />
              <div className="stat-lbl">Countries Served</div>
            </div>
            <div className="stat-item">
              <Counter target="98" suffix="%" className="stat-num" />
              <div className="stat-lbl">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
