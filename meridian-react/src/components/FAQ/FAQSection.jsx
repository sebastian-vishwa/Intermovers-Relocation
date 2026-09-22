import React, { useState, useRef } from 'react';
import './FAQSection.css';

const faqList = [
  {
    q: 'How long does an international move take?',
    a: 'Most international household moves take 4–10 weeks door to door, depending on origin, destination and shipping method — air freight is faster, sea freight is more economical for larger volumes.'
  },
  {
    q: 'What documents are required?',
    a: 'Typically a passport copy, visa or work permit, a detailed inventory list, and destination-country customs forms. Our team prepares and checks every document before departure.'
  },
  {
    q: 'Can you store my belongings?',
    a: 'Yes — we offer secure short and long-term storage with inventory tracking and optional climate control at facilities in our partner network.'
  },
  {
    q: 'Do you provide insurance?',
    a: 'All shipments can be covered against damage, loss, theft and natural disaster through our moving insurance programme, with straightforward claims support.'
  },
  {
    q: 'Do you move vehicles?',
    a: 'Yes, via container or RoRo shipping for cars, motorcycles and SUVs, including full port handling at both ends.'
  },
  {
    q: 'How much does relocation cost?',
    a: "Cost depends on volume, distance, shipping method and services required. Request a free survey and we'll provide an itemised, no-obligation quote."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);
  const contentRefs = useRef([]);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="section" id="faq">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Good To Know</span>
          <h2>Frequently Asked Questions</h2>
        </div>

        <div className="faq-wrap reveal">
          {faqList.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className={`faq-item ${isOpen ? 'open' : ''}`}>
                <button
                  className="faq-q"
                  onClick={() => toggleFAQ(idx)}
                  aria-expanded={isOpen}
                >
                  {item.q}
                  <span className="plus" />
                </button>
                <div
                  ref={(el) => (contentRefs.current[idx] = el)}
                  className="faq-a"
                  style={{
                    maxHeight: isOpen && contentRefs.current[idx]
                      ? `${contentRefs.current[idx].scrollHeight}px`
                      : '0px'
                  }}
                >
                  <p>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
