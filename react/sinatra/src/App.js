import React from 'react'
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Home from './components/Home'
import Navbar from './components/Navbar'
import Developers  from './components/Developers';
import About from './components/About';
import Contact from './components/Contact';




function App() {
  return (
     <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/developers" element={<Developers />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
      </Routes>
     </Router>
  );
}

export default App;
