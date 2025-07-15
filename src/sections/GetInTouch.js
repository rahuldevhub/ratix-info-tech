import React from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../styles/Getintouch.css';
import Contactusform from '../components/ui/Contactusform';

import insta from '../Assets/socialmedia/instalogo.webp'
import facebook from '../Assets/socialmedia/fblogo.webp'
import xlogo from '../Assets/socialmedia/xlogo.webp'
import whatsapp from '../Assets/socialmedia/whatsapplogo.webp'
import linkedin from '../Assets/socialmedia/linkedinlogo.webp'
import { Link } from 'react-router-dom';

const GetInTouch = () => {
  return (
    <div className='Getintouch' id='contact'>

      <Row className='Getintouch-both-col'>
        <Col lg="6" md="6" sm="4">
          <div className='Getintouch-left-content'>

            <p className='Getintouch-title' data-aos="fade-right">Get In Touch</p>
            <p className='Getintouch-subtitle'data-aos="fade-right"> We're always happy to chat!  Whether you have a question, want to collaborate, or just to say hi, we're here for you. Follow us on your favorite platforms for updates, inspiration, and exclusive contents.</p>

          <Link to={'https://www.instagram.com/ratix_infotech?igsh=Y2dtZWJ1djlqYTQ2&utm_source=qr'} target='_blank'> <img src={insta}    alt='sample' className='socialmedia-img' data-aos="zoom-in-down" data-aos-duration="1000" /> </Link>
        <Link to={'https://www.instagram.com/ratix_infotech?igsh=Y2dtZWJ1djlqYTQ2&utm_source=qr'} target='_blank'> <img src={whatsapp}   alt='sample' className='socialmedia-img' data-aos="zoom-in-down" data-aos-duration="1500" /></Link>
        <Link to={'https://www.instagram.com/ratix_infotech?igsh=Y2dtZWJ1djlqYTQ2&utm_source=qr'} target='_blank'> <img src={facebook}   alt='sample' className='socialmedia-img'  data-aos="zoom-in-down" data-aos-duration="2000"/></Link><br />
        <Link to={'https://www.linkedin.com/company/ratix/'} target='_blank'> <img src={linkedin}   alt='sample' className='socialmedia-img' data-aos="zoom-in-down" data-aos-duration="2500"/></Link>
        <Link to={'https://twitter.com/rahulriyaz_'} target='_blank'>  <img src={xlogo}   alt='sample' className='socialmedia-img' data-aos="zoom-in-down" data-aos-duration="3000"/></Link>

          </div>
        </Col>

        <Col lg="6" md="6" sm="4">
          <div className='Getintouch-right-content'>
            <Contactusform />

          </div>
        </Col>
      </Row>

    </div>
  )
}

export default GetInTouch