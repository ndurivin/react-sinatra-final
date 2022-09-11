import React, { useState } from 'react'




const addReview = () => {

    // const [title, setTitle] = useState('')
    // const [desc, setDesc] = useState('')
    // const [rating, setRating] = useState('')

}

function Profile() {
  return (
    <div>
      <div className="card mb-3" style={{maxWidth: 540}}>
      <div className="row g-0">
      <div className="col-md-4">
        <img src="..." className="img-fluid rounded-start" alt="..."/>
      </div>
      <div className="col-md-8">
      <div className="card-body">
      <h5 className="card-title">Developer Name</h5>
      <p className="card-text">Languages</p>
      <p className="card-text">Experience</p>
      <p className="card-text">Category</p>
      <p className="card-text">Rating</p>
      </div>
    </div>
  </div>
</div>
    <form>
    <div className="mb-3">
      <label for="exampleFormControlInput1" className="form-label"></label>
      <input type="text" class="form-control" style={{width: 300}} id="exampleFormControlInput1" placeholder="Review Title"
       onChange={(e)=> setTitle(e.target.value)}/>
    </div>
    <div className="mb-3">
      <textarea className="form-control" style={{width: 300}} id="exampleFormControlTextarea1" placeholder="Review Title"
       onChange={(e)=> setDesc(e.target.value)} rows="3"></textarea>
    </div>
    <div class="mb-3">
      <input type="number" className="form-control" style={{width: 150}} id="exampleFormControlInput1" min={1} max={10} placeholder="Rating"
       onChange={(e)=> setRating(e.target.value)}/>
    </div>
    <button type="button" style={{marginRight: 20, width: 60}} className="btn btn-primary btn-sm" onClick={addReview}>ADD</button> 


    {/* <button type="button" style={{marginRight: 20, width: 60}} className="btn btn-success btn-sm">EDIT</button>  */}
    {/* <button type="button" style={{marginRight: 20, width: 80}} className="btn btn-danger btn-sm">DELETE</button> */}
  </form>
  
</div>
  )
}

export default Profile;
