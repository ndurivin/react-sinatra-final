import React from 'react'




// HANDLING A GET REQUEST

// // function DevsList() {
//   const [devs, setDevs] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:9292/developers")
//       .then((res) => res.json())
//       .then((games) => setDevs(games));
//   }, []);

//   return (
//     <section>
//       {devs.map((dev) => (
//         <DevItem key={dev.id} game={dev} />
//       ))}
//     </section>
//   );
// }


//HANDLING OF A POST REQUEST

// function ReviewForm({ userId, developerId, onAddReview }) {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [rating, setRating] = useState("0");

//   function handleSubmit(e) {
//     e.preventDefault();
//     fetch("http://localhost:9292/reviews", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         review_title: review_title,
//         review_desc: review_desc,
//         rating: rating,
//         user_id: userId,
//         developer_id: developerId,

//       }),
//     })
//       .then((res) => res.json())
//       .then((newReview) => onAddReview(newReview));
//   }

//   return <form onSubmit={handleSubmit}>{/* controlled form code here*/}</form>;
// }

// HANDLING OF UPDATE REQUEST

// function EditReviewForm({ review, onUpdateReview }) {
//   const [comment, setComment] = useState("");
//   const [score, setScore] = useState("0");

//   function handleSubmit(e) {
//     e.preventDefault();
//     fetch(`http://localhost:9292/reviews/${review.id}`, {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         review_title: review_title,
//         review_desc: review_desc,
//         rating: rating,
//       }),
//     })
//       .then((res) => res.json())
//       .then((updatedReview) => onUpdateReview(updatedReview));
//   }

//   return <form onSubmit={handleSubmit}>{/* controlled form code here*/}</form>;
// }


//HANDLING OF DELETE REQUEST
// function ReviewItem({ review, onDeleteReview }) {
//   function handleDeleteClick() {
//     fetch(`http://localhost:9292/reviews/${review.id}`, {
//       method: "DELETE",
//     })
//       .then((res) => res.json())
//       .then((deletedReview) => onDeleteReview(deletedReview));
//   }

//   return (
//     <div>
//       <p>title: {review.review_title}</p>
//       <p>desc: {review.review_desc}</p>
//       <p>{review.rating}</p>
//       <button onClick={handleDeleteClick}>Delete Review</button>
//     </div>
//   );
// }



function Admin() {
  return (
    <div>
      <div className="navbar navbar-default text-center" role="navigation">
            <h2 className="navbar-text col-md-12 col-sm-12 col-xs-12 text p-3">This is the Admin Page</h2>
        </div>
    </div>
  )
}

export default Admin;
