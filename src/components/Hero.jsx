// src/components/Hero.jsx
import React from "react";
import "../styles/Hero.css";
import cupMain from "../assets/coffee_cup.png";
import beansLeft from "../assets/bean1_blur.png";
import leaf from "../assets/coffee_leaf_blur.png";
import leaf_left from "../assets/coffee_leaf_blur.png";
import beansRight from "../assets/bean2_blur.png";

export default function Hero() {
  return (
    <section className="hero" role="region" aria-label="Hero">
      <div className="hero-content">
        {/* LEFT - text */}
        <div className="hero-left">
          <h4 className="hero-first">Where every Cup tells a Story.</h4>
          <h1 className="hero-title">
            WHAT'S<span>YOURS?</span>
          </h1>
          <h2 className="hero-sub">Frappucino Coffee Delight</h2>

          <p className="hero-desc">
            Discover your favorite coffee drinks and enjoy the rich flavors
            crafted with love. Experience the aroma of perfection in every sip.
            <b>Taste the magic of coffee today!</b>
          </p>
          <img src={leaf_left} alt="" className="leaf_left" />
          <h1 className="hero-rating">Best Rating <b className="rate">$9.3</b></h1>

          <div className="hero-actions">
            <button className="cta-btn">Order Now</button>
            <button className="ghost-btn">Learn More</button>
          </div>
        </div>

        {/* RIGHT - product visual */}
        <div className="hero-right" aria-hidden="false">
          {/* soft circular backdrop */}
          <div className="cup-bg" />

          {/* decorative images */}
          <img src={beansLeft} alt="" className="beans beans-left" />
          <img src={beansRight} alt="" className="beans beans-right" />
          <img src={leaf} alt="" className="leaf" />

          {/* main cup (forefront) */}
          <img src={cupMain} alt="Coffee cup" className="cup-main" />
          
          {/* thumbnails (placed below the cup, overlapping slightly) */}
          {/* <div className="thumbs">
            <div className="thumb-card active">
              <img src={cupMain} alt="thumb 1" />
            </div>
            <div className="thumb-card">
              <img src={cupMain} alt="thumb 2" />
            </div>
            <div className="thumb-card">
              <img src={cupMain} alt="thumb 3" />
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
