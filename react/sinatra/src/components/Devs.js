import React from "react";
import { Link } from 'react-router-dom'




// function DevsList() {
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


function Devs() {
  return (
    <div>
      <h2>View Developers Here</h2>
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
              <h5 className="card-title">Developer Name</h5>
              <p className="card-text">Languages</p>
              <p className="card-text">Experience</p>
              <p className="card-text">Developer Category</p>
            <Link to="/about" className="btn btn-primary">View Developer</Link>

            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
  );
}

export default Devs;
