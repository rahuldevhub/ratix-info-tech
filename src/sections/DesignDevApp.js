import React from 'react'
import '../styles/DesignDevApp.css'
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
import 'swiper/css/navigation';
// import '../../styles/Feedbackswiper.css';
import { Navigation } from 'swiper/modules';
// import sample from '../Assets/hand.png'
import rocket from '../Assets/DesDevApp/rocket.webp'
import heart from '../Assets/DesDevApp/heart.webp'
import quality from '../Assets/DesDevApp/quality.webp'
import codereview from '../Assets/DesDevApp/codereview.webp'
// import developing from '../Assets/DesDevApp/developing.png'

const DesignDevApp = () => {

  let DesignDevAppcontent = [
    {
      id: 1,
      name: " User-Centric Everything",
      img: rocket,
      description: "We don't just make things, we craft experiences. Our UX-driven engineering puts your users at the heart of every decision, ensuring a product that's intuitive, enjoyable, and truly solves their needs."
    },
    {
      id: 2,
      name: "Developing Shared Understanding",
      img: codereview,
      description: "We conduct collaborative workshops, keep you informed with transparent documentation, and foster regular feedback loops, so everyone's on the same page and we move forward together, seamlessly."
    },
    {
      id: 3,
      name: "Expertise You Can Trust",
      img: heart,
      description: "We're not just developers, we're veterans. Our proven experience and deep industry knowledge ensure we tackle your project with confidence, leveraging best practices and innovative solutions."
    },
    {
      id: 4,
      name: "Security You Can Count On",
      img: codereview,
      description: " Protecting your data and ideas is paramount. We implement industry-standard security practices and IP protection measures, so you can focus on what matters most: your business success."
    },
    {
      id: 5,
      name: "Code That Shines",
      img: codereview,
      description: "Our rigorous code review process ensures your product is not only functional but also clean, maintainable, and secure. We believe in continuous improvement, and code reviews help us learn and grow together."
    },
    {
      id: 6,
      name: "Testing That Delivers",
      img: quality,
      description: "We don't leave anything to chance. Our comprehensive testing strategies cover every angle, catching bugs early and preventing issues down the line."
    },

  ]

  return (

    <>
      <div className='DesignDevApp'>

        <p className='DesignDevApp-title' data-aos="fade-right">Our Design and</p>
        <p className='DesignDevApp-subtitle' data-aos="fade-left">Development approach</p>

        <Swiper navigation={true} modules={[Navigation]} className="mySwiper" data-aos="zoom-in">
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

