/* eslint-disable no-unused-vars */
import React from 'react';
import NavigationBar from '../pages/Shared/NavigationBar';
import Register from '../pages/Login/Register/Register';
import Footer from '../pages/Shared/Footer';

const RegistrationLayout = () => {
    return (
        <div>

            <NavigationBar></NavigationBar>
            <Register></Register>
            <Footer></Footer>
            
        </div>
    );
};

export default RegistrationLayout;