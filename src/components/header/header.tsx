import React from 'react';
import logo from '../../imgs/logo.svg';
import '../../styles/style.css';
import NavBar from '../nav/navBar';

interface propsHeader{
    nome:string;
}
export default function MenuHeader(props:propsHeader) {

    return (
        <header className='container-header'>
            <div id='logo-header'>
                <img src={logo} alt="" />
            </div>
            <p className='saudacoes'>Olá! {props.nome}</p>
            <NavBar/>
        </header>

    )
}
