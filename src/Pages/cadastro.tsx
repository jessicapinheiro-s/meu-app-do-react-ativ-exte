import { Link } from 'react-router-dom';
import React from "react"
import logo from '../imgs/logo.svg';
import '../styles/style.css';

export default function Cadastro(props: any) {
    return (
        <div className='modal-bg'>
            <div className='logo-cadastro'>
            <img src={logo} alt=""/>
            </div>
            <div className='inputs-login-form'>
                <label htmlFor="inNome">Nome e Sebrenome</label>
                <input type="text" id='inNome' required/>
                <label htmlFor="inNome">E-mail</label>
                <input type="email" id='inEmail' required/>
                <label htmlFor="inNome">Data de nascimento</label>
                <input type="date" id='inDataNasc' required/>
                <label htmlFor="inNome">Senha</label>
                <input type="password" id='inSenha' required/>
            </div>
            <button type='submit' className='btCadastro'>Cadastrar</button>
        </div>
    )
}