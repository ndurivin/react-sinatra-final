import React from 'react'

function Profile() {
  return (
    <div className='container py-5'>
      <center>
      <h3>View Profile Here</h3>
      <div className="card mb-3 py-4" style= {{maxWidth: "540px"}}>
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src="..." className="card-img" alt="..."/>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Content.</p>
          </div>
        </div>
      </div>
    </div>
      </center>
    </div>
  )
}

export default Profile;
