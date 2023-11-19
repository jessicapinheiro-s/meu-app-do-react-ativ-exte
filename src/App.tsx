import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//rotas
import Dashboard from './Pages/dashboard';
import MeuPerfil from './Pages/meuPerfil';
import MeuProgresso from './Pages/meuProgresso';
import Cadastro from './Pages/cadastro'
import './styles/style.css';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Cadastro/>} />
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='/meuPerfil' element={<MeuPerfil nome = 'jessica'/>} />
      <Route path='/meuProgresso' element={<MeuProgresso/>} />
    </Routes>
  );
}

export default App;
