import React from 'react'
import '../styles/DesignDevApp.css'
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
import 'swiper/css/navigation';
// import '../../styles/Feedbackswiper.css';
import { Navigation } from 'swiper/modules';
// import sample from '../Assets/hand.png'
import rocket from '../Assets/DesDevApp/rocket.png'
import heart from '../Assets/DesDevApp/heart.png'

import quality from '../Assets/DesDevApp/quality.png'
import codereview from '../Assets/DesDevApp/codereview.png'
// import developing from '../Assets/DesDevApp/developing.png'

const DesignDevApp = () => {

  let DesignDevAppcontent = [
    {
      id: 1,
      name: "UX Driven Engineering",
      img: rocket,
      description: "UX Driven Engineering is a collaborative approach to product development that emphasizes the equal importance of user experience and engineering considerations throughout the entire process. It's not just about building something functional, but creating something that users truly love and find valuable."
    },
    {
      id: 2,
      name: "Developing Shared Understanding",
      img: codereview,
      description: "Developing shared understanding is like building a bridge between minds, ensuring everyone is on the same page and working towards a common goal. It's about creating a space where diverse perspectives come together, not to clash, but to coalesce into a unified vision."
    },
    {
      id: 3,
      name: "Proven Experience and Expertise",
      img: heart,
      description: "Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies Ive came across so far. Wouldnt be hesitated to introduce their work to someone else."
    },
    {
      id: 4,
      name: "Security & Intellectual Property (IP)",
      img: codereview,
      description: "Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies Ive came across so far. Wouldnt be hesitated to introduce their work to someone else."
    },
    {
      id: 5,
      name: "Code Reviews",
      img: codereview,
      description: "Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies Ive came across so far. Wouldnt be hesitated to introduce their work to someone else."
    },
    {
      id: 6,
      name: "Quality Assurance & Testing",
      img: quality,
      description: "Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies Ive came across so far. Wouldnt be hesitated to introduce their work to someone else."
    },

  ]

  return (

    <>
      <div className='DesignDevApp'>

        <p className='DesignDevApp-title'>Our design and</p>
        <p className='DesignDevApp-subtitle'>development approach</p>

        <Swiper navigation={true} modules={[Navigation]} className="mySwiper ">
          {DesignDevAppcontent.map((DesignDevAppcontent) => (
            <SwiperSlide>
              <div>

                <div >
                  <img src={DesignDevAppcontent.img} alt='sample' className='DesignDevApp-img' />
                  <p className='DesignDevApp-content-title'>{DesignDevAppcontent.name}</p>

                </div>

                <p className='DesignDevApp-description'>{DesignDevAppcontent.description}</p>
              </div>
            </SwiperSlide>

          ))}

        </Swiper>
      </div>
    </>
    // <div className='DesignDevApp'>
    //     <div >
    //         <p className='DesignDevApp-title'>Our design and</p>
    //         <p className='DesignDevApp-subtitle'>development approach</p>
    //         </div>
    //         <div >
    //         <Row xs={1} md={2} className="g-4">
    //   {cardData.map((cardData, idx) => (
    //     <Col key={idx}>
    //       <Card className='DesignDevApp-content'>
    //         <Row>
    //             <Col>
    //         <Card.Img variant="top" src={sample} />

    //             </Col>
    //             <Col>
    //         <Card.Title>{cardData.title}</Card.Title>

    //             </Col>


    //         </Row>
    //         <Card.Body>
    //           <Card.Text>
    //             {cardData.description}
    //           </Card.Text>
    //         </Card.Body>
    //       </Card>
    //     </Col>
    //   ))}
    // </Row>
    // </div>
    // </div>
  )
}

export default DesignDevApp

