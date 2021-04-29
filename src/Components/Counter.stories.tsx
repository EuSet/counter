import React, {useReducer} from 'react'
import {Counter, PropsType} from "./Counter";
import {Story} from "@storybook/react";
import {action} from "@storybook/addon-actions";
import {initialState, counterReducer, SET_VALUE_PLUS_ONE, SET_VALUE_RESET} from "./counter-reducer";

export default {
    title: 'Counter',
    component: Counter
}

const Template: Story<PropsType> = (args) => <Counter
    {...args}
    setShowCounterAC={showSetCallBack}
    buttonResetFunction={resetCallBack}
    buttonIncFunction={incCallBack}
/>
const showSetCallBack = action('show counter setting')
const resetCallBack = action('reset counter value')
const incCallBack = action('counter value +1')
export const Primary = Template.bind({});
Primary.args = {
    startValue: 0,
    value: 0,
    maxValue: 5,
    maxInputValue: 5,
    typeValue: false,
    displayOptions: true,
};

export const CounterWithReducer: Story<PropsType> = (args) => {
    const [state, dispatch] = useReducer(counterReducer, initialState)
    const showSetCallBack = action('show counter setting')

    return <Counter maxInputValue={state.maxInputValue}
                    maxValue={state.maxValue}
                    value={state.value}
                    startValue={state.startValue}
                    typeValue={state.typeValue}
                    displayOptions={state.displayOptions}
                    buttonIncFunction={() => {
                        dispatch({type: SET_VALUE_PLUS_ONE})
                    }}
                    buttonResetFunction={() => {
                        dispatch({type: SET_VALUE_RESET})
                    }}
                    setShowCounterAC={showSetCallBack}
                     
    />
}

