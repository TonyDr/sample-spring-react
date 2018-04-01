import axios from "axios";

export const FETCH_ITEMS = "FETCH_ITEMS";
export const FETCH_ITEMS_FULFILLED = "FETCH_ITEMS_FULFILLED";

export const SAVE_ITEM_START = "SAVE_ITEM_START";
export const SAVE_ITEM_FULFILLED = "SAVE_ITEM_FULFILLED";
export const SAVE_ITEM_REJECTED = "SAVE_ITEM_REJECTED";

export function fetchItems() {
    return function(dispatch) {
        dispatch({type: FETCH_ITEMS});

        axios.get("/api/items")
            .then((response) => {
                dispatch({type: FETCH_ITEMS_FULFILLED, payload: response.data})
            })
            .catch((err) => {
                dispatch({type: "FETCH_ITEMS_REJECTED", payload: err})
            })
    }
}

export function saveItem(data) {
    return function(dispatch) {
        dispatch({type: SAVE_ITEM_START});

        axios.get("/api/items")
            .then((response) => {
                dispatch({type: SAVE_ITEM_FULFILLED, payload: response.data})
            })
            .catch((err) => {
                dispatch({type: SAVE_ITEM_REJECTED, payload: err.message})
            })
    }
}