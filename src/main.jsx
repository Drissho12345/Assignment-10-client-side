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


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      
      {
        path:"/",
        element: <Cards></Cards>,
        loader:() => fetch('http://localhost:5000/spots')
      },
      
      {
        path:"/CardDetails/:id",
        element: <CardDetails></CardDetails>,
        loader: () => fetch('http://localhost:5000/spots')
      },
      {
        path:"/AddTouristsSpot",
        element: <AddTouristsSpots></AddTouristsSpots>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </React.StrictMode>,
)
