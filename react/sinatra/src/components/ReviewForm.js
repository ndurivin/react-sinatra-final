import React, { useState } from "react";

function ReviewForm() {
  const [reviewTitle, setReviewTitle] = useState("What a developer!");
  const [review, setReview] = useState("What a developer!");
  const [rating, setRating] = useState("");
  const [submittedReview, setSubmittedReview] = useState([]);

  function handleReviewTitle(event) {
    setReview(event.target.value);
  }

  function handleReviewDesc(event) {
    setReview(event.target.value);
  }

  function handleReviewRating(event) {
    setReview(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const ReviewData = { review: review };
    const postArray = [...submittedReview, ReviewData];
    setSubmittedReview(postArray);
    setReview("");
  }

  const listOfSubmissions = submittedReview.map((data, index) => {
    return <div key={index}>{data.review}</div>;
  });

  return (
    <div>
      <center>
        <h3>Share your experience about the developer</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Review Title" onChange={handleReviewTitle} value={reviewTitle}/><br/><br/>
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
