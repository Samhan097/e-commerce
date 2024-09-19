import React from 'react';
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

  return (
    <section className="service-features">
      <div className="features-grid">
        {features.map((feature) => (
          <div className="feature-card" key={feature.id}>
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
