import React from 'react'
import {UniversalButton} from "./UniversalButton";
import s from './Settings.module.css'

type PropsType = {
    value:number,
    maxValue: number,
    startValue: number,
    addMaxValue: (e: React.ChangeEvent<HTMLInputElement>) => void,
    addStartValue: (e: React.ChangeEvent<HTMLInputElement>) => void,
    buttonOnClick: () => void
}
const spanStyle: React.CSSProperties = {color:'#F50057', fontWeight:'bold',paddingLeft:'18px'}

export const Settings = (props: PropsType) => {
    return <div>
        <div>
            <span style={spanStyle}>Max value</span><input  className={props.maxValue <= props.startValue ?  s.inputErrorStyle : s.inputTextStyle}
                                          value={props.maxValue} onChange={props.addMaxValue} type="number"/>
        </div>
        <div>
            <span style={spanStyle}>Min value</span><input
            className={props.startValue >= props.maxValue || props.startValue < 0 ? s.inputErrorStyle : s.inputTextStyle}
            value={props.startValue} onChange={props.addStartValue} type='number'/>
        </div>
        <div>
            <UniversalButton title={'Set'} disabled={props.maxValue <= props.startValue || props.startValue < 0}
                             universalFunction={props.buttonOnClick}/>
        </div>
    </div>
}