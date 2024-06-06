import {createHashRouter, RouterProvider} from 'react-router-dom';

import Home from "./routes/Home.jsx";
import Login from './routes/Login.jsx';
import Rent from "./routes/Rent.jsx";
import Register from './routes/Register.jsx';
import Information from './routes/Information.jsx';
import { URL } from './constants/DireccionesWeb.js';

const router = createHashRouter([
  {
    path: URL.HOME,
    element: <Home />
  },
  {
    path: URL.LOGIN,
    element: <Login />
  },
  {
    path: URL.RENT,
    element: <Rent />
  },
  {
    path: URL.REGISTER,
    element: <Register />
  },
  {
    path: URL.INFORMATION,
    element: <Information />
  }
]);

export default function App() {
	return (
		<RouterProvider router={router}/>
	)
}
