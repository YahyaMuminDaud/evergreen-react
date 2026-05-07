import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import PineSVG from './PineSVG';
import './Nav.css';

export default function Nav() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleContact = (e) => {
    e.preventDefault();
    const isHome = pathname === '/' || pathname === '/evergreen-react' || pathname === '/evergreen-react/';
    if (!isHome) {
      navigate('/');
      setTimeout(() => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      }, 500);
    } else {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-inner">
        <Link className="nav-logo" to="/">
          <div className="nav-logo-circle"><PineSVG width={60} height={60} variant="og" /></div>
          <div className="nav-brand">
            <span className="top">Evergreen Matf LLC</span>
            <span className="bottom">Commercial Cleaners</span>
          </div>
        </Link>
        <div className="nav-links">
          <Link to="/"         className={pathname === '/'         ? 'active' : ''}>Home</Link>
          <Link to="/services" className={pathname === '/services' ? 'active' : ''}>Services</Link>
          <Link to="/why-us"   className={pathname === '/why-us'   ? 'active' : ''}>Why Us</Link>
          <a href="#contact" className="nav-cta" onClick={handleContact}>Contact Us</a>
        </div>
      </div>
    </nav>
  );
}