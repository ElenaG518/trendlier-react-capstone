import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';


export const SET_CATEGORY = 'SET_CATEGORY';
export const setCategory = category => ({
    type: SET_CATEGORY,
    category
});

export const FETCH_CATEGORY_DATA_SUCCESS = 'FETCH_CATEGORY_DATA_SUCCESS';
export const fetchCategoryDataSuccess = data => ({
    type: FETCH_CATEGORY_DATA_SUCCESS,
    data
});

export const FETCH_CATEGORY_DATA_ERROR = 'FETCH_CATEGORY_DATA_ERROR';
export const fetchCategoryDataError = error => ({
    type: FETCH_CATEGORY_DATA_ERROR,
    error
});

export const COLLECTED_DATA = "COLLECTED_DATA";
export const collectedData = data => ({
    type: COLLECTED_DATA,
    fetchedData: data
});
export const SHOW_MYLIST = "SHOW_MYLIST";
export const showMyList = data => ({
    type: SHOW_MYLIST,
    mylist: data
})

export const fetchData = category => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/bestbuy/${category}`, {
        method: 'GET',
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(({data}) => dispatch(fetchCategoryDataSuccess(data)))
        .catch(err => {
            dispatch(fetchCategoryDataError(err));
        });
};

export const fetchMyList = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/products/:username`, {
            method: 'GET',
            headers: {
                // Provide our auth token as credentials
                Authorization: `Bearer ${authToken}`
            }
        })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(data => dispatch(showMyList(data)))
        .catch(err => {
            dispatch(fetchCategoryDataError(err));
        });
}





// export const addList = item => (dispatch, getState) => {
//     const authToken = getState().auth.authToken;

//     const venueDetail = item.detail;
//     const detailVenueName = venueDetail.name;
//     const detailCategory = venueDetail.categories[0].name;
//     const detailAddress1 = venueDetail.location.formattedAddress[0];
//     const detailAddress2 = venueDetail.location.formattedAddress[1];
//     const detailAddress = `${detailAddress1}, ${detailAddress2}`;
//     const lat = venueDetail.location.lat;
//     const lng = venueDetail.location.lng;
//     const venueId = venueDetail.id;

//     let detailPhoneNumber = "";
//     let detailDescription = "";
//     let detailWebsite = "";
//     let detailPhoto1 = "";
//     let detailPhoto2 = "";

//     if(venueDetail.contact.formattedPhone === undefined){
//         detailPhoneNumber = "Sorry.. No Phone number is available"
//     } else {
//         detailPhoneNumber = venueDetail.contact.formattedPhone;
//     };

//     if(venueDetail.description === undefined){
//         detailDescription = "Sorry.. No Description is available"
//     } else {
//         detailDescription = venueDetail.description;
//     };

//     if(venueDetail.url === undefined){
//         detailWebsite = "Sorry.. No Website is available"
//     } else {
//         detailWebsite = venueDetail.url;
//     };













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




// export const fetchToEdit = id => (dispatch, getState) => {

//     const authToken = getState().auth.authToken;
//     return fetch(`${API_BASE_URL}/api/mylist/${encodeURIComponent(id)}`, {
//             method: 'GET',
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json',
//                 Authorization: `Bearer ${authToken}`
//             }
//         })
//         .then(res => res.json())
//         .then(json => dispatch(editMemoItem(json)))
// }



// export const deletePost = id => (dispatch, getState) => {
//     console.log(id)

//     const authToken = getState().auth.authToken;
//     return fetch(`${API_BASE_URL}/api/mylist/${encodeURIComponent(id)}`, {
//             method: 'DELETE',
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json',
//                 Authorization: `Bearer ${authToken}`
//             }
//         })
//         .catch(err => err);
// }