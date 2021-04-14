import React from 'react';
import {Button} from "@material-ui/core";

export type PropsType = {
    value?: number
    title: string
    disabled?: boolean
    universalFunction: () => void
    variant?: 'contained' | 'outlined' | 'text'
    color?: 'secondary' | 'primary' | 'default' | 'inherit'
    backgroundColor?: string

}

export const UniversalButton = (props: PropsType) => {
    return (
        <Button style={{margin: '10px', backgroundColor:props.backgroundColor ? props.backgroundColor : '' }} variant={props.variant ? props.variant : 'contained'}
                color={props.color ? props.color : 'secondary'}
                disabled={props.disabled} onClick={() => {
            props.universalFunction()
        }}>{props.title}</Button>
    )
}