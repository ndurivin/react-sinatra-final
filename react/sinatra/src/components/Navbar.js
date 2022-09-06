import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-info">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">DevsLab</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    
                    </ul>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link to="/" className="nav-link" aria-current="page">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/" className="nav-link" aria-current="page">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/" className="nav-link" aria-current="page">Devs</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/devs" className="nav-link" aria-current>Contact</Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/admin" className="nav-link active" aria-current>Admin</Link>
                    </li>
                    </ul>
            </div>
                    <form class="d-flex" role="search">
                        {/* <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> */}
                        <button class="btn btn-outline-primary" type="submit">Login</button>
                    </form>
        </div>
        </nav>
    </div>
  )
}

export default Navbar;
