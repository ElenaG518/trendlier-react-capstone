import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const SET_CATEGORY = 'SET_CATEGORY';
export const setCategory = category => ({
    type: SET_CATEGORY,
    category
});

export const FETCH_CATEGORY_DATA_SUCCESS = 'FETCH_CATEGORY_DATA_SUCCESS';
export const fetchCategoryDataSuccess = fetchedData => ({
    type: FETCH_CATEGORY_DATA_SUCCESS,
    fetchedData
});

export const FETCH_CATEGORY_DATA_ERROR = 'FETCH_CATEGORY_DATA_ERROR';
export const fetchCategoryDataError = error => ({
    type: FETCH_CATEGORY_DATA_ERROR,
    error
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
export const FETCH_EDIT_ITEM_SUCCESS = 'FETCH_EDIT_ITEM_SUCCESS';
export const fetchEditItemSuccess = itemToEdit => ({
    type: FETCH_EDIT_ITEM_SUCCESS,
    itemToEdit
});
export const FETCH_EDIT_ITEM_ERROR = 'FETCH_EDIT_ITEM_ERROR';
export const fetchEditItemError = error => ({
    type: FETCH_EDIT_ITEM_ERROR,
    error
});

export const fetchData = category => (dispatch, getState) => {
    
    console.log("fetchdata", category);
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
        purchaseUrl: item.itemPurchaseLink,
        regularPrice: item.regular,
        currentPrice: item.current,
        rating: item.averageScore,
        reviewsCount: item.count,
        description: item.description,
        notes: item.note,
        loggedInUserName: item.user
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

// export const editMemoInList = editedMemo => (dispatch, getState) => {
//     const authToken = getState().auth.authToken;
//     return fetch(`${API_BASE_URL}/api/mylist/edit-memo/${encodeURIComponent(editedMemo.id)}`, {
//         method: 'PUT',
//         body: JSON.stringify(editedMemo),
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json',
//             Authorization: `Bearer ${authToken}`
//         }
//     }).then(res => {
//         return res;
//     })
//     .catch(err => err);
// }




export const editItemNote = id => (dispatch, getState) => {
    console.log("editItemNote", id);
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/products/edit/${id}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${authToken}`
        }
        
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(data =>
            {   console.log("data", data);
                dispatch(fetchEditItemSuccess(data));
            }
        )
        .catch(err => {
            dispatch(fetchEditItemError(err));
        });
};

export const deleteWishlistItem = id => (dispatch, getState) => {
    console.log("deleteWishlistItem", id);
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/products/${id}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    })
    .then(res => normalizeResponseErrors(res))
    .then(() => console.log("success"))
    .catch(err => err);
    };