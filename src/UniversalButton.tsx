import React from 'react';
import {Button} from "@material-ui/core";

type PropsType = {
    value?:number
    title:string
    disabled:boolean
    universalFunction:() => void

}

export const UniversalButton = (props:PropsType) => {
    return (
        <Button style={{margin:'10px'}} variant="contained" color={'secondary'}  disabled={props.disabled} onClick={() => {props.universalFunction()}}>{props.title}</Button>
    )
}