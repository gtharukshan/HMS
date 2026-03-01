import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="name">
        <h1 className="logo-text">
          <span className="logo-icon">➕</span> HMS
        </h1>
      </div>

      <nav className="navbar">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#service">Service</a>
        <a href="#gallery">Gallery</a>
        <a href="#blog">Blog</a>
        <a href="#contact">Contact</a>
      </nav>

      <div className="right-icons">
        <div id="menu-bars" className="fas fa-bars"></div>
        <div className="btn">Make Appointment</div>
      </div>
    </header>
  );
};

export default Header;
