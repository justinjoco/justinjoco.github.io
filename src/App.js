import React, {Component} from 'react';
import logo from './transparent_logo.png';
import './App.css';
import {HashRouter as Router, Route} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import More from "./components/More";
import Navbar from "./components/CustomNavbar";
import Projects from "./components/Projects";
import Experiences from "./components/Experiences";
import Education from "./components/Education";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {

    return (
     <Router>
      <ScrollToTop />
      <div>
        <Navbar />
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={()=>(<div><About/><Skills/><Education/><More/></div>)} />
        <Route path="/projects" component={Projects}/>
        <Route path="/experiences" component={Experiences}/>
        <Footer />
      </div>
     </Router>
    );
  
}

export default App;
