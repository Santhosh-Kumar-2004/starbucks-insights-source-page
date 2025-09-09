import React from "react";
// import coffeeImg from "../assets/star_coffee2.png"; 
import coffeeImg from "../assets/coffee_image.png"; 
// import arrowLeft from "../assets/hand_arrow.png"; 
// import arrowLeft from "../assets/hand_arrow3.png"; 
import arrowLeft from "../assets/hand_arrow2.png"; 
import arrowRight from "../assets/hand_arrow4.png"; 

import "../styles/Feature.css"; 

const FeatureSection = () => {
  return (
    <section className="feature-section">
      <h1 className="feature-title">UNMATCHED</h1>
      <h1 className="feature-title2"><b className="highlight">QUALITY</b></h1>

      <div className="feature-image-container">
        <img src={coffeeImg} alt="Coffee" className="feature-image" />
      </div>

      {/* Tape */}
      <div className="feature-tape">
        <span>STARBUCKS</span>
        <span>STARBUCKS</span>
        <span>STARBUCKS</span>
        <span>STARBUCKS</span>
        {/* <span>STARBUCKS</span> */}
      </div>

      {/* Editable left paragraph */}
      <p className="feature-text feature-text-left">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, officia illum ratione cupiditate atque fugit placeat ipsa, nam error consectetur!
      </p>

      {/* Editable right paragraph */}
      <p className="feature-text feature-text-right">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis fugiat quam, facilis minima nisi earum optio libero ad molestias amet consectetur elit.?
      </p>

      {/* Left Arrow */}
      <img src={arrowLeft} alt="Arrow Left" className="feature-arrow arrow-left" />

      {/* Right Arrow */}
      <img src={arrowRight} alt="Arrow Right" className="feature-arrow arrow-right" />
    </section>
  );
};

export default FeatureSection;
