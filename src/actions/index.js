import { apiKey, metric, url_root } from "../constants/api_parts";
const countries = require("i18n-iso-countries");
countries.registerLocale(require("i18n-iso-countries/langs/en.json"));

export const SET_CITY_NAME = "SET_CITY_NAME";
export const SET_COUNTRY_NAME = "SET_COUNTRY_NAME";
export const SET_ERROR = "SET_ERROR";
export const GET_DATA = "GET_DATA";

export const setCity = payload => ({ type: SET_CITY_NAME, payload });
export const setCountryName = payload => ({ type: SET_COUNTRY_NAME, payload });
export const setError = payload => ({ type: SET_ERROR, payload });
const getData = payload => ({ type: GET_DATA, payload });

export const fetchData = payload => {
    return dispatch => {
        fetch(`${url_root}${payload}${apiKey}${metric}`).then(
            resp => (resp.json())
        ).then (
            (data) => {
                dispatch(getData(data))
            }
        )
    }
}