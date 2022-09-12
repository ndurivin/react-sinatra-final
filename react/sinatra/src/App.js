import React from 'react'
import './App.css';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes,  Route } from "react-router-dom";
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Devs from './Devs';

function App() {
  return (
      <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/devs" element={<Devs />}></Route>
            <Route exact path="/contact" element={<Contact />}></Route>
          </Routes>
      </Router>
  );
}

export default App;
