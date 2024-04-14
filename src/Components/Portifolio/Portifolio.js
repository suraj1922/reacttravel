import React from 'react'
import './Portifolio.css';

import { useEffect } from 'react';

import Aos  from 'aos';
import 'aos/dist/aos.css'

import icon1 from '../../assets/protection.png'
import icon2 from '../../assets/destination.png'
import icon3 from '../../assets/online-chat.png'
import image from '../../assets/travel.jpg'

function Portifolio() {
    useEffect(() => {
        Aos.init({ duration: 2000})
      }, [])
  return (
    <div className='portifolio section container'>
        <div className="secContainer grid">
            <div className="leftContent">
                <div className="secHeading">
                    <h3 data-aos="fade-up">Why Should You Choose Us</h3>
                    <p data-aos="fade-up">
                        We have extensive knowledge and experience in the travel
                    </p>
                </div>
                <div className="grid">
                    <div className="singlePortifolio flex" data-aos='fade-right'>
                        <div className="iconDiv">
                            <img src={icon1} alt="Icon" />
                        </div>
                        <div className="infor">
                            <h4>Safety and Support</h4>
                            <p>
                            Our top priority is the safety and well being of our clients. We maintian high safety standard and have emergency support available during the trip
                            </p>
                        </div>
                    </div>
                    <div className="singlePortifolio flex" data-aos='fade-right'>
                        <div className="iconDiv">
                            <img src={icon2} alt="Icon" />
                        </div>
                        <div className="infor">
                            <h4>Diverse Range of Destination</h4>
                            <p>
                                Whether its a domestic tour or an international adventure, we cover a wide range of destinations to cater to different interests and perferences
                            </p>
                        </div>
                    </div>
                    <div className="singlePortifolio flex" data-aos='fade-right'>
                        <div className="iconDiv">
                            <img src={icon3} alt="Icon" />
                        </div>
                        <div className="infor">
                            <h4>24/7 Customer Support</h4>
                            <p>
                                Our dedicated customers support team is available round the clock to address any queries or concerns before, during and after the trips
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rightcontent" data-aos='fade-left'>
                <img src={image} alt="" />
            </div>
        </div>
    </div>
  )
}
export default Portifolio