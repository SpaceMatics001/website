import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <Link to="/home">SpaceMatics</Link>
        </div>
        <nav>
          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <li>
              <Link to="/home" className='hover:underline'>Home</Link>
            </li>
            <li>
              <Link to="/about" className='hover:underline'>About</Link>
            </li>
            <li>
              <Link to="/missions" className='hover:underline'>Missions</Link>
            </li>
            <li>
              <Link to="/team" className='hover:underline'>Team</Link>
            </li>
            <li>
              <Link to="/contact" className='hover:underline'>Contact</Link>
            </li>
          </ul>
        </nav>
        <div className="hamburger" onClick={toggleMenu}>
          <div className={`bar ${isMenuOpen ? 'active' : ''}`}></div>
          <div className={`bar ${isMenuOpen ? 'active' : ''}`}></div>
          <div className={`bar ${isMenuOpen ? 'active' : ''}`}></div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
