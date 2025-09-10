import React from "react";
import "../styles/Contact.css";
import { FaArrowRight } from "react-icons/fa";

const Contact = () => {
    return (
        <>
            <h1 className="branch-title contact-first">Let's Connect</h1>
            <section className="contact-section">
                {/* Left Card - Contact Form */}
                <div className="contact-card left-card">
                    <h2 className="contact-title">Contact</h2>
                    <form className="contact-form">
                        <label htmlFor="name">Name</label>
                        <input type="text" placeholder="Your Name" className="contact-input" />
                        <label htmlFor="email" className="">Email</label>
                        <input type="email" placeholder="Your Email" className="contact-input mail-lable" />
                        <button type="submit" className="submit-btn">Submit</button>
                    </form>
                </div>

                {/* Right Card - Thank You */}
                <div className="contact-card right-card">
                    <h2 className="contact-sec">Thank You!</h2>
                    <p className="contact-text">We appreciate your interest in Starbucks. Stay connected with us!</p>
                    <div className="arrow-icon">
                        <FaArrowRight />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
