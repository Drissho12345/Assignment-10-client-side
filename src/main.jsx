import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Component/Root/Root.jsx';
import ErrorPage from './Component/ErrorPage/ErrorPage.jsx';
import AddTouristsSpots from './Component/AddTouristsSpots/AddTouristsSpots.jsx';
import Cards from './Component/Cards/Cards.jsx';
import CardDetails from './Component/CardDetails/CardDetails.jsx';

import AuthProvider from './Component/AuthProvider/AuthProvider.jsx';
import Login from './Component/Login/Login.jsx';
import Register from './Component/Register/Register.jsx';
import MyList from './Component/MyList/MyList.jsx';
import ProtectedRoute from './Component/ProtectedRoute/ProtectedRoute.jsx';
import AllTouristsSpot from './Component/AllTouristsSpot/AllTouristsSpot';
import UpdateMySpot from './Component/UpdateMySpot/UpdateMySpot.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      
      {
        path:"/",
        element: <Cards></Cards>,
        loader:() => fetch('https://my-assignment-server-theta.vercel.app/spots')
      },
      
      {
        path:"/CardDetails/:id",
        element: <ProtectedRoute>
          <CardDetails></CardDetails>
        </ProtectedRoute>,
        loader: () => fetch('https://my-assignment-server-theta.vercel.app/spots')
      },
      {
        path:"/AddTouristsSpot",
        element: <ProtectedRoute>
        <AddTouristsSpots></AddTouristsSpots>
      </ProtectedRoute>
      },
      {
        path:"/AllTouristsSpot",
        element:<AllTouristsSpot></AllTouristsSpot>,
        loader: () => fetch('https://my-assignment-server-theta.vercel.app/spots'),
      },
      {
        path:"/UpdateMySpot/:id",
        element: <UpdateMySpot></UpdateMySpot>,
        loader: ({params}) => fetch(`https://my-assignment-server-theta.vercel.app/spots/${params.id}`),
      },
      {
        path:"/Login",
        element:<Login></Login>,
      },
      {
        path:"/Register",
        element:<Register></Register>,
      },
      {
        path:"/myList",
        element:<ProtectedRoute>
         <MyList></MyList>
      </ProtectedRoute>,
        loader: () => fetch('https://my-assignment-server-theta.vercel.app/spots'),
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProvider>
           <RouterProvider router={router} />
      </AuthProvider>
    <ToastContainer />
  </React.StrictMode>,
)
