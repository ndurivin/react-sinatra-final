import React, { Link } from 'react'

function Developers() {
  return (
    <div>
    <div className="container py-4">
    <h3 className="navbar-text col-md-12 col-sm-12 col-xs-12 text p-3">
      View All Developers</h3>

      <div className="row row-cols-1 row-cols-md-4 g-4">
      <div className="col">
        <div className="card h-100 shadow ">
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
          <h5 className="card-title">Name: {}</h5>
            <p className="card-text">Category: {}</p>
            <p className="card-text">Rating: {}</p>
          <Link className="btn btn-primary" to="/profile">View Developer</Link>
          </div>
        </div>
      </div>
    </div>
    <br/>

    <h3 className="navbar-text col-md-12 col-sm-12 col-xs-12 text p-3">
      Fullstack Developers</h3>

      <div className="row row-cols-1 row-cols-md-4 g-4">
      <div className="col">
        <div className="card h-100 shadow ">
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
          <h5 className="card-title">Name: {}</h5>
            <p className="card-text">Category: {}</p>
            <p className="card-text">Rating: {}</p>
          <Link className="btn btn-primary" to="/profile">View Developer</Link>
          </div>
        </div>
      </div>
    </div>


    
    </div>
    </div>
  )
}

export default Developers;
