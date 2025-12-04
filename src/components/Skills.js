import React, { useState, useEffect, useMemo } from 'react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('Frontend');
  const [animatedSkills, setAnimatedSkills] = useState({});

  const skillsData = useMemo(() => ({
    Frontend: [
      { name: 'React', level: 95, icon: '⚛️' },
      { name: 'TypeScript', level: 92, icon: '🔷' },
      { name: 'JavaScript', level: 95, icon: '🟨' },
      { name: 'HTML/CSS', level: 96, icon: '🎨' },
      { name: 'TailwindCSS', level: 94, icon: '🎯' },
      { name: 'Next.js', level: 88, icon: '▲' }
    ],
    Backend: [
      { name: 'Node.js', level: 88, icon: '🟢' },
      { name: 'Express', level: 85, icon: '📦' },
      { name: 'MongoDB', level: 85, icon: '🍃' },
      { name: 'PostgreSQL', level: 80, icon: '🐘' },
      { name: 'Firebase', level: 82, icon: '🔥' },
      { name: 'Python', level: 75, icon: '🐍' }
    ],
    Tools: [
      { name: 'Git', level: 94, icon: '📚' },
      { name: 'Docker', level: 78, icon: '🐳' },
      { name: 'AWS', level: 80, icon: '☁️' },
      { name: 'Figma', level: 85, icon: '🎯' },
      { name: 'Webpack', level: 82, icon: '📦' },
      { name: 'CI/CD', level: 83, icon: '🚀' }
    ],
    Design: [
      { name: 'UI/UX Design', level: 88, icon: '🎨' },
      { name: 'Web Accessibility', level: 90, icon: '♿' },
      { name: 'Responsive Design', level: 95, icon: '📱' },
      { name: 'Animation', level: 85, icon: '✨' },
      { name: 'Prototyping', level: 84, icon: '🔨' },
      { name: 'Design Systems', level: 87, icon: '🎭' }
    ]
  }), []);

  useEffect(() => {
    const currentSkills = skillsData[activeCategory];
    const animated = {};
    currentSkills.forEach(skill => {
      animated[skill.name] = skill.level;
    });
    setAnimatedSkills(animated);
  }, [activeCategory, skillsData]);

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <div className="section-header">
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">
            Comprehensive expertise across modern web technologies, frameworks, and development tools
          </p>
        </div>

        <div className="filter-buttons">
          {Object.keys(skillsData).map(category => (
            <button
              key={category}
              className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="skills-grid">
          {skillsData[activeCategory].map((skill) => (
            <div key={skill.name} className="skill-category-group">
              <div className="category-title">
                <span className="category-icon">{skill.icon}</span>
                {skill.name}
              </div>

              <div className="skill-item">
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-level">{animatedSkills[skill.name] || 0}%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-fill"
                    style={{
                      width: `${animatedSkills[skill.name] || 0}%`
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div style={{ marginTop: '80px', textAlign: 'center' }}>
          <h3 style={{ fontSize: '1.8rem', marginBottom: '40px', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            Why Work With Me?
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
            <div style={{ padding: '25px', background: 'white', borderRadius: '10px', boxShadow: '0 5px 20px rgba(0,0,0,0.08)' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>🚀</div>
              <h4 style={{ marginBottom: '10px', color: '#667eea' }}>Performance</h4>
              <p style={{ color: '#666', fontSize: '0.9rem' }}>Optimized applications achieving 90+ Lighthouse scores consistently</p>
            </div>
            <div style={{ padding: '25px', background: 'white', borderRadius: '10px', boxShadow: '0 5px 20px rgba(0,0,0,0.08)' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>♿</div>
              <h4 style={{ marginBottom: '10px', color: '#667eea' }}>Accessibility</h4>
              <p style={{ color: '#666', fontSize: '0.9rem' }}>WCAG 2.1 AAA compliance and inclusive design principles</p>
            </div>
            <div style={{ padding: '25px', background: 'white', borderRadius: '10px', boxShadow: '0 5px 20px rgba(0,0,0,0.08)' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>🎯</div>
              <h4 style={{ marginBottom: '10px', color: '#667eea' }}>Scalability</h4>
              <p style={{ color: '#666', fontSize: '0.9rem' }}>Architected systems handling millions of transactions safely</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
