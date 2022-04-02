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
          <div className='BurgerBtnContainer'>
            <div className='BurgerBtn'></div>
            <div className='BurgerBtn'></div>
            <div className='BurgerBtn'></div>
          </div>
        </ul>
        <Navbar />
        <h1>WE DESIGN AND FABRICATE INDESTRUCTIBLE WASTEWATER SCREENS. ENOUGH SAID.</h1>
        <div className='ButtonContainer'>
          <button className='Prosucts btn'>VIEW PRODUCTS</button>
          <button className='Services btn'>VIEW SERVICES</button>
        </div>
        <BannerCarousel />
        
    </div>
  )
}

export default MainBanner