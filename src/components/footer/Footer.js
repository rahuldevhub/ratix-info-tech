import React, { useEffect } from 'react'
import '../footer/Footer.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import logo from '../../Assets/logo.png'
import { Row, Col } from 'react-bootstrap';


const Footer = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 })

    }, [])
    return (

        <div>





            <div className='footer' >
                <div className='footer-col'>
                    <Row>
                        <Col lg="6" md="6" sm="4" >
                            <img src={logo} alt='logo image' ></img>
                            <p>Ratix Info Tech isn't just a company, It's a symphony of creativity,
passion, and expertise. Your vision is our muse, and together, we compose
digital masterpieces that leave a lasting impression.</p>
                        </Col>
                        <Col lg="2" md="6" sm="4" className='footer-col-right-content'>

                            <div>
                                <h3>Company</h3>
                                <a href='#'>About</a><br />
                                <a href='#'>Services</a><br />
                                <a href='#'>Reviews</a><br />
                                <a href='#'>How its work</a><br />
                               

                            </div>

                        </Col>

                        <Col lg="2" md="6" sm="4" className='footer-col-right-content' >

                            <div>
                                <h3>Careers</h3>
                                <a href='#'>Job Openings</a><br />
                                <a href='#'>Why work with us</a><br />
                                <a href='#'>Job responsibilities</a><br />
                                

                            </div>

                        </Col>
                        <Col lg="2" md="6" sm="4" className='footer-col-right-content'>

                            <div>
                                <h3>Useful Links</h3>
                                <a href='#'>More Services</a><br />
                                <a href='#'>Contact Us</a><br />
                                
                                


                            </div>

                        </Col>
                    </Row>



                    {/* <div className='foot-1'>
        <img src={logo} alt='logo image' ></img>
         <p className='footer-description'>We have clothes that suits your style and  Which you're proud to wear. From  women to menWe have clothes that suits your style and  Which you're proud to wear. From  women to men</p>
        </div>

        <div>
            <h3>Company</h3><br/>
            <a href='#'>About</a><br/>
            <a href='#'>Features</a><br/>
            <a href='#'>Works</a><br/>
            <a href='#'>Career</a><br/>
          
        </div>

        <div>
            <h3>Help</h3><br/>
            <a href='#'>Customer Support</a><br/>
            <a href='#'>Delivery Details</a><br/>
            <a href='#'>Terms & Conditions</a><br/>
            <a href='#'>Privacy Policy</a><br/>
            
        </div>

        <div>
            <h3>FAQ</h3><br/>
            <a href='#'>Account</a><br/>
            <a href='#'>Manage Deliveries</a><br/>
            <a href='#'>Orders</a><br/>
            <a href='#'>Payments</a><br/>

          
        </div>

        <div>
            <h3>Resources</h3><br/>
            <a href='#'>Free eBooks</a><br/>
            <a href='#'>Development Tutorials</a><br/>
            <a href='#'>How to - Blog</a><br/>
            <a href='#'>Youtube Playlist</a><br/>

            
        </div> */}


                </div>






            </div>

        </div>

    )
}

export default Footer