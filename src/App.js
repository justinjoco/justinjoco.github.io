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
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Experiences from "./components/Experiences";
const App = () => {

    return (
     <Router>
      <ScrollToTop />
      <div style={{
        backgroundColor: '#292929',
      }}>
        <Navbar />
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={()=>(<div><About/><Skills/><More/></div>)} />
        <Route path="/projects" component={Projects}/>
        <Route path="/experiences" component={Experiences}/>
        <Footer />
      </div>
     </Router>
    );
  
}

export default App;
