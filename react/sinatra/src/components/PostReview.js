// import { Axios } from 'axios';
import React, { useState } from 'react'

function PostReview() {

    const url = "https://quiet-hamlet-90428.herokuapp.com/devs"
    const [inputs, setInputs] = useState({});

// Post data function
const postData = () => {

  fetch(url, {
    method: "POST",
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

//Update data function using PUT
const updateData = () => {

  fetch("https://quiet-hamlet-90428.herokuapp.com/devs/:id", {

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
      console.log(inputs)

    }



//Post Review function
    // function handlePost(e){
    //     e.preventDefault();
    //     Axios.post(url, {
    //         title: data.title,
    //         desc: data.desc,
    //         rating: parseInt(data.rating)
    //     })
    //     .then(res => {

    //     })
    // }

//Update Review function
    function handleUpdate(e){

    }

//Delete Review function
function handleDelete(e){


    }

//Handling form data function
    // function handle(e){
    //     const newdata ={ ...data }
    //     newdata[e.target.id] = e.target.value
    //     setData(newdata)
    // }

  return (
    <div>
      <form>
      <div className="mb-3">
        <input type="text" onChange={handleChange} name="title" placeholder='Title'></input>
        </div>
        <div className="mb-3">
        <input type="text" onChange={handleChange}  name="desc" placeholder='Description' row={2}></input>
        </div>
        <div className="mb-3">
        <input type="number" onChange={handleChange}  name="rating" placeholder='Rating' min={1} max={10}></input>
        </div>
        <button onClick={handleSubmit} type="button" className="btn btn-primary btn-sm" style={{margin: 10}} >Add</button>
        <button onClick={(e)=> handleUpdate(e)} type="button" className="btn btn-success btn-sm" style={{margin: 10}}  >Update</button>
        <button onClick={(e)=> handleDelete(e)} type="button" className="btn btn-danger btn-sm">Delete</button>
      </form>

    </div>
  )
}

export default PostReview;
