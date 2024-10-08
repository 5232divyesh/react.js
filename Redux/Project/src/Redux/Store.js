import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer as AuthReducer } from "./Auth/reducer";
import { thunk } from "redux-thunk";
import { reducer as ProductReducer } from "./Product/reducer";

const root = combineReducers({ AuthReducer, ProductReducer });
export const store = legacy_createStore(root, applyMiddleware(thunk));
