import React from 'react';
import '../../styles/style.css';

interface inputTxtProps{
    placeholder:string;
}

export default function InputTexto(props: inputTxtProps) {
    return (
        <input type="text" placeholder={ props.placeholder} required />
    )
}
