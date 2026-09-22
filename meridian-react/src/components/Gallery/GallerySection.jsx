import React from 'react';
import './GallerySection.css';

const galleryItems = [
  { img: '/images/gallery-packing.svg', title: 'Professional Packing', tall: true, delay: '' },
  { img: '/images/gallery-cargo.svg', title: 'Cargo Loading', tall: false, delay: 'reveal-d1' },
  { img: '/images/gallery-containers.svg', title: 'Container Yard', tall: false, delay: 'reveal-d2' },
  { img: '/images/gallery-office.svg', title: 'Office Relocation', tall: true, delay: 'reveal-d3' },
  { img: '/images/gallery-family.svg', title: 'Family Relocation', tall: false, delay: '' },
  { img: '/images/gallery-warehouse.svg', title: 'Warehousing', tall: true, delay: 'reveal-d1' },
  { img: '/images/gallery-airfreight.svg', title: 'Air Freight', tall: false, delay: 'reveal-d2' },
  { img: '/images/gallery-seafreight.svg', title: 'Sea Freight', tall: false, delay: 'reveal-d3' }
];

export default function GallerySection() {
  return (
    <section className="section section-alt" id="gallery">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">In The Field</span>
          <h2>A Look Inside Every Move</h2>
        </div>

        <div className="gallery-masonry">
          {galleryItems.map((item, idx) => (
            <div
              key={idx}
              className={`g-item ${item.tall ? 'tall' : ''} reveal ${item.delay}`}
            >
              <img src={item.img} alt={item.title} />
              <div className="g-overlay">
                <span>{item.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
