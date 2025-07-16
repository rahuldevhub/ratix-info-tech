import React from 'react'
import '../styles/careers.css'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Careers = () => {
  let Servicecontent = [

    {
      id: 1,
      Jobtitle: "Graphic Designer",
      description: "We're Seeking a Talented Graphic Designer. Do you have a passion for creating visually stunning and impactful designs? Are you eager to join a creative team and help us bring our brand to life? We are searching for a skilled and enthusiastic Graphic Designer to join our growing team. "
    },
    {
      id: 2,
      Jobtitle: "Full Stack Developer",
      description: "We're searching for a talented Full-Stack Developer to join our growing team and play a key role in building and maintaining our innovative web applications. You'll work closely with designers, product managers, and other developers to bring our ideas to life."
    },
    // {
    //     id: 3,
    //     Jobtitle: "Full Stack Developer",
    //     description: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age."
    //   },
    // {
    //   id: 4,

    //   Jobtitle: "Full Stack Developer",
    //   description: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age."
    // },
    // {
    //   id: 5,

    //   Jobtitle: "Full Stack Developer",
    //   description: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age."
    // },
    // {
    //   id: 6,

    //   Jobtitle: "Full Stack Developer",
    //   description: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age."
    // }
  ]
  return (
    <>

      <HelmetProvider>

        <Helmet>

          <title>Careers at Ratix Infotech | Join Our Innovative Tech Team</title>
          <meta id="meta-description" name="description" content="Explore exciting career opportunities at Ratix Infotech. We're hiring passionate professionals in software development, UI/UX, and digital innovation." />
          <meta name='robots' content='index,follow' />
          <meta name='keywords' content='self publishing, service, books, authors, reader ,free publishing, cover design, manuscript, ritera, publishing company, customized package ' />
          <meta id="og-title" property="og:title" content="Meet the Professional team behind Ritera Publishing for your needs" />
          <link rel="canonical" href="https://www.ratixinfotech.com/careers" />


        </Helmet>

      </HelmetProvider>

      <div className='careers' id='careers'>

        <p className='careers-title1'>Careers</p>
        <p className='careers-description12'> Join our dynamic team at Ratix info tech and embark on an exciting journey in the tech world.</p>

        <p className='careers-description1'>Whether you're an experienced professional looking to take the next step in your career or a fresh graduate eager to kickstart your journey in the tech industry, we have a variety of career options to suit your skills and aspirations.
          From development and design roles to marketing, internship opportunities, and courses/certifications, we provide a supportive environment where you can grow and thrive.</p>
        {/* <div>
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

        </div> */}

        <p className='careers-title-job'>Current Job Openings</p>

        <div>
          <Row xs={1} sm={1} md={2} lg={4} className="g-4 careers">

            {Servicecontent.map((Servicecontent, idx) => (
              <Col key={idx}>
                <Card className='careers-card'>
                  <div className='careers-card-content'>


                    <Card.Body className='careers-card-body'>

                      <Card.Text className='careers-card-description'>
                        <h3>{Servicecontent.Jobtitle}</h3>
                        <p>{Servicecontent.description}</p>
                      </Card.Text>
                      <button className='careers-button'> Currently Unavaliable</button>

                    </Card.Body>
                  </div>
                </Card>
              </Col>
            ))}


          </Row>
        </div>


      </div>
    </>
  )
}

export default Careers