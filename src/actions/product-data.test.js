import {SET_CATEGORY, setCategory,
     FETCH_CATEGORY_DATA_SUCCESS, fetchCategoryDataSuccess,
     ADD_WISHLIST_ITEM_SUCCESS, addWishlistItemSuccess,
     FETCH_WISHLIST_SUCCESS, fetchWishlistSuccess

 } from './product-data';

describe('setCategory', () => {
    it('Should return the action', () => {
        const category = 'laptops';
        const action = setCategory(category);
        expect(action.type).toEqual(SET_CATEGORY);
        expect(action.category).toEqual(category);
    });
});

describe('fetchCategoryDataSuccess', () => {
    it('Should return the action', () => {
        const fetchedData = {name: "Elena"};
        const action = fetchCategoryDataSuccess(fetchedData);
        expect(action.type).toEqual(FETCH_CATEGORY_DATA_SUCCESS);
        expect(action.fetchedData).toEqual(fetchedData);
    });
});

describe('addWishlistItemSuccess', () => {
    it('Should return the action', () => {
        const wishlistItem = {name: "Elena"};
        const action = addWishlistItemSuccess(wishlistItem);
        expect(action.type).toEqual(ADD_WISHLIST_ITEM_SUCCESS);
        expect(action.wishlistItem).toEqual(wishlistItem);
    });
});

describe('fetchWishlistSuccess', () => {
    it('Should return the action', () => {
        const wishlist = {name: "Elena"};
        const action = fetchWishlistSuccess(wishlist);
        expect(action.type).toEqual(FETCH_WISHLIST_SUCCESS);
        expect(action.wishlist).toEqual(wishlist);
    });
});