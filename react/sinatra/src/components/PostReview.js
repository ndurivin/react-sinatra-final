import axios from 'axios';
import React, { useEffect, useState } from 'react'
// import { useLocation } from 'react-router-dom';
import { useLocation } from 'react-router-dom';



function PostReview() {

    const url = "http://localhost:9292/reviews"

    const {state} = useLocation()
    const {dev} = state
    console.log(dev)

   
    const [inputs, setInputs] = useState({});
    const [data, setData] = useState([])

    const [review_title, setReview_Title] = useState('')
    const [review_desc, setReview_Desc] = useState('')
    // const [developer_id, setDeveloper_Id] = useState('')
    const [rating, setRating] = useState('')

// Get all data from api function using Axios

useEffect(()=> {
  axios.get(url)
  .then(res => {
    console.log(res.data)
    setData(res.data)
  })
  .catch(err => console.log(err))

}, [])

// Post review to api function

const postData = (e) => {
  e.preventDefault();
  axios.post(url, {
    review_title,
    review_desc, 
    rating
  }).then(res => console.log('Posting Review', res))
    .catch(err => console.log(err))

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
      <div className="mb-2">
        <input type="text" value={review_title} onChange={(e) => setReview_Title(e.target.value)} name="review_title" placeholder='Review Title'></input>
        </div>
        <div className="mb-2">
        <input type="text" value={review_desc}  onChange={(e) => setReview_Desc(e.target.value)}  name="review_desc" placeholder='Review Description' row={2}></input>
        </div>
        {/* <div className="mb-2">
        <input type="number" value={developer_id}  onChange={(e) => setReview_Title(e.target.value)}  name="developer_id" placeholder='Developer Id'></input>
        </div> */}
        <div className="mb-2">
        <input type="number" value={rating}  onChange={(e) => setRating(e.target.value)}  name="rating" placeholder='Rating' min={1} max={10}></input>
        </div>
        <button onClick={postData} type="button" className="btn btn-primary btn-sm" style={{margin: 5}} >Add</button>
        <button onClick={updateData} type="button" className="btn btn-success btn-sm" style={{margin: 10}}>Update</button>
        <button onClick={deleteData} type="button" className="btn btn-danger btn-sm">Delete</button>
      </form>

      <div className="p-5">
        <h4 style={{color: "green"}}>Available Reviews</h4>
        <div className="row-cols-md-4 py-2">
      {data.map((rev)=> (  
        <div key={rev.id} className="col mb-4">
          <div className="card text-center h-100 shadow">
            <div className="card-body ">
              <h5 className="card-title">{rev.review_title}</h5>
              <p className="card-text">{rev.review_desc}</p>
              {/* <p className="card-text">Dev ID: {`${dev.id}`}</p> */}
              <p className="card-text">Rating: {rev.rating}</p>
            </div>
          </div> 
        </div> ))}
      </div>
      </div>

    </div>
  )
}

export default PostReview;
