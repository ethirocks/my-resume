import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import Education from './Education';
import Experience from './Experience';
import Projects from './Projects';

const TabsSection = () => {
  return (
    <Tabs defaultActiveKey="experience" id="uncontrolled-tab-example" className="mb-3">
      <Tab eventKey="experience" title="Experience">
        <Experience />
      </Tab>
      <Tab eventKey="education" title="Education">
        <Education />
      </Tab>
      <Tab eventKey="projects" title="Projects">
        <Projects />
      </Tab>
    </Tabs>
  );
};

export default TabsSection;
