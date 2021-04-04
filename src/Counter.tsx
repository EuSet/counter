import React from 'react';
import {UniversalButton} from "./UniversalButton";

type PropsType = {
    value: number
    startValue: number
    maxInputValue: number
    setValue: (value: number) => void
    buttonIncFunction: () => void
    buttonResetFunction: () => void
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
    return <div style={containerStyle}>
        <div>
            <input style={props.startValue > -1 ? inputStyle : inputErrorStyle} value={props.startValue > -1 ? props.value : 'incorrect value!'}
                   type={props.startValue > 0 ? "number" : "text"}/>
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