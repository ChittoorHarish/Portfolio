import React from 'react';

const Education = () => {
  const education = [
    {
      school: 'The University of Texas at Dallas',
      degree: "Master's Degree",
      field: 'Information Technology and Management',
      period: 'Aug 2023 - May 2025',
      skills: ['Smart Contracts', 'Front-end Development', 'Blockchain', 'Web3', 'Full-Stack Development', 'Cloud Computing', 'DevOps', 'Advanced Algorithms', 'Software Architecture'],
      status: 'In Progress'
    },
    {
      school: 'ICFAI University',
      degree: "Bachelor's Degree",
      field: 'Computer Science / Engineering',
      period: 'Graduated',
      skills: ['Agile Methodologies', 'Data Structures', 'Object-Oriented Programming'],
      status: 'Completed'
    }
  ];

  return (
    <section id="education" className="education-section">
      <div className="education-container-inner">
        <div className="section-header">
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">
            Continuous learning and academic excellence driving technical expertise
          </p>
        </div>

        <div className="education-grid">
          {education.map((edu, index) => (
            <div key={index} className="education-card">
              <div className="education-header">
                <div>
                  <h3 className="education-degree">{edu.degree}</h3>
                  <p className="education-school">{edu.school}</p>
                  <p className="education-field">{edu.field}</p>
                </div>
                <span className={`education-status ${edu.status === 'In Progress' ? 'in-progress' : 'completed'}`}>
                  {edu.status}
                </span>
              </div>
              <p className="education-period">{edu.period}</p>
              
              <div className="education-skills">
                <h4>Key Coursework & Skills</h4>
                <div className="skills-list">
                  {edu.skills.map((skill, idx) => (
                    <span key={idx} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
