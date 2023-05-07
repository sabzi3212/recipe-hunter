/* eslint-disable no-unused-vars */
import React from 'react';
import NavigationBar from '../pages/Shared/NavigationBar';
import Footer from '../pages/Shared/Footer';

import Login from '../pages/Login/Login/Login';

const LoginLayout = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Login></Login>
            <Footer></Footer>
        </div>
    );
};

export default LoginLayout;