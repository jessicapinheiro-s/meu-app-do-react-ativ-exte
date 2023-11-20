import { useState } from "react";
import logo from '../../imgs/logo.svg';
import '../../styles/style.css';
import Button from '../buttons/button';
import Cadastro from "../../Pages/cadastro";
import { Link } from 'react-router-dom';

export default function Formulario(props: any) {
    //Definindo Estado
    let eventLocalStorage:string = '';
    let form:string = '';

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [password, setPassword] = useState('');

    //função que irá retornar algo
    const handleCadastro = (event: any) => {
        event.preventDefault();
        event = 'Cadastro';
        eventLocalStorage = 'Criar';
        
        console.log({
            name,
            email,
            password,
            dataNascimento
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
                        type="text"
                        id='inNome'
                        placeholder='Nome'
                        required
                        value={name}
                        onChange={(event) => setName(event.target.value)} />
                    <input
                        type="email"
                        id='inEmail'
                        placeholder='Email'
                        required
                        value={email}
                        onChange={(event) => setEmail(event.target.value)} />
                    <input
                        type="date"
                        id='inDataNasc'
                        placeholder='Data de Nascimento'
                        required
                        value={dataNascimento}
                        onChange={(event) => setDataNascimento(event.target.value)} />
                    <input
                        type="password"
                        id='inSenha'
                        placeholder='Senha'
                        required
                        value={password}
                        onChange={(event) => setPassword(event.target.value)} />
                </div>
                <div className='container-buttons'>
                    <Button className='button-cadastrar'>
                        Cadastrar
                    </Button>
                    <p><Link to='/login'></Link>Login</p>
                </div>
            </form>
        </div>

    )
}