import { GET_COUNTRY_NAME } from '../actions';

export const countryName = (state = [], action) => {
    switch (action.type) {
        case GET_COUNTRY_NAME:
            return { ...state, countryName: action.payload }
        default: 
            return state;
    }
}