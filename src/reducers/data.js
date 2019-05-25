import { GET_DATA } from '../actions';

export const dataState = (state = [], action) => {
    switch (action.type) {
        case GET_DATA:
            return { ...state, data: action.payload }
        default: 
            return state;
    }
}