import React from "react";

function Hero() {
  return (
    <div>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://cdn.cleverism.com/wp-content/uploads/2019/10/Software-Engineer-Resume.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://www.developer.com/wp-content/uploads/2021/06/Developer-vs-Engineer-Software-1024x576.jpeg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://www.betterteam.com/images/Software-Engineer-Job-Description.jpeg?crop=40:21,smart&width=1200&dpr=2" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev">
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
export default Hero;
