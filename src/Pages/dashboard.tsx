import { Link } from 'react-router-dom';
import MenuHeader from '../components/header/header';
import React from "react";
import Card from '../components/dash/card';

export default function Dashboard() {
    return (
        <div>
            <MenuHeader nome='Jéssica' />
            <div className='container-dash'>
                <h1 className='title'>Nome item</h1>
                <Card src='' />
                <Card src='' />
                <Card src='' />
                <Card src='' />
            </div>
        </div>
    )
}