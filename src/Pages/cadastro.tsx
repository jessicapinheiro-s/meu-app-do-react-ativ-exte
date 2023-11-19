import { Link } from 'react-router-dom';
import React from "react"
import MenuHeader from '../components/header/header';
import Formulario from '../components/form/form'
import '../styles/style.css';

export default function Cadastro() {
    return (
        <div className='container-geral'>
            <MenuHeader nome = 'jessica' />
            <Formulario />
        </div>
    )
}