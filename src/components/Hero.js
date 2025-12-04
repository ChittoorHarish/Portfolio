import React from "react";
import profilePic from '../assets/harish.png';

const Hero = () => {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-left">
          <div className="hero-tag">Welcome to my portfolio 👋</div>
          <h1 className="hero-title">
            Building <span className="highlight">exceptional</span> digital experiences
          </h1>
          <p className="hero-subtitle">
            Frontend Engineer | React Specialist | UI/UX Enthusiast
          </p>
          <p className="hero-subtitle" style={{ fontSize: '1rem', marginBottom: '30px', color: 'rgba(255,255,255,0.85)' }}>
            Transforming ideas into pixel-perfect, high-performance web applications. 5+ years crafting elegant code with React, TypeScript, and modern web technologies.
          </p>

          <div className="hero-stats">
            <div className="stat">
              <span className="stat-value">5+</span>
              <span className="stat-label">Years Exp</span>
            </div>
            <div className="stat">
              <span className="stat-value">50+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat">
              <span className="stat-value">100%</span>
              <span className="stat-label">Dedicated</span>
            </div>
          </div>

          <div className="hero-cta-group">
            <button 
              className="btn-primary"
              onClick={() => handleScroll('projects')}
            >
              View My Work
            </button>
            <button 
              className="btn-secondary"
              onClick={() => handleScroll('contact')}
            >
              Get In Touch
            </button>
          </div>
        </div>

        <div className="hero-right">
          <div className="profile-image-wrapper">
            <div className="profile-glow"></div>
            <div className="profile-glow-2"></div>
            <img src={profilePic} alt="Harish Chittoor" className="profile-image" />
          </div>

          <div className="floating-card floating-card-1">
            <div className="card-label">⚡ Current Focus</div>
            <div className="card-value">React & TypeScript</div>
          </div>

          <div className="floating-card floating-card-2">
            <div className="card-label">📍 Location</div>
            <div className="card-value">Irving, TX</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
