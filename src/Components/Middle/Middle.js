import React from 'react';
import './Middle.css';
import { useEffect } from 'react';

import Aos  from 'aos';
import 'aos/dist/aos.css'

function Middle() {


  return (
    <div className='middle section'>
      <div className='secContainer container'>
        <div className='grid'>
          <span className='flex'>
            <h1>10</h1>
            <p>
              World Of Experience
            </p>
          </span>
          <span className='flex'>
            <h1>2K+</h1>
            <p>
              Fine Destination
            </p>
          </span>
          <span className='flex'>
            <h1>10K+</h1>
            <p>
              Customer Reviews
            </p>
          </span>
          <span className='flex'>
            <h1>4.8</h1>
            <p>
              Overall Rating
            </p>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Middle