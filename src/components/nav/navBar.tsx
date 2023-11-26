import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/style.css';
import { MdOutlineMenu } from "react-icons/md";


interface buttonProps {
    onClick?: () => void;
}

export default function NavBar(props: buttonProps) {

    const [isNavOpen, setIsNavOpen] = useState(false);
    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
        console.log('IsOpen');
    }

    return (
        <nav className={`nav-menu-header ${isNavOpen ? 'active' : ''}`}>
            <MdOutlineMenu className='icon-menu' onClick={() => { toggleNav() }} />
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
            </ul>
        </nav>
    )
}
