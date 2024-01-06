import {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//rotas
import Dashboard from './Pages/dashboard';
import MeuPerfil from './Pages/meuPerfil';
import MeuProgresso from './Pages/meuProgresso';
import Cadastro from './Pages/cadastro'
import Login from './Pages/login'
import './styles/style.css';
//Supabase
import { createClient } from "@supabase/supabase-js";

const supabase = createClient("https://<project>.supabase.co", "sbp_c08ad84f8b7d3688f0dca1b2100ca8002dee679d");

function App() {
  const [countries, setCountries] = useState([]);

  /*useEffect(() => {
    getCountries();
  }, []);

  /*async function getCountries() {
    const { data } = await supabase.from("countries").select();
    setCountries(data);
  }*/

  return (
    <Routes>
      <Route path='/' element={<Cadastro />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/meuPerfil' element={<MeuPerfil nome='jessica' />} />
      <Route path='/meuProgresso' element={<MeuProgresso />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  );
}

export default App;
