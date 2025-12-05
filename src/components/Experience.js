import React from 'react';

const Experience = () => {
  const experiences = [
    {
      date: 'Jul 2021 – Jun 2023',
      title: 'Frontend Software Engineer',
      company: 'IBM',
      location: 'Hyderabad, Telangana, India · Hybrid',
      description: 'Built large-scale, reusable React & TypeScript components, reducing development redundancy by 60% and enabling faster, consistent feature delivery for Philip Morris International. Delivered pixel-perfect, interactive UIs for Walgreens Boots that simplified workflows, increased adoption, and reduced support tickets. Engineered scalable micro-frontend architecture with secure dynamic routing for Maersk, cutting page load times from 8 seconds to 3 seconds and supporting high-traffic global workflows. Translated complex business requirements into intuitive digital experiences, collaborating closely with UX and product teams to improve end-user satisfaction and adoption. Elevated team efficiency and code quality by implementing CI/CD pipelines, mentoring peers, and enforcing best practices, reducing post-release issues and accelerating iterations.',
      skills: ['React', 'TypeScript', 'Micro-Frontend Architecture', 'JavaScript', 'Node.js', 'CI/CD Pipelines', 'Performance Optimization', 'UI/UX Design', 'Mentoring']
    },
    {
      date: 'May 2021 – Jul 2021',
      title: 'Frontend Developer Mobile-React Native',
      company: 'Steady Rabbit',
      location: 'Remote',
      description: 'Developed interactive hybrid mobile app features including dark mode and theme switching, improving usability and engagement for diverse user preferences. Integrated backend APIs to optimize data flow and app reliability, minimizing crashes during high-traffic periods. Enhanced mobile user experience through responsive design, ensuring smooth interactions across devices.',
      skills: ['React Native', 'Mobile Application Development', 'API Integration', 'Responsive Design', 'Dark Mode Implementation']
    },
    {
      date: 'Jul 2019 – Dec 2019',
      title: 'Mobile Application Developer (Intern)',
      company: 'Arawinz Soft Solutions Pvt Ltd',
      location: 'Hyderabad, TG, India · On-site',
      description: 'Developed cross-platform mobile features for the "ESAY" app using React Native, delivering intuitive, responsive UI for both Android and iOS platforms. Contributed to the development of the company\'s official website using HTML, CSS, and JavaScript, enhancing design responsiveness and boosting mobile compatibility.',
      skills: ['React Native', 'HTML/CSS', 'JavaScript', 'Cross-Platform Development', 'Responsive Design']
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
                  {exp.location && <div className="timeline-location">{exp.location}</div>}
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
