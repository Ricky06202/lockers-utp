import React from 'react'
import ReactDOM from 'react-dom/client'
{/*import App from './App.jsx'*/}
import './index.css'
import {createHashRouter, RouterProvider} from 'react-router-dom';

import Home from "./routes/Home.jsx";
import Inicio from "./routes/InicioSesion.jsx";
import Rent from "./routes/Rent.jsx";

const router = createHashRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/inicio',
    element: <Inicio />
  },
  {
    path: '/rent',
    element: <Rent />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    {/*<App />*/}
  </React.StrictMode>,
)
