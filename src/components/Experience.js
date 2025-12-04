import React from 'react';

const Experience = () => {
  const experiences = [
    {
      date: 'Jan 2020 – Aug 2023',
      title: 'Senior Application Developer',
      company: 'IBM',
      description: 'Led development of enterprise-scale React applications serving Fortune 500 clients. Architected responsive interfaces handling millions of transactions, implemented performance optimizations reducing load times by 60%, and mentored junior developers on best practices.',
      skills: ['React', 'TypeScript', 'Redux', 'Material-UI', 'Performance Optimization']
    },
    {
      date: 'Sep 2023 – Jan 2024',
      title: 'Full Stack Developer',
      company: 'Startup X',
      description: 'Rapidly built MVP for AI-powered SaaS platform. Integrated OpenAI APIs, designed intuitive dashboard UI, implemented real-time updates, and deployed scalable infrastructure on AWS. Drove 300% user growth in first quarter.',
      skills: ['React', 'Node.js', 'Firebase', 'OpenAI API', 'AWS']
    },
    {
      date: 'Feb 2024 – Present',
      title: 'Frontend Consultant',
      company: 'Independent',
      description: 'Partnering with 5+ SaaS companies to deliver pixel-perfect interfaces and exceptional user experiences. Specialized in design system development, accessibility compliance (WCAG), and performance optimization.',
      skills: ['React', 'Next.js', 'Tailwind CSS', 'Storybook', 'Web Accessibility']
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="experience-container-inner">
        <div className="section-header">
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle">
            A journey through impactful projects, collaborative teams, and continuous growth
          </p>
        </div>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-date">{exp.date}</div>
              <div>
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h3>{exp.title}</h3>
                  <div className="timeline-company">{exp.company}</div>
                  <p className="timeline-description">{exp.description}</p>
                  <div className="experience-skills">
                    {exp.skills.map((skill, idx) => (
                      <span key={idx} className="exp-skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
