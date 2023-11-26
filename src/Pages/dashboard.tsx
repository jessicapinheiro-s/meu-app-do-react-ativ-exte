import { Link } from 'react-router-dom';
import MenuHeader from '../components/header/header';
import React, { useState } from "react";
import { Card } from '../components/dash/card';
import { FcSearch } from "react-icons/fc";
import { FcShop } from "react-icons/fc";
import { FcInTransit } from "react-icons/fc";
import { FcCompactCamera } from "react-icons/fc";
import Button from '../components/buttons/button';



export default function Dashboard() {

    const [iconItem, setIconItem] = useState('');

    function answer() {
        console.log('respondido')
    }
    return (
        <div>
            <MenuHeader nome='Jéssica' />
            <div className='container-dash'>
                <div className='title'>
                    <h1>Nome item</h1>
                </div>
                <Card>
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
                </Card>
                <div className='container-button'>
                <Button className='buttonChoiceReponse' onClick={answer}>Continuar</Button>
                </div>
            </div>
        </div>
    )
}