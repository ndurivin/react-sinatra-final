import React, { useState, useEffect} from 'react'
import ReviewForm from './ReviewForm';
// import axios from 'axios';

function Profile() {

  const url = "https://quiet-hamlet-90428.herokuapp.com/devs";

//Getting Developers Data
    // const[devs, setDevs] = useState([])
    const[image, setImage] = useState("")
    const[name, setName] = useState("")
    const[language, setLanguage] = useState("")
    const[experience, setExperieince] = useState("")
    const[id, setId] = useState("")

    useEffect(() => {
        
            fetch(url)
            .then(response => response.json())
            .then((devs) => {

            devs.map((dev) => {
              return ( setId(dev.id), setImage(dev.image), setName(dev.name), setLanguage(dev.language), setExperieince(dev.experience));
            })

            })
          }, [id]);

  return (
    <div className="container py-5">
     <center>  
      <h3> Developer Profile</h3>
      <div className="row row-cols-1 row-cols-md-4 py-3">
        <div className="col mb-4">
          <div className="card text-center h-100 shadow">  
            <img src={image} className="card-img-top" alt={name}/>
            <div className="card-body ">
              <h5 className="card-title">{name}</h5>
              <h6 className="card-title">{language}</h6>
              <p className="card-text">Experience: {experience} yrs</p>
            </div>
          </div> 
        </div> 
      </div>
        <div>
        <ReviewForm />
        </div>
      </center> 
    </div>
  );

}

export default Profile;
