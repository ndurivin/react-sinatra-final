import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Axios from "axios";

function Developers() {
    const url = "http://localhost:9292/developers";
    // const url_2 = "http://localhost:9292/categories"


//Getting Developers Data
    const [devs, setDevs] = useState([]);

    useEffect(() => {
        
            Axios.get(url)
                .then(res =>{
                    setDevs(res.data)
                })
    }, []);

    
  return (
    <div className="container py-5">
     <center>  
      <h3>View Available Developers Here</h3>
      <div className="row row-cols-1 row-cols-md-4 py-3">
      {devs.map((dev, index)=> (  
        <div key={index} className="col mb-4">
          <div className="card text-center h-100 shadow">  
            <img src={dev.image_url} className="card-img-top" alt={dev.first_name}/>
            <div className="card-body ">
              <h5 className="card-title">{dev.first_name}</h5>
              <p className="card-text"> {dev.developer.category}</p>
              <p className="card-text">Experience: {dev.experience} yrs</p>
              <NavLink to={`/developers/${dev.id}`} state={{dev}} className="btn btn-info text-center">View Developer Details</NavLink>
            </div>
          </div> 
        </div> ))}
      </div>
      </center> 
    </div>
  );
}

export default Developers;
