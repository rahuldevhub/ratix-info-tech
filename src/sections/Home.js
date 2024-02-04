import React from 'react'
import {Row , Col} from 'react-bootstrap';
import Lottie from 'lottie-react'

import '../styles/Home.css'
import Stack from 'react-bootstrap/Stack';
import CountUp from "react-countup";

import animationData from '../Assets/Animation/robot.json'


const Home = () => {
    return (
        <div className='home-landing'>
            {/* <Fade big> */}

            <Row className='home-both-col'>

                <Col lg="6" md="6" sm = "4" className='home-leftcontent-col' >
                    <div className='home-leftcontent'>

                        <h3 className='home-title'>Great Product is <br /> built by  <br /> great Teams</h3>
                        <p className='home-subtitle'>We help build and manage a team of world-class developers <br /> to bring your vision to life</p>
                        <button className='getstart'>Lets get started</button>


                        <div className='underbutton'>

                            <Stack direction="horizontal" gap={3} >
                                <div className="p-2"><p><span><CountUp end={1000} duration={2} suffix="+" className="countup" />  </span><br /> Internation Brands</p></div>
                                <div className="p-2"><p><span><CountUp end={20} duration={3} suffix="+" className="countup" /> </span><br /> High-Quality Products</p></div>
                                <div className="p-2"><p><span><CountUp end={3000} duration={3} suffix="+" className="countup" /> </span><br /> Happy Customers</p></div>
                            </Stack>

                        </div>

                    </div>

                </Col>

                <Col lg="6" md="6" sm = "4" className='home-rightcontent-col' >

                    {/* <img src={Headerpicture} alt='headerimage' className='home-right-picture' /> */}
                    <div className='home-animation'>
                    <Lottie animationData={animationData}/>
                    </div>
                    
                </Col>
            </Row>
        
            <div className='ads'>

                <marquee direction="left" scrollamount="20">Get 20% offer on your first project</marquee>
                <br />
                <marquee direction="Right" scrollamount="20"> Book a Free consultation call </marquee>

            </div>
            {/* </Fade> */}
        </div>
    )

}

export default Home