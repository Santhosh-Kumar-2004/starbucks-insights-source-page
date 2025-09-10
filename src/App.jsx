import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Product from './components/Product'
import FeatureSection from './components/Feature';
import Branches from './components/Branches';
import Contact from './components/Contact';
import FinalSection from './components/Footer';

function App() {

  const cursor = document.querySelector(".cursor-follower");
  document.addEventListener("mousemove", (e) => {
    cursor.style.top = e.clientY + "px";
    cursor.style.left = e.clientX + "px";
  });


  return (
    <>
      <div class="cursor-follower"></div>

      <Navbar />
      <Hero />
      <Product />
      <FeatureSection />
      <Branches />
      <Contact />
      <FinalSection />
      {/* <h1 className='last-title'>Contact</h1> */}
      {/* <div className="page">
        <h1>Starbucks Clone</h1>
      </div> */}
    </>
  )
}

export default App
