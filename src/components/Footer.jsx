import React from "react";
import { FiArrowRight } from "react-icons/fi";
import "../styles/Footer.css";
import Logo1 from "../assets/starbucks_bones.png";
import Logo2 from "../assets/starbucks_coloured.png";
import Logo3 from "../assets/starbucks_fuck.png";

const FinalSection = () => {
  return (
    <div className="final-section">
      {/* Background text */}
      <h1 className="background-text">CONTACT</h1>

      <div className="final-card">
        {/* Left Section */}
        <div className="final-left">
          <img src={Logo2} alt="Starbucks Logo" className="logo-small" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ullam ex veritatis atque, nihil animi eligendi sed, possimus quae accusamus, veniam ad explicabo? Accusantium labore at esse, ducimus explicabo quod. possimus quae accusamus!
          </p>
        </div>

        {/* Middle Section */}
        <div className="final-middle">
          <p className="middle-text">
            We connect people through coffee and strive to inspire and nurture 
            the human spirit.
          </p>
          <img src={Logo3} alt="Starbucks Big Logo" className="logo-big" />
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
