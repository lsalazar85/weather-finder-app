import { combineReducers } from "redux";
import { city } from "./city";
import { country } from "./country";
import { dataState } from "./data";
import { error } from "./error";

export const reducer = combineReducers({
    city,
    country,
    dataState,
    error
});

