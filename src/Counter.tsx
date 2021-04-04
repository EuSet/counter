import React from 'react';
import {UniversalButton} from "./UniversalButton";

type PropsType = {
    value: number
    maxValue:number
    setValue:(value:number) => void
    buttonIncFunction:() => void
    buttonResetFunction:() => void
}
const inputStyle = {
    padding: '20px',
    textAlign: 'center' as 'center'
}
const containerStyle = {
    display: 'inline-block'
}
export const Counter = (props:PropsType) => {
    return <div style={containerStyle}>
        <div>
            <input style={inputStyle} value={props.value}/>
        </div>
        <div>
            <UniversalButton
                value={props.value}
                title={'inc'}
                disabled={props.value === props.maxValue}
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