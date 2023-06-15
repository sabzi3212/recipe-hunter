import React from 'react';
import NavigationBar from '../pages/Shared/NavigationBar';
import Error from '../pages/Error/Error';
import Footer from '../pages/Shared/Footer';

const ErrorLayout = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Error></Error>
            <Footer></Footer>
        </div>
    );
};

export default ErrorLayout;