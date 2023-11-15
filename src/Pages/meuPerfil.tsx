import { Link } from 'react-router-dom';
import MenuHeader from '../components/header/header';
import React from "react"



export default function MeuPerfil (){
    return(
        <div>
            <MenuHeader/>
            <div className='container-meu-perfil'>
                <div>
                    <span>Icon</span>
                </div>
                <div>
                    <ul>
                        <li>Nome</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}