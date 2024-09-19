import React from 'react';
import './Banner.css';

const Banner = () => {
  return (
    <section className="banner-section">
      <div className="banner-image">
        <img
          src="https://shopify-xrh7.onrender.com/banner.jpg" 
          alt="Special Offer"
        />
      </div>
      <div className="banner-text">
        <h2>Don't Miss the Offer!</h2>
        <p>Grab it now</p>
        <button className="shop-now-btn">Shop Now</button>
      </div>
    </section>
  );
};

export default Banner;
