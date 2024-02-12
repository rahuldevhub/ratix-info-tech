import React from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../styles/Getintouch.css';
import Contactusform from '../components/ui/Contactusform';

const GetInTouch = () => {
  return (
    <div className='Getintouch'>

<Row className='Getintouch-both-col'>
        <Col lg="6" md="6" sm = "4">
            <div className='Getintouch-left-content'>

            <p className='Getintouch-title'>Get In Touch</p>
            <p className='Getintouch-subtitle'>We add development capacity to tech teams. Our value isnt limited to building teams but is
              equally distributed across the project lifecycle. We are a custom software development company that guarantees the successful delivery of your project.
              </p>

              Social media Accounts
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