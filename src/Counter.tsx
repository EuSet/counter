import React from 'react';
import {UniversalButton} from "./UniversalButton";

type PropsType = {
    value: number
    maxValue:number
    startValue: number
    maxInputValue: number
    setValue: (value: number) => void
    buttonIncFunction: () => void
    buttonResetFunction: () => void
    typeValue:boolean
}
const inputStyle = {
    padding: '20px',
    textAlign: 'center' as 'center'
}
const inputErrorStyle = {
    padding: '20px',
    textAlign: 'center' as 'center',
    color:'red',
    fontSize: '15px'
}
const containerStyle = {
    display: 'inline-block'
}

export const Counter = (props: PropsType) => {
    const inputValue = props.typeValue  ? props.maxValue <= props.startValue || props.startValue <= props.maxValue ? 'incorrect value!' : 'enter values and press set' : props.value
    return <div style={containerStyle}>
        <div>
            <input style={props.maxValue <= props.startValue || props.startValue <= props.maxValue ? inputErrorStyle : inputStyle} value={inputValue}
                   type={props.typeValue ? "text" : "number"}/>
        </div>
        <div>
            <UniversalButton
                value={props.value}
                title={'inc'}
                disabled={props.value === props.maxInputValue}
                universalFunction={props.buttonIncFunction}
            />
            <UniversalButton
                value={props.value}
                title={'reset'}
                universalFunction={props.buttonResetFunction}
            />
        </div>

    </div>

}