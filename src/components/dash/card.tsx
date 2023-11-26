import React from "react";

interface propsCard{
    src:string;

}

export default function Card (props:propsCard){
    
    return(
        <div className="container-img">
            <img src={props.src} alt="sdfsdfsdfsd" className="card"/>
            sdsads
        </div>
    ) 
}