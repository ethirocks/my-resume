import React from 'react';
import TypingEffect from './TypingEffect';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero" id="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Ethiraj Mudhaliar</h1>
          <TypingEffect text="Software Developer | Engineer | Innovator" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
