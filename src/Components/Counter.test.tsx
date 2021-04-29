import {counterReducer, SET_INPUT_TYPE, SET_NEW_START_VALUE} from "./counter-reducer";

test('start value should be 7', () => {
    const initialState = {
        startValue: 0,
        value: 0,
        maxValue: 5,
        maxInputValue: 5,
        typeValue: false,
        showCounter: true,
        displayOptions: true,
    }
    const newState = counterReducer(initialState, {type: SET_NEW_START_VALUE, startValue:7})
    expect(newState.value).toBe(7)
})

test('type value to be true', () => {
    const initialState = {
        startValue: 0,
        value: 0,
        maxValue: 5,
        maxInputValue: 5,
        typeValue: false,
        showCounter: true,
        displayOptions: true,
    }
    const newState = counterReducer(initialState,  {type: SET_INPUT_TYPE, value:true})
    expect(newState.typeValue).toBe(true)
})