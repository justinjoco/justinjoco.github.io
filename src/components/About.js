import React from 'react';

import {Container, Image} from "react-bootstrap";
import profile from "./assets/profile_pic.jpg";

const About = (props) => {
 
    const B = (props) => <span style={{fontWeight: 'bold'}}>{props.children}</span>
    const I = (props) => <span style={{fontStyle: 'italic'}}>{props.children}</span>
    return (    
        <Container fluid style={{textAlign:"center", backgroundColor:"#ADD8E6", padding: "20px"}}>

          <Image fluid width={200}src={profile} roundedCircle />


          <h1 className="display-3">About Me</h1>
        
          <p>Hello! My name is Justin, and I like to call myself a <I> developer, leader, </I> and <I>learner.</I></p> 
          <p >I enjoy learning new things by tackling different challenges. I’ve gained a breadth of skill <B> in mobile/web development, embedded systems, data visualization</B>, <B>machine learning </B>, and <B>distributed systems</B> through previous internships, hackathons, and class projects by applying <I> data structures, algorithms, and object-oriented principles</I>. 
          I've grown to be an <B>effective leader and communicator </B> as a result of my experiences as an <I>officer at various STEM clubs</I>, a <I>graduate teaching assistant</I>, and <I> a major contributor to several group projects.</I></p>
          


          <p>I aim to be a <B> Software Engineer</B> to not only improve my technical and leadership skills, but to also build scalable, robust technical solutions.
          </p>
        </Container>
        
    );
  
}


export default About;