import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

//config router
import {
  createBrowserRouter, RouterProvider
} from "react-router-dom";
import Dashboard from './Pages/dashboard';
import MeuPerfil from './Pages/meuPerfil';
import MeuProgresso from './Pages/meuProgresso';
import Login from './Pages/login';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
  {
    path: "/meuPerfil",
    element: <MeuPerfil/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/meuProgresso",
    element: <MeuProgresso/>,
  },

]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


