import { combineReducers } from "redux";
import { basketReduser } from "./basketReducer";


export const rootReducer = combineReducers({
    basket: basketReduser,
})

export type RootState = ReturnType<typeof rootReducer>