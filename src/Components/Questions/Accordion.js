import React from 'react'
import "./Questions.css"
import { IoArrowDownCircleOutline } from "react-icons/io5";
import { IoArrowUpCircleOutline } from "react-icons/io5";

const Accordion = ({ title, desc, active, setActive }) => {
    return (
        <div className='accordionContainer'>
            <span className={(active === title ? 'activeTitle' : '') + " title flex"}>
                {title}
                <span onClick={() => setActive(title)}>
                    {active === title ? (
                        <IoArrowDownCircleOutline className='icon' />
                    ) : (
                        <IoArrowUpCircleOutline  className='icon'/>

                    )}
                </span>
            </span>
            <p className={(active === title ? 'show' : "") + " description"}>
                {desc}
            </p>
        </div>
    )
}
export default Accordion