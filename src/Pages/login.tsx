import { Link } from 'react-router-dom';
import React from "react"
import MenuHeader from '../components/header/header';
import FormularioLogin from '../components/form/formLogin'
import '../styles/style.css';

export default function Login() {
    return (
        <div className='container-geral'>
            <MenuHeader nome = 'jessica' />
            <FormularioLogin />
        </div>
    )
}