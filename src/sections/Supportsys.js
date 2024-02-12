
import React from 'react'
import heart from '../Assets/DesDevApp/heart.png'
import rocket from '../Assets/DesDevApp/rocket.png'
import '../styles/Supportsys.css'

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
const Supportsys = () => {
  return (
   


    <div className='supportsystem'>
        <Row className='supportsystem-all-col'>
        <Col lg={4} className='supportsystem-col'> 
        <img src={heart} alt='sample' className='supportsys-img' />
        <p className='supportsystem-description'> 24/7. A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age</p>
        </Col>
        <Col lg={4 } className='supportsystem-col'> 
        <img src={rocket} alt='sample' className='supportsys-img' />
        <p className='supportsystem-description'> Payments. A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age</p>
        </Col><Col lg={4} className='supportsystem-col'> 
        <img src={heart} alt='sample' className='supportsys-img' />

        <p className='supportsystem-description'> Support system .A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age</p>
        </Col>
        
      </Row>

    </div>



  )
}

export default Supportsys