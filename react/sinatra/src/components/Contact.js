import React from "react";

function Contact() {
  return (
    <div className="container py-5">
      <center>
        <h3>Contact Us</h3>
        <p><span>Call: 0700 123 456 </span> | <span>Email: info@gitlab.com</span></p>
        <form>
        <div className="mb-3 py-4" style={{maxWidth: 500}}>
          <input
            type="email" className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter Email Address"
          />
        </div>
        <div className="mb-3" style= {{maxWidth: 500}}>
          <textarea className="form-control"
            id="exampleFormControlTextarea1"
            rows="3" placeholder="Enter Your Message"></textarea><br/>
          <button type="submit" style= {{width: 200}} className="btn btn-info">Submit</button>
        </div>
        </form>
      </center>
    </div>
  );
}

export default Contact;
