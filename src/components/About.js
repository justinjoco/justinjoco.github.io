import React from "react";

import { Container, Image } from "react-bootstrap";
import profile from "./assets/profile_pic.jpg";

const About = (props) => {
  const B = (props) => (
    <span style={{ fontWeight: "bold" }}>{props.children}</span>
  );
  const I = (props) => (
    <span style={{ fontStyle: "italic" }}>{props.children}</span>
  );
  return (
    <Container
      fluid
      style={{ textAlign: "center", color: "#ffffff", padding: "20px" }}
    >
      <Image fluid width={200} src={profile} roundedCircle />

      <h1 className="display-3">About Me</h1>

      <p style={{ fontSize: "1.5vmin" }}>
        Backend software engineer (can do some front-end) experienced in
        application and platform engineering, with focus on Kubernetes,
        microservices, and developer tooling. I've led multiple teams to ship
        deliverables in a timely manner, balancing feature development with
        proactive bug mitigation and tech debt reduction.{" "}
      </p>
    </Container>
  );
};

export default About;
