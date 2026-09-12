import React, { useState } from 'react';
import logo from '../assets/infinity_and_beyond.png';

const Header = ({ onRegisterClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header>
      <div className="container nav">
        <div className="brand">
          <div className="logo" aria-hidden="true">
            <img src={logo} alt="" />
          </div>
          <a href="#home" aria-label="Sharma Classes Home" onClick={closeMenu}>
            Sharma Classes
          </a>
        </div>
        <button
          type="button"
          className="nav-toggle"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav aria-label="Primary" className={menuOpen ? 'open' : ''}>
          <ul>
            <li><a href="#home" onClick={closeMenu}>Home</a></li>
            <li><a href="#courses" onClick={closeMenu}>Courses</a></li>
            <li><a href="#about" onClick={closeMenu}>About</a></li>
            <li>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  closeMenu();
                  onRegisterClick();
                }}
              >
                Contact us
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;