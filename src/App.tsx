import React from "react"
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './styles/style.css';
import Dashboard from './Pages/dashboard';
import MeuPerfil from './Pages/meuPerfil';
import MeuProgresso from './Pages/meuProgresso';
import Login from './Pages/login';

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
          <Login/>
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
