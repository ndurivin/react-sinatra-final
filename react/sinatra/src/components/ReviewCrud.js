import React from 'react'

function ReviewCrud() {
  return (
    <div>
        <form>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label"></label>
          <input type="text" class="form-control" style={{width: 300}} id="exampleFormControlInput1" placeholder="Review Title"/>
        </div>
        <div className="mb-3">
          <textarea className="form-control" style={{width: 300}} id="exampleFormControlTextarea1" placeholder="Review Title" rows="3"></textarea>
        </div>
        <div class="mb-3">
          <input type="number" className="form-control" style={{width: 150}} id="exampleFormControlInput1" min={1} max={10} placeholder="Rating"/>
        </div>
        <button type="button" style={{marginRight: 20, width: 60}} className="btn btn-primary btn-sm">ADD</button> 
        <button type="button" style={{marginRight: 20, width: 60}} className="btn btn-success btn-sm">EDIT</button> 
        <button type="button" style={{marginRight: 20, width: 80}} className="btn btn-danger btn-sm">DELETE</button>
      </form>
      
    </div>
  )
}

export default ReviewCrud;
