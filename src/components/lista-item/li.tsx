import React from 'react';
import '../../styles/style.css';

interface liProps{
    title:string;
}

export default function Li(props: liProps) {
    return (
    <li>{props.title}</li>

    )
}
