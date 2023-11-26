import React from 'react';
interface buttonProps{
    children?:React.ReactNode;
    className?:string;
    onClick?:() => void;

}

export default function Button(props: buttonProps) {
    return (
       <button 
        onClick={props.onClick} 
        className={props.className}>
        {props.children}
        </button>
    )
}
