import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import { FaUser, FaShoppingCart } from 'react-icons/fa'; // Import icons

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate(); // Use navigate for programmatic navigation

  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <header className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">E-Commerce</Link>
        </div>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <nav className="nav-links">
          <Link to="/products">Products</Link>
          <Link to="/login" className="login-btn">
            <FaUser /> Login
          </Link>
          <Link to="/cart" className="cart-btn">
            <FaShoppingCart /> Cart
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
