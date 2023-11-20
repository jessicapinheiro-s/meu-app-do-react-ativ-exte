import { useState } from "react";
import logo from '../../imgs/logo.svg';
import '../../styles/style.css';
import Button from '../buttons/button';
import MenuHeader from "../header/header";

export default function FormularioLogin(props: any) {
    //Definindo Estado
    let eventLocalStorage: string = '';
    let form: string = '';

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //função que irá retornar algo
    const handleCadastro = (event: any) => {
        event.preventDefault();
        event = 'Cadastro';
        eventLocalStorage = 'Criar';

        console.log({
            email,
            password
        });
    }

    //função para criar, obter e remover dados do localStorage 
    const useLocalStorage = (event: string, valor: any, chave: string) => {
        if (event == 'Criar') {
            localStorage.setItem(chave, valor);
        } else if (event == 'Atualizar') {
            localStorage.getItem(chave);
        } else {
            localStorage.removeItem(chave);
        }
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