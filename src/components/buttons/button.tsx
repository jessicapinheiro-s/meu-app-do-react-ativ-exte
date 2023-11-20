import React from 'react';
interface buttonProps{
    children?:React.ReactNode;
    className?:string;
    onClick?:() => void;

}
function handleClick(){
    //console.log('asdas');
}

export default function Button(props: buttonProps) {
    return (
       <button 
        onClick={()=> {handleClick()}} 
        className={props.className}>
        {props.children}
        </button>
    )
}
