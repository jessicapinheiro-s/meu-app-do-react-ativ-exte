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
interface Profile{
  name: string;
}

const supabase = createClient("https://xamaiaybsfzwmjojqzjc.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhhbWFpYXlic2Z6d21qb2pxempjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDExMDYyNzQsImV4cCI6MjAxNjY4MjI3NH0.FkOp0ggJOj3xuecFISQTvdM93bHeXitFsBCQ305ixy4");

function App() {
  const [profiles, setProfiles] = useState<null | Profile[]>(null);

  useEffect(() => {
    getProfiles();
  }, []);

  async function getProfiles() {
    const { data } = await supabase.from("profiles").select();
    setProfiles(data || []);
    console.log(profiles);
  }
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