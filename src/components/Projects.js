import React from 'react'
import { Container, Row, Col, Button, Card, CardDeck } from 'react-bootstrap'

import energy_weather from './assets/energy_weather.png'
import take_me from './assets/take_me.png'

import maze from './assets/maze.jpeg'

import vocoder from './assets/vocoder.png'
import air_canvas from './assets/air_canvas.jpg'

import python_logo from './assets/Python_logo_icon.png'
import go_logo from './assets/go-logo.svg'

import paxos from './assets/paxos-map.jpg'
import cops from './assets/cops-map.png'

const Projects = () => {
  const B = (props) => <span style={{ fontWeight: 'bold' }}>{props.children}</span>
  const I = (props) => <span style={{ fontStyle: 'italic' }}>{props.children}</span>

  return (

        <Container fluid style={{ textAlign: 'center', backgroundColor: '#dc3545', padding: '20px' }}>

            <h1 className="display-3">Project Showcase</h1>
			<h5 style={{ textAlign: 'center' }}>My academic, personal, and hackathon projects</h5>

			<hr style={{ color: '#ffffff', backgroundColor: '#696969', borderColor: '#ffffff' }}/>
            <br/>

            <h2><B>MEng Design Project</B>: Acoustic Localization and Tracking via Machine Learning</h2>
            <p><B>Abstract:</B> Our goal is to track users in a room using an array of microphones. To do this, we first model a room with echoes, and we populate this room with users and microphones. We extract information from this modelled room to create a so-called channel state information (CSI) matrix. Depending on the application, we use a supervised or an unsupervised deep learning model to learn the channel from the CSI matrix. If the goal is to predict user locations in cartesian space, we use the supervised model. If we want to learn the channel itself, we use the unsupervised model. Though a lot of research in localization has been done in RF communication, we use acoustic communication to further understand its merits, its workings, and its negatives to hopefully expand a field in ECE.</p>
            <p><B>Languages/Technologies</B>: Python, NumPy, Keras Tensorflow</p>

            <Row>
				<Col><a href="https://drive.google.com/open?id=1RqCE6mKBcSB8zWFaoT2NVYHz0RCSMc-s" ><Button variant="light" style={{ margin: '5px' }}>Report</Button></a></Col>
				<Col><a href="https://drive.google.com/open?id=1gYy7quJyqfm_eIAsylMDvCWCTJ6wZo8X"><Button variant="light" style={{ margin: '5px' }}>Poster</Button></a></Col>
				<Col><a href="https://github.com/justinjoco/acoustic_MIMO"><Button variant="light" style={{ margin: '5px' }}>Code</Button></a></Col>
			</Row>
			<br/>
			<h3>Web Applications</h3>
            <CardDeck>

			  <Card className="bg-light text-dark">
			  	<Card.Header><B>Weather and Energy Generation in the USA</B></Card.Header>
			    <Card.Img variant="top" src={energy_weather} />
			    <Card.Body>
			      <Card.Title>Interactive data visualization that shows how changes in temperature over a given year affected energy generation in various US states</Card.Title>
			    <Card.Text>
		        I implemented slider and line graph interactivity such that user can use the slider or click the line graph to change the month. The US map and the line and bar graphs update their displayed data based on the month selected or year selected (via dropdown).
		      </Card.Text>
		      	<a href="https://justinjoco.github.io/energy_v_weather_in_us"><Button variant="danger" style={{ margin: '5px' }}>Link</Button></a>
		      	<a href="https://github.com/nsterling4/Info5100P2"><Button variant="secondary" style={{ margin: '5px' }}>Code</Button></a>
			    </Card.Body>
			    <Card.Footer>
			    HTML/CSS/JavaScript, D3.js
			    </Card.Footer>
			  </Card>

			  <Card className="bg-light text-dark">
			  <Card.Header><B>Real-Time Pathfinding</B></Card.Header>
			    <Card.Img variant="top" src={maze}/>
			    <Card.Body>
			      <Card.Title>(Work in Progress) Web application that shows an avatar conducting its pathfinding in real-time</Card.Title>
			    <Card.Text> TBD
	  	      </Card.Text>

		      	<a href="https://justinjoco.github.io/rt-pathfinding/"><Button variant="danger" style={{ margin: '5px' }}>Link</Button></a>
		      	<a href="https://github.com/justinjoco/rt-pathfinding"><Button variant="secondary" style={{ margin: '5px' }}>Code</Button></a>
			    </Card.Body>
			    <Card.Footer>
			    Typescript, React-Typescript
			    </Card.Footer>
			  </Card>


			  <Card className="bg-light text-dark">
			  <Card.Header><B>Take Me to the Streets</B></Card.Header>
			    <Card.Img variant="top" src={take_me} />
			    <Card.Body>
			      <Card.Title>A neighborhood discovery experience that can be customized to the guest and the property, with optional gamification</Card.Title>
			    <Card.Subtitle className="mb-2"> <I>Won "Expand Explore" challenge at <a href="https://hospitalityhack.splashthat.com/">Cornell Hospitality Hackathon 2018</a></I></Card.Subtitle>
			   <Card.Text>
		       I prototyped the features, which included routing users to a community and gaving them options to display that area’s locations of interest and to show route back to hotel.
		      </Card.Text>
		      	<a href="https://drive.google.com/file/d/1-AjMSllvR6Nlzw_mbkeCCSgcGCuy-R3J/view"><Button variant="danger" style={{ margin: '5px' }}>Details</Button></a>
		      	<a href="https://github.com/justinjoco/take_me_to_the_streets"><Button variant="secondary" style={{ margin: '5px' }}>Code</Button></a>
			    </Card.Body>

			    <Card.Footer>
			      HTML/CSS/JavaScript, Google Maps JS API, Flask
			    </Card.Footer>
			  </Card>
			
			</CardDeck>
		<br/>
			<h3>Tutorials</h3>
				<CardDeck style={{ justifyContent: 'center' }}>

				<Card className="bg-light text-dark" style={{ maxWidth: 500 }}>
					<Card.Header><B>Python Tutorial</B></Card.Header>
					<Card.Img variant="top" src={python_logo} />
					<Card.Body>
					<Card.Title>Tutorial that teaches the basics of Python3</Card.Title>
					<Card.Text>
					The goal is for readers to understand how to read and write basic to non-trival programs in Python. This covers introductory to intermediate Python concepts, from basic syntax to object-oriented programming and other Python utilities.
					</Card.Text>
					<a href="https://justinjoco.github.io/python-tutorial/"> <Button variant="danger" style={{ margin: '5px' }}>Link</Button></a>
					<a href="https://github.com/justinjoco/python-tutorial"> <Button variant="secondary" style={{ margin: '5px' }}>Code</Button></a>
					</Card.Body>
					<Card.Footer>
					Python, MkDocs
					</Card.Footer>
				</Card>

				<Card className="bg-light text-dark" style={{ maxWidth: 500 }}>
					<Card.Header><B>Go Tutorial</B></Card.Header>
					<Card.Img variant="top" src={go_logo} />
					<Card.Body>
					<Card.Title>Tutorial that teaches the basics of Golang</Card.Title>
					<Card.Text>
					Through this tutorial, developers should be able to read and write basic Go syntax and leverage some of Go’s struct features to write non-trivial programs. This tutorial will also go over concurrency as an advanced topic.
					</Card.Text>
					<a href="https://justinjoco.github.io/go-tutorial/"> <Button variant="danger" style={{ margin: '5px' }}>Link</Button></a>
					<a href="https://github.com/justinjoco/go-tutorial"> <Button variant="secondary" style={{ margin: '5px' }}>Code</Button></a>
					</Card.Body>
					<Card.Footer>
					Go, MkDocs
					</Card.Footer>
				</Card>
				</CardDeck>

				<br/>

			<h3>Distributed Systems</h3>
					<CardDeck style={{ justifyContent: 'center' }}>

					  <Card className="bg-light text-dark" style={{ maxWidth: 500 }}>
					  	<Card.Header><B>COPS for Distributed Key Value Storage</B></Card.Header>
					    <Card.Img variant="top" src={cops} />
					    <Card.Body>
					    	<Card.Subtitle className="mb-2"><I>Reference: <a href="https://www.cs.cornell.edu/courses/cs5414/2017fa/papers/Lloyd11Cops.pdf">COPS paper</a></I></Card.Subtitle>

					      <Card.Title>A sharded, replicated key-value store that guarantees ALPS and causal+ consistency</Card.Title>

					      <Card.Text> This data store maintains the properties of available, low latency, partition tolerant, and scalable (ALPS) datastores whilst maintaining causal consistency with convergent conflict handling (causal+) by tracking causal dependencies.</Card.Text>
						  <Card.Text>In this asynchronous setting, keys are sharded amongst partitions in a particular cluster, and every key-value pair is replicated across all clusters.
						  </Card.Text>
					      <a href="https://github.com/justinjoco/COPS"><Button variant="secondary" style={{ margin: '5px' }}>Code</Button></a>
					    </Card.Body>
					    <Card.Footer>
					      Go
					    </Card.Footer>
					  </Card>

					  <Card className="bg-light text-dark" style={{ maxWidth: 500 }}>
					  <Card.Header><B>Paxos Consensus for Message Ordering</B></Card.Header>
					    <Card.Img variant="top" src={paxos} />
					    <Card.Body>
					    	  <Card.Subtitle className="mb-2"><I>References: <a href="https://www.cs.cornell.edu/courses/cs5414/2017fa/papers/PaxosComplex.pdf">Renesse paper</a>, <a href="https://www.cs.cornell.edu/courses/cs5414/2017fa/papers/paxos-simple.pdf">Lamport paper</a></I></Card.Subtitle>
					      <Card.Title>Implementation that solves consensus on message ordering across replicated state machines</Card.Title>
					      <Card.Text>
					       This project implements a distributed chatroom in an asychronous setting with crash failures, in which all servers maintain consistent message ordering using the Paxos consensus algorithm.
					      </Card.Text>

					      <Card.Text>
					       Each process plays all five roles of Multi-Paxos (Acceptor, Leader, Proposer, Scout, and Commander) outlined in Renesse's paper, but generally, this
					       implementation follows the simpler algorithm detailed in Lamport's paper.
					      </Card.Text>
					      	<a href="https://github.com/justinjoco/paxos"><Button variant="secondary" style={{ margin: '5px' }}>Code</Button></a>
					    </Card.Body>
					    <Card.Footer>
					      Go
					    </Card.Footer>
					  </Card>
					</CardDeck>

				<br/>

            <br/>
          

		<h3>Embedded/Firmware</h3>
		<CardDeck style={{ justifyContent: 'center' }}>

		  <Card className="bg-light text-dark" style={{ maxWidth: 500 }}>
		  	<Card.Header><B>FPGA Speech Vocoder</B></Card.Header>
		    <Card.Img variant="top" src={vocoder} />
		    <Card.Body>
		      <Card.Title>A highly parallel hardware vocoder for real-time speech synthesis and visualization on a monitor</Card.Title>
		       <Card.Subtitle className="mb-2"><I>Featured project in <a href="https://blog.hackster.io/our-5-favorite-cornell-university-student-fpga-projects-683cffcda0d2">Hackster.io article</a></I></Card.Subtitle>

		      <Card.Text> This project included pitch-shifting and voice modulation through 32 IIR filters. I implemented a basic GPU in parallel with speech synthesizer by reading input audio to display the audio waveform and a 32-bin frequency spectrogram on an 8-bit color, 640x480 pixel monitor in real-time.
			  </Card.Text>
		      <a href="https://people.ece.cornell.edu/land/courses/ece5760/FinalProjects/s2019/jc2697_jaj263_tk455/jc2697_jaj263_tk455/jc2697_jaj263_tk455/index.html"><Button variant="danger" style={{ margin: '5px' }}>Details</Button></a>
		      <a href="https://github.com/jc2697/FPGA_speech_vocoder"><Button variant="secondary" style={{ margin: '5px' }}>Code</Button></a>
		    </Card.Body>
		    <Card.Footer>
		      C, Verilog
		    </Card.Footer>
		  </Card>

		  <Card className="bg-light text-dark" style={{ maxWidth: 500 }}>
		  <Card.Header><B>Air Canvas on Raspberry Pi</B></Card.Header>
		    <Card.Img variant="top" src={air_canvas} />
		    <Card.Body>
		      <Card.Title>A simple prototype for a drawing tool that recognizes hand gestures to paint on a PiTFT screen </Card.Title>
		      <Card.Text>
		       This project used a color histogram and contouring to find the center of a hand, and it drew dots at the farthest point along the contour from center.

I drew line interpolations between drawn dots to mitigate FPS costs of live image processing.

I also added configurable brush size and color, and enabled histogram re-calibration.
		      </Card.Text>
		      	<a href="https://justinjoco.github.io/air_canvas_page/"><Button variant="danger" style={{ margin: '5px' }}>Details</Button></a>
		      	<a href="https://github.com/justinjoco/air_canvas"><Button variant="secondary" style={{ margin: '5px' }}>Code</Button></a>
		    </Card.Body>
		    <Card.Footer>
		      Python, OpenCV-Python, PyGame
		    </Card.Footer>
		  </Card>
		</CardDeck>

	<br/>

        </Container>
  )
}

export default Projects
