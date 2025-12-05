import React, { useState } from 'react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'AI-Powered Analytics Dashboard',
      description: 'Enterprise dashboard with real-time data visualization, ML-powered insights, and customizable widgets. Built for analyzing complex datasets with interactive D3 charts.',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324ef6e9?w=500&h=250&fit=crop',
      techStack: ['React', 'TypeScript', 'D3.js', 'Redux', 'TailwindCSS'],
      liveDemo: 'https://analytics-demo.com',
      github: 'https://github.com/harishchittoor/analytics-dashboard',
      category: 'Frontend',
      impact: '500K+ data points processed daily'
    },
    {
      id: 2,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with Stripe integration, real-time inventory, user authentication, and admin dashboard. Handles thousands of transactions securely.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=250&fit=crop',
      techStack: ['React', 'Node.js', 'MongoDB', 'Stripe', 'JWT'],
      liveDemo: 'https://ecommerce-demo.com',
      github: 'https://github.com/harishchittoor/ecommerce',
      category: 'Full-Stack',
      impact: '10K+ monthly users'
    },
    {
      id: 3,
      title: 'Real-time Collaboration Tool',
      description: 'Collaborative workspace with WebRTC integration, real-time document editing, video conferencing, and presence awareness. Enables seamless team coordination.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=250&fit=crop',
      techStack: ['React', 'WebRTC', 'Socket.io', 'Express', 'MongoDB'],
      liveDemo: 'https://collab-demo.com',
      github: 'https://github.com/harishchittoor/collab-tool',
      category: 'Full-Stack',
      impact: '99.9% uptime'
    },
    {
      id: 4,
      title: 'Task Management SaaS',
      description: 'Intelligent task management with AI suggestions, team collaboration, time tracking, and automated reporting. Features drag-and-drop kanban boards and custom workflows.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=250&fit=crop',
      techStack: ['React', 'Next.js', 'Firebase', 'TailwindCSS', 'OpenAI API'],
      liveDemo: 'https://tasks-demo.com',
      github: 'https://github.com/harishchittoor/task-manager',
      category: 'Frontend',
      impact: '5K+ active users'
    },
    {
      id: 5,
      title: 'AI Chatbot Interface',
      description: 'Intelligent chatbot with natural language processing, sentiment analysis, and multi-language support. Integrates with GPT APIs for contextual conversations.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=250&fit=crop',
      techStack: ['React', 'React Native', 'OpenAI', 'Node.js', 'PostgreSQL'],
      liveDemo: 'https://chatbot-demo.com',
      github: 'https://github.com/harishchittoor/chatbot',
      category: 'Full-Stack',
      impact: '100K+ conversations'
    },
    {
      id: 6,
      title: 'Design System & Component Library',
      description: 'Comprehensive React component library with 100+ reusable components, documentation, Storybook integration, and accessibility guidelines (WCAG 2.1 AAA).',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=250&fit=crop',
      techStack: ['React', 'TypeScript', 'Storybook', 'TailwindCSS', 'Chromatic'],
      liveDemo: 'https://design-system.com',
      github: 'https://github.com/harishchittoor/design-system',
      category: 'Frontend',
      impact: 'Used by 50+ teams'
    },
    {
      id: 7,
      title: 'TechVen — Music Player (DJ System)',
      description: 'Feature-rich web music player with real-time audio transformations, an integrated DJ mode (3-band EQ + filters), host-only DJ controls, uploadable local audio, and powerful Web Audio API effects (Lo-Fi, Nightcore, 8D, EDM, reverb, distortion and more).',
      image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=500&h=250&fit=crop',
      techStack: ['React', 'Zustand', 'Web Audio API', 'TailwindCSS'],
      liveDemo: 'https://chittoorharish.github.io/MusicPlayer/',
      github: 'https://github.com/ChittoorHarish/MusicPlayer/tree/DJsystem',
      category: 'Audio',
      impact: 'Real-time audio processing, DJ panel, and 10+ transformation presets',
      highlights: [
        'Real-time audio transformations: Lo-Fi, EDM, Slowed, Nightcore, Bass Boost, Vintage and more',
        'Upload local audio files (MP3/WAV/OGG) — effects work without CORS restrictions',
        'Integrated DJ Panel (host-only) with 3-band EQ (±12dB) and filter types (lowpass, highpass, bandpass)',
        'DJ sound effects (airhorn, scratch, drop) — synthetic by default, supports real MP3s',
        'Advanced Web Audio API usage: reverb, delay, distortion, 8D spatial panning, dynamic compression',
        'Speed/tempo controls for Nightcore/Slowed/Upbeat variations and kick drum synthesizer for EDM effect',
        'Zustand for lightweight state management and TailwindCSS for responsive UI',
        'Thoughtful UX: host-only controls, graceful fallbacks, mobile-friendly modal and sliders',
      ]
    }
  ];

  const categories = ['All', 'Frontend', 'Full-Stack', 'Audio'];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Showcase of recent work demonstrating expertise in modern web technologies and exceptional user experiences
          </p>
        </div>

        <div className="filter-buttons">
          {categories.map(category => (
            <button
              key={category}
              className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div
              key={project.id}
              className="project-card"
              onClick={() => setSelectedProject(project)}
            >
              <div style={{ position: 'relative' }}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
              </div>

              <div className="project-content">
                <span className="project-tag">{project.category}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tech">
                  {project.techStack.slice(0, 3).map((tech, idx) => (
                    <span key={idx} className="tech-badge">{tech}</span>
                  ))}
                </div>

                <div className="project-links" style={{ marginTop: '15px' }}>
                  <a href={project.github} className="project-link secondary" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                  <a href={project.liveDemo} className="project-link" target="_blank" rel="noopener noreferrer">
                    View Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="modal-overlay-project" onClick={() => setSelectedProject(null)}>
          <div className="modal-content-project" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProject(null)}>✕</button>
            <img src={selectedProject.image} alt={selectedProject.title} style={{ width: '100%', maxHeight: '300px', objectFit: 'cover', borderRadius: '10px 10px 0 0' }} />
            <div style={{ padding: '30px' }}>
              <h2>{selectedProject.title}</h2>
              <p style={{ color: '#666', marginBottom: '20px', lineHeight: '1.6' }}>{selectedProject.description}</p>
              {selectedProject.highlights && (
                <div style={{ marginBottom: '18px' }}>
                  <h4 style={{ marginBottom: '8px' }}>Key Highlights</h4>
                  <ul style={{ paddingLeft: '20px', margin: 0, color: '#444' }}>
                    {selectedProject.highlights.map((h, i) => (
                      <li key={i} style={{ marginBottom: '6px' }}>{h}</li>
                    ))}
                  </ul>
                </div>
              )}
              <h4 style={{ marginBottom: '10px' }}>Tech Stack</h4>
              <div className="project-tech" style={{ marginBottom: '25px' }}>
                {selectedProject.techStack.map((tech, idx) => (
                  <span key={idx} className="tech-badge">{tech}</span>
                ))}
              </div>
              {selectedProject.impact && (
                <div style={{ background: '#f0f0f0', padding: '15px', borderRadius: '10px', marginBottom: '20px' }}>
                  <strong>Impact:</strong> {selectedProject.impact}
                </div>
              )}
              <div className="project-links">
                <a href={selectedProject.github} className="project-link secondary" target="_blank" rel="noopener noreferrer">
                  View on GitHub
                </a>
                <a href={selectedProject.liveDemo} className="project-link" target="_blank" rel="noopener noreferrer">
                  View Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .modal-overlay-project {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 999;
        }
        .modal-content-project {
          background: white;
          border-radius: 15px;
          max-width: 600px;
          width: 90%;
          max-height: 85vh;
          overflow-y: auto;
          position: relative;
        }
        .dark .modal-content-project {
          background: #1a1f3a;
          color: #e0e0e0;
        }
        .dark .modal-content-project h2 {
          color: #e0e0e0;
        }
        .dark .modal-content-project p {
          color: #ccc;
        }
        .dark .modal-content-project h4 {
          color: #e0e0e0;
        }
        .modal-content-project .modal-close {
          position: absolute;
          top: 15px;
          right: 15px;
          background: rgba(0,0,0,0.5);
          border: none;
          color: white;
          font-size: 1.5rem;
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
        }
      `}</style>
    </section>
  );
};

export default Projects;
