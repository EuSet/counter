import {createStore, combineReducers} from "redux"
import {counterReducer, InitialStateType} from "../Components/counter-reducer";

export type StateType = {
    counter: InitialStateType
}

const reducers = combineReducers({
    counter: counterReducer,
})

export let store = createStore(reducers)