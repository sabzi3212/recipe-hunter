/* eslint-disable no-unused-vars */
import React from 'react';

import Footer from '../pages/Shared/Footer';
import NavigationBar from '../pages/Shared/NavigationBar';
import Banner from '../pages/Shared/Banner';
import Chefs from '../pages/Home/Chefs/Chefs';
import About from '../pages/Shared/About';
import Gallery from '../pages/Gallery/Gallery';

const Main = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Banner></Banner>
            <Chefs></Chefs>
            <About></About>
            <Gallery></Gallery>
            <Footer></Footer>
        </div>
    );
};

export default Main;