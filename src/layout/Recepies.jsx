/* eslint-disable no-unused-vars */
import React from 'react';
import NavigationBar from '../pages/Shared/NavigationBar';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer';
import ChefRecepies from '../pages/Home/ChefRecepies/ChefRecepies';

const Recepies = () => {
    return (
        <div>

            <NavigationBar></NavigationBar>
            <ChefRecepies></ChefRecepies>
            <Footer></Footer>
            
        </div>
    );
};

export default Recepies;