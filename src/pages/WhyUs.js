import React from 'react';
import { Link } from 'react-router-dom';
import './WhyUs.css';

const whyCards = [
  { icon: <polyline points="20 6 9 17 4 12"/>, title: 'Reliable & Consistent',      desc: 'We show up on schedule, every time. No missed appointments, no excuses — count on us like clockwork.' },
  { icon: <><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></>, title: 'Detail-Oriented Cleaning', desc: "We don't cut corners. Every surface, every corner, every time — cleaned to a professional standard." },
  { icon: <><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></>, title: 'Flexible Scheduling',       desc: 'Early mornings, evenings, weekends — we work around your business hours.' },
  { icon: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></>, title: 'Customized Plans',          desc: 'No two businesses are the same. We build a plan specifically tailored to your space and budget.' },
  { icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>,                  title: 'Professional & Trustworthy', desc: 'We treat every business as if it were our own. Your space is always in safe hands.' },
  { icon: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></>, title: 'Local Washington Team',     desc: "We're a local Washington State business — invested in our community and the businesses we serve." },
];

const stats = [
  { num: '3',    label: 'Service Tiers' },
  { num: '100%', label: 'Custom Plans' },
  { num: 'WA',   label: 'State-Wide Service' },
  { num: '24/7', label: 'Flexible Scheduling' },
];

const values = [
  { num: '01', title: 'Integrity in Every Clean',   desc: "We do what we say we're going to do. If something isn't right, we make it right — no questions asked." },
  { num: '02', title: 'Respect for Your Space',     desc: "We treat every workspace with the same care we'd give our own — careful with your property, equipment, and trust." },
  { num: '03', title: 'Community First',            desc: "As a Washington State business, we're proud to serve the local community and show up for the businesses around us." },
  { num: '04', title: 'Continuous Improvement',     desc: "We're always looking for better ways to serve you — new techniques, better products, and more responsiveness." },
];

const cities = ['Tacoma','Kent','Auburn','Federal Way','Renton','Seattle','Bellevue','Puyallup','Burien','Tukwila','Des Moines','SeaTac'];

export default function WhyUs() {
  return (
    <>
      {/* PAGE HERO */}
      <div className="page-hero">
        <div className="page-hero-bg" /><div className="page-hero-grid" />
        <div className="page-hero-content fade-up">
          <p className="section-label">Why Choose Us</p>
          <h1 className="section-title">The Evergreen Difference</h1>
          <p>We don't just clean spaces — we build lasting relationships with the businesses that trust us.</p>
        </div>
      </div>

      {/* WHY CARDS */}
      <section className="why-section">
        <div className="section-inner">
          <p className="section-label">What Sets Us Apart</p>
          <h2 className="section-title">Built on Trust, Results &amp; Reliability</h2>
          <div className="divider" />
          <div className="why-grid">
            {whyCards.map((card, i) => (
              <div className="why-card" key={i}>
                <div className="why-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#6b7c1e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {card.icon}
                  </svg>
                </div>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROMISE */}
      <section className="promise-section">
        <div className="section-inner">
          <div className="promise-grid">
            <div className="promise-text">
              <p className="section-label">Our Promise</p>
              <h2 className="section-title">We Take Your Space Personally</h2>
              <div className="divider" />
              <p>At Evergreen Matf LLC, a clean workspace isn't just about appearances — it's about the health of your employees, the impression you make on clients, and the pride you take in your business.</p>
              <p>When you work with us, you're not just hiring a cleaning company — you're gaining a partner committed to the success of your space.</p>
              <Link to="/#contact" className="btn-primary" style={{ marginTop: '1.25rem', display: 'inline-block' }}>Get In Touch</Link>
            </div>
            <div className="promise-stats">
              {stats.map((s, i) => (
                <div className="stat-card" key={i}>
                  <div className="stat-num">{s.num}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="values-section">
        <div className="section-inner">
          <p className="section-label">Our Values</p>
          <h2 className="section-title">What We Stand For</h2>
          <div className="divider" />
          <div className="values-list">
            {values.map((v, i) => (
              <div className="value-item" key={i}>
                <div className="value-num">{v.num}</div>
                <div className="value-content">
                  <h3>{v.title}</h3>
                  <p>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE AREA */}
      <section className="area-section">
        <div className="section-inner">
          <p className="section-label">Where We Serve</p>
          <h2 className="section-title">Washington State Service Area</h2>
          <div className="divider" />
          <p style={{ color: 'var(--text-muted)', fontSize: '15px', maxWidth: '540px' }}>
            We serve businesses across the greater Puget Sound region. Don't see your city? Give us a call — we may still be able to help.
          </p>
          <div className="area-grid">
            {cities.map(city => <div className="area-tag" key={city}>{city}</div>)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <h2>Let's Work Together</h2>
        <p>Join businesses across Washington State that trust Evergreen Matf LLC to keep their spaces clean.</p>
        <Link to="/#contact" className="btn-white">Get In Touch</Link>
        <div className="cta-number">(253) 304-7500</div>
      </section>
    </>
  );
}
