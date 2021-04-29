export type InitialStateType = {
    startValue: number
    value: number
    maxValue: number
    maxInputValue: number
    typeValue: boolean
    showCounter: boolean
    displayOptions: boolean
}
export type ActionType = ReturnType<typeof setValuePlusOneAC>
    | ReturnType<typeof setNewValueAC>
    | ReturnType<typeof setValueResetAC>
    | ReturnType<typeof setNewStartValueAC>
    | ReturnType<typeof setStartValueAC>
    | ReturnType<typeof setInputTypeAC>
    | ReturnType<typeof setMaxInputValueAC>
    | ReturnType<typeof setMaxValueAC>
    | ReturnType<typeof setShowCounterAC>
    | ReturnType<typeof setDisplayOptionsAC>
export const initialState = {
    startValue: 0,
    value: 0,
    maxValue: 5,
    maxInputValue: 5,
    typeValue: false,
    showCounter: true,
    displayOptions: true,
}
export const SET_VALUE_PLUS_ONE = 'SET_VALUE_PLUS_ONE'
export const SET_VALUE_RESET = 'SET_VALUE_RESET'
export const SET_NEW_VALUE = 'SET_NEW_VALUE'
export const SET_NEW_START_VALUE = 'SET_NEW_START_VALUE'
export const SET_START_CURRENT_VALUE = 'SET_START_CURRENT_VALUE'
export const SET_INPUT_TYPE = 'SET_INPUT_TYPE'
export const SET_MAX_INPUT_VALUE = 'SET_MAX_INPUT_VALUE'
export const SET_MAX_VALUE = 'SET_MAX_VALUE'
export const SET_SHOW_COUNTER = 'SET_SHOW_COUNTER'
export const SET_DISPLAY_OPTIONS = 'SET_DISPLAY_OPTIONS'

export const counterReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case SET_VALUE_PLUS_ONE:
            return {
                ...state,
                value: state.value + 1
            }
        case SET_VALUE_RESET:
            return {
                ...state,
                value: state.startValue
            }
        case SET_NEW_VALUE:
            return {
                ...state,
                value: action.newValue
            }
        case SET_NEW_START_VALUE:
            return {
                ...state,
                value: action.startValue
            }
        case SET_START_CURRENT_VALUE:
            return {
                ...state,
                startValue: action.currentValue
            }
        case SET_INPUT_TYPE:
            return {
                ...state,
                typeValue: action.value
            }
        case SET_MAX_INPUT_VALUE:
            return {
                ...state,
                maxInputValue: action.value
            }
        case SET_MAX_VALUE:
            return {
                ...state,
                maxValue: action.value
            }
        case SET_SHOW_COUNTER:
            return {
                ...state,
                showCounter: action.value
            }
        case SET_DISPLAY_OPTIONS:
            return {
                ...state,
                displayOptions: !state.displayOptions
            }
        default:
            return state
    }
}

export const setValuePlusOneAC = () => {
    return {type: SET_VALUE_PLUS_ONE} as const
}
export const setValueResetAC = () => {
    return {type: SET_VALUE_RESET} as const
}
export const setNewValueAC = (newValue: number) => {
    return {type: SET_NEW_VALUE, newValue} as const
}
export const setNewStartValueAC = (startValue: number) => {
    return {type: SET_NEW_START_VALUE, startValue} as const
}
export const setStartValueAC = (currentValue: number) => {
    return {type: SET_START_CURRENT_VALUE, currentValue} as const
}
export const setInputTypeAC = (value: boolean) => {
    return {type: SET_INPUT_TYPE, value} as const
}
export const setMaxInputValueAC = (value: number) => {
    return {type: SET_MAX_INPUT_VALUE, value} as const
}
export const setMaxValueAC = (value: number) => {
    return {type: SET_MAX_VALUE, value} as const
}
export const setShowCounterAC = (value: boolean) => {
    return {type: SET_SHOW_COUNTER, value} as const
}
export const setDisplayOptionsAC = (value: boolean) => {
    return {type: SET_DISPLAY_OPTIONS, value} as const
}