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
     <center>  
      <h3>View Available Developers Here</h3>
      <div className="row row-cols-1 row-cols-md-4 py-3">
      {devs.map((dev)=> (  
        <div className="col mb-4">
          <div className="card text-center h-100 shadow">  
            <img src={dev.image} className="card-img-top" alt={dev.name}/>
            <div className="card-body ">
              <h5 className="card-title">{dev.name}</h5>
              <p className="card-text">{dev.language_id}</p>
              <p className="card-text">Experience: {dev.experience} yrs</p>
              <Link to={`/profile/` + dev.id} className="btn btn-info text-center">View Developer Details</Link>
            </div>
          </div> 
        </div> ))}
      </div>
      <h3>Give Reviews</h3>
      <form>
        <div className="mb-1 py-4" style={{width: 300}}>
          <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Review Title"/>
          </div>
        <div className="mb-1" style= {{width: 300}}>
          <textarea className="form-control" d="exampleFormControlTextarea1"
            rows="2" placeholder="Review Description"></textarea>
            <div className="mb-1 py-4" style={{width: 300}}>
          <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Rating" min={1} max={10} />
          </div>
            
          <button type="submit" style= {{width: 70, marginRight: 15}} className="btn btn-success">Add</button>
          <button type="submit" style= {{width: 70, marginRight: 15}} className="btn btn-primary">Edit</button>
          <button type="submit" style= {{width: 70}} className="btn btn-danger">Delete</button>
        </div>
        </form>
        <br/>
        <div className="card text-center h-100 mb-3" style={{width: 400}}> 
        <div className="card-body py-4 ">
              <h5 className="card-title">Review Title</h5>
              <p className="card-text">Review Description</p>
              <p className="card-text">Rating</p>
        </div>
        </div>

      </center> 
    </div>
  );
}

export default Developers;
