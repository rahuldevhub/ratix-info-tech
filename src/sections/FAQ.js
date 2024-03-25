import React from 'react'
import '../styles/FAQ.css'
import Dropdown from 'react-bootstrap/Dropdown';
const FAQ = () => {

    let FAQcontent = [
        {
            question: "What services do you offer",
            answer: "At Ratix Info Tech, we offer a comprehensive range of digital services including website design, software development, cover design for books, UI/UX design, social media marketing, social AR solutions, internship opportunities, courses, certifications, mobile app development, and more."
        },
        {
            question: "What services do you offer",
            answer: "At Ratix Info Tech, we offer a comprehensive range of digital services including website design, software development, cover design for books, UI/UX design, social media marketing, social AR solutions, internship opportunities, courses, certifications, mobile app development, and more."
        },
        {
            question: "What services do you offer",
            answer: "At Ratix Info Tech, we offer a comprehensive range of digital services including website design, software development, cover design for books, UI/UX design, social media marketing, social AR solutions, internship opportunities, courses, certifications, mobile app development, and more."
        },
        {
            question: "What services do you offer",
            answer: "At Ratix Info Tech, we offer a comprehensive range of digital services including website design, software development, cover design for books, UI/UX design, social media marketing, social AR solutions, internship opportunities, courses, certifications, mobile app development, and more."
        },
        {
            question: "What services do you offer",
            answer: "At Ratix Info Tech, we offer a comprehensive range of digital services including website design, software development, cover design for books, UI/UX design, social media marketing, social AR solutions, internship opportunities, courses, certifications, mobile app development, and more."
        },
    ]

  return (
    <div className='FAQ'>
        <p className='FAQ-title'>Frequently asked questions</p>
            <p className='FAQ-subtitle'>working with us</p>


            <Dropdown>
      <Dropdown.Toggle   className='dropdownbutton'>
      What services do you offer
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">At Ratix Info Tech, we offer a comprehensive range of digital services including website design, software development, cover design for books, UI/UX design, social media marketing, social AR solutions, internship opportunities, courses, certifications, mobile app development, and more</Dropdown.Item>
        
      </Dropdown.Menu>
    </Dropdown>


    </div>
  )
}

export default FAQ