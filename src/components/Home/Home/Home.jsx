import React from 'react';
import Header from '../Header/Header';
import About from '../About/About';
import Service from '../Service/Service';
import Offer from '../Offer/Offer';
import News from '../News/News';
import Testimonial from '../Testimonial/Testimonial';

import './Home.css';
import Footer from '../Footer/Footer';



const Home = () => {
    return (
        <div>
            <div className="bgBanner">
                <div className="container">
                    <Header></Header>
                </div>
            </div>
            <About></About>
            <Service></Service>
            <Offer></Offer>
            <News></News>
            <Testimonial></Testimonial>
            <Footer></Footer>
        </div>
    );
};

export default Home;