import React from 'react'
import Developers from './Developers';

function Profile() {
  return (
    <div className='container py-5'>
      <center>
      <h3>View Profile Here</h3>
      <Developers />
      

      <form>
        <div className="mb-3 py-4" style={{maxWidth: 500}}>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter Email Address"/>
        </div>
        <div className="mb-3" style= {{maxWidth: 500}}>
          <textarea className="form-control" d="exampleFormControlTextarea1"
            rows="3" placeholder="Enter Your Message"></textarea><br/>
          <button type="submit" style= {{width: 100}} className="btn btn-success">Add</button>
          <button type="submit" style= {{width: 100}} className="btn btn-info">Edit</button>
          <button type="submit" style= {{width: 100}} className="btn btn-danger">Delete</button>
        </div>
        </form>
      </center>
    </div>
  )
}

export default Profile;
