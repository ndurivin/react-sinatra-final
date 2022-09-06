import React from 'react'
// import ReactDOM from 'react-dom/client';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import Hero from './components/Hero';
// import { Home } from "./components/Home";


function App() {
  return (
      <Router>
        <div>
          <Navbar />
          <Hero />
          <Footer />
        </div>
        <Routes>
          {/* <Route exact path="/" element={<Home />}></Route> */}
          {/* <Route exact path="/devs" element={<Devs />}></Route> */}
          {/* <Route exact path="/admin" element={<Admin />}></Route>
          <Route exact path="/devs/:devId" element={<Profile />}></Route> */}
        </Routes>
      </Router>
  );
}

export default App;
