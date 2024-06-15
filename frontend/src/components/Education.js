import React from 'react';
import './Education.css';
import '../CommonStyles.css'; // Import the common styles

const Education = () => {
  return (
    <div className="education box" id="education" data-aos="fade-up">
      <h2 className="section-title">Education</h2>
      <div className="education-section">
        <h3>M.S in Computer Science and Engineering</h3>
        <p>University at Buffalo SUNY, Aug 2019 – Jan 2021</p>
      </div>
      <div className="education-section">
        <h3>B.Tech in Computer Science and Engineering</h3>
        <p>Vellore Institute of Technology, Jun 2014 – May 2018</p>
      </div>
    </div>
  );
};

export default Education;
