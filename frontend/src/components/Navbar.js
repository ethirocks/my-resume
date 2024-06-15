import React from 'react';
import './Navbar.css';

const logoUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png';

const Navigation = ({ setActiveSection }) => {
  return (
    <nav className="navbar">
      <img 
        src={logoUrl} 
        alt="Logo" 
        className="navbar-logo" 
        onClick={() => setActiveSection('hero')}
      />
      <ul>
        <li><button onClick={() => setActiveSection('about')}><i className="fas fa-user"></i> About</button></li>
        <li><button onClick={() => setActiveSection('experience')}><i className="fas fa-briefcase"></i> Experience</button></li>
        <li><button onClick={() => setActiveSection('education')}><i className="fas fa-graduation-cap"></i> Education</button></li>
        <li><button onClick={() => setActiveSection('internship')}><i className="fas fa-building"></i> Internships</button></li>
        <li><button onClick={() => setActiveSection('projects')}><i className="fas fa-project-diagram"></i> Projects</button></li>
        <li><button onClick={() => setActiveSection('skills')}><i className="fas fa-tools"></i> Skills</button></li>
        <li><button onClick={() => setActiveSection('contact')}><i className="fas fa-envelope"></i> Contact</button></li>
      </ul>
    </nav>
  );
};

export default Navigation;
