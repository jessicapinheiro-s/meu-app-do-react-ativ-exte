import { Link } from 'react-router-dom';
import MenuHeader from '../components/header/header';
import React from "react";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { MdOutlinePassword } from "react-icons/md";
import { CiCalendarDate } from "react-icons/ci";
import Button from '../components/buttons/button';
import '../styles/style.css'



import Li from '../components/lista-item/li';
interface MeuPerfilProps {
    nome: string;
}
const excluirPerfil = () => {
    console.log('IsOpen');
    alert('O seu perifl foi excluído!')
}


export default function MeuPerfil(props: MeuPerfilProps) {
    return (
        <div>
            <MenuHeader nome = 'Jéssica'/>
            <div className='container-meu-perfil'>
                <div className='Title'>
                    <h1>Olá, {props.nome}</h1>
                </div>
                <div className='info'>
                    <div className='progresso-container'>
                        <p>Progresso</p>
                        <input
                            min="0"
                            max="100"
                            step="1"
                            type="range"
                            readOnly 
                            className='progressoBar'/>
                    </div>
                    <div className='Info-List'>
                        <ul>
                            <Li className= 'li-meu-perfil-info'icon={<FaRegUser />} title='Jéssica Pinheiro Silva' />
                            <Li className= 'li-meu-perfil-info' icon={<MdOutlineMail />}title='jessicasilva.js1314@gmail.com' />
                            <Li className= 'li-meu-perfil-info' icon={<CiCalendarDate />}title='11/03/2002' />
                            <Li className= 'li-meu-perfil-info' icon={<MdOutlinePassword />}title='celular@' />
                        </ul>
                    </div>
                    <Button className='buttonExcluir' onClick={() => { excluirPerfil() }} >
                        Excluir
                    </Button>
                </div>
            </div>
        </div>
    )
}