import React from 'react';
import './App.css';
import Header from './components/Header';
import Education from './components/Education';
import Experience from './components/Experience';
import Internships from './components/Internships';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Education />
        <Experience />
        <Internships />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;
