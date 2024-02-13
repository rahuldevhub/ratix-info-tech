
import React from 'react'


import globe from '../Assets/others/globe.png'
import setting from '../Assets/others/setting.png'
import payment from '../Assets/others/pay.png'

import '../styles/Supportsys.css'

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
const Supportsys = () => {
  return (
   


    <div className='supportsystem'>
        <Row className='supportsystem-all-col'>
        <Col lg={4} className='supportsystem-col'> 
        <img src={globe} alt='sample' className='supportsys-img' />
        <p className='supportsystem-description'>Our support team is available 24/7</p>
        </Col>
        <Col lg={4 } className='supportsystem-col'> 
        <img src={payment} alt='sample' className='supportsys-img' />
        <p className='supportsystem-description'>Your payment is safe and secure</p>
        </Col><Col lg={4} className='supportsystem-col'> 
        <img src={setting} alt='sample' className='supportsys-img' />
        <p className='supportsystem-description'>  Having any doubts?  </p>
        </Col>
        
      </Row>

    </div>



  )
}

export default Supportsys