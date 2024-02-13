import React from 'react'
import '../styles/MoreService.css'

import hand from '../Assets/handsupport.png'
import { FaStar } from 'react-icons/fa';


import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import GetInTouch from '../sections/GetInTouch';

const MoreService = () => {

  let Servicecontent = [

    {
      id: 1,
      img: hand,
      service: "Website",
      description: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age."
    },
    {
      id: 2,
      img: hand,
      service: "Mobile Apps",
      description: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age."
    },
    {
      id: 3,
      img: hand,
      service: "Graphic Design",
      description: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age."
    },
    {
      id: 4,
      img: hand,
      service: "Social Media Marketing",
      description: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age"
    },
    {
      id: 5,
      img: hand,
      service: "Social AR",
      description: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age."
    },
    {
      id: 6,
      img: hand,
      service: "Pentration Testing",
      description: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age."
    },
    {
      id: 7,
      img: hand,
      service: "Intenship",
      description: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age."
    },
    {
      id: 8,
      img: hand,
      service: "Intenship",
      description: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age."
    },{
      id: 9,
      img: hand,
      service: "Intenship",
      description: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age."
    },{
      id: 10,
      img: hand,
      service: "Intenship",
      description: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age."
    },{
      id: 11,
      img: hand,
      service: "Intenship",
      description: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age."
    },{
      id: 12,
      img: hand,
      service: "Intenship",
      description: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age."
    }

  ]
  return (
    <div className='Moreservice'>
      <p className='Moreservice-title'>Transform your business</p>
      <p className='Moreservice-subtitle'>with our multiple Service</p>
      <p className='Moreservice-description'>At Ratix Info Tech, we believe in the transformative power of
digital artistry. Each pixel, each line of code, and each strategic
maneuver is delicately woven into a tapestry of innovation and
imagination. Let us be the architects of your digital dreams, where
creativity thrives, and possibilities know no bounds</p>

      <div >
        
        <Row xs={1} md={3} lg={4} className="g-4">

          {Servicecontent.map((Servicecontent, idx) => (
            <Col key={idx}>
              <Card className='Moreservice-card'>
              <div className='Moreservice-card-content'>
                <Card.Img variant="top" src={Servicecontent.img} className='Moreservice-card-icon' />

                <Card.Body className='Moreservice-card-body'>

                  <Card.Text className='Moreservice-card-description'>
                    <h1>{Servicecontent.service}</h1>
                    <p>{Servicecontent.description}</p>
                  </Card.Text>
                </Card.Body>
                </div>

              </Card>
            </Col>
          ))}
        </Row>
      </div>

<GetInTouch/>

    </div>
  )
}

export default MoreService