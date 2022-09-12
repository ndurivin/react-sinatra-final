import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Developers() {

    const [devs, setDevs] = useState([]);

    useEffect(() => {
        
            axios.get("https://quiet-hamlet-90428.herokuapp.com/devs")
                .then(res =>{
                    setDevs(res.data)
                })

    }, []);

  return (
    <div className="container py-5">
        
      <h3>View Available Developers Here</h3>
      <div className="row row-cols-1 row-cols-md-4 py-3">
      {devs.map((dev)=> (  
        <div className="col mb-4">
          <div className="card text-center h-100 shadow">  
            <img src={dev.image} className="card-img-top" alt={dev.name}/>
            <div className="card-body ">
              <h5 className="card-title">{dev.name}</h5>
              <p className="card-text">{dev.language_id}</p>
              <p className="card-text">{dev.experience}</p>
              <Link to={"/Profile"} class="btn btn-primary">View Details</Link>
            </div>
          </div> 
        </div> ))}
      </div>
    </div>
  );
}

export default Developers;
