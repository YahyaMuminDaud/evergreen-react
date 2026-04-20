import React from 'react';
import { Link } from 'react-router-dom';
import PineSVG from '../components/PineSVG';
import './Home.css';

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-grid" />
        <div className="hero-content">
          <div className="hero-emblem fade-up"><PineSVG width={140} height={140} variant="og" /></div>
          <p className="hero-sub fade-up-1">Commercial Cleaners · Washington State</p>
          <h1 className="hero-title fade-up-2">Evergreen <span>Matf</span> LLC</h1>
          <p className="hero-tagline fade-up-3">Professional commercial cleaning services built for businesses that demand reliability, detail, and consistent results.</p>
          <div className="hero-actions fade-up-4">
            <a href="#contact" className="btn-primary">Contact Us</a>
            <Link to="/services" className="btn-outline">View Services</Link>
          </div>
          <div className="hero-phone fade-up-5">
            <small>Call or Text</small>
            <span>(253) 304-7500</span>
          </div>
        </div>
      </section>

      {/* AREA STRIP */}
      <div className="area-strip">
        <p>Proudly serving <strong>Washington State</strong> — Tacoma · Kent · Auburn · Federal Way · Renton · Seattle and surrounding areas</p>
      </div>

      {/* SERVICES PREVIEW */}
      <section className="services-preview-section">
        <div className="section-inner">
          <p className="section-label">What We Offer</p>
          <h2 className="section-title">Cleaning Plans for Every Business</h2>
          <div className="divider" />
          <p className="section-intro">From routine maintenance to heavy-duty restoration — flexible plans that protect your space and fit your budget.</p>
          <div className="preview-grid">
            <Link className="preview-card" to="/services">
              <span className="badge badge-green">Standard Care</span>
              <h3>Routine Maintenance</h3>
              <span className="price">$600 – $1,200 / month</span>
              <p>Trash removal, disinfection, vacuuming, mopping, bathrooms, dusting, and window polishing.</p>
              <span className="learn">See Details →</span>
            </Link>
            <Link className="preview-card" to="/services">
              <span className="badge badge-blue">Preventive Care</span>
              <h3>Detail Cleaning Add-On</h3>
              <span className="price">$250 – $500 (Add-On)</span>
              <p>Table waxing, window protection, wall disinfection, appliance and deep kitchen cleaning.</p>
              <span className="learn">See Details →</span>
            </Link>
            <Link className="preview-card" to="/services">
              <span className="badge badge-brown">Extreme Care</span>
              <h3>Heavy-Duty Restoration</h3>
              <span className="price">$1,200 – $3,000+</span>
              <p>Floor waxing, steam cleaning, grease removal, mold treatment, and high dusting.</p>
              <span className="learn">See Details →</span>
            </Link>
          </div>
          <div className="preview-cta">
            <Link to="/services" className="btn-primary">View All Services</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <h2>Ready for a Cleaner Workspace?</h2>
        <p>Let's build a cleaning plan that fits your business and budget.</p>
        <a href="#contact" className="btn-white">Get In Touch</a>
        <div className="cta-number">(253) 304-7500</div>
      </section>

      {/* CONTACT */}
      <section className="contact-section" id="contact">
        <div className="section-inner">
          <p className="section-label">Get In Touch</p>
          <h2 className="section-title">Contact Us</h2>
          <div className="divider" />
          <p className="section-intro">Ready to get started or have a question? Reach out by phone or text — we'd love to hear from you.</p>
          <div className="contact-cards">
            <div className="contact-card">
              <div className="c-icon-lg">
                <svg viewBox="0 0 24 24" fill="none" stroke="#6b7c1e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3 1.25h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L7.09 9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 21 16l-.08.92z"/>
                </svg>
              </div>
              <span className="c-label">Phone / Text</span>
              <span className="c-val-lg">(253) 304-7500</span>
              <p className="c-note">Call or text anytime — we respond promptly.</p>
            </div>
            <div className="contact-card">
              <div className="c-icon-lg">
                <svg viewBox="0 0 24 24" fill="none" stroke="#6b7c1e" strokeWidth="2" strokeLinecap="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <span className="c-label">Service Area</span>
              <span className="c-val-lg">Washington State</span>
              <p className="c-note">Tacoma · Kent · Auburn · Federal Way · Renton · Seattle and surrounding areas.</p>
            </div>
            <div className="contact-card">
              <div className="c-icon-lg">
                <svg viewBox="0 0 24 24" fill="none" stroke="#6b7c1e" strokeWidth="2" strokeLinecap="round">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <span className="c-label">Availability</span>
              <span className="c-val-lg">Flexible Hours</span>
              <p className="c-note">Early mornings, evenings, and weekends — we work around your schedule.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
