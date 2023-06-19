import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import voting from "../../Assets/Projects/prjct1.png";
import booking from "../../Assets/Projects/prjct2.png";

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
              imgPath={voting}
              isBlog={false}
              title="Online College Election System"
              description="It is a web-based system that facilitates the running of elections. Overall process of election would be maintaining by this project including Voters registration, Candidates Registration, Vote Casting facility and as well as Results counting and declaration."
              ghLink="https://github.com/alanshijo/Online-College-Election-System"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={booking}
              isBlog={false}
              title="Online Movie Ticket Booking System(BookMyTickets)"
              description="Through the BookMyTickets platform, users can browse the available movie options, select their preferred showtime, choose their seats, and make secure online payments. The system provides real-time updates on seat availability, allowing users to make informed decisions and book their desired seats."
              ghLink="https://github.com/alanshijo/Main-Project-BookMyTickets"
              demoLink="http://bookmytickets.42web.io/?i=1"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
