import React, { useState, useEffect} from 'react'
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
              return setId(dev.id), setImage(dev.image), setName(dev.name), setLanguage(dev.language), setExperieince(dev.experience);
            })

            })
          }, [id]);

  return (
    <div className="container py-5">
     <center>  
      <h3>View Available Developers Here</h3>
      <div className="row row-cols-1 row-cols-md-4 py-3">
      {/* {devs.map((dev)=> (   */}
        <div className="col mb-4">
          <div className="card text-center h-100 shadow">  
            <img src={image} className="card-img-top" alt={name}/>
            <div className="card-body ">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">{language}</p>
              <p className="card-text">Experience: {experience} yrs</p>
            </div>
          </div> 
        </div> 
        {/* ))} */}
      </div>
      {/* <h3>Give Reviews</h3>
        <br/>
        <div className="card text-center h-100 mb-3" style={{width: 400}}> 
        <div className="card-body py-4 ">
              <h5 className="card-title">Title: {}</h5>
              <p className="card-text">Language: {}</p>
              <p className="card-text">Rating: {}</p>
        </div>
        </div> */}

      </center> 
    </div>
  );

}

export default Profile;
