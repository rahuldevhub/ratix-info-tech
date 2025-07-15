import React from 'react'
import '../styles/ClientFeedback.css'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { FaStar } from 'react-icons/fa';

// import male1 from '../Assets/People/male1.png'
import male4 from '../Assets/People/male4.webp'
import female1 from '../Assets/People/female1.webp'
import female2 from '../Assets/People/female2.webp'
import female3 from '../Assets/People/female3.webp'
import female4 from '../Assets/People/female4.webp'
import female5 from '../Assets/People/female5.webp'

const ClientFeedback = () => {

    let ClientFeedbackcontent = [
        {
          id: 1,
          name: "Sara Davoodi",
          roll: "Experienced Accountant / Milan, Italy",
          img: female1,
          description: "Rahul is highly-skilled and very hard working person. He gave me advices for doing well in design and developing field. He is helpful professional with positive attitude. He shared his knowledge and experience with anyone who need a little guidance."
        },
        {
          id: 2,
          name: "Gobika",
          roll: "India",
          img: female2,
          description: "I am very impressed with the quality and creativity of the website design. Rahul was professional, responsive, and attentive to my needs and preferences. I highly recommend his services to anyone looking for a stunning and user-friendly website."
        },
        {
          id: 3,
          name: "Saran Raj",
          roll: "Author",
          img: male4,
          description: "It's really wonderful to work with Rahul. He got a lot of resistivity, creativity and mainly delivers the project on time. I would highly recommend your services to anyone looking for projects."
        },
        {
          id: 4,
          name: "Sudha",
          roll: "United States",
          img: female3,
          description: "I had the pleasure of working with Rahul who delivered work in a timely manner. His ability to work quickly and efficiently while maintaining a quality was truly impressive."
        },
        
        {
          id: 5,
          name: "Ishu",
          roll: "Germany",
          img: female4,
          description: "Rahul is amazing if you can give him even on a word document the exact layout and exact words of what you want he can deliver in a timely manner! He is online often so even if I wake up in the middle of the night or I'm working in the late afternoon or evening, the response time is always mined blowing. He is dedicated and professional!"
        },
        {
            id: 6,
            name: "Helen",
            roll: "United States",
            img: female5,
            description: "Rahul is highly skilled if you give him the ability to be creative. He understands the users experience. If you take just a few extra minutes and provide specific directions in regards to exact wording and what you in-vision, even if you draw on a screen shot or a piece of paper just be specific and you will receive great results."
          },
    
      ]


  return (
    <div>
        <div className='ClientFeedback' id='Testimonials'>
        <div >
            <p className='ClientFeedback-title' data-aos="fade-right" >Why customers love</p>
            <p className='ClientFeedback-subtitle'  data-aos="fade-left">working with us</p>
            </div>
            <div >
            <Row xs={1} md={2} className="g-4"  >
      {ClientFeedbackcontent.map((ClientFeedbackcontent, idx) => (
        <Col key={idx}>
          <Card className='ClientFeedbackcontent-card'>


            <Row xs={1} md={2} className='ClientFeedback-col-both' >
                <Col lg='3' sm="1" className='ClientFeedback-col-leftside'  >
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