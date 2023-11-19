import { Link } from 'react-router-dom';
import MenuHeader from '../components/header/header';
import React from "react";
import { FaRegUser  } from "react-icons/fa";
import Li from '../components/lista-item/li';
interface MeuPerfilProps {
    nome: string;
}

export default function MeuPerfil(props: MeuPerfilProps) {
    return (
        <div>
            <MenuHeader />
            <div className='container-meu-perfil'>
                <div>
                    <span>
                        <FaRegUser/>
                    </span>            
                    <span>Olá, {props.nome}</span>
                </div>
                <div className='info'>
                    <div>
                        <span>Progresso</span>
                        <input 
                        min="0"
                        max="100"
                        step="1"
                        type="range" 
                        readOnly/>
                    </div>
                    <div className='Info-List'>
                        <ul>
                            <Li title='Jéssica Pinheiro Silva'/>
                            <Li title='jessicasilva.js1314@gmail.com'/>
                            <Li title='11/03/2002'/>
                            <Li title='celular@'/>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}