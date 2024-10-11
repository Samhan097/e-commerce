// Cart.js
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import './Cart.css'

const Cart = ({ cart, toggleCart, isCartOpen }) => {
  return (
    <div className="cart-content">
      {/* Cart button */}
      <button className="cart-btn" onClick={toggleCart}>
        <FaShoppingCart />
      </button>

      {/* Cart Modal */}
      {isCartOpen && (
        <div className="cart-modal">
          <div className="cart-modal-content">
            <div className="cart-header">
              <h2>Your Cart</h2>
              <button className="close-cart" onClick={toggleCart}>
                X
              </button>
            </div>
            <div className="cart-items">
              {cart.length === 0 ? (
                <p>No items in the cart.</p>
              ) : (
                cart.map((item, index) => (
                  <div key={index} className="cart-item">
                    <p>{item.name}</p>
                    <p>Price: ${item.price}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
