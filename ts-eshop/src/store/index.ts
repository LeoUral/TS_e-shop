import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import { reduserProduct } from './redusers/reduserProducts'

const rootReduser = combineReducers({
    products: reduserProduct
})


export const store = createStore(rootReduser, applyMiddleware(thunk))