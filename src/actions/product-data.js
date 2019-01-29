import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const SET_CATEGORY = 'SET_CATEGORY';
export const setCategory = category => ({
    type: SET_CATEGORY,
    category
});
export const FETCH_CATEGORY_DATA = 'FETCH_CATEGORY_DATA';
export const fetchCategoryData = () => ({
    type: FETCH_CATEGORY_DATA,
    loading: true
})
export const FETCH_CATEGORY_DATA_SUCCESS = 'FETCH_CATEGORY_DATA_SUCCESS';
export const fetchCategoryDataSuccess = fetchedData => ({
    type: FETCH_CATEGORY_DATA_SUCCESS,
    fetchedData
});

export const FETCH_CATEGORY_DATA_ERROR = 'FETCH_CATEGORY_DATA_ERROR';
export const fetchCategoryDataError = error => ({
    type: FETCH_CATEGORY_DATA_ERROR,
    error, loading: false
});
export const ADD_WISHLIST_ITEM_SUCCESS = 'ADD_WISHLIST_ITEM_SUCCESS';
export const addWishlistItemSuccess = wishlistItem => ({
    type: ADD_WISHLIST_ITEM_SUCCESS,
    wishlistItem
});
export const ADD_WISHLIST_ITEM_ERROR = 'ADD_WISHLIST_ITEM_ERROR';
export const addWishlistItemError = error => ({
    type: ADD_WISHLIST_ITEM_ERROR,
    error
});
export const FETCH_WISHLIST_DATA = 'FETCH_WISHLIST_DATA';
export const fetchWishlistData = () => ({
    type: FETCH_WISHLIST_SUCCESS,
    loading: true
});
export const FETCH_WISHLIST_SUCCESS = 'FETCH_WISHLIST_SUCCESS';
export const fetchWishlistSuccess = wishlist => ({
    type: FETCH_WISHLIST_SUCCESS,
    wishlist
});
export const FETCH_WISHLIST_ERROR = 'FETCH_WISHLIST_ERROR';
export const fetchWishlistError = error => ({
    type: FETCH_WISHLIST_ERROR,
    error
});
export const CLEAR_FETCHED_DATA = 'CLEAR_FETCHED_DATA';
export const clearFetchedData = fetchedData => ({
    type: CLEAR_FETCHED_DATA,
    fetchedData
});
export const DELETE_ITEM_ERROR = 'DELETE_ITEM_ERROR';
export const deleteItemError = error => ({
    type: DELETE_ITEM_ERROR,
    error
});


export const fetchData = category => (dispatch, getState) => {
    
    dispatch(fetchCategoryData());
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/bestbuy/${category}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${authToken}`
        }
        
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(data =>
            {   console.log("data", data.results);
                dispatch(fetchCategoryDataSuccess(data.results));
            }
        )
        .catch(err => {
            dispatch(fetchCategoryDataError(err));
        });
};

export const addItem = item => (dispatch, getState) => {
    console.log("addItem", item);
    const authToken = getState().auth.authToken;

    const itemToAdd = {
        image: item.image,
        name: item.name,
        purchaseUrl: item.purchaseUrl,
        regularPrice: item.regularPrice,
        currentPrice: item.currentPrice,
        rating: item.rating,
        reviewsCount: item.reviewsCount,
        description: item.description,
        notes: item.notes,
        loggedInUserName: item.loggedInUserName
    }

    console.log(JSON.stringify(itemToAdd));

    return fetch(`${API_BASE_URL}/products/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${authToken}`
            },
            body: JSON.stringify(itemToAdd),
            })
            .then(res => normalizeResponseErrors(res))
            .then(res => res.json())
            .then(data =>
                {   console.log("data", data);
                dispatch(addWishlistItemSuccess(data));
                }
            )
            .catch(err => {
                dispatch(addWishlistItemError(err));
            });
    }

    export const fetchWishlist = user => (dispatch, getState) => {
        dispatch(fetchWishlistData());
        console.log("fetchWishlist", user);
        const authToken = getState().auth.authToken;
        return fetch(`${API_BASE_URL}/products/${user}`, {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${authToken}`
            }
            
        })
            .then(res => normalizeResponseErrors(res))
            .then(res => res.json())
            .then(data =>
                {   console.log("data", data);
                    dispatch(fetchWishlistSuccess(data));
                }
            )
            .catch(err => {
                dispatch(fetchWishlistError(err));
            });
    };

export const editWishlistItem = (note, id) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;

    const noteToUpdate = {
                notes: note, 
                id: id
        };
    console.log("this", noteToUpdate, id);
    return fetch(`${API_BASE_URL}/products/update/${id}`, {
        method: 'PUT',
        body: JSON.stringify(noteToUpdate),
        headers: {
            // 'Accept': 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${authToken}`
        }
    }).then(res => {
        return res;
    })
    .catch(err => err);
}

export const deleteWishlistItem = id => (dispatch, getState) => {
    console.log("deleteWishlistItem", id);
    const authToken = getState().auth.authToken;
    // dispatch(localDeleteItem);
    return fetch(`${API_BASE_URL}/products/${id}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    })
    .then(res => normalizeResponseErrors(res))
    .then(() =>
        {   console.log("success");
            
        }
    )
    .catch(err => {
        dispatch(deleteItemError(err));
    });
}    

    
