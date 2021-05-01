import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import cornell_logo from './assets/cornell_logo.png'
import purdue_logo from './assets/purdue_logo.png'
import stony_logo from './assets/stony_logo.jpg'

const Education = () => {
  return (

        <Container fluid style={{ textAlign: 'center', padding: '20px' }}>

            <h1 className="display-4">Education</h1>
            <hr/>
             <br/>
               <Row>
			    <Col md>
                <Image fluid src={cornell_logo} alt="Logo"/>
                <br/>
                <h4>Master of Engineering in Electrical and Computer Engineering</h4>
                <h5>Aug 2018 - Dec 2019</h5>
			    </Col>
			  </Row>

            <br/>
             <Row>
                <Col md>
                <Image fluid src={purdue_logo} alt="Logo"/>
                <br/>
                <h4>Bachelor of Science in Electrical Engineering</h4>
                <h5>Aug 2015 - May 2018</h5>
			    </Col>
			  </Row>
			  <br/>
			  <Row>

              <Col md>
                <Image fluid src={stony_logo} alt="Logo"/>
                <br/>
                <h4>Attended, Transferred Out</h4>
                <h5>Aug 2014 - May 2015</h5>
			    </Col>
			  </Row>

			  <br/>

        </Container>
  )
}

export default Education
