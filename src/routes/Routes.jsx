/* eslint-disable no-unused-vars */
import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Recepies from "../layout/Recepies";
import ChefRecepies from "../pages/Home/ChefRecepies/ChefRecepies";

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
        element:<Recepies></Recepies>,
        children:[
            {
                path:':id',
                element:<ChefRecepies></ChefRecepies>,
                loader: ({params}) => fetch(`http://localhost:5000/chefs/${params.id}`)
            }
        ]

    }
 ])

 export default router;