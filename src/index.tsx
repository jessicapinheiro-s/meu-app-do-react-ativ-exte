import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';


//config router
/*
import {
  createBrowserRouter, RouterProvider
} from "react-router-dom";
import Dashboard from './Pages/dashboard';
import MeuPerfil from './Pages/meuPerfil';
import MeuProgresso from './Pages/meuProgresso';
import Cadastro from './Pages/cadastro';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Cadastro/>,
  },
  {
    path: "/meuPerfil",
    element: <MeuPerfil/>,
  },
  {
    path: "/dashboard",
    element: <Dashboard/>,
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
);*/

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
