import React from 'react';
import './home.css'

export default function Home() {
  return (
    <div className="carouselContainer">
        <div
          id="carouselExampleIndicators"
          className="carousel slide carousel-fade"
          data-ride="carousel"
          data-interval="4000"
        >

          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="d-block w-100"
                src="https://res.cloudinary.com/jessssss/image/upload/v1634220734/slideshow_3_cnyxba.jpg"
                alt="First slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src="https://res.cloudinary.com/jessssss/image/upload/v1634220772/slideshow_2_flictj.jpg"
                alt="Second slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src="https://res.cloudinary.com/jessssss/image/upload/v1634220782/slideshow_1_o182bz.jpg"
                alt="Third slide"
              />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
    </div>
  );
}
