import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../imgs/logo.svg';
import '../../styles/style.css';
import { MdOutlineMenu } from "react-icons/md";
interface buttonProps {
    onClick?: () => void;
    nome:string;
}
export default function MenuHeader(props: buttonProps) {

    function handleClick() {
        //console.log('asdas');
        <MdOutlineMenu className='with'/>
    }

    return (
        <header className='container-header'>
            <div id='logo-header'>
                <img src={logo} alt="" />
            </div>
            <p className='saudacoes'>Olá! {props.nome}</p>
            <nav className='nav-menu-header'>
                <MdOutlineMenu className='icon-menu' onClick={() => { handleClick() }}/>
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
                        <Link to='/meuProgresso'>Meu Progresso</Link>
                    </li>
                    <li>
                        <Link to='/meuPerfil'>Meu Perfil</Link>
                    </li>
                </ul>
            </nav>
        </header>

    )
}
