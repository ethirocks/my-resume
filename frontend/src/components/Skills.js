import React from 'react';
import './Skills.css';
import '../CommonStyles.css'; // Import the common styles

const Skills = () => {
  return (
    <div className="skills box" id="skills" data-aos="fade-up">
      <h2 className="section-title">Skills</h2>
      <div className="skills-section">
        <h3>Databases</h3>
        <p>MongoDB, Influx DB, PostgreSQL, Hibernate, MySQL, SQLs, S3, DynamoDB, Redis Cache</p>
      </div>
      <div className="skills-section">
        <h3>Languages</h3>
        <p>C, C++, JavaScript, Golang, Python, Java, PHP, Prime-Faces, JSF, XML, HTML5, CSS</p>
      </div>
      <div className="skills-section">
        <h3>Platforms, IDEs and Libraries</h3>
        <p>Angular, React</p>
      </div>
      <div className="skills-section">
        <h3>Other</h3>
        <p>Kafka, Microservice, Docker, Kubernetes, Camel, Jenkins, AWS, Airflow, Temporal</p>
      </div>
    </div>
  );
};

export default Skills;
