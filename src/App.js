import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, ThemeContext } from './components/ThemeProvider';
import { useContext } from 'react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function AppContent() {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <Router>
      <div className="App">
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
