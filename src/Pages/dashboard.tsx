import { Link } from 'react-router-dom';
import MenuHeader from '../components/header/header';
import React, { useState } from "react";
import { Card } from '../components/dash/card';
import { FcSearch } from "react-icons/fc";
import { FcShop } from "react-icons/fc";
import { FcInTransit } from "react-icons/fc";
import { FcCompactCamera } from "react-icons/fc";
import Button from '../components/buttons/button';
import minhaImg from '../imgs/image.png';


export default function Dashboard() {

    const [iconItem, setIconItem] = useState('');

    const answer = () => {
        console.log('respondido')
        alert('Sua resposta foi armazenada')
    }


    return (
        <div>
            <MenuHeader nome='Jéssica' />
            <div className='title'>
                <h1>Qual dessas opções representa uma Camera em Libras?</h1>
            </div>
            <div className='container-dash'>

                {/*<Card>
                    <FcSearch className='icon' />
                </Card>
                <Card>
                    <FcShop className='icon' />
                </Card>
                <Card>
                    <FcInTransit className='icon' />
                </Card>
                <Card>
                    <FcCompactCamera className='icon' />
                </Card>*/}
                <Card>
                    <img src={minhaImg} className='icon' />
                </Card>
                <Card>
                    <img src={minhaImg} className='icon' />
                </Card>
                <Card>
                    <img src={minhaImg} className='icon' />
                </Card>
                <Card>
                    <img src={minhaImg} className='icon' />
                </Card>
                
                
                <div className='container-button'>
                    <Button className='buttonChoiceReponse' onClick={() => { answer() }}>Continuar</Button>
                </div>
            </div>
        </div>
    )
}