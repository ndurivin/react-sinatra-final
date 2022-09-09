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
          <input style={{width: 250}} type="email" className="form-control" id="exampleInputEmail1" placeholder="Email"/>
        </div>
        <div className="mb-3">
          <input type="password" style={{width: 250}} className="form-control" id="exampleInputPassword1" placeholder="Password"/>
        </div>
        <button type="button" style={{width: 80}} className="btn btn-primary btn-sm">Login</button> 
      </form>

    </div>
  );
}

export default Login;
