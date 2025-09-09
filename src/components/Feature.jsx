import React from "react";
import coffeeImg from "../assets/star_coffee2.png"; // replace with your coffee image
import arrowLeft from "../assets/hand_arrow.png"; 
import arrowRight from "../assets/hand_arrow2.png"; 
import arrowRight1 from "../assets/hand_arrow3.png"; 

import "../styles/Feature.css"; 

const FeatureSection = () => {
  return (
    <section className="feature-section">
      <h1 className="feature-title">YOUR PERFECT COFFEE</h1>

      <div className="feature-image-container">
        <img src={coffeeImg} alt="Coffee" className="feature-image" />
      </div>

      {/* Tape */}
      <div className="feature-tape">
        <span>STARBUCKS</span>
        <span>STARBUCKS</span>
        <span>STARBUCKS</span>
        <span>STARBUCKS</span>
      </div>

      {/* Editable left paragraph */}
      <p className="feature-text feature-text-left">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      {/* Editable right paragraph */}
      <p className="feature-text feature-text-right">
        Discover the perfect blend crafted with passion.
      </p>

      {/* Left Arrow */}
      <img src={arrowLeft} alt="Arrow Left" className="feature-arrow arrow-left" />

      {/* Right Arrow */}
      <img src={arrowRight} alt="Arrow Right" className="feature-arrow arrow-right" />
    </section>
  );
};

export default FeatureSection;
