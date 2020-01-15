import React from "react";
import {Navbar, Nav, NavItem, NavDropdown} from "react-bootstrap";
import {Link} from "react-router-dom";
import logo from './assets/transparent_logo.png';


const CustomNavbar = (props) =>{

	return (
		<Navbar bg="light" expand="sm" sticky="top">
		  <Navbar.Brand href="#"><img src={logo} alt="Logo"/></Navbar.Brand>
		  <Navbar.Toggle aria-controls="basic-navbar-nav"/>
			<Navbar.Collapse>
				<Nav className="mr-auto" activeKey="/home">

					<Nav.Item>
						<Nav.Link href="#about">About</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link href="#projects">Projects</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link href="#experiences">Experiences</Nav.Link>
					</Nav.Item>
					
					</Nav>
					<Nav>
					<Nav.Item>
						<Nav.Link href="https://github.com/justinjoco">Github</Nav.Link>
					</Nav.Item>
				</Nav>
			</Navbar.Collapse>
		</Navbar>

	);
	
}

export default CustomNavbar;