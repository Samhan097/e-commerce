// Header.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaBoxOpen, FaSearch } from 'react-icons/fa';
import './Header.css';
import Cart from '../Cart/Cart';
import Products from '../../pages/Products/Products';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [cart, setCart] = useState([]); // To store cart items
  const [isCartOpen, setIsCartOpen] = useState(false); // To control modal visibility

  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchTerm)}`);
    }
  };

  const toggleSearch = () => {
    setIsSearchActive((prev) => !prev);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen); // Toggle cart modal
  };

  const addToCart = (product) => {
    setCart([...cart, product]); // Add product to cart
  };

  return (
    <header className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">E-Commerce</Link>
        </div>
        <div className="actions">
          <nav className="nav-links">
            <div className={`search-bar ${isSearchActive ? 'active' : ''}`}>
              {isSearchActive && (
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                />
              )}
              <FaSearch className="search-icon" onClick={toggleSearch} />
            </div>
            <Link to="/products">
              <FaBoxOpen /> {/* Icon for products */}
            </Link>
            <Link to="/login" className="login-btn">
              <FaUser />
            </Link>

            {/* Integrate Cart component here */}
            <Cart cart={cart} toggleCart={toggleCart} isCartOpen={isCartOpen} />
          </nav>
        </div>  
      </div>
      <hr />
      <div className="categories-section">
        <button
          className="category-btn"
          onClick={() => navigate(`/products?category=`)}
        >
          All
        </button>
        <button
          className="category-btn"
          onClick={() => navigate(`/products?category=Mobile`)}
        >
          Mobile
        </button>
        <button
          className="category-btn"
          onClick={() => navigate(`/products?category=Laptop`)}
        >
          Laptop
        </button>
        <button
          className="category-btn"
          onClick={() => navigate(`/products?category=JBL`)}
        >
          JBL
        </button>
        <button
          className="category-btn"
          onClick={() => navigate(`/products?category=Tab`)}
        >
          Tab
        </button>
        <button
          className="category-btn"
          onClick={() => navigate(`/products?category=Ear Buds`)}
        >
          Ear Buds
        </button>
      </div>
      {/* <Products addToCart={addToCart} /> */}
    </header>
  );
};

export default Header;
