import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import { FaCode, FaDatabase, FaComments } from "react-icons/fa";

const Skills = () => {
  const B = (props) => (
    <span style={{ fontWeight: "bold" }}>{props.children}</span>
  );
  const I = (props) => (
    <span style={{ fontStyle: "italic" }}>{props.children}</span>
  );

  return (
    <Container
      fluid
      style={{
        textAlign: "center",
        padding: "20px",
        backgroundColor: "#dc3545",
        color: "#ffffff",
      }}
    >
      <h1 className="display-4">Skills</h1>
      <hr style={{ color: "#ffffff", borderColor: "#ffffff" }} />

      <Row>
        <Col>
          <p>
            {" "}
            <B>Relevant Coursework: </B> Distributed Computing Principles,
            Machine Learning, Database Systems, Data-Driven Web Apps,
            Object-Oriented Programming, Data Structures and Algorithms,
            Computer Vision
          </p>
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          <FaCode size={"10vh"} color={"#ffffff"} />
          <br /> <br />
          <h2>Programming</h2>
          <p>
            Python, TypeScript (TS)/JavaScript (JS), Kotlin, Java, Golang (Go),
            C/C++, Verilog
          </p>
        </Col>
        <Col>
          <FaDatabase size={"10vh"} color={"#ffffff"} />
          <br /> <br />
          <h2>Tools/Technologies</h2>
          <p>
            Git, Docker, Kubernetes, Helm, PostgreSQL, MongoDB, AWS, GCP, REST,
            GraphQL
          </p>
          <p>Spring Boot, React.js, Jest, TestNG, Node.js, Express </p>{" "}
          <p>
            {" "}
            Microservices, event-driven architecture, message-driven
            architecture, continuous integration/continuous delivery (CI/CD)
          </p>
        </Col>
        <Col>
          <FaComments size={"10vh"} color={"#ffffff"} />
          <br /> <br />
          <h2>Soft Skills</h2>
          <p>
            Agile development, API and backend system design, time management,
            effective communication and teamwork, conflict resolution
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Skills;
