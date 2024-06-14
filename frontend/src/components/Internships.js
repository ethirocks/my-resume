import React from 'react';
import './Internships.css';

const Internships = () => {
  return (
    <section className="internships">
      <h2>Internships</h2>
      <div>
        <h3>Software Development Engineer Intern, Amazon</h3>
        <p>May 2020 – Aug 2020</p>
        <ul>
          <li>Developed comprehensive backend and frontend solutions in an agile environment, improving product delivery timelines.</li>
          <li>Designed application architecture, including class and sequence diagrams, enhancing system structure and flow.</li>
          <li>Utilized AWS services like DynamoDB and S3, optimizing data storage and retrieval.</li>
          <li>Conducted end-user research and maintained regular communication for needs assessment, ensuring product alignment with user requirements.</li>
          <li>Implemented features like file upload, dynamic table generation, validation, and file download, enhancing user experience.</li>
        </ul>
      </div>
      <div>
        <h3>Research Analyst Intern, Research Guruji</h3>
        <p>Jul 2019 – Aug 2019</p>
        <ul>
          <li>Authored research papers in the deep learning domain, contributing to the field of AI.</li>
          <li>Optimized MongoDB functions through research, significantly improving query time using threading.</li>
          <li>Received the Best Intern Award for outstanding performance and contributions.</li>
        </ul>
      </div>
      <div>
        <h3>Data Science Intern, Analyticscosm</h3>
        <p>Jun 2019 – Jul 2019</p>
        <ul>
          <li>Conducted research on Instagram user follow-back trends, performing data collection and scraping.</li>
          <li>Developed predictive models for Instagram user follow-back likelihood using Python, enhancing social media analytics.</li>
          <li>Won the competition at the internship, demonstrating exceptional analytical skills.</li>
        </ul>
      </div>
      <div>
        <h3>Android Development Intern, Madhavbaug</h3>
        <p>Dec 2016 – Jan 2017</p>
        <ul>
          <li>Integrated company website into an Android application from scratch, enhancing mobile user experience.</li>
          <li>Developed APIs, connected databases, and implemented login and sign-up functionality, improving user engagement.</li>
        </ul>
      </div>
    </section>
  );
};

export default Internships;
