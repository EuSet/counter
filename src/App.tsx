import React, {useEffect, useReducer} from 'react';
import './App.css';
import {Counter} from "./Components/Counter";
import {Settings} from "./Components/Settings";
import {Grid, Paper} from "@material-ui/core";
import {UniversalButton} from "./Components/Common/UniversalButton";
import {
    initialState,
    reducer,
    setDisplayOptionsAC,
    setMaxInputValueAC,
    setMaxValueAC,
    setNewStartValueAC,
    setNewValueAC,
    setShowCounterAC,
    setStartValueAC,
    setInputTypeAC,
    setValuePlusOneAC,
    setValueResetAC
} from "./Components/reducer";


function App() {

    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        const valueAsString = localStorage.getItem('counterValue')
        if (valueAsString) {
            const newValue = JSON.parse(valueAsString)
            dispatch(setNewValueAC(newValue))
        }
    }, [])
    useEffect(() => {
        localStorage.setItem('counterValue', JSON.stringify(state.value))
    }, [state.value])

    const buttonIncFunction = () => {
        dispatch(setValuePlusOneAC())
    }
    const buttonResetFunction = () => {
        dispatch(setValueResetAC())
    }
    const addStartValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setStartValueAC(e.currentTarget.valueAsNumber))
        dispatch(setInputTypeAC(true))
        if (e.currentTarget.valueAsNumber < 0) {
            dispatch(setMaxInputValueAC(state.value))
        }
    }
    const addMaxValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setMaxValueAC(e.currentTarget.valueAsNumber))
        dispatch(setInputTypeAC(true))
    }
    const buttonOnClick = () => {
        dispatch(setNewStartValueAC(state.startValue))
        dispatch(setMaxInputValueAC(state.maxValue))
        dispatch(setInputTypeAC(false))
        dispatch(setShowCounterAC(!state.showCounter))
    }
    const setButtonOnClick = (value:boolean) => {
        dispatch(setShowCounterAC(value))
    }
    const settings = <Paper style={{padding: '30px 0', margin: '30px', backgroundColor: '#90a4ae'}} elevation={3}>
        <Grid item>
            <Settings maxValue={state.maxValue} startValue={state.startValue} addMaxValue={addMaxValue}
                      addStartValue={addStartValue} buttonOnClick={buttonOnClick} value={state.value}/>
        </Grid>
    </Paper>
    const counter = <Paper style={{padding: '40px 20px', margin: '30px', backgroundColor: '#90a4ae'}} elevation={3}>
        <Grid item>
            <Counter
                maxInputValue={state.maxInputValue}
                maxValue={state.maxValue}
                value={state.value}
                // setValue={setValue}
                buttonIncFunction={buttonIncFunction}
                buttonResetFunction={buttonResetFunction}
                startValue={state.startValue}
                typeValue={state.typeValue}
                setShowCounterAC={setButtonOnClick}
                displayOptions={state.displayOptions}
            />
        </Grid>
    </Paper>
    return (
        <div className="App">
            <UniversalButton title={'Change'} universalFunction={() => {
                dispatch(setDisplayOptionsAC(!state.displayOptions))
            }}/>
            <Grid justify={'center'} alignItems={'center'} container>
                {state.displayOptions ? state.showCounter ?
                    <div className={'container'}>
                    {settings}
                    </div>
                    :
                    <div className={'container'}>
                    {counter}
                    </div>
                    :
                    <div className={'container'}>
                        {settings}
                        {counter}
                    </div>}
            </Grid>
        </div>
    );
}

export default App;
