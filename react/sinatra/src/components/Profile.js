import React, { useState, useEffect} from 'react'
import PostReview from './PostReview';
// import ReviewForm from './ReviewForm';
import { useParams } from "react-router-dom";
import axios from 'axios';

function Profile() {

  const url = (`https://quiet-hamlet-90428.herokuapp.com/devs`);
  
  const { id } = useParams();

//Getting Developers Data
    // const[devs, setDevs] = useState([])
    const[devs, setDevs] = useState([]);

    useEffect(() => {
        
            axios.get(url)
                .then(res =>{
                    setDevs(res.data)
                })
    }, []);



  return (

    <div className="container py-5 justify-content-center">
     <center className="justify-content-center">  
      <h3> Developer Profile</h3>
      <div className="row row-cols-1 row-cols-md-4 py-3">
      {devs.filter(dev => dev.id === id)
      .map((dev, index)=> (  
        <div key={index} className="col mb-4">
          <div className="card text-center h-100 shadow">  
            <img src={dev.image} className="card-img-top" alt={dev.name}/>
            <div className="card-body ">
              <h5 className="card-title">{dev.name}</h5>
              <p className="card-text">{dev.language}</p>
              <p className="card-text">Experience: {dev.experience} yrs</p>
              
            </div>
          </div> 
        </div> ))}
      </div>
        <div>
        <PostReview />
        </div>
      </center> 
    </div>
  );

}

export default Profile;


// import {useParams, useNavigate} from 'react-router-dom'

// cost navigate = usrNavigate ()

// const {id} = useParams()

// fetch (`http://blahblah/${id}`, {
// method: 'DELETE', 
// }).then (()=>{
// navigate (/whichever route})