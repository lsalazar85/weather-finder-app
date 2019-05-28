import { GET_DATA } from '../actions';

export const data = (state = [], action) => {
    switch (action.type) {
        case GET_DATA:
            return { ...state, data: action.payload }
        default: 
            return state;
    }
}