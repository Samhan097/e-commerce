import React, { useState, useEffect } from 'react';
import './Products.css';
import { useLocation } from 'react-router-dom'; // Import useLocation
import ServiceFeatures from '../../components/ServiceFeatures/ServiceFeatures';


// Sample product data (you might get this from an API)
const sampleProducts = [
  {
    _id:'1',
    name: 'Noise Aura Buds Wireless Earbuds with 60H',
    category: 'Ear Buds',
    price: '599',
    imageUrl: 'https://m.media-amazon.com/images/I/619gDUPcbNL.jpg',
    hoverImageUrl: 'https://m.media-amazon.com/images/I/61ii4YSraEL.jpg',
    popularity: 1.5,
    ratings: 7,
  },
  {
    _id: '2',
    name: 'Samsung Galaxy S23',
    category: 'Mobile',
    price: '899',
    imageUrl: 'https://images.samsung.com/is/image/samsung/p6pim/my/2302/gallery/my-galaxy-s23-s911-sm-s911bzebxme-534844778?$650_519_PNG$',
    hoverImageUrl: 'https://i.ytimg.com/vi/BSYsXVFzmKA/maxresdefault.jpg',
    popularity: 3.5,
    ratings: 4,
  },
  {
    _id: '3',
    name: 'Redmi Buds 4 Lite Earbuds Black',
    category: 'Ear Buds',
    price: '799',
    imageUrl: 'https://earphones.lk/wp-content/uploads/2024/03/Xiaomi-Redmi-Buds-4-Lite-Black-01_600x.webp',
    hoverImageUrl: 'https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaPE/122370281_01/w=800,h=800,fit=pad',
    popularity: 2.5,
    ratings: 6,
  },
  {
    _id: '4',
    name: 'Google Pixel 7',
    category: 'Mobile',
    price: '849',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBic59TWKPRTijPUZ7fuerbQaxJCy62qeKKg&s',
    hoverImageUrl: 'https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Hero_Image_Thumbnail.width-1000.format-webp.webp',
popularity: 4.5,
    ratings: 9,
  },
  {
    _id: '5',
    name: 'Xiaomi Mi 13 Pro',
    category: 'Mobile',
    price: '699',
    imageUrl: 'https://geniusmobile.lk/wp-content/uploads/2024/01/Xiaomi-Redmi-Note-13-Pro-5G-8GB-RAM-256GB.jpg',
    hoverImageUrl: 'https://i.ytimg.com/vi/QpvZpIBc6IU/maxresdefault.jpg',
popularity: 3.5,
    ratings: 7,
  },
  {
    _id: '6',
    name: 'msi GF75 Thin',
    category: 'Laptop',
    price: '1399',
    imageUrl: 'https://asset.msi.com/resize/image/global/product/product_8_20200407095650_5e8bdde272ae1.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png',
    hoverImageUrl: 'https://laptopmedia.com/wp-content/uploads/2020/11/3-5.jpg',
popularity: 4.5,
    ratings: 8,
  },
  {
    _id: '7',
    name: 'JBL Tune 760NC',
    category: 'JBL',
    price: '349',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF3huqxa29nFnzdqTHAp92MFewZjNAVyi1pQ&s',
    hoverImageUrl: 'https://www.designinfo.in/wp-content/uploads/2023/10/JBL-Tune-760NC-Blue-9.webp',
popularity: 3.5,
    ratings: 7.5,
  },
  {
    _id: '8',
    name: 'Huawei P60 Pro',
    category: 'Mobile',
    price: '1299',
    imageUrl: 'https://cdn.dxomark.com/wp-content/uploads/medias/post-147160/Huawei-P60-Pro_featured-image-packshot-review-Recovered.jpg',
    hoverImageUrl: 'https://www.notebookcheck.net/uploads/tx_nbc2/Huawei_P60_Pro.jpg',
popularity: 5,
    ratings: 10,
  },
  {
    _id: '9',
    name: 'iPhone 14 Pro Max',
    price: 1099,
    category: 'Mobile',
    imageUrl: 'https://intouchtel.com/cdn/shop/products/COVERT6-IPHONE-14-PRO-MAX-02-CLEAR.jpg?v=1668940993&width=600',
    hoverImageUrl: 'https://lamicallshop.com/cdn/shop/products/2_e054a351-c0d3-4e71-ac74-91320e678a06_900x.jpg?v=1680090918',
popularity: 4,
    ratings: 8,
  },
  {
    _id: '10',
    name: 'Galaxy Tab S9 FE Series',
    price: 899,
    category: 'Tab',
    imageUrl: 'https://images.samsung.com/is/image/samsung/assets/us/tablets/02282024/new/TabletPCD_meet-our-galaxy-tablets_02_Tab-S9-FE_PC.jpg?$570_N_JPG$',
    hoverImageUrl: 'https://www.digitaltrends.com/wp-content/uploads/2023/10/samsung-galaxy-tab-s9-fe-plus-official.jpg?fit=720%2C479&p=1',
popularity: 4.5,
    ratings: 9,
  },
  {
    _id: '11',
    name: 'MacBook Pro 16',
    price: 2499,
    category: 'Laptop',
    imageUrl: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-mbp16-space-m1-2021_AV3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1643239879000',
    hoverImageUrl: 'https://www.notebookcheck.net/fileadmin/Notebooks/Apple/MacBook_Pro_16_2023_M3_Pro/IMG_1256.JPG',
popularity: 5,
    ratings: 8,
  },
  {
    _id: '12',
    name: 'Go Air Pop Wireless Earbuds',
    price: 299,
    category: 'Ear Buds',
    imageUrl: 'https://uk.jlab.com/cdn/shop/products/GOAirPopBlackCover.jpg?v=1694639309&width=1445',
    hoverImageUrl: 'https://i.rtings.com/assets/products/ucds23yV/jlab-audio-go-air-pop-true-wireless/design-medium.jpg?format=auto',
popularity: 1.5,
    ratings: 2,
  },
  {
    _id: '13',
    name: 'Redmi Buds 5 Wireless Earbuds',
    price: 499,
    category: 'Ear Buds',
    imageUrl: 'https://www.simplytek.lk/cdn/shop/files/Redmi-Buds-5-simplytek-lk-sri-lanka_1220x_crop_center.jpg?v=1709888682',
    hoverImageUrl: 'https://i.ebayimg.com/images/g/IwMAAOSwPThlD-~U/s-l400.jpg',
popularity: 3,
    ratings: 8,
  },
  {
    _id: '14',
    name: 'JBL Live 670NC Wireless Headphone',
    price: 699,
    category: 'JBL',
    imageUrl: 'https://www.simplytek.lk/cdn/shop/files/JBL-Live-670-NC-Headphone-Black-simplytek-lk-sri-lanka_3_610x_crop_center.jpg?v=1699518813',
    hoverImageUrl: 'https://majorhifi.com/wp-content/uploads/JBL-Live-670NC-Swiveled-Ear-Cup-1.png',
popularity: 4,
    ratings: 3,
  },
  {
    _id: '15',
    name: 'Asus Vivobook 15 X1504VA – i3',
    price: 1699,
    category: 'Laptop',
    imageUrl: 'https://www.laptop.lk/wp-content/uploads/2024/08/ASUS-Vivobook-15-X1504VA-i3-04.webp',
    hoverImageUrl: 'https://dlcdnwebimgs.asus.com/files/media/aab96bdb-a681-488e-acd5-bbdfd565d20a/v3/features/images/large/1x/s4/main.jpg',
popularity: 3.5,
    ratings: 6,
  },
  {
    _id: '16',
    name: 'HP ProBook 450 G9 – i7',
    price: 1599,
    category: 'Laptop',
    imageUrl: 'https://www.laptop.lk/wp-content/uploads/2023/10/HP-ProBook-450-G9-%E2%80%93-i7.webp',
    hoverImageUrl: 'https://www.greengreenstore.co.uk/cdn/shop/products/img6372_f84d23b8-3844-4972-bbfd-389d37713226.jpg?v=1697465530&width=1214',
    popularity: 4.5,
    ratings: 7,
  },
];

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState('');
  const [priceRange, setPriceRange] = useState([0, 5000]); // Example range
  const [sortOrder, setSortOrder] = useState('price-asc'); // Default sorting by price ascending
  const [searchQuery, setSearchQuery] = useState('');
  const [hoveredImage, setHoveredImage] = useState({});

  const location = useLocation(); // Get search params from URL

  useEffect(() => {
    // Simulating an API call
    setProducts(sampleProducts);
  }, []);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const searchTerm = queryParams.get('search') || '';
    const categoryParam = queryParams.get('category') || '';

    let filtered = products;

    // Filter by search term if present
    if (searchTerm) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category if present
    if (categoryParam) {
      setCategoryFilter(categoryParam);
      filtered = filtered.filter((product) => product.category === categoryParam);
    }

    setFilteredProducts(filtered);
  }, [location.search, products]);

  useEffect(() => {
    // Filter products based on selected filters
    let filtered = products;

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter((p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Category filter
    if (categoryFilter) {
      filtered = filtered.filter((p) => p.category === categoryFilter);
    }

    // Price range filter
    filtered = filtered.filter((p) => {
      const price = typeof p.price === 'string' ? parseFloat(p.price.replace('$', '')) : p.price;
      return price >= priceRange[0] && price <= priceRange[1];
    });

    // Sort products
    filtered.sort((a, b) => {
      const priceA = typeof a.price === 'string' ? parseFloat(a.price.replace('$', '')) : a.price;
      const priceB = typeof b.price === 'string' ? parseFloat(b.price.replace('$', '')) : b.price;

      switch (sortOrder) {
        case 'price-asc':
          return priceA - priceB;
        case 'price-desc':
          return priceB - priceA;
        case 'popularity-asc':
          return a.popularity - b.popularity;
        case 'popularity-desc':
          return b.popularity - a.popularity;
        case 'ratings-asc':
          return a.ratings - b.ratings;
        case 'ratings-desc':
          return b.ratings - a.ratings;
        default:
          return 0;
      }
    });

    setFilteredProducts(filtered);
  }, [searchQuery, categoryFilter, priceRange, sortOrder, products]);

  const handleCategoryChange = (e) => {
    setCategoryFilter(e.target.value);
  };

  const handlePriceChange = (e) => {
    const [min, max] = e.target.value.split('-').map(Number);
    setPriceRange([min, max]);
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Function to handle hover image change
  const handleMouseEnter = (productId, hoverImageUrl) => {
    setHoveredImage((prevHoveredImage) => ({
      ...prevHoveredImage,
      [productId]: hoverImageUrl,
    }));
  };

  const handleMouseLeave = (productId) => {
    setHoveredImage((prevHoveredImage) => ({
      ...prevHoveredImage,
      [productId]: null,
    }));
  };

  return (
    <>
      <div className="product-page">
      {/* Filters and Sorting Controls */}
      <div className="filters-container">
        <div className="filter-category">
          <label htmlFor="category">Category:</label>
          <select id="category" value={categoryFilter} onChange={handleCategoryChange}>
            <option value="">All</option>
            <option value="Mobile">Mobile</option>
            <option value="Laptop">Laptop</option>
            <option value="JBL">JBL</option>
            <option value="Tab">Tab</option>
            <option value="Ear Buds">Ear Buds</option>
          </select>
        </div>

        <div className="filter-price">
          <label htmlFor="price">Price Range:</label>
          <input
            type="text"
            id="price"
            placeholder="e.g., 0-1000"
            onBlur={handlePriceChange}
          />
        </div>

        <div className="filter-sort">
          <label htmlFor="sort">Sort By:</label>
          <select id="sort" value={sortOrder} onChange={handleSortChange}>
            <option value="price-asc">Price (Low to High)</option>
            <option value="price-desc">Price (High to Low)</option>
            <option value="popularity-asc">Popularity (Low to High)</option>
            <option value="popularity-desc">Popularity (High to Low)</option>
            <option value="ratings-asc">Ratings (Low to High)</option>
            <option value="ratings-desc">Ratings (High to Low)</option>
          </select>
        </div>
      </div>

      {/* Display Products */}
<div className="product-grid">
  {filteredProducts.map((product) => (
    <div
      key={product._id}
      className="product-card"
      onMouseEnter={() => handleMouseEnter(product._id, product.hoverImageUrl)}
      onMouseLeave={() => handleMouseLeave(product._id)}
    >
      <img
        src={hoveredImage[product._id] || product.imageUrl}
        alt={product.name}
      />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <p>Popularity: {product.popularity}</p>
      <p>Ratings: {product.ratings}</p>
      <button>Add to Cart</button>
    </div>
  ))}
</div>
    </div>
    <ServiceFeatures />
    </>
  );
};

export default Products;
