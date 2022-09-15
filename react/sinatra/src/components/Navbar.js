import React from 'react'
import { Link, NavLink} from 'react-router-dom'

function Navbar() {
  return (
    <div className="py-4 ">
      
      <nav className="navbar fixed-top navbar-expand-lg bg-primary ">
        <div className="container">
            <Link className="navbar-brand" style={{color: 'white', fontSize: 28}} to="/">DevsLab</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mx-auto" style={{fontSize: 16}}>
                <li className="nav-item">
                    <NavLink className="nav-link active" style={{color: 'white'}} aria-current="page" to="/">HOME</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link active" style={{color: 'white'}} aria-current="page" to="/about">ABOUT</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link active" style={{color: 'white'}} aria-current="page" to="/developers">DEVELOPERS</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link active" style={{color: 'white'}} aria-current="page" to="/contact">CONTACT</NavLink>
                </li>
                </ul>
            </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
