import React from 'react';
import './NewArrivals.css';

const NewArrivals = () => {
  const products = [
    {
      id: 1,
      name: 'Noise Aura Buds Wireless Earbuds with 60H',
      category: 'Mobile',
      price: '$999',
      image: 'https://m.media-amazon.com/images/I/619gDUPcbNL.jpg',
    },
    {
      id: 2,
      name: 'Samsung Galaxy S23',
      category: 'Mobile',
      price: '$899',
      image: 'https://images.samsung.com/is/image/samsung/p6pim/my/2302/gallery/my-galaxy-s23-s911-sm-s911bzebxme-534844778?$650_519_PNG$',
    },
    {
    id: 3,
    name: 'Redmi Buds 4 Lite Earbuds Black',
    category: 'Ear Buds',
    price: '$799',
    image: 'https://earphones.lk/wp-content/uploads/2024/03/Xiaomi-Redmi-Buds-4-Lite-Black-01_600x.webp',
    },
    {
      id: 4,
      name: 'Google Pixel 7',
      category: 'Mobile',
      price: '$849',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBic59TWKPRTijPUZ7fuerbQaxJCy62qeKKg&s',
    },
    {
      id: 5,
      name: 'Xiaomi Mi 13 Pro',
      category: 'Mobile',
      price: '$699',
      image: 'https://geniusmobile.lk/wp-content/uploads/2024/01/Xiaomi-Redmi-Note-13-Pro-5G-8GB-RAM-256GB.jpg',
    },
    {
      id: 6,
      name: 'msi GF75 Thin',
      category: 'Laptop',
      price: '$799',
      image: 'https://asset.msi.com/resize/image/global/product/product_8_20200407095650_5e8bdde272ae1.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png',
    },
    {
      id: 7,
      name: 'JBL Tune 760NC',
      category: 'JBL',
      price: '$749',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF3huqxa29nFnzdqTHAp92MFewZjNAVyi1pQ&s',
    },
    {
      id: 8,
      name: 'Huawei P60 Pro',
      category: 'Mobile',
      price: '$899',
      image: 'https://cdn.dxomark.com/wp-content/uploads/medias/post-147160/Huawei-P60-Pro_featured-image-packshot-review-Recovered.jpg',
    },
  ];

  return (
    <section className="popular-products">
      <h2>New Arrivals</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button>View Details</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;
