import { useState } from "react";
import logo from '../../imgs/logo.svg';
import '../../styles/style.css';
import Button from '../buttons/button';

export default function FormularioLogin(props: any) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //função que irá retornar algo
    const handleCadastro = (event: any) => {
        event.preventDefault();

        const info = {
            email,
            password
        }

        tratandoDados(info);
    }

    //função para criar, obter e remover dados do localStorage 
        
    function tratandoDados (userInfo:object) {
        let listaUsers: Array<object> = JSON.parse(localStorage.getItem('listaUsers') || '[]');  

    }
    

    return (
        <div className="container-form">
            <form className='modal-bg' onSubmit={handleCadastro}>
                <div className='logo-cadastro'>
                    <img src={logo} alt="" />
                </div>
                <div className='inputs-login-form'>
                    <input
                        type="email"
                        id='inEmail'
                        placeholder='Email'
                        required
                        value={email}
                        onChange={(event) => setEmail(event.target.value)} />
                    <input
                        type="password"
                        id='inSenha'
                        placeholder='Senha'
                        required
                        value={password}
                        onChange={(event) => setPassword(event.target.value)} />
                </div>
                <div className='container-buttons'>
                    <Button className="button-login">
                        Login
                    </Button>
                </div>
            </form>
        </div>

    )
}