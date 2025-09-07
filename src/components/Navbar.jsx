// src/components/Navbar.jsx
import React from "react";
import { FiUser, FiShoppingCart } from "react-icons/fi";
import "../styles/Navbar.css";
import logo from "../assets/logo.svg"; // put your logo here (SVG or PNG)

export default function Navbar() {
  return (
    <header className="navbar" role="banner">
      <div className="nav-inner">
        <div className="nav-left">
          <img src={logo} alt="Starbucks logo" className="logo" />
        </div>

        <div className="nav-center" aria-label="Primary">
          <nav className="nav-pill" role="navigation" aria-label="Main navigation">
            <a href="#" className="nav-item active" aria-current="page">Home</a>
            <a href="#" className="nav-item">Menu</a>
            <a href="#" className="nav-item">Rewards</a>
            <a href="#" className="nav-item">Gift Cards</a>
          </nav>
        </div>

        <div className="nav-right">
          <button className="icon-btn" aria-label="Account">
            <FiUser size={18} />
          </button>

          <button className="icon-btn cart" aria-label="Cart">
            <FiShoppingCart size={18} />
          </button>
        </div>
      </div>
    </header>
  );
}
