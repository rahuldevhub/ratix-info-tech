import React from 'react'
import {Row, Col} from 'react-bootstrap'
import '../styles/JoinWithUs.css'
const JoinWithUs = () => {
  return (
    <div className='JoinWithUs'>
        
    <Row className='JoinWithUs-content'>
        <Col lg="6" sm="4" >
        <p>
        We Hiring the best developers and designers around!
        </p>
        </Col>

        <Col lg="6" sm= "4" className=' JoinWithUs-button'>
        <button>
            Join With Us
        </button>
        </Col  >
    </Row>

    </div>
  )
}

export default JoinWithUs