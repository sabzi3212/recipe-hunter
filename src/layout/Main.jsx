/* eslint-disable no-unused-vars */
import React from 'react';

import Footer from '../pages/Shared/Footer';
import NavigationBar from '../pages/Shared/NavigationBar';
import Banner from '../pages/Shared/Banner';
import Chefs from '../pages/Home/Chefs/Chefs';

const Main = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Banner></Banner>
            <Chefs></Chefs>

            <Footer></Footer>
        </div>
    );
};

export default Main;