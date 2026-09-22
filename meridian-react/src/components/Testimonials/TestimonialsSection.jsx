import React, { useState, useEffect } from 'react';
import './TestimonialsSection.css';

const testimonials = [
  {
    quote: '"Our move from Dubai to London was handled with more care than I imagined possible. Every box arrived exactly as it left."',
    name: 'Amara Chen',
    role: 'Relocated Household · Dubai → London',
    avatar: '/images/avatar-1.svg'
  },
  {
    quote: '"Meridian relocated 40 employees across three continents in one quarter without a single missed deadline."',
    name: 'Julian Voss',
    role: 'HR Director, Nordvik Group',
    avatar: '/images/avatar-2.svg'
  },
  {
    quote: '"Customs clearance on our machinery shipment was flawless. Their project logistics team clearly does this every day."',
    name: 'Priya Nair',
    role: 'Operations Lead, Ferro Industries',
    avatar: '/images/avatar-3.svg'
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Client Stories</span>
          <h2>Trusted By Families &amp; Global Teams</h2>
        </div>

        <div className="test-wrap reveal">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className={`test-slide ${idx === currentIndex ? 'active' : ''}`}
            >
              <p className="test-quote">{t.quote}</p>
              <div className="test-person">
                <img src={t.avatar} alt={t.name} />
                <div>
                  <div className="nm">{t.name}</div>
                  <div className="rl">{t.role}</div>
                </div>
              </div>
            </div>
          ))}

          <div className="test-dots">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                className={idx === currentIndex ? 'active' : ''}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
