import React from 'react'
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Home from './components/Home'
import Navbar from './components/Navbar'
import Developers  from './components/Developers';
import About from './components/About';
import Contact from './components/Contact';
import Profile from './components/Profile';




function App() {

  return (
     <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/about" element={<About/>}></Route>
        <Route exact path="/developers" element={<Developers/>}></Route>
        <Route exact path="/developer/:id" element={<Profile/>}></Route>
        <Route exact path="/contact" element={<Contact/>}></Route>
      </Routes>
     </Router>
  );
}

export default App;
