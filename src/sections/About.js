import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import '../styles/About.css'
import Lottie from 'lottie-react'
import animationData from '../Assets/Animation/Animation - 1706947072480.json'

const About = () => {
  const [active , setactive] = useState(false)

  const handlechange = ()=>{
console.log(active)
}
  return (
    <div className='About' id='About'>


      <Row className='about-both-col'>
        <Col lg="6" md="6" sm = "4" data-aos="zoom-in" className='about-left-ani'   >
          {/* <img src={Headerpicture} alt='headerimage' className='about-left-picture' /> */}
          <Lottie animationData={animationData} />
        </Col>

        <Col lg="6" md="6" sm = "4" >
          <div className='about-right-content' >

            <p className='about-title' data-aos="fade-left">Secret behind our client<br /> Satisfaction</p>
            <p className='about-subtitle' data-aos="zoom-in">Ratix Info Tech offers a wide range of services to help businesses grow and succeed in the digital age. Our mission is to provide innovative and customized solutions that meet the needs and expectations of our clients.
            
            {/* <button type='button' onClick={()=> (handlechange())} className='aboutseemore'>See More</button> */}

<br/><br/> We use the latest tools and technologies to ensure that our products are user-friendly, secure, and scalable. We also offer ongoing support and maintenance to ensure that our clients get the best value for their money.
<br/><br/>Leading companies recognize our unwavering commitment to quality, innovation, and client satisfaction. When you partner with Ratix, you can rest assured that you are in safe hands, with a team dedicated to helping you achieve your digital objectives and drive business growth.
             </p>
      


          </div>
        </Col>
      </Row>




    </div>
  )
}

export default About