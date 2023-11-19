import React from 'react';
import '../../styles/style.css';

interface liProps{
    title:string;
    icon?:React.ReactNode;
}

export default function Li(props: liProps) {
    return (
    <li>{props.icon}{props.title} </li>
    )
}
