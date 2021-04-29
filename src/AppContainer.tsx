import {connect} from "react-redux";
import App from "./App";
import {
    counterReducer,
    setDisplayOptionsAC,
    setInputTypeAC,
    setMaxInputValueAC,
    setMaxValueAC,
    setNewStartValueAC,
    setNewValueAC,
    setShowCounterAC,
    setStartValueAC,
    setValuePlusOneAC,
    setValueResetAC
} from "./Components/counter-reducer";
import {StateType} from "./redux/store";

export const mapStateToProps = (state:StateType) => {
    return {
        state: state.counter
        // startValue: state.startValue,
        // value: state.value,
        // maxValue: state.maxValue,
        // maxInputValue: state.maxInputValue,
        // typeValue: state.typeValue,
        // showCounter: state.showCounter,
        // displayOptions: state.displayOptions
    }
}

export const AppContainer = connect(mapStateToProps, {
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
})(App)