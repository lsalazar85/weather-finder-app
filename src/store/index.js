import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { reducer } from "./../reducers";

const initialState = {
    city: "",
    country: "",
    data: [],
    error: false
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
   reducer, 
   initialState,
   composeEnhancers(applyMiddleware(thunk))
   //() => {},
   // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);