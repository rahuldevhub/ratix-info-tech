import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../../styles/Swiper.css';
import { Pagination } from 'swiper/modules';

import designpencil from '../../Assets/serviceic/designpencil.webp'
import web from '../../Assets/serviceic/webs.webp'
import app from '../../Assets/serviceic/appdev.webp'
import training from '../../Assets/serviceic/training.webp'
import social from '../../Assets/serviceic/marketing.webp'
import testing from '../../Assets/serviceic/test.webp'
import ar from '../../Assets/serviceic/ar.webp'

export default function App() {

    let swipercontent = [
        {
            id: 1,
            img : web,
            service: "Website",
            description: "We are a team of passionate web developers dedicated to crafting exceptional websites that meet your unique needs and goals. Whether you're a small business, a large enterprise, or an individual entrepreneur, we have the expertise and experience to bring your vision to life."
        },
        {
            id: 2,
            img : app,

            service: "Mobile Apps",
            description: "Elevate your mobile presence with our expertise in Flutter app development. We are a team of passionate developers dedicated to crafting exceptional mobile applications using the cutting-edge Flutter framework. We have the skills and experience to bring your ideas to life."
        },
        {
            id: 3,
            img : designpencil,
            service: "Graphic Design",
            description: "We are a passionate team of graphic designers dedicated to crafting impactful visuals that elevate your brand and captivate your audience. Whether you require a captivating logo, stunning website graphics, or engaging social media content, we possess the expertise and creativity to deliver exceptional results."
        },
        {
            id: 4,
            img : social,
            service: "Digital Marketing",
            description: "In today's digital landscape, social media reigns supreme. But navigating this dynamic space can be overwhelming. That's where we come in, We are a team of passionate social media marketing experts dedicated to amplifying your brand voice and igniting meaningful engagement across all major platforms.  "
        },
        {
            id: 5,
            img : ar,
            service: "Social AR",
            description: " Engage Your Audience in a New Dimension. We are redefining social interaction with innovative social AR (augmented reality) services. We help brands and individuals create immersive and interactive experiences that captivate audiences and drive engagement across popular social media platforms."
        },
        {
            id: 6,
            img : testing,
            service: "Pentration Testing",
            description: " Comprehensive Penetration Testing Services. In Today's ever-evolving digital landscape, protecting your valuable assets from cyber threats is paramount. At Ratix, we offer comprehensive penetration testing services to identify and address vulnerabilities in your systems before malicious actors exploit them."
        },
        {
            id: 7,
            img : training,
            service: "Intenship",
            description: "We are passionate about fostering the growth and development of future professionals. Our internship program provides a valuable opportunity for students to gain practical experience, acquire new skills, and contribute to real-world projects in a supportive and enriching environment."
        }
    ]


    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 1.5,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2.5,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 3.5,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {swipercontent.map((swipercontent) => (
                    <SwiperSlide>
                        <div className='lg:w-2/3 flex justify-center object-contain mx-auto h-48 lg:h-96 swipercard' data-aos="zoom-in">
                            <div className='swipercontent'>
                                <img src={swipercontent.img} alt='hand' className='Service-icon' ></img>
                             {/* <div className='Service-icon'>{swipercontent.img}</div>    */}
                    
                                <h2>{swipercontent.service}</h2>
                                <p>{swipercontent.description}</p>
                            </div></div>

                    </SwiperSlide>

                ))}

            </Swiper>
        </>
    );
}
