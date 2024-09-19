import React, { useState, useEffect } from "react";
import Hero from "../components/Hero/Hero"; // Import the Hero component
import PopularProducts from "../components/PopularProducts/PopularProducts"; // Import the PopularProducts component
import Banner from "../components/Banner/Banner";
import NewArrivals from "../components/NewArrivals/NewArrivals";
import ServiceFeatures from "../components/ServiceFeatures/ServiceFeatures";

const sampleProducts = [
  {
    _id: "1",
    name: "iPhone 14 Pro Max",
    price: 1099,
    category: "Mobile",
    imageUrl:
      "https://intouchtel.com/cdn/shop/products/COVERT6-IPHONE-14-PRO-MAX-02-CLEAR.jpg?v=1668940993&width=600",
  },
  {
    _id: "2",
    name: "Galaxy Tab S9 FE Series",
    price: 899,
    category: "Tab",
    imageUrl:
      "https://images.samsung.com/is/image/samsung/assets/us/tablets/02282024/new/TabletPCD_meet-our-galaxy-tablets_02_Tab-S9-FE_PC.jpg?$570_N_JPG$",
  },
  {
    _id: "3",
    name: "MacBook Pro 16",
    price: 2499,
    category: "Laptop",
    imageUrl:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-mbp16-space-m1-2021_AV3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1643239879000",
  },
  {
    _id: "4",
    name: "Go Air Pop Wireless Earbuds",
    price: 599,
    category: "Ear Buds",
    imageUrl:
      "https://uk.jlab.com/cdn/shop/products/GOAirPopBlackCover.jpg?v=1694639309&width=1445",
  },
];

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(sampleProducts);
  }, []);

  return (
    <div>
      <Hero /> {/* Hero section will be at the top */}
      <PopularProducts products={products} />{" "}
      {/* Popular Products will be rendered below the Hero */}
      <Banner />
      <NewArrivals />
      <ServiceFeatures />
    </div>
  );
};

export default Home;
