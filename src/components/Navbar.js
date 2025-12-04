import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <Link to="/" className="nav-brand">
        <div className="nav-logo-icon">HC</div>
        Harish Chittoor
      </Link>

      <div className="nav-center">
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>

      <div className="nav-right">
        <button className="theme-toggle" onClick={toggleTheme}>
          🌙
        </button>
        <button className="cta-button">Let's Talk</button>
      </div>
    </nav>
  );
};

export default Navbar;
