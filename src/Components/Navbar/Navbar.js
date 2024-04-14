import React,{useState} from 'react';
import './Navbar.css';
//Imported Icons
import { BiLogoMedium } from "react-icons/bi";
import { IoIosCloseCircle } from "react-icons/io";
import { PiDotsNineBold } from "react-icons/pi";

function Navbar() {
    // State to create and update navbar
    const[navBar, setNavBar] = useState("menu");
    //Function to show navbar
    const showNavBar = () =>{
        setNavBar('menu showNavbar')
    };
    //Function to remove navbar
    const removeNavBar = () =>{
        setNavBar('menu ')
    }
    return (
        <div>
            <div className='navBar'>
                <div className='logoDiv'>
                    <BiLogoMedium className='icon' />
                    <span>OU-Trips</span>
                </div>
                <div className={navBar}>
                    <ul>
                        <li className='navList'>
                            Destination
                        </li>
                        <li className='navList'>
                            About Us
                        </li>
                        <li className='navList'>
                             Testimonial
                        </li>
                        <li className='navList'>
                            Gallery
                        </li>
                    </ul>

                    {/* Icons to remove Navbar */}
                    <IoIosCloseCircle className='icon closeIcon' onClick={removeNavBar}/>
                </div>
                <button className='SignUpBtn btn'>Sign Up</button>
                <PiDotsNineBold className='icon menuIcon' onClick={showNavBar}/>
            </div>
        </div>
    )
}

export default Navbar