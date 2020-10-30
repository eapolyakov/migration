import React from 'react';


export default function Button(props){
    //console.log(props.style);
    return(
        <button
            style= {props.style}
            className = "cont-submit btn-contact btn-style"
            onClick= {props.action} > {props.title}
        </button>)
}

