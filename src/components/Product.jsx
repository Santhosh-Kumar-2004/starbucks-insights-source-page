// src/components/Product.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation"; // Make sure to import navigation styles
import "../styles/Product.css";
import { FaChevronLeft, FaChevronRight, FaChevronDown } from "react-icons/fa";

import coffeeImage from "../assets/coffee_cup2.png"; // your single coffee image for all cards

const products = [
  { name: "Caramel Latte", options: ["Milk", "Cream", "Toppings"] },
  { name: "Mocha Frapp", featured: true, options: ["Milk", "Cream", "Toppings"] },
  { name: "Vanilla Bean", options: ["Milk", "Cream", "Toppings"] },
  { name: "Hazelnut Brew", options: ["Milk", "Cream", "Toppings"] },
  { name: "Espresso", options: ["Milk", "Cream", "Toppings"] }, // Added for more items to loop
];

const Product = () => {
  return (
    <section className="product-page"> {/* Changed from .hero to .product-page */}
      {/* Top Navigation / Category Bar */}
      <nav className="product-navbar">
        <ul className="category-list">
          <li className="category-item active">DRINKS</li>
          <li className="category-item">FOOD</li>
          <li className="category-item">AT HOME</li>
          <li className="category-item">MERCHANDISE</li>
        </ul> 
      </nav>

      <div className="product-carousel-wrapper"> {/* New wrapper for Swiper */}
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: '.swiper-button-next-custom', // Custom navigation elements
            prevEl: '.swiper-button-prev-custom',
          }}
          spaceBetween={30}
          slidesPerView={3} // Adjust as needed for responsiveness
          centeredSlides={true}
          loop={true}
          className="product-swiper" // Changed class name
          breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 1.5,
              spaceBetween: 15,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 2.5,
              spaceBetween: 25,
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          {products.map((item, index) => (
            <SwiperSlide key={index}>
              <div className={`product-card ${item.featured ? "featured" : ""}`}>
                <div className="card-image">
                  <img src={coffeeImage} alt={item.name} className="blob"/>
                </div>
                <div className="card-content">
                  <h3 className="card-title">{item.name}</h3>
                  <div className="options-container"> {/* New container for options */}
                    {item.options.map((option, optIndex) => (
                      <div className="option-item" key={optIndex}>
                        <span className="option-label">{option}:</span>
                        <span className="option-value">Options <FaChevronDown /></span>
                      </div>
                    ))}
                  </div>
                  {/* The featured card will have its own button styling */}
                  {item.featured ? (
                    <button className="btn add-btn-featured">Add to Cart</button>
                  ) : (
                    <button className="btn add-btn">Add to Cart</button>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Custom Navigation Arrows */}
        <div className="swiper-button-prev-custom">
          <FaChevronLeft />
        </div>
        <div className="swiper-button-next-custom">
          <FaChevronRight />
        </div>
      </div>
    </section>
  );
};

export default Product;