import React from 'react';

import {Container, Row, Col} from "react-bootstrap";
import {FaIndustry, FaLaptopCode} from "react-icons/fa";

const More = (props) => {
 
    const B = (props) => <span style={{fontWeight: 'bold'}}>{props.children}</span>
    const I = (props) => <span style={{fontStyle: 'italic'}}>{props.children}</span>


    return (    
        <Container fluid style={{textAlign:"center",  padding: "20px",backgroundColor:"#ffffff", color: "#000000"}}>
            <Row>
                <Col>
                <a href="#projects"><FaLaptopCode size={"10vh"} color={"#292929"}/></a>
                <br/> <br/>
                <h2 >Projects</h2>
                <p><B><a href="#projects" style={{color: "#dc3545"}}>Check out my academic and hackathon projects!</a></B></p>
              
                </Col>
                <Col>
                <a href="#experiences"><FaIndustry size={"10vh"} color={"#292929"}/></a>
                <br/> <br/>
                <h2 >Experiences</h2>
                <p><B><a href="#experiences" style={{color: "#dc3545"}}>Browse through my industry experiences and education!</a></B></p>
                     
                </Col>
        
            </Row>
        </Container>
        
    );
  
}


export default More;