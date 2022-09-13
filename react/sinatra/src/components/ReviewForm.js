import React, { useState} from "react";

function ReviewForm() {
  const [review, setReview] = useState("what a sharp shooter!");
  const [submittedReview, setSubmittedReview] = useState([]);

  function handleReview(event) {
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
        <h3>Share your experience about the game</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Write your review here"
            onChange={handleReview}
            value={review}
          />
          <button type="submit">Post</button>
        </form>
        <h3>Game reviews</h3>
        <ul>
          <li>{listOfSubmissions}</li>
        </ul>
      </center>
    </div>
  );
}

export default ReviewForm;
