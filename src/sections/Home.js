import React from 'react'
import { Row, Col } from 'react-bootstrap';
import Lottie from 'lottie-react'

import '../styles/Home.css'
import Stack from 'react-bootstrap/Stack';
import CountUp from "react-countup";


import animationData from '../Assets/Animation/laptop.json'


const Home = () => {
    return (
        <div className='home-landing' id='home'>
            {/* <Fade big>  */}
            <div className='ads'>
                <marquee direction="left" scrollamount="8">
                    Book a free Counsulting Call Now
                 &emsp;&emsp;&emsp; Get 20% offer on your first project 
                 &emsp;&emsp;&emsp; Book a free Counsulting Call Now
                 &emsp;&emsp;&emsp; Book a free Counsulting Call Now
                 &emsp;&emsp;&emsp; Get 20% offer on your first project 
                 &emsp;&emsp;&emsp; Book a free Counsulting Call Now
                 
                 </marquee>

            </div>
            <Row className='home-both-col'>

                <Col lg="6" md="6" sm="4" className='home-leftcontent-col'  >
                    <div className='home-leftcontent' >

                        <h1 className='home-title' data-aos="fade-right">From <span style={{color: "#112672"}}>Concept </span> to <span style={{color : "#d61919"}} > Reality,</span><br /> We've Got you <br /> <span className='covered' >Covered!</span></h1>
                        <p className='home-subtitle' data-aos="fade-left">Ratix Info Tech offers you a unique and enjoyable experience of innovation, as well as a variety of services.</p>
                   
                        
                       <a href='#ServiceWeOffer'><button className='getstart' >Lets get started</button></a> 


                        <div className='underbutton'>

                            <Stack direction="horizontal" gap={3} >
                                <div className="p-2"><p><span><CountUp end={20} duration={2} suffix="+" className="countup" />  </span><br /> Internation Brands</p></div>
                                <div className="p-2"><p><span><CountUp end={500} duration={2.5} suffix="+" className="countup" /> </span><br /> Project Completed</p></div>
                                <div className="p-2"><p><span><CountUp end={1000} duration={3} suffix="+" className="countup" /> </span><br /> Happy Clients</p></div>
                            </Stack>

                        </div>

                    </div>

                </Col>

                <Col lg="6" md="6" sm="4" className='home-rightcontent-col' >

                    {/* <img src={Headerpicture} alt='headerimage' className='home-right-picture' /> */}
                    <div className='home-animation'>
                        <Lottie animationData={animationData} />
                    </div>

                </Col>
            </Row>


            {/* </Fade> */}
        </div>
    )

}

export default Home