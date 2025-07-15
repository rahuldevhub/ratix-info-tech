import React from 'react'


import Home from '../sections/Home';
import ServiceWeoffer from '../sections/ServiceWeoffer';
import About from '../sections/About';
import ClientFeedback from '../sections/ClientFeedback';
import DesignDevApp from '../sections/DesignDevApp';
import JoinWithUs from '../sections/JoinWithUs';
import GetInTouch from '../sections/GetInTouch';
import Supportsys from '../sections/Supportsys';
// import FAQ from '../sections/FAQ';


const LandingPage = () => {
    return (
        <>
        <div>
            <Home />
            <ServiceWeoffer />
            <About />
            <ClientFeedback />
            <DesignDevApp />
            <JoinWithUs />
            <Supportsys/>
            {/* <FAQ/> */}
            <GetInTouch/>   
        </div>
        </>
    )
}

export default LandingPage