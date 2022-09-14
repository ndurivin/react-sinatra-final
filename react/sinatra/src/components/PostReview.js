import React, { useEffect, useState } from 'react'
// import { useLocation } from 'react-router-dom';



function PostReview() {

    const url = "http://localhost:9292/reviews"

   
    const [inputs, setInputs] = useState({});
    const [data, setData] = useState([])

// Get all data function
const getData = () => {
  fetch(url)
  .then((res)=> res.json())
  .then((json) => {
    console.log(json);
    setData(json);
  })
};

useEffect(()=> {
  getData();

}, [])

// Post data function
const postData = () => {
  fetch(url, {
    method: "POST",
    body: JSON.stringify({
      review_title: inputs.title,
      review_desc: inputs.desc,
      rating: parseInt(inputs.rating)
    }),
    headers: {
      "Content-Type": "applicattion/json; characterset-UTF-8",
    },
  })
  .then((res)=> res.json())
  .then((json)=> console.log(json));
};

//Update data function using PUT
const updateData = () => {
  fetch(`http://localhost:9292/reviews/5`, {

    method: "PUT",
    body: JSON.stringify({
      title: inputs.title,
      body: inputs.desc,
      rating: parseInt(inputs.rating)
    }),
    headers: {
      "Content-Type": "applicattion/json; characterset-UTF-8",
    },
  })
  .then((res)=> res.json())
  .then((json)=> console.log(json));
};


//Deleting data function 
const deleteData = () => {
  fetch(`http://localhost:9292/reviews`, {

    method: "DELETE"
    
    })
}


//Handle change functionon the input data
    const handleChange=(event) => {
      event.persist();
      setInputs((input)=> ({
        ...inputs,

        [event.target.name]:event.target.value,

      }))
    }

    const handleSubmit=(event)=>{
      event.preventDefault();
      postData();
      // console.log(inputs)
    }

  return (
    <div>
      <form>
      <div className="mb-3">
        <input type="text" onChange={handleChange} name="review_title" placeholder='Review Title'></input>
        </div>
        <div className="mb-3">
        <input type="text" onChange={handleChange}  name="review_desc" placeholder='Review Description' row={2}></input>
        </div>
        <div className="mb-3">
        <input type="number" onChange={handleChange}  name="rating" placeholder='Rating' min={1} max={10}></input>
        </div>
        <button onClick={handleSubmit} type="button" className="btn btn-primary btn-sm" style={{margin: 5}} >Add</button>
        <button onClick={updateData} type="button" className="btn btn-success btn-sm" style={{margin: 10}}>Update</button>
        <button onClick={deleteData} type="button" className="btn btn-danger btn-sm">Delete</button>
      </form>
      <div>
        <div className="row-cols-md-4 py-2">
      {data.map((dev)=> (  
        <div key={dev.id} className="col mb-4">
          <div className="card text-center h-100 shadow">
            <div className="card-body ">
              <h5 className="card-title">{data.title}</h5>
              <p className="card-text">{data.desc}</p>
              <p className="card-text">Rating: {data.rating}</p>
            </div>
          </div> 
        </div> ))}
      </div>
      </div>

    </div>
  )
}

export default PostReview;
