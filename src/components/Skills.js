import React, {useState} from 'react';

import {Container, Row, Col} from "react-bootstrap";
import {FaCode, FaDatabase, FaCogs} from "react-icons/fa";

const Skills = (props) => {
 
    const B = (props) => <span style={{fontWeight: 'bold'}}>{props.children}</span>
    const I = (props) => <span style={{fontStyle: 'italic'}}>{props.children}</span>

    const linkedinblue = "#0077B5"
    const rubyred = "#9b111e"
    const grape = "#6f2da8"

    return (    
        <Container fluid style={{textAlign:"center",  padding: "20px"}}>


            <h1 className="display-4">Skills</h1>
            <hr/>
             <br/>
            <Row>
                <Col>
                <FaCode size={"10vh"} color={linkedinblue}/>
                <br/> <br/>
                <h2>Programming</h2>
                <p>Python, HTML/CSS/Javascript (JS), Typescript (TS), C/C++, Go (Golang), Kotlin, Java</p>
              
                </Col>
                <Col>
                <FaDatabase size={"10vh"} color={rubyred}/>
                <br/> <br/>
                <h2>Tools/Technologies</h2>
                <p>Git (Github, Bitbucket), Linux/Unix, Windows, Mac OSX</p><p>React.js, React Native, Electron, Jest, Node.js, AWS-Amplify, Android SDK </p> <p> Numpy, Jupyter Notebook, OpenCV, Keras Tensorflow, PyTorch, Pygame</p>
                
                </Col>
                <Col>
                <FaCogs size={"10vh"} color={grape}/>
                <br/> <br/>
                <h2>Soft Skills</h2>
                <p>Agile development, time management, effective communication and teamwork, conflict negotiation</p>
              
                
                </Col>
            </Row>
            <hr/>
        </Container>
        
    );
  
}


export default Skills;