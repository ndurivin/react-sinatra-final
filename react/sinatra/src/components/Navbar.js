import React from 'react'
import { Link, NavLink} from 'react-router-dom'

function Navbar() {
  return (
    <div>
      
      <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container ">
            <Link className="navbar-brand" style={{color: 'white'}} to="/">DevsLab</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link active"aria-current="page" to="/about">About</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link active"  aria-current="page" to="/developers">Developers</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link active" aria-current="page" to="/contact">Contact</NavLink>
                </li>
                </ul>
            </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
