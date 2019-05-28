import { combineReducers } from "redux";
import { city } from "./city";
import { country } from "./country";
import { data} from "./data";
import { error } from "./error";

export const reducer = combineReducers({
    city,
    country,
    data,
    error
});

