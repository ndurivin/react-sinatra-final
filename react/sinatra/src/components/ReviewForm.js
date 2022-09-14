import React, { useState } from "react";

function ReviewForm() {
  const [title, setTitle] = useState("Good Work");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState("");
  const [submittedReview, setSubmittedReview] = useState([]);

  function handleReviewTitle(event) {
    setTitle(event.target.value);
  }

  function handleReviewDesc(event) {
    setReview(event.target.value);
  }

  function handleReviewRating(event) {
    setRating(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const ReviewTitle = { title: title };
    const ReviewData = { review: review };
    const ReviewRating = { rating: rating };
    const postArray = [...submittedReview, ReviewTitle, ReviewData, ReviewRating];
    setSubmittedReview(postArray);
    setTitle("");
    setReview("");
    setRating("");
  }

  const listOfSubmissions = submittedReview.map((data, index) => {
    return <div key={index}>{data.review}</div>;
  });

  return (
    <div>
      <center>
        <h3>Share your experience about the developer</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Review Title" onChange={handleReviewTitle} value={title}/><br/><br/>
          <input type="text" placeholder="Write your review here" onChange={handleReviewDesc} value={review}/><br/><br/>
          <input type="number" placeholder="Rating" onChange={handleReviewRating} value={rating} min={1} max={10}/><br/><br/>
          <button type="submit">Post</button>
        </form><br/>
        <h3>Developer reviews</h3>
        <ul>
          <li>{listOfSubmissions}</li>
        </ul>
      </center>
    </div>
  );
}

export default ReviewForm;
