// src/components/Hero.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../styles/Product.css";

import coffeeImage from "../assets/coffee_cup2.png"; // use your single image

const products = [
  { name: "Caramel Latte" },
  { name: "Mocha Frapp", featured: true },
  { name: "Vanilla Bean" },
  { name: "Hazelnut Brew" },
];

const Product = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={30}
          slidesPerView={3}
          centeredSlides={true}
          loop={true}
          className="hero-swiper"
        >
          {products.map((item, index) => (
            <SwiperSlide key={index}>
              <div className={`card ${item.featured ? "featured" : ""}`}>
                <div className="card-image">
                  <img src={coffeeImage} alt={item.name} />
                </div>
                <div className="card-content">
                  <h3 className="card-title">{item.name}</h3>
                  <ul className="options-list">
                    <li>Milk: Options</li>
                    <li>Cream: Options</li>
                    <li>Toppings: Options</li>
                  </ul>
                  <button className="add-btn">Add to Cart</button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Product;
