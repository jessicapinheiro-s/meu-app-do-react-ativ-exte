import React from 'react';
import '../../styles/style.css';

interface inputTxtProps{
    placeholder:string;
}

function inputTexto(props: inputTxtProps) {
    return (
        <input type="text" placeholder={ props.placeholder} required />
    )
}
