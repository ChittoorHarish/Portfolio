import React from 'react';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <h2>About</h2>
        <p>
          I'm a passionate frontend developer with 5+ years of experience creating stunning, 
          user-centric web applications. My journey in tech has been driven by curiosity, 
          dedication, and a love for clean code.
        </p>
        <p>
          Starting my career at IBM, I learned the importance of scalability and enterprise-level 
          solutions. Transitioning to startup environments taught me agility, innovation, and how 
          to build products that resonate with users. This unique blend of experiences shapes how 
          I approach every project.
        </p>
        <p>
          When I'm not coding, I'm exploring emerging technologies, contributing to open-source 
          projects, or mentoring junior developers. I believe in continuous learning and the power 
          of collaborative teamwork to create remarkable products.
        </p>

        <div className="about-highlights">
          <div className="highlight-item">
            <h4>🎯 Problem Solver</h4>
            <p>Breaking down complex challenges into elegant, performant solutions</p>
          </div>
          <div className="highlight-item">
            <h4>🚀 Performance Focused</h4>
            <p>Optimizing for speed, accessibility, and user experience</p>
          </div>
          <div className="highlight-item">
            <h4>💻 Full-Stack Capable</h4>
            <p>Frontend specialist with backend knowledge using Node.js & APIs</p>
          </div>
          <div className="highlight-item">
            <h4>🤝 Team Player</h4>
            <p>Collaborative mindset with excellent communication skills</p>
          </div>
        </div>
      </div>

      <div className="about-image">
        <div className="about-image-box">
          {/* Placeholder for additional visual content */}
        </div>
      </div>
    </section>
  );
};

export default About;
