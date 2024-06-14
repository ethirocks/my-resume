import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <div>
        <h3>Application Monitor</h3>
        <p>Developed a Java application to monitor metrics such as health, temperature, processor count, and thread counts. Stored metrics in a database and displayed them graphically for application owners. Implemented alert system for extreme conditions and hosted the application on AWS.</p>
      </div>
      <div>
        <h3>Request Portal</h3>
        <p>Developed an application for file validation and storage. Validated files (PDF, TXT, CSV) based on certain conditions, stored valid files in an S3 bucket, and logged request details in a DynamoDB table. Created a responsive frontend with form validation and user messaging.</p>
      </div>
      <div>
        <h3>Temporal Ensembling with Semi-Supervised Learning</h3>
        <p>Conducted research to improve model performance. Implemented the paper "Temporal Ensembling with Semi-Supervised Learning" in Python using TensorFlow. Compared the performance of models under various conditions and against other semi-supervised learning models like GAN.</p>
      </div>
    </section>
  );
};

export default Projects;
