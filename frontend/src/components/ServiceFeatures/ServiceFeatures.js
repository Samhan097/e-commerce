import React, { useEffect } from 'react';
import { FaTruck, FaUndo, FaTag, FaHeadset } from 'react-icons/fa'; // Importing icons
import './ServiceFeatures.css';

const ServiceFeatures = () => {
  const features = [
    {
      id: 1,
      icon: <FaTruck />,
      title: 'Free Delivery',
      description: 'Orders from all items',
    },
    {
      id: 2,
      icon: <FaUndo />,
      title: 'Return & Refund',
      description: 'Money back guarantee',
    },
    {
      id: 3,
      icon: <FaTag />,
      title: 'Member Discount',
      description: 'On order over $99',
    },
    {
      id: 4,
      icon: <FaHeadset />,
      title: 'Support 24/7',
      description: 'Contact us 24 hours a day',
    },
  ];

  // This function handles the intersection observer for animating elements on scroll
  const handleScrollAnimation = () => {
    const elements = document.querySelectorAll('.feature-card');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate'); // Add animation class when in view
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the element is visible
      }
    );

    elements.forEach((element) => {
      observer.observe(element); // Start observing each feature card
    });
  };

  useEffect(() => {
    handleScrollAnimation(); // Add the observer when the component mounts
  }, []);

  return (
    <section className="service-features">
      <div className="features-grid">
        {features.map((feature, index) => (
          <div
            className="feature-card"
            key={feature.id}
            style={{ animationDelay: `${index * 200}ms` }} // Stagger animation
          >
            <div className="icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceFeatures;
