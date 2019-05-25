import { SET_COUNTRY_NAME } from '../actions';

export const country = (state = [], action) => {
    switch (action.type) {
        case SET_COUNTRY_NAME:
            return { ...state, country: action.payload }
        default: 
            return state;
    }
}