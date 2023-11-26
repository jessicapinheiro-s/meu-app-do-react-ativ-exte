import React from "react";

interface propsCard{
    children?: React.ReactNode;
  
}


export function Card (props: propsCard){
    
    return(
        <div className="card">
            {props.children}
        </div>
    ) 
}