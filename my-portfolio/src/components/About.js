import React from 'react';

import {Container, Image} from "react-bootstrap";
import profile from "./assets/profile_pic.jpg";

const About = (props) => {
 
    const B = (props) => <span style={{fontWeight: 'bold'}}>{props.children}</span>
    const I = (props) => <span style={{fontStyle: 'italic'}}>{props.children}</span>
    return (    
        <Container fluid style={{textAlign:"center", backgroundColor:"#ADD8E6", padding: "20px"}}>

          <Image fluid width={200}src={profile} roundedCircle />


          <h1 className="display-4">About Me</h1>
          <p>Hello! I’m earning my <B>Master of Engineering (MEng)</B> degree in <B> Electrical and Computer Engineering (ECE)</B> at <B> Cornell University</B> after receiving my <B>Bachelor of Science (BS)</B> in <B>Electrical Engineering (EE)</B> at <B>Purdue University</B>, and I'm a versatile <I> developer, leader, </I> and <I>learner.</I></p> 
          <p >I like learning new things by tackling different challenges. I’ve gained a breadth of skill <B> in mobile/web development, embedded systems, data visualization</B>, and <B>machine learning </B> through previous internships, hackathons, and class projects by applying <I> data structures, algorithms, and object-oriented principles</I>. 
          I've grown to be an <B>effective leader and communicator </B> as a result of my experiences as an <I>officer at various STEM clubs</I>, a <I>graduate teaching assistant</I>, and <I> a major contributor to several group projects.</I></p>
          <p> I aim to be a full-time <B> Software Engineer</B> not only to improve my technical and leadership skills, but to also build scalable, robust technical solutions.
          </p>
        </Container>
        
    );
  
}


export default About;