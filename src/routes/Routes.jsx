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
import ErrorLayout from "../layout/ErrorLayout";
import BlogsLayout from "../layout/BlogsLayout";


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
                loader: ({params}) => fetch(`https://assignment-10-server-seven-green.vercel.app/chefs/${params.id}`)
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
    },
    {
        path: '/blogs',
        element: <BlogsLayout></BlogsLayout>
    },
    {
        path: '*',
        element:<ErrorLayout></ErrorLayout>
    }
    
 ])

 export default router;