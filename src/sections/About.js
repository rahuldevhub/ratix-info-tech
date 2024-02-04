import React from 'react'
import { Row, Col } from 'react-bootstrap'
import '../styles/About.css'
import Lottie from 'lottie-react'
import animationData from '../Assets/Animation/Animation - 1706947072480.json'

const About = () => {
  return (
    <div className='About '>


      <Row className='about-both-col'>
        <Col lg="6" md="6" sm = "4">
          {/* <img src={Headerpicture} alt='headerimage' className='about-left-picture' /> */}
          <Lottie animationData={animationData} />
        </Col>

        <Col lg="6" md="6" sm = "4">
          <div className='about-right-content'>

            <p className='about-title'>Leading companies trust us <br /> to develop software</p>
            <p className='about-subtitle'>We add development capacity to tech teams. Our value isnt limited to building teams but is
              equally distributed across the project lifecycle. We are a custom software development company that guarantees the successful delivery of your project.
              <br/>We add development capacity to tech teams. Our value isnt limited to building teams but is
              equally distributed across the project lifecycle. We are a custom software development company that guarantees the successful delivery of your project.</p>
            <button className='seemore'>See more Informations</button>


          </div>
        </Col>
      </Row>




    </div>
  )
}

export default About