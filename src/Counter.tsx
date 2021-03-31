import React from 'react';
import {UniversalButton} from "./UniversalButton";

type PropsType = {
    value: number
    counterPlus: () => void
    setValue:(value:number) => void
    universalFunction:() => void
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
            {/*<button disabled={props.value === 5} onClick={() => {props.counterPlus()}}>inc</button>*/}
            {/*<button disabled={props.value < 5} onClick={() => {props.setValue(0)}}>reset</button>*/}
            <UniversalButton
                value={props.value}
                title={'inc'}
                disabled={props.value === 5}
                universalFunction={props.universalFunction}
            />
            <UniversalButton
                value={props.value}
                title={'reset'}
                disabled={props.value < 5}
                universalFunction={props.universalFunction}
            />
        </div>

    </div>

}