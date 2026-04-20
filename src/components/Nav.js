import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import PineSVG from './PineSVG';
import './Nav.css';

export default function Nav() {
  const { pathname } = useLocation();

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
          <Link to="/"          className={pathname === '/'          ? 'active' : ''}>Home</Link>
          <Link to="/services"  className={pathname === '/services'  ? 'active' : ''}>Services</Link>
          <Link to="/why-us"    className={pathname === '/why-us'    ? 'active' : ''}>Why Us</Link>
          <Link to="/#contact"  className="nav-cta">Contact Us</Link>
        </div>
      </div>
    </nav>
  );
}
