import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./Counter";


function App() {
    const [value, setValue] = useState<number>(0)
    const [startValue, setStartValue] = useState<number>(0)
    const [maxInputValue, setMaxInputValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(0)

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
        setValue(0)
    }
    const addStartValue = (e:React.ChangeEvent<HTMLInputElement>) => {
        setStartValue(e.currentTarget.valueAsNumber)
        if(e.currentTarget.valueAsNumber < 0){
            setMaxInputValue(value)
        }
    }

    return (
        <div className="App">
            <div>
                <span>Max value</span> <input value={maxValue} onChange={(e) => {
                setMaxValue(e.currentTarget.valueAsNumber)
            }} type="number"/>
                <span>Min value</span><input className={startValue < 0 ? 'errorInput' : ''} value={startValue} onChange={addStartValue} type='number' />
                <button onClick={() => {
                    setValue(startValue)
                    setMaxInputValue(maxValue)
                }}>Set
                </button>
            </div>
            <Counter
                maxInputValue={maxInputValue}
                value={value}
                setValue={setValue}
                buttonIncFunction={buttonIncFunction}
                buttonResetFunction={buttonResetFunction}
                startValue={startValue}
            />
        </div>
    );
}

export default App;
