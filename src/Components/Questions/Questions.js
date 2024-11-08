import React, { useState } from 'react';
import "./Questions.css";
import Accordion from './Accordion';




function Questions() {
  const [active,setActive] = useState('How do I choose the right travel destination for me?')

  return (
    <div className='question section container'>
      <div className="secHeading" >
        <h3>Frequently Asked Question</h3>
      </div>
      <div className="secContainer grid"  >
        <div className="accordion grid">
          <Accordion
          title='How do I choose the right travel destination for me?'
          desc='Consider your interests, budget,desired experiences, and the type of environment you enjoy.Research destination that align with your perferences and offer attractions or activities you find appealing'
          active={active}
          setActive={setActive}
          />
          <Accordion
          title='What are the best times to visit specific destination?'
          desc="Research the climate, weather patterns, and peak tourist seasond of the destination you're interested in. Opt for the shoulder seasons when the weather is pleasant, and crowds are fewer, if possible."
          active={active}
          setActive={setActive}
          />
           <Accordion
          title='How can I find budget-friendly travel option and deals?'
          desc="Look for travel deals, discounts on flights and accommodations, and consider using travel apps or websites that offer competitive prices. Being flexible with your travel dates can also help you find better deals"
          active={active}
          setActive={setActive}
          />
           <Accordion
          title="What essential items should I pack for my adventure?"
          desc="Pack appropriate clothing, toiletries,travel documents(password,visa,etc.),essential medications, and any specific gear needed for your adventure(e.g, hiking boots, snorkeling gear)."
          active={active}
          setActive={setActive}
          />
        </div>
        <div className="form">
          <div className="secHeading" >
            <h3  >Do you have any specific question?</h3>
            <p >
              Please fill the form below and our dedicated team will get intouch with you as soon as possible
            </p>
          </div>
          <div className="formContent grid">
            <input type="email" placeholder='Enter email address' />
            <textarea  placeholder="Enter your questions here"  ></textarea>
            <button className='btn'  >Submit Inquiry</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Questions