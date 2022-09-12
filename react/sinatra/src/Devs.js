import React from "react";
import { Link } from 'react-router-dom'


function Devs() {

  // const [devs, setDevs] = useState([]);

  // const getDevs = () => {

  //   fetch("https://quiet-hamlet-90428.herokuapp.com/devs")
  //       .then((res) => res.json())
  //       .then((devs) => {
  //         setDevs(devs)
  //       });
  //   };
 
  //  useEffect(() => {
  //   <getDevs />
      
  //   }, []);

  return (
    <div>
      <br/><br/><br/><br/>
      <div className="container">
      <h3 className="navbar-text col-md-12 col-sm-12 col-xs-12 text p-3">
        View All Developers</h3>

        <div className="row row-cols-1 row-cols-md-4 g-4">
        <div className="col">
          <div className="card h-100 shadow ">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
            <h5 className="card-title">Name: {}</h5>
              <p className="card-text">Category: {}</p>
              <p className="card-text">Rating: {}</p>
            <Link className="btn btn-primary" to="/profile">View Developer</Link>
            </div>
          </div>
        </div>
      </div>
      <br/>

      <h3 className="navbar-text col-md-12 col-sm-12 col-xs-12 text p-3">
        Fullstack Developers</h3>

        <div className="row row-cols-1 row-cols-md-4 g-4">
        <div className="col">
          <div className="card h-100 shadow ">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
            <h5 className="card-title">Name: {}</h5>
              <p className="card-text">Category: {}</p>
              <p className="card-text">Rating: {}</p>
            <Link className="btn btn-primary" to="/profile">View Developer</Link>
            </div>
          </div>
        </div>
      </div>


      
      </div>
      </div>
  );
}

export default Devs;
