import React from 'react';
import logo from '../assets/infinity_and_beyond.png';

// 1. ADDED: { onRegisterClick } inside the brackets so this file can receive the trigger from App.jsx
const Header = ({ onRegisterClick }) => {
  return (
    <header>
      <div className="container nav">
        <div className="brand">
          <div className="logo" aria-hidden="true">
              <img src={logo} alt="Sharma Classes Logo"/>
          </div>
          <a href="#" aria-label="Elevate Coaching Home">Sharma Classes</a>
        </div>
        <nav aria-label="Primary">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#courses">Courses</a></li>
            <li><a href="#about">About</a></li>
            
            {/* 2. CHANGED: Added onClick={onRegisterClick} and changed href to prevent scrolling */}
            <li>
              <a 
                href="#" 
                onClick={(e) => {
                  e.preventDefault(); // Prevents the browser from jumping or reloading the page
                  onRegisterClick();  // Flips the switch to TRUE in App.jsx!
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