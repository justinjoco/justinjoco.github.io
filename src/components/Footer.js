import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {Jumbotron, Container, Row, Col, Image, Button} from "react-bootstrap";
import logo from './assets/my_logo.png';
import {FaFacebookSquare, FaLinkedin, FaGithubSquare} from "react-icons/fa";

const Footer = (props) => {



    const I = (props) => <span style={{fontStyle: 'italic'}}>{props.children}</span>
    const [linkedInColor, setLinkedInColor] = useState("#0077b5ff");
    const [githubColor, setGithubColor] = useState("#222");
    const [facebookColor, setFacebookColor] = useState("#0078FF");

    const ColoredLine = ({ color }) => (
      <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 1
        }}
      />
    );

    return (

        <Container fluid style={{textAlign:"center", color:"#efefef", backgroundColor: "#292929",  padding: "20px"
 			}}>
         <h1 >Contact</h1>
         <Image src={logo} alt="Logo"/>
        <ColoredLine color="white"/>
        <p>Justin-Anthony Ampil Joco</p>
	      <p>U.S. Citizen</p>
	      <p>914-727-2032</p>
	      <p>Gmail: justin.joco@gmail.com</p>
	      <p>School: jaj263@cornell.edu</p>
	      <ColoredLine color="white"/>
        <Row>
            <Col xs>
              <a href="https://www.linkedin.com/in/justinjoco">
              <FaLinkedin size={"7vh"} color={linkedInColor} style={{backgroundColor: "white"}} onMouseEnter={() => setLinkedInColor("#0077b57f")} onMouseLeave={() => setLinkedInColor("#0077b5")}/>
              
              </a>
            </Col>
            <Col xs>
              <a href="https://github.com/justinjoco">
               <FaGithubSquare size={"7vh"} color={githubColor} style={{backgroundColor: "white"}} onMouseEnter={() => setGithubColor("#2220007f")} onMouseLeave={() => setGithubColor("#222")}/>
              </a>
            </Col>
            <Col xs>
            <a href="https://www.facebook.com/justin.anthony.joco" >
               <FaFacebookSquare size={"7vh"} color={facebookColor} style={{backgroundColor: "white"}} onMouseEnter={() => setFacebookColor("#0078FF7f")} onMouseLeave={() => setFacebookColor("#0078FF")}/>
            </a>
            </Col>



          </Row>

        <ColoredLine color="white"/>
	      <p><I>Built with React and React-Bootstrap. <a href="https://justinjoco.github.io/portfolio-archived/" style={{color:"#0cf"}}>Link to old portflio</a> </I></p>
	      <h6>{'\u00A9'} Justin Joco. All rights reserved.</h6>
        </Container>
    );
  
}

export default Footer;
