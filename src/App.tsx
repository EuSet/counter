import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./Counter";


function App() {
  const [value, setValue] = useState<number>(0)
  const [startValue, setStartValue] = useState<number>(0)
  const [maxValue, setMaxValue] = useState<number>(0)
  useEffect(() => {
    const valueAsString = localStorage.getItem('counterValue')
    if(valueAsString){
      const newValue = JSON.parse(valueAsString)
      setValue(newValue)
    }
  },[])
    useEffect(() => {
        localStorage.setItem('counterValue', JSON.stringify(value))
    },[value])

  const buttonIncFunction = () => {
      setValue(value+1)
  }
  const buttonResetFunction = () => {
    setValue(0)
  }

  return (
      <div className="App">
        <div>
         <span>Max value</span> <input value={maxValue} onChange={(e) => {setMaxValue(e.currentTarget.valueAsNumber)}} type="number"/>
          <span>Min value</span><input value={startValue} onChange={(e) => {setStartValue(e.currentTarget.valueAsNumber)}} type="number"/>
          <button onClick={() => {setValue(startValue)
          }} >Set</button>
        </div>
        <Counter
            maxValue={maxValue}
            value={value}
            setValue={setValue}
            buttonIncFunction={buttonIncFunction}
            buttonResetFunction={buttonResetFunction}
        />
      </div>
  );
}

export default App;
