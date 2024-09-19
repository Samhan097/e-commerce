// src/pages/Products/Products.js
import React from 'react';
import ProductList from '../../components/ProductList'; // Adjust the path as necessary

const Products = () => {
  return (
    <div className="product-page">
      <h1>Products</h1>
      <ProductList /> {/* This will render the product list with filtering and sorting */}
    </div>
  );
};

export default Products;
