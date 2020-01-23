// ACTION TYPES
import { GET_COIN_DATA_START, SUCCESS, FAILURE } from '../actions/index.js';

const initialState = {
    isLoading: false,
    coins: null,
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COIN_DATA_START:
            return {
                ...state,
                isLoading: true
            }
        case SUCCESS:
            return {
                ...state,
                isLoading: false,
                coins: action.payload
            }
        case FAILURE:
            return {
                ...state,
                error: 'DATA COULD NOT BE RECEIVED.'
            }
        default:
            return state;
    }
}