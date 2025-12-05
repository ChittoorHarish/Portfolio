import React from 'react';

const Certifications = () => {
  const certifications = [
    {
      title: 'Retail Industry Jumpstart',
      issuer: 'IBM',
      issued: 'Jul 2022',
      credentialId: null,
      category: 'Industry'
    },
    {
      title: 'Enterprise Design Thinking Practitioner',
      issuer: 'IBM',
      issued: 'May 2022',
      credentialId: null,
      category: 'Design'
    },
    {
      title: 'Skills: Code Review',
      issuer: 'IBM',
      issued: 'May 2022',
      credentialId: null,
      category: 'Development'
    },
    {
      title: 'IBM Garage Essentials',
      issuer: 'IBM',
      issued: 'May 2022',
      credentialId: null,
      category: 'Methodology'
    },
    {
      title: 'IBM Garage Foundation',
      issuer: 'IBM',
      issued: 'May 2022',
      credentialId: null,
      category: 'Methodology'
    },
    {
      title: 'Data Science',
      issuer: 'Internshala',
      issued: 'Aug 2020',
      credentialId: 'F2684528-7255-A73A-FDEC-CE23BBF1EFF8',
      category: 'Data Science'
    },
    {
      title: 'Software Development Processes and Methodologies',
      issuer: 'University of Minnesota',
      issued: 'May 2020',
      credentialId: '64NGTHЈDVCEУ',
      category: 'Methodology'
    }
  ];

  const categories = ['All', ...new Set(certifications.map(c => c.category))];

  const [activeCategory, setActiveCategory] = React.useState('All');

  const filteredCerts = activeCategory === 'All'
    ? certifications
    : certifications.filter(c => c.category === activeCategory);

  return (
    <section id="certifications" className="certifications-section">
      <div className="certifications-container-inner">
        <div className="section-header">
          <h2 className="section-title">Licenses & Certifications</h2>
          <p className="section-subtitle">
            Industry-recognized credentials demonstrating expertise and commitment to excellence
          </p>
        </div>

        <div className="cert-filter-buttons">
          {categories.map(category => (
            <button
              key={category}
              className={`cert-filter-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="certifications-grid">
          {filteredCerts.map((cert, index) => (
            <div key={index} className="cert-card">
              <div className="cert-header">
                <h3 className="cert-title">{cert.title}</h3>
                <span className="cert-category-tag">{cert.category}</span>
              </div>
              <p className="cert-issuer">Issued by {cert.issuer}</p>
              <p className="cert-date">📅 {cert.issued}</p>
              {cert.credentialId && (
                <p className="cert-credential">ID: {cert.credentialId}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
