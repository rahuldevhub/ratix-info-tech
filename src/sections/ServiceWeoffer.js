import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SimpleSlider from '../components/ui/Swiper'
import '../styles/ServiceWeOffer.css'
import { Link } from 'react-router-dom';


const ServiceWeoffer = () => {
  return (
    <div className='ServiceWeOffer'>

<Row className='ServiceWeOffer-both'>
  <Col>
  <div className='ServiceWeOffer-title'><p>Services we offer</p></div>
  </Col>

  <Col className='ServiceWeOffer-col-right'>
    <Link to = {"/service"}>
   <button className='seemore-services'>See more Services</button></Link>
  </Col>
</Row>
        
        
        <SimpleSlider/>
       
    </div>
  )
}

export default ServiceWeoffer