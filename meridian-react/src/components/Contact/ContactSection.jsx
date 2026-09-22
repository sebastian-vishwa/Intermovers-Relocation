import React, { useState } from 'react';
import './ContactSection.css';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    movingFrom: '',
    movingTo: '',
    service: 'International Household Relocation',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section className="section section-alt" id="contact">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Get In Touch</span>
          <h2>Request Your Free Relocation Quote</h2>
          <p>Tell us about your move and a coordinator will respond within one business day.</p>
        </div>

        <div className="contact-grid">
          <form className="contact-form reveal" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="field">
                <label htmlFor="fullName">Full Name</label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="Jane Whitfield"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                />
              </div>
              <div className="field">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="jane@company.com"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="field">
                <label htmlFor="movingFrom">Moving From</label>
                <input
                  id="movingFrom"
                  name="movingFrom"
                  type="text"
                  placeholder="City, Country"
                  value={formData.movingFrom}
                  onChange={handleChange}
                />
              </div>
              <div className="field">
                <label htmlFor="movingTo">Moving To</label>
                <input
                  id="movingTo"
                  name="movingTo"
                  type="text"
                  placeholder="City, Country"
                  value={formData.movingTo}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="field">
              <label htmlFor="service">Service Needed</label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
              >
                <option>International Household Relocation</option>
                <option>Corporate Relocation</option>
                <option>Freight Forwarding</option>
                <option>Storage Solutions</option>
                <option>Vehicle Shipping</option>
                <option>Other</option>
              </select>
            </div>

            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Tell us a little about your move..."
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              style={{ alignSelf: 'flex-start', marginTop: '6px' }}
            >
              {submitted ? 'Request Sent ✓' : 'Get Free Quote'}
              {!submitted && (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              )}
            </button>
          </form>

          <div className="contact-info reveal reveal-d2">
            <div className="info-card">
              <span className="ic">
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8">
                  <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.4 2.1L8 9.7a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2.1z" />
                </svg>
              </span>
              <div>
                <div className="tt">Phone</div>
                <div className="dd">+1 (800) 555-0142 · 24/7 Emergency Line</div>
              </div>
            </div>

            <div className="info-card">
              <span className="ic">
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
              </span>
              <div>
                <div className="tt">Email</div>
                <div className="dd">quotes@meridianmoves.com</div>
              </div>
            </div>

            <div className="info-card">
              <span className="ic">
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8">
                  <path d="M12 21s7-6.5 7-11.5A7 7 0 0 0 5 9.5C5 14.5 12 21 12 21z" />
                  <circle cx="12" cy="9.5" r="2.3" />
                </svg>
              </span>
              <div>
                <div className="tt">Head Office</div>
                <div className="dd">88 Harbour Quay, Singapore 018956</div>
              </div>
            </div>

            <div className="map-box">
              <svg viewBox="0 0 400 170">
                <rect width="400" height="170" fill="none" />
                <path
                  d="M20,100 Q120,40 220,90 T380,60"
                  fill="none"
                  stroke="rgba(255,255,255,.5)"
                  strokeWidth="1.6"
                  strokeDasharray="5 7"
                />
                <circle cx="20" cy="100" r="5" fill="#F68B1F" />
                <circle cx="220" cy="90" r="5" fill="#fff" />
                <circle cx="380" cy="60" r="5" fill="#F68B1F" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
