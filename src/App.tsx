import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// Importe os componentes das páginas
import Dashboard from './Pages/dashboard';
import MeuPerfil from './Pages/meuPerfil';
import MeuProgresso from './Pages/meuProgresso';
import Cadastro from './Pages/cadastro';
import Login from './Pages/login';
import './styles/style.css';
import FormularioLogin from '../src/components/form/form';
import { Session } from '@supabase/supabase-js';
import { supabase } from './supabaseClient';
import { SessionContextProvider } from '@supabase/auth-helpers-react';


interface Profile {
  nome: string;
  created_at: string;
  id: number;
}

const supabaseSession = supabase;

function App() {
  const [session, setSession] = useState<Session | null>(null)
  const [profiles, setProfiles] = useState<null | Profile[]>(null);
  console.log(session);
  useEffect(() => {
    getProfiles();
  }, []);

  useEffect(() => {
    supabaseSession.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabaseSession.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  async function getProfiles() {
    const { data } = await supabaseSession.from("profiles").select();
    setProfiles(data || []);
    console.log(profiles);
  }

  return (
    <div>
      <SessionContextProvider supabaseClient={supabase} initialSession={session} >
        <Routes>
          <Route path='/' element={<Cadastro />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/meuPerfil' {...!session ? <FormularioLogin /> : <MeuPerfil session={{ user: { id: "", email: "" } }} />} />
          <Route path='/meuProgresso' element={<MeuProgresso />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </SessionContextProvider>


    </div>

  );
}

export default App;
