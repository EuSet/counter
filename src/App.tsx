import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./Counter";


function App() {
  const [value, setValue] = useState<number>(0)
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
  const counterPlus = () => {
    if(value < 5){
      setValue(value+1)
    }
  }

  const universalFunction = () => {
    if(value < 5){
      setValue(value+1)
    }else {
      setValue(0)
    }
  }
  return (
      <div className="App">
        <Counter
            value={value}
            counterPlus={counterPlus}
            setValue={setValue}
            universalFunction={universalFunction}
        />
      </div>
  );
}

export default App;
