// src/components/Hero.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../styles/Product.css";

import coffeeImage from "../assets/coffee.jpg"; // use your single image

const products = [
  { name: "Caramel Latte" },
  { name: "Mocha Frapp", featured: true },
  { name: "Vanilla Bean" },
  { name: "Hazelnut Brew" },
];

const Product = () => {
  return (
    <section className="hero">
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={30}
        slidesPerView={3}
        centeredSlides={true}
        className="hero-swiper"
      >
        {products.map((item, index) => (
          <SwiperSlide key={index}>
            <div className={`card ${item.featured ? "featured" : ""}`}>
              <img src={coffeeImage} alt={item.name} />
              <h3>{item.name}</h3>
              <div className="options">
                <p>Milk: Options</p>
                <p>Cream: Options</p>
                <p>Toppings: Options</p>
              </div>
              <button className="add-btn">Add to Cart</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Product;
