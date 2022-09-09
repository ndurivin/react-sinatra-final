import React from "react";

function Login() {
  return (
    <div className="container">
      <div className="navbar navbar-default text-center" role="navigation">
        <h3 className="navbar-text col-md-12 col-sm-12 col-xs-12 text p-3">
          Login Here</h3>
      </div>
      <form>
        <div className="mb-4">
          <label for="exampleInputEmail1" className="form-label">Email address</label>
          <input style={{width: 200}} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          {/* <div id="emailHelp" className="form-text">Your email is safe with us.</div> */}
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1"/>
        </div>
        {/* <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" for="exampleCheck1">Check me out</label>
        </div> */}
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default Login;
