import { Link } from 'react-router-dom';
import MenuHeader from '../components/header/header';
import React from "react";

export default function Dashboard (){
    return(
        <div>
            <MenuHeader nome ='Jéssica'/>
            <div className='container-dash'>
                <div>
                    <span>Content</span>
                </div>
                <div>
                    <span>Progresso</span>
                    <input type="range" />
                </div>
            </div>
        </div>
    )
}