import React from 'react'
import aboutBanner from '../public/images/bg-section-about-us.jpg'

function AboutBanner() {
  return (
    <section className= "aboutBanner">
      <figure className="aboutImg">
        <img className="about-banner" src={aboutBanner}></img>
      </figure>  
        <h1>DELIVERING CLEAN SAFE WATER SINCE 1975. REFRESHING INDEED.</h1>
        <p>Vulcan wastewater screening equipment has played a vital role in 
        protecting the water supply of more than 900 cities and communities throughout the world.
        </p>
        <button>ABOUT US</button>
    </section>
  )
}

export default AboutBanner