import { 
    FETCH_CATEGORY_DATA_SUCCESS,
    FETCH_CATEGORY_DATA_ERROR,
    SET_CATEGORY,
    COLLECTED_DATA
}  from '../actions/index';

const initialState = {
    data: '',
    fetchedData: null,
    error: null, 
    category: ''
};

export default function reducer (state = initialState, action) {
    if (action.type === FETCH_CATEGORY_DATA_SUCCESS) {
        return Object.assign({}, state, {
            data: action.data,
            error: null
        });
    } else if (action.type === FETCH_CATEGORY_DATA_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    } 
    if (action.type === SET_CATEGORY) {
        return Object.assign({}, state, {
            category: action.category
        });
    } else if (action.type === COLLECTED_DATA) {
            return Object.assign({}, state, {
                fetchedData: action.fetchedData
            });
    }
    return state;
}    

