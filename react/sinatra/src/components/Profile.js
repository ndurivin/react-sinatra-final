// import React, { useState, useEffect } from "react";
import PostReview from "./PostReview";
// import ReviewForm from './ReviewForm';
import { useLocation } from "react-router-dom";
// import axios from "axios";

function Profile() {

  const {state} = useLocation()
  const {dev} = state
  // console.log(dev)


  return (
    <div className="container py-5 justify-content-center">
      <center className="justify-content-center">
        <h3> Developer Profile</h3>
        <div className="row-cols-md-4 py-2">
          
              <div className="col mb-4">
                <div className="card text-center h-100 shadow">
                  <img
                    src={dev.image_url}
                    className="card-img-top"
                    alt={dev.name}
                  />
                  <div className="card-body ">
                    <h5 className="card-title">{`${dev.first_name} ${dev.last_name}`}</h5>
                    <p className="card-text">{dev.language_1}</p>
                    <p className="card-text">{dev.language_2}</p>
                    <p className="card-text">
                      Experience: {dev.experience} yrs
                    </p>
                  </div>
                </div>
              </div>
        </div>
        <div>
          <PostReview />
        </div>
      </center>
    </div>
  );
}

export default Profile;

