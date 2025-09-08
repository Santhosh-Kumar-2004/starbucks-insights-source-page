// src/components/Hero.jsx
import React from "react";
import "../styles/Hero.css";
import cupMain from "../assets/coffee_cup.png";
import beansLeft from "../assets/bean1_blur.png";
import leaf from "../assets/coffee_leaf_blur.png";
import beansRight from "../assets/bean3_blur.png";

export default function Hero() {
  return (
    <section className="hero" role="region" aria-label="Hero">
      <div className="hero-content">
        {/* LEFT - text */}
        <div className="hero-left">
          <h1 className="hero-title">
            It's not just <span>Coffee</span>
          </h1>
          <h2 className="hero-sub">It's Starbucks</h2>

          <p className="hero-desc">
            Discover your favorite coffee drinks and enjoy the rich flavors
            crafted with love. Experience the aroma of perfection in every sip.
          </p>

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
          <div className="thumbs">
            <div className="thumb-card active">
              <img src={cupMain} alt="thumb 1" />
            </div>
            <div className="thumb-card">
              <img src={cupMain} alt="thumb 2" />
            </div>
            <div className="thumb-card">
              <img src={cupMain} alt="thumb 3" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
