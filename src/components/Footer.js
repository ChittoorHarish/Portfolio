import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Harish Chittoor</h3>
          <p>Frontend Developer | React Specialist | Building exceptional digital experiences</p>
          <div className="social-icons">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              GH
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              in
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              𝕏
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Services</h3>
          <ul className="footer-links">
            <li><a href="#contact">Web Development</a></li>
            <li><a href="#contact">UI/UX Design</a></li>
            <li><a href="#contact">Performance</a></li>
            <li><a href="#contact">Consulting</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Get In Touch</h3>
          <p>Ready to collaborate on amazing projects?</p>
          <a href="mailto:harish@example.com" style={{ color: '#667eea', fontWeight: '600', textDecoration: 'none' }}>
            harish@example.com
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Harish Chittoor. All rights reserved. | Crafted with ❤️ and React</p>
      </div>
    </footer>
  );
};

export default Footer;
