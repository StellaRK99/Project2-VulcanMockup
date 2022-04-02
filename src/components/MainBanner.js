import React, { useState, useEffect  } from 'react'
import BannerCarousel from './Carousel'
import Icon from './Icon'
import Navbar from './Navbar'


function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

 function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

function MainBanner() {
  const [toggle, setToggle] = useState(false)
  const { height, width } = useWindowDimensions();
  console.log(width)
  useEffect(()=>{
    if(width >= 767){
      console.log('wewewewewewe')
      setToggle(false)
    }
  }, [width])
  

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
          <div className='BurgerBtnContainer' onClick={() => setToggle(!toggle)}>
            <div className='BurgerBtn'></div>
            <div className='BurgerBtn'></div>
            <div className='BurgerBtn'></div>
          </div>
        </ul>
        {
          toggle && <ul className='MobileNav'>
            <li><a href='/'>ABOUT</a></li>
            <li><a href='/'>PRODUCTS</a></li>
            <li><a href='/'>SERVICES</a></li>
            <li><a href='/'>PARTS</a></li>
            <li><a href='/'>NEWS</a></li>
            <li><a href='/'>CONTACT</a></li>
            <li><a href='/'>INSTALLATION MAP</a></li>
            <li><a href='/'>PRODUCT LITERATURE</a></li>
          </ul>
        }
        <Navbar />
        <h1>WE DESIGN AND FABRICATE INDESTRUCTIBLE WASTEWATER SCREENS. ENOUGH SAID.</h1>
        <div className='ButtonContainer'>
          <div className='Holder HL'>
            <button className='Prosucts btn'>VIEW PRODUCTS</button>
          </div>
          <div className='Holder HR'>
            <button className='Services btn'>VIEW SERVICES</button>
          </div>
        </div>
        <BannerCarousel />
        
    </div>
  )
}

export default MainBanner