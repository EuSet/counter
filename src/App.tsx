import React, {useEffect} from 'react';
import './App.css';
import {Counter} from "./Components/Counter";
import {Settings} from "./Components/Settings";
import {Grid, Paper} from "@material-ui/core";
import {UniversalButton} from "./Components/Common/UniversalButton";
import {InitialStateType} from "./Components/counter-reducer";

type PropsType = {
    state:InitialStateType,
    setDisplayOptionsAC: (value:boolean) => void
    setMaxInputValueAC: (value:number) => void
    setMaxValueAC: (event: number) => void
    setNewStartValueAC: (value:number) => void
    setNewValueAC: (newValue: number) => void
    setShowCounterAC: (value:boolean) => void
    setStartValueAC: (event:number) => void
    setInputTypeAC: (value: boolean) => void
    setValuePlusOneAC: () => void
    setValueResetAC: () => void

}

export const App: React.FC<PropsType> = ({state,...props }) => {

    // const [state, dispatch] = useReducer(counterReducer, initialState)

    useEffect(() => {
        const valueAsString = localStorage.getItem('counterValue')
        if (valueAsString) {
            const newValue = JSON.parse(valueAsString)
            props.setNewValueAC(newValue)
        }
    }, [])
    useEffect(() => {
        localStorage.setItem('counterValue', JSON.stringify(state.value))
    }, [state.value])

    const buttonIncFunction = () => {
        props.setValuePlusOneAC()
    }
    const buttonResetFunction = () => {
        props.setValueResetAC()
    }
    const addStartValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.setStartValueAC(e.currentTarget.valueAsNumber)
        props.setInputTypeAC(true)
        if (e.currentTarget.valueAsNumber < 0) {
            props.setMaxInputValueAC(state.value)
        }
    }
    const addMaxValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.setMaxValueAC(e.currentTarget.valueAsNumber)
        props.setInputTypeAC(true)
    }
    const buttonOnClick = () => {
        props.setNewStartValueAC(state.startValue)
        props.setMaxInputValueAC(state.maxValue)
        props.setInputTypeAC(false)
        props.setShowCounterAC(!state.showCounter)
    }
    const setButtonOnClick = (value:boolean) => {
        props.setShowCounterAC(value)
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
                props.setDisplayOptionsAC(!state.displayOptions)
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
