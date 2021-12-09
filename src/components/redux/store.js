import {combineReducers, createStore} from "redux";
import todoReducer from "./reducers";


export const rootReducer = combineReducers({
    items: todoReducer,
})

export const store = createStore(rootReducer)

