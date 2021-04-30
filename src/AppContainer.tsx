import {connect} from "react-redux";
import App from "./App";
import {
    setDisplayOptionsAC,
    setInputTypeAC,
    setMaxInputValueAC,
    setMaxValueAC,
    setNewStartValueAC,
    setShowCounterAC,
    setStartValueAC,
    setValuePlusOneAC,
    setValueResetAC
} from "./Components/counter-reducer";
import {StateType} from "./redux/store";

export const mapStateToProps = (state:StateType) => {
    return {
        state: state.counter
    }
}

export const AppContainer = connect(mapStateToProps, {
    setDisplayOptionsAC,
    setMaxInputValueAC,
    setMaxValueAC,
    setNewStartValueAC,
    setShowCounterAC,
    setStartValueAC,
    setInputTypeAC,
    setValuePlusOneAC,
    setValueResetAC
})(App)