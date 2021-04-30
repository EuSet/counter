import {combineReducers, createStore} from "redux"
import {counterReducer} from "../Components/counter-reducer";
import {loadState, saveState} from "../utills/localStorage";

// export type StateType = {
//     counter: InitialStateType
// }

const rootReducer = combineReducers({
    counter: counterReducer,
})
export let store = createStore(rootReducer, loadState())

store.subscribe(() => {
    saveState({
        counter: store.getState().counter
    });
});

export type StateType = ReturnType<typeof rootReducer>
type AppStoreType = typeof store