import { GET_CITY_NAME} from '../actions';

export const city = (state = [], action) => {
    switch (action.type) {
        case GET_CITY_NAME:
            return { ...state, city: action.payload }
        default: 
            return state;
    }
}