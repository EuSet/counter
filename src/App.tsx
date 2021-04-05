import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./Counter";


function App() {
    const [value, setValue] = useState<number>(0)
    const [startValue, setStartValue] = useState<number>(0)
    const [maxInputValue, setMaxInputValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(0)
    const [typeValue, setTypeValue] = useState<boolean>(false)

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
    const addStartValue = (e:React.ChangeEvent<HTMLInputElement>) => {
        setStartValue(e.currentTarget.valueAsNumber)
        setTypeValue(true)
        if(e.currentTarget.valueAsNumber < 0){
            setMaxInputValue(value)
        }
    }
    const addMaxValue = (e:React.ChangeEvent<HTMLInputElement>) => {
        setMaxValue(e.currentTarget.valueAsNumber)
        setTypeValue(true)
    }
    const buttonOnClick = () => {
        setValue(startValue)
        setMaxInputValue(maxValue)
        setTypeValue(false)
    }

    return (
        <div className="App">
            <div>
                <span>Max value</span> <input className={maxValue <= startValue ? 'errorInput' : ''} value={maxValue} onChange={addMaxValue} type="number"/>
                <span>Min value</span><input className={startValue <= maxValue ? 'errorInput' : ''} value={startValue} onChange={addStartValue} type='number' />
                <button
                    disabled={startValue < 0}
                    onClick={buttonOnClick}>Set
                </button>
            </div>
            <Counter
                maxInputValue={maxInputValue}
                maxValue={maxValue}
                value={value}
                setValue={setValue}
                buttonIncFunction={buttonIncFunction}
                buttonResetFunction={buttonResetFunction}
                startValue={startValue}
                typeValue={typeValue}
            />
        </div>
    );
}

export default App;
