import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Ethiraj Mudhaliar</p>
      <div className="social-links">
        <a href="https://linkedin.com/in/ethiraj-mudhaliar" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://github.com/ethirocks" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
      </div>
    </footer>
  );
};

export default Footer;
