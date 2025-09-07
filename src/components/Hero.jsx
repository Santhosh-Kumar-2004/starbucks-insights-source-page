// src/components/Hero.jsx
import React from "react";
import "../styles/Hero.css";
import cupMain from "../assets/coffee_cup.png";
import beansLeft from "../assets/beans1.png";
import beansRight from "../assets/beans2.png";
import leaf from "../assets/beans3.png";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        {/* Left side - text */}
        <div className="hero-left">
          <h1>
            It's not just <br />
            <span>Coffee</span>
          </h1>
          <h2>It's Starbucks</h2>
          <p>
            Discover your favorite coffee drinks and enjoy the rich flavors
            crafted with love. Experience the aroma of perfection in every sip.
          </p>
          <button className="cta-btn">Order Now</button>
        </div>

        {/* Right side - main cup */}
        <div className="hero-right">
          <img src={cupMain} alt="Starbucks Coffee" className="cup-main" />
          <img src={beansLeft} alt="Coffee beans" className="beans beans-left" />
          <img src={beansRight} alt="Coffee beans" className="beans beans-right" />
          <img src={leaf} alt="Coffee leaf" className="leaf" />
        </div>
      </div>

      {/* Bottom thumbnails */}
      <div className="hero-thumbnails">
        <img src={cupMain} alt="Thumb 1" />
        <img src={cupMain} alt="Thumb 2" />
        <img src={cupMain} alt="Thumb 3" />
      </div>
    </section>
  );
}
