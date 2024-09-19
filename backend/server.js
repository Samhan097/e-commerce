// server.js or your routes file
const express = require('express');
const app = express();
const Product = require('./models/Product'); // Your Product model

app.get('/api/products', async (req, res) => {
  const { category, minPrice, maxPrice, sortBy, search } = req.query;

  try {
    const query = {};
    if (category) query.category = category;
    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) query.price.$gte = minPrice;
      if (maxPrice) query.price.$lte = maxPrice;
    }
    if (search) query.name = { $regex: search, $options: 'i' }; // Search functionality

    const sortOptions = {};
    if (sortBy) {
      switch (sortBy) {
        case 'price':
          sortOptions.price = 1; // ascending
          break;
        case 'price_desc':
          sortOptions.price = -1; // descending
          break;
        case 'popularity':
          sortOptions.popularity = -1; // descending
          break;
        case 'ratings':
          sortOptions.ratings = -1; // descending
          break;
        default:
          break;
      }
    }

    const products = await Product.find(query).sort(sortOptions);
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
