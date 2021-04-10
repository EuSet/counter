import React from 'react';
import {UniversalButton} from "./Common/UniversalButton";
import c from './Counter.module.css'

type PropsType = {
    value: number
    maxValue:number
    startValue: number
    maxInputValue: number
    setValue: (value: number) => void
    buttonIncFunction: () => void
    buttonResetFunction: () => void
    typeValue:boolean
    setShowCounter:(toggle:boolean) => void
    displayOptions:boolean
}

export const Counter = (props: PropsType) => {
    const valueCondition = props.maxValue <= props.startValue || props.startValue < 0
    const inputValue = props.typeValue  ? valueCondition ? 'incorrect value!' : 'enter values and press set' : props.value
    return <div className={c.containerStyle}>
        <div>
            <input style={props.maxValue === props.value ? {color:'#F50057'} : {}} className={valueCondition ? c.inputErrorStyle : c.inputTextStyle} value={inputValue}
                   type={props.typeValue ? "text" : "number"}/>
        </div>
        <div>
            <UniversalButton
                value={props.value}
                title={'inc'}
                disabled={props.value === props.maxInputValue || props.typeValue}
                universalFunction={props.buttonIncFunction}
            />
            <UniversalButton
                disabled={props.typeValue}
                value={props.value}
                title={'reset'}
                universalFunction={props.buttonResetFunction}
            />
            {props.displayOptions ? <UniversalButton
                title={'Set'}
                universalFunction={() => {props.setShowCounter(true)}}
            /> : null }

        </div>

    </div>

}