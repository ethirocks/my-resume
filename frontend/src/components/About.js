import React from 'react';
import './About.css';
import { FaLaptopCode, FaProjectDiagram, FaUserFriends } from 'react-icons/fa';

const About = () => {
  return (
    <div className="about box" id="about" data-aos="fade-up">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="about-section">
          <FaLaptopCode className="about-icon" />
          <p>
            I am a passionate and dedicated Software Developer with extensive experience in developing high-quality, scalable, and efficient software solutions. With a strong background in various programming languages and technologies, I excel in both front-end and back-end development.
          </p>
        </div>
        <div className="about-section">
          <FaProjectDiagram className="about-icon" />
          <p>
            Over the years, I have contributed to multiple projects, ranging from developing robust backend services to creating intuitive and responsive user interfaces. My experience spans across various domains, including e-commerce, data science, and cloud computing.
          </p>
        </div>
        <div className="about-section">
          <FaUserFriends className="about-icon" />
          <p>
            I am a team player who thrives in collaborative environments and enjoys brainstorming and implementing innovative solutions to complex problems. My goal is to leverage my skills and experience to make a positive impact on any team I am a part of and to continue growing as a professional in the field of software development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
