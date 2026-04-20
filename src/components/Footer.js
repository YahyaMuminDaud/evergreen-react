import React from 'react';
import { Link } from 'react-router-dom';
import PineSVG from './PineSVG';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <Link className="footer-logo" to="/">
          <div className="footer-emblem"><PineSVG width={40} height={40} variant="og" /></div>
          <div>
            <div className="footer-name">Evergreen Matf LLC</div>
            <div className="footer-sub">Commercial Cleaners</div>
          </div>
        </Link>
        <div className="footer-copy">
          <div>Washington State &nbsp;·&nbsp; (253) 304-7500</div>
          <div>© 2025 Evergreen Matf LLC. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
