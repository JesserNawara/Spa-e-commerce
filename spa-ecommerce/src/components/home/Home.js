import React from 'react';
import './home.css'
import { Link } from 'react-router-dom';
export default function Home() {
  return (

    <div className="carouselContainer">
      <div
        id="carouselExampleIndicators"
        className="carousel slide carousel-fade"
        data-ride="carousel"
      data-interval="3000"
      >

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100"
              src="https://res.cloudinary.com/jessssss/image/upload/v1634220734/slideshow_3_cnyxba.jpg"
              alt="First slide"
            />
            <div className="carousel-caption crs1">
              <h5>Pink Ladies</h5>
              <h3>Premium Collection</h3>
              <h1>SPA Cosmetics</h1>
              <Link to="/shop" className="booking-btn">BOOK NOW</Link>
              <a href="#products" className="products-btn">VIEW MORE</a>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="https://res.cloudinary.com/jessssss/image/upload/v1634220772/slideshow_2_flictj.jpg"
              alt="Second slide"
            />
            <div className="carousel-caption crs2">
              <h5>Best Offers on</h5>
              <h3>Exclusive Spa</h3>
              <h1>NATURAL COSMETIC COLLECTIONS</h1>
              <Link to="/shop" className="booking-btn">BOOK NOW</Link>
              <a href="#products" className="products-btn">VIEW MORE</a>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="https://res.cloudinary.com/jessssss/image/upload/v1634220782/slideshow_1_o182bz.jpg"
              alt="Third slide"
            />
            <div className="carousel-caption crs3">
              <h5>We welcome you</h5>
              <h3>Get a Makeover</h3>
              <h1>ENVY YOURSELF</h1>
              <Link to="/shop" className="booking-btn">BOOK NOW</Link>
              <Link to="/shop" className="products-btn">VIEW MORE</Link>
            </div>
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
