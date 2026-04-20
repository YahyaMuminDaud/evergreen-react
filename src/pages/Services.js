import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const plans = [
  {
    id: 'standard', badge: 'Standard Care', badgeClass: 'badge-green',
    title: 'Routine Maintenance', price: '$600 – $1,200 / month',
    items: ['Trash removal','Surface & tabletop disinfection','Vacuuming, sweeping & mopping','Bathroom cleaning & sanitation','Dusting — furniture, fixtures, surfaces','Supply restocking (client-provided)','Interior window polishing'],
    note: 'Based on weekly service for 1,000–3,000 sq ft. Final pricing depends on size, condition & frequency.'
  },
  {
    id: 'preventive', badge: 'Preventive Care', badgeClass: 'badge-blue',
    title: 'Detail Cleaning Add-On', price: '$250 – $500 (Add-On)',
    items: ['Table waxing & conditioning','Window polishing & protection','Wall disinfection','Appliance deep cleaning','Electronic surface cleaning','Deep kitchen cleaning'],
    note: 'Recommended monthly or quarterly to maintain and protect your space long-term.'
  },
  {
    id: 'extreme', badge: 'Extreme Care', badgeClass: 'badge-brown',
    title: 'Heavy-Duty Restoration', price: '$1,200 – $3,000+',
    items: ['Floor waxing & polishing','Steam cleaning — floors & furniture','Grease buildup removal','Surface mold treatment (non-hazardous)','High dusting — ceilings, vents, hard-to-reach','Light clutter removal & organization'],
    note: 'On-site quote required. Best for move-in/move-out, post-construction, or neglected spaces.'
  }
];

const tableRows = [
  { feature: 'Trash Removal',           std: true,  prev: false, ext: true  },
  { feature: 'Surface Disinfection',    std: true,  prev: true,  ext: true  },
  { feature: 'Vacuuming & Mopping',     std: true,  prev: false, ext: true  },
  { feature: 'Bathroom Sanitation',     std: true,  prev: false, ext: true  },
  { feature: 'Window Polishing',        std: true,  prev: true,  ext: true  },
  { feature: 'Table Waxing',            std: false, prev: true,  ext: true  },
  { feature: 'Appliance Deep Cleaning', std: false, prev: true,  ext: true  },
  { feature: 'Floor Waxing & Polish',   std: false, prev: false, ext: true  },
  { feature: 'Steam Cleaning',          std: false, prev: false, ext: true  },
  { feature: 'Grease Removal',          std: false, prev: false, ext: true  },
  { feature: 'Mold Treatment',          std: false, prev: false, ext: true  },
  { feature: 'High Dusting',            std: false, prev: false, ext: true  },
];

const steps = [
  { num: '1', title: 'Free Consultation', desc: 'We assess your space, understand your needs, and discuss your goals.' },
  { num: '2', title: 'Custom Quote',       desc: 'You receive a clear, no-obligation quote based on your space and frequency.' },
  { num: '3', title: 'Scheduled Service', desc: 'We clean on your schedule — mornings, evenings, or weekends.' },
  { num: '4', title: 'Consistent Results',desc: 'We show up every time, on time, delivering the same quality you expect.' },
];

export default function Services() {
  return (
    <>
      {/* PAGE HERO */}
      <div className="page-hero">
        <div className="page-hero-bg" /><div className="page-hero-grid" />
        <div className="page-hero-content fade-up">
          <p className="section-label">Our Services</p>
          <h1 className="section-title">Commercial Cleaning Plans</h1>
          <p>Three tiers of professional cleaning — tailored to the size, condition, and needs of your business space.</p>
        </div>
      </div>

      {/* SERVICE CARDS */}
      <section className="services-section">
        <div className="section-inner">
          <p className="section-label">Choose Your Plan</p>
          <h2 className="section-title">Flexible Plans for Every Business</h2>
          <div className="divider" />
          <div className="services-grid">
            {plans.map(plan => (
              <div className="service-card" key={plan.id} id={plan.id}>
                <div className="card-header">
                  <span className={`badge ${plan.badgeClass}`}>{plan.badge}</span>
                  <h3 className="card-title">{plan.title}</h3>
                  <p className="card-price">{plan.price}</p>
                </div>
                <div className="card-body">
                  <ul className="check-list">
                    {plan.items.map((item, i) => <li key={i}>{item}</li>)}
                  </ul>
                  <p className="card-note">{plan.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="comparison-section">
        <div className="section-inner">
          <p className="section-label">Quick Comparison</p>
          <h2 className="section-title">What's Included in Each Plan</h2>
          <div className="divider" />
          <table className="comp-table">
            <thead>
              <tr><th>Feature</th><th>Standard Care</th><th>Preventive Care</th><th>Extreme Care</th></tr>
            </thead>
            <tbody>
              {tableRows.map((row, i) => (
                <tr key={i}>
                  <td>{row.feature}</td>
                  <td className={row.std  ? 'yes' : 'no'}>{row.std  ? '✔' : '—'}</td>
                  <td className={row.prev ? 'yes' : 'no'}>{row.prev ? '✔' : '—'}</td>
                  <td className={row.ext  ? 'yes' : 'no'}>{row.ext  ? '✔' : '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* PROCESS */}
      <section className="process-section">
        <div className="section-inner">
          <p className="section-label">How It Works</p>
          <h2 className="section-title">Our Simple Process</h2>
          <div className="divider" />
          <div className="steps-grid">
            {steps.map(s => (
              <div className="step" key={s.num}>
                <div className="step-num">{s.num}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <h2>Not Sure Which Plan is Right for You?</h2>
        <p>Give us a call — we'll help you figure out the best fit for your space.</p>
        <Link to="/#contact" className="btn-white">Get In Touch</Link>
        <div className="cta-number">(253) 304-7500</div>
      </section>
    </>
  );
}
