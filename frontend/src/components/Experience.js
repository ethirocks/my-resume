import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <section className="experience">
      <h2>Full Time Experience</h2>
      <div>
        <h3>Software Development Engineer II, Varis</h3>
        <p>March 2022 – Present</p>
        <ul>
          <li>Spearheaded design initiatives and facilitated team's transition to sprint model, leading stand-ups, sprint planning, and grooming sessions.</li>
          <li>Spearheaded various business important projects and delivered them before time with great quality.</li>
          <li>Engineered a testing suite using Robot test framework and Selenium in Python, and crafted temporal workflows and activities.</li>
          <li>Enhanced MongoDB performance through strategic schema versioning and indexing.</li>
          <li>Implemented Forgerock and Redis cache solutions, bolstering system efficiency.</li>
          <li>Managed on-call process, effectively addressing and resolving various bugs and customer issues.</li>
          <li>Fostered cross-team collaboration to brainstorm and implement innovative solutions.</li>
          <li>Deployed services on Azure Kubernetes Service (AKS), leveraging Azure Vault and Rancher for secure secret management.</li>
        </ul>
      </div>
      <div>
        <h3>Software Development Engineer I, Varis</h3>
        <p>April 2021 – March 2022</p>
        <ul>
          <li>Developed robust backend solutions in Golang and Python, leading to the creation of efficient microservices.</li>
          <li>Implemented Kafka Producer and Consumer services in Golang and Python, enhancing data processing capabilities.</li>
          <li>Authored SQL queries for PostgreSQL and designed Directed Acyclic Graphs (DAGs) in Airflow for streamlined workflow management.</li>
          <li>Utilized Jenkins for continuous integration and deployment, deploying microservices on Amazon EKS.</li>
        </ul>
      </div>
      <div>
        <h3>Associate Software Engineer, CGI Group</h3>
        <p>Aug 2018 – May 2019</p>
        <ul>
          <li>Operated as a full stack developer in a scaled agile environment, contributing to various stages of the development cycle.</li>
          <li>Developed Java-Spring backend and Angular frontend solutions, improving user interface and experience.</li>
          <li>Authored SQL queries, developed APIs, and created microservices, enhancing system functionality.</li>
          <li>Practiced Behavior-Driven Development (BDD) and Test-Driven Development (TDD), actively participating in problem-solving sessions.</li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
