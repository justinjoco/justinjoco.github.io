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
        backgroundColor: "#800000",
        color: "#ffffff",
      }}
    >
      <h1 className="display-4">Skills</h1>
      <hr style={{ color: "#ffffff", borderColor: "#ffffff" }} />
      <Row>
        <Col>
          <FaCode size={"10vh"} color={"#ffffff"} />
          <br /> <br />
          <h2>Programming</h2>
          <p>
            <B>Languages</B>: Python, Java, TypeScript (TS)/JavaScript (JS),
            Kotlin, Golang (Go), Scala, Rust, C/C++, SQL
          </p>
          <p>
            <B>Paradigms</B>: Object-oriented, reactive, concurrent,
            asynchronous
          </p>
          <p></p>
        </Col>
        <Col>
          <FaDatabase size={"10vh"} color={"#ffffff"} />
          <br /> <br />
          <h2>Tools and Technologies</h2>
          <p>
            Git, Unix/Linux, Docker, Kubernetes, Helm, PostgreSQL, Liquibase,
            MongoDB, Apache Kafka, Artifactory, REST, GraphQL, Terraform,
            Spinnaker, Jenkins, Argo, Datadog, Databricks, Apache Spark
          </p>
          <p>
            Spring (Boot, WebFlux), Django (REST Framework), Flask, Actix Web, Gin, React, Jest,
            JUnit, TestNG, NodeJS, Express, OpenAPI, OpenTelemetry, OAuth
            2.0/Open ID Connect{" "}
          </p>{" "}
          <p>
            AWS (EKS, S3, EC2, RDS, Kinesis, DynamoDB, Lambda, OpenSearch), GCP,
            Firebase Cloud Messaging{" "}
          </p>{" "}
        </Col>
        <Col>
          <FaComments size={"10vh"} color={"#ffffff"} />
          <br /> <br />
          <h2>Architecture and Soft Skills</h2>
          <p>
            {" "}
            Microservices, event-driven architecture, message-driven
            architecture, continuous integration/continuous delivery (CI/CD),
            unit/integration/end-to-end testing
          </p>
          <p>
            REST/GraphQL API design, database design, technical documentation
          </p>
          <p>
            Agile development, leadership, time management, effective
            communication and teamwork, conflict resolution
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Skills;
