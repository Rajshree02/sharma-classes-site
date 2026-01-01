import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="container nav">
        <div className="brand">
          <div className="logo" aria-hidden="true"></div>
          <a href="#" aria-label="Elevate Coaching Home">Sharma Classes</a>
        </div>
        <nav aria-label="Primary">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#courses">Courses</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact us</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
