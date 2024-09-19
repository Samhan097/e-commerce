import React from "react";
import "./PopularProducts.css";

const PopularProducts = ({ products }) => {
  return (
    <div className="popular-products">
      <h2>Popular Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product._id} className="product-card">
            <img src={product.imageUrl} alt={product.name} />
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
