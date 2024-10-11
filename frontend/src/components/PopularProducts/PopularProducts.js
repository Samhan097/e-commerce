import React, { useState, useEffect } from 'react';
import './PopularProducts.css';

const samplePopularProducts = [
  {
    _id: '1',
    name: 'Noise Aura Buds Wireless Earbuds with 60H',
    price: '599',
    imageUrl: 'https://m.media-amazon.com/images/I/619gDUPcbNL.jpg',
    hoverImageUrl: 'https://m.media-amazon.com/images/I/61ii4YSraEL.jpg',
    popularity: 1.5,
    ratings: 7,
  },
  {
    _id: '2',
    name: 'Samsung Galaxy S23',
    price: '899',
    imageUrl: 'https://images.samsung.com/is/image/samsung/p6pim/my/2302/gallery/my-galaxy-s23-s911-sm-s911bzebxme-534844778?$650_519_PNG$',
    hoverImageUrl: 'https://i.ytimg.com/vi/BSYsXVFzmKA/maxresdefault.jpg',
    popularity: 3.5,
    ratings: 4,
  },
  {
    _id: '3',
    name: 'MacBook Pro 16',
    price: 2499,
    category: 'Laptop',
    imageUrl: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-mbp16-space-m1-2021_AV3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1643239879000',
    hoverImageUrl: 'https://www.notebookcheck.net/fileadmin/Notebooks/Apple/MacBook_Pro_16_2023_M3_Pro/IMG_1256.JPG',
    popularity: 5,
    ratings: 8,
  },
  {
    _id: '4',
    name: 'Xiaomi Mi 13 Pro',
    category: 'Mobile',
    price: '699',
    imageUrl: 'https://geniusmobile.lk/wp-content/uploads/2024/01/Xiaomi-Redmi-Note-13-Pro-5G-8GB-RAM-256GB.jpg',
    hoverImageUrl: 'https://i.ytimg.com/vi/QpvZpIBc6IU/maxresdefault.jpg',
    popularity: 3.5,
    ratings: 7,
  },
  // Add more sample products as needed
];

const PopularProducts = () => {
  const [hoveredImage, setHoveredImage] = useState({});

  const handleMouseEnter = (productId, hoverImageUrl) => {
    setHoveredImage((prevHoveredImage) => ({
      ...prevHoveredImage,
      [productId]: hoverImageUrl,
    }));
  };

  const handleMouseLeave = (productId) => {
    setHoveredImage((prevHoveredImage) => ({
      ...prevHoveredImage,
      [productId]: null,
    }));
  };

  useEffect(() => {
    const productCards = document.querySelectorAll('.product-card');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');  // Trigger the animation when in view
          } else {
            entry.target.classList.remove('visible');  // Optional: Remove animation when out of view
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the element is in view
    );

    productCards.forEach((card) => {
      observer.observe(card);
    });

    return () => {
      productCards.forEach((card) => {
        observer.unobserve(card);
      });
    };
  }, []);

  return (
    <div className="popular-products">
      <h2>Popular Products</h2>
      <div className="product-grid">
        {samplePopularProducts.map((product) => (
          <div
            key={product._id}
            className="product-card"
            onMouseEnter={() => handleMouseEnter(product._id, product.hoverImageUrl)}
            onMouseLeave={() => handleMouseLeave(product._id)}
          >
            <img
              src={hoveredImage[product._id] || product.imageUrl}
              alt={product.name}
            />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
