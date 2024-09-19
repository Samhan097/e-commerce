// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products/Products';
import Login from './pages/Login/Login';
import Header from './components/Header/Header';
import Cart from './components/Cart';
import Footer from './pages/Footer/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header /> {/* Global header */}
        <div className="main-content"> {/* Main content wrapper */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
        <Footer /> {/* Global footer */}
      </div>
    </Router>
  );
}

export default App;
