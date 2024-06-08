import React from 'react';
import './Review.css';

import { useEffect } from 'react';


//Imported icons
import { AiFillStar } from "react-icons/ai";
//Imported Images
import User1 from '../../assets/user(1).jpg';
import User2 from '../../assets/user(2).jpg';
import User3 from '../../assets/user(3).jpg';
import User4 from '../../assets/user(4).jpg';
import Image from '../../assets/review.jpg';

function Review() {

  return (
    <div className='review section container'>
        <div className="secContainer grid">
            <div className="textDiv">
                <span className="redText" >FROM OUR CLIENTS</span>
                <h3 >Real Travel History From Our Beloved</h3>
                <p >
                    By choosing us as their tour agency,
                    customers can expect an enriching and enjoyable travel experince,
                    filled with unforgettable memories that will last a lifetime.
                </p >
                <span className='stars flex'>
                    <AiFillStar className='icon'/>
                    <AiFillStar className='icon'/>
                    <AiFillStar className='icon'/>
                    <AiFillStar className='icon'/>
                    <AiFillStar className='icon'/>
                </span>

                <div className="clientImages flex">
                    <img src={User1} alt="Client"/>
                    <img src={User2} alt="Client"/>
                    <img src={User3} alt="Client"/>
                    <img src={User4} alt="Client"/>
                </div>
            </div>
            <div className="imgDiv" >
                <img src={Image} alt='Div'/>
            </div>
        </div>
    </div>
  )
}

export default Review