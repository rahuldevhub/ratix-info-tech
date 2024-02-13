import React from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../styles/Getintouch.css';
import Contactusform from '../components/ui/Contactusform';

import insta from '../Assets/socialmedia/instalogo.png'
import facebook from '../Assets/socialmedia/fblogo.png'
import xlogo from '../Assets/socialmedia/xlogo.png'
import whatsapp from '../Assets/socialmedia/whatsapplogo.png'
import linkedin from '../Assets/socialmedia/linkedinlogo.png'

const GetInTouch = () => {
  return (
    <div className='Getintouch'>

<Row className='Getintouch-both-col'>
        <Col lg="6" md="6" sm = "4">
            <div className='Getintouch-left-content'>

            <p className='Getintouch-title'>Get In Touch</p>
            <p className='Getintouch-subtitle'> We're always happy to chat!  Whether you have a question, want to collaborate, or just say hi, we're here for you. Follow us on your favorite platforms for updates, inspiration, and exclusive content</p>

        <img src={insta} alt='sample' className='socialmedia-img' />
        <img src={whatsapp} alt='sample' className='socialmedia-img' />
        <img src={facebook} alt='sample' className='socialmedia-img' /><br/>
        <img src={linkedin} alt='sample' className='socialmedia-img' />
        <img src={xlogo} alt='sample' className='socialmedia-img' />
              
            </div>
            </Col>

        <Col lg="6" md="6" sm = "4">
          <div className='Getintouch-right-content'>


<Contactusform/>

          </div>
        </Col>
      </Row>

    </div>
  )
}

export default GetInTouch