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
          <FaCode size={"10vh"} color={"#ffffff"} />
          <br /> <br />
          <h2>Programming Languages</h2>
          <p>
            Python, Java, TypeScript (TS)/JavaScript (JS),
            Kotlin, Golang (Go), C/C++, SQL, GraphQL
          </p>
        </Col>
        <Col>
          <FaDatabase size={"10vh"} color={"#ffffff"} />
          <br /> <br />
          <h2>Tools/Technologies</h2>
          <p>
            Git, Unix/Linux, Docker, Kubernetes, Helm, PostgreSQL, Liquibase,
            MongoDB, Apache Kafka, Artifactory, REST, Terraform, Spinnaker, Jenkins,
            Argo
          </p>
          <p>
            Spring (Boot, WebFlux), Django (REST Framework), Flask, React, Jest,
            JUnit, TestNG, Node.js, Express, OpenAPI{" "}
          </p>{" "}
          <p>
            AWS (EKS, S3, EC2, RDS, Kinesis, DynamoDB, Lambda), GCP, Firebase
            Cloud Messaging{" "}
          </p>{" "}
          <p>
            {" "}
            Microservices, event-driven architecture, message-driven
            architecture, continuous integration/continuous delivery (CI/CD),
            reactive programming
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
