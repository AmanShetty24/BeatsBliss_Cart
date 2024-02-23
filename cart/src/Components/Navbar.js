// Navbar.js
import React, { useState } from 'react';
import './Navbar.css';
import cartIcon from '../cart.jpg'; // Import the cart image

const Navbar = ({ cartCount, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="navbar">
      {/* Brand */}
      <div className="navbar-brand">
        BeatBliss
      </div>

      {/* Search */}
      <div className="search">
        <input
          type="text"
          placeholder="Search products"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button className="search-button" onClick={handleSearchSubmit}>
          Search
        </button>
      </div>

      {/* Cart */}
      <div className="cart">
        <img src={cartIcon} alt="Cart" />
        <span className="cart-count">{cartCount}</span>
      </div>
    </div>
  );
};

export default Navbar;
