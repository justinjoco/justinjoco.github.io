import React from 'react';
import {Link} from "react-router-dom";
import {Jumbotron, Container, Row, Col, Image, Button} from "react-bootstrap";
import ieee_logo from "./assets/ieee_logo.png";
import tmo_logo from "./assets/t-mobile-logo.png";
import jpm_logo from "./assets/JPM_logo.jpg";
import lfg_logo from "./assets/lincolnfinancial.jpg";
import phackers_logo from "./assets/purduehackerslogo.png";
import ece_logo from "./assets/cornell_ece_logo.png";


const Experiences = (props) => {

  	const B = (props) => <span style={{fontWeight: 'bold'}}>{props.children}</span>
    const I = (props) => <span style={{fontStyle: 'italic'}}>{props.children}</span>
    return (

        <Container fluid style={{textAlign:"center", padding: "20px"}}>
          
            <h1 className="display-3">Experiences</h1>
            <hr/>
             <br/>
             <h2>Full Time</h2>
               <Row>
			    <Col md>
			     <Image fluid src={tmo_logo} alt="Logo"/>


			    </Col>
			    <Col md>
			    <h3>T-Mobile US</h3>
			    	<h4></h4>
			    	<h5>Software Engineer Associate</h5>

			    	<h6>January 2020 - Present</h6>

			    	<p>Working on the middleware and front-end of a cloud-based, voice and messaging app for work productivity</p>
			    	<p><B>Languages/Technologies</B>: React,  Redux, Electron,Typescript, Jest, Node.js, Git (Bitbucket), </p>
			    	
			    </Col>
			  </Row>
			


            <br/>
            <hr/>
             <br/>
            <h2>Internships</h2>
             <Row>
			    <Col md>
			     <Image fluid src={tmo_logo} alt="Logo"/>


			    </Col>
			    <Col md>
			    <h3>T-Mobile US</h3>
			    	<h5>Systems Architecture Engineering Intern</h5>
			    	<h6>May - August 2019</h6>
			    	<p>I built a mobile app and a desktop app end-to-end that integrate cloud storage APIs to streamline the internal releases of T-Mobile DIGITS' builds to QA.  
			    	For code organization and app structure simplicity, I chose model-view-controller (MVC). 
			    	 I used React Native for Android/iOS due to its cross-platform capabilities, shorter development time, and ready-made UI components. 
			    	 For the desktop app, I picked the Electron framework since it can integrate with React. </p>
			    	<p>Though I didn't know these technologies at the start, I quickly learned them through research and experimentation. As a result, I created user-friendly, simple native apps that decreased user time sink of the manual release process by more than 90% from 20-30 minutes down to less than 2 minutes.</p>

			    	<p><B>Languages/Technologies</B>: Android SDK (Kotlin), React Native, Electron, AWS-Amplify, HockeyApp API, Git (Bitbucket)</p>
			   		
			    </Col>
			  </Row>
			  <br/>
			  <Row>
			    <Col md>
			    	<Image fluid src={jpm_logo} alt="Logo"/>
			    </Col>
			    <Col md>
			    <h3>JPMorgan Chase & Co.</h3>
			    	<h5>Software Engineering Intern</h5>
			    	<h6>June - August 2017</h6>
			    	<p>I designed and implemented new features of the front-end of a then-prototype client-facing web portal (Data Once), which streamlines client account opening. I was thrust into this project and was able to quickly understand how the front-end integrated with the rest of the application. With the help of my Agile team, I learned Ember Bootstrap, jQuery, and other frameworks in order to build clean, intuitive user interfaces.</p>

			    	<p>Although I was only a summer intern, I meaningfully advanced my project; JPMC implemented my changes and put the design into production.</p>
			    	<p><B>Languages/Technologies:</B> HTML/CSS/JS, jQuery, Ember Bootstrap, Handlebars, Git (Bitbucket)</p>
			    </Col>
			  </Row>

			  <br/>
			  <Row>
			    <Col md>
			    	<Image fluid src={lfg_logo} alt="Logo"/>

			    </Col>
			    <Col md>
			    <h3>Lincoln Financial Group</h3>
			    	<h5>Enterprise Architecture Intern</h5>
			    	<h6>June - August 2016</h6>
			    	<p>At Lincoln Financial Group, I was thrown into an email service prototype project in Java. Though this was my first taste of software engineering and I only knew C, I quickly learned Java within three days by creating my own Blackjack game with betting, decisions, and a simple AI.</p>

			    	<p>Due to this project and my team’s assistance, I was able to dissect the email’s codebase and figure out how each part meshed with one another. As a result, I significantly improved class documentation for future developer work.</p>
			    	<p><B>Languages:</B> Java</p>
			    </Col>
			  </Row>

			<hr/>
           	<br/>
           

           	 <h2>Leadership and Achievements</h2>
           	 <br/>
           	 <Row>
			    <Col md>
			    	<Image fluid src={ece_logo} alt="Logo"/>
			    </Col>
			    <Col>
			    <h3>Cornell ECE</h3>
			    <h5>Graduate Teaching Assistant</h5>
			    <h6>August 2018 - December 2019</h6>
			    	<p>As a graduate teaching assistant, I lead recitations of 30-40 students, aid design of course content with the professor and peer teaching assistants, manage logistics, and hold office hours for material review. Due to my academic background and leadership experiences at Purdue,
			    	I successfully became a TA during my first semester at Cornell, and I have been ever since.</p>
			    	<p><B>Courses</B>: <a href="https://www.csl.cornell.edu/courses/ece2400/">Computer Systems Programming in C/C++ </a>(Fall 2019), Introduction to Probability and Inference for Random Signals and Systems (Spring 2019), Mathematics of Signals and Systems Analysis (Fall 2018)</p>
			    </Col>


			  </Row>
			  <br/>


           	 <Row>
			    <Col md>
			    	<Image fluid src={ieee_logo} alt="Logo"/>
			    </Col>
			    <Col md>
			    <h3>Purdue IEEE Student Branch</h3>
			    <h5>Learning Chair</h5>
			    <h6>April 2017 - March 2018</h6>
			    <p>As Learning Chair during Fall 2017 - Spring 2018, my role was to organize technical workshops to strengthen students’ skillsets. 
			    I raised $5000+ total to fund events via industry and school sponsorship.
			     In addition, I set precedents on technical event collaboration and workshop quality.
			     I led Code Café, free semester events that teach introductory Python, as its director. 75+ students of different fields attended these and highly praised the events' organization and content.</p>
			    <p>As a result of my efforts, I was voted runner-up for 2018 Student Choice Award – awarded for extraordinary service to the student branch, developing camaraderie amongst members, and contributing to technical work.</p>

			    </Col>
			  </Row>

			  <br/>
			  <Row>
			    <Col md>
			    	<Image fluid src={phackers_logo} alt="Logo"/>

			    </Col>
			    <Col md>
			    <h3>Purdue Hackers</h3>
			    <h5>Freshman Hackathon Python Mentor and Communications</h5>
			     <h6>September 2017, Summer 2018</h6>
			    <p>During summer 2018, I was on the Communications committee, whose duties included handling advertising, workshop organization, and volunteer management. I was liaised Purdue Hackers and IEEE in order to set up a workshop led by the IEEE Secretary.</p>
			    <p>During the 2017 iteration, I led a Python workshop to teach freshman students basic-to-intermediate topics. In addition, I volunteered as a mentor to guide the freshmen through their first hackathon projects in a collaborative environment as a resource.</p>

			    </Col>
			  </Row>

           	<br/>


           	<br/>
        </Container>
    );
  
}

export default Experiences;


