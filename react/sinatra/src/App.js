import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Devs from './components/Devs';
import Contact from './components/Contact';
import Admin from './components/Admin';
import Login from './components/Login';



function App() {
  return (
      <Router>
        <div>
          <Navbar />
        </div>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/devs" element={<Devs />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/admin" element={<Admin />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
        </Routes>
      </Router>
  );
}

export default App;
