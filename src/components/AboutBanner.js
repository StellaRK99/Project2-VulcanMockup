import React from 'react'
import aboutBanner from '../public/images/bg-section-about-us.jpg'

function AboutBanner() {
  return (
    <div>
        <img className="about-banner" src={aboutBanner}></img>
        <h1>Delivering clean safe water since 1975. Refreshing indeed.</h1>
        <p>Vulcan wastewater screening equipment has played a vital role in 
        protecting the water supply of more than 900 cities and communities throughout the world.
        </p>
        <button>About Us</button>
    </div>
  )
}

export default AboutBanner