import React, { useState } from 'react';
import './NewArrivals.css';

const NewArrivals = () => {
  const products = [
    {
      _id: '1',
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
  ];

  const [hoveredImage, setHoveredImage] = useState({});

  const handleMouseEnter = (productId) => {
    setHoveredImage((prevHoveredImage) => ({
      ...prevHoveredImage,
      [productId]: true,
    }));
  };

  const handleMouseLeave = (productId) => {
    setHoveredImage((prevHoveredImage) => ({
      ...prevHoveredImage,
      [productId]: false,
    }));
  };

  return (
    <section className="new-arrivals">
      <h2>New Arrivals</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div
            className="product-card"
            key={product._id}
            onMouseEnter={() => handleMouseEnter(product._id)}
            onMouseLeave={() => handleMouseLeave(product._id)}
          >
            <img
              src={hoveredImage[product._id] ? product.hoverImageUrl : product.imageUrl}
              alt={product.name}
            />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button>View Details</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;
