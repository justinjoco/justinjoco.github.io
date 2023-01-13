import React from "react";
import { Container, Carousel, Image, Button } from "react-bootstrap";
import background_mac from "./assets/background_mac.jpg";

const Home = () => {
  const textStyle = {
    top: "25vmin",
    color: "white",

    textShadow: "1px 1px 10px #000",
    textAlign: "center",
  };

  return (
    <Container
      fluid
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Carousel controls={false} indicators={false}>
        <Carousel.Item>
          <Image fluid src={background_mac} alt="Logo" />
          <Carousel.Caption style={textStyle}>
            <h1 className="display-1" style={{ fontSize: "10vmin" }}>
              Justin Joco
            </h1>
            <h3 style={{ fontSize: "4vmin" }}>
              Developer, Learner, and Leader
            </h3>

            <Button variant="dark" href="#about" style={{ margin: "5px" }}>
              About
            </Button>
            <Button
              variant="danger"
              href="https://drive.google.com/open?id=1GDuHzcNG2cZYs0UtkElK76sbslUixAsD"
              style={{ margin: "5px" }}
            >
              Resume
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Home;
