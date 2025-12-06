import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, ThemeContext } from './components/ThemeProvider';
import { useContext, useState, useEffect } from 'react';

import Intro from './components/Intro';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function AppContent() {
  const { toggleTheme } = useContext(ThemeContext);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = window.scrollY;
      const progress = windowHeight > 0 ? (scrolled / windowHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  return (
    <Router>
      <div className="App">
        {showIntro && <Intro onComplete={handleIntroComplete} />}
        <div className="smoke-container">
          <div className="smoke-plume sp-1"></div>
          <div className="smoke-plume sp-2"></div>
          <div className="smoke-plume sp-3"></div>
          <div className="smoke-plume sp-4"></div>
          <div className="smoke-plume sp-5"></div>
          <div className="smoke-plume sp-6"></div>
          <div className="smoke-plume sp-7"></div>
          <div className="smoke-plume sp-8"></div>
        </div>
        
        <div className="scroll-progress" style={{ width: `${scrollProgress}%` }}></div>
        <Navbar toggleTheme={toggleTheme} />
        <Routes>
          {/* Home Route */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Experience />
                <Education />
                <Certifications />
                <Projects />
                <Skills />
                <Contact />
                <Footer />
              </>
            }
          />

          {/* Projects Route */}
          <Route path="/projects" element={<Projects />} />

          {/* Skills Route */}
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </div>
    </Router>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
