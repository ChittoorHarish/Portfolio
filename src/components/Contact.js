import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-content">
        <h2>Let's Work Together</h2>
        <p>
          Ready to bring your next project to life? I'd love to hear about your ideas, 
          challenges, and vision. Let's create something amazing together.
        </p>

        <div className="contact-buttons">
          <a href="mailto:harish@example.com" className="contact-btn">
            📧 Send Email
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="contact-btn">
            💼 LinkedIn
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="contact-btn">
            💻 GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
