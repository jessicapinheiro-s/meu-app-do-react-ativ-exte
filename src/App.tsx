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


function App() {
const supabaseSession = supabase;

  const [session, setSession] = useState<Session | null>(null)
  console.log(session);
  
 
  useEffect(() => {
    supabaseSession.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabaseSession.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  
  return (
    <div>
      <SessionContextProvider supabaseClient={supabase} initialSession={session} >
        <Routes>
          <Route path='/' element = {!session ? <Login /> : <Dashboard session={session}/>} />
          <Route path='/dashboard' element={!session ? <Login /> : <Dashboard session={session}/>} />
          <Route path='/meuPerfil' element = {!session ? <Cadastro /> : <MeuPerfil session={{ user: { id: session.user.id, email: session.user.email } }} />} />
          <Route path='/meuProgresso' element = {!session ? <Login /> : <MeuProgresso/>}/>
          <Route path='/login' element={<Login />} />
        </Routes>
      </SessionContextProvider>


    </div>

  );
}

export default App;
