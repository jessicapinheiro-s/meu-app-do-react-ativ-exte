import { useState } from "react";
import logo from '../../imgs/logo.svg';
import '../../styles/style.css';
import Button from '../buttons/button';
import { supabase } from '../../supabaseClient';

export default function FormularioLogin(props: any) {
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState('')
    //const [password, setPassword] = useState('');

    const limparCampo = () => {
        setEmail('');
        //setPassword('');
    }

    const handleLogin = async (event: any) => {
        //tratandoDados(info);
        limparCampo();
        event.preventDefault()

        setLoading(true)
        const { error } = await supabase.auth.signInWithOtp({ email })

        if (error) {
            alert(error.message)
        } else {
            alert('Check your email for the login link!')
        }
        setLoading(false)
    }
    //função para criar, obter e remover dados do localStorage 
    /*function tratandoDados(userInfo: object) {
       const supData = supaBaseService.signIn({ email, password });
       console.log(supData);
        const listaUsers: Array<UserProps> = JSON.parse(localStorage.getItem('listaUsers') || '[]');
        console.log({ userInfo, listaUsers });
        interface UserProps {
            nome: string,
            email: string;
            dataNascimento: string;
            id: number;
            password: string;
        }
  
        const infoTipada: {
            email: string;
            password: string;
        }
            = userInfo as {
                email: string;
                password: string;
            };
  
        let existe = listaUsers.filter(f => f.email == infoTipada.email && f.password == infoTipada.password);
  
        if (existe) {
            console.log('User existe');
            alert('Bem-vindo!');
        } else {
            console.log('User não existe');
            alert('Não encontramos nenhum usuário');
        }
  
    }*/


    return (
        <div className="container-form">
            <form className='modal-bg' onSubmit={handleLogin}>
                <div className='logo-cadastro'>
                    <img src={logo} alt="" />
                </div>
                <div className='inputs-login-form'>
                    <input
                        className="inputField"
                        type="email"
                        placeholder="Your email"
                        value={email}
                        required={true}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className='container-buttons'>
                    <button className={'button-login'}  disabled={loading}>
                        {loading ? <span>Loading</span> : <span>Login</span>}
                    </button>
                </div>
            </form>
        </div>

    )

}