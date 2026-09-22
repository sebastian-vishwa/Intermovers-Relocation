import React from 'react';

export default function ServiceCard({ icon, title, description, tags = [], delayClass = '' }) {
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
    </div>
  );
}
