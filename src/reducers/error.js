import { SET_ERROR } from '../actions';

export const error = (state = [], action) => {
    switch (action.type) {
        case SET_ERROR:
            return { ...state, error: action.payload }
        default: 
            return state;
    }
}