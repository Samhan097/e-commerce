import React, { useEffect, useRef } from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';


const Hero = () => {
  const heroContentRef = useRef(null); // Reference for the hero content

  useEffect(() => {
    const heroContent = heroContentRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Trigger the animation when the hero section is in view
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
          } else {
            // Reset animation when it goes out of view
            heroContent.style.opacity = '0';
            heroContent.style.transform = 'translateY(50px)';
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the content is visible
    );

    if (heroContent) {
      observer.observe(heroContent);
    }

    // Cleanup observer when the component unmounts
    return () => {
      if (heroContent) {
        observer.unobserve(heroContent);
      }
    };
  }, []);

  return (
    <div className="hero-container">
      <div className="hero">
        <div className="hero-content" ref={heroContentRef}>
          <h1>Welcome to Our Store</h1>
          <p>Discover amazing deals and exclusive offers.</p>
          <Link to="/products" className="shop-now-btn">Shop Now</Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
