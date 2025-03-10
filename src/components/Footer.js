import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Container, Row, Col, Image, Button } from "react-bootstrap";
import logo from "./assets/my_logo_white.png";
import { FaFacebookSquare, FaLinkedin, FaGithubSquare, FaDev } from "react-icons/fa";

const Footer = (props) => {
  const I = (props) => (
    <span style={{ fontStyle: "italic" }}>{props.children}</span>
  );
  const [linkedInColor, setLinkedInColor] = useState("#e0e0e0");
  const [githubColor, setGithubColor] = useState("#e0e0e0");
  const [devColor, setDevColor] = useState("#e0e0e0");

  const ColoredLine = ({ color }) => (
    <hr
      style={{
        color: color,
        backgroundColor: color,
        height: 1,
      }}
    />
  );

  return (
    <Container
      fluid
      style={{
        textAlign: "center",
        color: "#efefef",
        backgroundColor: "#292929",
        padding: "20px",
      }}
    >
      <h1>Contact</h1>
      <Image src={logo} alt="Logo" />
      <ColoredLine color="white" />
      <p>Justin-Anthony Ampil Joco</p>
      <p>U.S. Citizen</p>
      <p>Email: justin.joco@gmail.com</p>
      <ColoredLine color="white" />
      <Row>
        <Col xs>
          <a href="https://www.linkedin.com/in/justinjoco">
            <FaLinkedin
              size={"7vh"}
              color={linkedInColor}
              onMouseEnter={() => setLinkedInColor("#696969")}
              onMouseLeave={() => setLinkedInColor("#e0e0e0")}
            />
          </a>
        </Col>
        <Col xs>
          <a href="https://github.com/justinjoco">
            <FaGithubSquare
              size={"7vh"}
              color={githubColor}
              onMouseEnter={() => setGithubColor("#696969")}
              onMouseLeave={() => setGithubColor("#e0e0e0")}
            />
          </a>
        </Col>
        <Col xs>
          <a href="https://dev.to/justinjoco">
            <FaDev
              size={"7vh"}
              color={devColor}
              onMouseEnter={() => setDevColor("#696969")}
              onMouseLeave={() => setDevColor("#e0e0e0")}
            />
          </a>
        </Col>
      </Row>

      <ColoredLine color="white" />
      <p>
        <I>
          Built with React and React-Bootstrap.{" "}
          <a
            href="https://justinjoco.github.io/portfolio-archived/"
            style={{ color: "#0cf" }}
          >
            Link to old portflio
          </a>{" "}
        </I>
      </p>
      <h6>{"\u00A9"} Justin Joco. All rights reserved.</h6>
    </Container>
  );
};

export default Footer;
