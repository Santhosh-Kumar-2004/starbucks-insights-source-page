import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Product from './components/Product'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Product />
      {/* <div className="page">
        <h1>Starbucks Clone</h1>
      </div> */}
    </>
  )
}

export default App
