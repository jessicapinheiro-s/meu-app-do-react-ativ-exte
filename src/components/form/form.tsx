import React from "react";
import logo from '../../imgs/logo.svg';
import '../../styles/style.css';
import Button from '../buttons/button';

export default function Formulario(props: any) {
    return (
        <div className="container-form">
            <div className='modal-bg'>
                <div className='logo-cadastro'>
                    <img src={logo} alt="" />
                </div>
                <div className='inputs-login-form'>
                    <input type="text" id='inNome' placeholder='Nome' required />
                    <input type="email" id='inEmail' placeholder='Email' required />
                    <input type="date" id='inDataNasc' placeholder='Data de Nascimento' required />
                    <input type="password" id='inSenha' placeholder='Senha' required />
                </div>
                <div className='container-buttons'>
                    <Button className='button-cadastrar'>
                        Cadastrar
                    </Button>
                    <Button className="button-login">
                        Login
                    </Button>
                </div>
            </div>
        </div>

    )
}