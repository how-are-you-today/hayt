import React from 'react';
import { Link } from 'react-router-dom'; // If you are using React Router for routing
import './NavBar.css';
import logo from './team-logo.png';
function NavBar() {
  return (
    <nav>
      <a>
        HOW ARE YOU TODAY?
      </a>
      <ul>
        <li>
          
          <Link to="/" className='custom-button'>HOME</Link>
          
        </li>
        <li>
          <Link to="/blog" className='custom-button'>BLOG</Link>
        </li>
        <li>
          <Link to="/contact" className='custom-button'>CONTACT</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;