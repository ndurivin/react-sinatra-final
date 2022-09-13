import React from 'react'


function PostReview() {

  //Posting Review Data

  function NewReviewForm({title, description, rating}) {
      const[reviews, setReviews] =useState([])
      const[newTitle, setNewTitle] = useState("")
      const[newDescription, setNewDescription] = useState("")
      const[newRating, setNewRating] = useState("")
    
      function titleHandle(event){
        setNewTitle(event.target.value)
      }
    
      function descriptionHandle(event){
        setNewDescription(event.target.value)
      }
    
      function ratingHandle(event){
        setNewRating(event.target.value)
      }
    
      function reviewHandle(event){
        event.preventDefault();
        const newPoem = {
          title: newTitle,
          content: newDescription,
          author: newRating,
        } 
    
        fetch(url,{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newReview),
       })
       .then((res) => res.json())
        .then((newReview) => setReviews([...reviews, newReview]));
      }
  //End of Posting Review Data


  return (
    <div>
        <center>
        <h3>Give Reviews</h3>
        <form className="new-review-form" onSubmit={reviewHandle}>
      <input placeholder="Title"  title="title" value={title} onChange={titleHandle}/>
      <input placeholder="Rating" author="rating" value={rating} min={1} max={10} onChange={ratingHandle}/>
      <textarea placeholder="Write your description" rows={3} content="content" value={content} onChange={descriptionHandle}/>
      <input type="submit" value="Give your review" />
    </form>
  );
        <br/>
        <div className="card text-center h-100 mb-3" style={{width: 400}}> 
        <div className="card-body py-4 ">
              <h5 className="card-title">Review Title</h5>
              <p className="card-text">Review Description</p>
              <p className="card-text">Rating</p>
        </div>
        </div>

        </center>
      
    </div>
  );
}

export default PostReview;
