import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div >
      <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container" >
            <Link className="navbar-brand" style={{color: 'white'}} to="/">DevsLab</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav justify-content-center">
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active"aria-current="page" to="/about">About</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active"  aria-current="page" to="/developers">Developers</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/contact">Contact</Link>
                </li>
                </ul>
            </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
