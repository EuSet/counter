import React from 'react';

type PropsType = {
    value:number
    title:string
    disabled:boolean
    universalFunction:() => void

}
export const buttonStyle = {
    width: '50%'
}

export const UniversalButton = (props:PropsType) => {
    return (
        <button style={buttonStyle} disabled={props.disabled} onClick={() => {props.universalFunction()}}>{props.title}</button>
    )
}