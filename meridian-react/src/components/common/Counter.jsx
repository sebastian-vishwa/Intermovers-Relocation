import React, { useState, useEffect, useRef } from 'react';

export default function Counter({ target, suffix = '', duration = 1400, className = '' }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const startedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !startedRef.current) {
            startedRef.current = true;
            const startTime = performance.now();
            const numericTarget = parseFloat(target);

            const tick = (now) => {
              const elapsed = Math.min(1, (now - startTime) / duration);
              const eased = 1 - Math.pow(1 - elapsed, 3);
              setCount(Math.round(numericTarget * eased));

              if (elapsed < 1) {
                requestAnimationFrame(tick);
              }
            };

            requestAnimationFrame(tick);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [target, duration]);

  return (
    <div ref={elementRef} className={className}>
      {count}{suffix}
    </div>
  );
}
