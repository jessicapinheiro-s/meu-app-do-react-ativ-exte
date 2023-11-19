import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../imgs/logo.svg';
import '../../styles/style.css';

export default function MenuHeader(props: any) {
    return (
        <header className='container-header'>
            <div id='logo-header'>
                <img src={logo} alt="" />
            </div>
            <p className='saudacoes'>Olá! {props.nome}</p>
            <nav className='nav-menu-header'>
                <ul>
                    <li>
                        <Link to='/'>Cadastro</Link>
                    </li>
                    <li>
                        <Link to='/dashboard'>Dashboard</Link>
                    </li>
                    <li>
                        <Link to='/meuPerfil'>Meu Perfil</Link>
                    </li>
                    <li>
                        <Link to='/meuProgresso'>Meu progresso</Link>
                    </li>
                </ul>
            </nav>
        </header>

    )
}
