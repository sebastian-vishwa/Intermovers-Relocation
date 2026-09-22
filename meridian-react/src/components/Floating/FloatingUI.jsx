import React, { useState, useEffect } from 'react';
import './FloatingUI.css';

export default function FloatingUI() {
  const [showToTop, setShowToTop] = useState(false);
  const [showCookie, setShowCookie] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowToTop(window.scrollY > 600);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    const cookieTimer = setTimeout(() => {
      setShowCookie(true);
    }, 1200);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(cookieTimer);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const acceptCookies = () => {
    setShowCookie(false);
  };

  return (
    <>
      <div className="fab-stack">
        <button
          className={`fab fab-top ${showToTop ? 'show' : ''}`}
          id="toTop"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
        </button>
        <a
          className="fab fab-wa"
          href="https://wa.me/18005550142"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2a10 10 0 0 0-8.5 15.2L2 22l4.9-1.5A10 10 0 1 0 12 2m5.8 14.2c-.2.7-1.4 1.3-2 1.4-.5.1-1.1.2-3.4-.8-2.9-1.2-4.7-4.1-4.9-4.3-.1-.2-1.2-1.6-1.2-3s.7-2.1 1-2.4c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5.2.6.7 1.9.8 2 .1.2.1.4 0 .6-.5.9-1 .9-.7 1.4.9 1.7 1.9 2.3 3.4 3.1.3.1.4.1.6-.1.2-.2.8-.9 1-1.2.2-.3.4-.2.7-.1.3.1 1.7.8 2 1 .3.1.5.2.5.3.1.2.1.7-.1 1.4z" />
          </svg>
        </a>
      </div>

      <div className={`cookie-banner ${showCookie ? 'show' : ''}`} id="cookieBanner">
        <span>
          We use cookies to improve your experience and analyse site traffic. Read our <a href="#">Cookie Policy</a>.
        </span>
        <button id="cookieAccept" onClick={acceptCookies}>
          Accept
        </button>
      </div>
    </>
  );
}
