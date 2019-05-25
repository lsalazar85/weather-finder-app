import { createStore } from "redux";
import { reducer } from "./../reducers";

const initialState = {
    countryName: "",
    countryCode: "",
    city: "",
    data: [],
    error: false
}

export const store = createStore(
   reducer, 
   initialState,
   //() => {},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);