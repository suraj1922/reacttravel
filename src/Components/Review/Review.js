import React from 'react';
import './Review.css';

import { useEffect } from 'react';

import Aos  from 'aos';
import 'aos/dist/aos.css'

//Imported icons
import { AiFillStar } from "react-icons/ai";
//Imported Images
import User1 from '../../assets/user(1).jpg';
import User2 from '../../assets/user(2).jpg';
import User3 from '../../assets/user(3).jpg';
import User4 from '../../assets/user(4).jpg';
import Image from '../../assets/review.jpg';

function Review() {
    useEffect(() => {
        Aos.init({ duration: 2000})
      }, [])
  return (
    <div className='review section container'>
        <div className="secContainer grid">
            <div className="textDiv">
                <span className="redText" data-aos='fade-right'>FROM OUR CLIENTS</span>
                <h3 data-aos='fade-right'>Real Travel History From Our Beloved</h3>
                <p data-aos='fade-right'>
                    By choosing us as their tour agency,
                    customers can expect an enriching and enjoyable travel experince,
                    filled with unforgettable memories that will last a lifetime.
                </p >
                <span className='stars flex' data-aos='fade-right'>
                    <AiFillStar className='icon'/>
                    <AiFillStar className='icon'/>
                    <AiFillStar className='icon'/>
                    <AiFillStar className='icon'/>
                    <AiFillStar className='icon'/>
                </span>

                <div className="clientImages flex" data-aos='fade-up'>
                    <img src={User1} alt="Client"/>
                    <img src={User2} alt="Client"/>
                    <img src={User3} alt="Client"/>
                    <img src={User4} alt="Client"/>
                </div>
            </div>
            <div className="imgDiv" data-aos='fade-left'>
                <img src={Image} alt='Div'/>
            </div>
        </div>
    </div>
  )
}

export default Review