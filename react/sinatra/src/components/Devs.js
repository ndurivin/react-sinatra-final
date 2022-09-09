import React from "react";
import { Link } from 'react-router-dom'




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

function Devs() {
  return (
    <div>
      <div className="navbar navbar-default text-center" role="navigation">
        <h2 className="navbar-text col-md-12 col-sm-12 col-xs-12 text p-3">
          This is the Developers Page
        </h2>
      </div>
      <div className="container">
      <div className="row row-cols-1 row-cols-md-4 g-4">
        <div className="col">
          <div className="card h-100 shadow ">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. 
              </p>
            <Link to="/about" className="btn btn-primary">Go somewhere</Link>

            </div>
          </div>
        </div>
        <div className="col">
        <div className="card h-100 shadow">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a longer card with supporting 
              text below as a natural lead-in to additional content.</p>
            <Link to="/about" className="btn btn-primary">Go somewhere</Link>

            </div>
          </div>
        </div>
        <div className="col">
        <div className="card h-100 shadow">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content.
              </p>
            <Link to="/about" className="btn btn-primary">Go somewhere</Link>

            </div>
          </div>
        </div>
        <div className="col">
        <div className="card h-100 shadow">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. 
              </p>
            <Link to="/about" className="btn btn-primary">Go somewhere</Link>

            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
  );
}

export default Devs;
