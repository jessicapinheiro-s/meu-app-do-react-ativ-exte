import React from 'react';
import logo from '../../imgs/logo.svg';

export default function MenuHeader(props: any) {
    return (
        <div className='sub-container-header'>
            <div id='logo-header'>
                <img src={logo} alt=""/>
            </div>
            <nav className='nav-menu-header'>
                <ul>
                    <li><a href="/">Dashboard</a></li>
                    <li><a href='/'>Meu Perfil</a></li>
                    <li><a href="/">Meu progresso</a></li>
                </ul>
            </nav>
            <p className='saudacoes'>Olá! {props.nome}</p>
        </div>

    )
}
