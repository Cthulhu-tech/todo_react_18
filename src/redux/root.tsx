import { combineReducers, createStore } from "redux"
import { UserDataStore } from "./store/userData"

const rootReducer = combineReducers({
    UserDataStore
})

export const store = createStore(rootReducer)