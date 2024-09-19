import React from 'react';
import { Link } from 'react-router-dom';
import './ProductItem.css';

const ProductItem = ({ product }) => (
  <div className="product-item">
    <img src={product.imageUrl} alt={product.name} loading='lazy'/>
    <h3>{product.name}</h3>
    <p>Price: ${product.price}</p>
    <p>Category: {product.category}</p>
    <Link to={`/product/${product._id}`}>
      <button>View Details</button>
    </Link>
  </div>
);

export default ProductItem;
