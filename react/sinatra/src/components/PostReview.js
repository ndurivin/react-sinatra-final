import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function PostReview() {
  const url = "http://localhost:9292/reviews";

  const { state } = useLocation();
  const { dev } = state;
  console.log(dev);


  const [data, setData] = useState([]);

  const [review_title, setReview_Title] = useState("");
  const [review_desc, setReview_Desc] = useState("");
  // const [developer_id, setDeveloper_Id] = useState('')
  const [rating, setRating] = useState("");

  // Get all data from api function using Axios

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  // Post review to api function

  const postData = (e) => {
    e.preventDefault();
    axios
      .post(url, {
        review_title,
        review_desc,
        rating,
      })
      .then((res) => console.log("Posting Review", res))
      .catch((err) => console.log(err));
  };

  //Update data function using PUT

  const updateData = (id, e) => {
    // e.preventDefault();
    // axios.patch(`http://localhost:9292/reviews/${id}`)
    // .then(res => console.log('Deleted!!', res))
    //   .catch(err => console.log(err))
  };

  //Deleting data function
  const deleteData = (id, e) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:9292/reviews/${id}`)
      .then((res) => console.log("Deleted!!", res))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form>
        <div className="mb-2">
          <input
            type="text"
            value={review_title}
            onChange={(e) => setReview_Title(e.target.value)}
            name="review_title"
            placeholder="Review Title"
          ></input>
        </div>
        <div className="mb-2">
          <input
            type="text"
            value={review_desc}
            onChange={(e) => setReview_Desc(e.target.value)}
            name="review_desc"
            placeholder="Review Description"
            row={2}
          ></input>
        </div>
        <div className="mb-2">
          <input
            type="number"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            name="rating"
            placeholder="Rating"
            min={1}
            max={10}
          ></input>
        </div>
        <button
          onClick={postData}
          type="button"
          className="btn btn-primary btn-sm"
          style={{ width: 200 }}
        >
          Add
        </button>
      </form>

      <div className="p-5">
        <h3 style={{ color: "green" }}>Available Reviews</h3>
        <div className="row-cols-md-4 py-2">
          {data.map((rev) => (
            <div key={rev.id} className="col mb-4">
              <div className="card text-center h-100 shadow">
                <div className="card-body ">
                  <h5 className="card-title">{rev.review_title}</h5>
                  <p className="card-text">{rev.review_desc}</p>
                  <p className="card-text">Rating: {rev.rating}</p>
                </div>
                <button
                  onClick={updateData(rev.id)}
                  type="button"
                  className="btn btn-success btn-sm"
                  style={{ margin: 5 }}
                >
                  Update
                </button>
                <button
                  onClick={(e) => deleteData(rev.id, e)}
                  type="button"
                  className="btn btn-danger btn-sm"
                  style={{ margin: 5 }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PostReview;
