import React from 'react'
import '../styles/ClientFeedback.css'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { FaStar } from 'react-icons/fa';

import male1 from '../Assets/People/male1.png'
import female1 from '../Assets/People/female1.png'

const ClientFeedback = () => {

    let ClientFeedbackcontent = [
        {
          id: 1,
          name: "Rahul Riyaz",
          roll: "Full Stack Dev",
          img: male1,
          description: "Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies Ive came across so far. Wouldnt be hesitated to introduce their work to someone"
        },
        {
          id: 2,
          name: "Rahul Riyaz",
          roll: "Full Stack Dev",
          img: female1,
          description: "Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies Ive came across so far. Wouldnt be hesitated to introduce their work to someone"
        },
        {
          id: 3,
          name: "Rahul Riyaz",
          roll: "Full Stack Dev",
          img: female1,
          description: "Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies Ive came across so far. Wouldnt be hesitated to introduce their work to someon."
        },
        {
          id: 4,
          name: "Rahul Riyaz",
          roll: "Full Stack Dev",
          img: male1,
          description: "Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies Ive came across so far. Wouldnt be hesitated to introduce their work to someone"
        },
        {
          id: 5,
          name: "Rahul Riyaz",
          roll: "Full Stack Dev",
          img: male1,
          description: "Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies Ive came across so far. Wouldnt be hesitated to introduce their work to someon."
        },
        {
            id: 6,
            name: "Rahul Riyaz",
            roll: "Full Stack Dev",
            img: female1,
            description: "Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies Ive came across so far. Wouldnt be hesitated to introduce their work to someon."
          },
    
      ]


  return (
    <div>
        <div className='ClientFeedback'>
        <div >
            <p className='ClientFeedback-title'>Why customers love</p>
            <p className='ClientFeedback-subtitle'>working with us</p>
            </div>
            <div >
            <Row xs={1} md={2} className="g-4">
      {ClientFeedbackcontent.map((ClientFeedbackcontent, idx) => (
        <Col key={idx}>
          <Card className='ClientFeedbackcontent-card'>


            <Row xs={1} md={2} className='ClientFeedback-col-both' >
                <Col lg='2' sm="1" className='ClientFeedback-col-leftside'  >
            <Card.Img variant="top" src={ClientFeedbackcontent.img}  className='ClientFeedback-img'/>
                </Col>

                <Col lg='2' sm="1" className='ClientFeedback-col-rightside'>
            {/* <Card.Title>{ClientFeedbackcontent.name}</Card.Title> */}
            <h2 >{ClientFeedbackcontent.name}</h2>
                <p>{ClientFeedbackcontent.roll}</p>
                <div className='star'>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                </div>
                </Col>

                
            </Row>
            <Card.Body>
              <Card.Text className='ClientFeedback-description'>
                {ClientFeedbackcontent.description}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </div>
    </div>

    </div>
  )
}

export default ClientFeedback