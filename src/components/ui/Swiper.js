import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../../styles/Swiper.css';
import { Pagination } from 'swiper/modules';
import hand from '../../Assets/handsupport.png'

export default function App() {

    let swipercontent = [
        {
            id: 1,
            img : hand,
            service: "Website",
            description: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age."
        },
        {
            id: 2,
            img : hand,

            service: "Mobile Apps",
            description: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age."
        },
        {
            id: 3,
            img : hand,
            service: "Graphic Design",
            description: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age."
        },
        {
            id: 4,
            img : hand,
            service: "Social Media Marketing",
            description: "A Website is an extension of yourself and we can help you to express it properly.Your website is your number one marketing "
        },
        {
            id: 5,
            img : hand,
            service: "Social AR",
            description: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age."
        },
        {
            id: 6,
            img : hand,
            service: "Pentration Testing",
            description: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age."
        },
        {
            id: 7,
            img : hand,
            service: "Intenship",
            description: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age."
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
                    
                                <h1>{swipercontent.service}</h1>
                                <p>{swipercontent.description}</p>
                            </div></div>

                    </SwiperSlide>

                ))}

            </Swiper>
        </>
    );
}
