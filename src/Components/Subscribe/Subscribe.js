import React from 'react';
import "./Subscribe.css";

//IMPORT IMAGE
import Image from '../../assets/womanCalling.png'
import { useEffect } from 'react';

import Aos  from 'aos';
import 'aos/dist/aos.css'

function Subscribe() {
  useEffect(() => {
    Aos.init({ duration: 2000})
  }, [])
  return (
    <div className='subscribe section container'>
      <div className="secContainer grid">
        <img src={Image} alt="Div-Image" data-aos='fade-up'/>
        <div className='textDiv'>
          <h4 data-aos='fade-up'>Best Way To Start Your Journey!</h4>
          <p data-aos='fade-up'>
            We offer personalized itineraries tailored to individual perferences and interests.
          </p>
          <button className='btn' data-aos='fade-up'>Start Here</button>
        </div>
      </div>
    </div>
  )
}

export default Subscribe