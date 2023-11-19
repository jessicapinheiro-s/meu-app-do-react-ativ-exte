import React from 'react';
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
                    <li><a href="/">Dashboard</a></li>
                    <li><a href='/'>Meu Perfil</a></li>
                    <li><a href="/">Meu progresso</a></li>
                </ul>
            </nav>
        </header>

    )
}
