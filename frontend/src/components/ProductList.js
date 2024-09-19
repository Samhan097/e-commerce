import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductItem from './ProductItem';
import Filter from './Filter';
import SearchBar from './SearchBar';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterParams, setFilterParams] = useState({});
  const [searchTerm, setSearchTerm] = useState('');

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/products`, {
        params: { ...filterParams, search: searchTerm }
      });
      setProducts(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [filterParams, searchTerm]);

  const handleFilter = (filters) => {
    setFilterParams(filters);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  if (loading) {
    return <p>Loading products...</p>;
  }

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <Filter onFilter={handleFilter} />
      {products.map(product => (
        <ProductItem key={product._id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
