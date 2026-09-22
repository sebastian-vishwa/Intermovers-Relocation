import React from 'react';
import './HeroSection.css';

export default function HeroSection() {
  return (
    <section className="hero" id="top">
      <svg className="world-svg" viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid slice">
        <g opacity="0.5">
          <path className="route-line" d="M120,180 Q400,80 620,220 T1080,260" />
          <path className="route-line" d="M180,420 Q450,520 700,410 T1120,150" style={{ animationDelay: '0.5s' }} />
          <path className="route-line" d="M60,320 Q300,250 540,330 T980,480" style={{ animationDelay: '1s' }} />
        </g>
        <circle className="city-dot pulse" cx="120" cy="180" r="4" />
        <circle className="city-dot" cx="620" cy="220" r="4" />
        <circle className="city-dot pulse" cx="1080" cy="260" r="4" style={{ animationDelay: '0.7s' }} />
        <circle className="city-dot" cx="180" cy="420" r="4" />
        <circle className="city-dot pulse" cx="700" cy="410" r="4" style={{ animationDelay: '1.3s' }} />
        <circle className="city-dot" cx="1120" cy="150" r="4" />
        <circle className="city-dot pulse" cx="540" cy="330" r="4" style={{ animationDelay: '0.4s' }} />
      </svg>

      <div className="container hero-grid">
        <div className="reveal in-view">
          <span className="eyebrow hero-eyebrow">Global Relocation &amp; Logistics</span>
          <h1>Moving Beyond Borders <em>with Confidence</em></h1>
          <p>
            Complete international relocation, corporate moving, freight forwarding, storage and logistics —
            delivered with precision, care and a partner network spanning 60+ countries.
          </p>
          <div className="hero-cta">
            <a href="#contact" className="btn btn-primary">
              Get Free Quote
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#services" className="btn btn-ghost">Our Services</a>
          </div>
          <div className="hero-stats-strip">
            <div>25+<span>Years Experience</span></div>
            <div>60+<span>Countries Served</span></div>
            <div>50K+<span>Successful Moves</span></div>
          </div>
        </div>

        <div className="hero-map-wrap reveal in-view reveal-d2">
          <div className="hero-card-float card-1">
            <span className="ic">
              <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
                <path d="M3 16h2l1-5h9l2 5h2M6 16v3M18 16v3M9 11V6h5l3 5" />
              </svg>
            </span>
            <span>
              <span className="tt">Sea Freight</span><br />
              <span className="dd">Container 4 · On schedule</span>
            </span>
          </div>

          <div className="hero-card-float card-2">
            <span className="ic">
              <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
                <path d="M3 10.5 12 3l9 7.5M5 9.5V20h14V9.5" />
              </svg>
            </span>
            <span>
              <span className="tt">Household Move</span><br />
              <span className="dd">Singapore → Berlin</span>
            </span>
          </div>

          <div className="hero-card-float card-3">
            <span className="ic">
              <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
                <path d="M2 12h4l2-4h3l1 4h6l3-6" />
                <circle cx="6" cy="18" r="1.6" />
                <circle cx="17" cy="18" r="1.6" />
              </svg>
            </span>
            <span>
              <span className="tt">Customs Cleared</span><br />
              <span className="dd">Shipment #48213</span>
            </span>
          </div>
        </div>
      </div>

      <div className="scroll-cue">
        <span>Scroll</span>
        <span className="stick"></span>
      </div>
    </section>
  );
}
