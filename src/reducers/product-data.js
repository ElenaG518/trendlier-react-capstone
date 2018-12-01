import { 
    FETCH_CATEGORY_DATA_SUCCESS,
    FETCH_CATEGORY_DATA_ERROR,
    SET_CATEGORY, 
    ADD_WISHLIST_ITEM_SUCCESS,
    ADD_WISHLIST_ITEM_ERROR,
    FETCH_WISHLIST_SUCCESS,
    FETCH_WISHLIST_ERROR
    // FETCH_EDIT_ITEM_SUCCESS,
    // FETCH_EDIT_ITEM_ERROR
}  from '../actions/product-data';

const initialState = {
    data: '',
    fetchedData: null,
    error: null, 
    category: '',
    wishlistItem: {},
    itemToEdit: null    
};

export default function reducer (state = initialState, action) {
    if (action.type === FETCH_CATEGORY_DATA_SUCCESS) {
        return Object.assign({}, state, {
        fetchedData: action.fetchedData,
            error: null
        });
    } else if (action.type === FETCH_CATEGORY_DATA_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    } else if (action.type === SET_CATEGORY) {
        return Object.assign({}, state, {
            category: action.category
        });
        
    } else if (action.type === ADD_WISHLIST_ITEM_SUCCESS) {
        return Object.assign({}, state, {
            wishlistItem: action.wishlistItem
        });
        
    } else if (action.type === ADD_WISHLIST_ITEM_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
        
    } else if (action.type === FETCH_WISHLIST_SUCCESS) {
        return Object.assign({}, state, {
            wishlist: action.wishlist
        });
    } else if (action.type === FETCH_WISHLIST_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    } 
    // else if (action.type === FETCH_EDIT_ITEM_SUCCESS) {
    //     return Object.assign({}, state, {
    //         itemToEdit: action.itemToEdit
    //     });
    // } else if (action.type === FETCH_EDIT_ITEM_ERROR) {
    //     return Object.assign({}, state, {
    //         error: action.error
    //     });
    // }                
    return state;
}    

