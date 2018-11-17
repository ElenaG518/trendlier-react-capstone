import {
    FETCH_PROTECTED_DATA_SUCCESS,
    FETCH_PROTECTED_DATA_ERROR, 
    GET_CATEGORY
} from '../actions/protected-data';

const initialState = {
    data: '',
    error: null, 
    category: null
};

export default function reducer(state = initialState, action) {
    if (action.type === FETCH_PROTECTED_DATA_SUCCESS) {
        return Object.assign({}, state, {
            data: action.data,
            error: null
        });
    } else if (action.type === FETCH_PROTECTED_DATA_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    } else if (action.type === GET_CATEGORY) {
        return Object.assign({}, state, {
            category: action.category
        });
    }
    return state;
}