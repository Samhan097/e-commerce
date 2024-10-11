import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
  const imageRef = useRef(null); // Reference for the image element
  const textRef = useRef(null); // Reference for the text element

  useEffect(() => {
    const imageElement = imageRef.current;
    const textElement = textRef.current;

    // Create an IntersectionObserver to detect when the image comes into view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // When the image and text come into view, animate them
          imageElement.style.transform = 'translateX(0)';
          imageElement.style.opacity = '1';

          textElement.style.transform = 'translateY(0)';
          textElement.style.opacity = '1';
        } else {
          // Reset animations when they go out of view
          imageElement.style.transform = 'translateX(-50px)';
          imageElement.style.opacity = '0';

          textElement.style.transform = 'translateY(20px)';
          textElement.style.opacity = '0';
        }
      });
    }, { threshold: 0.5 }); // Trigger when 50% of the element is visible

    // Start observing the image and text elements
    if (imageElement && textElement) {
      observer.observe(imageElement);
      observer.observe(textElement);
    }

    // Cleanup observer when the component unmounts
    return () => {
      if (imageElement && textElement) {
        observer.unobserve(imageElement);
        observer.unobserve(textElement);
      }
    };
  }, []);

  return (
    <section className="banner-section">
      <div className="banner-image" ref={imageRef}>
        <img
          src="https://shopify-xrh7.onrender.com/banner.jpg"
          alt="Special Offer"
        />
      </div>
      <div className="banner-text" ref={textRef}>
        <h2>Don't Miss the Offer!</h2>
        <p>Grab it now</p>
        <Link to="/products" className="shop-now-btn">Shop Now</Link>
      </div>
    </section>
  );
};

export default Banner;
