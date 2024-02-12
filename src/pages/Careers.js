import React from 'react'
import '../styles/careers.css'
import Card from 'react-bootstrap/Card';

import heart from '../Assets/DesDevApp/heart.png'

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Careers = () => {
    let Servicecontent = [

        {
          id: 1,
          Jobtitle: "Designer",
          description: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age."
        },
        {
          id: 2,
       
          Jobtitle: "Full Stack Developer",
          description: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age."
        },
        {
            id: 3,
         
            Jobtitle: "Full Stack Developer",
            description: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age."
          },
          {
            id: 4,
         
            Jobtitle: "Full Stack Developer",
            description: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age."
          },
          {
            id: 5,
         
            Jobtitle: "Full Stack Developer",
            description: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age."
          },
          {
            id: 6,
         
            Jobtitle: "Full Stack Developer",
            description: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age."
          }
    ]
  return (  
    <div className='careers'> 
    
      <p className='careers-title1'>Careers</p>
      <p className='careers-description1'> Join our dynamic team at Ratix info tech and embark on an exciting journey in the tech world. <br/>Whether you're an experienced professional looking to take the next step in your career or a fresh graduate eager to kickstart your journey in the tech industry, we have a variety of career options to suit your skills and aspirations.
From development and design roles to marketing, internship opportunities, and courses/certifications, we provide a supportive environment where you can grow and thrive.</p>
        <div>
      <p className='careers-title'>Why you need to work with us?</p>
      <Row className='careers-all-col'>
        <Col lg={4} className='careers-col'> 
        <img src={heart} alt='sample' className='supportsys-img' />
        <p className='careers-description'> A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age</p>
        </Col>
        <Col lg={4 } className='careers-col'> 
        <img src={heart} alt='sample' className='supportsys-img' />
        <p className='careers-description'> A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age</p>
        </Col><Col lg={4} className='careers-col'> 
        <img src={heart} alt='sample' className='supportsys-img' />

        <p className='careers-description'> A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age</p>
        </Col>
        
      </Row>

        </div>

      <p className='careers-title-job'>Current Job Openings</p>

      <div>
      <Row xs={1} sm={1} md={2} lg={4} className="g-4 careers">

      {Servicecontent.map((Servicecontent, idx) => (
            <Col key={idx}>
              <Card className='careers-card'>
              <div className='careers-card-content'>
                

                <Card.Body className='careers-card-body'>

                  <Card.Text className='careers-card-description'>
                    <h1>{Servicecontent.Jobtitle}</h1>
                    <p>{Servicecontent.description}</p>
                  </Card.Text>
                <button className='careers-button'> Apply now</button>

                </Card.Body>
                </div>
              </Card>
            </Col>
          ))}


      </Row>
      </div>

    
    </div>
  )
}

export default Careers