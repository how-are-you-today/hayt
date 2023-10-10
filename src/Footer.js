
import React from 'react';
import './Footer.css';
import logo from './team-logo.png';
function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-logo">
        <img src={logo} alt="Team Logo" />
      </div>
      <div className="social-media">
        <a href="https://www.facebook.com/profile.php?id=61551643094200" target="_blank" rel="noopener noreferrer">
          Facebook Fan Page
        </a>
      </div>
      <div className="contact-info">
        <ul>
            <li> 
                <span>Email: hieu.nguyen260705@hcmut.edu.vn</span>
            </li>
            <li>
                <span>Phone: 0934 826 940</span>
            </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;