import { combineReducers } from "redux";
import { city } from "./city";
import { countryCode } from "./country-code";
import { countryName } from "./country-name";
import { dataState } from "./data";
import { error } from "./error";

export const reducer = combineReducers({
    city,
    countryCode,
    countryName,
    dataState,
    error
});

