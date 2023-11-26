import { Link } from 'react-router-dom';
import MenuHeader from '../components/header/header';
import React, {useState} from "react";
import {Card} from '../components/dash/card';
import { FcSearch } from "react-icons/fc";
import { FcShop } from "react-icons/fc";
import { FcInTransit } from "react-icons/fc";
import { FcCompactCamera } from "react-icons/fc";




export default function Dashboard() {

    const [iconItem, setIconItem] = useState('');
    return (
        <div>
            <MenuHeader nome='Jéssica' />
            <div className='container-dash'>
                <h1 className='title'>Nome item</h1>
                <Card>
                    <FcSearch className='icon'/>
                </Card>
                <Card>
                    <FcShop className='icon'/>
                </Card>
                <Card>
                    <FcInTransit  className='icon'/>
                </Card>
                <Card>
                    <FcCompactCamera  className='icon'/>
                </Card>
                
            </div>
        </div>
    )
}