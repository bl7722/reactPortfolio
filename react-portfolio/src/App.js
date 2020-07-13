import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "../src/components/pages/About"
import Portfolio from "./components/pages/Portfolio"
import Wrapper from "../src/components/Wrapper"
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Header from './components/Header';
// import './App.css';

function App() {
  return (
   <Router>
    <div style={{backgroundColor:'#0074B7'}}>
      <Header />
      <Navbar />
      <Wrapper>
        <Route exact path="/" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
      </Wrapper>
      <Footer/>
      </div>
  </Router>
  );
}

export default App;