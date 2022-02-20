import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import img1 from '../public/images/header-slider-img-01.jpg'
import img2 from '../public/images/header-slider-img-02.jpg'
import img3 from '../public/images/header-slider-img-03.jpg'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

function BannerCarousel() {
  return (
    <div>
        <Carousel showArrows={true} >
            <div>
                <img src={img1} />
            </div>
            <div>
                <img src={img2} />
            </div>
            <div>
                <img src={img3} />
            </div>
        </Carousel>
    </div>
  )
}

export default BannerCarousel