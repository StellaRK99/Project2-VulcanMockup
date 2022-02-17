import React from 'react'
import {Logo} from '../public/images/logo-white-vulcan.svg'
import {fbIcon} from '../public/images/icon-white-facebook.png'
import {inIcon} from '../public/images/icon-white-linkedin.png'


function Footer() {
  return (
    <footer>
        <img className="vulcan-logo" src ={Logo} alt="Vulcan Logo"></img>
        <img className="fb-icon" src={fbIcon} alt="Facebook Icon"></img>
        <img className="in-icon" src={inIcon} alt="Linkedin Icon"></img>
        <p>+1 712-642-2755</p>
        <p>CONTACT US</p>
        <p>COPYRIGHT 2017.ALL RIGHTS RESERVED</p>
    </footer>
  )
}

export default Footer