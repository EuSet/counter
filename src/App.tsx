import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Counter";


function App() {
  const [value, setValue] = useState<number>(0)
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
