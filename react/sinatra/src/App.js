import React from 'react'
import './App.css';
import HomeNav from './components/HomeNav';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Login from './components/pages/Login';



function App() {
  return (
      <Router>
        <div>
          <HomeNav />
        </div>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
        </Routes>
      </Router>
  );
}

export default App;
