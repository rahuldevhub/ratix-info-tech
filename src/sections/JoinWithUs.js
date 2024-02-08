import React from 'react'
import {Row, Col} from 'react-bootstrap'
import '../styles/JoinWithUs.css'
import { Link } from 'react-router-dom';

const JoinWithUs = () => {
  return (
    <div className='JoinWithUs'>
        
    <Row className='JoinWithUs-content'>
        <Col lg="6" sm="4" >
        <p>
        Be a part of Ratix Team
        </p>
        </Col>

        <Col lg="6" sm= "4" className=' JoinWithUs-button'>
          <Link to={'/careers'}>
          <button>Join With Us</button>

          </Link>
        </Col  >
    </Row>

    </div>
  )
}

export default JoinWithUs