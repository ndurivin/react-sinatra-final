import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Axios from "axios";

function Developers({id}) {
    const url = "https://quiet-hamlet-90428.herokuapp.com/devs";

    const {}

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
            <img src={dev.image} className="card-img-top" alt={dev.name}/>
            <div className="card-body ">
              <h5 className="card-title">{dev.name}</h5>
              <p className="card-text">{dev.language_id}</p>
              <p className="card-text">Experience: {dev.experience} yrs</p>
              <Link to={`/developers/${dev.id}`} className="btn btn-info text-center">View Developer Details</Link>
            </div>
          </div> 
        </div> ))}
      </div>
      <h3>Give Reviews</h3>
        <br/>
        <div className="card text-center h-100 mb-3" style={{width: 400}}> 
        <div className="card-body py-4 ">
              <h5 className="card-title">Title: {}</h5>
              <p className="card-text">Language: {}</p>
              <p className="card-text">Rating: {}</p>
        </div>
        </div>

      </center> 
    </div>
  );
}

export default Developers;
