import React from 'react';

export default function ServiceCard({
  icon,
  title,
  description,
  tags = [],
  delayClass = '',
  onLearnMoreClick
}) {
  return (
    <div className={`svc-card reveal ${delayClass}`}>
      <div className="svc-ic">
        {icon}
      </div>
      <h4>{title}</h4>
      <p>{description}</p>
      <div className="svc-tags">
        {tags.map((tag, idx) => (
          <span key={idx}>{tag}</span>
        ))}
      </div>

      {/* Feature 1: Interactive Learn More Reveal Button */}
      <div className="svc-action-footer">
        <button
          type="button"
          className="svc-learn-btn"
          onClick={onLearnMoreClick}
          aria-label={`Learn more about ${title}`}
        >
          <span className="svc-learn-text">Learn More</span>
          <span className="svc-arrow-circle">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
}
