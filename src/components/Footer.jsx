import React from "react";
import { FiArrowRight } from "react-icons/fi";
import "./FinalSection.css";

const FinalSection = () => {
  return (
    <div className="final-section">
      {/* Background text */}
      <h1 className="background-text">CONTACT</h1>

      <div className="final-card">
        {/* Left Section */}
        <div className="final-left">
          <img src="/assets/logo-small.png" alt="Starbucks Logo" className="logo-small" />
          <p>
            Starbucks has always been about great coffee. And great experiences. 
            Together, we make moments special.
          </p>
        </div>

        {/* Middle Section */}
        <div className="final-middle">
          <p className="middle-text">
            We connect people through coffee and strive to inspire and nurture 
            the human spirit.
          </p>
          <img src="/assets/logo-big.png" alt="Starbucks Big Logo" className="logo-big" />
        </div>

        {/* Right Section */}
        <div className="final-right">
          <h3>Subscribe</h3>
          <div className="subscribe-box">
            <input type="email" placeholder="Enter your email" />
            <button className="subscribe-btn">
              <FiArrowRight size={20} />
            </button>
          </div>
          <p className="subscribe-note">
            Stay updated with our latest offers and news.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FinalSection;
