import React from 'react';
import '../../styles/style.css';

interface liProps{
    title:string;
    icon?:React.ReactNode;
    className?: string;
}

export default function Li(props: liProps) {
    return (
    <li className={props.className}>{props.icon}{props.title} </li>
    )
}
