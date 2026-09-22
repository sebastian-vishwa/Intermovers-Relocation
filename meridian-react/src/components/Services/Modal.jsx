import React, { useEffect } from 'react';
import './Modal.css';

export default function Modal({ service, onClose }) {
  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!service) return null;

  const defaultImage = service.image || '/images/gallery-containers.svg';

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className="modal-container"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        {/* Top-Right Close Button */}
        <button
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close detailed view"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {/* Left Column: Visual Placeholder with Anchored Bottom Banner */}
        <div className="modal-visual-col">
          <img
            src={defaultImage}
            alt={service.title}
            className="modal-image"
          />
          <div className="modal-visual-overlay" />
          <div className="modal-visual-content">
            <span className="modal-badge">Specialized Logistics</span>
            <div className="modal-visual-title">{service.title}</div>
          </div>
        </div>

        {/* Right Column: Detailed Content with Internal Scroll */}
        <div className="modal-body-col">
          <div className="modal-header-block">
            <span className="eyebrow modal-eyebrow">Service Breakdown</span>
            <h3 className="modal-header-title">
              {service.title} — Detailed Description
            </h3>
          </div>

          <p className="modal-description">
            {service.detailedDescription ||
              `${service.description} Our certified specialists manage every milestone of this service with rigorous quality assurance, end-to-end cargo insurance, real-time status tracking, and 24/7 dedicated support across 60+ countries worldwide.`}
          </p>

          {/* Key Features List */}
          <ul className="modal-features-list">
            {(service.features || [
              'Dedicated move manager & personal point of contact',
              'Comprehensive export-grade packing & secure crating',
              'Full customs clearance & documentation assistance',
              'Door-to-door transit protection and insurance coverage'
            ]).map((feature, idx) => (
              <li key={idx}>
                <span className="modal-check-icon">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          {/* Badges / Tags */}
          <div className="modal-tags-wrap">
            {service.tags && service.tags.map((tag, idx) => (
              <span key={idx}>{tag}</span>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="modal-actions">
            <a
              href="#contact"
              className="btn btn-primary"
              onClick={onClose}
            >
              Get Free Quote
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
            <button
              className="btn btn-outline-blue"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
