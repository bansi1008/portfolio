import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Waste Food management System"
              description="The Food Donation System was created with help of frontend tools HTML, CSS,
JavaScript, and backend tools like PHP and main aim of the project was to reduce food
waste by donating food to needy people."
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Upwork JSS Calculator"
              description="Developed a web application that calculates an estimated Upwork Job Success Score (JSS)
based on various factors such as client feedback, completed jobs, and contract outcomes.
Built the front-end using React, leveraging functional components and hooks to create an
interactive and user-friendly interface."
            
            demoLink="https://bansi1008.github.io/Upworkjss/"
            />
          </Col>

    

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Quiz System
"
              description="Developed an interactive Quiz System using core Java, focusing on object-oriented
programming principles to create a modular and maintainable codebase.
Implemented essential features for quiz creation, question management, and scoring logic,
demonstrating proficiency in data structures and algorithms.
Designed a command-line interface to facilitate user interaction, ensuring a smooth and
intuitive experience for users."
             
            />
          </Col>

      

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
