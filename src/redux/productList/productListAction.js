import { FETCH_PRODUCT_LIST_REQUEST, FETCH_PRODUCT_LIST_SUCCESS, FETCH_PRODUCT_LIST_FAILURE } from "./productListActionTypes";

export const fetchProductListRequest = () => {
    return {
        type: FETCH_PRODUCT_LIST_REQUEST
    }
}

export const fetchProductListSuccess = data => {
    return {
        type: FETCH_PRODUCT_LIST_SUCCESS,
        payload: data
    }
}

export const fetchProductListFailure = error => {
    return {
        type: FETCH_PRODUCT_LIST_FAILURE,
        payload: error
    }
}