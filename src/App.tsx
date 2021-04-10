import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./Components/Counter";
import {Settings} from "./Components/Settings";
import {Grid, Paper} from "@material-ui/core";
import {UniversalButton} from "./Components/Common/UniversalButton";


function App() {
    const [startValue, setStartValue] = useState<number>(0)
    const [value, setValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(5)
    const [maxInputValue, setMaxInputValue] = useState<number>(maxValue)
    const [typeValue, setTypeValue] = useState<boolean>(false)
    const [showCounter, setShowCounter] = useState<boolean>(true)
    const [displayOptions, setDisplayOptions] = useState<boolean>(false)

    useEffect(() => {
        const valueAsString = localStorage.getItem('counterValue')
        if (valueAsString) {
            const newValue = JSON.parse(valueAsString)
            setValue(newValue)
        }
    }, [])
    useEffect(() => {
        localStorage.setItem('counterValue', JSON.stringify(value))
    }, [value])

    const buttonIncFunction = () => {
        setValue(value + 1)
    }
    const buttonResetFunction = () => {
        setValue(startValue)
    }
    const addStartValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStartValue(e.currentTarget.valueAsNumber)
        setTypeValue(true)
        if (e.currentTarget.valueAsNumber < 0) {
            setMaxInputValue(value)
        }
    }
    const addMaxValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMaxValue(e.currentTarget.valueAsNumber)
        setTypeValue(true)
    }
    const buttonOnClick = () => {
        setValue(startValue)
        setMaxInputValue(maxValue)
        setTypeValue(false)
        setShowCounter(!showCounter)
    }

    return (
        <div className="App">
            <UniversalButton title={'Change'} universalFunction={() => {
                setDisplayOptions(!displayOptions)
            }}/>
            <Grid justify={'center'} alignItems={'center'} style={{height: '512px'}} container>
                {displayOptions ? showCounter ?
                    <Paper style={{padding: '30px 0', margin: '30px', backgroundColor: '#90a4ae'}} elevation={3}>
                        <Grid item>
                            <Settings maxValue={maxValue} startValue={startValue} addMaxValue={addMaxValue}
                                      addStartValue={addStartValue} buttonOnClick={buttonOnClick} value={value}/>
                        </Grid>
                    </Paper>
                    :
                    <Paper style={{padding: '40px 0', margin: '30px', backgroundColor: '#90a4ae'}} elevation={3}>
                        <Grid item>
                            <Counter
                                maxInputValue={maxInputValue}
                                maxValue={maxValue}
                                value={value}
                                setValue={setValue}
                                buttonIncFunction={buttonIncFunction}
                                buttonResetFunction={buttonResetFunction}
                                startValue={startValue}
                                typeValue={typeValue}
                                setShowCounter={setShowCounter}
                                displayOptions={displayOptions}
                            />
                        </Grid>
                    </Paper>
                    :
                    <div className={'container'}>
                        <Paper style={{padding: '30px 0', margin: '30px', backgroundColor: '#90a4ae'}} elevation={3}>
                            <Grid item>
                                <Settings maxValue={maxValue} startValue={startValue} addMaxValue={addMaxValue}
                                          addStartValue={addStartValue} buttonOnClick={buttonOnClick} value={value}/>
                            </Grid>
                        </Paper>
                        <Paper style={{padding: '40px 0', margin: '30px', backgroundColor: '#90a4ae'}} elevation={3}>
                            <Grid item>
                                <Counter
                                    maxInputValue={maxInputValue}
                                    maxValue={maxValue}
                                    value={value}
                                    setValue={setValue}
                                    buttonIncFunction={buttonIncFunction}
                                    buttonResetFunction={buttonResetFunction}
                                    startValue={startValue}
                                    typeValue={typeValue}
                                    setShowCounter={setShowCounter}
                                    displayOptions={displayOptions}
                                />
                            </Grid>
                        </Paper>
                    </div>}
            </Grid>
        </div>
    );
}

export default App;
