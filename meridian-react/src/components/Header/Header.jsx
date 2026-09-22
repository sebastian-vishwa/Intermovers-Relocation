import React, { useState, useEffect } from 'react';
import './Header.css';

export default function Header({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header id="siteHeader" className={scrolled ? 'scrolled' : ''}>
      <div className="container nav-inner">
        <a href="#top" className="logo" onClick={closeMobileMenu}>
          <span className="logo-mark">
            <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round">
              <path d="M3 12h18M3 12a9 9 0 0 1 9-9m-9 9a9 9 0 0 0 9 9m0-18a9 9 0 0 1 9 9m-9-9c2.5 2.5 2.5 15.5 0 18m0-18c-2.5 2.5-2.5 15.5 0 18m9-9a9 9 0 0 1-9 9" />
            </svg>
          </span>
          Intermovers
        </a>

        <ul className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <li>
            <a href="#about" className="nav-link" onClick={closeMobileMenu}>About</a>
          </li>
          <li>
            <span className="nav-link">
              Services{' '}
              <svg className="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </span>
            <div className="mega">
              <a href="#services" onClick={closeMobileMenu}>
                <span className="ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M3 10.5 12 3l9 7.5M5 9.5V20h14V9.5" />
                  </svg>
                </span>
                <span>
                  <span className="tt">Household Relocation</span><br />
                  <span className="dd">Door-to-door, worldwide</span>
                </span>
              </a>
              <a href="#services" onClick={closeMobileMenu}>
                <span className="ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M3 16h2l1-5h9l2 5h2M6 16v3M18 16v3M9 11V6h5l3 5" />
                  </svg>
                </span>
                <span>
                  <span className="tt">Freight Forwarding</span><br />
                  <span className="dd">Sea, air &amp; road</span>
                </span>
              </a>
              <a href="#services" onClick={closeMobileMenu}>
                <span className="ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="4" y="7" width="16" height="13" rx="1" />
                    <path d="M9 7V4h6v3" />
                  </svg>
                </span>
                <span>
                  <span className="tt">Corporate Relocation</span><br />
                  <span className="dd">Employee mobility programs</span>
                </span>
              </a>
              <a href="#services" onClick={closeMobileMenu}>
                <span className="ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M3 9h18M9 21V9" />
                  </svg>
                </span>
                <span>
                  <span className="tt">Storage Solutions</span><br />
                  <span className="dd">Short &amp; long-term</span>
                </span>
              </a>
              <a href="#services" onClick={closeMobileMenu}>
                <span className="ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M12 3v6m0 0-4 4m4-4 4 4M4 21h16" />
                  </svg>
                </span>
                <span>
                  <span className="tt">Customs Clearance</span><br />
                  <span className="dd">Import / export documentation</span>
                </span>
              </a>
              <a href="#services" onClick={closeMobileMenu}>
                <span className="ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="3" y="8" width="18" height="12" rx="1" />
                    <path d="M8 8V5h8v3" />
                  </svg>
                </span>
                <span>
                  <span className="tt">Professional Packing</span><br />
                  <span className="dd">Export-grade materials</span>
                </span>
              </a>
            </div>
          </li>
          <li>
            <a href="#process" className="nav-link" onClick={closeMobileMenu}>Process</a>
          </li>
          <li>
            <a href="#gallery" className="nav-link" onClick={closeMobileMenu}>Gallery</a>
          </li>
          <li>
            <a href="#faq" className="nav-link" onClick={closeMobileMenu}>FAQ</a>
          </li>
          <li>
            <a href="#contact" className="nav-link" onClick={closeMobileMenu}>Contact</a>
          </li>
        </ul>

        <div className="nav-right">
          <div className="lang-select">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="15" height="15">
              <circle cx="12" cy="12" r="9" />
              <path d="M3 12h18M12 3a13 13 0 0 1 0 18M12 3a13 13 0 0 0 0 18" />
            </svg>
            EN
          </div>
          <button
            className="icon-btn"
            id="themeToggle"
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
          >
            {theme === 'dark' ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <circle cx="12" cy="12" r="4.2" />
                <path d="M12 3v2M12 19v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M3 12h2M19 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>
          <a
            href="#contact"
            className="btn btn-primary"
            style={{ padding: '11px 22px', fontSize: '0.85rem' }}
            onClick={closeMobileMenu}
          >
            Get Free Quote
          </a>
          <button
            className="hamburger"
            aria-label="Menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}
