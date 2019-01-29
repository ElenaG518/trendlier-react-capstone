import { 
    FETCH_CATEGORY_DATA_SUCCESS,
    FETCH_CATEGORY_DATA_ERROR,
    SET_CATEGORY, 
    ADD_WISHLIST_ITEM_SUCCESS,
    ADD_WISHLIST_ITEM_ERROR,
    FETCH_WISHLIST_SUCCESS,
    FETCH_WISHLIST_ERROR,
    CLEAR_FETCHED_DATA,
    FETCH_CATEGORY_DATA

}  from '../actions/product-data';

const initialState = {
    data: '',
    fetchedData: null,
    error: null, 
    category: '',
    loading: false
};

export default function reducer (state = initialState, action) {
    if (action.type === FETCH_CATEGORY_DATA_SUCCESS) {
        return Object.assign({}, state, {
        fetchedData: action.fetchedData,
            error: null,
            loading: true
        });
    } else if (action.type === FETCH_CATEGORY_DATA_ERROR) {
        return Object.assign({}, state, {
            error: action.error,
            loading: true
        });
    } else if (action.type === SET_CATEGORY) {
        return Object.assign({}, state, {
            category: action.category
        });
        
    } else if (action.type === ADD_WISHLIST_ITEM_SUCCESS) {
        return Object.assign({}, state, {
            wishlistItem: action.wishlistItem,
            error: null
        });
        
    } else if (action.type === ADD_WISHLIST_ITEM_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
        
    } else if (action.type === FETCH_WISHLIST_SUCCESS) {
        return Object.assign({}, state, {
            wishlist: action.wishlist,
            error: null
        });
    } else if (action.type === FETCH_WISHLIST_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    } else if (action.type === CLEAR_FETCHED_DATA) {
        return Object.assign({}, state, {
            fetchedData: action.fetchedData
        });
    } else if (action.type === FETCH_CATEGORY_DATA) {
        return Object.assign({}, state, {
            loading: action.loading
        });
    }
         
    return state;
}    
