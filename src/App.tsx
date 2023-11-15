import React from "react"
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Dashboard from './Pages/dashboard';
import MeuPerfil from './Pages/meuPerfil';
import MeuProgresso from './Pages/meuProgresso';
import Cadastro from './Pages/cadastro'
import './style.css';


function App() {
  return (
    <Router>
      <ul>
        <li>
          <Link to='/dashboard'></Link>
        </li>
        <li>
          <Link to='/meuPerfil'></Link>
        </li>
        <li>
          <Link to='/meuProgresso'></Link>
        </li>
      </ul>
      <Routes>
        <Route path='/'>
          <Cadastro/>
        </Route>
        <Route path='/dashboard'>
          <Dashboard/>
        </Route>
        <Route path='/meuPerfil'>
          <MeuPerfil/>
        </Route>
        <Route path='/meuProgresso'>
          <MeuProgresso/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
