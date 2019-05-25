import { GET_COUNTRY_CODE } from '../actions';

export const countryCode = (state = [], action) => {
    switch (action.type) {
        case GET_COUNTRY_CODE:
            return { ...state, countryCode: action.payload }
        default: 
            return state;
    }
}