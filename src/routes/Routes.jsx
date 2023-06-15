/* eslint-disable no-unused-vars */
import {createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Recepies from "../layout/Recepies";
import ChefRecepies from "../pages/Home/ChefRecepies/ChefRecepies";
import LoginLayout from "../layout/LoginLayout";
import RegistrationLayout from "../layout/RegistrationLayout";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import PrivateRoute from "./PrivateRoute";


 const router = createBrowserRouter([
    
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            }
        ]
    },
    {
        path:'/chefs',
        element:<PrivateRoute><Recepies></Recepies></PrivateRoute>,
        children:[
            {
                path:':id',
                element:<ChefRecepies></ChefRecepies>,
                loader: ({params}) => fetch(`http://localhost:5000/chefs/${params.id}`)
            }
        ]

    },
    {
        path: '/login',
        element: <LoginLayout></LoginLayout>

    },
    {
        path: '/register',
        element: <RegistrationLayout></RegistrationLayout>
    }
    
 ])

 export default router;