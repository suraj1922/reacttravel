import React from 'react'
import './Footer.css'
import { BiLogoMediumOld } from "react-icons/bi";
import { ImFacebook } from "react-icons/im";
import { BsTwitterX } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";


function Footer() {

  return (
    <div className='footer'>
      <div className="secContainer .container grid">
        <div className="logoDiv">
          <div className="footerLogo" >
            <BiLogoMediumOld className='icon' />
            <span>OU-Trips</span>
          </div>
          <div className='social flex' >
            <ImFacebook className='icon'/>
            <BsTwitterX className='icon'/>
            <FiInstagram className='icon'/>
          </div>
        </div>
        <div className="footerLinks" >
          <span className='linkTitle'>
            Information
          </span>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Explore</a>
          </li>
          <li>
            <a href='#'>Travel</a>
          </li>
          <li>
            <a href='#'>Blog</a>
          </li>
        </div>
        <div className="footerLinks" >
          <span className='linkTitle'>
            Helpful Links
          </span>
          <li>
            <a href="#">Destination</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
          <li>
            <a href='#'>Travel & Condition</a>
          </li>
          <li>
            <a href='#'>Privacy</a>
          </li>
        </div>
        <div className="footerLinks" >
          <span className='linkTitle'>
            Contact Details
          </span>
          <span className='phone'>+651 125 658</span>
          <span className='email'>1234asc@gmail.com</span>
        </div>
      </div>
    </div>
  )
}

export default Footer