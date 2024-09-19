// src/components/Filter.js
import React, { useState } from 'react';

const Filter = ({ onFilter }) => {
  const [category, setCategory] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [sortBy, setSortBy] = useState('');

  const handleFilter = () => {
    // Ensure prices are valid numbers
    const min = minPrice ? parseFloat(minPrice) : '';
    const max = maxPrice ? parseFloat(maxPrice) : '';
    onFilter({ category, minPrice: min, maxPrice: max, sortBy });
  };

  const handleClear = () => {
    setCategory('');
    setMinPrice('');
    setMaxPrice('');
    setSortBy('');
    onFilter({ category: '', minPrice: '', maxPrice: '', sortBy: '' });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <input
        type="number"
        placeholder="Min Price"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
        min="0"
      />
      <input
        type="number"
        placeholder="Max Price"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
        min="0"
      />
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="">Sort by</option>
        <option value="price">Price (Ascending)</option>
        <option value="price_desc">Price (Descending)</option>
        <option value="popularity">Popularity</option>
        <option value="ratings">Ratings</option>
      </select>
      <button onClick={handleFilter}>Apply Filters</button>
      <button onClick={handleClear}>Clear Filters</button>
    </div>
  );
};

export default Filter;
