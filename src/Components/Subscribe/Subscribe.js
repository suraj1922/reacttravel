import React from 'react';
import "./Subscribe.css";

//IMPORT IMAGE
import Image from '../../assets/womanCalling.png'
import { useEffect } from 'react';



function Subscribe() {

  return (
    <div className='subscribe section container'>
      <div className="secContainer grid">
        <img src={Image} alt="Div-Image" />
        <div className='textDiv'>
          <h4 >Best Way To Start Your Journey!</h4>
          <p >
            We offer personalized itineraries tailored to individual perferences and interests.
          </p>
          <button className='btn' >Start Here</button>
        </div>
      </div>
    </div>
  )
}

export default Subscribe