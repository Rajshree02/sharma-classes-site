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
            <li><a href="#programs">Programs</a></li>
            <li><a href="#about">About</a></li>
            {/* <li><a href="#testimonials">Testimonials</a></li> */}
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <a className="cta" href="http://127.0.0.1:5500/login.html">Login</a>
      </div>
    </header>
  );
};

export default Header;
