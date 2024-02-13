import React from 'react'
import { Row, Col } from 'react-bootstrap';
import Lottie from 'lottie-react'

import '../styles/Home.css'
import Stack from 'react-bootstrap/Stack';
import CountUp from "react-countup";

import animationData from '../Assets/Animation/laptop.json'


const Home = () => {
    return (
        <div className='home-landing'>
            {/* <Fade big> */}
            <div className='ads'>
                <marquee direction="left" scrollamount="20">Get 20% offer on your first project  Get 20% offer on your first project  Get 20% offer on your first project</marquee>

            </div>
            <Row className='home-both-col'>

                <Col lg="6" md="6" sm="4" className='home-leftcontent-col' >
                    <div className='home-leftcontent'>

                        <h3 className='home-title'>From Concept to Reality,<br /> We've Got you <br /> Covered!</h3>
                        <p className='home-subtitle'>Ratix Info Tech offers you a unique and enjoyable experience of innovation, as well as a variety of services.</p>
                        <button className='getstart'>Lets get started</button>


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