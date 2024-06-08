import React from 'react'
import './Destination.css'

import { useEffect } from 'react';



import { MdLocationPin } from "react-icons/md";
import { FaCreditCard } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { BiSearchAlt } from "react-icons/bi";
import { TiLocation } from "react-icons/ti";

//IMPORT IMAGES
import Location1 from '../../assets/image 6.jpg';
import Location2 from '../../assets/image 7.jpg';
import Location3 from '../../assets/image 13.jpg';
import Location4 from '../../assets/image 9.jpg';
import Location5 from '../../assets/image 10.jpg';
import Location6 from '../../assets/image 11.jpg';
import Location7 from '../../assets/image 12.jpg';
import Location8 from '../../assets/image 7.jpg';

//ARRAY OF ITEMS THAT CONTAIN ALL DESTINATION 
const destinations = [
  {
    id: 1,
    img: Location1,
    name: "Seychellas Island",
    location: "Indian Ocean",
    rating: 4.7,
  },
  {
    id: 2,
    img: Location2,
    name: "Bora Bora Island",
    location: "Polynesia",
    rating: 4.8,
  },
  {
    id: 3,
    img: Location3,
    name: "Maldives Island",
    location: "Indian Ocean",
    rating: 4.8,
  },
  {
    id: 4,
    img: Location4,
    name: "Santorini Island",
    location: "Greece",
    rating: 4.5,
  },
  {
    id: 5,
    img: Location5,
    name: "Bali Island",
    location: "Indonesia",
    rating: 4.9,
  },
  {
    id: 6,
    img: Location6,
    name: "Mani Island",
    location: "Hawali, USA",
    rating: 4.9,
  },
  {
    id: 7,
    img: Location7,
    name: "Capri Island",
    location: "Italy",
    rating: 4.7,
  },
  {
    id: 8,
    img: Location8,
    name: "Fiji Island",
    location: "South Pacific",
    rating: 4.4,
  }
]

function Destination() {

  return (
    <div className='destination section container'>
      <div className="secContainer">
        <div className="secTitle">
          <span className="redText">EXPLORE NOW</span>
          <h3 >Find Your Dream Destination</h3>
          <p >
            Fill in the fields below to find the best spot for your next tour
          </p>
        </div>

        <div className="searchField grid">
          <div className="inputField flex">
            <MdLocationPin className='icon' />
            <input type='text' placeholder='Location' />
          </div>
          <div className="inputField flex" >
            <FaCreditCard className='icon' />
            <input type='text' placeholder='Budget' />
          </div>
          <div className="inputField flex" >
            <FaCalendarAlt className='icon' />
            <input type='text' placeholder='Date' />
          </div>
          <button className='btn flex'>
            <BiSearchAlt className='icon' />
          </button>
        </div>
        <div className="secMenu" >
          <ul className="flex">
            <li className='active'>All</li>
            <li>Recommended</li>
            <li>Beach</li>
            <li>Park</li>
            <li>Nature</li>
            <li>Mountain</li>
          </ul>
        </div>
        <div className="destinationContainer grid">
          {destinations.map((destination) => {
            return (
              <div className="singleDestination" key={destination.id}>
                <div className="imgDiv" >
                  <img src={destination.img} alt="Destination-img" />
                  <div className='descInfo flex'>
                    <div className='text'>
                      <span className='name'>{destination.name}</span>
                      <p className='flex'>
                        <TiLocation className='icon' />
                        {destination.location}
                      </p>
                      <span className='rating'>
                        {destination.rating}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default Destination