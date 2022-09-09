import React from 'react'




// HANDLING A GET REQUEST
// function GameList() {
//   const [games, setGames] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:9292/games")
//       .then((r) => r.json())
//       .then((games) => setGames(games));
//   }, []);

//   return (
//     <section>
//       {games.map((game) => (
//         <GameItem key={game.id} game={game} />
//       ))}
//     </section>
//   );
// }


//HANDLING OF A POST REQUEST
// function ReviewForm({ userId, gameId, onAddReview }) {
//   const [comment, setComment] = useState("");
//   const [score, setScore] = useState("0");

//   function handleSubmit(e) {
//     e.preventDefault();
//     fetch("http://localhost:9292/reviews", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         comment: comment,
//         score: score,
//         user_id: userId,
//         game_id: gameId,
//       }),
//     })
//       .then((r) => r.json())
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
//         comment: comment,
//         score: score,
//       }),
//     })
//       .then((r) => r.json())
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
//       .then((r) => r.json())
//       .then((deletedReview) => onDeleteReview(deletedReview));
//   }

//   return (
//     <div>
//       <p>Score: {review.score}</p>
//       <p>{review.comment}</p>
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
