import React from 'react'
import { Link } from 'react-router-dom';

function Developers() {
  return (
    <div className='container py-5'>
      <h3>View Available Developers Here</h3>
      <div className="row row-cols-1 row-cols-md-3 py-4">
        <div className="col mb-4">
            <div className="card text-center h-100 shadow">
            <img src="..." className="card-img-top" alt="..."/>
            <div className="card-body ">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Text</p>
                <Link to="/profile" class="btn btn-primary">View Details</Link>
            </div>
            
            </div>
        </div>
        </div>
    </div>
  )
}

export default Developers;
