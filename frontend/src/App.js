import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Internships from './components/Internships';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StatsSection from './components/StatsSection';
import GamesSection from './components/GamesSection';

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [activeSection, setActiveSection] = useState('hero');

  const handleSetActiveSection = (section) => {
    setActiveSection(section);
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'hero':
        return <Hero />;
      case 'about':
        return <About />;
      case 'experience':
        return <Experience />;
      case 'education':
        return <Education />;
      case 'internship':
        return <Internships />;
      case 'projects':
        return <Projects />;
      case 'skills':
        return <Skills />;
      case 'contact':
        return <Contact />;
      default:
        return <Hero />;
    }
  };

  return (
    <div className="App">
      <Navbar setActiveSection={handleSetActiveSection} />
      <main>
        {renderSection()}
        {activeSection === 'hero' && (
          <>
            <StatsSection />
            <GamesSection />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;
