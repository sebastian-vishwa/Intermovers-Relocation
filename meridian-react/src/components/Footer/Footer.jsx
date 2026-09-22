import React, { useState } from 'react';
import './Footer.css';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail('');
    }
  };

  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-logo">
              <span className="logo-mark">
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round">
                  <path d="M3 12h18M3 12a9 9 0 0 1 9-9m-9 9a9 9 0 0 0 9 9m0-18a9 9 0 0 1 9 9m-9-9c2.5 2.5 2.5 15.5 0 18m0-18c-2.5 2.5-2.5 15.5 0 18m9-9a9 9 0 0 1-9 9" />
                </svg>
              </span>
              Meridian
            </div>
            <p className="lead">
              International relocation and logistics, coordinated across 60+ countries with a single point of contact.
            </p>
            <div className="social-row">
              <a href="#" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1 0 2 .1 2 .1v2.4h-1.4c-1.3 0-1.7.8-1.7 1.6V12h2.9l-.5 2.9h-2.4v7A10 10 0 0 0 22 12" />
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM8.3 18V9.9H5.7V18zM7 8.8a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M18.3 18v-4.4c0-2.4-1.3-3.5-3-3.5a2.6 2.6 0 0 0-2.4 1.3V10h-2.6v8h2.6v-4.4c0-1.1.6-1.8 1.5-1.8s1.4.7 1.4 1.8V18z" />
                </svg>
              </a>
              <a href="#" aria-label="Telegram">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20m5 6-1.4 9.2c-.1.6-.5.7-1 .4l-2.8-2-1.3 1.3c-.2.2-.3.3-.6.3l.2-2.9 5.3-4.8c.2-.2 0-.3-.3-.2l-6.6 4.1-2.8-.9c-.6-.2-.6-.6.1-.9l11-4.2c.5-.2 1 .1.8.9" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h5>Company</h5>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Blog &amp; News</a></li>
              <li><a href="#">Global Partners</a></li>
            </ul>
          </div>

          <div>
            <h5>Services</h5>
            <ul>
              <li><a href="#services">Household Relocation</a></li>
              <li><a href="#services">Corporate Relocation</a></li>
              <li><a href="#services">Freight Forwarding</a></li>
              <li><a href="#services">Storage Solutions</a></li>
            </ul>
          </div>

          <div>
            <h5>Industries</h5>
            <ul>
              <li><a href="#">Corporations</a></li>
              <li><a href="#">Embassies</a></li>
              <li><a href="#">Government</a></li>
              <li><a href="#">Individuals &amp; Families</a></li>
            </ul>
          </div>

          <div>
            <h5>Stay Updated</h5>
            <p className="lead" style={{ marginBottom: '14px' }}>Route updates and relocation tips, monthly.</p>
            <form className="newsletter" onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder={subscribed ? "Thank you!" : "Your email"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit">{subscribed ? "Joined ✓" : "Join"}</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Meridian Relocation &amp; Logistics. All rights reserved.</span>
          <span style={{ display: 'flex', gap: '18px' }}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms &amp; Conditions</a>
            <a href="#">Track Shipment</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
