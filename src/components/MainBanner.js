import React from 'react'
import BannerCarousel from './Carousel'
import Icon from './Icon'
import Navbar from './Navbar'


function MainBanner() {
  return (
    <div className='MainBanner'>
        <ul className='TopNavbar'>
          <li>
            <h4>INSTALL MAP</h4>
          </li>
          <li>
            <h4>PRODUCT LITERATURE</h4>
          </li>
          <li className='Icon'>
            <Icon />
          </li>
          <li>
            <h4>+1 712-642-2755</h4>
          </li>
          <li>
            <h4>CONTACT US</h4>
          </li>
        </ul>
        <Navbar />
        <BannerCarousel />
        <h1>We design and fabricate indestructible wastewater screens. Enough said.</h1>
        <div className='ButtonContainer'>
          <button className='Prosucts btn'>VIEW PRODUCTS</button>
          <button className='Services btn'>VIEW SERVICES</button>
        </div>
    </div>
  )
}

export default MainBanner