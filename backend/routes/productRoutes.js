const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

// Read products with filtering, sorting, and search
router.get('/products', async (req, res) => {
  const { category, minPrice, maxPrice, searchTerm, sortBy, sortOrder } = req.query;

  let filter = {};
  let sort = {};
  
  // Filtering
  if (category) filter.category = category;
  if (minPrice || maxPrice) filter.price = {};
  if (minPrice) filter.price.$gte = minPrice;
  if (maxPrice) filter.price.$lte = maxPrice;

  // Search
  if (searchTerm) {
    filter.name = { $regex: searchTerm, $options: 'i' }; // case-insensitive search
  }

  // Sorting
  if (sortBy) sort[sortBy] = sortOrder === 'desc' ? -1 : 1;

  try {
    const products = await Product.find(filter).sort(sort);
    res.send(products);
  } catch (error) {
    res.status(500).send(error); 
  }
});

module.exports = router;
