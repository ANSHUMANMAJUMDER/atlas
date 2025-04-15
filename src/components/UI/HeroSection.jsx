import { FaRegArrowAltCircleRight } from "react-icons/fa";
import React from 'react'
const HeroSection = () => {
  return (
    <main className='hero-section main'>
        <div className='container grid grid-two-cols'>
        <div className='hero-content'>
          <h1 className='heading-xl'>
            Explore the world, one country at a Time
          </h1>
          <p className='paragraph'>
            Discover the history, culture and beauty of every nation. Sort, search and filter through countries to find details you need.
          </p>
          <button className='btn btn-darken btn-inline bg-white-box'>
            Start Exploring <FaRegArrowAltCircleRight />
          </button>
        </div>
        <div className='hero-image'>
          <img className="world-map" src="/public/images/world.png" alt="" />
        </div>
        </div>
       </main>
  )
}

export default HeroSection
